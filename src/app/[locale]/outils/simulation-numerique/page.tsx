'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function SimulationPage() {
  const t = useTranslations('simulationPage');

  const software: { name: string; description: string }[] = [];
  for (let i = 0; i < 3; i++) {
    software.push({
      name: t(`softwareList.${i}.name`),
      description: t(`softwareList.${i}.description`),
    });
  }

  const capabilities: string[] = [];
  for (let i = 0; i < 6; i++) {
    capabilities.push(t(`capabilitiesList.${i}`));
  }

  return (
    <>
      <section className="bg-teal py-20">
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
        </div>
      </section>

      {/* Software tools */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-neutral-800 mb-8">{t('softwareTitle')}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {software.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl shadow-sm p-6 h-full">
                  <h3 className="font-semibold text-lg text-neutral-800 mb-3">{item.name}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">{t('capabilities')}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-teal flex-shrink-0" />
                  <span className="text-neutral-600">{cap}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
