import { education } from '../data/profile';
import { Section } from '../components/Section';

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Academics">
      <div className="space-y-6">
        {education.map((entry) => (
          <div
            key={entry.degree}
            className="flex flex-col justify-between gap-2 rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-sm shadow-slate-950/40 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-white">{entry.degree}</h3>
              <p className="text-sm text-accent">{entry.institution}</p>
            </div>
            <p className="text-sm font-mono uppercase tracking-wide text-slate-400">{entry.period}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
