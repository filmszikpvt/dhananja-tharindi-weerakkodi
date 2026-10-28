import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { EASE, SectionHeading } from './fx';
import { useScrollLock } from '../hooks/smoothScroll';

const photos = Array.from(
  { length: 14 },
  (_, index) => `${import.meta.env.BASE_URL}scl-img/img%20(${index + 1}).jpeg`,
);

export default function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  useScrollLock(selected !== null);

  useEffect(() => {
    if (selected !== null) {
      if (!opener.current) opener.current = document.activeElement as HTMLElement | null;
      closeButton.current?.focus({ preventScroll: true });
    } else if (opener.current) {
      opener.current.focus({ preventScroll: true });
      opener.current = null;
    }
  }, [selected]);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSelected((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSelected((current) => current === null ? null : (current + 1) % photos.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <>
      <section aria-labelledby="gallery-title" className="relative z-10 py-16 sm:py-24">
        <SectionHeading
          kicker="Teaching in action"
          title="Classroom Moments"
          aside={<p className="max-w-xs text-sm text-mist">A visual record of lessons, activities and the learners who shaped this teaching journey.</p>}
        />

        <div className="gutter grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setSelected(index)}
              className={`group relative overflow-hidden rounded-xl ring-1 ring-white/10 ${
                index % 5 === 0 ? 'sm:row-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease: EASE }}
            >
              <img
                src={src}
                alt={`Classroom moment ${index + 1}`}
                loading="lazy"
                className="h-full min-h-40 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone">
                Moment {String(index + 1).padStart(2, '0')}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {createPortal(
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              key="classroom-photo-lightbox"
              className="fixed inset-0 z-[180] flex items-center justify-center overflow-hidden bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              role="dialog"
              aria-modal="true"
              aria-label={`Classroom moment ${selected + 1} of ${photos.length}`}
            >
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(55,8,17,0.22),transparent_72%)]" />
              <div className="relative z-10 flex h-full w-full items-center justify-center px-12 pb-16 pt-16 sm:px-20 sm:pb-14 sm:pt-12" onClick={(event) => event.target === event.currentTarget && setSelected(null)}>
                <motion.img
                  key={selected}
                  src={photos[selected]}
                  alt={`Classroom moment ${selected + 1}`}
                  className="block h-auto w-auto max-h-[calc(100dvh-8rem)] max-w-[calc(100vw-6rem)] rounded-xl object-contain shadow-[0_24px_100px_rgba(0,0,0,0.75)] ring-1 ring-white/10 sm:max-w-[calc(100vw-10rem)]"
                  initial={{ opacity: 0, scale: 0.97, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 8 }}
                  transition={{ duration: 0.3, ease: EASE }}
                />
                <button
                  type="button"
                  onClick={() => setSelected((current) => current === null ? null : (current - 1 + photos.length) % photos.length)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-bone backdrop-blur transition hover:border-white/60 hover:bg-black/90 sm:left-5"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => setSelected((current) => current === null ? null : (current + 1) % photos.length)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-bone backdrop-blur transition hover:border-white/60 hover:bg-black/90 sm:right-5"
                >
                  ›
                </button>
                <span aria-live="polite" className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-bone backdrop-blur">
                  MOMENT {String(selected + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                </span>
              </div>
              <button
                ref={closeButton}
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close photo"
                className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/70 text-xl text-bone shadow-lg backdrop-blur transition hover:border-white/60 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-2 sm:right-6"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
