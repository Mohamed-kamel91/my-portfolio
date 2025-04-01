import { render } from '@testing-library/react';

import RootLayout from './layout';
import { Locales } from '@/i18n/types';

describe('RootLayout', () => {
  beforeAll(() => {
    vi.mock('@/styles/globals.css', () => ({}));
  });

  const renderLayout = async ({ lang }: { lang: Locales }) => {
    render(
      await RootLayout({
        params: Promise.resolve({ lang }),
        children: <div>Page Content</div>,
      }),
    );
    return { htmlElement: document.documentElement };
  };

  it('should set English language and LTR direction', async () => {
    const { htmlElement } = await renderLayout({ lang: 'en' });

    expect(htmlElement).toHaveAttribute('lang', 'en');
    expect(htmlElement).toHaveAttribute('dir', 'ltr');
  });

  it('should set Arabic language and RTL direction', async () => {
    const { htmlElement } = await renderLayout({ lang: 'ar' });

    expect(htmlElement).toHaveAttribute('lang', 'ar');
    expect(htmlElement).toHaveAttribute('dir', 'rtl');
  });
});
