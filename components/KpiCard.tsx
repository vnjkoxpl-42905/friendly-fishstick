
import React from 'react';
import Card from './common/Card';

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, description, className = '' }) => {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-punk-cyan/10 rounded-full blur-2xl"></div>
      <p className="text-sm font-medium text-punk-sub">{title}</p>
      <p className="text-4xl font-bold text-punk-cyan drop-shadow-neon-cyan mt-2">{value}</p>
      <p className="text-xs text-punk-sub mt-1">{description}</p>
    </Card>
  );
};

export default KpiCard;