import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema } from '@/lib/seo';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CTASection } from '@/components/sections/cta/CTASection';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Briefcase, Users, TrendingUp, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Briefcase, title: 'Professional Growth', desc: 'Continuous learning and career advancement opportunities.' },
  { icon: Users, title: 'Great Team Culture', desc: 'Collaborative and supportive work environment.' },
  { icon: TrendingUp, title: 'Industry Leadership', desc: 'Work with India\'s leading verification company.' },
  { icon: HeartHandshake, title: 'Work-Life Balance', desc: 'We value and support our team members\' well-being.' },
];

export default function Careers() {
  return (
    <>
      <MetaTags
        title="Careers"
        description="Join KLAUD HUNTER SERVICES - current openings and culture."
        schema={organizationSchema()}
      />

      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-24">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Careers
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Join India's most trusted verification company and be part of a team
              that's building trust, one verification at a time.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Culture */}
      <Section>
        <SectionHeading
          label="Why Join Us"
          title="Build Your Career with KLAUD HUNTER"
          subtitle="Be part of a growing organization that values integrity, excellence, and innovation."
        />
        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-[var(--text-primary)]">{b.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Section>

      {/* Open Positions */}
      <Section dark>
        <SectionHeading
          title="Open Positions"
          subtitle="We're always looking for talented professionals to join our team."
        />
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-6 text-[var(--text-secondary)]">
              While we don't have specific openings listed at this time, we're always interested
              in connecting with talented professionals in verification, investigation, sales,
              and operations.
            </p>
            <Button size="lg">
              Send Your Resume
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      <CTASection
        title="Ready to Make a Difference?"
        subtitle="Send us your resume and we'll get in touch when the right opportunity opens."
        primaryText="Submit Resume"
      />
    </>
  );
}
