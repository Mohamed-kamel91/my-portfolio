'use client';

import { VariantProps } from 'tailwind-variants';
import { DrawerProvider } from './drawer-context';
import { drawerVariants } from './components/drawer-content';

export type DrawerProps = VariantProps<typeof drawerVariants> & {
  id?: string;
  children: React.ReactNode;
};

export const Drawer = ({ id, children, ...props }: DrawerProps) => {
  return (
    <DrawerProvider id={id} {...props}>
      {children}
    </DrawerProvider>
  );
};
