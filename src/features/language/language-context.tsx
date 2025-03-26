'use client';

import {
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';

import { Locales } from '@/i18n/types';

type LangContextVal = {
  currentLang: Locales;
  nextLang: Locales;
  isEnglish: boolean;
};

const languageContext = createContext<LangContextVal | null>(
  null,
);

// Context consumer
export const useLanguage = () => {
  const context = useContext(languageContext);

  if (!context) {
    throw new Error(
      'Component must be used within a languageProvider',
    );
  }

  return context;
};

type LangProvider = {
  lang: Locales;
  children: React.ReactNode;
};

export const LanguageProvider = ({
  lang,
  children,
}: LangProvider) => {
  const [currentLang] = useState(lang);

  const isEnglish = currentLang === 'en';
  const nextLang = isEnglish ? 'ar' : 'en';

  const value = useMemo<LangContextVal>(
    () => ({ currentLang, isEnglish, nextLang }),
    [currentLang, isEnglish, nextLang],
  );

  return (
    <languageContext.Provider value={value}>
      {children}
    </languageContext.Provider>
  );
};
