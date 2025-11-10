import { skills } from '../data/profile';
import { Section } from '../components/Section';

export function Skills() {
  return (
    <Section id="skills" title="Technical Toolkit" eyebrow="Expertise">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="rounded-3xl border border-[#FBF4BD]/60 bg-white/40 backdrop-blur-md p-6 shadow-md shadow-black/10 transition-transform hover:scale-[1.01]"
          >
            <h3 className="text-lg font-semibold text-black">{skillGroup.category}</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FBF4BD]"
                    aria-hidden="true"
                  />
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