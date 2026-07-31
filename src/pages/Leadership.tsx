import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema } from '@/lib/seo';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TeamMemberCard } from '@/components/common/TeamMemberCard';
import { CTASection } from '@/components/sections/cta/CTASection';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { team } from '@/data/team';
import { values } from '@/data/values';

export default function Leadership() {
  return (
    <>
      <MetaTags
        title="Leadership"
        description="Meet our executive leadership team."
        schema={organizationSchema()}
      />

      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-24">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Leadership
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Meet the experienced professionals driving KLAUD HUNTER's vision of trust,
              accuracy, and excellence in verification services.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* Executive Team */}
      <Section>
        <SectionHeading
          title="Executive Leadership"
          subtitle="Industry veterans with decades of combined experience."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {team.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              qualifications={member.qualifications}
              experience={member.experience}
              executive={member.executive}
            />
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide every engagement."
        />
        <ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-xl border border-primary/10 bg-[var(--bg-primary)] p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="font-heading text-lg font-bold">{v.title[0]}</span>
                </div>
                <h3 className="mt-4 font-heading font-semibold text-[var(--text-primary)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{v.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      <CTASection />
    </>
  );
}
