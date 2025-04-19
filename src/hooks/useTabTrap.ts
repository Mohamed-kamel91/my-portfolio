import { useCallback, useEffect, useState } from 'react';

type useTabTrapOptions = {
  initialFocus?: boolean;
};

const isHTMLElement = (node: unknown): node is HTMLElement => {
  return node instanceof HTMLElement;
};

export const useTabTrap = <T extends HTMLElement>(
  options: useTabTrapOptions = {},
) => {
  const [container, setContainer] = useState<T | null>(null);

  // Options
  const { initialFocus = false } = options;

  const targetRef = useCallback((node: T | null) => {
    if (!node) return;
    setContainer(node);
  }, []);

  useEffect(() => {
    if (!container) return;

    const focusableElements = [
      ...container.querySelectorAll<HTMLElement>(
        'button:not([disabled]), ' +
          '[href]:not([disabled]), ' +
          'input:not([disabled]):not([type="hidden"]), ' +
          'select:not([disabled]), ' +
          'textarea:not([disabled]), ' +
          '[tabindex]:not([tabindex="-1"]):not([disabled])',
      ),
    ];

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement =
      focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const isFirstElementActive =
        document.activeElement === firstElement;
      const isLastElementActive =
        document.activeElement === lastElement;

      if (event.shiftKey && isFirstElementActive) {
        // Shift + Tab
        event.preventDefault();
        if (isHTMLElement(lastElement)) {
          lastElement.focus();
        }
      } else if (!event.shiftKey && isLastElementActive) {
        // Tab
        event.preventDefault();
        if (isHTMLElement(firstElement)) {
          firstElement.focus();
        }
      }
    };

    // Set initial focus to the first element
    if (initialFocus && isHTMLElement(firstElement)) {
      firstElement.focus();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [container, initialFocus]);

  return targetRef;
};
