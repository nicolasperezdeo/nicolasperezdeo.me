import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  action?: ReactNode;
}

export function Section({ id, title, eyebrow, children, action }: SectionProps) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-grid-light bg-grid-size opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent/80">{eyebrow}</p>
            )}
            <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
          </div>
          {action && <div>{action}</div>}
        </div>
        <div className="space-y-6 text-base text-slate-300 sm:text-lg">{children}</div>
      </div>
    </section>
  );
}
