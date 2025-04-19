import { useEffect, useState } from 'react';

const IS_SERVER = typeof window === 'undefined';

export const useHash = () => {
  const [hash, setHash] = useState(
    IS_SERVER ? '' : window.location.hash,
  );

  useEffect(() => {
    if (IS_SERVER) return;

    const updateHash = () => {
      queueMicrotask(() => {
        setHash(window.location.hash);
      });
    };

    // Initial hash update
    updateHash();

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(this, args);
      updateHash();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      updateHash();
    };

    // Will fire only on window refresh or using <a>
    // Won't work with react/nextjs client routing: <Link>
    window.addEventListener('hashchange', updateHash);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  return hash;
};
