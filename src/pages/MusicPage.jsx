import React, { useState, useRef, useEffect } from 'react';
import { 
  HiPlay,
  HiPause,
  HiSpeakerWave,
  HiMusicalNote,
  HiHeart,
  HiForward,
  HiBackward,
  HiVolumeUp,
  HiVolumeOff
} from 'react-icons/hi2';

const MusicPage = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showLyrics, setShowLyrics] = useState(true);
  
  const audioRef = useRef(null);

  const songs = [
    {
      id: 1,
      title: "Naz'ımız Var",
      artist: "NAZ Eğitim Krallığı",
      src: "/naz.mp3",
      cover: "/icon-set/icon-512x512.png",
      color: "#EC4899",
      lyrics: [
        "Naz, Naz, Nazımız var,",
        "Koşar oynar, gülen yüzü var!",
        "Oyuncakları elinde,", 
        "Sevgi saçar çevresine!",
        "",
        "Zıplar, koşar, dans eder,",
        "Minik ayaklar yere vurur!",
        "Naz'ın şarkısı burada,",
        "Mutlulukla hep yaşar!",
        "",
        "Naz bizim, Naz bizim,",
        "Şarkımızla hep gülecek!",
        "Oyun oyna, kahkaha at,",
        "Mutluluğun sonsuza dek!",
        "",
        "Renkli oyunlar, taze sevinç,",
        "Naz'ın dünyası huzur içinde!",
        "Sevgi dolu, aydınlık yüreği,",
        "Naz'ımız bizim güneşimiz"
      ]
    },
    {
      id: 2,
      title: "Pembe Bulutlar",
      artist: "NAZ Eğitim Krallığı", 
      src: "/naz2.mp3",
      cover: "/icon-set/icon-512x512.png",
      color: "#8B5CF6",
      lyrics: [
        "Pembe bulutlar, mavi gökyüzü,",
        "Naz'ın saçlarında rüzgar uçuyor!",
        "Elinde ışıklar, ayağında çiçekler,",
        "Koşar gibi dans eder, güler gibi!",
        "",
        "Kuşlar cıvıldar, kelebekler uçar,",
        "Naz'ın dünyası bir rüya gibi!",
        "Elimi tutarsan, birlikte uçarız,",
        "Yıldızlara kadar, hiç durmadan!",
        "",
        "Uçan bulutlar, parlayan yıldızlar,",
        "Naz'ın şarkısı hepimize ışık saçar!",
        "Mutluluk bizimle, sevgimiz sonsuza,",
        "Bugün, yarın, her zaman, sonsuza!",
        "",
        "Oyuncak ayı, sarı ay,",
        "Naz'ın odasında hikayeler anlatır!",
        "Ellerimiz birleşir, ışıklar yanar,",
        "Her gün bir macera, her gün bir hediye!",
        "",
        "Uçan bulutlar, parlayan yıldızlar,",
        "Naz'ın şarkısı hepimize ışık saçar!",
        "Mutluluk bizimle, sevgimiz sonsuza,",
        "Bugün, yarın, her zaman, sonsuza!"
      ]
    },
    {
      id: 3,
      title: "Doğum Günü Coşkusu",
      artist: "NAZ Eğitim Krallığı",
      src: "/naz3.mp3", 
      cover: "/icon-set/icon-512x512.png",
      color: "#06B6D4",
      lyrics: [
        "Bugün doğum günü, pasta dilimlendi!",
        "Arkadaşlar burada, oyunlar başladı!",
        "Ejderhalar uçar, Vikingler gemilerde,",
        "Naz'ımız da onlarla birlikte coşar!",
        "",
        "Jimnastik salonunda takla atıyor,",
        "Denge çubuğunda bir balerin gibi!",
        "Elleriyle \"Hiccup\"u taklit ediyor,",
        "Narin ayaklarıyla zıplıyor, uçuyor!",
        "",
        "Oyuncak ejderhalar odanda sıralı,",
        "Annesiyle geçen günler huzurlu!",
        "Arkadaşlar \"Sürpriz!\" diye bağırır,",
        "Doğum günü şarkısı hepimiz bir ağızdan!",
        "",
        "Armağanlar, öpücükler, gülüşler içinde,",
        "Naz'ımız büyüyor, yıldızlar gibi parlıyor!"
      ]
    }
  ];

  const currentSongData = songs[currentSong];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleNext);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleNext);
    };
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(false);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="music-page">
      <div className="music-header">
        <HiMusicalNote className="music-header-icon" />
        <h1 className="page-title">Şarkı Dinle</h1>
        <p className="page-subtitle">NAZ'ın özel şarkıları ile müziğin büyülü dünyasında yolculuk! 🎵</p>
      </div>

      <div className="music-container">
        <div className="music-player">
          <div className="album-art" style={{ backgroundColor: currentSongData.color }}>
            <img 
              src={currentSongData.cover} 
              alt={currentSongData.title}
              className="cover-image"
            />
            <div className="art-overlay">
              <HiMusicalNote className="floating-note note-1" />
              <HiMusicalNote className="floating-note note-2" />
              <HiMusicalNote className="floating-note note-3" />
            </div>
          </div>

          <div className="song-info">
            <h2 className="song-title">{currentSongData.title}</h2>
            <p className="song-artist">{currentSongData.artist}</p>
          </div>

          <div className="progress-section">
            <div className="time-display">
              <span className="current-time">{formatTime(currentTime)}</span>
              <span className="duration">{formatTime(duration)}</span>
            </div>
            <div className="progress-bar" onClick={handleSeek}>
              <div 
                className="progress-fill"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              ></div>
              <div 
                className="progress-thumb"
                style={{ left: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              ></div>
            </div>
          </div>

          <div className="controls">
            <button className="control-btn secondary" onClick={handlePrevious}>
              <HiBackward />
            </button>
            
            <button className="control-btn primary" onClick={togglePlay}>
              {isPlaying ? <HiPause /> : <HiPlay />}
            </button>
            
            <button className="control-btn secondary" onClick={handleNext}>
              <HiForward />
            </button>
          </div>

          <div className="volume-control">
            <button className="volume-btn" onClick={toggleMute}>
              {isMuted ? <HiVolumeOff /> : <HiVolumeUp />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="volume-slider"
            />
          </div>

          <audio
            ref={audioRef}
            src={currentSongData.src}
            onError={() => console.log('Audio file not found, using placeholder')}
          />
        </div>

        <div className="playlist">
          <h3 className="playlist-title">
            <HiSpeakerWave className="playlist-icon" />
            Şarkı Listesi
          </h3>
          <div className="playlist-items">
            {songs.map((song, index) => (
              <div
                key={song.id}
                className={`playlist-item ${index === currentSong ? 'active' : ''}`}
                onClick={() => {
                  setCurrentSong(index);
                  setIsPlaying(false);
                }}
              >
                <div className="playlist-cover" style={{ backgroundColor: song.color }}>
                  <HiMusicalNote className="playlist-note" />
                </div>
                <div className="playlist-info">
                  <h4 className="playlist-song-title">{song.title}</h4>
                  <p className="playlist-artist">{song.artist}</p>
                </div>
                {index === currentSong && isPlaying && (
                  <div className="playing-indicator">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showLyrics && (
        <div className="lyrics-section">
          <div className="lyrics-header">
            <HiHeart className="lyrics-icon" />
            <h3>Şarkı Sözleri</h3>
            <button 
              className="toggle-lyrics"
              onClick={() => setShowLyrics(!showLyrics)}
            >
              Gizle
            </button>
          </div>
          <div className="lyrics-content">
            {currentSongData.lyrics.map((line, index) => (
              <p key={index} className={`lyrics-line ${line === '' ? 'empty' : ''}`}>
                {line || '\u00A0'}
              </p>
            ))}
          </div>
        </div>
      )}

      {!showLyrics && (
        <button 
          className="show-lyrics-btn"
          onClick={() => setShowLyrics(true)}
        >
          <HiHeart className="btn-icon" />
          Şarkı Sözlerini Göster
        </button>
      )}

      <style>{`
        .music-page {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
        }

        .music-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .music-header-icon {
          font-size: 3rem;
          color: var(--naz-primary);
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 0;
        }

        .music-container {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .music-player {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 25px;
          padding: 2.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .album-art {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .art-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-note {
          position: absolute;
          color: rgba(255, 255, 255, 0.3);
          font-size: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        .note-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .note-2 {
          top: 60%;
          right: 25%;
          animation-delay: 1s;
        }

        .note-3 {
          bottom: 30%;
          left: 30%;
          animation-delay: 2s;
        }

        .song-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .song-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .song-artist {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .progress-section {
          margin-bottom: 2rem;
        }

        .time-display {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .progress-bar {
          position: relative;
          height: 6px;
          background: var(--glass-border);
          border-radius: 3px;
          cursor: pointer;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--naz-primary);
          border-radius: 3px;
          transition: width 0.1s ease;
        }

        .progress-thumb {
          position: absolute;
          top: 50%;
          width: 16px;
          height: 16px;
          background: var(--naz-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: left 0.1s ease;
        }

        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.5rem;
        }

        .control-btn.primary {
          width: 60px;
          height: 60px;
          background: var(--naz-primary);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }

        .control-btn.secondary {
          width: 45px;
          height: 45px;
          background: var(--glass-light);
          color: var(--text-secondary);
          border: 1px solid var(--glass-border);
        }

        .control-btn:hover {
          transform: scale(1.1);
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .volume-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .volume-btn:hover {
          color: var(--naz-primary);
        }

        .volume-slider {
          flex: 1;
          height: 4px;
          background: var(--glass-border);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: var(--naz-primary);
          border-radius: 50%;
          cursor: pointer;
        }

        .playlist {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .playlist-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .playlist-icon {
          color: var(--naz-secondary);
        }

        .playlist-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .playlist-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .playlist-item:hover {
          background: var(--glass-purple);
        }

        .playlist-item.active {
          background: var(--glass-blue);
          border: 1px solid var(--naz-secondary);
        }

        .playlist-cover {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .playlist-note {
          color: white;
          font-size: 1.2rem;
        }

        .playlist-info {
          flex: 1;
          min-width: 0;
        }

        .playlist-song-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.2rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .playlist-artist {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .playing-indicator {
          display: flex;
          align-items: end;
          gap: 2px;
          height: 16px;
        }

        .bar {
          width: 3px;
          background: var(--naz-primary);
          border-radius: 1px;
          animation: wave 1s ease-in-out infinite;
        }

        .bar1 { animation-delay: 0s; }
        .bar2 { animation-delay: 0.3s; }
        .bar3 { animation-delay: 0.6s; }

        .lyrics-section {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .lyrics-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .lyrics-icon {
          color: var(--naz-pink);
          font-size: 1.5rem;
        }

        .lyrics-header h3 {
          flex: 1;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .toggle-lyrics {
          background: var(--glass-light);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-lyrics:hover {
          background: var(--glass-purple);
          color: var(--text-primary);
        }

        .lyrics-content {
          max-height: 400px;
          overflow-y: auto;
          padding-right: 1rem;
        }

        .lyrics-line {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
          padding: 0.3rem 0;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .lyrics-line.empty {
          height: 1rem;
        }

        .lyrics-line:hover {
          background: var(--glass-purple);
          padding-left: 1rem;
        }

        .show-lyrics-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--naz-pink);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          margin: 2rem auto;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
        }

        .show-lyrics-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }

        @media (max-width: 768px) {
          .music-container {
            grid-template-columns: 1fr;
          }

          .music-player {
            padding: 2rem 1.5rem;
          }

          .album-art {
            width: 150px;
            height: 150px;
          }

          .page-title {
            font-size: 2rem;
          }

          .controls {
            gap: 0.5rem;
          }

          .control-btn.primary {
            width: 50px;
            height: 50px;
          }

          .control-btn.secondary {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default MusicPage;