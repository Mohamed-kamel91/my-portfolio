'use client';

import { Icon } from '@iconify/react';

import { Container } from '@/components/ui/containers';
import { PageSection } from '@/components/ui/containers/page-section';
import { Stack } from '@/components/ui/stack';
import { Button } from '@/components/ui/buttons';

import { useI18n } from '@/i18n/client';

import { socials } from '@/constants/socials';
import { cn } from '@/utils/cn';

export const AboutSection = () => {
  const { t } = useI18n('home');

  return (
    <Container className="max-w-3xl">
      <PageSection id="about" title={t('about.title')}>
        <div className="text-muted-foreground">
          <p className="text-foreground mb-5 font-medium">
            {t('about.intro')}
          </p>
          <p className="mb-5">{t('about.background')}</p>
          <p className="mb-5">{t('about.vision')}</p>
          <p>{t('about.hobbies')}</p>
        </div>

        <Stack className="-mx-5 mt-8">
          {socials.map((social) => (
            <Button
              key={social.name}
              className={cn(
                'shrink-0',
                'font-inter text-base font-normal',
              )}
              as="a"
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              variant="unstyled"
              size="md"
              leftIcon={
                <Icon icon={social.icon} width={22} height={22} />
              }
            >
              {social.name}
            </Button>
          ))}
        </Stack>
      </PageSection>
    </Container>
  );
};
