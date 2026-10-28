import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { seasons, teachingPhilosophy, type Season } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, SectionHeading } from './fx';
import EpisodeCard from './EpisodeCard';
import InternshipEvidence from './InternshipEvidence';
import { RailButtons } from './Rail';

const philosophyStatementUrl = `${import.meta.env.BASE_URL}file/${encodeURIComponent('Teaching Philosophy Statement 1.docx')}`;

export default function Seasons() {
  return (
    <>
      <SectionHeading
        kicker="Teaching Practice"
        title="Teaching Journey"
        aside={<p className="max-w-xs text-sm text-mist">Scroll through the internship and teaching philosophy episodes that shape my practice.</p>}
      />
      {seasons.map((season) => (
        <Fragment key={season.number}>
          {season.number === 2 && <PhilosophyStatement />}
          <SeasonRail season={season} />
          {season.number === 1 && <InternshipEvidence />}
        </Fragment>
      ))}
    </>
  );
}

function PhilosophyStatement() {
  return (
    <section id="teaching-philosophy" className="gutter scroll-mt-24 py-10 sm:py-14">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-crimson-2">S02 · Teaching Philosophy</p>
      <h3 className="font-display text-3xl tracking-wide text-bone sm:text-4xl">My Teaching Philosophy</h3>
      <a
        href={philosophyStatementUrl}
        download="Teaching Philosophy Statement.docx"
        className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-crimson px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_22px_rgba(229,19,43,0.24)] transition hover:bg-crimson-2 hover:shadow-[0_0_28px_rgba(229,19,43,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-2"
      >
        Download Teaching Philosophy (.DOCX) <span aria-hidden>↓</span>
      </a>
      <div className="mt-5 max-w-4xl space-y-4 border-l border-crimson-2/35 pl-5 text-[15px] leading-7 text-bone/75 sm:pl-7">
        {teachingPhilosophy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function SeasonRail({ season }: { season: Season }) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();

  if (desktop && !reduced) {
    return <PinnedSeason season={season} />;
  }
  return <EpisodeRail season={season} />;
}

function EpisodeRail({ season }: { season: Season }) {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <div className="gutter mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="font-display text-4xl tracking-wide text-bone sm:text-5xl">
          <span className="text-outline mr-3">S{String(season.number).padStart(2, '0')}</span>
          {season.title}
        </h3>
        <span className="text-sm text-mist">
          {season.period} · {season.episodes.length} {season.episodes.length === 1 ? 'Episode' : 'Episodes'}
        </span>
      </div>
      <p className="gutter max-w-3xl text-[15px] leading-relaxed text-bone/75">{season.synopsis}</p>

      <div className="group/rail relative">
        <div ref={rail} className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto py-8 [perspective:1200px]" data-cursor="drag">
          {season.episodes.map((episode, index) => (
            <EpisodeCard key={episode.code} episode={episode} index={index} />
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>
    </motion.div>
  );
}

function PinnedSeason({ season }: { season: Season }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const distanceValue = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const nextDistance = Math.max(0, track.current.scrollWidth - window.innerWidth);
      setDistance(nextDistance);
      distanceValue.set(nextDistance);
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (track.current) observer.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distanceValue]);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });
  const rawX = useTransform([scrollYProgress, distanceValue], ([progress, width]: number[]) => -progress * width);
  const x = useSpring(rawX, { stiffness: 120, damping: 30, mass: 0.4 });
  const progressBar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={wrap}
      className="relative"
      style={{ height: 'calc(100vh + ' + distance + 'px)' }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]" />
        <motion.div ref={track} style={{ x }} className="gutter relative flex items-center gap-6 pr-[12vw]" data-cursor="drag">
          <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
            <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
              <span className="h-px w-8 bg-crimson-2" /> Season {String(season.number).padStart(2, '0')} · {season.number === 2 ? 'Guiding Principles' : 'Classroom Experience'}
            </p>
            <h3 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.85] text-bone">{season.title}</h3>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-mist">{season.synopsis}</p>
            <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">SCROLL TO EXPLORE →</p>
          </div>
          {season.episodes.map((episode, index) => (
            <EpisodeCard key={episode.code} episode={episode} index={index} />
          ))}
        </motion.div>
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">{season.title.toUpperCase()}</span>
          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div className="h-full origin-left bg-crimson" style={{ scaleX: progressBar }} />
          </div>
        </div>
      </div>
    </div>
  );
}
