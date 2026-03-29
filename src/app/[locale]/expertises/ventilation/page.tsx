'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function VentilationPage() {
  const t = useTranslations('ventilationPage');

  const services: string[] = [];
  for (let i = 0; i < 6; i++) {
    services.push(t(`servicesList.${i}`));
  }

  const applications: string[] = [];
  for (let i = 0; i < 6; i++) {
    applications.push(t(`applicationsList.${i}`));
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-teal py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl">{t('subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {t('intro')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services + Applications */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">{t('services')}</h2>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal flex-shrink-0" />
                    <span className="text-neutral-600">{service}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">{t('applications')}</h2>
              <ul className="space-y-3">
                {applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-orange flex-shrink-0" />
                    <span className="text-neutral-600">{app}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">{t('methodology')}</h2>
            <p className="text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {t('methodologyText')}
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
