'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FadeIn } from '@/components/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, type ProjectCategory } from '@/lib/projects';

type Filter = 'all' | ProjectCategory;

export default function ReferencesPage() {
  const t = useTranslations('projects');
  const tp = useTranslations('projectDetails');
  const [filter, setFilter] = useState<Filter>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    { key: 'tunnels', label: t('filterTunnels') },
    { key: 'erp', label: t('filterERP') },
    { key: 'industrial', label: t('filterIndustrial') },
  ];

  const filtered = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  function toggleExpand(slug: string) {
    setExpanded((prev) => (prev === slug ? null : slug));
  }

  return (
    <>
      <section className="bg-teal-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="text-4xl font-bold text-white">{t('title')}</h1>
            <p className="mt-4 text-xl text-white/80 max-w-3xl">{t('subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filters */}
          <FadeIn>
            <div className="flex flex-wrap gap-3 mb-12">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => { setFilter(f.key); setExpanded(null); }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === f.key
                      ? 'bg-teal text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const isExpanded = expanded === project.slug;

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => toggleExpand(project.slug)}
                    >
                      <div className="relative aspect-[4/3] bg-neutral-200">
                        <Image
                          src={project.image}
                          alt={tp(`${project.slug}.title`)}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-teal/90 text-white text-xs px-3 py-1 rounded-full">
                            {t(`categoryLabels.${project.category}`)}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-teal font-medium uppercase tracking-wider mb-1">
                          {project.client} · {project.year}
                        </p>
                        <h3 className="font-semibold text-neutral-800">
                          {tp(`${project.slug}.title`)}
                        </h3>

                        {/* Expandable description */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                                {tp(`${project.slug}.description`)}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="bg-teal-50 text-teal-dark text-xs px-2.5 py-0.5 rounded-full"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand indicator */}
                        <div className="mt-3 flex items-center gap-1 text-xs text-teal">
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                          <span>{isExpanded ? '' : t('viewProject')}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="text-neutral-500 text-center py-12">{t('noProjects')}</p>
          )}
        </div>
      </section>
    </>
  );
}
