
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Modal from '../../assets/Modal';

// Helper to format time from seconds to MM:SS
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const TimerIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
);

const StudyTimer: React.FC = () => {
    const [duration, setDuration] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isTimeUpOpen, setIsTimeUpOpen] = useState(false);

    useEffect(() => {
        let interval: number | null = null;
        if (isActive && !isPaused) {
            interval = window.setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(interval!);
                        setIsActive(false);
                        setDuration(0);
                        setIsTimeUpOpen(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const startTimer = (seconds: number) => {
        setDuration(seconds);
        setTimeLeft(seconds);
        setIsActive(true);
        setIsPaused(false);
        setIsSettingsOpen(false);
    };
    
    const togglePause = () => {
        setIsPaused(prev => !prev);
        setIsSettingsOpen(false);
    };

    const addTime = () => {
        setTimeLeft(prev => prev + 300); // Add 5 minutes
        setDuration(prev => prev + 300);
        setIsSettingsOpen(false);
    };
    
    const resetTimer = () => {
        setIsActive(false);
        setIsPaused(false);
        setDuration(0);
        setTimeLeft(0);
        setIsSettingsOpen(false);
    };

    const handleTimerClick = () => {
        setIsSettingsOpen(true);
    };

    const renderTimerDisplay = () => {
        if (!isActive) {
            return (
                <button onClick={handleTimerClick} className="flex items-center text-punk-sub hover:text-punk-text transition-colors duration-200">
                    <TimerIcon className="h-5 w-5 mr-1" />
                    Set Timer
                </button>
            );
        }
        return (
            <button onClick={handleTimerClick} className="flex items-center font-mono text-punk-cyan drop-shadow-neon-cyan">
                <TimerIcon className="h-5 w-5 mr-2" />
                {formatTime(timeLeft)}
            </button>
        );
    };

    const timerPresets = [15, 25, 45, 60];

    return (
        <div className="relative">
            {renderTimerDisplay()}
            
            <Modal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
                title={isActive ? `Timer: ${formatTime(timeLeft)}` : "Set Study Timer"}
            >
                {isActive ? (
                    <div className="flex flex-col gap-4">
                        <Button onClick={togglePause} variant="primary">{isPaused ? "Resume" : "Pause"}</Button>
                        <Button onClick={addTime} variant="ghost">Add 5 minutes</Button>
                        <Button onClick={resetTimer} variant="secondary">Reset & Stop</Button>
                    </div>
                ) : (
                    <div>
                        <p className="text-punk-sub mb-6 text-center">Choose a duration for your study session.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {timerPresets.map(minutes => (
                                <Button key={minutes} onClick={() => startTimer(minutes * 60)}>
                                    {minutes} minutes
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </Modal>
            
            <Modal
                isOpen={isTimeUpOpen}
                onClose={() => setIsTimeUpOpen(false)}
                title="Time's Up!"
            >
                <p className="text-punk-sub mb-6 text-center">Your study session has ended. Great work!</p>
                <div className="flex justify-center">
                    <Button onClick={() => setIsTimeUpOpen(false)}>
                        OK
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default StudyTimer;
