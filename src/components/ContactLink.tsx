import { ReactNode } from 'react';

interface ContactLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function ContactLink({ href, icon, label }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 text-sm font-medium text-slate-200 transition hover:border-accent/80 hover:bg-slate-900"
    >
      <span className="text-accent transition-transform duration-200 group-hover:scale-110">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
