import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md',
        secondary:
          'bg-[#0C6A33] text-white shadow-lg shadow-[#0C6A33]/20 hover:shadow-xl hover:shadow-[#0C6A33]/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md',
        outline:
          'border-2 border-[#E2E8F0] text-[#0F172A] hover:border-primary/40 hover:bg-primary/[0.04] hover:text-primary active:bg-primary/[0.08]',
        ghost:
          'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] active:bg-[#E2E8F0]',
        'white-outline':
          'border border-white/20 text-white hover:bg-white/10 hover:border-white/30 active:bg-white/5 backdrop-blur-sm',
      },
      size: {
        sm: 'h-10 rounded-xl px-5 text-sm',
        md: 'h-12 rounded-xl px-7 text-sm',
        lg: 'h-13 rounded-xl px-8 text-base',
        xl: 'h-14 rounded-2xl px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, disabled, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
