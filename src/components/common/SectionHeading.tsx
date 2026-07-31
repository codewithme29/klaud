import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import type { SectionHeadingProps } from '@/types/common';

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div
        className={cn(
          'mx-auto mb-14 max-w-2xl md:mb-16',
          align === 'center' && 'text-center',
          align === 'left' && 'text-left',
          className
        )}
      >
        {label && (
          <div className={cn(
            'mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em]',
            light
              ? 'bg-white/[0.06] text-gray-300'
              : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)]'
          )}>
            <span className={cn(
              'h-1.5 w-1.5 rounded-full',
              light ? 'bg-secondary' : 'bg-primary'
            )} />
            {label}
          </div>
        )}
        <h2 className={cn(
          'font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.01em]',
          light ? 'text-white' : 'text-[var(--text-primary)]'
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn(
            'mt-5 text-[15px] leading-relaxed md:text-base max-w-xl',
            align === 'center' && 'mx-auto',
            light ? 'text-gray-300' : 'text-[var(--text-secondary)]'
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
