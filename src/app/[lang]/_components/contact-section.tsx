'use client';

import { AtSign } from 'lucide-react';

import { Container } from '@/components/ui/containers';
import { Stack } from '@/components/ui/stack';
import { Button, IconButton } from '@/components/ui/buttons';

import { useI18n } from '@/i18n/client';

import { cn } from '@/utils/cn';

export const ContactSection = () => {
  const { t } = useI18n('home');

  return (
    <Container className="max-w-2xl">
      <div className="pt-10 pb-10 md:pb-20">
        <p
          className={cn(
            'mx-auto mb-10 rtl:max-w-xs',
            'text-center text-5xl leading-[1.2] font-bold',
          )}
        >
          {t('contact.title')}
        </p>

        <Stack justify="center" wrap="wrap" gap={2}>
          <Button
            as="a"
            href="/documents/resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="w-[280px] shrink-0 sm:w-auto"
            size="lg"
            aria-label={t('contact.resume.ariaLabel')}
          >
            {t('contact.resume.label')}
          </Button>

          <Stack
            className={cn(
              'h-15 ps-2 pe-4',
              'border-border rounded-full border',
            )}
            align="center"
            gap={3}
          >
            <IconButton
              as="a"
              href="mailto:mohakamel91@gmail.com"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              aria-label={t('contact.email.ariaLabel')}
            >
              <AtSign />
            </IconButton>
            <span> {t('contact.email.gmail')}</span>
          </Stack>
        </Stack>
      </div>
    </Container>
  );
};
