import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  navy?: boolean;
  accent?: 'primary' | 'secondary';
  gradient?: string;
  size?: 'sm' | 'md' | 'lg';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  withDivider?: boolean;
}

export function Section({
  id,
  children,
  className,
  dark,
  navy,
  accent,
  gradient,
  size = 'md',
  containerSize = 'xl',
  withDivider,
}: SectionProps) {
  const padding = {
    sm: 'py-14 md:py-16',
    md: 'py-16 md:py-20 lg:py-24',
    lg: 'py-20 md:py-24 lg:py-28',
  };

  const bg = gradient
    ? gradient
    : dark
      ? 'bg-[var(--bg-secondary)]'
      : navy
        ? 'bg-[#081624]'
        : accent === 'primary'
          ? 'bg-primary'
          : accent === 'secondary'
            ? 'bg-secondary'
            : 'bg-[var(--bg-primary)]';

  return (
    <section
      id={id}
      className={cn(
        'relative',
        padding[size],
        bg,
        withDivider && 'border-t border-[var(--border-color)]',
        className
      )}
    >
      {(navy || accent) && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      )}
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
