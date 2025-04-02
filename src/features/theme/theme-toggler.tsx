'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import {
  IconButton,
  IconButtonProps,
} from '@/components/ui/buttons';
import { useMounted } from '@/hooks/useMounted';

type ThemeTogglerProps = IconButtonProps<'button'>;

export const ThemeToggler = ({
  className,
  ...props
}: ThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();
  const isMounted = useMounted();

  const isDark = theme === 'dark';
  const actionLabel = isDark
    ? 'Switch to light mode'
    : 'Switch to dark mode';

  const handleThemeToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  if (!isMounted) {
    return null;
  }

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
      {isDark ? <Sun /> : <Moon />}
    </IconButton>
  );
};
