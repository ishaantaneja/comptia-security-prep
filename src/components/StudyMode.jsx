import React, { useState } from 'react';
import { flashcards, domains } from '../data/examData';

export default function StudyMode({ setView, selectedDomain }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const domain = domains.find(d => d.id === selectedDomain);
  const cards = selectedDomain 
    ? flashcards.filter(f => f.domainId === selectedDomain)
    : flashcards;

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  if (!cards.length) {
    return (
      <div className="container animate-fade-in text-center" style={{ marginTop: '4rem' }}>
        <h2>No flashcards available for this domain.</h2>
        <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => setView('dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  const card = cards[currentIdx];

  return (
    <div className="container animate-fade-in">
      <header className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <button className="btn-secondary" onClick={() => setView('dashboard')}>&larr; Back</button>
        <div style={{ textAlign: 'center' }}>
          <h2 className="gradient-text" style={{ margin: 0 }}>Study Mode</h2>
          <p className="text-muted" style={{ margin: 0 }}>{domain ? domain.name : 'All Domains'}</p>
        </div>
        <button className="btn-primary" onClick={() => setView('quiz')}>Start Quiz</button>
      </header>

      <div style={{ perspective: '1000px', width: '100%', maxWidth: '600px', margin: '4rem auto', height: '400px' }}>
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            cursor: 'pointer'
          }}
        >
          {/* Front */}
          <div className="glass-panel flex flex-col justify-center items-center" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>{card.term}</h3>
            <p className="text-muted" style={{ marginTop: 'auto', fontSize: '0.9rem' }}>Click to flip</p>
          </div>

          {/* Back */}
          <div className="glass-panel flex flex-col justify-center items-center" style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>{card.definition}</p>
            <p className="text-muted" style={{ marginTop: 'auto', fontSize: '0.9rem' }}>Click to flip back</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6" style={{ marginTop: '2rem' }}>
        <button className="btn-secondary" onClick={handlePrev}>&larr; Prev</button>
        <span>{currentIdx + 1} / {cards.length}</span>
        <button className="btn-secondary" onClick={handleNext}>Next &rarr;</button>
      </div>
    </div>
  );
}
