import { cn } from '@/lib/utils';
import { SITE } from '@/lib/constants';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const socialIcons = [
  { href: SITE.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: SITE.social.twitter, icon: Twitter, label: 'Twitter' },
  { href: SITE.social.facebook, icon: Facebook, label: 'Facebook' },
  { href: SITE.social.instagram, icon: Instagram, label: 'Instagram' },
  { href: SITE.social.youtube, icon: Youtube, label: 'YouTube' },
];

interface SocialLinksProps {
  size?: 'sm' | 'md';
  className?: string;
  light?: boolean;
}

export function SocialLinks({ size = 'md', className, light }: SocialLinksProps) {
  const iconSizes = { sm: 'h-3.5 w-3.5', md: 'h-4 w-4' };
  const buttonSizes = { sm: 'h-8 w-8', md: 'h-9 w-9' };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {socialIcons.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            'flex items-center justify-center rounded-full border transition-all duration-200 hover:scale-105',
            buttonSizes[size],
            light
              ? 'border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/10 hover:text-white'
              : 'border-[var(--border-color)] text-[var(--text-tertiary)] hover:border-primary/30 hover:bg-primary/5 hover:text-primary'
          )}
        >
          <Icon className={iconSizes[size]} />
        </a>
      ))}
    </div>
  );
}
