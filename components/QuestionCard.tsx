import React, { useState, useEffect, useRef } from 'react';
import { Question } from '../types';
import Card from './common/Card';
import Button from './common/Button';

interface QuestionCardProps {
  question: Question;
  onAnswer: (data: { choiceIndex?: number; thirdFactor?: string; reverseCausation?: string; causeWithoutEffect?: string; effectWithoutCause?: string }) => void;
  selectedAnswer: number | null;
  isRevealed: boolean;
  timeElapsed?: number;
  isAnalyzing: boolean;
  analysisFeedback: { thirdFactor: string; reverseCausation: string } | { causeWithoutEffect: string; effectWithoutCause: string } | null;
  highlights: { start: number; end: number }[];
  onHighlightsChange: (questionId: string, newHighlights: { start: number; end: number }[]) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  selectedAnswer,
  isRevealed,
  timeElapsed,
  isAnalyzing,
  analysisFeedback,
  highlights,
  onHighlightsChange,
}) => {
  const [thirdFactor, setThirdFactor] = useState('');
  const [reverseCausation, setReverseCausation] = useState('');
  const [causeWithoutEffect, setCauseWithoutEffect] = useState('');
  const [effectWithoutCause, setEffectWithoutCause] = useState('');
  const [isHighlighterActive, setIsHighlighterActive] = useState(false);
  const [isEraserActive, setIsEraserActive] = useState(false);
  const stimulusRef = useRef<HTMLParagraphElement>(null);

  const isModule1 = question.moduleId === 'correlation-causation';
  const isModule2 = question.moduleId === 'common-causes';
  const isModule3 = question.moduleId === 'reverse-causality';
  const isModule4 = question.moduleId === 'strengthen-weaken';

  // Reset state when question changes
  useEffect(() => {
    setThirdFactor('');
    setReverseCausation('');
    setCauseWithoutEffect('');
    setEffectWithoutCause('');
    setIsHighlighterActive(false); // Deactivate highlighter on new question
    setIsEraserActive(false);
  }, [question.id]);

  const toggleHighlighter = () => {
    setIsHighlighterActive(prev => !prev);
    if (!isHighlighterActive) setIsEraserActive(false);
  };

  const toggleEraser = () => {
    setIsEraserActive(prev => !prev);
    if (!isEraserActive) setIsHighlighterActive(false);
  };
  
  const handleRemoveHighlight = (start: number, end: number) => {
    if (isEraserActive) {
      const newHighlights = highlights.filter(h => h.start !== start || h.end !== end);
      onHighlightsChange(question.id, newHighlights);
    }
  };

  const getHighlightedText = (text: string, currentHighlights: { start: number, end: number }[]) => {
      if (!currentHighlights || currentHighlights.length === 0) {
          return <>{text}</>;
      }
      
      const sortedHighlights = [...currentHighlights].sort((a, b) => a.start - b.start);
      
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;

      sortedHighlights.forEach((highlight, i) => {
          if (highlight.start > lastIndex) {
              parts.push(<span key={`text-${i}`}>{text.substring(lastIndex, highlight.start)}</span>);
          }
          parts.push(
              <mark 
                key={`${highlight.start}-${highlight.end}`} 
                className="stimulus-highlight"
                onClick={() => handleRemoveHighlight(highlight.start, highlight.end)}
              >
                  {text.substring(highlight.start, highlight.end)}
              </mark>
          );
          lastIndex = highlight.end;
      });

      if (lastIndex < text.length) {
          parts.push(<span key="last-text">{text.substring(lastIndex)}</span>);
      }

      return <>{parts}</>;
  };

  const handleMouseUp = () => {
    if (!isHighlighterActive || !stimulusRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;
    
    const range = selection.getRangeAt(0);
    const stimulusNode = stimulusRef.current;

    // Check if the selection is within the stimulus paragraph
    if (!stimulusNode.contains(range.commonAncestorContainer)) {
      selection.removeAllRanges();
      return;
    }

    const preSelectionRange = document.createRange();
    preSelectionRange.selectNodeContents(stimulusNode);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const start = preSelectionRange.toString().length;
    const end = start + range.toString().length;
    
    if (start === end) return;

    const newHighlight = { start, end };
    
    // Merge with existing highlights
    let newHighlights = [...highlights];
    
    // Filter out any highlight that is fully contained within the new one
    newHighlights = newHighlights.filter(h => !(h.start >= start && h.end <= end));
    
    let merged = false;
    // Check for overlaps with remaining highlights
    newHighlights = newHighlights.map(h => {
      // New highlight is fully contained in an existing one - do nothing
      if(start >= h.start && end <= h.end) {
        merged = true;
        return h;
      }
      // Overlap exists, merge them
      if (Math.max(start, h.start) < Math.min(end, h.end)) {
        merged = true;
        return { start: Math.min(start, h.start), end: Math.max(end, h.end) };
      }
      return h;
    });

    if (!merged) {
      newHighlights.push(newHighlight);
    }
    
    // Final merge pass in case a merge created a new overlap
    newHighlights.sort((a, b) => a.start - b.start);
    const finalHighlights: {start: number, end: number}[] = [];
    if(newHighlights.length > 0) {
      let current = newHighlights[0];
      for(let i = 1; i < newHighlights.length; i++) {
        const next = newHighlights[i];
        if (next.start < current.end) {
          current.end = Math.max(current.end, next.end);
        } else {
          finalHighlights.push(current);
          current = next;
        }
      }
      finalHighlights.push(current);
    }

    onHighlightsChange(question.id, finalHighlights);
    
    // Clear the user's text selection after highlighting
    selection.removeAllRanges();
  };

  const handleSubmitModule2 = () => {
    onAnswer({ thirdFactor, reverseCausation });
  };
  
  const handleSubmitModule3 = () => {
    onAnswer({ causeWithoutEffect, effectWithoutCause });
  };

  const getChoiceClassName = (index: number) => {
    const baseClasses = '';
    if (!isRevealed) {
      const hoverClasses = 'hover:bg-punk-panel/80 hover:border-punk-cyan';
      const selectedClasses = 'bg-punk-cyan/20 border-punk-cyan';
      const defaultClasses = 'border-punk-sub/20';
      return `${baseClasses} ${hoverClasses} ${selectedAnswer === index ? selectedClasses : defaultClasses}`;
    }
    if (index === question.correctIndex) {
      return 'bg-punk-lime/20 border-punk-lime text-punk-text animate-pulse-once';
    }
    if (index === selectedAnswer && index !== question.correctIndex) {
      return 'bg-punk-magenta/20 border-punk-magenta';
    }
    return `${baseClasses} border-punk-sub/20 opacity-60`;
  };
  
  const cardClasses = '';
  const stimulusClasses = 'font-serif text-punk-text leading-relaxed';
  const questionTextClasses = 'font-serif text-punk-text font-semibold';
  
  const stimulusText = question.stimulus || (isModule1 || isModule2 || isModule3 ? question.stem : '');
  const questionText = question.question || (isModule1 ? '' : 'Select the best answer.');

  const formatSourcePt = (source: string | undefined): string => {
    if (!source) return '';
    return source
      .replace('PT ', 'Practice Test ')
      .replace(' | Sec ', ', S')
      .replace(' | Q ', ', Q');
  };

  return (
    <Card className={cardClasses}>
      {isModule4 && (
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-punk-sub/20">
          <span className="text-sm italic text-punk-sub font-serif">
            {formatSourcePt(question.sourcePT)}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleHighlighter}
              aria-pressed={isHighlighterActive}
              className={`p-2 rounded-md transition-colors ${
                isHighlighterActive ? 'bg-yellow-500/30 text-yellow-300' : 'bg-transparent text-punk-sub hover:bg-punk-panel hover:text-punk-text'
              }`}
              title={isHighlighterActive ? 'Deactivate Highlighter' : 'Activate Highlighter'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.998 19.362l2.54-2.54c.78-.78.78-2.05 0-2.83l-2.07-2.07c-.78-.78-2.05-.78-2.83 0l-2.54 2.54" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14.172 11.293l-8.59 8.59c-.56.56-1.31.87-2.12.87-.2 0-.39-.02-.59-.06l-1.42-.28c-.59-.12-1.04-.64-1.04-1.25l.28-1.42c.04-.2.06-.39.06-.59 0-.81.31-1.56.87-2.12l8.59-8.59" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M22 2L12 12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <button
              onClick={toggleEraser}
              disabled={highlights.length === 0 && !isEraserActive}
              aria-pressed={isEraserActive}
              className={`p-2 rounded-md transition-colors ${
                isEraserActive 
                  ? 'bg-red-500/30 text-red-400' 
                  : (highlights.length === 0 ? 'text-punk-sub/30 cursor-not-allowed' : 'bg-transparent text-punk-sub hover:bg-punk-panel hover:text-punk-text')
              }`}
              title={isEraserActive ? "Deactivate Eraser" : "Activate Eraser"}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.34 3.41L3.41 8.34C2.63 9.12 2.63 10.38 3.41 11.16L12.84 20.59C13.62 21.37 14.88 21.37 15.66 20.59L20.59 15.66C21.37 14.88 21.37 13.62 20.59 12.84L11.16 3.41C10.38 2.63 9.12 2.63 8.34 3.41Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 5L19 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 21H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {stimulusText && (
        <p 
          ref={stimulusRef}
          onMouseUp={handleMouseUp}
          className={`${stimulusClasses} mb-4 ${isHighlighterActive ? 'cursor-text' : ''} ${isEraserActive ? 'eraser-active' : ''}`}
        >
          {getHighlightedText(stimulusText, highlights)}
        </p>
      )}
      {questionText && (
        <p className={questionTextClasses}>
          {questionText}
        </p>
      )}


      <div className="my-6 space-y-3">
        { (isModule1 || isModule4) && question.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => onAnswer({ choiceIndex: index })}
            disabled={isRevealed}
            className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-start ${getChoiceClassName(index)}`}
          >
            <span className={`font-mono mr-4 text-punk-sub`}>
              {String.fromCharCode(65 + index)}.
            </span>
            <span className="flex-1 font-serif">{choice.text}</span>
          </button>
        ))}

        {isModule2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-punk-cyan mb-2 font-semibold">Alternate Cause (Third Factor)</label>
              <textarea
                value={thirdFactor}
                onChange={(e) => setThirdFactor(e.target.value)}
                placeholder="What hidden factor could cause BOTH the original cause and effect?"
                className="w-full bg-punk-base border border-punk-sub/30 rounded-md p-3 text-punk-text focus:outline-none focus:ring-2 focus:ring-punk-cyan"
                rows={3}
                disabled={isRevealed || isAnalyzing}
              />
            </div>
            <div>
              <label className="block text-punk-cyan mb-2 font-semibold">Reverse Causation Scenario</label>
              <textarea
                value={reverseCausation}
                onChange={(e) => setReverseCausation(e.target.value)}
                placeholder="How could the 'effect' actually be the 'cause'?"
                className="w-full bg-punk-base border border-punk-sub/30 rounded-md p-3 text-punk-text focus:outline-none focus:ring-2 focus:ring-punk-cyan"
                rows={3}
                disabled={isRevealed || isAnalyzing}
              />
            </div>
            <Button onClick={handleSubmitModule2} disabled={!thirdFactor || !reverseCausation || isRevealed || isAnalyzing}>
              {isAnalyzing ? "Analyzing..." : "Submit for Analysis"}
            </Button>
          </div>
        )}

        {isModule3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-punk-cyan mb-2 font-semibold">'Cause without Effect' Scenario</label>
                <textarea
                  value={causeWithoutEffect}
                  onChange={(e) => setCauseWithoutEffect(e.target.value)}
                  placeholder="Describe a plausible scenario where the cause occurs, but the effect does NOT."
                  className="w-full bg-punk-base border border-punk-sub/30 rounded-md p-3 text-punk-text focus:outline-none focus:ring-2 focus:ring-punk-cyan"
                  rows={3}
                  disabled={isRevealed || isAnalyzing}
                />
              </div>
              <div>
                <label className="block text-punk-cyan mb-2 font-semibold">'Effect without Cause' Scenario</label>
                <textarea
                  value={effectWithoutCause}
                  onChange={(e) => setEffectWithoutCause(e.target.value)}
                  placeholder="Describe a plausible scenario where the effect occurs, but the cause is ABSENT."
                  className="w-full bg-punk-base border border-punk-sub/30 rounded-md p-3 text-punk-text focus:outline-none focus:ring-2 focus:ring-punk-cyan"
                  rows={3}
                  disabled={isRevealed || isAnalyzing}
                />
              </div>
              <Button onClick={handleSubmitModule3} disabled={!causeWithoutEffect || !effectWithoutCause || isRevealed || isAnalyzing}>
                {isAnalyzing ? "Analyzing..." : "Submit for Analysis"}
              </Button>
            </div>
        )}
      </div>

      {isRevealed && (
        <div className={`mt-6 p-4 rounded-lg border bg-punk-base/50 border-punk-sub/20 animate-fade-in`}>
          <h3 className={`text-lg font-bold mb-2 text-punk-cyan`}>Explanation</h3>
          <div className={`text-punk-sub whitespace-pre-wrap`}>
            {question.explanation}
            {question.breakdown && (
                <div className={`mt-4 border-t pt-4 border-punk-sub/20`}>
                    <h4 className={`font-semibold mb-2 text-punk-text`}>Breakdown</h4>
                    <p><strong>Conclusion:</strong> {question.breakdown.mainConclusion}</p>
                    {question.breakdown.premises.map((p, i) => <p key={i}><strong>Premise {i+1}:</strong> {p}</p>)}
                </div>
            )}
          </div>
        </div>
      )}
      
      {isRevealed && analysisFeedback && (
        <div className="mt-6 space-y-4 animate-fade-in p-4 bg-punk-base/50 rounded-lg border border-punk-lime/30">
            {'thirdFactor' in analysisFeedback && (
                <div>
                    <h4 className="font-semibold text-punk-lime mb-1">Feedback on Third Factor:</h4>
                    <p className="text-punk-sub">{analysisFeedback.thirdFactor}</p>
                </div>
            )}
            {'reverseCausation' in analysisFeedback && (
                <div>
                    <h4 className="font-semibold text-punk-lime mb-1">Feedback on Reverse Causation:</h4>
                    <p className="text-punk-sub">{analysisFeedback.reverseCausation}</p>
                </div>
            )}
            { 'causeWithoutEffect' in analysisFeedback && (
                 <div>
                    <h4 className="font-semibold text-punk-lime mb-1">Feedback on 'Cause without Effect':</h4>
                    <p className="text-punk-sub">{analysisFeedback.causeWithoutEffect}</p>
                 </div>
            )}
            { 'effectWithoutCause' in analysisFeedback && (
                 <div>
                    <h4 className="font-semibold text-punk-lime mb-1">Feedback on 'Effect without Cause':</h4>
                    <p className="text-punk-sub">{analysisFeedback.effectWithoutCause}</p>
                 </div>
            )}
        </div>
      )}
    </Card>
  );
};

export default QuestionCard;