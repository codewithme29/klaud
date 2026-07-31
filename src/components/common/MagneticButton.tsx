import { useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  as: Tag = 'button',
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleReset = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      className="inline-block transition-transform duration-200 ease-out"
    >
      {children}
    </motion.div>
  );

  if (Tag === 'a') {
    return <a href={href} className={className} onClick={onClick}>{content}</a>;
  }

  return <button className={className} onClick={onClick}>{content}</button>;
}
