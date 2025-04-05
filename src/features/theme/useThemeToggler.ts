import { useTheme } from 'next-themes';

export const useThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';

  const handleThemeToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return {
    theme,
    nextTheme,
    isDark,
    handleThemeToggle,
  };
};
