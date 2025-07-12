import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LocalizationProvider } from './contexts/LocalizationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import MusicPage from './pages/MusicPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <div className="App">
        <Navbar />
        <div className="container page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
        
        {/* Floating Background Elements */}
        <div className="bg-decorations">
          <div className="floating-heart floating-heart-1">💖</div>
          <div className="floating-heart floating-heart-2">✨</div>
          <div className="floating-heart floating-heart-3">🌟</div>
          <div className="floating-heart floating-heart-4">💫</div>
          <div className="floating-heart floating-heart-5">🎀</div>
          <div className="floating-heart floating-heart-6">🦄</div>
        </div>

        <style>{`
          .App {
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
          }

          .page {
            position: relative;
            z-index: 2;
            padding-top: 2rem;
            padding-bottom: 4rem;
          }

          .bg-decorations {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
          }

          .floating-heart {
            position: absolute;
            font-size: 2rem;
            opacity: 0.1;
            animation: floatAround 20s ease-in-out infinite;
          }

          .floating-heart-1 {
            top: 10%;
            left: 5%;
            animation-delay: 0s;
            animation-duration: 25s;
          }

          .floating-heart-2 {
            top: 20%;
            right: 10%;
            animation-delay: 3s;
            animation-duration: 30s;
          }

          .floating-heart-3 {
            top: 50%;
            left: 8%;
            animation-delay: 6s;
            animation-duration: 22s;
          }

          .floating-heart-4 {
            top: 70%;
            right: 15%;
            animation-delay: 9s;
            animation-duration: 28s;
          }

          .floating-heart-5 {
            top: 30%;
            left: 50%;
            animation-delay: 12s;
            animation-duration: 24s;
          }

          .floating-heart-6 {
            top: 80%;
            left: 20%;
            animation-delay: 15s;
            animation-duration: 26s;
          }

          @keyframes floatAround {
            0%, 100% {
              transform: translateX(0px) translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateX(30px) translateY(-20px) rotate(90deg);
            }
            50% {
              transform: translateX(-20px) translateY(-40px) rotate(180deg);
            }
            75% {
              transform: translateX(-30px) translateY(-10px) rotate(270deg);
            }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .page {
              padding-top: 1rem;
              padding-bottom: 2rem;
            }

            .floating-heart {
              font-size: 1.2rem;
              opacity: 0.06;
            }
          }

          /* Dark mode support */
          @media (prefers-color-scheme: dark) {
            .floating-heart {
              opacity: 0.05;
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .floating-heart {
              animation: none;
            }
          }
        `}</style>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;