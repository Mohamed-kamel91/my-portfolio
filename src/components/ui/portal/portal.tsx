'use client';

import { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  createPortalWrapper,
  hasChildElements,
} from './portal-utils';

type ReactPortalType = {
  wrapperId?: string;
  domNode?: Element;
  children: ReactNode;
};

export const ReactPortal = ({
  wrapperId = 'portal-wrapper',
  domNode,
  children,
}: ReactPortalType) => {
  const [portalContainer, setPortalContainer] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    let container = document.getElementById(wrapperId);

    // Create a portal container if no container is found or wrapperId is not provided
    if (!container) {
      container = createPortalWrapper(wrapperId, domNode);
    }

    setPortalContainer(container);

    // Delete container when component unmounts
    return () => {
      if (
        container &&
        !hasChildElements(container) &&
        container.parentElement
      ) {
        container.parentElement.removeChild(container);
      }
    };
  }, [wrapperId, domNode]);

  if (!portalContainer) return null;

  return createPortal(children, portalContainer);
};
