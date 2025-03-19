import type { Metadata } from 'next';

import { AppProvider } from './app-provider';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Mohamed Kamel',
    template: '%s | Mohamed Kamel',
  },
  description:
    "Mohamed Kamel's portfolio showcasing web development projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
