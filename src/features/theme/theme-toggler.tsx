'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import {
  IconButton,
  IconButtonProps,
} from '@/components/ui/buttons';

type ThemeTogglerProps = IconButtonProps<'button'>;

export const ThemeToggler = ({
  className,
  ...props
}: ThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === 'dark';
  const actionLabel = isDark
    ? 'Switch to light mode'
    : 'Switch to dark mode';

  const handleThemeToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <IconButton
      className={className}
      variant="secondary"
      title={actionLabel}
      aria-label={actionLabel}
      aria-pressed={isDark}
      onClick={handleThemeToggle}
      {...props}
    >
      {theme && <>{isDark ? <Sun /> : <Moon />}</>}
    </IconButton>
  );
};
