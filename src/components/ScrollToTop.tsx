import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollNow = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const id = window.requestAnimationFrame(scrollNow);
    const timeout = window.setTimeout(scrollNow, 50);

    return () => {
      window.cancelAnimationFrame(id);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop; 