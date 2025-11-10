import { education } from '../data/profile';
import { Section } from '../components/Section';

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="Academics">
      <div className="space-y-6">
        {education.map((entry) => (
          <div
            key={entry.degree}
            className="flex flex-col justify-between gap-2 rounded-3xl border border-[#FBF4BD]/60 bg-white/40 backdrop-blur-md p-6 shadow-sm shadow-black/10 sm:flex-row sm:items-center transition-transform hover:scale-[1.01]"
          >
            <div>
              <h3 className="text-xl font-semibold text-black">{entry.degree}</h3>
              <p className="text-sm text-neutral-700">{entry.institution}</p>
            </div>
            <p className="text-sm font-mono uppercase tracking-wide text-neutral-600">
              {entry.period}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}