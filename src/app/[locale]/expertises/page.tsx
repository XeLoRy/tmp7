'use client';

import { useTranslations } from 'next-intl';
import { ExpertisesGrid } from '@/components/sections/ExpertisesGrid';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { FadeIn } from '@/components/animations';

export default function ExpertisesOverviewPage() {
  const t = useTranslations('expertises');

  return (
    <>
      <section className="bg-teal py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
            <p className="mt-4 text-xl text-white/80">{t('subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      <ExpertisesGrid />
      <ContactCTA />
    </>
  );
}
