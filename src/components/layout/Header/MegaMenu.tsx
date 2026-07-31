import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { MegaMenuItem } from '@/types/navigation';

interface MegaMenuProps {
  items: MegaMenuItem;
  onClose: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export function MegaMenu({ items, onClose }: MegaMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [onClose]);

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      className="absolute left-0 top-full mt-1 w-[680px] overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-2xl shadow-black/5"
    >
      {/* Header */}
      {items.description && (
        <div className="border-b border-[var(--border-color)] px-6 py-4">
          <p className="text-sm font-medium text-[var(--text-primary)]">{items.label || 'Our Services'}</p>
          <p className="mt-0.5 text-xs text-[var(--text-tertiary)]">{items.description}</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0">
        {items.columns?.map((column, i) => (
          <div key={i} className={cn('p-3', i > 0 && 'border-l border-[var(--border-color)]')}>
            {column.map((link) => (
              <motion.div key={link.label} variants={item}>
                <Link
                  to={link.href || '#'}
                  className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-[var(--bg-secondary)]"
                  onClick={onClose}
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-[var(--text-primary)] transition-colors group-hover:text-primary">
                      {link.label}
                    </span>
                    {link.description && (
                      <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">
                        {link.description}
                      </span>
                    )}
                  </div>
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-6 py-3">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
          onClick={onClose}
        >
          View all services <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}
