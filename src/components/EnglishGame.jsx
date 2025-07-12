import React, { useState, useEffect } from 'react';
import { 
  HiSpeakerWave,
  HiHeart,
  HiStar,
  HiArrowRight,
  HiCheckCircle,
  HiXCircle
} from 'react-icons/hi2';

const EnglishGame = ({ gameId, onComplete }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState(3);

  // 7 yaş seviyesi basit İngilizce içerik
  const gameContent = {
    10: { // Renkler ve Sayılar
      title: 'Colors & Numbers 🌈',
      levels: [
        {
          question: 'What color is this? 🔴',
          options: ['Red', 'Blue', 'Green', 'Yellow'],
          correct: 0,
          audio: 'red'
        },
        {
          question: 'What color is this? 🔵',
          options: ['Red', 'Blue', 'Green', 'Yellow'],
          correct: 1,
          audio: 'blue'
        },
        {
          question: 'How many apples? 🍎🍎🍎',
          options: ['One', 'Two', 'Three', 'Four'],
          correct: 2,
          audio: 'three'
        },
        {
          question: 'What color is this? 🟡',
          options: ['Red', 'Blue', 'Green', 'Yellow'],
          correct: 3,
          audio: 'yellow'
        },
        {
          question: 'How many cats? 🐱🐱',
          options: ['One', 'Two', 'Three', 'Four'],
          correct: 1,
          audio: 'two'
        }
      ]
    },
    11: { // Basit Kelimeler
      title: 'Simple Words 🐱',
      levels: [
        {
          question: 'What is this? 🐱',
          options: ['Dog', 'Cat', 'Bird', 'Fish'],
          correct: 1,
          audio: 'cat'
        },
        {
          question: 'What is this? 🐕',
          options: ['Dog', 'Cat', 'Bird', 'Fish'],
          correct: 0,
          audio: 'dog'
        },
        {
          question: 'What is this? ⚽',
          options: ['Book', 'Ball', 'Car', 'House'],
          correct: 1,
          audio: 'ball'
        },
        {
          question: 'What is this? 🏠',
          options: ['Book', 'Ball', 'Car', 'House'],
          correct: 3,
          audio: 'house'
        },
        {
          question: 'What is this? 🚗',
          options: ['Book', 'Ball', 'Car', 'House'],
          correct: 2,
          audio: 'car'
        }
      ]
    }
  };

  const currentGame = gameContent[gameId];
  const currentQuestion = currentGame?.levels[currentLevel];

  const playAudio = (word) => {
    // Basit text-to-speech simulation
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === currentQuestion.correct) {
      setScore(score + 1);
      setTimeout(() => {
        if (currentLevel < currentGame.levels.length - 1) {
          setCurrentLevel(currentLevel + 1);
          setSelectedAnswer(null);
          setShowResult(false);
        } else {
          // Oyun tamamlandı
          onComplete(score + 1, currentGame.levels.length);
        }
      }, 1500);
    } else {
      setHearts(hearts - 1);
      setTimeout(() => {
        if (hearts > 1) {
          setSelectedAnswer(null);
          setShowResult(false);
        } else {
          // Oyun bitti
          onComplete(score, currentGame.levels.length);
        }
      }, 1500);
    }
  };

  if (!currentGame) {
    return <div>Game not found</div>;
  }

  return (
    <div className="english-game">
      <div className="game-header">
        <h2 className="game-title">{currentGame.title}</h2>
        <div className="game-stats">
          <div className="hearts">
            {Array.from({ length: 3 }, (_, i) => (
              <HiHeart 
                key={i} 
                className={`heart ${i < hearts ? 'active' : 'inactive'}`}
              />
            ))}
          </div>
          <div className="score">
            <HiStar className="star-icon" />
            <span>{score}/{currentGame.levels.length}</span>
          </div>
        </div>
      </div>

      <div className="question-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentLevel + 1) / currentGame.levels.length) * 100}%` }}
          ></div>
        </div>

        <div className="question-card">
          <h3 className="question">{currentQuestion.question}</h3>
          
          <button 
            className="audio-btn"
            onClick={() => playAudio(currentQuestion.options[currentQuestion.correct])}
          >
            <HiSpeakerWave className="speaker-icon" />
            <span>Listen</span>
          </button>

          <div className="answers-grid">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`answer-btn ${
                  selectedAnswer === index
                    ? index === currentQuestion.correct
                      ? 'correct'
                      : 'wrong'
                    : ''
                } ${showResult && index === currentQuestion.correct ? 'highlight' : ''}`}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
              >
                {option}
                {showResult && index === currentQuestion.correct && (
                  <HiCheckCircle className="result-icon correct-icon" />
                )}
                {showResult && selectedAnswer === index && index !== currentQuestion.correct && (
                  <HiXCircle className="result-icon wrong-icon" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .english-game {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .game-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .game-stats {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hearts {
          display: flex;
          gap: 0.3rem;
        }

        .heart {
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .heart.active {
          color: #EC4899;
        }

        .heart.inactive {
          color: #D1D5DB;
        }

        .score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-light);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }

        .star-icon {
          color: #F59E0B;
          font-size: 1.2rem;
        }

        .score span {
          font-weight: 600;
          color: var(--text-primary);
        }

        .question-container {
          background: var(--glass-light);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid var(--glass-border);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #E5E7EB;
          border-radius: 4px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #EC4899;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .question-card {
          text-align: center;
        }

        .question {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .audio-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #06B6D4;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 auto 2rem;
        }

        .audio-btn:hover {
          background: #0891B2;
          transform: scale(1.05);
        }

        .speaker-icon {
          font-size: 1.2rem;
        }

        .answers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .answer-btn {
          background: var(--glass-white);
          border: 2px solid var(--glass-border);
          border-radius: 15px;
          padding: 1.5rem 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .answer-btn:hover:not(:disabled) {
          background: var(--glass-purple);
          transform: translateY(-2px);
          border-color: var(--naz-primary);
        }

        .answer-btn.correct {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10B981;
          color: #059669;
        }

        .answer-btn.wrong {
          background: rgba(239, 68, 68, 0.2);
          border-color: #EF4444;
          color: #DC2626;
        }

        .answer-btn.highlight {
          background: rgba(16, 185, 129, 0.3);
          border-color: #10B981;
          animation: pulse 1s ease-in-out;
        }

        .result-icon {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1.5rem;
        }

        .correct-icon {
          color: #10B981;
        }

        .wrong-icon {
          color: #EF4444;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 480px) {
          .english-game {
            padding: 1rem;
          }

          .game-header {
            flex-direction: column;
            text-align: center;
          }

          .answers-grid {
            grid-template-columns: 1fr;
          }

          .question {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EnglishGame;