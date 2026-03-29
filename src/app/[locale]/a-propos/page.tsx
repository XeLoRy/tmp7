import { getTranslations } from 'next-intl/server';
import { FadeIn } from '@/components/animations';
import { ImageLightbox } from '@/components/ImageLightbox';
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
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800">
              {t('title')}
            </h1>
            <p className="mt-2 text-lg text-neutral-500">
              {t('subtitle')}
            </p>
          </header>

          <p className="text-xl text-neutral-800 leading-relaxed font-medium mb-6">
            {t('description.0')}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ImageLightbox
            src="/images/about/amu-research.webp"
            alt={t('researchCaption')}
            caption={t('researchCaption')}
            className="my-6 lg:float-right lg:ml-8 lg:mb-4 lg:w-[45%]"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-5 text-neutral-600 leading-relaxed">
            <p>{t('description.1')}</p>
            <p>{t('description.2')}</p>
            <p>{t('description.3')}</p>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
