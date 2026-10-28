import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, reflectionParagraphs } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Reflection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <SectionHeading kicker="Internship Reflection" title="Reflective Summary" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.article
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
          className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10"
        >
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
          <header className="mb-8 border-b border-white/10 pb-6">
            <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">A TEACHING INTERNSHIP REFLECTION</p>
            <h3 className="mt-2 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
            <p className="mt-3 text-xs leading-relaxed text-mist">BA (Hons) in Teaching English as a Second Language · TESL 42554</p>
          </header>

          <div className={['relative space-y-5 overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none', expanded ? 'max-h-[12000px]' : 'max-h-[520px]'].join(' ')}>
            {reflectionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-sm leading-[1.85] text-bone/80 sm:text-[15px]">{paragraph}</p>
            ))}
            {!expanded && (
              <div className="absolute inset-x-0 bottom-0 flex h-36 items-end justify-center bg-gradient-to-t from-[#0c0c11] via-[#0c0c11]/90 to-transparent pb-2 md:hidden">
                <button type="button" onClick={() => setExpanded(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
                  Read the full reflection ↓
                </button>
              </div>
            )}
          </div>
        </motion.article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">What the internship taught me</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Connecting TESL theory with classroom practice strengthened my understanding of planning, learner participation, assessment and continuous reflection.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Plan clear learning outcomes and aligned activities',
              'Create supportive, learner-centered classrooms',
              'Use assessment and feedback to guide next steps',
              'Keep reflecting and adapting teaching practice',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-bone/80">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson-2" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
