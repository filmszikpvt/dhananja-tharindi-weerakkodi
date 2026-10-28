import { useRef } from 'react';
import { motion } from 'framer-motion';
import { seasons, type Palette } from '../data/portfolio';
import { EASE, Tilt } from './fx';
import { PosterBackdrop } from './Poster';
import { RailButtons } from './Rail';

type PdfDocument = { title: string; file: string; detail: string; tags: string[] };
type PdfGroup = { title: string; description: string; label: string; documents: PdfDocument[] };

const groups: PdfGroup[] = [
  {
    title: 'Weekly Teaching Evidence',
    description: 'Lesson and observation files from the internship weeks.',
    label: 'WEEKLY EVIDENCE',
    documents: [
      { title: 'Week 1 Evidence', file: 'WEEK 1 PDF.pdf', detail: 'Weekly internship record.', tags: ['Week 1', 'Evidence'] },
      { title: 'Week 2 Lesson Plan', file: 'Week 2 Lesson plan pdf.pdf', detail: 'Lesson planning record from Week 2.', tags: ['Week 2', 'Lesson plan'] },
      { title: 'Week 2 Observation Form', file: 'Week 2 Observation Form pdf.pdf', detail: 'Observation record from Week 2.', tags: ['Week 2', 'Observation'] },
      { title: 'Week 3 Evidence', file: 'WEEK 3 PDF.pdf', detail: 'Weekly internship record.', tags: ['Week 3', 'Evidence'] },
      { title: 'Week 4 Observation Form', file: 'Week 4 Observation Form pdf.pdf', detail: 'Observation record from Week 4.', tags: ['Week 4', 'Observation'] },
      { title: 'Week 4 Evidence', file: 'WEEK 4 PDF.pdf', detail: 'Weekly internship record.', tags: ['Week 4', 'Evidence'] },
      { title: 'Week 5 Evidence', file: 'WEEK 5 PDF.pdf', detail: 'Weekly internship record.', tags: ['Week 5', 'Evidence'] },
      { title: 'Week 6 Evidence', file: 'WEEK 6 PDF 2.pdf', detail: 'Weekly internship record.', tags: ['Week 6', 'Evidence'] },
    ],
  },
  {
    title: 'Teaching Materials',
    description: 'Supporting materials prepared for classroom practice.',
    label: 'CLASSROOM RESOURCES',
    documents: [{ title: 'Materials PDF', file: 'Materials pdf.pdf', detail: 'Teaching materials used during the internship.', tags: ['Materials', 'PDF'] }],
  },
  {
    title: 'Internship Records',
    description: 'Placement, consent and completion documents.',
    label: 'INTERNSHIP RECORDS',
    documents: [
      { title: 'Principal Consent Form', file: 'Consent Form by Principal.pdf', detail: 'Consent document from the school principal.', tags: ['Consent', 'School'] },
      { title: 'Teacher-in-Charge Consent Form', file: 'Consent Form by the Teacher-in-Charge.pdf', detail: 'Consent document from the teacher-in-charge.', tags: ['Consent', 'School'] },
      { title: 'Letter of Completion', file: 'Letter of completion.pdf', detail: 'Teaching internship completion document.', tags: ['Completion', 'Internship'] },
      { title: 'Internship Time Table', file: 'Time table.pdf', detail: 'Timetable for the teaching internship.', tags: ['Timetable', 'Internship'] },
    ],
  },
];

const palettes: Palette[] = seasons[0].episodes.map((episode) => episode.palette);
const pdfUrl = (file: string) => `${import.meta.env.BASE_URL}file/${encodeURIComponent(file)}`;

export default function InternshipEvidence() {
  return (
    <section aria-labelledby="internship-evidence-title" className="py-14 sm:py-20">
      <div className="gutter mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-crimson-2">S01 · DOCUMENT ARCHIVE</p>
          <h3 id="internship-evidence-title" className="font-display text-4xl tracking-wide text-bone sm:text-5xl">Internship Evidence</h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-mist">Open a card to view its PDF.</p>
      </div>

      <div className="space-y-8">
        {groups.map((group) => <DocumentRail key={group.title} group={group} />)}
      </div>
    </section>
  );
}

function DocumentRail({ group }: { group: PdfGroup }) {
  const rail = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="gutter mb-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h4 className="font-display text-2xl tracking-wide text-bone">{group.title}</h4>
        <p className="text-xs text-smoke">{group.description}</p>
      </div>
      <div className="group/rail relative">
        <div ref={rail} className="rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-8 py-8 sm:px-12 [perspective:1200px]" data-cursor="drag">
          {group.documents.map((document, index) => (
            <DocumentCard key={document.file} document={document} group={group} index={index} />
          ))}
        </div>
        <RailButtons rail={rail} />
      </div>
    </div>
  );
}

function DocumentCard({ document, group, index }: { document: PdfDocument; group: PdfGroup; index: number }) {
  const href = pdfUrl(document.file);
  const number = String(index + 1).padStart(2, '0');
  const palette = palettes[index % palettes.length];

  return (
    <motion.article
      className="w-[80vw] shrink-0 snap-start sm:w-[52vw] md:w-[38vw] lg:w-[30vw] xl:w-[26vw]"
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={7} className="group h-full rounded-xl">
        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10 transition duration-500 group-hover:ring-crimson-2/60">
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-110">
              <PosterBackdrop palette={palette}>
                <span aria-hidden className="absolute -bottom-6 right-2 font-display text-[7.5rem] leading-none text-white/[0.09]">{number}</span>
              </PosterBackdrop>
            </div>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`View ${document.title} PDF in a new tab`} className="absolute inset-0">
              <span className="absolute left-4 top-4 flex items-center gap-2">
                <span className="rounded bg-black/50 px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] text-bone backdrop-blur">S01</span>
                <span className="text-[10px] font-bold tracking-[0.16em] text-bone/80">DOCUMENT {number}</span>
              </span>
              <h5 className="absolute bottom-4 left-4 right-4 font-display text-3xl leading-none tracking-wide text-bone sm:text-4xl">{document.title}</h5>
            </a>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-3 flex items-center justify-between gap-3 text-[11px] text-smoke">
              <span className="font-semibold text-mist">{group.label}</span>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${document.title} PDF in a new tab`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-crimson px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white shadow-[0_0_22px_rgba(229,19,43,0.2)] transition hover:bg-crimson-2 hover:shadow-[0_0_28px_rgba(229,19,43,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-2"
              >
                View PDF <span aria-hidden>↗</span>
              </a>
            </div>
            <p className="text-sm leading-relaxed text-bone/80">{document.detail}</p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {document.tags.map((tag) => <span key={tag} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] text-mist">{tag}</span>)}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
