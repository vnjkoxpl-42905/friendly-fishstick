
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-punk-panel/50 backdrop-blur-lg border border-punk-sub/20 rounded-lg p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;
