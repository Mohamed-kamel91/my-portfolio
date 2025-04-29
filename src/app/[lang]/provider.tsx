'use client';

import { PreloadResources } from '@/providers/preload-resources';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/features/language';

import { Locales } from '@/i18n/types';

type AppProviderProps = {
  lang: Locales;
  children: React.ReactNode;
};

export const AppProvider = ({ lang, children }: AppProviderProps) => {
  return (
    <PreloadResources>
      <CookiesProvider>
        <ThemeProvider enableSystem={false}>
          <LanguageProvider lang={lang}>{children}</LanguageProvider>
        </ThemeProvider>
      </CookiesProvider>
    </PreloadResources>
  );
};
