'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDE_IMAGES = [
  '/images/hero/hero-fire-test.jpg',
  '/images/hero/hero-smoke-test.jpg',
  '/images/hero/hero-tunnel-fire.jpg',
];

const SLIDE_INTERVAL = 6000;

export function Hero() {
  const t = useTranslations('hero');
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideCount = SLIDE_IMAGES.length;

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, slideCount]);

  // Preload images
  useEffect(() => {
    SLIDE_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const slide = {
    title: t(`slides.${current}.title`),
    subtitle: t(`slides.${current}.subtitle`),
    cta: t(`slides.${current}.cta`),
    ctaHref: t(`slides.${current}.ctaHref`),
  };

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images with Ken Burns effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <motion.img
            src={SLIDE_IMAGES[current]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: SLIDE_INTERVAL / 1000 + 1.2, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl w-full px-6 py-20">
        <div className="max-w-3xl">
          {/* Slide number indicator */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`num-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-orange font-bold text-lg tabular-nums">
                {String(current + 1).padStart(2, '0')}
              </span>
              <span className="w-12 h-px bg-white/40" />
              <span className="text-white/40 text-sm tabular-nums">
                {String(slideCount).padStart(2, '0')}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {slide.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* CTA buttons */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${current}`}
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href={slide.ctaHref}
                className="inline-block bg-orange hover:bg-orange-light text-white rounded-lg px-8 py-4 font-semibold transition-colors shadow-lg shadow-orange/20"
              >
                {slide.cta}
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white/70 text-white hover:bg-white/10 hover:border-white rounded-lg px-8 py-4 font-semibold transition-colors"
              >
                {t('cta_secondary')}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide navigation dots */}
        <div className="absolute bottom-10 left-6 flex items-center gap-3">
          {SLIDE_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative flex items-center justify-center"
              aria-label={`Slide ${index + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-10 h-1.5 bg-orange'
                    : 'w-6 h-1.5 bg-white/40 group-hover:bg-white/70'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
        <motion.div
          key={`progress-${current}`}
          className="h-full bg-orange"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: SLIDE_INTERVAL / 1000,
            ease: 'linear',
          }}
        />
      </div>
    </section>
  );
}
