
import React from 'react';
import Card from './common/Card';
import Button from './common/Button';

const TutorAdmin: React.FC = () => {
  return (
    <Card>
      <h2 className="text-3xl font-bold text-punk-text mb-4">Tutor Admin Panel</h2>
      <p className="text-punk-sub mb-6">
        Manage student progress, add notes, and generate new session links.
      </p>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input 
              type="text" 
              placeholder="Student Name (optional)" 
              className="w-full sm:w-1/2 bg-punk-base border border-punk-sub/30 rounded-md px-4 py-3 text-punk-text focus:outline-none focus:ring-2 focus:ring-punk-cyan"
            />
            <Button className="w-full sm:w-auto">Generate New Link</Button>
        </div>
        <div className="bg-punk-base/50 p-4 rounded-lg">
          <p className="font-mono text-punk-lime">
            https://causation.coach/session/a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6
          </p>
          <p className="text-xs text-punk-sub mt-1">
            Generated for: Alice Smith | Expires in: 7 days
          </p>
        </div>
      </div>

       <div className="mt-8">
        <h3 className="text-xl font-bold text-punk-text mb-4">Student Analytics</h3>
        <p className="text-punk-sub">Student analytics and note-taking features would be displayed here.</p>
      </div>
    </Card>
  );
};

export default TutorAdmin;
