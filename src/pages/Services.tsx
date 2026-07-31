import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema } from '@/lib/seo';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServicesGrid } from '@/components/sections/services/ServicesGrid';
import { ProcessTimeline } from '@/components/sections/process/ProcessTimeline';
import { FAQSection } from '@/components/sections/faq/FAQSection';
import { CTASection } from '@/components/sections/cta/CTASection';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function Services() {
  return (
    <>
      <MetaTags
        title="Services"
        description="Comprehensive verification, investigation, risk management, audit and collection services for BFSI and Corporate clients."
        schema={organizationSchema()}
      />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-24">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Comprehensive verification, investigation, audit and risk management solutions
              designed to protect your organization and enable informed decisions.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <ServicesGrid />
      <ProcessTimeline />

      <Section dark>
        <SectionHeading
          title="Verification Services"
          subtitle="Comprehensive verification solutions for KYC compliance and background checks."
        />
        <ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Contact Point Verification', desc: 'Physical verification of residential and commercial addresses with photographic evidence and geo-tagging.' },
              { title: 'Residence Verification', desc: 'Thorough residential address verification for KYC compliance with document validation.' },
              { title: 'Employment Verification', desc: 'Previous employment confirmation, designation validation, and reference checks.' },
              { title: 'KYC Verification', desc: 'End-to-end KYC verification with document authentication and regulatory compliance.' },
              { title: 'Business Verification', desc: 'Business existence, operational status, and registration document verification.' },
              { title: 'Document Verification', desc: 'Authenticity verification of identity, financial, educational, and legal documents.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-6">
                <h3 className="font-heading font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <FAQSection />
      <CTASection />
    </>
  );
}
