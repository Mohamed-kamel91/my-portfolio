import { useContext } from 'react';
import { DrawerContext } from './drawer-context';

export const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error(
      'Component must be used within a Drawer Provider',
    );
  }

  return context;
};
