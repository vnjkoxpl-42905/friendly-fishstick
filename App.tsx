
import React, { useState, useCallback, useEffect } from 'react';
import Launcher from './components/Launcher';
import DrillPlayer from './components/DrillPlayer';
import Dashboard from './components/Dashboard';
import Journal from './components/Journal';
import TutorAdmin from './components/TutorAdmin';
import Flashcards from './components/Flashcards';
import OnboardingGuide from './components/OnboardingGuide';
import { Module } from './constants';

type View = 'launcher' | 'drill' | 'dashboard' | 'journal' | 'admin' | 'flashcards';

const App: React.FC = () => {
  const [view, setView] = useState<View>('launcher');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleLogin = useCallback((name: string) => {
    setIsLoggedIn(true);
    setStudentName(name);
    setView('dashboard');

    const hasSeenOnboarding = localStorage.getItem('hasSeenOnboardingGuide');
    if (!hasSeenOnboarding) {
      setShowOnboarding(true);
      localStorage.setItem('hasSeenOnboardingGuide', 'true');
    }
  }, []);

  const handleStartDrill = useCallback((module: Module) => {
    setSelectedModule(module);
    setView('drill');
  }, []);

  const handleEndDrill = useCallback(() => {
    setSelectedModule(null);
    setView('dashboard');
  }, []);

  const handleCloseOnboarding = () => {
    setShowOnboarding(false);
  };
  
  const handleShowOnboarding = () => {
    setShowOnboarding(true);
  };

  const NavItem: React.FC<{ current: View; target: View; label: string; onClick: (v: View) => void }> = ({ current, target, label, onClick }) => (
    <button
      onClick={() => onClick(target)}
      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        current === target
          ? 'text-punk-cyan drop-shadow-neon-cyan'
          : 'text-punk-sub hover:text-punk-text'
      }`}
    >
      {label}
    </button>
  );

  const renderContent = () => {
    if (!isLoggedIn) {
      return <Launcher onLogin={handleLogin} />;
    }
    switch (view) {
      case 'dashboard':
        return <Dashboard studentName={studentName} onStartDrill={handleStartDrill} onShowGuide={handleShowOnboarding} />;
      case 'drill':
        return selectedModule && <DrillPlayer module={selectedModule} onEndDrill={handleEndDrill} />;
      case 'journal':
        return <Journal />;
      case 'flashcards':
        return <Flashcards />;
      case 'admin':
        return <TutorAdmin />;
      case 'launcher':
      default:
        return <Launcher onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-punk-base text-punk-text font-sans flex flex-col items-center p-4 sm:p-8">
      {showOnboarding && <OnboardingGuide onClose={handleCloseOnboarding} />}
      <div className="w-full max-w-7xl">
        {isLoggedIn && (
          <header className="flex items-center mb-8 justify-end">
            <nav className="bg-punk-panel/50 backdrop-blur-sm border border-punk-sub/20 rounded-full px-2">
              <NavItem current={view} target="dashboard" label="Dashboard" onClick={setView} />
              <NavItem current={view} target="flashcards" label="Flashcards" onClick={setView} />
              <NavItem current={view} target="journal" label="Journal" onClick={setView} />
              <NavItem current={view} target="admin" label="Tutor Admin" onClick={setView} />
            </nav>
          </header>
        )}
        <main>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
