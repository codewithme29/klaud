import type { ComponentType, ReactNode, SVGProps } from 'react';

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
}

export interface SectionProps extends BaseProps {
  id?: string;
  dark?: boolean;
  navy?: boolean;
  green?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export interface SectionHeadingProps extends BaseProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
