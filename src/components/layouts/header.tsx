import React from 'react';

import { Container } from '../ui/containers';
import { Stack } from '../ui/stack/stack';
import { MatchMedia } from '../ui/match-media';
import { MobileLogo } from '../navigation/mobile-logo';
import { MobileNavigation } from '../navigation/mobile-navigation';
import { MainNavigation } from '../navigation/main-navigation';
import { NavActions } from '../navigation/nav-actions';

export const Header = () => {
  return (
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
  );
};
