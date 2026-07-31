import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema } from '@/lib/seo';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CoverageMap } from '@/components/sections/coverage/CoverageMap';
import { CTASection } from '@/components/sections/cta/CTASection';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { offices } from '@/data/coverage';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

export default function Coverage() {
  const hq = offices.find((o) => o.isHeadquarters);

  return (
    <>
      <MetaTags
        title="Coverage"
        description="PAN-India coverage with offices across all major cities."
        schema={organizationSchema()}
      />

      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-24">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Coverage
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              PAN-India presence with offices across 11+ states, ensuring rapid response and
              local expertise wherever you need us.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <CoverageMap />

      {/* Corporate Headquarters */}
      {hq && (
        <Section dark>
          <SectionHeading
            title="Corporate Headquarters"
            subtitle="Visit our corporate office or get in touch."
            align="left"
          />
          <ScrollReveal>
            <div className="max-w-md rounded-xl border border-primary/10 bg-[var(--bg-primary)] p-6">
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-primary" />
                <h3 className="font-heading font-semibold text-[var(--text-primary)]">{hq.name}</h3>
              </div>
              <div className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {hq.address}, {hq.city}, {hq.state}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  {hq.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  {hq.email}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Section>
      )}

      {/* All Offices */}
      <Section>
        <SectionHeading
          title="Regional Offices"
          subtitle="Our network of offices across India."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.filter((o) => !o.isHeadquarters).map((office) => (
            <div key={office.id} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
              <h3 className="font-heading font-semibold text-[var(--text-primary)]">{office.name}</h3>
              <div className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                <p className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {office.city}, {office.state}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  {office.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
