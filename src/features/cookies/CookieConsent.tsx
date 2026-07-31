import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const COOKIE_KEY = 'klaud-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 z-[1400] w-[90vw] max-w-lg -translate-x-1/2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 shadow-xl"
        >
          <p className="text-sm text-[var(--text-secondary)]">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
          </p>
          <div className="mt-4 flex justify-end gap-3">
            <Button variant="ghost" size="sm" onClick={accept}>
              Decline
            </Button>
            <Button size="sm" onClick={accept}>
              Accept All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
