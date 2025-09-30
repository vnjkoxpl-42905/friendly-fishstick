import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

interface LauncherProps {
  onLogin: (name: string) => void;
}

const Launcher: React.FC<LauncherProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !token.trim()) return;
    setIsLoading(true);
    // Simulate API call for token validation
    setTimeout(() => {
      setIsLoading(false);
      onLogin(name);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
      <Card className="w-full max-w-md text-center animate-fade-in">
        <h2 className="text-2xl font-bold text-punk-text">Welcome to the</h2>
        <h1 className="text-5xl font-extrabold text-punk-magenta drop-shadow-neon-magenta my-3 tracking-tight">Causation Station!</h1>
        <p className="text-punk-sub mt-2 mb-8">Enter your name and session token to begin.</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            aria-label="Enter your name"
            className="w-full bg-punk-base border border-punk-sub/30 rounded-md px-4 py-3 text-punk-text text-center focus:outline-none focus:ring-2 focus:ring-punk-magenta transition-all"
            disabled={isLoading}
            required
          />
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="paste-your-token-here"
            aria-label="Paste your session token"
            className="w-full bg-punk-base border border-punk-sub/30 rounded-md px-4 py-3 text-punk-text text-center focus:outline-none focus:ring-2 focus:ring-punk-cyan transition-all"
            disabled={isLoading}
            required
          />
          <Button type="submit" disabled={isLoading || !token || !name}>
            {isLoading ? 'Verifying...' : 'Enter the Station'}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Launcher;