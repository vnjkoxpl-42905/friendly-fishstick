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

const Module3Intro: React.FC<ModuleIntroProps> = ({ onStart }) => {
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
        <h1 className="text-4xl font-bold text-punk-text mb-2">Level 3: Test the Relationship</h1>
        <p className="text-lg text-punk-sub mb-8">The claim is a machine. Your job is to throw a wrench in it.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <InfoCard icon="➡️❓" title="Cause without Effect">
            Show that the 'cause' happened, but the 'effect' didn't. If the policy was implemented but nothing changed, the policy probably wasn't the cause.
          </InfoCard>
          <InfoCard icon="❓➡️" title="Effect without Cause">
            Show that the 'effect' happened, even when the 'cause' was absent. If another company got the same results *without* the new policy, the policy might be irrelevant.
          </InfoCard>
        </div>

        <Button onClick={onStart} className="px-10 py-3 text-lg">
          Start Level 3 Drill
        </Button>
      </div>
    </div>
  );
};

export default Module3Intro;
