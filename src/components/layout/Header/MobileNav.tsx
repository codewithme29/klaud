import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Shield, Phone, Mail } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { SITE } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/features/theme/ThemeToggle';
import { useLockedBody } from '@/hooks/useLockedBody';

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  useLockedBody(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[1200] bg-black/50 backdrop-blur-sm lg:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="fixed right-0 top-0 flex h-full w-full max-w-sm flex-col bg-[var(--bg-primary)] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] p-4">
          <Link to="/" className="flex items-center gap-2" onClick={onClose}>
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-heading font-bold">KLAUD HUNTER</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[var(--bg-secondary)]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href || '#'}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-primary"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & CTA */}
        <div className="border-t border-[var(--border-color)] p-4">
          <div className="mb-4 space-y-2">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
          <Button className="w-full" onClick={onClose}>
            Request Callback
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
