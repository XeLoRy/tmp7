'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FadeIn } from '@/components/animations';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function FireSafetyPage() {
  const t = useTranslations('fireSafetyPage');

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
      <section className="bg-orange py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl">{t('subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="text-lg text-neutral-600 max-w-4xl leading-relaxed">
              {t('intro')}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 relative aspect-[16/9] max-w-4xl rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/projects/feu-maquette-tgv-cstb.webp"
                alt={t('fireTestAlt')}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-neutral-500 italic">{t('fireTestCaption')}</p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">{t('services')}</h2>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-orange flex-shrink-0" />
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
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal flex-shrink-0" />
                    <span className="text-neutral-600">{app}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">{t('methodology')}</h2>
            <p className="text-neutral-600 max-w-4xl leading-relaxed">
              {t('methodologyText')}
            </p>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
