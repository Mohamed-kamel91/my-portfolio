'use client';

import React from 'react';

import { useMatchMedia } from '@/hooks/useMatchMedia';

import {
  Breakpoints,
  MAX_BREAKPOINTS,
  MIN_BREAKPOINTS,
} from './breakpoints';

type MatchMediaProps = {
  query?: string;
  size?: Breakpoints;
  perspective?: 'min' | 'max';
  children: React.ReactNode;
};

export const MatchMedia = ({
  query,
  size = 'sm',
  perspective = 'min',
  children,
}: MatchMediaProps) => {
  const breakpoint =
    perspective === 'min' ? MIN_BREAKPOINTS : MAX_BREAKPOINTS;

  const matches = useMatchMedia(query || breakpoint[size]);

  return matches ? <>{children}</> : null;
};

type DeviceProps = {
  children: React.ReactNode;
};

export const Mobile = ({ children }: DeviceProps) => {
  return (
    <MatchMedia query="(max-width: 639px)">{children}</MatchMedia>
  );
};

export const Tablet = ({ children }: DeviceProps) => {
  return (
    <MatchMedia query="(min-width: 640px) and (max-width: 1023px)">
      {children}
    </MatchMedia>
  );
};

export const Laptop = ({ children }: DeviceProps) => {
  return (
    <MatchMedia query="(min-width: 768px) and (max-width: 1439px)">
      {children}
    </MatchMedia>
  );
};

export const Desktop = ({ children }: DeviceProps) => {
  return (
    <MatchMedia query="(min-width: 1024px) and (max-width: 1439px)">
      {children}
    </MatchMedia>
  );
};

export const LargeDesktop = ({ children }: DeviceProps) => {
  return (
    <MatchMedia query="(min-width: 1280px)">{children}</MatchMedia>
  );
};
