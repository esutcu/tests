import React, { useState, useEffect } from 'react';
import { 
  FaCalculator, 
  FaGlobeAsia, 
  FaAppleAlt,
  FaStar,
  FaHeart,
  FaCrown,
  FaGem,
  FaTrophy,
  FaPlus,
  FaMinus,
  FaShapes,
  FaMapMarkedAlt,
  FaMapPin,
  FaSeedling,
  FaSoap,
  FaHeartbeat,
  FaLock,
  FaPlay
} from 'react-icons/fa';
import { 
  HiSparkles,
  HiHeart,
  HiStar,
  HiCog6Tooth as HiCog,
  HiAcademicCap,
  HiGlobeEuropeAfrica as HiGlobe,
  HiLanguage,
  HiChatBubbleLeft
} from 'react-icons/hi2';

const GamesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [unlockedGames, setUnlockedGames] = useState([1, 4, 7, 10]); // İlk oyunlar açık

  const games = [
    // Matematik Oyunları
    { 
      id: 1, 
      theme: 'math', 
      title: 'Prenses Matematik', 
      subtitle: 'Büyülü Sayılar Ülkesi',
      level: 1,
      icon: <FaPlus size={32} />,
      difficulty: 'Kolay',
      description: 'Prenses Anna ile büyülü sayılar ülkesinde toplama macerası! Renkli çiçeklerle sayıları topla ve krallığı kurtar! 🌸',
      duration: '5-10 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: true,
      emoji: '👸',
      color: '#8B5CF6'
    },
    { 
      id: 2, 
      theme: 'math', 
      title: 'Kelebek Bahçesi', 
      subtitle: 'Çıkarma Sanatı',
      level: 2,
      icon: <FaMinus size={32} />,
      difficulty: 'Kolay',
      description: 'Kelebeklerin dans ettiği bahçede çıkarma işlemleri! Her doğru cevapla yeni kelebek kanatları kazan! 🦋',
      duration: '5-10 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '🦋',
      color: '#06B6D4'
    },
    { 
      id: 3, 
      theme: 'math', 
      title: 'Şekil Prensesi', 
      subtitle: 'Geometrik Krallık',
      level: 3,
      icon: <FaShapes size={32} />,
      difficulty: 'Orta',
      description: 'Şekil prensesi ile geometrik krallığı keşfet! Kare sarayı, yuvarlak gölet ve üçgen dağları tanı! ✨',
      duration: '10-15 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '💎',
      color: '#EC4899'
    },
    
    // Coğrafya Oyunları
    { 
      id: 4, 
      theme: 'geography', 
      title: 'Türkiye Macerası', 
      subtitle: 'Güzel Vatanımız',
      level: 1,
      icon: <FaMapMarkedAlt size={32} />,
      difficulty: 'Kolay',
      description: 'Ela ve köpeği Pamuk ile Türkiye\'nin güzel şehirlerini keşfet! Her şehirde yeni arkadaşlar ve lezzetler seni bekliyor! 🏰',
      duration: '10-15 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: true,
      emoji: '🏰',
      color: '#10B981'
    },
    { 
      id: 5, 
      theme: 'geography', 
      title: 'Dünya Gezgini', 
      subtitle: 'Büyülü Kıtalar',
      level: 2,
      icon: <FaGlobeAsia size={32} />,
      difficulty: 'Orta',
      description: 'Peri Lila ile dünya turuna çık! Her kıtada farklı kültürler, renkli kıyafetler ve yemekler keşfet! 🌸',
      duration: '15-20 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '🌸',
      color: '#06B6D4'
    },
    { 
      id: 6, 
      theme: 'geography', 
      title: 'Başkent Kraliçesi', 
      subtitle: 'Şehirlerin Tacı',
      level: 3,
      icon: <FaMapPin size={32} />,
      difficulty: 'Zor',
      description: 'Kraliçe Sofia ile dünyanın başkentlerini keşfet! Her doğru cevapta taç taşı kazan ve başkent uzmanı ol! 👑',
      duration: '15-20 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '👑',
      color: '#8B5CF6'
    },
    
    // Sağlık Oyunları
    { 
      id: 7, 
      theme: 'health', 
      title: 'Beslenme Perisi', 
      subtitle: 'Gökkuşağı Tabağı',
      level: 1,
      icon: <FaSeedling size={32} />,
      difficulty: 'Kolay',
      description: 'Beslenme perisi Zeynep ile gökkuşağı tabağını hazırla! Renkli meyve ve sebzelerle sağlıklı ol! 🌈',
      duration: '5-10 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: true,
      emoji: '🧚‍♀️',
      color: '#F59E0B'
    },
    { 
      id: 8, 
      theme: 'health', 
      title: 'Temizlik Prensesi', 
      subtitle: 'Parlak Krallık',
      level: 2,
      icon: <FaSoap size={32} />,
      difficulty: 'Kolay',
      description: 'Prenses Nur ile temizlik krallığında parıl parıl macera! El yıkama büyüsünü öğren ve mikropları yok et! ✨',
      duration: '5-10 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '✨',
      color: '#10B981'
    },
    { 
      id: 9, 
      theme: 'health', 
      title: 'Dans Kraliçesi', 
      subtitle: 'Hareket Sarayı',
      level: 3,
      icon: <FaHeartbeat size={32} />,
      difficulty: 'Orta',
      description: 'Dans kraliçesi Ayşe ile hareket sarayında eğlenceli egzersizler! Müzikle dans et ve güçlü ol! 💃',
      duration: '10-15 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '💃',
      color: '#EC4899'
    },
    
    // İngilizce Oyunları
    { 
      id: 10, 
      theme: 'english', 
      title: 'Renkler ve Sayılar', 
      subtitle: 'Colors & Numbers',
      level: 1,
      icon: <HiLanguage size={32} />,
      difficulty: 'Kolay',
      description: 'İngilizce renkleri ve sayıları öğren! Basit kelimelerle İngilizce dünyasına giriş yap! 🌈',
      duration: '5-10 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: true,
      emoji: '🌈',
      color: '#8B5CF6'
    },
    { 
      id: 11, 
      theme: 'english', 
      title: 'Basit Kelimeler', 
      subtitle: 'Simple Words',
      level: 2,
      icon: <HiChatBubbleLeft size={32} />,
      difficulty: 'Kolay',
      description: 'Cat, Dog, Ball gibi basit İngilizce kelimeleri öğren ve eğlenceli oyunlarla pratik yap! 🐱',
      duration: '10-15 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '🐱',
      color: '#06B6D4'
    },
    { 
      id: 12, 
      theme: 'english', 
      title: 'Selam ve Vedalar', 
      subtitle: 'Hello & Goodbye',
      level: 3,
      icon: <FaHeart size={32} />,
      difficulty: 'Orta',
      description: 'Hello, Goodbye, Please, Thank you gibi nezaket kelimelerini öğren! 👋',
      duration: '10-15 dk',
      stars: 0,
      maxStars: 3,
      isUnlocked: false,
      emoji: '👋',
      color: '#10B981'
    }
  ];

  const categories = [
    { id: 'all', name: 'Tüm Oyunlar', icon: <HiSparkles size={20} />, color: '#8B5CF6', emoji: '✨' },
    { id: 'math', name: 'Matematik', icon: <HiAcademicCap size={20} />, color: '#06B6D4', emoji: '🧮' },
    { id: 'geography', name: 'Coğrafya', icon: <HiGlobe size={20} />, color: '#10B981', emoji: '🌍' },
    { id: 'health', name: 'Sağlık', icon: <HiHeart size={20} />, color: '#F59E0B', emoji: '🍎' },
    { id: 'english', name: 'İngilizce', icon: <HiLanguage size={20} />, color: '#EC4899', emoji: '🇬🇧' }
  ];

  const [filteredGames, setFilteredGames] = useState(games);
  const [achievements, setAchievements] = useState({
    totalStars: 0,
    completedGames: 0,
    perfectGames: 0
  });

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter(game => game.theme === selectedCategory));
    }
  }, [selectedCategory]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Kolay': return '#98FB98';
      case 'Orta': return '#FFE4B5';
      case 'Zor': return '#FFB6C1';
      default: return '#E6E6FA';
    }
  };

  const renderStars = (stars, maxStars) => {
    return Array.from({ length: maxStars }, (_, index) => (
      <FaStar 
        key={index} 
        className={`star ${index < stars ? 'filled' : 'empty'}`}
        size={16}
      />
    ));
  };

  const handleGameClick = (game) => {
    if (!game.isUnlocked) {
      // Oyun kilitli uyarısı göster
      return;
    }
    // Oyun başlatma logiki
    console.log(`${game.title} oyunu başlatılıyor...`);
  };

  return (
    <div className="games-page">
      <div className="page-header">
        <div className="header-content glass-pink">
          <div className="header-left">
            <div className="page-logo">
              <img 
                src="/icon-set/icon-512x512.png" 
                alt="Oyun Dünyası" 
                className="page-logo-image"
              />
            </div>
            <h1 className="page-title">
              <FaGem className="title-gem" />
              Oyun Dünyası
              <FaGem className="title-gem" />
            </h1>
            <p className="page-subtitle">
              Öğrenmenin en eğlenceli hali seni bekliyor! ✨
            </p>
          </div>
          
          <div className="achievement-preview">
            <div className="achievement-item">
              <FaTrophy className="achievement-icon" />
              <div className="achievement-text">
                <span className="achievement-number">{achievements.completedGames}</span>
                <span className="achievement-label">Tamamlanan</span>
              </div>
            </div>
            <div className="achievement-item">
              <FaStar className="achievement-icon star-icon" />
              <div className="achievement-text">
                <span className="achievement-number">{achievements.totalStars}</span>
                <span className="achievement-label">Toplam Yıldız</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category-filter">
        <h3 className="filter-title">
          <FaHeart className="filter-heart" />
          Hangi konuyu öğrenmek istiyorsun?
        </h3>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              style={{ '--category-color': category.color }}
            >
              <span className="category-emoji">{category.emoji}</span>
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
              <div className="category-shine"></div>
            </button>
          ))}
        </div>
      </div>

      <div className="games-grid">
        {filteredGames.map(game => (
          <div 
            key={game.id} 
            className={`game-card ${game.theme} ${!game.isUnlocked ? 'locked' : ''}`}
            onClick={() => handleGameClick(game)}
          >
            <div className="card-header">
              <div className="game-level">
                <span className="level-text">Seviye {game.level}</span>
                {game.isUnlocked ? (
                  <FaCrown className="level-crown" />
                ) : (
                  <FaLock className="level-lock" />
                )}
              </div>
              <div className="game-emoji">{game.emoji}</div>
            </div>

            <div className="card-content">
              <div className="game-icon" style={{ color: game.color }}>
                {game.icon}
              </div>
              
              <h3 className="game-title">{game.title}</h3>
              <h4 className="game-subtitle">{game.subtitle}</h4>
              <p className="game-description">{game.description}</p>
            </div>

            <div className="card-meta">
              <div className="game-info">
                <div className="info-item">
                  <span className="info-label">Süre:</span>
                  <span className="info-value">{game.duration}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Zorluk:</span>
                  <span 
                    className="difficulty-badge"
                    style={{ backgroundColor: getDifficultyColor(game.difficulty) }}
                  >
                    {game.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="game-progress">
                <div className="stars-container">
                  {renderStars(game.stars, game.maxStars)}
                </div>
                <span className="progress-text">
                  {game.stars}/{game.maxStars} Yıldız
                </span>
              </div>
            </div>

            <div className="card-footer">
              {game.isUnlocked ? (
                <button className="play-button">
                  <FaPlay className="play-icon" />
                  <span>Oyna</span>
                  <div className="play-shimmer"></div>
                </button>
              ) : (
                <div className="locked-message">
                  <FaLock className="lock-icon" />
                  <span>Önceki oyunu tamamla</span>
                </div>
              )}
            </div>

            <div className="card-overlay"></div>
            {!game.isUnlocked && <div className="lock-overlay"></div>}
          </div>
        ))}
      </div>

      <div className="progress-summary glass">
        <h3 className="summary-title">
          <FaTrophy className="summary-icon" />
          İlerleme Özeti
        </h3>
        <div className="progress-stats">
          <div className="stat-circle">
            <div className="circle-progress" style={{ '--progress': '33%' }}>
              <span className="circle-text">4/12</span>
            </div>
            <span className="circle-label">Oyun Açık</span>
          </div>
          <div className="stat-circle">
            <div className="circle-progress" style={{ '--progress': '0%' }}>
              <span className="circle-text">0/12</span>
            </div>
            <span className="circle-label">Tamamlandı</span>
          </div>
          <div className="stat-circle">
            <div className="circle-progress" style={{ '--progress': '0%' }}>
              <span className="circle-text">0/36</span>
            </div>
            <span className="circle-label">Toplam Yıldız</span>
          </div>
        </div>
      </div>

      <style>{`
        .games-page {
          padding: 2rem 0;
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 3rem;
        }

        .header-content {
          padding: 2.5rem;
          border-radius: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .page-logo {
          margin-bottom: 1rem;
          text-align: center;
        }

        .page-logo-image {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
          animation: bounce 2s ease-in-out infinite;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #FF1493;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .title-gem {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .achievement-preview {
          display: flex;
          gap: 2rem;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--glass-white);
          padding: 1rem 1.5rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
        }

        .achievement-icon {
          font-size: 1.5rem;
          color: #FFD700;
        }

        .star-icon {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .achievement-text {
          display: flex;
          flex-direction: column;
        }

        .achievement-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: #FF1493;
        }

        .achievement-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .category-filter {
          margin-bottom: 3rem;
          text-align: center;
        }

        .filter-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FF69B4;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .filter-heart {
          color: #FF1493;
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        .category-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .category-btn {
          background: var(--glass-white);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 1rem 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
        }

        .category-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
        }

        .category-btn.active {
          background: var(--category-color);
          color: white;
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
        }

        .category-emoji {
          font-size: 1.2rem;
        }

        .category-icon {
          font-size: 1rem;
        }

        .category-name {
          font-size: 1rem;
        }

        .category-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.3);
          transition: left 0.5s;
        }

        .category-btn:hover .category-shine {
          left: 100%;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .game-card {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 25px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-hover);
        }

        .game-card.math {
          background: rgba(255, 182, 193, 0.15);
        }

        .game-card.geography {
          background: rgba(152, 251, 152, 0.15);
        }

        .game-card.health {
          background: rgba(255, 228, 181, 0.15);
        }

        .game-card.english {
          background: rgba(236, 72, 153, 0.15);
        }

        .game-card.locked {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .game-card.locked:hover {
          transform: none;
          box-shadow: var(--shadow-card);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .game-level {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-purple);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
        }

        .level-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .level-crown {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .level-lock {
          color: #888;
        }

        .game-emoji {
          font-size: 2rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .card-content {
          text-align: center;
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .game-icon {
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .game-card:hover .game-icon {
          transform: scale(1.1);
        }

        .game-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #FF1493;
          margin-bottom: 0.5rem;
        }

        .game-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: #9966CC;
          margin-bottom: 1rem;
        }

        .game-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-meta {
          margin-bottom: 1.5rem;
        }

        .game-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .info-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .info-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .difficulty-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #333;
          text-align: center;
        }

        .game-progress {
          text-align: center;
        }

        .stars-container {
          display: flex;
          justify-content: center;
          gap: 0.3rem;
          margin-bottom: 0.5rem;
        }

        .star {
          transition: all 0.3s ease;
        }

        .star.filled {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .star.empty {
          color: #DDD;
        }

        .progress-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .card-footer {
          margin-top: auto;
        }

        .play-button {
          width: 100%;
          background: #8B5CF6;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 20px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .play-button:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
        }

        .play-icon {
          animation: bounce 2s ease-in-out infinite;
        }

        .play-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.2);
          transition: left 0.6s;
        }

        .play-button:hover .play-shimmer {
          left: 100%;
        }

        .locked-message {
          width: 100%;
          background: #888;
          color: white;
          padding: 1rem;
          border-radius: 20px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .lock-icon {
          color: #BBB;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .game-card:hover .card-overlay {
          opacity: 1;
        }

        .lock-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
        }

        .progress-summary {
          padding: 2.5rem;
          border-radius: 25px;
          text-align: center;
          margin-top: 3rem;
        }

        .summary-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #FF69B4;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .summary-icon {
          color: #FFD700;
        }

        .progress-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .circle-progress {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: conic-gradient(#FF69B4 var(--progress), #E6E6FA var(--progress));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-progress::before {
          content: '';
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
        }

        .circle-text {
          position: relative;
          z-index: 2;
          font-size: 1.2rem;
          font-weight: 800;
          color: #FF1493;
        }

        .circle-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        /* Animasyonlar */
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
          }

          .achievement-preview {
            flex-direction: column;
            gap: 1rem;
          }

          .page-title {
            font-size: 2rem;
            flex-direction: column;
          }

          .category-buttons {
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }

          .games-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .progress-stats {
            gap: 2rem;
          }
        }
      }
      }

        @media (max-width: 480px) {
          .games-page {
            padding: 1rem 0;
          }

          .header-content {
            padding: 2rem 1.5rem;
          }

          .game-card {
            padding: 1.5rem;
            min-height: 350px;
          }

          .category-buttons {
            flex-direction: column;
            align-items: center;
          }

          .category-btn {
            width: 100%;
            max-width: 250px;
          }

          .progress-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .games-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default GamesPage;