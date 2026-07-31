import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProcessStep } from '@/components/common/ProcessStep';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const steps = [
  { step: 1, title: 'Requirement Submitted', description: 'Client submits verification request with specific requirements and details through our secure portal.' },
  { step: 2, title: 'Case Assignment', description: 'Case is intelligently assigned to the nearest field investigator for fastest turnaround.' },
  { step: 3, title: 'Field Verification', description: 'On-ground physical verification with photographic evidence, geo-tagging and digital timestamp.' },
  { step: 4, title: 'Digital Report Generation', description: 'Comprehensive digital report auto-generated with all evidence, findings and analytics.' },
  { step: 5, title: 'Multi-Layer Quality Check', description: 'Rigorous quality assurance review ensures 99%+ accuracy before client delivery.' },
  { step: 6, title: 'Secure Client Delivery', description: 'Final report delivered through encrypted client portal with real-time access and notifications.' },
];

interface ProcessTimelineProps {
  variant?: 'default' | 'dark' | 'navy';
}

export function ProcessTimeline({ variant = 'default' }: ProcessTimelineProps) {
  const isNavy = variant === 'navy';

  if (isNavy) {
    return (
      <Section className="bg-gradient-to-br from-primary via-primary-dark to-[#041638]">
        <SectionHeading
          label="Our Process"
          title="How We Work"
          subtitle="A streamlined, technology-driven process from requirement to delivery."
          light
        />
        <ScrollReveal>
          <div className="mx-auto max-w-2xl">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
                light
              />
            ))}
          </div>
        </ScrollReveal>
      </Section>
    );
  }

  return (
    <Section dark={variant === 'dark'}>
      <SectionHeading
        label="Our Process"
        title="How We Work"
        subtitle="A streamlined, technology-driven process from requirement to delivery."
        light={variant === 'dark'}
      />
      <ScrollReveal>
        <div className="mx-auto max-w-2xl">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              light={variant === 'dark'}
            />
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
