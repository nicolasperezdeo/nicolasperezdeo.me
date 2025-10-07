import { skills } from '../data/profile';
import { Section } from '../components/Section';

export function Skills() {
  return (
    <Section id="skills" title="Technical Toolkit" eyebrow="Expertise">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-md shadow-slate-950/40"
          >
            <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
