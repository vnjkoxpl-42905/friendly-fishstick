import React from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface Module1IntroProps {
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

const Module1Intro: React.FC<Module1IntroProps> = ({ onStart }) => {
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
        <h1 className="text-4xl font-bold text-punk-text mb-2">Level 1: The Basics</h1>
        <p className="text-lg text-punk-sub mb-8">Your first mission: tell the difference between a simple link and a forceful cause.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <InfoCard icon="⚡" title="Causation is Force.">
            Look for "driver" verbs that show one thing actively producing another. Think: <em>makes, results in, is responsible for.</em>
          </InfoCard>
          <InfoCard icon="🔗" title="Correlation is a Link.">
            Listen for passive words that only describe an association. Think: <em>is linked to, occurs with, is more likely.</em>
          </InfoCard>
        </div>

        <Button onClick={onStart} className="px-10 py-3 text-lg">
          Start Level 1 Drill
        </Button>
      </div>
    </div>
  );
};

export default Module1Intro;
