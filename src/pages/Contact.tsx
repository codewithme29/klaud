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
        description="Get in touch with KAPI KAVACH SERVICES."
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
    subtitle="Visit our corporate headquarters in Lucknow, Uttar Pradesh."
  />

  <ScrollReveal>
    <div className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="h-80 w-full">
        <iframe
          title="KAPI KAVACH Services Pvt Ltd - Office Location"
          src="https://www.google.com/maps?q=655A%2F3%2F123%2C%20Alkapuri%20Colony%2C%20Lucknow%2C%20Uttar%20Pradesh%20226022&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />

          <div>
            <h3 className="font-heading font-semibold text-[var(--text-primary)]">
              KAPI KAVACH SERVICES PVT LTD
            </h3>

            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              655A/3/123, Alkapuri Colony, Lucknow,
              Uttar Pradesh - 226022
            </p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=655A%2F3%2F123%2C%20Alkapuri%20Colony%2C%20Lucknow%2C%20Uttar%20Pradesh%20226022"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          <MapPin className="h-4 w-4" />
          Get Directions
        </a>
      </div>
    </div>
  </ScrollReveal>
</Section>


      <CTASection />
    </>
  );
}
