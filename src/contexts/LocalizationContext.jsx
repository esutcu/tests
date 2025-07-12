import React, { createContext, useState } from 'react';

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState('tr');
  const [translations] = useState({
    'welcome': 'Hoş Geldiniz',
    'games': 'Oyunlar',
    'profile': 'Profil',
    'home': 'Ana Sayfa',
    'math': 'Matematik',
    'geography': 'Coğrafya',
    'health': 'Sağlık',
    'loading': 'Yükleniyor...',
    'play': 'Oyna',
    'start': 'Başla'
  });

  const t = (key) => {
    return translations[key] || key;
  };

  return (
    <LocalizationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};