'use client';

import { Moon, Sun } from 'lucide-react';

import { IconButton, IconButtonProps } from '@/components/ui/buttons';

import { useI18n } from '@/i18n/client';
import { useMounted } from '@/hooks/useMounted';
import { useThemeToggler } from './useThemeToggler';

type ThemeTogglerProps = IconButtonProps<'button'>;

export const ThemeToggler = ({
  className,
  ...props
}: ThemeTogglerProps) => {
  const { nextTheme, isDark, handleThemeToggle } = useThemeToggler();
  const { t } = useI18n();
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  const themetitle = t('theme.title', {
    theme: t(`theme.modes.${nextTheme}`),
  });

  const themeLabel = t('theme.label', {
    theme: t(`theme.modes.${nextTheme}`),
  });

  return (
    <IconButton
      className={className}
      variant="secondary"
      title={themetitle}
      aria-label={themeLabel}
      aria-pressed={isDark}
      data-testid="theme-toggle-btn"
      onClick={handleThemeToggle}
      {...props}
    >
      {isDark ? (
        <Sun size={22} data-testid="sun-icon" />
      ) : (
        <Moon size={22} data-testid="moon-icon" />
      )}
    </IconButton>
  );
};
