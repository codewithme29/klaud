import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout/Container';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function HeroCanvas({ prefersReduced }: { prefersReduced: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = 50;
    const connectDist = 180;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;
  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

export function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#020F29] via-[#082B63] to-[#0A1F4D]">
      {/* Canvas background */}
      <HeroCanvas prefersReduced={prefersReduced} />

      {/* Rich gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020F29]/95 via-[#082B63]/40 to-[#0A1F4D]/70 z-[1]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-secondary/[0.06] blur-[120px] z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020F29]/60 to-transparent z-[1]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10 pt-40 pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(22,139,69,0.5)]" />
                Serving Banks &middot; NBFCs &middot; Insurance &middot; FinTech
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white"
            >
              Driving India&rsquo;s Digital
              <br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] bg-clip-text text-transparent">
                Verification Transformation.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-300/70 md:text-lg"
            >
              End-to-end verification, fraud control, credit risk and KYC compliance
              solutions that help financial institutions approve the right customers,
              faster &mdash; and stop the wrong ones.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button className="relative h-14 overflow-hidden rounded-xl bg-secondary px-8 text-base font-semibold text-white shadow-2xl shadow-secondary/30 transition-all duration-300 hover:bg-secondary/90 hover:shadow-secondary/40 hover:-translate-y-0.5">
                <span className="relative z-10 flex items-center gap-2">
                  Request Service
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
              <Button className="h-14 rounded-xl border border-white/15 bg-white/[0.04] px-8 text-base font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">
                Explore Services
              </Button>
            </motion.div>

            {/* Operational stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
            >
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '100+', label: 'Field Investigators' },
                { value: '10K+', label: 'Cases Completed' },
                { value: '99%', label: 'Report Accuracy' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-secondary/40 pl-4">
                  <div className="font-heading text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-0.5 text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Premium brand sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex lg:justify-center"
          >
            <div className="relative flex h-[420px] w-[420px] items-center justify-center">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/5 via-primary/10 to-transparent blur-[100px]" />

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.04]" />

              {/* Mid ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-white/[0.03]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 -top-0.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-secondary/20"
                    style={{ transform: `rotate(${i * 60}deg) translateY(-84px)` }}
                  />
                ))}
              </motion.div>

              {/* Inner ring (counter) */}
              <motion.div
                className="absolute inset-20 rounded-full border border-white/[0.04]"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 -top-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-white/15"
                    style={{ transform: `rotate(${i * 90}deg) translateY(-54px)` }}
                  />
                ))}
              </motion.div>

              {/* Center shield */}
              <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[32px] bg-gradient-to-br from-primary/60 to-secondary/10 shadow-2xl shadow-primary/30 ring-1 ring-white/[0.06] backdrop-blur-sm">
                <Shield className="h-20 w-20 text-white/90" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
