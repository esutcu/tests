import React, { useContext } from 'react';
import { LocalizationContext } from '../contexts/LocalizationContext';

const Navbar = () => {
  const { t } = useContext(LocalizationContext);
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="naz-logo-small">NAZ</div>
        <h1>{t('appTitle')}</h1>
      </div>
      <div className="navbar-links">
        <a href="/">{t('home')}</a>
        <a href="/games">{t('games')}</a>
        <a href="/profile">{t('profile')}</a>
      </div>
      <button className="theme-toggle">🌙</button>
    </nav>
  );
};

export default Navbar;