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
      className="group flex items-center gap-3 rounded-2xl border border-[#FBF4BD]/60 bg-white/60 backdrop-blur-md px-5 py-4 text-sm font-medium text-black shadow-sm transition-all hover:bg-[#FBF4BD]/70 hover:shadow-md"
    >
      <span className="text-black/70 transition-transform duration-200 group-hover:scale-110">{icon}</span>
      <span>{label}</span>
    </a>
  );
}