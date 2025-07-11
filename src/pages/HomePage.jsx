import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="naz-header">
        <div className="naz-logo">
          <div className="logo-placeholder">NAZ</div>
        </div>
        <h1 className="naz-title">NAZ Eğitici Oyun Platformu</h1>
        <p className="naz-subtitle">7-10 yaş çocuklar için eğitici oyunlar</p>
      </div>
      <div className="naz-features">
        <div className="feature-card">
          <h3>Matematik</h3>
          <p>Eğlenceli matematik oyunları</p>
        </div>
        <div className="feature-card">
          <h3>Coğrafya</h3>
          <p>Dünyayı keşfet</p>
        </div>
        <div className="feature-card">
          <h3>Sağlık</h3>
          <p>Sağlıklı yaşam bilgileri</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;