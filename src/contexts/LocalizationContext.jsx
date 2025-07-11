import React, { createContext, useState, useEffect } from 'react';

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState('tr');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // 使用相对路径确保生产环境正确加载
        const response = await fetch(`./locales/${locale}.json`);
        if (!response.ok) {
          throw new Error('Çeviri dosyası yüklenemedi');
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Çeviri yüklenemedi:', error);
        // 回退到默认文本
        setTranslations({
          appTitle: 'NAZ Eğitici Oyun',
          home: 'Ana Sayfa',
          games: 'Oyunlar',
          profile: 'Profil'
        });
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