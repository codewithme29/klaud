import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServiceCard } from '@/components/common/ServiceCard';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'all', label: 'All Services' },
  { key: 'verification', label: 'Verification' },
  { key: 'investigation', label: 'Investigation' },
  { key: 'audit', label: 'Audit & Compliance' },
  { key: 'collection', label: 'Collection' },
  { key: 'risk-management', label: 'Risk Management' },
  { key: 'document-verification', label: 'Document Verification' },
];

interface ServicesGridProps {
  variant?: 'default' | 'dark' | 'navy';
}

export function ServicesGrid({ variant = 'default' }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const isNavy = variant === 'navy';

  const filtered = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <Section id="services" dark={variant === 'dark'} navy={isNavy}>
      <SectionHeading
        label="Our Services"
        title="Comprehensive Verification & Investigation"
        subtitle="End-to-end verification, investigation, audit and risk management solutions tailored for BFSI and Corporate clients."
        light={isNavy}
      />

      {/* Value proposition strip */}
      <ScrollReveal>
        <div className="mx-auto mb-12 max-w-3xl">
          <div className={cn(
            'grid grid-cols-1 gap-3 rounded-2xl border p-6 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-y-0',
            isNavy
              ? 'divide-white/10 border-white/10 bg-white/[0.03]'
              : 'divide-[var(--border-color)] border-[var(--border-color)] bg-[var(--bg-primary)]'
          )}>
            {[
              { title: 'Risk Control', desc: 'Stop fraud before it enters your books' },
              { title: 'Operational Efficiency', desc: '48-hour TAT with digital reporting' },
              { title: 'Customer Experience', desc: 'Fast, frictionless onboarding' },
            ].map((item) => (
              <div key={item.title} className="px-4">
                <p className={cn('font-heading text-sm font-semibold', isNavy ? 'text-white' : 'text-[var(--text-primary)]')}>
                  {item.title}
                </p>
                <p className={cn('mt-0.5 text-xs', isNavy ? 'text-gray-400' : 'text-[var(--text-secondary)]')}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Category filter pills */}
      <ScrollReveal>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                activeCategory === cat.key
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : cn(
                      'border',
                      isNavy
                        ? 'border-white/10 bg-white/[0.03] text-[#D8E2F0] hover:bg-white hover:text-[#0F172A] hover:border-white/20'
                        : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:border-primary/40 hover:text-primary'
                    )
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Services grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                features={service.features}
                href={`/services#${service.slug}`}
                index={index}
                category={service.category.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
