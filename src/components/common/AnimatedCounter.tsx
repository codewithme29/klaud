import { useRef } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2.5,
  label,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="font-heading text-4xl font-bold text-secondary md:text-5xl lg:text-6xl">
        {prefix}
        {isInView ? (
          <CountUp
            end={end}
            duration={duration}
            decimals={decimals}
            separator=","
            useEasing
          />
        ) : (
          '0'
        )}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium md:text-base text-[var(--color-body)]">
        {label}
      </div>
    </div>
  );
}
