import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocalizationContext } from '../contexts/LocalizationContext';
import { useTheme } from '../contexts/ThemeContext';
import { 
  HiHome,
  HiPuzzlePiece,
  HiUser,
  HiMusicalNote,
  HiMoon,
  HiSun
} from 'react-icons/hi2';

const Navbar = () => {
  const { t } = useContext(LocalizationContext);
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src="/icon-set/icon-192x192.png" 
          alt="NAZ Logo" 
          className="navbar-logo"
        />
        <h1 className="app-title">Eğitim Krallığı</h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <HiHome className="nav-icon" />
          <span>Ana Sayfa</span>
        </Link>
        <Link to="/games" className="nav-link">
          <HiPuzzlePiece className="nav-icon" />
          <span>Oyunlar</span>
        </Link>
        <Link to="/music" className="nav-link">
          <HiMusicalNote className="nav-icon" />
          <span>Şarkı Dinle</span>
        </Link>
        <Link to="/profile" className="nav-link">
          <HiUser className="nav-icon" />
          <span>Profil</span>
        </Link>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? (
          <HiSun className="theme-icon" />
        ) : (
          <HiMoon className="theme-icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;