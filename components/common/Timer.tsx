import React from 'react';

interface TimerProps {
  timeLeft: number; // in seconds
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-xl font-mono bg-punk-panel px-4 py-2 rounded-md border border-punk-sub/20">
      <span className={timeLeft < 30 ? 'text-punk-magenta' : 'text-punk-text'}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;
