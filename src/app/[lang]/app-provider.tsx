'use client';

import { CookiesProvider } from 'react-cookie';

import { PreloadResources } from './preload-resources';
import { LanguageProvider } from '@/features/language';

import { Locales } from '@/i18n/types';

type AppProviderProps = {
  lang: Locales;
  children: React.ReactNode;
};

export const AppProvider = ({
  lang,
  children,
}: AppProviderProps) => {
  return (
    <PreloadResources>
      <CookiesProvider>
        <LanguageProvider lang={lang}>
          {children}
        </LanguageProvider>
      </CookiesProvider>
    </PreloadResources>
  );
};
