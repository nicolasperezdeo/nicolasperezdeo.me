import { publications } from '../data/profile';
import { Section } from '../components/Section';

export function Publications() {
  return (
    <Section id="publications" title="Publications & Patents" eyebrow="Thought Leadership">
      <ul className="space-y-6">
        {publications.map((item) => (
          <li
            key={item.title}
            className="rounded-3xl border border-[#FBF4BD]/60 bg-white/40 backdrop-blur-md p-6 shadow-sm shadow-black/10 transition-transform hover:scale-[1.01]"
          >
            <p className="text-lg font-medium text-black">{item.title}</p>
            <p className="mt-2 text-sm text-neutral-700">{item.outlet}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}