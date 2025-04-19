import { Mock } from 'vitest';
import { useI18n, useTranslation } from '@/i18n/client';

export const mockUseTranslation = (
  customT?: (
    i18nKey: string,
    options?: Record<string, string>,
  ) => string,
) => {
  (useTranslation as Mock).mockImplementation(() => ({
    t: customT ?? ((key: string) => key),
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }));
};

export const mockUseI18n = (
  customT?: (
    i18nKey: string,
    options?: Record<string, string>,
  ) => string,
) => {
  (useI18n as Mock).mockImplementation(() => ({
    t: customT ?? ((key: string) => key),
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }));
};
