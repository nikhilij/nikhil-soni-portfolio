import { useEffect } from 'react';

const useScrollToTop = (delay = 1000) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, delay);

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [delay]);
};

export default useScrollToTop;
