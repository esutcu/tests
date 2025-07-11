import React, { useContext } from 'react';
import { LocalizationContext } from '../contexts/LocalizationContext';

const ProfilePage = () => {
  const { t } = useContext(LocalizationContext);

  return (
    <div className="profile-page">
      <h2>{t('profile')}</h2>
      <div className="profile-info">
        <div className="avatar">NAZ</div>
        <div className="stats">
          <div className="stat-item">
            <span>{t('completedGames')}</span>
            <strong>0/9</strong>
          </div>
          <div className="stat-item">
            <span>{t('totalStars')}</span>
            <strong>0</strong>
          </div>
        </div>
      </div>
      <div className="progress-section">
        <h3>{t('progress')}</h3>
        <div className="progress-bars">
          <div className="progress-bar math">
            <div className="progress-fill" style={{ width: '30%' }}></div>
            <span>Matematik</span>
          </div>
          <div className="progress-bar geography">
            <div className="progress-fill" style={{ width: '10%' }}></div>
            <span>Coğrafya</span>
          </div>
          <div className="progress-bar health">
            <div className="progress-fill" style={{ width: '5%' }}></div>
            <span>Sağlık</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;