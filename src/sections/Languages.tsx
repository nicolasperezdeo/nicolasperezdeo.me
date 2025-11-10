import { Section } from '../components/Section';

export function Languages() {
  return (
    <Section id="languages" title="Languages" eyebrow="Communication">
      <ul className="grid gap-4 sm:grid-cols-3">
        <li className="glass rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold text-white">English</p>
          <p className="text-sm text-slate-400">C2 — Full professional</p>
        </li>
        <li className="glass rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold text-white">German</p>
          <p className="text-sm text-slate-400">B2/C1 — Advanced</p>
        </li>
        <li className="glass rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold text-white">Spanish</p>
          <p className="text-sm text-slate-400">Native</p>
        </li>
      </ul>
    </Section>
  );
}
