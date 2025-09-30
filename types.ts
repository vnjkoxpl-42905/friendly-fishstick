

export type QuestionModuleId = 'correlation-causation' | 'common-causes' | 'reverse-causality' | 'strengthen-weaken';

export interface Choice {
  text: string;
}

export interface ChoiceBreakdown {
  explanation: string;
  analogy?: string;
}

export interface QuestionBreakdown {
  mainConclusion: string;
  subConclusion?: string;
  premises: string[];
  choiceBreakdowns: { [key: number]: ChoiceBreakdown };
}

export interface Deconstruction {
  prompt: string;
  cause: string;
  effect: string;
}

export interface Question {
  id: string;
  moduleId: QuestionModuleId;
  stem: string;
  stimulus?: string;
  question?: string;
  choices: Choice[];
  correctIndex: number;
  explanation: string;
  sourcePT?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  primaryConcept?: 'correlation-causation' | 'common-causes' | 'reverse-causality';
  breakdown?: QuestionBreakdown;
  deconstruction?: Deconstruction;
}

export interface Attempt {
  questionId: string;
  answerIndex: number;
  correct: boolean;
  responseTimeMs: number;
  hintsUsed: number;
  tutorExplanation?: string;
}

export interface JournalEntry {
  question: Question;
  notes: string;
  tags: string[];
}

export interface DashboardStats {
  overallAccuracy: number;
  avgTimePerQuestion: number; // in seconds
  currentStreak: number;
  moduleProgress: Record<QuestionModuleId, { accuracy: number; avgTime: number; questionsAttempted: number }>;
  recentPerformance: { name: string; accuracy: number }[];
  performanceByConcept: { concept: string; accuracy: number }[];
  errorAnalysis: { reason: string; percentage: number }[];
}

export interface Flashcard {
  term: string;
  definition: string;
}

export interface FlashcardDeck {
  id: string;
  name:string;
  cards: Flashcard[];
}