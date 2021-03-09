import { useEffect } from 'react';

export const usePageTitle = (title: string): void => {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = `${title} - Toiper`;
    } else {
      document.title = 'Toiper';
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
