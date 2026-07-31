import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema, breadcrumbSchema } from '@/lib/seo';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { LeadershipPreview } from '@/components/sections/team/LeadershipPreview';
import { CTASection } from '@/components/sections/cta/CTASection';
import { values } from '@/data/values';

const klaudAcronym = [
  { letter: 'K', word: 'Knowledge', meaning: 'Deep domain expertise in verification and investigation' },
  { letter: 'L', word: 'Leadership', meaning: 'Industry-leading practices and solutions' },
  { letter: 'A', word: 'Accuracy', meaning: 'Precision in every verification and report' },
  { letter: 'U', word: 'Understanding', meaning: 'Deep understanding of client needs' },
  { letter: 'D', word: 'Dedication', meaning: 'Complete commitment to client satisfaction' },
  { letter: 'H', word: 'Honesty', meaning: 'Transparent and ethical business practices' },
  { letter: 'U', word: 'Unity', meaning: 'Collaborative approach with clients and partners' },
  { letter: 'N', word: 'Network', meaning: 'Pan-India operational network' },
  { letter: 'T', word: 'Trust', meaning: 'Building lasting relationships through reliability' },
  { letter: 'E', word: 'Excellence', meaning: 'Striving for the highest quality standards' },
  { letter: 'R', word: 'Reliability', meaning: 'Consistent and dependable service delivery' },
];

const milestones = [
  { year: '1999', title: 'Founded', description: 'KLAUD HUNTER established with a vision to bring transparency to verification.' },
  { year: '2005', title: 'Pan-India Expansion', description: 'Expanded operations to 5 states with dedicated field teams.' },
  { year: '2010', title: 'Technology Integration', description: 'Launched digital reporting and geo-tagging capabilities.' },
  { year: '2015', title: '10000+ Cases', description: 'Milestone of 10,000 completed verification cases achieved.' },
  { year: '2020', title: 'Digital Transformation', description: 'Full digital transformation with client portal and real-time tracking.' },
  { year: '2024', title: 'Industry Leader', description: 'Recognized as a trusted partner for leading BFSI organizations.' },
];

export default function About() {
  return (
    <>
      <MetaTags
        title="About Us"
        description="Learn about KLAUD HUNTER's 25+ year legacy in verification and investigation services."
        schema={{
          ...organizationSchema(),
          ...breadcrumbSchema([{ name: 'Home', url: 'https://klaudhunter.com' }, { name: 'About', url: 'https://klaudhunter.com/about' }]),
        }}
      />

      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-24">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Trusted verification and investigation services since 1999. Knowledge Driven. Trust Delivered.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Story */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</span>
              <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">Building Trust Since 1999</h2>
              <p className="mt-6 text-[var(--text-secondary)] leading-relaxed">
                KLAUD HUNTER SERVICES PVT. LTD. was founded with a singular vision: to bring transparency
                and trust to business operations through reliable verification and investigation services.
                What started as a small operation has grown into one of India's most respected verification
                companies, serving leading Banks, NBFCs, Insurance companies, and Corporate organizations.
              </p>
              <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                Our name embodies our philosophy — KLAUD represents Knowledge, Leadership, Accuracy,
                Understanding, and Dedication. HUNTER represents Honesty, Unity, Network, Trust,
                Excellence, and Reliability. Together, they define who we are and what we stand for.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 border border-primary/10">
              <h3 className="font-heading text-2xl font-bold text-primary">Our Mission</h3>
              <p className="mt-3 text-[var(--text-secondary)]">
                To provide accurate, timely, and reliable verification and investigation services
                that enable our clients to make informed decisions with confidence.
              </p>
              <div className="mt-8 h-px bg-[var(--border-color)]" />
              <h3 className="mt-8 font-heading text-2xl font-bold text-secondary">Our Vision</h3>
              <p className="mt-3 text-[var(--text-secondary)]">
                To be the most trusted partner in risk management and verification services,
                setting the standard for accuracy, integrity, and professionalism in the industry.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* KLAUD HUNTER Acronym */}
      <Section dark>
        <SectionHeading
          title="The KLAUD HUNTER Philosophy"
          subtitle="Every letter in our name represents a core value that drives our organization."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {klaudAcronym.map((item) => (
            <div key={item.letter} className="group rounded-xl border border-primary/10 bg-[var(--bg-primary)] p-5 transition-all hover:border-primary/30 hover:shadow-md">
              <span className="font-heading text-3xl font-bold text-primary">{item.letter}</span>
              <span className="ml-2 text-sm font-medium text-[var(--text-secondary)]">{item.word}</span>
              <p className="mt-2 text-xs text-[var(--text-tertiary)]">{item.meaning}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeading title="Our Journey" subtitle="Key milestones in our growth and evolution." align="left" />
        <ScrollReveal>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">{m.title}</h3>
                  <p className="mt-1 text-[var(--text-secondary)]">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <LeadershipPreview />
      <CTASection />
    </>
  );
}
