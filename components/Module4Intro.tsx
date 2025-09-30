import React from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface ModuleIntroProps {
  onStart: () => void;
}

const InfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode, className?: string }> = ({ icon, title, children, className }) => (
  <Card className={`text-left ${className}`}>
    <h3 className="text-xl font-bold text-punk-cyan mb-3 flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      {title}
    </h3>
    <p className="text-punk-sub">{children}</p>
  </Card>
);

const Module4Intro: React.FC<ModuleIntroProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-5xl mx-auto text-center">
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
        <h1 className="text-4xl font-bold text-punk-text mb-2">Module 4: The Training Yard</h1>
        <p className="text-lg text-punk-sub mb-8">This is the proving ground. Integrate all your skills to attack and defend causal claims on real LSAT questions.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <InfoCard icon="🕵️‍♀️" title="1. Find an Alternate Cause">
            Is there a third factor? Is the causality reversed? This is your go-to first move for weakening an argument.
          </InfoCard>
          <InfoCard icon="➡️❓" title="2. Show Cause, No Effect">
            Point to an instance where the cause was present, but the effect didn't happen. This directly challenges the causal link.
          </InfoCard>
          <InfoCard icon="❓➡️" title="3. Show Effect, No Cause">
            Find an example where the effect occurred even without the supposed cause. This proves the cause isn't necessary.
          </InfoCard>
        </div>
        
        <Card className="max-w-3xl mx-auto mb-10">
            <p className="text-punk-sub">
                <strong className="text-punk-lime">Remember the flip side:</strong> To <strong className="text-punk-lime">STRENGTHEN</strong> an argument, you'll often do the opposite by eliminating these possibilities. Show that an alternate cause is not the real reason, or provide more evidence of the cause leading to the effect.
            </p>
        </Card>

        <Button onClick={onStart} className="px-10 py-3 text-lg">
          Enter the Yard
        </Button>
      </div>
    </div>
  );
};

export default Module4Intro;
