import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import logoSrc from '@/assets/images/logo.png';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigation';
import { ThemeToggle } from '@/features/theme/ThemeToggle';
import { Button } from '@/components/ui/button';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

function NavLink({ item, isActive }: { item: typeof navItems[0]; isActive: boolean }) {
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => item.mega && setMegaOpen(true)}
      onMouseLeave={() => item.mega && setMegaOpen(false)}
    >
      <Link
        to={item.href || '#'}
        className={cn(
          'relative px-4 py-2 text-[15px] font-medium transition-colors duration-200',
          isActive
            ? 'text-[var(--text-primary)]'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        )}
      >
        {item.label}
        {item.mega && (
          <span className="ml-1 text-[10px] text-[#94A3B8]">▾</span>
        )}
        <span
          className={cn(
            'absolute -bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-primary transition-transform duration-300 origin-left',
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          )}
        />
      </Link>
      {item.mega && megaOpen && (
        <MegaMenu items={item.mega} onClose={() => setMegaOpen(false)} />
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-[1000] transition-all duration-500',
          scrolled
            ? 'bg-[var(--glass-bg)] shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-2xl'
            : 'bg-[var(--glass-bg)] backdrop-blur-md'
        )}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container-page">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="group shrink-0">
              <img
                src={logoSrc}
                alt="KLAUD HUNTER SERVICES PVT. LTD."
                width="56"
                height="56"
                className="h-14 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <div key={item.label} className="group">
                  <NavLink item={item} isActive={location.pathname === item.href} />
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="secondary"
                className="hidden md:inline-flex shadow-xl shadow-secondary/15"
                size="sm"
              >
                Request Callback
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-tertiary)] hover:text-[var(--text-primary)] lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-20" />

      <AnimatePresence>
        {mobileOpen && (
          <MobileNav onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
