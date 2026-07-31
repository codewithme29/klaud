import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { IndustryCard } from '@/components/common/IndustryCard';
import { industries } from '@/data/industries';

interface IndustriesServedProps {
  variant?: 'default' | 'dark' | 'navy';
}

export function IndustriesServed({ variant = 'default' }: IndustriesServedProps) {
  const isDark = variant === 'dark';
  const isNavy = variant === 'navy';

  return (
    <Section id="industries" dark={isDark} navy={isNavy}>
      <SectionHeading
        label="Industries"
        title="Industries We Serve"
        subtitle="Serving diverse sectors with specialized verification and risk management solutions."
        light={isNavy}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((industry, index) => (
          <IndustryCard
            key={industry.id}
            icon={industry.icon}
            title={industry.name}
            description={industry.description}
            services={industry.services}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
