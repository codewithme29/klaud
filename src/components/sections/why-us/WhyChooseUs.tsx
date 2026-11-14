import { Shield, Target, Zap, Lock, Globe, Users, Search, Star } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const benefits = [
  { title: 'Technology Enabled', description: 'Advanced digital tools for accurate verification and real-time reporting.', icon: Shield },
  { title: 'Geo Tagged Reports', description: 'Every verification includes precise GPS coordinates and photographic evidence.', icon: Target },
  { title: 'Fast TAT', description: 'Standard reports delivered within 24-48 hours with express options available.', icon: Zap },
  { title: 'Real Time Tracking', description: 'Track your verification requests in real-time through our client portal.', icon: Search },
  { title: 'Dedicated Support', description: 'Personal account manager for every client relationship.', icon: Users },
  { title: 'Data Security', description: 'Enterprise-grade security with encrypted data transmission and storage.', icon: Lock },
  { title: 'Pan Regional Network', description: '11+ states covered with a growing network of professional investigators.', icon: Globe },
  { title: 'Experienced Leadership', description: 'Led by industry veterans with 25+ years of combined experience.', icon: Star },
];

interface WhyChooseUsProps {
  variant?: 'default' | 'navy';
}

export function WhyChooseUs({ variant = 'default' }: WhyChooseUsProps) {
  const isNavy = variant === 'navy';

  if (isNavy) {
    return (
      <Section navy>
        <SectionHeading
          label="Why Choose Us"
          title="Built for Trust. Driven by Technology."
          subtitle="What sets KAPI KAVACH apart from the competition."
          light
        />
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group flex flex-col rounded-xl border border-white/[0.08] bg-white/[0.04] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-sm font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Section>
    );
  }

  return (
    <Section dark>
      <SectionHeading
        label="Why Choose Us"
        title="Built for Trust. Driven by Technology."
        subtitle="What sets KAPI KAVACH apart from the competition."
      />
      <ScrollReveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group flex flex-col rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-sm font-semibold text-[var(--text-primary)]">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </Section>
  );
}
