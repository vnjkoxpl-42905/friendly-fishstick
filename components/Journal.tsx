import React from 'react';
import { MOCK_JOURNAL_ENTRIES } from '../constants';
import Card from './common/Card';

const Journal: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-punk-text mb-6">Mistake Journal</h2>
      <p className="text-punk-sub mb-8 max-w-3xl">
        Every great mind keeps a record of their toughest challenges. This is your personalized log of questions you've struggled with. Review them, understand the traps, and never make the same mistake twice.
      </p>
      
      {MOCK_JOURNAL_ENTRIES.length === 0 ? (
        <Card className="text-center">
          <p className="text-punk-sub">Your journal is empty for now. Incorrect answers from your drills will appear here automatically.</p>
        </Card>
      ) : (
        <div className="space-y-8">
          {MOCK_JOURNAL_ENTRIES.map((entry, index) => (
            <Card key={`${entry.question.id}-${index}`} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold text-punk-text mb-2">Question ({entry.question.id})</h3>
                <div className="p-4 bg-punk-base/50 rounded-lg border border-punk-sub/20 mb-4">
                    <p className="text-punk-sub italic leading-relaxed">{entry.question.stem}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {entry.tags.map(tag => (
                        <span key={tag} className="bg-punk-magenta/20 text-punk-magenta text-xs font-semibold px-2.5 py-1 rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold text-punk-cyan mb-2">Your Analysis</h3>
                <p className="text-punk-sub whitespace-pre-wrap">{entry.notes}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Journal;
