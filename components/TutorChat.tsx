import React from 'react';
import Card from './common/Card';
import Button from './common/Button';

const LoadingDots = () => (
  <div className="flex items-center space-x-1">
    <div className="w-2 h-2 bg-punk-sub rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-punk-sub rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-punk-sub rounded-full animate-bounce"></div>
  </div>
);

interface TutorChatProps {
  message: string;
  isLoading: boolean;
  onGetHint: () => void;
  isHintDisabled: boolean;
  onClose?: () => void;
}

const TutorChat: React.FC<TutorChatProps> = ({ message, isLoading, onGetHint, isHintDisabled, onClose }) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-punk-cyan drop-shadow-neon-cyan flex items-center gap-2">
          <span role="img" aria-label="sparkles">✨</span>
          Causal Coach
        </h3>
        <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={onGetHint} disabled={isHintDisabled || isLoading}>
            Get Hint
            </Button>
            {onClose && (
                <button 
                    onClick={onClose} 
                    className="text-punk-sub text-3xl leading-none hover:text-punk-text transition-colors"
                    aria-label="Close AI Tutor"
                >
                    &times;
                </button>
            )}
        </div>
      </div>
      <div className="flex-grow p-4 bg-punk-base/50 rounded-lg min-h-[100px] text-punk-sub overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <LoadingDots />
          </div>
        ) : (
          <div 
            className="prose prose-invert prose-p:text-punk-sub prose-strong:text-punk-text"
            dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br />') }} 
          />
        )}
      </div>
    </Card>
  );
};

export default TutorChat;