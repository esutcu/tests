import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="naz-logo-small">NAZ</div>
        <h1>NAZ Eğitici Oyun</h1>
      </div>
      <div className="navbar-links">
        <a href="/">Ana Sayfa</a>
        <a href="/games">Oyunlar</a>
        <a href="/profile">Profil</a>
      </div>
      <button className="theme-toggle">🌙</button>
    </nav>
  );
};

export default Navbar;