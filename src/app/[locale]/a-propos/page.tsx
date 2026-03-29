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
    <article className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          {/* Title flows directly into content */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-800">
              {t('title')}
            </h1>
            <p className="mt-2 text-lg text-neutral-500">
              {t('subtitle')}
            </p>
          </header>

          {/* Lead paragraph — larger, bolder */}
          <p className="text-xl text-neutral-800 leading-relaxed font-medium">
            {t('description.0')}
          </p>
        </FadeIn>

        {/* Image floats into the text flow */}
        <FadeIn delay={0.15}>
          <figure className="my-8 lg:float-right lg:ml-8 lg:mb-4 lg:w-[45%]">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100">
              <Image
                src="/images/about/amu-research.webp"
                alt={t('researchCaption')}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-neutral-400 italic">
              {t('researchCaption')}
            </figcaption>
          </figure>
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
