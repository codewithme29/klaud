import { MetaTags } from '@/features/seo/MetaTags';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function Privacy() {
  return (
    <>
      <MetaTags title="Privacy Policy" description="Our privacy practices." />

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-300">Last updated: January 2024</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="prose prose-gray max-w-3xl dark:prose-invert">
            <h2>1. Introduction</h2>
            <p>
              KAPI KAVACH SERVICES PVT. LTD. ("we", "our", "us") is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul>
              <li>Fill out a contact form</li>
              <li>Request a quote or callback</li>
              <li>Subscribe to our newsletter</li>
              <li>Apply for a job position</li>
              <li>Use our services</li>
            </ul>
            <p>This information may include your name, email address, phone number, company name, and any other information you choose to provide.</p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information
              including your IP address, browser type, operating system, referring URLs,
              and browsing behavior through cookies and similar technologies.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide our services</li>
              <li>To process service requests and quotes</li>
              <li>To improve our website and services</li>
              <li>To send relevant communications and updates</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>4. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration, disclosure,
              or destruction. This includes encryption, access controls, and secure data storage.
            </p>

            <h2>5. Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or transfer your personal information to third parties
              without your consent, except as required by law or as necessary to provide our services.
            </p>

            <h2>6. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to
              disable cookies through your browser settings, though this may affect some
              functionality of our website.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices,
              please contact us at <strong>info@kapikavach.com</strong>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
