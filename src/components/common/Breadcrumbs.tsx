import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/types/seo';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-6', className)}>
      <ol className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
        <li>
          <Link to="/" className="flex items-center gap-1 transition-colors hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" />
            {item.href ? (
              <Link to={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text-tertiary)]" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
