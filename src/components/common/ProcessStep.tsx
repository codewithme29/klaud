import { cn } from '@/lib/utils';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
  light?: boolean;
}

export function ProcessStep({ step, title, description, isLast, light }: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-heading text-sm font-bold',
          light
            ? 'bg-white/10 text-white ring-1 ring-white/20'
            : 'bg-primary text-white shadow-md shadow-primary/20'
        )}>
          {String(step).padStart(2, '0')}
        </div>
        {!isLast && (
          <div className={cn(
            'mt-2 w-px flex-1',
            light ? 'bg-white/10' : 'bg-gradient-to-b from-primary/20 to-transparent'
          )} />
        )}
      </div>
      <div className={cn('pb-10', isLast && 'pb-0')}>
        <h3 className={cn(
          'font-heading text-lg font-semibold',
          light ? 'text-white' : 'text-[var(--text-primary)]'
        )}>
          {title}
        </h3>
        <p className={cn(
          'mt-1.5 text-sm leading-relaxed',
          light ? 'text-gray-300' : 'text-[var(--text-secondary)]'
        )}>
          {description}
        </p>
      </div>
    </div>
  );
}
