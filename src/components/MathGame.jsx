import React, { useState, useEffect } from 'react';
import { 
  HiSparkles,
  HiHeart,
  HiStar,
  HiCheckCircle,
  HiXCircle
} from 'react-icons/hi2';

const MathGame = ({ gameId, onComplete }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState(3);

  // Matematik oyunları için 7-9 yaş seviyesi içerik
  const gameContent = {
    1: { // Prenses Matematik - Toplama
      title: 'Prenses Matematik 👸',
      levels: [
        {
          question: 'Prenses Anna\'nın 3 gülü var. 2 gül daha aldı. Toplam kaç gülü oldu?',
          options: ['4', '5', '6', '7'],
          correct: 1,
          visual: '🌹🌹🌹 + 🌹🌹 = ?'
        },
        {
          question: 'Sarayda 4 kelebek vardı. 3 kelebek daha geldi. Toplam kaç kelebek?',
          options: ['6', '7', '8', '9'],
          correct: 1,
          visual: '🦋🦋🦋🦋 + 🦋🦋🦋 = ?'
        },
        {
          question: 'Prenses\'in 5 taşı var. 4 taş daha buldu. Toplam kaç taş?',
          options: ['8', '9', '10', '11'],
          correct: 1,
          visual: '💎💎💎💎💎 + 💎💎💎💎 = ?'
        },
        {
          question: 'Bahçede 2 çiçek vardı. 6 çiçek daha açtı. Toplam kaç çiçek?',
          options: ['7', '8', '9', '10'],
          correct: 1,
          visual: '🌸🌸 + 🌸🌸🌸🌸🌸🌸 = ?'
        },
        {
          question: 'Prenses\'in 7 süsü var. 3 süs daha aldı. Toplam kaç süs?',
          options: ['9', '10', '11', '12'],
          correct: 1,
          visual: '👑👑👑👑👑👑👑 + 👑👑👑 = ?'
        }
      ]
    },
    2: { // Kelebek Bahçesi - Çıkarma
      title: 'Kelebek Bahçesi 🦋',
      levels: [
        {
          question: 'Bahçede 7 kelebek vardı. 3 kelebek uçtu. Kaç kelebek kaldı?',
          options: ['3', '4', '5', '6'],
          correct: 1,
          visual: '🦋🦋🦋🦋🦋🦋🦋 - 🦋🦋🦋 = ?'
        },
        {
          question: 'Çiçekte 9 arı vardı. 4 arı gitti. Kaç arı kaldı?',
          options: ['4', '5', '6', '7'],
          correct: 1,
          visual: '🐝🐝🐝🐝🐝🐝🐝🐝🐝 - 🐝🐝🐝🐝 = ?'
        },
        {
          question: 'Ağaçta 8 kuş vardı. 5 kuş uçtu. Kaç kuş kaldı?',
          options: ['2', '3', '4', '5'],
          correct: 1,
          visual: '🐦🐦🐦🐦🐦🐦🐦🐦 - 🐦🐦🐦🐦🐦 = ?'
        },
        {
          question: 'Gölette 6 balık vardı. 2 balık yüzüp gitti. Kaç balık kaldı?',
          options: ['3', '4', '5', '6'],
          correct: 1,
          visual: '🐠🐠🐠🐠🐠🐠 - 🐠🐠 = ?'
        },
        {
          question: 'Sepette 10 meyve vardı. 3 meyve yendi. Kaç meyve kaldı?',
          options: ['6', '7', '8', '9'],
          correct: 1,
          visual: '🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎 - 🍎🍎🍎 = ?'
        }
      ]
    },
    3: { // Şekil Prensesi - Geometri
      title: 'Şekil Prensesi 💎',
      levels: [
        {
          question: 'Bu hangi şekil?',
          options: ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
          correct: 0,
          visual: '⬜'
        },
        {
          question: 'Bu hangi şekil?',
          options: ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
          correct: 2,
          visual: '🔵'
        },
        {
          question: 'Bu hangi şekil?',
          options: ['Kare', 'Üçgen', 'Daire', 'Dikdörtgen'],
          correct: 1,
          visual: '🔺'
        },
        {
          question: 'Karenin kaç köşesi vardır?',
          options: ['2', '3', '4', '5'],
          correct: 2,
          visual: '⬜'
        },
        {
          question: 'Üçgenin kaç kenarı vardır?',
          options: ['2', '3', '4', '5'],
          correct: 1,
          visual: '🔺'
        }
      ]
    }
  };

  const currentGame = gameContent[gameId];
  const currentQuestion = currentGame?.levels[currentLevel];

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
    <div className="math-game">
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
          <div className="visual-area">
            <div className="visual-display">{currentQuestion.visual}</div>
          </div>
          
          <h3 className="question">{currentQuestion.question}</h3>

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
        .math-game {
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
          background: #8B5CF6;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .question-card {
          text-align: center;
        }

        .visual-area {
          margin-bottom: 2rem;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 15px;
          border: 1px solid var(--glass-border);
        }

        .visual-display {
          font-size: 2.5rem;
          line-height: 1.5;
          color: var(--text-primary);
        }

        .question {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          line-height: 1.5;
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
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          min-height: 70px;
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
          .math-game {
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
            font-size: 1.1rem;
          }

          .visual-display {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MathGame;