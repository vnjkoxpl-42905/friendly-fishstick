import React from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface ModuleIntroProps {
  onStart: () => void;
}

const InfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <Card className="text-left">
    <h3 className="text-xl font-bold text-punk-cyan mb-3 flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      {title}
    </h3>
    <p className="text-punk-sub">{children}</p>
  </Card>
);

const Module2Intro: React.FC<ModuleIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold text-punk-text mb-2">Level 2: Alternate Explanations</h1>
        <p className="text-lg text-punk-sub mb-8">Every causal claim has a shadow. Your job is to find it.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <InfoCard icon="🕵️‍♀️" title="The Third Factor">
            What if a hidden third thing caused *both* the 'cause' and the 'effect'? Ex: Hot weather (Third Factor) causes both ice cream sales (A) and crime rates (B) to rise.
          </InfoCard>
          <InfoCard icon="🔄" title="Reverse Causality">
            What if you have it backwards? Maybe the 'effect' actually caused the 'cause'. Ex: Does being civically engaged (A) make you live in a walkable neighborhood (B), or do walkable neighborhoods make you more engaged?
          </InfoCard>
        </div>

        <Button onClick={onStart} className="px-10 py-3 text-lg">
          Start Level 2 Drill
        </Button>
      </div>
    </div>
  );
};

export default Module2Intro;
