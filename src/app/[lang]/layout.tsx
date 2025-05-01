import type { Metadata } from 'next';
import { dir } from 'i18next';

import { AppProvider } from './provider';

import { translation } from '@/i18n';
import { languages } from '@/i18n/settings';
import { Locales } from '@/i18n/types';

import '@/styles/globals.css';
import { getValidLang } from '@/i18n/utils';

type Props = {
  params: Promise<{ lang: Locales }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;

  const { t } = await translation(getValidLang(lang));

  const title = t('metaData.title');
  const description = t('metaData.description');

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description: description,
  };
}

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locales }>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AppProvider lang={lang}>{children}</AppProvider>
      </body>
    </html>
  );
}
