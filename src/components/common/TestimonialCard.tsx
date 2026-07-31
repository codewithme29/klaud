import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  variant?: 'default' | 'dark';
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  variant = 'default',
}: TestimonialCardProps) {
  const isDark = variant === 'dark';

  const initials = author.split(' ').map(n => n[0]).join('');

  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-xl border p-8 shadow-[var(--shadow-card)]',
        isDark
          ? 'border-white/10 bg-white/[0.03]'
          : 'border-[var(--border-color)] bg-[var(--bg-primary)]'
      )}
    >
      {/* Decorative quote mark */}
      <div className="absolute right-6 top-6 text-6xl font-serif leading-none select-none pointer-events-none"
        style={{ color: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(8,43,99,0.06)' }}
      >
        &ldquo;
      </div>

      {/* Rating */}
      <div className="mb-5 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-4 w-4',
              i < rating ? 'fill-amber-400 text-amber-400' : 'text-[var(--border-color)]'
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className={cn(
        'flex-1 text-[15px] leading-relaxed italic',
        isDark ? 'text-gray-300' : 'text-[var(--text-secondary)]'
      )}>
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3 pt-5 border-t"
        style={{ borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'var(--border-color)' }}
      >
        <div className={cn(
          'flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold shrink-0',
          isDark ? 'bg-[#0C6A33]/30 text-white' : 'bg-secondary/10 text-secondary'
        )}>
          {initials}
        </div>
        <div className="min-w-0">
          <p className={cn(
            'text-sm font-semibold truncate',
            isDark ? 'text-white' : 'text-[var(--text-primary)]'
          )}>
            {author}
          </p>
          <p className={cn(
            'text-xs truncate',
            isDark ? 'text-gray-400' : 'text-[var(--text-tertiary)]'
          )}>
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
