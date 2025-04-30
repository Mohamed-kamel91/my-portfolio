'use client';

import { Header } from './header';
import { Footer } from './footer';

import { useMounted } from '@/hooks';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
