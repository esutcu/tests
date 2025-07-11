import React from 'react';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h2>Profil</h2>
      <div className="profile-info">
        <div className="avatar">NAZ</div>
        <div className="stats">
          <div className="stat-item">
            <span>Tamamlanan Oyunlar</span>
            <strong>0/9</strong>
          </div>
          <div className="stat-item">
            <span>Toplam Yıldız</span>
            <strong>0</strong>
          </div>
        </div>
      </div>
      <div className="progress-section">
        <h3>İlerleme</h3>
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