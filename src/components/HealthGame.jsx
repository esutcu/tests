import React, { useState, useEffect } from 'react';
import { 
  HiHeart,
  HiStar,
  HiCheckCircle,
  HiXCircle,
  HiSparkles
} from 'react-icons/hi2';

const HealthGame = ({ gameId, onComplete }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState(3);

  // Sağlık oyunları için 7-9 yaş seviyesi içerik
  const gameContent = {
    7: { // Beslenme Perisi
      title: 'Beslenme Perisi 🧚‍♀️',
      levels: [
        {
          question: 'Hangi besin grubu güçlü kemikler için önemlidir?',
          options: ['Şeker', 'Süt Ürünleri', 'Cips', 'Gazoz'],
          correct: 1,
          visual: '🥛',
          tip: 'Süt, peynir ve yoğurt kalsiyum açısından zengindir!'
        },
        {
          question: 'Hangi besin vitamin deposudur?',
          options: ['Çikolata', 'Meyve', 'Şeker', 'Fast Food'],
          correct: 1,
          visual: '🍎',
          tip: 'Meyveler vitamin ve mineral bakımından çok zengindir!'
        },
        {
          question: 'Gün içinde kaç bardak su içmeliyiz?',
          options: ['1-2 bardak', '3-4 bardak', '6-8 bardak', '10+ bardak'],
          correct: 2,
          visual: '💧',
          tip: 'Su vücudumuzun en önemli ihtiyacıdır!'
        },
        {
          question: 'Kahvaltı neden önemlidir?',
          options: ['Zayıflatır', 'Enerji verir', 'Acıktırır', 'Uyku getirir'],
          correct: 1,
          visual: '🍳',
          tip: 'Kahvaltı güne enerjik başlamamızı sağlar!'
        },
        {
          question: 'Hangi besin grubunu daha az tüketmeliyiz?',
          options: ['Sebze', 'Meyve', 'Şekerli gıdalar', 'Süt'],
          correct: 2,
          visual: '🍭',
          tip: 'Şekerli gıdalar sınırlı miktarda tüketilmelidir!'
        }
      ]
    },
    8: { // Temizlik Prensesi
      title: 'Temizlik Prensesi ✨',
      levels: [
        {
          question: 'El yıkama hangi durumlarda yapılmalıdır?',
          options: ['Sadece kirlenince', 'Yemek öncesi/sonrası', 'Hiç', 'Ayda bir'],
          correct: 1,
          visual: '🧼',
          tip: 'Eller günde birçok kez yıkanmalıdır!'
        },
        {
          question: 'Dişler günde kaç kez fırçalanmalıdır?',
          options: ['1 kez', '2 kez', '3 kez', 'Hiç'],
          correct: 1,
          visual: '🦷',
          tip: 'Sabah ve akşam diş fırçalamak önemlidir!'
        },
        {
          question: 'Hangi durum hastalık bulaştırabilir?',
          options: ['El sıkışmak', 'Kirli elinle yemek', 'Gülümsemek', 'Oyun oynamak'],
          correct: 1,
          visual: '🦠',
          tip: 'Kirli eller mikroplara ev sahipliği yapar!'
        },
        {
          question: 'Banyo ne sıklıkla yapılmalıdır?',
          options: ['Ayda bir', 'Haftada bir', 'Her gün', 'Yılda bir'],
          correct: 2,
          visual: '🛁',
          tip: 'Düzenli banyo yapmak sağlık için çok önemlidir!'
        },
        {
          question: 'Hangi davranış sağlıklıdır?',
          options: ['Burnunu kazmak', 'Mendil kullanmak', 'Yere tükürmek', 'Kirli giysi giymek'],
          correct: 1,
          visual: '🤧',
          tip: 'Mendil kullanmak hem kendi hem de başkalarının sağlığını korur!'
        }
      ]
    },
    9: { // Dans Kraliçesi
      title: 'Dans Kraliçesi 💃',
      levels: [
        {
          question: 'Spor neden önemlidir?',
          options: ['Yorar', 'Güçlendirir', 'Hastalandırır', 'Zaman kaybıdır'],
          correct: 1,
          visual: '💪',
          tip: 'Spor kasları güçlendirir ve kalbi sağlıklı tutar!'
        },
        {
          question: 'Hangi aktivite en eğlencelidir?',
          options: ['TV izlemek', 'Oyun oynamak', 'Dans etmek', 'Uyumak'],
          correct: 2,
          visual: '💃',
          tip: 'Dans hem eğlenceli hem de harika bir egzersizdir!'
        },
        {
          question: 'Günde kaç saat uyumalıyız?',
          options: ['4-5 saat', '6-7 saat', '9-10 saat', '12+ saat'],
          correct: 2,
          visual: '😴',
          tip: 'Yeterli uyku büyüme ve gelişim için çok önemlidir!'
        },
        {
          question: 'Hangi aktivite kardio egzersizi sayılır?',
          options: ['Kitap okumak', 'Koşmak', 'TV izlemek', 'Yemek yemek'],
          correct: 1,
          visual: '🏃‍♀️',
          tip: 'Koşmak kalp sağlığı için mükemmel bir egzersizdir!'
        },
        {
          question: 'Egzersiz sonrası ne yapmalıyız?',
          options: ['Hemen yatmak', 'Su içmek', 'Fast food yemek', 'Hiçbir şey'],
          correct: 1,
          visual: '💦',
          tip: 'Egzersiz sonrası su içmek çok önemlidir!'
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
      }, 2500); // Uzun süre tip göstermek için
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
      }, 2500);
    }
  };

  if (!currentGame) {
    return <div>Game not found</div>;
  }

  return (
    <div className="health-game">
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
            <HiSparkles className="sparkle-icon" />
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

          {showResult && selectedAnswer === currentQuestion.correct && (
            <div className="tip-panel">
              <div className="tip-content">
                <span className="tip-emoji">🌟</span>
                <div className="tip-text">
                  <h4>Harika! Sağlık İpucu:</h4>
                  <p>{currentQuestion.tip}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .health-game {
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
          background: #F59E0B;
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
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .visual-display {
          font-size: 3rem;
          line-height: 1;
        }

        .sparkle-icon {
          font-size: 2rem;
          color: #F59E0B;
          animation: sparkle 2s ease-in-out infinite;
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
          text-align: center;
        }

        .answer-btn:hover:not(:disabled) {
          background: rgba(245, 158, 11, 0.1);
          transform: translateY(-2px);
          border-color: #F59E0B;
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

        .tip-panel {
          margin-top: 2rem;
          padding: 2rem;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 15px;
          border: 1px solid #F59E0B;
          animation: slideIn 0.5s ease-out;
        }

        .tip-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          text-align: left;
        }

        .tip-emoji {
          font-size: 2.5rem;
          flex-shrink: 0;
          animation: bounce 1s ease-in-out infinite;
        }

        .tip-text h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
          color: #D97706;
          font-weight: 700;
        }

        .tip-text p {
          margin: 0;
          font-size: 1rem;
          color: #92400E;
          font-weight: 500;
          line-height: 1.4;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-2px); }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .health-game {
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
            font-size: 2.5rem;
          }

          .sparkle-icon {
            font-size: 1.5rem;
          }

          .tip-content {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .tip-text {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HealthGame;