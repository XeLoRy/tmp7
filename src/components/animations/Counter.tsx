'use client';

import { useEffect, useRef } from 'react';
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  motion,
} from 'framer-motion';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

export default function Counter({
  target,
  suffix = '',
  prefix = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration: 2,
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [isInView, motionValue, target]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
