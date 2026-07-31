import { cn } from '@/lib/utils';

interface SvgDividerProps {
  position?: 'top' | 'bottom';
  flip?: boolean;
  color?: string;
  className?: string;
}

export function SvgDivider({
  position = 'bottom',
  flip = false,
  color = 'currentColor',
  className,
}: SvgDividerProps) {
  const fill = 'var(--bg-primary)';

  return (
    <div
      className={cn(
        'pointer-events-none absolute left-0 right-0',
        position === 'top' ? 'top-0' : 'bottom-0',
        flip && 'rotate-180',
        className
      )}
      style={{ transform: flip ? 'rotate(180deg)' : undefined }}
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        className="block w-full"
        style={{ height: '60px' }}
        preserveAspectRatio="none"
      >
        <path d="M0 60L1440 0V60H0Z" fill={fill} />
      </svg>
    </div>
  );
}
