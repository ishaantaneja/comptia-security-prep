import React from 'react';
import { domains } from '../data/examData';

export default function Dashboard({ setView, setSelectedDomain }) {
  const handleDomainClick = (domainId) => {
    setSelectedDomain(domainId);
    setView('study');
  };

  return (
    <div className="container animate-fade-in">
      <header className="flex justify-between items-center" style={{ marginBottom: '3rem' }}>
        <div>
          <h1 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>CompTIA Security+ SY0-701</h1>
          <p className="text-muted">Master the 5 domains and ace your exam.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-secondary" onClick={() => setView('pbq')}>PBQ Simulations</button>
          <button className="btn-primary" onClick={() => setView('quiz')}>Take Full Practice Exam</button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {domains.map(domain => (
          <div 
            key={domain.id} 
            className="glass-panel domain-card"
            onClick={() => handleDomainClick(domain.id)}
          >
            <div className="flex justify-between items-center">
              <span style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>Domain {domain.id}.0</span>
              <span className="text-muted" style={{ fontSize: '0.875rem' }}>Weight: {domain.weight}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{domain.name}</h3>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>{domain.description}</p>
            
            <div style={{ marginTop: 'auto' }}>
              <div className="flex justify-between text-muted" style={{ fontSize: '0.8rem', marginBottom: '0.25rem' }}>
                <span>Progress</span>
                <span>0%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
