'use client';

import { Container } from '@/components/ui/containers';
import { Stack } from '@/components/ui/stack';
import { MatchMedia } from '@/components/ui/match-media';
import { MobileLogo } from '../navigation/mobile-logo';
import { MobileNavigation } from '../navigation/mobile-navigation';
import { MainNavigation } from '../navigation/main-navigation';
import { NavActions } from '../navigation/nav-actions';

import { useMounted } from '@/hooks';

import { cn } from '@/utils/cn';
import { socials } from '@/constants/socials';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <div>
      <header className="py-10 md:py-14">
        <Container className="max-w-6xl">
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

      <main>{children}</main>

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
            <p>&copy; M.K. {new Date().getFullYear()}</p>
            <Stack gap={4} align="center">
              {socials.map((social) => (
                <a
                  key={social.name}
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
    </div>
  );
};
