'use client';

import { Container } from '@/components/ui/container';
import { Stack } from '@/components/ui/stack';
import { MatchMedia } from '@/components/ui/match-media';
import { MobileLogo } from './navigation/mobile-logo';
import { MobileNavigation } from './navigation/mobile-navigation';
import { MainNavigation } from './navigation/main-navigation';
import { NavActions } from './navigation/nav-actions';
import { SocialLinks } from './footer/social-links';

import { useMounted } from '@/hooks';
import { useI18n } from '@/i18n/client';

import { cn } from '@/utils/cn';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { t } = useI18n();
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <div className="min-h-screen">
      <header className="py-14">
        <Container>
          <Stack align="center" justify="between" gap={4}>
            <MatchMedia size="md" perspective="max">
              <MobileLogo />
              <MobileNavigation />
            </MatchMedia>

            <MatchMedia size="md">
              <MainNavigation />
              <NavActions />
            </MatchMedia>
          </Stack>
        </Container>
      </header>

      <main className="">{children}</main>

      <footer>
        <Container>
          <Stack
            justify="between"
            align="start"
            gap={4}
            className={cn('pt-5 pb-14', 'border-border border-t')}
          >
            <p>{t('footer.builtBy')}</p>
            <SocialLinks />
          </Stack>
        </Container>
      </footer>
    </div>
  );
};
