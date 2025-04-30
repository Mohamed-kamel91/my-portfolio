'use client';

import React from 'react';

import { useDrawer } from '../useDrawer';

import { cn } from '@/utils/cn';

export const DrawerBackdrop = () => {
  const { close } = useDrawer();

  return (
    <div
      className={cn(
        'z-overlay fixed start-0 top-0',
        'h-dvh w-screen',
        'bg-black/30',
        'transition-colors duration-1000',
      )}
      onClick={close}
    />
  );
};
