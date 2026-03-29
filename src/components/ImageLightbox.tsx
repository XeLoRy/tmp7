'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  aspectClassName?: string;
}

export function ImageLightbox({ src, alt, caption, className, aspectClassName = 'aspect-[4/3]' }: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full cursor-zoom-in group"
        >
          <div className={`relative ${aspectClassName} rounded-xl overflow-hidden bg-neutral-100`}>
            <Image src={src} alt={alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
          </div>
        </button>
        {caption && (
          <figcaption className="mt-2 text-sm text-neutral-400 italic">{caption}</figcaption>
        )}
      </figure>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className="relative w-[90vw] h-[85vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
