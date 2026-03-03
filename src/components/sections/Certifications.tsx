'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations';

const certificationItems = [
  {
    key: 'opqibi',
    icon: (
      <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    key: 'jei',
    icon: (
      <svg className="h-8 w-8 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
  },
  {
    key: 'cnrs',
    icon: (
      <svg className="h-8 w-8 text-teal-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    key: 'university',
    icon: (
      <svg className="h-8 w-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l8-6 8 6v10M9 20v-6h6v6" />
      </svg>
    ),
  },
] as const;

export function Certifications() {
  const t = useTranslations('certifications');

  return (
    <section className="bg-neutral-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn direction="up">
          <h2 className="text-3xl font-bold text-neutral-800 text-center mb-12">
            {t('title')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certificationItems.map((item, index) => (
            <FadeIn key={item.key} direction="up" delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center gap-4">
                {item.icon}
                <span className="text-neutral-800 font-medium text-sm">
                  {t(item.key)}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
