import React, { useState } from 'react';
import { pbqs } from '../data/examData';

export default function PBQView({ setView }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState({});

  const pbq = pbqs[currentIdx];

  const handleSelect = (taskId, value) => {
    setAnswers(prev => ({ ...prev, [taskId]: value }));
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  if (!pbq) {
    return (
      <div className="container animate-fade-in text-center" style={{ marginTop: '4rem' }}>
        <h2>No PBQs available.</h2>
        <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => setView('dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in">
      <header className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <button className="btn-secondary" onClick={() => setView('dashboard')}>&larr; Exit PBQ</button>
        <h2 className="gradient-text">Performance-Based Question Simulation</h2>
        <div style={{ width: '100px' }}></div>
      </header>

      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{pbq.title}</h3>
        <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-muted)' }}>{pbq.scenario}</p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Configuration Tasks:</h4>
        
        <div style={{ display: 'grid', gap: '1rem' }}>
          {pbq.tasks.map((task, idx) => {
            const isCorrect = answers[task.id] === task.action;
            return (
              <div key={task.id} className="flex justify-between items-center" style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                border: showResult ? `1px solid ${isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}` : '1px solid transparent'
              }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 'bold', marginRight: '1rem' }}>Rule {idx + 1}</span>
                  <span>{task.instruction} (Protocol: {task.protocol}, Port: {task.port})</span>
                </div>
                
                <div className="flex gap-4">
                  <select 
                    value={answers[task.id] || ''}
                    onChange={(e) => handleSelect(task.id, e.target.value)}
                    disabled={showResult}
                    style={{
                      padding: '0.5rem',
                      background: 'var(--secondary-bg)',
                      color: 'var(--text-main)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '4px',
                      outline: 'none'
                    }}
                  >
                    <option value="" disabled>Select Action</option>
                    <option value="Allow">Allow</option>
                    <option value="Deny">Deny</option>
                  </select>
                </div>
              </div>
            )
          })}
        </div>

        {showResult && (
          <div className="animate-fade-in" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <p><strong>Review:</strong> {
              pbq.tasks.every(t => answers[t.id] === t.action) 
                ? <span style={{ color: 'var(--accent-green)' }}>All rules configured correctly!</span>
                : <span style={{ color: 'var(--accent-red)' }}>Some rules are incorrect. Review your ACL policies.</span>
            }</p>
          </div>
        )}

        <div style={{ marginTop: '2rem', textAlign: 'right' }}>
          {!showResult ? (
            <button className="btn-primary" onClick={handleSubmit} disabled={Object.keys(answers).length !== pbq.tasks.length}>
              Submit Configuration
            </button>
          ) : (
            <button className="btn-secondary" onClick={() => setView('dashboard')}>Finish Simulation</button>
          )}
        </div>
      </div>
    </div>
  );
}
