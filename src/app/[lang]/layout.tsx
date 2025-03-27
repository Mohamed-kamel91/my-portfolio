import type { Metadata } from 'next';
import { dir } from 'i18next';

import { AppProvider } from './app-provider';

import { languages } from '@/i18n/settings';
import { Locales } from '@/i18n/types';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mohamed Kamel',
    template: '%s | Mohamed Kamel',
  },
  description:
    "Mohamed Kamel's portfolio showcasing web development projects, skills, and contact information.",
};

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
    <html lang={lang} dir={dir(lang)}>
      <body>
        <AppProvider lang={lang}>{children}</AppProvider>
      </body>
    </html>
  );
}
