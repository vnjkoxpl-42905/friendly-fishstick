import React, { useState, useMemo, useEffect } from 'react';
import { FLASHCARD_DECKS } from '../constants';
import { Flashcard } from '../types';
import Card from './common/Card';
import Button from './common/Button';

const ArrowIcon: React.FC<{ direction: 'left' | 'right'; className?: string }> = ({ direction, className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {direction === 'left' ? (
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    ) : (
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    )}
  </svg>
);

const REVIEW_DECK_STORAGE_KEY = 'causationCoachReviewDeck';

const Flashcards: React.FC = () => {
  const [selectedDeckId, setSelectedDeckId] = useState<string>(FLASHCARD_DECKS[0]?.id || '');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [reviewCards, setReviewCards] = useState<Flashcard[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);

  useEffect(() => {
    try {
        const savedReviewCardsRaw = localStorage.getItem(REVIEW_DECK_STORAGE_KEY);
        if (savedReviewCardsRaw) {
            const savedCards = JSON.parse(savedReviewCardsRaw) as Flashcard[];
            setReviewCards(savedCards);
        }
    } catch (error) {
        console.error("Failed to parse review deck from localStorage:", error);
        localStorage.removeItem(REVIEW_DECK_STORAGE_KEY);
    }
  }, []);

  const updateReviewDeck = (newReviewCards: Flashcard[]) => {
      setReviewCards(newReviewCards);
      localStorage.setItem(REVIEW_DECK_STORAGE_KEY, JSON.stringify(newReviewCards));
  };

  const fullDeck = useMemo(() => FLASHCARD_DECKS.find(d => d.id === selectedDeckId), [selectedDeckId]);

  const activeDeck = useMemo(() => {
    if (isReviewMode) {
        return {
            id: 'review-deck',
            name: 'Review Deck',
            cards: reviewCards,
        };
    }
    return fullDeck;
  }, [isReviewMode, reviewCards, fullDeck]);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsFlipped(prev => !prev);
  };

  const changeCard = (direction: 'next' | 'prev') => {
    if (!activeDeck || isAnimating || activeDeck.cards.length === 0) return;
    setIsAnimating(true);
    
    setTimeout(() => {
        setIsFlipped(false);
        if (direction === 'next') {
            setCurrentCardIndex(prev => (prev + 1) % activeDeck.cards.length);
        } else {
            setCurrentCardIndex(prev => (prev - 1 + activeDeck.cards.length) % activeDeck.cards.length);
        }
        setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };
  
  const handleAddToReview = (card: Flashcard) => {
    if (!reviewCards.some(rc => rc.term === card.term)) {
        updateReviewDeck([...reviewCards, card]);
    }
    changeCard('next');
  };

  const handleGotIt = (card: Flashcard) => {
    const newReviewCards = reviewCards.filter(rc => rc.term !== card.term);
    updateReviewDeck(newReviewCards);

    if (isReviewMode && newReviewCards.length === 0) {
        setIsReviewMode(false);
        setCurrentCardIndex(0);
        setIsFlipped(false);
    } else {
        changeCard('next');
    }
  };
  
  const toggleReviewMode = () => {
    setIsReviewMode(prev => !prev);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const currentCard = activeDeck?.cards[currentCardIndex];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex-grow">
          <h2 className="text-3xl font-bold text-punk-text">Flashcards</h2>
          <p className="text-punk-sub max-w-3xl mt-2">
            Drill the core concepts. The definitions here are tailored for the LSAT, focusing on the specific way these terms are used in logical reasoning.
          </p>
        </div>
        <Button 
          variant="ghost" 
          onClick={toggleReviewMode} 
          disabled={reviewCards.length === 0 && !isReviewMode}
          className="flex-shrink-0 self-start sm:self-center"
        >
            {isReviewMode ? 'Back to Full Deck' : `Review Cards (${reviewCards.length})`}
        </Button>
      </div>
      
      {!activeDeck || activeDeck.cards.length === 0 ? (
        <Card className="text-center py-12">
            <p className="text-punk-sub">
                {isReviewMode ? "Your review deck is empty. Mark some cards for review from the full deck." : "No flashcard deck found."}
            </p>
        </Card>
      ) : (
        <div className="max-w-2xl mx-auto">
            <style>{`
                .flashcard-container { perspective: 1000px; }
                .flashcard {
                    transform-style: preserve-3d;
                    transition: transform 0.5s;
                }
                .flashcard.is-flipped {
                    transform: rotateY(180deg);
                }
                .flashcard-face {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .flashcard-back {
                    transform: rotateY(180deg);
                }
            `}</style>

            <div 
                className={`flashcard-container w-full h-80 ${!isFlipped ? 'cursor-pointer' : ''} ${isAnimating ? 'opacity-0 transition-opacity duration-200' : 'opacity-100'}`}
                onClick={!isFlipped ? handleFlip : undefined}
                role="button"
                aria-label={isFlipped ? 'Card definition' : 'Card term, click to flip'}
                tabIndex={!isFlipped ? 0 : -1}
                onKeyDown={(e) => { if (!isFlipped && (e.key === 'Enter' || e.key === ' ')) handleFlip()}}
            >
                <div className={`relative w-full h-full flashcard ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* Front of Card */}
                    <div className="absolute w-full h-full flashcard-face">
                        <Card className="w-full h-full flex items-center justify-center">
                            <h3 className="text-4xl font-bold text-punk-cyan text-center p-4">{currentCard.term}</h3>
                        </Card>
                    </div>
                    {/* Back of Card */}
                    <div className="absolute w-full h-full flashcard-face flashcard-back">
                        <Card className="w-full h-full flex items-center justify-center">
                            <p className="text-punk-sub text-center p-4 leading-relaxed">{currentCard.definition}</p>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mt-6 min-h-[48px]">
                {isFlipped && currentCard ? (
                    <div className="flex w-full justify-center gap-4 animate-fade-in">
                        <Button variant="secondary" onClick={() => handleAddToReview(currentCard)}>
                            Needs Review
                        </Button>
                        <Button variant="primary" onClick={() => handleGotIt(currentCard)}>
                            Got It
                        </Button>
                    </div>
                ) : (
                    <>
                        <Button variant="ghost" onClick={() => changeCard('prev')} aria-label="Previous card" disabled={activeDeck.cards.length < 2}>
                            <ArrowIcon direction="left" className="w-5 h-5" />
                        </Button>
                        <div className="text-punk-sub font-mono">
                            {currentCardIndex + 1} / {activeDeck.cards.length}
                        </div>
                        <Button variant="ghost" onClick={() => changeCard('next')} aria-label="Next card" disabled={activeDeck.cards.length < 2}>
                            <ArrowIcon direction="right" className="w-5 h-5" />
                        </Button>
                    </>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default Flashcards;
