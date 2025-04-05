import { ThemeProvider } from 'next-themes';
import { act, renderHook } from '@/test/test-utils';

import { useThemeToggler } from './useThemeToggler';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider enableSystem={false} defaultTheme="light">
    {children}
  </ThemeProvider>
);

describe('useThemeToggler', () => {
  it('should update theme states when handleThemeToggle is called', () => {
    const { result } = renderHook(() => useThemeToggler(), {
      wrapper: ThemeWrapper,
    });

    // Initial states (Light)
    expect(result.current.theme).toBe('light');
    expect(result.current.nextTheme).toBe('dark');
    expect(result.current.isDark).toBe(false);

    // First toggle (light → dark)
    act(() => result.current.handleThemeToggle());

    expect(result.current.theme).toBe('dark');
    expect(result.current.nextTheme).toBe('light');
    expect(result.current.isDark).toBe(true);

    // Second toggle (dark → light)
    act(() => result.current.handleThemeToggle());

    expect(result.current.theme).toBe('light');
    expect(result.current.nextTheme).toBe('dark');
    expect(result.current.isDark).toBe(false);
  });
});
