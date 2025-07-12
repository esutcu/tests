import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaCrown, 
  FaCalculator, 
  FaGlobeAsia, 
  FaAppleAlt,
  FaStar,
  FaPlay,
  FaGem,
  FaMagic
} from 'react-icons/fa';
import { 
  HiSparkles,
  HiHeart,
  HiStar,
  HiAcademicCap,
  HiGlobeEuropeAfrica as HiGlobe
} from 'react-icons/hi2';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="naz-header">
        <div className="sparkle-container">
          <HiSparkles className="sparkle sparkle-1" />
          <HiSparkles className="sparkle sparkle-2" />
          <HiSparkles className="sparkle sparkle-3" />
        </div>
        
        <div className="naz-logo">
          <div className="logo-container">
            <img 
              src="/icon-set/icon-192x192.png" 
              alt="NAZ Eğitim Krallığı Logo" 
              className="logo-image"
            />
            <div className="logo-text">
              <FaCrown className="crown-icon" />
              NAZ
              <FaCrown className="crown-icon" />
            </div>
          </div>
        </div>
        
        <h1 className="naz-title">
          <FaGem className="title-gem" />
          NAZ Eğitim Krallığı
          <FaGem className="title-gem" />
        </h1>
        
        <p className="naz-subtitle">
          7-9 yaş prensesleri için büyülü öğrenme macerası! ✨
        </p>
        
        <div className="welcome-stats">
          <div className="stat-bubble">
            <HiStar className="stat-icon" />
            <span className="stat-text">12 Büyülü Oyun</span>
          </div>
          <div className="stat-bubble">
            <HiHeart className="stat-icon" />
            <span className="stat-text">Eğlenceli Öğrenme</span>
          </div>
          <div className="stat-bubble">
            <FaCrown className="stat-icon" />
            <span className="stat-text">Kişisel Gelişim</span>
          </div>
        </div>

        <Link to="/games" className="start-adventure-btn">
          <FaPlay className="play-icon" />
          <span>Maceraya Başla!</span>
          <div className="btn-shimmer"></div>
        </Link>
      </div>

      <div className="naz-features">
        <div className="feature-card math-feature">
          <div className="feature-icon">
            <FaCalculator size={40} />
          </div>
          <div className="feature-emoji">👸</div>
          <h3>Matematik Prensesleri</h3>
          <p>Sayılarla büyülü maceralar yaşa! Prenseslerle toplama, çıkarma ve geometri öğren.</p>
          <div className="feature-preview">
            <span className="preview-tag">Prenses Matematik</span>
            <span className="preview-tag">Kelebek Bahçesi</span>
            <span className="preview-tag">Şekil Prensesi</span>
          </div>
        </div>

        <div className="feature-card geography-feature">
          <div className="feature-icon">
            <HiGlobe size={40} />
          </div>
          <div className="feature-emoji">🌸</div>
          <h3>Dünya Gezginleri</h3>
          <p>Dünyayı keşfet ve yeni yerler öğren! Türkiye'den başla, tüm dünyayı gez.</p>
          <div className="feature-preview">
            <span className="preview-tag">Türkiye Macerası</span>
            <span className="preview-tag">Dünya Gezgini</span>
            <span className="preview-tag">Başkent Kraliçesi</span>
          </div>
        </div>

        <div className="feature-card health-feature">
          <div className="feature-icon">
            <FaAppleAlt size={40} />
          </div>
          <div className="feature-emoji">🧚‍♀️</div>
          <h3>Sağlık Perileri</h3>
          <p>Sağlıklı yaşamı öğren ve güçlü ol! Beslenme, temizlik ve spor ile parlak ol.</p>
          <div className="feature-preview">
            <span className="preview-tag">Beslenme Perisi</span>
            <span className="preview-tag">Temizlik Prensesi</span>
            <span className="preview-tag">Dans Kraliçesi</span>
          </div>
        </div>

        <div className="feature-card english-feature">
          <div className="feature-icon">
            <HiGlobe size={40} />
          </div>
          <div className="feature-emoji">🇬🇧</div>
          <h3>İngilizce Macerası</h3>
          <p>Basit İngilizce kelimelerle dünyaya açıl! Renkler, sayılar ve günlük kelimeler.</p>
          <div className="feature-preview">
            <span className="preview-tag">Renkler ve Sayılar</span>
            <span className="preview-tag">Basit Kelimeler</span>
            <span className="preview-tag">Selam ve Vedalar</span>
          </div>
        </div>
      </div>

      <div className="motivation-section glass-pink">
        <h2 className="motivation-title">
          <FaHeart className="heart-icon" />
          Sen Çok Özelsin!
        </h2>
        <p className="motivation-text">
          Her oyun oynayışında daha akıllı, daha güçlü ve daha özgüvenli oluyorsun! 
          Öğrenmenin ne kadar eğlenceli olduğunu keşfet ve kendi krallığını yarat! 💖
        </p>
        <div className="achievement-preview">
          <div className="achievement-badge">
            <FaCrown className="badge-icon" />
            <span>Öğrenme Kraliçesi</span>
          </div>
          <div className="achievement-badge">
            <FaStar className="badge-icon" />
            <span>Yıldız Koleksiyoncusu</span>
          </div>
          <div className="achievement-badge">
            <FaGem className="badge-icon" />
            <span>Bilgi Hazinesi</span>
          </div>
        </div>
      </div>

      <style>{`
        .home-page {
          position: relative;
          overflow: hidden;
        }

        .sparkle-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          color: #FFD700;
          animation: sparkleFloat 3s ease-in-out infinite;
        }

        .sparkle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          font-size: 1.5rem;
        }

        .sparkle-2 {
          top: 60%;
          right: 15%;
          animation-delay: 1s;
          font-size: 1.2rem;
        }

        .sparkle-3 {
          top: 80%;
          left: 20%;
          animation-delay: 2s;
          font-size: 1.3rem;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .logo-image {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(255, 105, 180, 0.3);
          animation: bounce 2s ease-in-out infinite;
        }

        .logo-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 800;
          color: #FF1493;
        }

        .crown-icon {
          color: #FFD700;
          margin: 0 0.5rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .title-gem {
          color: #FFD700;
          margin: 0 1rem;
          animation: sparkle 2s ease-in-out infinite;
        }

        .welcome-stats {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .stat-bubble {
          background: var(--glass-white);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 25px;
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s ease;
        }

        .stat-bubble:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .stat-icon {
          color: #8B5CF6;
          font-size: 1.2rem;
        }

        .stat-text {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .start-adventure-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: #8B5CF6;
          color: white;
          padding: 1.5rem 3rem;
          border-radius: 30px;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 2rem;
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .start-adventure-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(255, 105, 180, 0.6);
        }

        .play-icon {
          animation: bounce 2s ease-in-out infinite;
        }

        .btn-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.3);
          transition: left 0.6s;
        }

        .start-adventure-btn:hover .btn-shimmer {
          left: 100%;
        }

        .feature-card {
          position: relative;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem 2rem;
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .feature-icon {
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .math-feature .feature-icon {
          color: #06B6D4;
        }

        .geography-feature .feature-icon {
          color: #10B981;
        }

        .health-feature .feature-icon {
          color: #F59E0B;
        }

        .english-feature .feature-icon {
          color: #EC4899;
        }

        .feature-emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .feature-card h3 {
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .feature-card p {
          text-align: center;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .feature-preview {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .preview-tag {
          background: rgba(255, 255, 255, 0.6);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          color: var(--text-primary);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(5px);
        }

        .motivation-section {
          margin-top: 4rem;
          padding: 3rem 2rem;
          border-radius: 25px;
          text-align: center;
        }

        .motivation-title {
          font-size: 2rem;
          font-weight: 800;
          color: #FF1493;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .heart-icon {
          color: #EC4899;
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        .motivation-text {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .achievement-preview {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .achievement-badge {
          background: var(--glass-white);
          padding: 1rem 1.5rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .achievement-badge:hover {
          transform: scale(1.05);
        }

        .badge-icon {
          color: #FFD700;
          font-size: 1.2rem;
        }

        .achievement-badge span {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

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

        @media (max-width: 768px) {
          .welcome-stats {
            flex-direction: column;
            align-items: center;
          }

          .stat-bubble {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }

          .start-adventure-btn {
            padding: 1.2rem 2rem;
            font-size: 1.1rem;
          }

          .achievement-preview {
            flex-direction: column;
            align-items: center;
          }

          .achievement-badge {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;