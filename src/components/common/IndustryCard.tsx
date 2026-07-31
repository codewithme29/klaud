import { motion } from 'framer-motion';
import { ArrowRight, Building2, Landmark, Shield, Home, Smartphone, Wifi, Building, Users, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Landmark, Shield, Home, Smartphone, Wifi, Building, Users, ShoppingCart,
};

interface IndustryCardProps {
  icon: string;
  title: string;
  description: string;
  services: string[];
  index?: number;
}

export function IndustryCard({
  icon,
  title,
  description,
  services,
  index = 0,
}: IndustryCardProps) {
  const Icon = iconMap[icon] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group h-full"
    >
      <div
        className={cn(
          'flex h-full flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-6',
          'shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]',
          'transition-all duration-300',
          'hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)]',
          'hover:-translate-y-0.5'
        )}
      >
        {/* Icon — green circular */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 transition-all duration-300 group-hover:bg-secondary group-hover:shadow-lg group-hover:shadow-secondary/20">
          <Icon className="h-5.5 w-5.5 text-secondary transition-colors duration-300 group-hover:text-white" />
        </div>

        <h3 className="font-heading text-[15px] font-semibold leading-snug text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>

        {/* Service tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {services.slice(0, 3).map((s) => (
            <span
              key={s}
              className="rounded-full bg-[var(--bg-secondary)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--text-secondary)]"
            >
              {s}
            </span>
          ))}
          {services.length > 3 && (
            <span className="rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-medium text-secondary">
              +{services.length - 3}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span>Explore</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
