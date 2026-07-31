import { motion } from 'framer-motion';
import { Linkedin, Mail, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  experience: string;
  linkedin?: string;
  email?: string;
  executive?: boolean;
}

export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  qualifications,
  experience,
  linkedin,
  email,
  executive = false,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'group relative overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[var(--shadow-card-hover)]',
        executive ? 'md:col-span-2 lg:flex' : ''
      )}
    >
      {/* Photo area */}
      <div
        className={cn(
          'relative shrink-0 overflow-hidden bg-[var(--bg-secondary)]',
          executive ? 'h-64 w-full lg:h-full lg:w-72' : 'h-48 w-full'
        )}
      >
        <img
          src={image}
          alt={`${name} — ${role}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Soft gradient at bottom of photo for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className={cn('flex flex-1 flex-col', executive ? 'p-8' : 'p-6')}>
        {executive && (
          <Quote className="mb-2 h-7 w-7 text-primary/15" />
        )}

        <h3 className={cn('font-heading font-bold text-[var(--text-primary)]', executive ? 'text-2xl' : 'text-lg')}>
          {name}
        </h3>
        <p className="text-sm font-medium text-secondary">{role}</p>

        {/* Qualifications */}
        <div className="mt-3 flex flex-wrap gap-2">
          {qualifications.map((q) => (
            <span
              key={q}
              className="rounded-full bg-[var(--bg-secondary)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
            >
              {q}
            </span>
          ))}
          <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary">
            {experience}
          </span>
        </div>

        <p className={cn('mt-4 text-[var(--text-secondary)] leading-relaxed flex-1', executive ? 'text-[15px]' : 'text-sm line-clamp-3')}>
          {bio}
        </p>

        {/* Social links */}
        <div className="mt-5 flex gap-3">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-tertiary)] transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
              aria-label={`${name} on LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-tertiary)] transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
