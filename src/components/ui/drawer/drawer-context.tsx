'use client';

import { createContext, useEffect, useMemo } from 'react';
import { VariantProps } from 'tailwind-variants';

import { drawerVariants } from './components/drawer-content';

import { useDisclosure } from '@/hooks';

type ContextValue = ReturnType<typeof useDisclosure> & {
  id?: string;
  variants: VariantProps<typeof drawerVariants>;
};

export const DrawerContext = createContext<ContextValue | null>(null);

type DrawerProviderProps = VariantProps<typeof drawerVariants> & {
  id?: string;
  children: React.ReactNode;
};

export const DrawerProvider = ({
  id,
  size,
  position,
  children,
}: DrawerProviderProps) => {
  const { isOpen, open, close, toggle } = useDisclosure();

  // Drawer variants
  const variants = useMemo(
    () => ({ size, position }),
    [size, position],
  );

  // Context value
  const value = useMemo<ContextValue>(
    () => ({
      isOpen,
      open,
      close,
      toggle,
      variants,
      id,
    }),
    [isOpen, open, close, toggle, variants, id],
  );

  // Close modal when "esc" is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () =>
      document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  return <DrawerContext value={value}>{children}</DrawerContext>;
};
