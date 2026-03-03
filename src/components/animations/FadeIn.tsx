'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right';

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

function getOffset(direction: Direction): { x: number; y: number } {
  switch (direction) {
    case 'up':
      return { x: 0, y: 40 };
    case 'down':
      return { x: 0, y: -40 };
    case 'left':
      return { x: 40, y: 0 };
    case 'right':
      return { x: -40, y: 0 };
  }
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const offset = getOffset(direction);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
