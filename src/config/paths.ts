import { Locales } from '@/i18n/types';

export const paths = {
  home: {
    getHref: (lang: Locales) => `/${lang}/`,
  },
  projects: {
    getHref: (lang: Locales) => `/${lang}/projects`,
  },
} as const;
