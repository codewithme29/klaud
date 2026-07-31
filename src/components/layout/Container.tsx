import { cn } from '@/lib/utils';
import type { BaseProps } from '@/types/common';

interface ContainerProps extends BaseProps {
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({
  as: Tag = 'div',
  size = 'xl',
  className,
  children,
}: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-[1280px]',
    full: 'max-w-full',
  };

  return (
    <Tag className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </Tag>
  );
}
