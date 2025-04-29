import Link from 'next/link';

import { useI18n } from '@/i18n/client';

export const MobileLogo = () => {
  const { t } = useI18n();

  return (
    <Link href="/" className="shrink-0">
      <span className="block font-semibold whitespace-nowrap">
        {t('about.name').toUpperCase()}
      </span>
      <span className="text-sm">{t('about.job')}</span>
    </Link>
  );
};
