import { GoogleGenAI, Type } from '@google/genai';
import { Question } from '../types';

// Per guidelines, initialize with named parameter from environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const module2Schema = {
  type: Type.OBJECT,
  properties: {
    thirdFactor: {
      type: Type.STRING,
      description: 'Feedback for the "Alternate Cause (Third Factor)" answer. Be encouraging but clear. Keep it to 2-3 sentences.'
    },
    reverseCausation: {
      type: Type.STRING,
      description: 'Feedback for the "Reverse Causation Scenario" answer. Be encouraging but clear. Keep it to 2-3 sentences.'
    }
  },
  required: ['thirdFactor', 'reverseCausation']
};

const module3Schema = {
    type: Type.OBJECT,
    properties: {
      causeWithoutEffect: {
        type: Type.STRING,
        description: 'Feedback for the "Cause without Effect" answer. Be encouraging but clear. Keep it to 2-3 sentences.'
      },
      effectWithoutCause: {
        type: Type.STRING,
        description: 'Feedback for the "Effect without Cause" answer. Be encouraging but clear. Keep it to 2-3 sentences.'
      }
    },
    required: ['causeWithoutEffect', 'effectWithoutCause']
};


export const analyzeModule2Answer = async (
  question: Question,
  thirdFactor: string,
  reverseCausation: string
): Promise<{ thirdFactor: string; reverseCausation: string }> => {
  const prompt = `
    You are an expert LSAT tutor specializing in causal reasoning. Your tone is encouraging, sharp, and helpful.
    A student is working on a causal reasoning drill.
    The original argument is: "${question.stem}"
    The student was asked to provide two types of alternate explanations to weaken the argument.

    1.  **Alternate Cause (Third Factor):** The student proposed: "${thirdFactor}"
    2.  **Reverse Causation Scenario:** The student proposed: "${reverseCausation}"

    Your task is to provide concise feedback for each of the student's proposals in JSON format.
    - For the "Third Factor," evaluate if it plausibly could cause BOTH the original cause and the original effect.
    - For "Reverse Causation," evaluate if the student has correctly and plausibly swapped the cause and effect.
    - Keep feedback to 2-3 sentences for each. Be direct and clear.
    - If a proposal is weak or incorrect, gently explain why. For example, if the proposed third factor only explains the cause but not the effect, point that out.
    - If reverse causation is not plausible for this type of argument (e.g., a "before and after" scenario), explain that.
  `;

  try {
    const response = await ai.models.generateContent({
      // Per guidelines, use gemini-2.5-flash
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: module2Schema,
      },
    });

    const jsonText = response.text.trim();
    const feedback = JSON.parse(jsonText);
    return feedback;
  } catch (error) {
    console.error("Error analyzing answer with Gemini API:", error);
    // Provide a fallback error message
    return {
      thirdFactor: "Sorry, I couldn't analyze your 'Third Factor' answer right now. Please try again.",
      reverseCausation: "Sorry, I couldn't analyze your 'Reverse Causation' answer right now. Please try again."
    };
  }
};


export const analyzeModule3Answer = async (
    question: Question,
    causeWithoutEffect: string,
    effectWithoutCause: string
): Promise<{ causeWithoutEffect: string; effectWithoutCause: string }> => {
    const prompt = `
        You are an expert LSAT tutor specializing in causal reasoning. Your tone is encouraging, sharp, and helpful.
        A student is working on a causal reasoning drill.
        The original argument is: "${question.stem}"
        The student was asked to provide two types of counterexamples to weaken the argument.

        1.  **'Cause without Effect' Scenario:** The student proposed: "${causeWithoutEffect}"
        2.  **'Effect without Cause' Scenario:** The student proposed: "${effectWithoutCause}"

        Your task is to provide concise feedback for each of the student's proposals in JSON format.
        - For "Cause without Effect," evaluate if the student's scenario plausibly shows the cause occurring but the effect NOT occurring.
        - For "Effect without Cause," evaluate if the student's scenario plausibly shows the effect occurring even when the cause is absent.
        - Keep feedback to 2-3 sentences for each. Be direct and clear.
        - If a proposal is weak or misses the point, gently explain why.
    `;

    try {
        const response = await ai.models.generateContent({
          // Per guidelines, use gemini-2.5-flash
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            responseSchema: module3Schema,
          },
        });

        const jsonText = response.text.trim();
        const feedback = JSON.parse(jsonText);
        return feedback;
    } catch (error) {
        console.error("Error analyzing answer with Gemini API:", error);
        return {
            causeWithoutEffect: "Sorry, I couldn't analyze your 'Cause without Effect' answer right now. Please try again.",
            effectWithoutCause: "Sorry, I couldn't analyze your 'Effect without Cause' answer right now. Please try again."
        };
    }
};
