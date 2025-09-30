import React, { useState, useEffect } from 'react';
import Button from './common/Button';

interface OnboardingGuideProps {
  onClose: () => void;
}

const steps = [
  {
    title: 'Welcome to the Causation Station!',
    description: "This is your personal training ground for mastering LSAT causal reasoning. Let's take a quick tour of your new toolkit.",
    svgVisual: (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <text x="100" y="55" fontFamily="monospace" fontSize="16" fill="#00FFF0" textAnchor="middle" className="drop-shadow-neon-cyan">Causation</text>
        <text x="100" y="75" fontFamily="monospace" fontSize="16" fill="#FF1AFF" textAnchor="middle" className="drop-shadow-neon-magenta">Station</text>
        <path d="M 60 85 Q 100 95, 140 85" stroke="#9BB0C8" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Your Dashboard',
    description: 'This is your mission control. Track your overall progress with key performance stats and launch into targeted Skill Drills for each core causal reasoning concept.',
    svgVisual: (
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="55" height="30" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
            <text x="37.5" y="22" fill="#9BB0C8" fontSize="5" textAnchor="middle">Accuracy</text>
            <text x="37.5" y="34" fill="#00FFF0" fontSize="8" textAnchor="middle">82%</text>

            <rect x="72.5" y="10" width="55" height="30" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
            <text x="100" y="22" fill="#9BB0C8" fontSize="5" textAnchor="middle">Avg. Time</text>
            <text x="100" y="34" fill="#00FFF0" fontSize="8" textAnchor="middle">45s</text>

            <rect x="135" y="10" width="55" height="30" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
            <text x="162.5" y="22" fill="#9BB0C8" fontSize="5" textAnchor="middle">Streak</text>
            <text x="162.5" y="34" fill="#00FFF0" fontSize="8" textAnchor="middle">4</text>
            
            <rect x="10" y="50" width="180" height="25" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
            <text x="20" y="64" fill="#EAF2FF" fontSize="6">Module 1: Corr vs. Cause</text>
            <rect x="140" y="57" width="40" height="12" rx="6" fill="#00FFF0" />
            <text x="160" y="64" fill="#06080C" fontSize="5" textAnchor="middle">Start</text>
            
            <rect x="10" y="85" width="180" height="25" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
            <text x="20" y="99" fill="#EAF2FF" fontSize="6">Module 2: Alt. Explanations</text>
            <rect x="140" y="92" width="40" height="12" rx="6" fill="#00FFF0" />
            <text x="160" y="99" fill="#06080C" fontSize="5" textAnchor="middle">Start</text>
        </svg>
    ),
  },
  {
    title: 'The Drills',
    description: 'Each module trains a different skill. Some are rapid-fire identification drills, while others use AI to give you personalized feedback on your own written arguments.',
    svgVisual: (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="180" height="30" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
        <text x="100" y="28" fill="#EAF2FF" fontSize="6" textAnchor="middle">"The study found X is linked to Y."</text>
        <rect x="40" y="50" width="50" height="20" rx="3" fill="rgba(0, 255, 240, 0.2)" stroke="#00FFF0" strokeWidth="1"/>
        <text x="65" y="62" fill="#00FFF0" fontSize="7" textAnchor="middle">Causation</text>
        <rect x="110" y="50" width="50" height="20" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
        <text x="135" y="62" fill="#EAF2FF" fontSize="7" textAnchor="middle">Correlation</text>
        <rect x="10" y="80" width="180" height="30" rx="3" fill="#06080C" stroke="#9BB0C8" strokeWidth="0.5"/>
        <text x="20" y="98" fill="#9BB0C8" fontSize="6">Your proposed alternate cause...</text>
      </svg>
    ),
  },
  {
    title: 'Review Your Arsenal',
    description: 'Use the Flashcards to drill key concepts. Any question you get wrong is automatically saved in your Journal, creating a personalized log of your toughest challenges.',
    svgVisual: (
       <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="80" height="90" rx="5" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5" transform="rotate(-5 55 60)" />
        <text x="55" y="50" fill="#EAF2FF" fontSize="7" textAnchor="middle">Causation</text>
        <line x1="30" y1="60" x2="80" y2="60" stroke="#9BB0C8" strokeWidth="0.5" />
        <text x="55" y="75" fill="#9BB0C8" fontSize="5" textAnchor="middle">A relationship where...</text>
        
        <rect x="105" y="10" width="85" height="100" rx="3" fill="#0B1118" stroke="#9BB0C8" strokeWidth="0.5"/>
        <text x="147.5" y="25" fill="#00FFF0" fontSize="7" textAnchor="middle">Journal</text>
        <rect x="115" y="35" width="65" height="15" rx="2" fill="#06080C" />
        <text x="147.5" y="45" fill="#EAF2FF" fontSize="5" textAnchor="middle">Question Stem...</text>
        <text x="115" y="60" fill="#9BB0C8" fontSize="5">My Notes:</text>
        <text x="115" y="70" fill="#EAF2FF" fontSize="5" className="italic">"I fell for the trap..."</text>
      </svg>
    ),
  },
  {
    title: "You're Ready to Go",
    description: "That's everything you need to know. The best way to learn is by doing. Let's get to work.",
    svgVisual: (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M 80 40 L 120 60 L 80 80 Z" fill="#00FFF0" className="drop-shadow-neon-cyan" />
      </svg>
    ),
  },
];

const OnboardingGuide: React.FC<OnboardingGuideProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setIsContentVisible(false);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsContentVisible(true);
      }, 300);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'ArrowRight') {
        handleNext();
      }
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep]);
  
  const contentAnimationClass = isContentVisible ? 'animate-[slideInRight_0.3s_ease-out_forwards]' : 'animate-[slideOutLeft_0.3s_ease-out_forwards]';

  return (
    <div
      className={`fixed inset-0 bg-punk-base/95 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full max-w-2xl mx-4 text-center">
        <div className={`transition-opacity duration-300 ${contentAnimationClass}`}>
          <div className="bg-punk-panel/50 border border-punk-sub/20 rounded-lg shadow-neon-cyan p-6 h-56 flex items-center justify-center mb-6">
            {steps[currentStep].svgVisual}
          </div>
          <h2 className="text-3xl font-bold text-punk-text mb-4">
            {steps[currentStep].title}
          </h2>
          <p className="text-punk-sub text-lg max-w-xl mx-auto">
            {steps[currentStep].description}
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep ? 'w-8 bg-punk-cyan' : 'w-2 bg-punk-sub/30'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleClose}
              className="text-punk-sub hover:text-punk-text transition-colors text-sm"
            >
              Skip Tour
            </button>
            <Button onClick={handleNext} variant="primary" className="px-10">
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGuide;
