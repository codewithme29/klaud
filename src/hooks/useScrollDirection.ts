import { useEffect, useState } from 'react';

type ScrollDirection = 'up' | 'down';

export function useScrollDirection(threshold = 10): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>('up');

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const update = () => {
      const current = window.scrollY;
      if (Math.abs(current - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setDirection(current > lastScrollY ? 'down' : 'up');
      lastScrollY = current;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return direction;
}
