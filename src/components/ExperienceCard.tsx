import { motion } from 'framer-motion';

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  index: number;
}

export function ExperienceCard({ role, company, location, period, highlights, index }: ExperienceCardProps) {
  return (
    <motion.article
      className="glass rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(56,189,248,0.1)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">{role}</h3>
          <p className="text-lg text-accent">{company}</p>
        </div>
        <div className="text-sm font-mono uppercase tracking-wide text-slate-400">
          <span>{location}</span>
          <span className="mx-2 text-slate-600">•</span>
          <span>{period}</span>
        </div>
      </div>
      <ul className="mt-6 space-y-3 text-base text-slate-300">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-1 inline-block h-2 w-2 flex-none translate-y-1 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
