import { Section } from '../components/Section';

export function Languages() {
  return (
    <Section id="languages" title="Languages" eyebrow="Communication">
      <ul className="grid gap-4 sm:grid-cols-3">
        {[
          { name: 'English', level: 'C2 — Full professional' },
          { name: 'German', level: 'B2/C1 — Advanced' },
          { name: 'Spanish', level: 'Native' },
        ].map((lang) => (
          <li
            key={lang.name}
            className="rounded-2xl border border-[#FBF4BD]/60 bg-white/40 backdrop-blur-md p-6 text-center shadow-sm shadow-black/10"
          >
            <p className="text-lg font-semibold text-black">{lang.name}</p>
            <p className="text-sm text-neutral-700">{lang.level}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}