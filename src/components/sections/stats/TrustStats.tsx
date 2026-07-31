import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 25, suffix: '+', label: 'Years of Industry Experience' },
  { value: 100, suffix: '+', label: 'Professional Investigators' },
  { value: 10000, suffix: '+', label: 'Cases Completed' },
  { value: 11, suffix: '+', label: 'States Covered' },
  { value: 99, suffix: '%', label: 'Accuracy Rate' },
  { value: 48, suffix: 'hrs', prefix: '<', label: 'Average Turnaround' },
];

function StatItem({ value, suffix, prefix, label }: typeof stats[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
        {prefix}
        {isInView ? (
          <CountUp end={value} duration={2.5} separator="," useEasing />
        ) : '0'}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-gray-400 md:text-sm">
        {label}
      </div>
    </div>
  );
}

export function TrustStats() {
  return (
    <section className="relative bg-[#081624] py-16 md:py-20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
