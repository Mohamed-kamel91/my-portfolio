import { userEvent, render, screen } from '@/test/test-utils';
import { mockUseTranslation } from '@/test/mocks/i18n-mocks';

import { ThemeToggler } from './theme-toggler';

export const themeTogglerT = (
  key: string,
  options?: Record<string, string>,
) => {
  if (key === 'theme.label') return `Switch to ${options?.theme} mode`;
  if (key === 'theme.modes.dark') return 'dark';
  if (key === 'theme.modes.light') return 'light';
  return key;
};

describe('Theme toggler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should toggle between light and dark mode in English', async () => {
    mockUseTranslation(themeTogglerT);

    const user = userEvent.setup();

    render(<ThemeToggler />, { lang: 'ar' });

    const themeButton = screen.getByTestId('theme-toggle-btn');

    // Initial state (light mode)
    expect(themeButton).toHaveAccessibleName('Switch to dark mode');
    expect(themeButton).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByTestId('moon-icon')).toBeVisible();
    expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();

    // First click (light → dark)
    await user.click(themeButton);

    expect(themeButton).toHaveAccessibleName('Switch to light mode');
    expect(themeButton).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('sun-icon')).toBeVisible();
    expect(screen.queryByTestId('moon-icon')).not.toBeInTheDocument();

    // Second click (dark → light)
    await user.click(themeButton);

    expect(themeButton).toHaveAccessibleName('Switch to dark mode');
    expect(themeButton).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByTestId('moon-icon')).toBeVisible();
    expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();
  });
});
