'use client';

import { createPortal } from 'react-dom';
import { usePortal } from './usePortal';

type ReactPortalProps = {
  id?: string;
  domNode?: HTMLElement;
  children: React.ReactNode;
};

export const ReactPortal = ({
  id = 'app',
  domNode,
  children,
}: ReactPortalProps) => {
  const container = usePortal({ id, domNode });

  if (!container) return null;

  return createPortal(children, container);
};
