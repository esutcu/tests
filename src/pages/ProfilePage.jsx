import React from 'react';
import { 
  HiUser,
  HiTrophy,
  HiStar,
  HiAcademicCap,
  HiGlobeEuropeAfrica as HiGlobe,
  HiHeart,
  HiChartBar
} from 'react-icons/hi2';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <HiUser className="profile-header-icon" />
        <h2>Profil</h2>
      </div>
      
      <div className="profile-info">
        <div className="avatar">
          <img 
            src="/icon-set/icon-192x192.png" 
            alt="Profil" 
            className="avatar-image"
          />
          <div className="avatar-text">NAZ</div>
        </div>
        <div className="stats">
          <div className="stat-item">
            <HiTrophy className="stat-icon trophy" />
            <div className="stat-content">
              <span>Tamamlanan Oyunlar</span>
              <strong>0/9</strong>
            </div>
          </div>
          <div className="stat-item">
            <HiStar className="stat-icon star" />
            <div className="stat-content">
              <span>Toplam Yıldız</span>
              <strong>0</strong>
            </div>
          </div>
        </div>
      </div>
      
      <div className="progress-section">
        <div className="progress-header">
          <HiChartBar className="progress-header-icon" />
          <h3>İlerleme</h3>
        </div>
        <div className="progress-bars">
          <div className="progress-bar math">
            <div className="progress-info">
              <HiAcademicCap className="progress-icon" />
              <span>Matematik</span>
              <span className="progress-percent">30%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="progress-bar geography">
            <div className="progress-info">
              <HiGlobe className="progress-icon" />
              <span>Coğrafya</span>
              <span className="progress-percent">10%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '10%' }}></div>
            </div>
          </div>
          <div className="progress-bar health">
            <div className="progress-info">
              <HiHeart className="progress-icon" />
              <span>Sağlık</span>
              <span className="progress-percent">5%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profile-page {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          text-align: center;
          justify-content: center;
        }

        .profile-header-icon {
          font-size: 2rem;
          color: #8B5CF6;
        }

        .profile-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2D3748;
          margin: 0;
        }

        .profile-info {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .avatar-image {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }

        .avatar-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: #8B5CF6;
        }

        .stats {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-item {
          background: var(--glass-light);
          padding: 1.5rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid var(--glass-border);
        }

        .stat-icon {
          font-size: 1.8rem;
        }

        .stat-icon.trophy {
          color: #F59E0B;
        }

        .stat-icon.star {
          color: #EAB308;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-content span {
          font-size: 0.9rem;
          color: #6B7280;
          margin-bottom: 0.5rem;
        }

        .stat-content strong {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1F2937;
        }

        .progress-section {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .progress-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
        }

        .progress-header-icon {
          font-size: 1.8rem;
          color: #06B6D4;
        }

        .progress-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2D3748;
          margin: 0;
        }

        .progress-bars {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .progress-bar {
          background: var(--glass-light);
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid var(--glass-border);
        }

        .progress-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .progress-icon {
          font-size: 1.3rem;
        }

        .progress-bar.math .progress-icon {
          color: #06B6D4;
        }

        .progress-bar.geography .progress-icon {
          color: #10B981;
        }

        .progress-bar.health .progress-icon {
          color: #F59E0B;
        }

        .progress-info span:first-of-type {
          flex: 1;
          font-weight: 600;
          color: #374151;
        }

        .progress-percent {
          font-weight: 700;
          color: #6B7280;
        }

        .progress-track {
          height: 10px;
          background: #E5E7EB;
          border-radius: 5px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 5px;
          transition: width 0.8s ease;
        }

        .progress-bar.math .progress-fill {
          background: #06B6D4;
        }

        .progress-bar.geography .progress-fill {
          background: #10B981;
        }

        .progress-bar.health .progress-fill {
          background: #F59E0B;
        }

        @media (max-width: 768px) {
          .profile-info {
            flex-direction: column;
            text-align: center;
          }

          .stats {
            grid-template-columns: 1fr;
            width: 100%;
          }

          .progress-info {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;