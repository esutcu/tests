import React, { createContext, useState, useEffect } from 'react';

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState('tr');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Göreli yol kullan
        const response = await fetch('locales/tr.json');
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Çeviri yüklenemedi:', error);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key) => {
    return translations[key] || key;
  };

  return (
    <LocalizationContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};