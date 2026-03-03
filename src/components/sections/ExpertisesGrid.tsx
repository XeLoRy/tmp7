'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/animations';

const expertises = [
  {
    key: 'ventilation',
    initial: 'V',
    color: 'bg-teal',
    href: '/expertises/ventilation',
  },
  {
    key: 'fireSafety',
    initial: 'I',
    color: 'bg-orange',
    href: '/expertises/securite-incendie',
  },
  {
    key: 'pollutionThermal',
    initial: 'P',
    color: 'bg-teal-dark',
    href: '/expertises/pollution-thermique',
  },
] as const;

export function ExpertisesGrid() {
  const t = useTranslations('expertises');
  const locale = useLocale();

  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn direction="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-neutral-800">{t('title')}</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => {
            const href = expertise.href;
            return (
              <FadeIn key={expertise.key} direction="up" delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-8 h-full flex flex-col">
                  {/* Icon circle */}
                  <div
                    className={`${expertise.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6`}
                  >
                    {expertise.initial}
                  </div>

                  <h3 className="font-semibold text-xl text-neutral-800">
                    {t(`${expertise.key}.title`)}
                  </h3>
                  <p className="mt-3 text-neutral-600 flex-1">
                    {t(`${expertise.key}.description`)}
                  </p>

                  <Link
                    href={href}
                    className="mt-6 inline-flex items-center text-teal hover:text-teal-dark font-medium transition-colors"
                  >
                    {t('learnMore')}
                    <span className="ml-1" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
