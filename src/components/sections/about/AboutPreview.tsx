import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Target, Eye } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To provide accurate, timely, and reliable verification solutions that enable informed decisions.',
    border: 'border-[var(--border-color)] hover:border-primary/40',
    bg: 'bg-[var(--bg-primary)]',
    iconBg: 'bg-primary',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To be the most trusted partner in risk management and verification services in India.',
    border: 'border-[var(--border-color)] hover:border-secondary/40',
    bg: 'bg-[var(--bg-primary)]',
    iconBg: 'bg-secondary',
  },
  {
    icon: Shield,
    title: 'Our Values',
    desc: 'Integrity, Accuracy, Speed, Confidentiality, and Excellence in everything we do.',
    border: 'border-[var(--border-color)] hover:border-primary/30',
    bg: 'bg-[var(--bg-primary)]',
    iconBg: 'bg-primary',
  },
];

export function AboutPreview() {
  return (
    <section className="relative bg-[var(--bg-primary)] py-16 md:py-20 lg:py-24">
      <div className="container-page">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Left - Story */}
          <ScrollReveal direction="left">
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-secondary)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                About KAPI KAVACH
              </span>
              <h2 className="mt-5 font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.01em] text-[var(--text-primary)]">
                Knowledge Driven.
                <br />
                <span className="text-primary">Trust Delivered.</span>
              </h2>
              <p className="mt-6 text-base leading-[1.8] text-[var(--text-secondary)]">
                KAPI KAVACH SERVICES PVT. LTD. is a technology-driven verification and
                investigation partner for financial institutions. We specialise in the checks
                that protect credit risk &mdash; residence, employment, KYC, fraud control and
                field intelligence &mdash; for Banks, NBFCs, Insurance and FinTech companies.
              </p>
              <p className="mt-5 text-base leading-[1.8] text-[var(--text-secondary)]">
                With 100+ professional investigators across a pan-regional field network and
                11+ states, every verification is completed on the ground and delivered as a
                geo-tagged digital report &mdash; accurate, audit-ready and on time.
              </p>
              <Link to="/about" className="mt-8 inline-block">
                <Button className="group shadow-md">
                  Read Our Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right - Cards */}
          <ScrollReveal direction="right">
            <div className="grid gap-4">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ scale: 1.01, y: -2 }}
                    className={`group rounded-xl border ${card.border} ${card.bg} p-5 shadow-sm transition-all duration-300 hover:shadow-md`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${card.iconBg} shadow-sm`}>
                        <Icon className="h-5.5 w-5.5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-[15px] font-semibold text-[var(--text-primary)]">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
