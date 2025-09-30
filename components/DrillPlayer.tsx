

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Question, Attempt, QuestionModuleId } from '../types';
import { Module } from '../constants';
import { ALL_QUESTIONS } from '../data/questions';
import { analyzeModule2Answer, analyzeModule3Answer } from '../services/geminiService';
import QuestionCard from './QuestionCard';
import Button from './common/Button';
import Card from './common/Card';
import Module1Intro from './Module1Intro';
import Module2Intro from './Module2Intro';
import Module3Intro from './Module3Intro';
import Module4Intro from './Module4Intro';
import Modal from '../assets/Modal';
import StudyTimer from './common/StudyTimer';

interface DrillPlayerProps {
  module: Module;
  onEndDrill: () => void;
}

const formatSourcePt = (source: string): string => {
  if (!source) return '';
  return source
    .replace('PT ', 'PrepTest ')
    .replace(' | Sec ', ', S')
    .replace(' | Q ', ', Q');
};

const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const DrillPlayer: React.FC<DrillPlayerProps> = ({ module, onEndDrill }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [bankExhausted, setBankExhausted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  
  // State for analysis
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisFeedback, setAnalysisFeedback] = useState<{ thirdFactor: string; reverseCausation: string } | null>(null);
  const [m3AnalysisFeedback, setM3AnalysisFeedback] = useState<{ causeWithoutEffect: string; effectWithoutCause: string } | null>(null);
  
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  
  // State for M4 stopwatch and info card
  const [questionTime, setQuestionTime] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(0);
  const [isInfoCardVisible, setIsInfoCardVisible] = useState(false);
  const [infoTimeoutId, setInfoTimeoutId] = useState<number | null>(null);
  const [highlights, setHighlights] = useState<Record<string, { start: number; end: number }[]>>({});


  const isModule4 = module.id === 'strengthen-weaken';
  const score = useMemo(() => attempts.filter(a => a.correct).length, [attempts]);

  const formattedQuestionTime = useMemo(() => {
    const mins = Math.floor(questionTime / 60);
    const secs = questionTime % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, [questionTime]);

  const handleHighlightsChange = useCallback((questionId: string, newHighlights: { start: number; end: number }[]) => {
    setHighlights(prev => ({ ...prev, [questionId]: newHighlights }));
  }, []);

  useEffect(() => {
    if (!isModule4 || !questions.length || isRevealed) return;

    // Set start time when question changes or when answer is revealed
    if (questionStartTime === 0) {
      setQuestionStartTime(Date.now());
    }

    const intervalId = setInterval(() => {
      setQuestionTime(Math.floor((Date.now() - questionStartTime) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestionIndex, isModule4, questions.length, questionStartTime, isRevealed]);

  const loadQuestions = useCallback(async () => {
    setIsLoadingQuestions(true);
    setBankExhausted(false);
    
    const moduleQuestionBank = ALL_QUESTIONS[module.id];

    if (module.id === 'strengthen-weaken') {
        setQuestions(shuffleArray(moduleQuestionBank));
    } else {
        try {
            const usedIdsKey = `causationCoachUsedIds_${module.id}`;
            const usedIdsRaw = localStorage.getItem(usedIdsKey);
            const usedIds = new Set(usedIdsRaw ? JSON.parse(usedIdsRaw) : []);
            
            let availableQuestions = moduleQuestionBank.filter(q => !usedIds.has(q.id));

            if (availableQuestions.length < 10 && moduleQuestionBank.length >= 10) {
                 localStorage.removeItem(usedIdsKey);
                 availableQuestions = moduleQuestionBank;
            }

            if (availableQuestions.length === 0) {
                setBankExhausted(true);
            } else {
                const shuffledAvailable = shuffleArray(availableQuestions);
                const drillQuestions = shuffledAvailable.slice(0, 10);
                const drillQuestionIds = drillQuestions.map((q: Question) => q.id);
                
                const newUsedIds = new Set([...usedIds, ...drillQuestionIds]);
                localStorage.setItem(usedIdsKey, JSON.stringify(Array.from(newUsedIds)));
                
                setQuestions(drillQuestions);
            }
        } catch (error) {
            console.error("Error loading from question bank:", error);
            const shuffledBank = shuffleArray(moduleQuestionBank);
            setQuestions(shuffledBank.slice(0, 10));
        }
    }
    
    setIsLoadingQuestions(false);
  }, [module.id]);


  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

  const handleAnswer = async (data: { choiceIndex?: number; thirdFactor?: string; reverseCausation?: string; causeWithoutEffect?: string; effectWithoutCause?: string }) => {
    if (isRevealed || !currentQuestion) return;

    if (module.id === 'common-causes' && data.thirdFactor && data.reverseCausation) {
        setIsAnalyzing(true);
        const feedback = await analyzeModule2Answer(currentQuestion, data.thirdFactor, data.reverseCausation);
        setAnalysisFeedback(feedback);
        setIsAnalyzing(false);
        setIsRevealed(true);
        if (currentQuestionIndex === 0) {
            setShowModelAnswer(true);
        }
    } else if (module.id === 'reverse-causality' && data.causeWithoutEffect && data.effectWithoutCause) {
        setIsAnalyzing(true);
        const feedback = await analyzeModule3Answer(currentQuestion, data.causeWithoutEffect, data.effectWithoutCause);
        setM3AnalysisFeedback(feedback);
        setIsAnalyzing(false);
        setIsRevealed(true);
        if (currentQuestionIndex === 0) {
            setShowModelAnswer(true);
        }
    } else if (typeof data.choiceIndex !== 'undefined') {
        const answerIndex = data.choiceIndex;
        const responseTimeMs = Date.now() - questionStartTime;
        setSelectedAnswer(answerIndex);
        setIsRevealed(true);

        const isCorrect = answerIndex === currentQuestion.correctIndex;

        setAttempts(prev => [
          ...prev,
          {
            questionId: currentQuestion.id,
            answerIndex: answerIndex,
            correct: isCorrect,
            responseTimeMs: responseTimeMs,
            hintsUsed: 0,
          },
        ]);
    }
  };

  const goToQuestion = (index: number) => {
    if (index < 0) return;
    if (index >= questions.length) {
      onEndDrill();
      return;
    }

    setCurrentQuestionIndex(index);
    setAnalysisFeedback(null);
    setM3AnalysisFeedback(null);
    setShowModelAnswer(false);
    setQuestionStartTime(0); // Reset timer for next question
    setQuestionTime(0);

    const questionToLoad = questions[index];
    const pastAttempt = attempts.find(a => a.questionId === questionToLoad.id);

    if (pastAttempt) {
      setSelectedAnswer(pastAttempt.answerIndex);
      setIsRevealed(true);
    } else {
      setSelectedAnswer(null);
      setIsRevealed(false);
    }
  };

  const handleInfoEnter = () => {
    const timeoutId = window.setTimeout(() => {
      setIsInfoCardVisible(true);
    }, 300); // 300ms delay
    setInfoTimeoutId(timeoutId);
  };

  const handleInfoLeave = () => {
    if (infoTimeoutId) {
      clearTimeout(infoTimeoutId);
    }
    setIsInfoCardVisible(false);
  };
  
  const getQuestionType = (questionText: string): string => {
      if (!questionText) return 'Logical Reasoning';
      const text = questionText.toLowerCase();
      if (text.includes('weaken')) return 'Weaken';
      if (text.includes('strengthen')) return 'Strengthen';
      return 'Logical Reasoning';
  };

  const parseSourcePt = (source: string | undefined) => {
      if (!source) return null;
      const parts = source.split(' | ');
      try {
        return {
            pt: parts[0]?.replace('PT ', '') || 'N/A',
            sec: parts[1]?.replace('Sec ', '') || 'N/A',
            q: parts[2]?.replace('Q ', '') || 'N/A',
        };
      } catch (e) {
        return null;
      }
  };

  if (showIntro) {
    switch (module.id) {
      case 'correlation-causation':
        return <Module1Intro onStart={() => setShowIntro(false)} />;
      case 'common-causes':
        return <Module2Intro onStart={() => setShowIntro(false)} />;
      case 'reverse-causality':
        return <Module3Intro onStart={() => setShowIntro(false)} />;
      case 'strengthen-weaken':
        return <Module4Intro onStart={() => setShowIntro(false)} />;
      default:
        // No intro for unknown modules, just start the drill
        setShowIntro(false);
        return null; // Or a loading indicator
    }
  }

  if (isLoadingQuestions) {
    return (
      <Card className="text-center">
        <h2 className="text-2xl font-bold text-punk-cyan animate-pulse">Loading Drill...</h2>
        <p className="text-punk-sub mt-2">Preparing your session from the question bank.</p>
      </Card>
    );
  }

  if (bankExhausted) {
    return (
        <Card className="text-center">
            <h2 className="text-2xl font-bold text-punk-lime">Module Complete!</h2>
            <p className="text-punk-sub mt-2">You have attempted all available questions in this module's bank. Your progress has been reset for your next attempt.</p>
            <Button onClick={onEndDrill} className="mt-4">Back to Dashboard</Button>
        </Card>
    );
  }
  
  if (!currentQuestion) {
    return (
        <Card className="text-center">
            <h2 className="text-2xl font-bold text-punk-magenta">Error</h2>
            <p className="text-punk-sub mt-2">Could not load questions for this module.</p>
            <Button onClick={onEndDrill} className="mt-4">Back to Dashboard</Button>
        </Card>
    )
  }

  const sourceInfo = parseSourcePt(currentQuestion.sourcePT);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
           <h2 className="text-2xl font-bold text-punk-text">{module.name}</h2>
        </div>
        <div className="flex items-center gap-4">
            {isModule4 ? (
              <div className="flex items-center font-mono text-punk-cyan text-lg bg-punk-panel px-4 py-2 rounded-md border border-punk-sub/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {formattedQuestionTime}
              </div>
            ) : <StudyTimer />}
            <Button onClick={onEndDrill} variant="ghost">End Drill</Button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full space-y-6">
        {module.id === 'correlation-causation' && (
           <div className="bg-punk-panel border border-punk-sub/20 rounded-lg py-2 px-4 flex justify-between items-center text-punk-sub font-mono">
              <span>Question {currentQuestionIndex + 1}</span>
              <span>Score: {score}</span>
           </div>
        )}

        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={selectedAnswer}
          isRevealed={isRevealed}
          timeElapsed={isModule4 ? questionTime : undefined}
          isAnalyzing={isAnalyzing}
          analysisFeedback={module.id === 'common-causes' ? analysisFeedback : (module.id === 'reverse-causality' ? m3AnalysisFeedback : null)}
          highlights={highlights[currentQuestion.id] || []}
          onHighlightsChange={handleHighlightsChange}
        />
        
        {isRevealed && !showModelAnswer && (currentQuestionIndex > 0) && (module.id === 'common-causes' || module.id === 'reverse-causality') && (
           <div className="text-center mt-4">
             <Button onClick={() => setShowModelAnswer(true)} variant="ghost">View Model Answer</Button>
           </div>
        )}

        {isRevealed && showModelAnswer && (module.id === 'common-causes' || module.id === 'reverse-causality') && (
            <Card className="mt-6 animate-fade-in">
                <h3 className="text-lg font-bold mb-2 text-punk-cyan">Model Answer</h3>
                <p className="text-punk-sub whitespace-pre-wrap">{currentQuestion.explanation}</p>
            </Card>
        )}

        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={() => goToQuestion(currentQuestionIndex - 1)}
            disabled={currentQuestionIndex === 0}
            variant="ghost"
          >
            Previous
          </Button>
          <Button
            onClick={() => goToQuestion(currentQuestionIndex + 1)}
            disabled={!isRevealed}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Drill' : 'Next Question'}
          </Button>
        </div>
      </div>

    </div>
  );
};

export default DrillPlayer;