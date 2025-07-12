import React, { useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import EnglishGame from './EnglishGame';
import MathGame from './MathGame';
import GeographyGame from './GeographyGame';
import HealthGame from './HealthGame';

const GameModal = ({ game, isOpen, onClose }) => {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [gameScore, setGameScore] = useState(null);

  if (!isOpen || !game) return null;

  const handleGameComplete = (score, totalQuestions) => {
    setGameScore({ score, totalQuestions });
    setGameCompleted(true);
    
    // 3 saniye sonra modal'ı kapat
    setTimeout(() => {
      onClose();
      setGameCompleted(false);
      setGameScore(null);
    }, 3000);
  };

  const handleClose = () => {
    onClose();
    setGameCompleted(false);
    setGameScore(null);
  };

  return (
    <div className="game-modal-overlay" onClick={handleClose}>
      <div className="game-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>
          <HiXMark />
        </button>
        
        {!gameCompleted ? (
          <div className="game-content">
            {game.theme === 'english' && (
              <EnglishGame 
                gameId={game.id} 
                onComplete={handleGameComplete}
              />
            )}
            {game.theme === 'math' && (
              <MathGame 
                gameId={game.id} 
                onComplete={handleGameComplete}
              />
            )}
            {game.theme === 'geography' && (
              <GeographyGame 
                gameId={game.id} 
                onComplete={handleGameComplete}
              />
            )}
            {game.theme === 'health' && (
              <HealthGame 
                gameId={game.id} 
                onComplete={handleGameComplete}
              />
            )}
          </div>
        ) : (
          <div className="game-complete-screen">
            <div className="completion-celebration">
              <div className="celebration-emoji">🎉</div>
              <h2>Tebrikler!</h2>
              <p>Oyunu tamamladın!</p>
              <div className="final-score">
                <span className="score-text">
                  {gameScore.score}/{gameScore.totalQuestions} Doğru
                </span>
                <div className="stars">
                  {Array.from({ length: 3 }, (_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < Math.ceil((gameScore.score / gameScore.totalQuestions) * 3) ? 'filled' : 'empty'}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          .game-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
          }

          .game-modal {
            background: var(--glass-white);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 25px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }

          .modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--glass-light);
            border: 1px solid var(--glass-border);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-secondary);
            font-size: 1.2rem;
            transition: all 0.3s ease;
            z-index: 10;
          }

          .modal-close-btn:hover {
            background: var(--naz-danger);
            color: white;
            transform: scale(1.1);
          }

          .game-content {
            padding: 1rem;
          }

          .game-placeholder {
            text-align: center;
            padding: 3rem 2rem;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .game-placeholder h3 {
            font-size: 2rem;
            color: var(--naz-primary);
            margin-bottom: 1rem;
          }

          .game-placeholder p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
          }

          .game-preview {
            background: var(--glass-light);
            border-radius: 20px;
            padding: 2rem;
            border: 1px solid var(--glass-border);
            max-width: 400px;
          }

          .game-preview .game-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .game-complete-screen {
            padding: 3rem 2rem;
            text-align: center;
            min-height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .completion-celebration {
            background: var(--glass-light);
            border-radius: 25px;
            padding: 3rem 2rem;
            border: 1px solid var(--glass-border);
            max-width: 400px;
          }

          .celebration-emoji {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: bounce 1s ease-in-out infinite;
          }

          .completion-celebration h2 {
            font-size: 2.5rem;
            color: var(--naz-primary);
            margin-bottom: 1rem;
          }

          .completion-celebration p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
          }

          .final-score {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }

          .score-text {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--naz-accent);
          }

          .stars {
            display: flex;
            gap: 0.5rem;
          }

          .star {
            font-size: 2rem;
            transition: all 0.3s ease;
          }

          .star.filled {
            filter: drop-shadow(0 0 8px #FFD700);
            animation: sparkle 1s ease-in-out infinite;
          }

          .star.empty {
            opacity: 0.3;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          @keyframes sparkle {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(180deg); }
          }

          @media (max-width: 768px) {
            .game-modal {
              width: 95%;
              margin: 1rem;
              max-height: 95vh;
            }

            .game-placeholder,
            .game-complete-screen {
              padding: 2rem 1rem;
            }

            .completion-celebration {
              padding: 2rem 1rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default GameModal;