import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema } from '@/lib/seo';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { IndustriesServed } from '@/components/sections/industries/IndustriesServed';
import { CTASection } from '@/components/sections/cta/CTASection';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function Industries() {
  return (
    <>
      <MetaTags
        title="Industries"
        description="Industries we serve - BFSI, Corporate, Government and more."
        schema={organizationSchema()}
      />

      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-24">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Industries We Serve
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Specialized verification, investigation, and risk management solutions tailored
              for diverse industry verticals.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <IndustriesServed />

      <Section dark>
        <div className="rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              Tailored Solutions for Every Industry
            </h2>
            <p className="mt-4 text-[var(--text-secondary)]">
              We understand that every industry has unique verification and risk management needs.
              Our solutions are customized to meet the specific regulatory and operational requirements
              of each sector we serve.
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
