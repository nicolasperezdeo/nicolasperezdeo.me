import { publications } from '../data/profile';
import { Section } from '../components/Section';

export function Publications() {
  return (
    <Section id="publications" title="Publications & Patents" eyebrow="Thought Leadership">
      <ul className="space-y-6">
        {publications.map((item) => (
          <li key={item.title} className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-6 shadow-sm shadow-slate-950/40">
            <p className="text-lg font-medium text-white">{item.title}</p>
            <p className="mt-2 text-sm text-slate-400">{item.outlet}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
