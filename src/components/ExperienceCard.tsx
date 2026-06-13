import { motion } from 'framer-motion';

interface ExperienceCardProps {
  role: string;
  company: string;
  logo?: {
    src: string;
    alt: string;
  };
  location: string;
  period: string;
  highlights?: string[];
  positions?: {
    role: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
  index: number;
}

export function ExperienceCard({
  role,
  company,
  logo,
  location,
  period,
  highlights,
  positions,
  index
}: ExperienceCardProps) {
  return (
    <motion.article
      className="glass rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,0,0,0.08)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex items-start gap-4">
          {logo && (
            <div className="flex h-14 w-16 flex-none items-center justify-center rounded-2xl border border-white/70 bg-white/75 p-2 shadow-sm shadow-black/5">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className="max-h-9 max-w-full object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-2xl font-semibold text-black">{role}</h3>
            {role !== company && <p className="text-lg text-neutral-600">{company}</p>}
          </div>
        </div>
        <div className="text-sm font-mono uppercase tracking-wide text-neutral-500">
          <span>{location}</span>
          <span className="mx-2 text-neutral-400">•</span>
          <span>{period}</span>
        </div>
      </div>
      {positions ? (
        <div className="mt-8 space-y-7">
          {positions.map((position, positionIndex) => (
            <section key={position.role + position.period} className="relative pl-8">
              {positionIndex < positions.length - 1 && (
                <span className="absolute left-[7px] top-4 h-[calc(100%+1.75rem)] w-px bg-neutral-300" aria-hidden="true" />
              )}
              <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-white bg-black shadow-sm" aria-hidden="true" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-lg font-semibold text-black">{position.role}</h4>
                <div className="text-xs font-mono uppercase tracking-wide text-neutral-500">
                  <span>{position.location}</span>
                  <span className="mx-2 text-neutral-400">•</span>
                  <span>{position.period}</span>
                </div>
              </div>
              <HighlightList highlights={position.highlights} />
            </section>
          ))}
        </div>
      ) : (
        <HighlightList highlights={highlights ?? []} />
      )}
    </motion.article>
  );
}

function HighlightList({ highlights }: { highlights: string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-base text-neutral-700">
      {highlights.map((highlight) => (
        <li key={highlight} className="flex gap-3">
          <span className="mt-1 inline-block h-2 w-2 flex-none translate-y-1 rounded-full bg-black/60" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}
