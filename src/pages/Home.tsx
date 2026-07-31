import { MetaTags } from '@/features/seo/MetaTags';
import { organizationSchema, websiteSchema } from '@/lib/seo';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { TrustStats } from '@/components/sections/stats/TrustStats';
import { AboutPreview } from '@/components/sections/about/AboutPreview';
import { ServicesGrid } from '@/components/sections/services/ServicesGrid';
import { WhyChooseUs } from '@/components/sections/why-us/WhyChooseUs';
import { IndustriesServed } from '@/components/sections/industries/IndustriesServed';
import { CoverageMap } from '@/components/sections/coverage/CoverageMap';
import { ProcessTimeline } from '@/components/sections/process/ProcessTimeline';
import { TestimonialCarousel } from '@/components/sections/testimonials/TestimonialCarousel';
import { LeadershipPreview } from '@/components/sections/team/LeadershipPreview';
import { InsightsGrid } from '@/components/sections/insights/InsightsGrid';
import { FAQSection } from '@/components/sections/faq/FAQSection';
import { CTASection } from '@/components/sections/cta/CTASection';

export default function Home() {
  return (
    <>
      <MetaTags
        title="Home"
        description="Professional verification, investigation, audit and risk management solutions for Banks, NBFCs, Insurance, FinTech and Corporate Organizations."
        schema={{
          ...organizationSchema(),
          ...websiteSchema(),
        }}
      />

      <HeroSection />

      {/* Rhythm: navy → dark → white → navy → gray → white → navy → navy → gray → white → navy → gray → dark */}
      <TrustStats />
      <AboutPreview />
      <ServicesGrid variant="navy" />
      <WhyChooseUs variant="default" />
      <IndustriesServed />
      <CoverageMap variant="navy" />
      <ProcessTimeline variant="navy" />
      <TestimonialCarousel variant="dark" />
      <LeadershipPreview />
      <InsightsGrid variant="navy" />
      <FAQSection variant="dark" />
      <CTASection />
    </>
  );
}
