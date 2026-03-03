'use client';

import { useTranslations } from 'next-intl';
import { COMPANY } from '@/lib/constants';
import { FadeIn } from '@/components/animations';
import { useState, type FormEvent } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="py-20">
      {/* Interactive map */}
      <div className="w-full h-[350px]">
        <iframe
          title="FluidAlp location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${COMPANY.coordinates.lng - 0.01}%2C${COMPANY.coordinates.lat - 0.005}%2C${COMPANY.coordinates.lng + 0.01}%2C${COMPANY.coordinates.lat + 0.005}&layer=mapnik&marker=${COMPANY.coordinates.lat}%2C${COMPANY.coordinates.lng}`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h1 className="text-3xl font-bold text-neutral-800 mb-2">{t('title')}</h1>
          <p className="text-neutral-600 mb-12">{t('subtitle')}</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <FadeIn className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-800 mb-1">
                    {t('name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-800 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-800 mb-1">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-800 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-800 mb-1">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-800 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-800 mb-1">
                    {t('company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-800 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-800 mb-1">
                  {t('subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-800 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-800 mb-1">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-neutral-800 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdpr"
                  name="gdpr"
                  required
                  className="mt-1 h-4 w-4 rounded border-neutral-200 text-teal focus:ring-teal"
                />
                <label htmlFor="gdpr" className="text-sm text-neutral-600">
                  {t('gdpr')}
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-orange hover:bg-orange-light text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? '...' : t('submit')}
              </button>

              {status === 'success' && (
                <p className="text-green-600 font-medium">{t('success')}</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-medium">{t('error')}</p>
              )}
            </form>
          </FadeIn>

          {/* Contact info sidebar */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">{t('address')}</h3>
                <p className="text-neutral-600">
                  {COMPANY.address.line1}<br />
                  {COMPANY.address.line2}<br />
                  {COMPANY.address.city}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">{t('phone')}</h3>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="text-teal hover:text-teal-dark transition-colors">
                  {COMPANY.phone}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">{t('email')}</h3>
                <a href={`mailto:${COMPANY.email}`} className="text-teal hover:text-teal-dark transition-colors">
                  {COMPANY.email}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">{t('hours')}</h3>
                <p className="text-neutral-600 text-sm">
                  {t('hoursWeekday')}<br />
                  {t('hoursWeekend')}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
