import { DashboardStats, JournalEntry, QuestionModuleId, FlashcardDeck } from './types';
import { getQuestionById } from './data/questions';

export interface Module {
  id: QuestionModuleId;
  name: string;
  description: string;
}

export const MODULES: Module[] = [
  { id: 'correlation-causation', name: 'Module 1: Correlation vs. Causation', description: 'Distinguishing between events that happen together and those where one causes the other.' },
  { id: 'common-causes', name: 'Module 2: Alternate Explanations', description: 'Identifying unstated factors that might be the true cause of an observed correlation.' },
  { id: 'reverse-causality', name: 'Module 3: Test the Relationship', description: 'Generate counterexamples by showing the cause without the effect, or the effect without the cause.' },
  { id: 'strengthen-weaken', name: 'Module 4: Training Yard', description: 'Apply all causal reasoning skills to a mix of official LSAT questions.' },
];

export const MOCK_DASHBOARD_STATS: DashboardStats = {
  overallAccuracy: 82,
  avgTimePerQuestion: 45,
  currentStreak: 4,
  moduleProgress: {
    'correlation-causation': { accuracy: 90, avgTime: 35, questionsAttempted: 10 },
    'common-causes': { accuracy: 75, avgTime: 55, questionsAttempted: 8 },
    'reverse-causality': { accuracy: 80, avgTime: 50, questionsAttempted: 5 },
    'strengthen-weaken': { accuracy: 70, avgTime: 60, questionsAttempted: 20 },
  },
  recentPerformance: [
    { name: 'Drill 1', accuracy: 70 },
    { name: 'Drill 2', accuracy: 80 },
    { name: 'Drill 3', accuracy: 75 },
    { name: 'Drill 4', accuracy: 90 },
    { name: 'Drill 5', accuracy: 85 },
  ],
  performanceByConcept: [
    { concept: 'Correlation', accuracy: 92 },
    { concept: 'Alt. Cause', accuracy: 78 },
    { concept: 'Reverse Cause', accuracy: 85 },
    { concept: 'Strengthen', accuracy: 68 },
    { concept: 'Weaken', accuracy: 72 },
  ],
  errorAnalysis: [
    { reason: 'Misread Stem', percentage: 35 },
    { reason: 'Ignored Premise', percentage: 25 },
    { reason: 'Chose Opposite', percentage: 20 },
    { reason: 'Faulty Analogy', percentage: 10 },
    { reason: 'Out of Scope', percentage: 10 },
  ],
};

export const MOCK_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    question: getQuestionById('M1-Q09')!,
    notes: "I fell for the 'symptomatic of' language. It's a sign, not a cause. This is a classic correlation trap just like 'at odds with' or 'coincides with.' Need to be more vigilant about descriptive vs. active language.",
    tags: ['correlation-language', 'subtle-traps'],
  },
  {
    question: getQuestionById('M1-Q02')!,
    notes: "'Precede' just means 'comes before'. It's purely about timing, a temporal sequence. I keep making this mistake. Just because A happens before B doesn't mean A caused B.",
    tags: ['temporal-sequence', 'correlation'],
  },
];

export const FLASHCARD_DECKS: FlashcardDeck[] = [
  {
    id: 'core-concepts',
    name: 'Core Causal Concepts',
    cards: [
      {
        term: 'Causation',
        definition: 'A relationship where one event (the cause) directly brings about another event (the effect). Causal language is active and often uses verbs like "produces," "leads to," "results in," or "makes."',
      },
      {
        term: 'Correlation',
        definition: 'A relationship where two events or variables occur together or show a similar pattern, but one does not necessarily cause the other. Correlational language is observational, using phrases like "is associated with," "is linked to," or "coincides with."',
      },
      {
        term: 'Alternate Explanation',
        definition: 'A different reason, other than the one proposed in the argument, that could plausibly account for the observed effect or correlation. This is a primary method for weakening causal arguments.',
      },
      {
        term: 'Third Factor (Common Cause)',
        definition: 'A specific type of alternate explanation where an unstated third factor is the true cause of both the supposed "cause" and "effect." Classic example: Hot weather (third factor) causes both ice cream sales and crime rates to rise.',
      },
      {
        term: 'Reverse Causality',
        definition: 'A type of alternate explanation where the supposed effect is actually the cause, and the supposed cause is the effect. If an argument claims X causes Y, reverse causality suggests that Y actually causes X.',
      },
      {
        term: 'Strengthen (Causal Argument)',
        definition: 'To support a causal conclusion. Common methods include: eliminating alternate explanations, showing an instance where the cause leads to the effect, or providing data that reinforces the proposed link.',
      },
      {
        term: 'Weaken (Causal Argument)',
        definition: 'To undermine a causal conclusion. Common methods include: showing an instance of the cause without the effect, showing the effect without the cause, or introducing a plausible alternate explanation (like a third factor or reverse causality).',
      },
       {
        term: 'Cause without Effect',
        definition: 'A scenario that weakens a causal claim by demonstrating that the supposed cause occurred, but the expected effect did not. This challenges the idea that the cause is *sufficient* to produce the effect.',
      },
      {
        term: 'Effect without Cause',
        definition: 'A scenario that weakens a causal claim by demonstrating that the observed effect occurred even when the supposed cause was absent. This challenges the idea that the cause is *necessary* to produce the effect.',
      },
    ]
  }
];