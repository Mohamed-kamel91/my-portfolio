'use client';

import { Stack } from '../ui/stack';
import { Container } from '../ui/containers';

import { useI18n } from '@/i18n/client';

import { cn } from '@/utils/cn';
import { socials } from '@/constants/socials';

export const Footer = () => {
  const { t, i18n } = useI18n();

  const year = new Date().getFullYear();
  const localizedYear = new Intl.NumberFormat(
    i18n.language === 'ar' ? 'ar-EG' : 'en-US',
    { useGrouping: false },
  ).format(year);

  return (
    <footer>
      <Container className="max-w-6xl">
        <Stack
          justify="between"
          align="start"
          gap={4}
          className={cn(
            'pt-5 pb-10 md:pb-14',
            'border-border border-t',
          )}
        >
          <p>
            &copy;{' '}
            {t('footer.copyright', {
              year: localizedYear,
            })}
          </p>
          <Stack gap={4} align="center">
            {socials.map((social) => (
              <a
                key={social.name}
                className="font-inter"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};
