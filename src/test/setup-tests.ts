import '@testing-library/jest-dom/vitest';

beforeAll(() => {
  vi.mock('next/navigation', () => ({
    usePathname: vi.fn(),
    useSearchParams: vi.fn(() => ({
      toString: vi.fn(() => 'foo=bar'),
    })),
  }));

  vi.mock('@/i18n/client', () => ({
    useTranslation: vi.fn(() => {
      return {
        t: (i18nKey: string) => i18nKey,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    }),
  }));
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: vi.fn((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
