import { useState } from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { regions } from '@/data/coverage';
import { cn } from '@/lib/utils';

interface CoverageMapProps {
  variant?: 'default' | 'dark' | 'navy';
}

export function CoverageMap({ variant = 'default' }: CoverageMapProps) {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const isDark = variant === 'dark';
  const isNavy = variant === 'navy';

  return (
    <Section id="coverage" dark={isDark} navy={isNavy}>
      <SectionHeading
        label="Coverage"
        title="Pan-India Presence"
        subtitle="11+ states covered with a growing network of offices and field investigators."
        light={isNavy}
      />

      <ScrollReveal>
        {/* State grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {regions.map((region) => {
            const isActive = activeRegion === region.id;
            return (
              <button
                key={region.id}
                onMouseEnter={() => setActiveRegion(region.id)}
                onMouseLeave={() => setActiveRegion(null)}
                className={cn(
                  'group relative rounded-lg border p-4 text-left transition-all duration-200',
                  isActive
                    ? 'border-primary bg-primary/5 shadow-md'
                    : cn(
                        'hover:border-primary/30',
                        isNavy
                          ? 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]'
                          : 'border-[var(--border-color)] bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)]'
                      )
                )}
              >
                <div className="flex items-start justify-between">
                  <MapPin
                    className={cn(
                      'h-4 w-4 transition-colors',
                      isActive ? 'text-primary' : 'text-[var(--text-tertiary)]'
                    )}
                  />
                  {region.coverage === 'full' && (
                    <CheckCircle className="h-3.5 w-3.5 text-secondary" />
                  )}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                  {region.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                  {region.cities.length} cities
                </p>
                {isActive && (
                  <div className="absolute left-0 top-full z-10 mt-2 w-56 rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] p-3 shadow-lg">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">Key Cities:</p>
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      {region.cities.slice(0, 5).join(', ')}
                      {region.cities.length > 5 && ` +${region.cities.length - 5} more`}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Summary */}
        <div className={cn('mt-10 flex flex-wrap justify-center gap-8 text-center text-sm', isNavy ? 'text-gray-400' : 'text-[var(--text-secondary)]')}>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" /> 11+ States
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-secondary" /> Fully Covered
          </span>
        </div>
      </ScrollReveal>
    </Section>
  );
}
