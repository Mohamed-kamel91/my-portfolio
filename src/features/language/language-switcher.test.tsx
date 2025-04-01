import { Mock } from 'vitest';
import { render, screen } from '@/test/test-utils';

import { LanguageSwitcher } from './language-switcher';

import { usePathname } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import { Locales } from '@/i18n/types';
import { useLanguage } from './language-context';

const translations = {
  en: {
    'language.name': 'عربي',
    'language.switchTo': 'Switch to Arabic',
  },
  ar: {
    'language.name': 'English',
    'language.switchTo': 'تغيير اللغة إلى الإنجليزية',
  },
} as const;

const getLangState = (lang: Locales) => {
  const isEnglish = lang === 'en';
  return {
    currentLang: lang,
    isEnglish: isEnglish,
    nextLang: (isEnglish ? 'ar' : 'en') as Locales,
  };
};

const translationMock = (lang: Locales) => ({
  t: (key: keyof typeof translations.en) =>
    translations[lang][key],
  i18n: {
    changeLanguage: () => new Promise(() => {}),
  },
});

describe('Language switcher', () => {
  beforeAll(() => {
    vi.mock('next/navigation', () => ({
      usePathname: vi.fn(),
      useSearchParams: vi.fn(() => ({
        toString: vi.fn(() => 'foo=bar'),
      })),
    }));

    vi.mock('./language-context', async () => {
      const langContext = await vi.importActual<
        typeof import('./language-context')
      >('./language-context');
      return {
        ...langContext,
        useLanguage: vi.fn(),
      };
    });

    vi.mock('@/i18n/client', () => ({
      useTranslation: vi.fn(),
    }));
  });

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should switch language to Enlglish', async () => {
    (usePathname as Mock).mockReturnValue('/en');
    (useLanguage as Mock).mockReturnValue(getLangState('en'));
    (useTranslation as Mock).mockImplementation(translationMock);

    render(<LanguageSwitcher />);

    const langLink = screen.getByRole('link', {
      name: /Switch to Arabic/i,
    });

    expect(langLink).toHaveTextContent('عربي');
    expect(langLink).toHaveAttribute('href', '/ar?foo=bar');
  });

  it('should switch language to Arabic', () => {
    (usePathname as Mock).mockReturnValue('/ar');
    (useLanguage as Mock).mockReturnValue(getLangState('ar'));
    (useTranslation as Mock).mockImplementation(translationMock);

    render(<LanguageSwitcher />);

    const langLink = screen.getByRole('link', {
      name: /تغيير اللغة إلى الإنجليزية/i,
    });

    expect(useTranslation).toBeCalledTimes(1);
    expect(langLink).toHaveTextContent('English');
    expect(langLink).toHaveAttribute('href', '/en?foo=bar');
  });
});
