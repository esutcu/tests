import React from 'react';

const GamesPage = () => {
  const games = [
    { id: 1, theme: 'math', title: 'Basit Matematik', level: 1 },
    { id: 2, theme: 'math', title: 'Orta Matematik', level: 2 },
    { id: 3, theme: 'math', title: 'Zor Matematik', level: 3 },
    { id: 4, theme: 'geography', title: 'Ülkeleri Tanı', level: 1 },
    { id: 5, theme: 'geography', title: 'Başkentler', level: 2 },
    { id: 6, theme: 'geography', title: 'Harita Bilgisi', level: 3 },
    { id: 7, theme: 'health', title: 'Sağlıklı Besinler', level: 1 },
    { id: 8, theme: 'health', title: 'Hijyen Kuralları', level: 2 },
    { id: 9, theme: 'health', title: 'Spor ve Sağlık', level: 3 }
  ];

  return (
    <div className="games-page">
      <h2>Oyun Seçimi</h2>
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className={`game-card ${game.theme}`}>
            <h3>{game.title}</h3>
            <p>Seviye {game.level}</p>
            <button className="play-button">Oyna</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage;