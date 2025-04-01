'use client';

import React, { useCallback } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import { useLanguage } from './language-context';

type LanguageSwitcherProps = Partial<LinkProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export const LanguageSwitcher = ({
  href,
  ...props
}: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { currentLang, isEnglish, nextLang } = useLanguage();
  const { t } = useTranslation(currentLang);

  const generateUrl = useCallback(() => {
    const newPathname = pathname.replace(currentLang, nextLang);
    return `${newPathname}?${searchParams.toString()}`;
  }, [currentLang, nextLang, pathname, searchParams]);

  return (
    <Link
      className="text-sm font-medium"
      href={href ?? generateUrl()}
      hrefLang={nextLang}
      aria-label={t('language.switchTo', {
        lang: isEnglish ? 'Arabic' : 'الإنجليزية',
      })}
      {...props}
    >
      {t('language.name')}
    </Link>
  );
};
