import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

type UseScrollLockOptions = {
  lock?: boolean;
  lockTarget?: HTMLElement | string;
};

type TargetStyle = {
  paddingRight: CSSStyleDeclaration['paddingRight'];
  overflow: CSSStyleDeclaration['overflow'];
};

export const useScrollLock = (options: UseScrollLockOptions = {}) => {
  const { lockTarget, lock = true } = options;

  const [isLocked, setIsLocked] = useState(false);

  const target = useRef<HTMLElement>(null);
  const targetStyle = useRef<TargetStyle>(null);

  const lockScroll = useCallback(() => {
    if (target.current) {
      // Get element inline styles
      const { paddingRight, overflow } = target.current.style;

      // Preserve element inline styles
      targetStyle.current = { paddingRight, overflow };

      const offsetWidth =
        target.current === document.body
          ? window.innerWidth
          : target.current.offsetWidth;

      const scrollbarWidth = offsetWidth - target.current.clientWidth;

      // // Get current padding-right in px
      const currentPaddingRight = parseInt(
        window.getComputedStyle(target.current).paddingRight,
        10,
      );

      target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
      target.current.style.overflow = 'hidden';

      setIsLocked(true);
    }
  }, []);

  const unlockScroll = useCallback(() => {
    // Set element back to its preserved style
    if (target.current && targetStyle.current) {
      const { paddingRight, overflow } = targetStyle.current;
      target.current.style.paddingRight = paddingRight;
      target.current.style.overflow = overflow;
    }
    setIsLocked(false);
  }, []);

  useLayoutEffect(() => {
    if (lockTarget) {
      target.current =
        typeof lockTarget === 'string'
          ? document.querySelector(lockTarget)
          : lockTarget;
    }

    if (!target.current) {
      target.current = document.body;
    }

    if (lock) {
      lockScroll();
    }

    return () => {
      if (lock) {
        unlockScroll();
      }
    };
  }, [lock, lockTarget, lockScroll, unlockScroll]);

  return { isLocked, lockScroll, unlockScroll };
};
