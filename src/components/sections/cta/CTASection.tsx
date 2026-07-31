import { motion } from 'framer-motion';
import { ArrowRight, Phone, Shield } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryText?: string;
  secondaryText?: string;
  variant?: 'navy' | 'green';
}

export function CTASection({
  title = "Let's Secure Your Business Together",
  subtitle = 'Get in touch with our team to discuss how we can help protect your organization with trusted verification and risk management solutions.',
  primaryText = 'Contact Us Today',
  secondaryText = 'Request a Callback',
  variant = 'navy',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#081624] py-20 md:py-28">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-secondary/5 blur-[100px]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/10 ring-1 ring-white/10">
            <Shield className="h-7 w-7 text-white" />
          </div>

          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-300/70 md:text-lg max-w-lg mx-auto">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" className="group shadow-2xl shadow-secondary/20">
              {primaryText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="white-outline" size="xl">
              <Phone className="mr-2 h-5 w-5" />
              {secondaryText}
            </Button>
          </div>

          {/* Direct contact line */}
          <a
            href="tel:+919889001577"
            className="mt-10 inline-flex items-center gap-2.5 text-lg font-semibold text-white transition-colors hover:text-secondary"
          >
            <Phone className="h-5 w-5 text-secondary" />
            +91 98890 01577
          </a>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-gray-500">
            Direct line &middot; Response within 24 hours
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
