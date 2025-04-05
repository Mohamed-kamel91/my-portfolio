'use client';

import { Moon, Sun } from 'lucide-react';

import {
  IconButton,
  IconButtonProps,
} from '@/components/ui/buttons';

import { useMounted } from '@/hooks/useMounted';
import { useLanguage } from '../language';
import { useThemeToggler } from './useThemeToggler';
import { useTranslation } from '@/i18n/client';

type ThemeTogglerProps = IconButtonProps<'button'>;

export const ThemeToggler = ({
  className,
  ...props
}: ThemeTogglerProps) => {
  const { nextTheme, isDark, handleThemeToggle } =
    useThemeToggler();
  const { currentLang } = useLanguage();
  const { t } = useTranslation(currentLang);
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  const actionLabel = t('theme.label', {
    theme: t(`theme.modes.${nextTheme}`),
  });

  return (
    <IconButton
      className={className}
      variant="secondary"
      title={`${nextTheme} mode`}
      aria-label={actionLabel}
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
