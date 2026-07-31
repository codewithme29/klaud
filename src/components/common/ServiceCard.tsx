import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Home, Briefcase, MapPin, Search, FileSearch, Scale, Phone, Eye, Building, Building2, Users, ShoppingCart, Smartphone, Wifi, Landmark, Target, Zap, CheckCircle, Send, UserCheck, Lock, TrendingUp, BarChart3, Globe, FileText, AlertTriangle, Brain, FileCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Home, Briefcase, Shield, Search, FileSearch, Scale, PhoneCall: Phone,
  Eye, Building, Building2, FileCheck, Users, ShoppingCart, Smartphone, Wifi,
  Landmark, Target, Zap, CheckCircle, Send, UserCheck, Lock, TrendingUp,
  BarChart3, Globe, FileText, AlertTriangle, Brain, ShieldAlert: Shield,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  index?: number;
  category?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  href,
  index = 0,
  category,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative h-full"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={cn(
          'relative flex h-full flex-col rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-6',
          'shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)]',
          'transition-all duration-300',
          'hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.04)]',
          'hover:-translate-y-0.5'
        )}
      >
        {/* Icon — green circular background, white icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 transition-all duration-300 group-hover:bg-secondary group-hover:shadow-lg group-hover:shadow-secondary/20">
          <Icon className="h-5.5 w-5.5 text-secondary transition-colors duration-300 group-hover:text-white" />
        </div>

        {category && (
          <Badge variant="secondary" className="mb-2.5 w-fit">
            {category}
          </Badge>
        )}

        <h3 className="font-heading text-[15px] font-semibold leading-snug text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-2">
          {description}
        </p>

        {/* Expandable features */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <ul className="mt-3 space-y-1.5 border-t border-[var(--border-color)] pt-3">
            {features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}
