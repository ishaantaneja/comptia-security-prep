import React, { useState, useEffect, useMemo } from 'react';
import { questions } from '../data/examData';

export default function QuizView({ setView, selectedDomain }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60); // 90 minutes in seconds

  // Memoize the selected 90 questions so it doesn't reshuffle on every render
  const quizQuestions = useMemo(() => {
    let pool = selectedDomain 
      ? questions.filter(q => q.domainId === selectedDomain)
      : questions;
      
    // Randomly shuffle and select up to 90 questions for the real exam feel
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 90);
  }, [selectedDomain]);

  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleAnswer = (index) => {
    if (showExplanation) return;
    setSelectedOption(index);
    setShowExplanation(true);
    if (index === quizQuestions[currentQuestionIdx].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setShowExplanation(false);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="container animate-fade-in text-center" style={{ marginTop: '4rem' }}>
        <h2>No questions available for this domain yet.</h2>
        <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => setView('dashboard')}>Back to Dashboard</button>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="container animate-fade-in" style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Quiz Completed</h2>
        <div className="glass-panel" style={{ padding: '3rem', maxWidth: '500px', margin: '0 auto' }}>
          <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--accent-green)' }}>
            {Math.round((score / quizQuestions.length) * 100)}%
          </div>
          <p className="text-muted" style={{ fontSize: '1.2rem', margin: '1rem 0' }}>
            You answered {score} out of {quizQuestions.length} questions correctly.
          </p>
          <button className="btn-primary" style={{ width: '100%', marginTop: '1.5rem' }} onClick={() => setView('dashboard')}>
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const q = quizQuestions[currentQuestionIdx];

  return (
    <div className="container animate-fade-in">
      <header className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <button className="btn-secondary" onClick={() => setView('dashboard')}>&larr; Exit Quiz</button>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: timeLeft < 300 ? 'var(--accent-red)' : 'var(--text-main)' }}>
          ⏱ {formatTime(timeLeft)}
        </div>
        <div>Question {currentQuestionIdx + 1} of {quizQuestions.length}</div>
      </header>

      <div className="glass-panel" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: '1.4' }}>{q.text}</h3>
        
        <div className="flex flex-col gap-4">
          {q.options.map((opt, idx) => {
            let bgColor = 'var(--glass-bg)';
            let borderColor = 'var(--glass-border)';
            if (showExplanation) {
              if (idx === q.correctAnswer) {
                bgColor = 'rgba(74, 222, 128, 0.2)';
                borderColor = 'var(--accent-green)';
              } else if (idx === selectedOption) {
                bgColor = 'rgba(248, 113, 113, 0.2)';
                borderColor = 'var(--accent-red)';
              }
            }

            return (
              <button
                key={idx}
                disabled={showExplanation}
                onClick={() => handleAnswer(idx)}
                style={{
                  background: bgColor,
                  border: `1px solid ${borderColor}`,
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                  color: 'var(--text-main)',
                  fontSize: '1.1rem',
                  transition: 'all 0.2s'
                }}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="animate-fade-in" style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <h4 style={{ color: selectedOption === q.correctAnswer ? 'var(--accent-green)' : 'var(--accent-red)', marginBottom: '0.5rem' }}>
              {selectedOption === q.correctAnswer ? 'Correct!' : 'Incorrect'}
            </h4>
            <p style={{ lineHeight: '1.6' }}>{q.explanation}</p>
            <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={nextQuestion}>
              {currentQuestionIdx < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
