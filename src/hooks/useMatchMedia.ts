import { useEffect, useState } from 'react';

export const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let mediaQuery: MediaQueryList | null = null;

    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    try {
      // Create a MediaQueryList object
      mediaQuery = window.matchMedia(query);

      // set the initial state of matches based on the current media query
      // this is important for the first mount
      setMatches(mediaQuery.matches);

      // Attach "change" event listener to media Query list object
      mediaQuery.addEventListener('change', handleChange);
    } catch (error) {
      console.error('Error creating media query:', error);
    }

    // Remove event listener and set matches state to false
    // when component unmount or before every subsequent query change
    return () => {
      if (mediaQuery) {
        mediaQuery.removeEventListener('change', handleChange);
      }
      setMatches(false);
    };
  }, [query]);

  return matches;
};
