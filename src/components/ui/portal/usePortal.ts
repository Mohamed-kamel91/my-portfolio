import { useEffect, useState } from 'react';

import {
  createPortalWrapper,
  hasChildElements,
} from './portal-utils';
import { PortalType } from './portal-types';

type usePortalOptions = PortalType & {};

export const usePortal = ({ id, domNode }: usePortalOptions) => {
  const containerId = `${id}-portal`;

  const [portalContainer, setPortalContainer] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    const targetNode = domNode ?? document.body;

    let container = document.getElementById(containerId);

    // Create a portal container if no container is found or wrapperId is not provided
    if (!container) {
      container = createPortalWrapper(containerId, targetNode);
    }

    setPortalContainer(container);

    // Delete container when component unmounts
    return () => {
      if (container && !hasChildElements(container)) {
        container.parentElement?.removeChild(container);
      }
    };
  }, [containerId, domNode]);

  return portalContainer;
};
