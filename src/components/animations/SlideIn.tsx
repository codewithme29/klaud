import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

const variants = {
  left: { initial: { x: -60 }, animate: { x: 0 } },
  right: { initial: { x: 60 }, animate: { x: 0 } },
  up: { initial: { y: 60 }, animate: { y: 0 } },
  down: { initial: { y: -60 }, animate: { y: 0 } },
};

export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  className,
}: SlideInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const { initial, animate } = variants[direction];

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ ...initial, opacity: 0 }}
        animate={isInView ? { ...animate, opacity: 1 } : { ...initial, opacity: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
