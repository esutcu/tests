import React, { useContext } from 'react';
import { LocalizationContext } from '../contexts/LocalizationContext';

const HomePage = () => {
  const { t } = useContext(LocalizationContext);

  return (
    <div className="home-page">
      <div className="naz-header">
        <div className="naz-logo">
          <div className="logo-placeholder">NAZ</div>
        </div>
        <h1 className="naz-title">{t('appTitle')}</h1>
        <p className="naz-subtitle">{t('welcomeMessage')}</p>
      </div>
      <div className="naz-features">
        <div className="feature-card">
          <h3>{t('games.math')}</h3>
          <p>{t('mathDescription')}</p>
        </div>
        <div className="feature-card">
          <h3>{t('games.geography')}</h3>
          <p>{t('geographyDescription')}</p>
        </div>
        <div className="feature-card">
          <h3>{t('games.health')}</h3>
          <p>{t('healthDescription')}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;