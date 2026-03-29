import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { FadeIn } from '@/components/animations';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-neutral-600 mb-12 max-w-3xl">
            {t('subtitle')}
          </p>
        </FadeIn>

        {/* First paragraph + image side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <p className="text-neutral-700 text-lg leading-relaxed">
              {t('description.0')}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/about/amu-research.webp"
                alt={t('researchCaption')}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-neutral-500 italic">
              {t('researchCaption')}
            </p>
          </FadeIn>
        </div>

        {/* Remaining paragraphs */}
        <div className="mt-16 max-w-4xl space-y-6">
          {[1, 2, 3].map((i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-neutral-600 leading-relaxed">
                {t(`description.${i}`)}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
