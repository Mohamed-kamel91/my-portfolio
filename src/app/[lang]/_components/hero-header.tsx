'use client';

import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/ui/containers';
import { Stack } from '@/components/ui/stack';
import { Button } from '@/components/ui/buttons';

import { useI18n } from '@/i18n/client';

export const HeroHeader = () => {
  const { t } = useI18n('home');

  return (
    <div className="mb-15 py-5 md:py-15">
      <Container className="max-w-3xl">
        <Stack direction="col">
          <h1 className="mb-2 text-5xl font-bold">
            {t('hero.title')}
          </h1>

          <p className="text-muted-foreground mb-8 text-xl font-medium md:mb-10">
            {t('hero.subtitle')}
          </p>

          <p className="mb-8 max-w-162 text-lg md:mb-10">
            {t('hero.description')}
          </p>

          <Stack gap={2}>
            <Button
              as={Link}
              href="#about"
              size="lg"
              className="shrink-0"
            >
              {t('hero.cta.aboutMe')}
            </Button>
            <Button
              as={Link}
              href="#projects"
              size="lg"
              variant="outline"
              className="shrink-0"
            >
              {t('hero.cta.viewMyWork')}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};
