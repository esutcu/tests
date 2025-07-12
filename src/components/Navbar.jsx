import React, { useContext } from 'react';
import { LocalizationContext } from '../contexts/LocalizationContext';

const Navbar = () => {
  const { t } = useContext(LocalizationContext);
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="naz-logo-small">NAZ</div>
        <h1 className="app-title">{t('appTitle')}</h1>
      </div>
      <div className="navbar-links">
        <a href="/" className="nav-link">{t('home')}</a>
        <a href="/games" className="nav-link">{t('games')}</a>
        <a href="/profile" className="nav-link">{t('profile')}</a>
      </div>
      <button className="theme-toggle">🌙</button>
    </nav>
  );
};

export default Navbar;