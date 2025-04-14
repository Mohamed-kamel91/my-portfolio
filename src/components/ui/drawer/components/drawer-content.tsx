'use client';

import React, { useRef } from 'react';
import { tv } from 'tailwind-variants';

import { DrawerBackdrop } from './drawer-backdrop';

import { useScrollLock, useTabTrap } from '@/hooks';
import { useDrawer } from '../useDrawer';

import { cn } from '@/utils/cn';

export const drawerVariants = tv({
  base: cn('fixed z-(--z-modal)', 'text-foreground bg-background'),
  variants: {
    size: {
      sm: 'w-screen',
      md: 'w-screen',
      lg: 'w-screen',
    },
    position: {
      top: 'start-0 top-0',
      bottom: 'start-0 bottom-0',
      left: 'start-0 top-0',
      right: 'end-0 top-0',
    },
  },
  compoundVariants: [
    {
      position: ['top', 'bottom'],
      size: 'sm',
      class: 'h-0 min-h-[20rem]',
    },
    {
      position: ['top', 'bottom'],
      size: 'md',
      class: 'h-0 min-h-[28rem]',
    },
    {
      position: ['top', 'bottom'],
      size: 'lg',
      class: 'h-0 min-h-[36rem]',
    },
    {
      position: ['left', 'right'],
      size: 'sm',
      class: 'h-dvh sm:max-w-xs',
    },
    {
      position: ['left', 'right'],
      size: 'md',
      class: 'h-dvh sm:max-w-md',
    },
    {
      position: ['left', 'right'],
      size: 'lg',
      class: 'h-dvh sm:max-w-xl',
    },
  ],
  defaultVariants: {
    size: 'md',
    position: 'top',
  },
});

type DrawerContentProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(({ className, children, ...props }, ref) => {
  const { id: drawerId, isOpen, variants } = useDrawer();
  const { size, position } = variants;

  const drawerRef = useRef<HTMLDivElement>(null);

  useScrollLock({ lock: isOpen });
  useTabTrap(drawerRef);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <DrawerBackdrop />

      <div
        ref={ref}
        id={drawerId}
        className={cn(drawerVariants({ size, position, className }))}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        <div
          ref={drawerRef}
          className={cn('relative flex flex-col', 'h-full')}
        >
          {children}
        </div>
      </div>
    </>
  );
});

DrawerContent.displayName = 'DrawerContent';
