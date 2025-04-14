'use client';

import React from 'react';

import { useDrawer } from '../useDrawer';

import { cn } from '@/utils/cn';

export const DrawerBackdrop = () => {
  const { close } = useDrawer();

  return (
    <div
      className={cn(
        'fixed start-0 top-0 z-(--z-overlay) bg-black/30',
        'h-dvh w-screen',
        'transition-colors duration-1000',
      )}
      onClick={close}
    />
  );
};
