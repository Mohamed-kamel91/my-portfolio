import React from 'react';
import { Metadata } from 'next';

import { Container } from '@/components/ui/containers';
import { Stack } from '@/components/ui/stack';
import { Logo } from '@/components/logo/logo';
import { NavActions } from '@/components/navigation/nav-actions';
import { Footer } from '@/components/layouts/footer';

import { Locales } from '@/i18n/types';
import { getValidLang } from '@/i18n/utils';
import { translation } from '@/i18n';

type Props = {
  params: Promise<{ lang: Locales }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;

  const { t } = await translation(getValidLang(lang), 'projects');

  const title = t('metaData.title');

  return { title };
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="py-10 md:py-14">
        <Container className="max-w-6xl">
          <Stack align="center" justify="between" gap={4}>
            <Logo />
            <NavActions />
          </Stack>
        </Container>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
}
