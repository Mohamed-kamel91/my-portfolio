import { useEffect } from 'react';

type useTabTrapOptions = {
  initialFocus?: boolean;
};
export const useTabTrap = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  options: useTabTrapOptions = {},
) => {
  // Options
  const { initialFocus = false } = options;

  const isHTMLElement = (node: unknown): node is HTMLElement => {
    return node instanceof HTMLElement;
  };

  useEffect(() => {
    const container = ref.current;

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
  }, [ref]);
};
