import React, { useState, useEffect } from 'react';
import { 
  HiGlobeEuropeAfrica,
  HiHeart,
  HiStar,
  HiCheckCircle,
  HiXCircle
} from 'react-icons/hi2';

const GeographyGame = ({ gameId, onComplete }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState(3);

  // Coğrafya oyunları için 7-9 yaş seviyesi içerik
  const gameContent = {
    4: { // Türkiye Macerası
      title: 'Türkiye Macerası 🏰',
      levels: [
        {
          question: 'Türkiye\'nin başkenti hangi şehirdir?',
          options: ['İstanbul', 'Ankara', 'İzmir', 'Antalya'],
          correct: 1,
          visual: '🇹🇷',
          info: 'Ankara 1923\'te Türkiye\'nin başkenti olmuştur!'
        },
        {
          question: 'Hangi şehir Boğaz\'a sahiptir?',
          options: ['Ankara', 'İzmir', 'İstanbul', 'Bursa'],
          correct: 2,
          visual: '🌉',
          info: 'İstanbul, Avrupa ve Asya\'yı birleştiren köprüleriyle ünlüdür!'
        },
        {
          question: 'Hangi şehir Ege Denizi kıyısındadır?',
          options: ['İzmir', 'Kayseri', 'Sivas', 'Erzurum'],
          correct: 0,
          visual: '🏖️',
          info: 'İzmir, Ege Denizi\'nin en güzel şehirlerinden biridir!'
        },
        {
          question: 'Pamukkale hangi şehirdedir?',
          options: ['Antalya', 'Muğla', 'Denizli', 'Aydın'],
          correct: 2,
          visual: '♨️',
          info: 'Denizli\'nin Pamukkale\'si beyaz travertenleriyle ünlüdür!'
        },
        {
          question: 'Kapadokya hangi şehirde bulunur?',
          options: ['Nevşehir', 'Kırşehir', 'Niğde', 'Hepsi'],
          correct: 3,
          visual: '🎈',
          info: 'Kapadokya birden fazla şehirde yer alan büyülü bir bölgedir!'
        }
      ]
    },
    5: { // Dünya Gezgini
      title: 'Dünya Gezgini 🌸',
      levels: [
        {
          question: 'En büyük kıta hangisidir?',
          options: ['Afrika', 'Asya', 'Avrupa', 'Amerika'],
          correct: 1,
          visual: '🌏',
          info: 'Asya, dünyanın en büyük kıtasıdır!'
        },
        {
          question: 'Hangi hayvan Afrika\'da yaşar?',
          options: ['Penguen', 'Aslan', 'Kutup Ayısı', 'Panda'],
          correct: 1,
          visual: '🦁',
          info: 'Aslanlar Afrika savanalarının kralıdır!'
        },
        {
          question: 'Eiffel Kulesi hangi şehirdedir?',
          options: ['Londra', 'Berlin', 'Paris', 'Roma'],
          correct: 2,
          visual: '🗼',
          info: 'Paris\'teki Eiffel Kulesi Fransa\'nın simgesidir!'
        },
        {
          question: 'Penguen hangi kıtada yaşar?',
          options: ['Afrika', 'Asya', 'Antarktika', 'Avrupa'],
          correct: 2,
          visual: '🐧',
          info: 'Penguenler soğuk Antarktika\'da yaşar!'
        },
        {
          question: 'En büyük okyanus hangisidir?',
          options: ['Atlantik', 'Pasifik', 'Hint', 'Arktik'],
          correct: 1,
          visual: '🌊',
          info: 'Pasifik Okyanusu dünyanın en büyük okyanusudur!'
        }
      ]
    },
    6: { // Başkent Kraliçesi
      title: 'Başkent Kraliçesi 👑',
      levels: [
        {
          question: 'Fransa\'nın başkenti nedir?',
          options: ['Lyon', 'Paris', 'Nice', 'Marsilya'],
          correct: 1,
          visual: '🇫🇷',
          info: 'Paris, aşk şehri olarak da bilinir!'
        },
        {
          question: 'İtalya\'nın başkenti nedir?',
          options: ['Milano', 'Venedik', 'Roma', 'Napoli'],
          correct: 2,
          visual: '🇮🇹',
          info: 'Roma, antik tarihiyle ünlü ebedi şehirdir!'
        },
        {
          question: 'Japonya\'nın başkenti nedir?',
          options: ['Osaka', 'Tokyo', 'Kyoto', 'Hiroshima'],
          correct: 1,
          visual: '🇯🇵',
          info: 'Tokyo, dünyanın en kalabalık şehirlerinden biridir!'
        },
        {
          question: 'İngiltere\'nin başkenti nedir?',
          options: ['Manchester', 'Liverpool', 'Londra', 'Birmingham'],
          correct: 2,
          visual: '🇬🇧',
          info: 'Londra, Big Ben\'iyle ünlü tarihi bir şehirdir!'
        },
        {
          question: 'Almanya\'nın başkenti nedir?',
          options: ['Hamburg', 'Münih', 'Berlin', 'Köln'],
          correct: 2,
          visual: '🇩🇪',
          info: 'Berlin, Almanya\'nın modern başkentidir!'
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
      }, 2000); // Biraz daha uzun süre bilgi göstermek için
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
      }, 2000);
    }
  };

  if (!currentGame) {
    return <div>Game not found</div>;
  }

  return (
    <div className="geography-game">
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
            <HiGlobeEuropeAfrica className="globe-icon" />
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
            <div className="info-panel">
              <div className="info-content">
                <span className="info-emoji">💡</span>
                <p>{currentQuestion.info}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .geography-game {
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
          background: #10B981;
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

        .globe-icon {
          font-size: 2rem;
          color: #10B981;
          animation: rotate 10s linear infinite;
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
        }

        .answer-btn:hover:not(:disabled) {
          background: var(--glass-blue);
          transform: translateY(-2px);
          border-color: #10B981;
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

        .info-panel {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 15px;
          border: 1px solid #10B981;
          animation: slideIn 0.5s ease-out;
        }

        .info-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }

        .info-emoji {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .info-content p {
          margin: 0;
          font-size: 1rem;
          color: #059669;
          font-weight: 600;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
          .geography-game {
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

          .globe-icon {
            font-size: 1.5rem;
          }

          .info-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default GeographyGame;