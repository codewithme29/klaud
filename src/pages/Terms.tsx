import { MetaTags } from '@/features/seo/MetaTags';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export default function Terms() {
  return (
    <>
      <MetaTags title="Terms of Service" description="Terms and conditions." />

      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#041638] pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-gray-300">Last updated: January 2024</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="prose prose-gray max-w-3xl dark:prose-invert">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services of KLAUD HUNTER SERVICES PVT. LTD., you agree
              to be bound by these Terms of Service. If you do not agree with any part of these
              terms, you should not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              KLAUD HUNTER SERVICES PVT. LTD. provides verification, investigation, risk management,
              audit, collection, and related services to BFSI and Corporate clients. The specific
              scope of services will be defined in individual service agreements.
            </p>

            <h2>3. Client Obligations</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information for verification services</li>
              <li>Obtain necessary consents from individuals being verified</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Pay fees as per the agreed terms</li>
            </ul>

            <h2>4. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality of all information shared during
              the course of service delivery. Our confidentiality obligations are further defined
              in our Privacy Policy and individual service agreements.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content, materials, and reports provided by KLAUD HUNTER SERVICES PVT. LTD.
              are our intellectual property and may not be reproduced or distributed without
              our written consent.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              KLAUD HUNTER SERVICES PVT. LTD. shall not be liable for any indirect, incidental,
              or consequential damages arising from the use of our services, except as expressly
              provided in our service agreement.
            </p>

            <h2>7. Termination</h2>
            <p>
              Either party may terminate the service agreement as per the terms defined in
              the individual service contract. Upon termination, all fees due shall be payable
              as per the agreement.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India.
              Any disputes shall be subject to the jurisdiction of courts in Noida, Uttar Pradesh.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting to our website. Your continued use of our services
              constitutes acceptance of the updated terms.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions about these terms, please contact us at <strong>info@klaudhunter.com</strong>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
