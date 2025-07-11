import React, { useContext } from 'react';
import { LocalizationContext } from '../contexts/LocalizationContext';

const GamesPage = () => {
  const { t } = useContext(LocalizationContext);
  
  const games = [
    { id: 1, theme: 'math', title: t('mathGame1'), level: 1 },
    { id: 2, theme: 'math', title: t('mathGame2'), level: 2 },
    { id: 3, theme: 'math', title: t('mathGame3'), level: 3 },
    { id: 4, theme: 'geography', title: t('geoGame1'), level: 1 },
    { id: 5, theme: 'geography', title: t('geoGame2'), level: 2 },
    { id: 6, theme: 'geography', title: t('geoGame3'), level: 3 },
    { id: 7, theme: 'health', title: t('healthGame1'), level: 1 },
    { id: 8, theme: 'health', title: t('healthGame2'), level: 2 },
    { id: 9, theme: 'health', title: t('healthGame3'), level: 3 }
  ];

  return (
    <div className="games-page">
      <h2>{t('gameSelection')}</h2>
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className={`game-card ${game.theme}`}>
            <h3>{game.title}</h3>
            <p>{t('level')} {game.level}</p>
            <button className="play-button">{t('play')}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;