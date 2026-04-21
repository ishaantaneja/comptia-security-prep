import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import QuizView from './components/QuizView';
import StudyMode from './components/StudyMode';
import PBQView from './components/PBQView';

function App() {
  const [view, setView] = useState('dashboard'); // dashboard, study, quiz, pbq
  const [selectedDomain, setSelectedDomain] = useState(null);

  const renderView = () => {
    switch(view) {
      case 'dashboard':
        return <Dashboard setView={setView} setSelectedDomain={setSelectedDomain} />;
      case 'study':
        return <StudyMode setView={setView} selectedDomain={selectedDomain} />;
      case 'quiz':
        return <QuizView setView={setView} selectedDomain={selectedDomain} />;
      case 'pbq':
        return <PBQView setView={setView} />;
      default:
        return <Dashboard setView={setView} setSelectedDomain={setSelectedDomain} />;
    }
  };

  return (
    <div className="app-container">
      {renderView()}
    </div>
  );
}

export default App;
