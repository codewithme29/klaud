import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema } from '@/lib/seo';
import { SITE } from '@/lib/constants';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ContactForm } from '@/components/forms/ContactForm';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { SocialLinks } from '@/components/common/SocialLinks';
import { CTASection } from '@/components/sections/cta/CTASection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <MetaTags
        title="Contact Us"
        description="Get in touch with KLAUD HUNTER SERVICES."
        schema={organizationSchema()}
      />

      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-24">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Get in touch with our team. We're here to help with your verification, investigation,
              and risk management needs.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <SectionHeading
              title="Send Us a Message"
              subtitle="Fill out the form and our team will get back to you within 24 hours."
              align="left"
            />
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <SectionHeading
              title="Contact Information"
              subtitle="Reach us directly through any of these channels."
              align="left"
            />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Phone</h4>
                  <a href={`tel:${SITE.phone}`} className="text-sm text-[var(--text-secondary)] hover:text-primary">
                    {SITE.phone}
                  </a>
                  <br />
                  <a href={`tel:${SITE.phoneAlt}`} className="text-sm text-[var(--text-secondary)] hover:text-primary">
                    {SITE.phoneAlt}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Email</h4>
                  <a href={`mailto:${SITE.email}`} className="text-sm text-[var(--text-secondary)] hover:text-primary">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Office</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {SITE.address.line1}, {SITE.address.city}, {SITE.address.state} {SITE.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Working Hours</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <h4 className="font-medium text-[var(--text-primary)] mb-3">Follow Us</h4>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section dark>
        <SectionHeading
          title="Find Us"
          subtitle="Visit our corporate headquarters."
        />
        <ScrollReveal>
          <div className="flex h-80 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-primary/40" />
              <p className="mt-2 text-sm text-[var(--text-tertiary)]">
                Noida, Uttar Pradesh
              </p>
              <p className="text-xs text-[var(--text-tertiary)]">
                Google Maps integration coming soon
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <CTASection />
    </>
  );
}
