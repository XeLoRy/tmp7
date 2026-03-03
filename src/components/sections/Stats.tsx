'use client';

import { useTranslations } from 'next-intl';
import { FadeIn, Counter } from '@/components/animations';

export function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { target: 20, suffix: '+', label: t('years') },
    { target: 30, suffix: '+', label: t('projects') },
    { target: 5, suffix: '+', label: t('countries') },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} direction="up" delay={index * 0.1}>
              <div>
                <div className="text-4xl font-bold text-teal">
                  <Counter target={stat.target} suffix={stat.suffix} prefix="" />
                </div>
                <p className="mt-2 text-neutral-600">{stat.label}</p>
              </div>
            </FadeIn>
          ))}

          {/* Certified badge - no counter */}
          <FadeIn direction="up" delay={0.3}>
            <div>
              <div className="text-4xl font-bold text-teal flex items-center justify-center gap-2">
                <svg
                  className="h-10 w-10 text-teal"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <p className="mt-2 text-neutral-600">{t('certified')}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
