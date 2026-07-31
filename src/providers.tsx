import { type ReactNode, useEffect } from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/context/ThemeContext';
import { ModalProvider } from '@/context/ModalContext';
import Lenis from 'lenis';

function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ModalProvider>
        <SmoothScrollProvider>
          {children}
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            toastOptions={{
              style: {
                fontFamily: 'Inter, sans-serif',
              },
            }}
          />
        </SmoothScrollProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}
