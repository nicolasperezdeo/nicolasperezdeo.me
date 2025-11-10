import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { HiEnvelope } from 'react-icons/hi2';
import { profile } from '../data/profile';

const footerLinks = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: <HiEnvelope className="h-4 w-4" /> },
  { label: 'LinkedIn', href: profile.linkedin, icon: <FaLinkedin className="h-4 w-4" /> },
  { label: 'GitHub', href: profile.github, icon: <FaGithub className="h-4 w-4" /> }
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-slate-950/80 py-10">
      <div className="absolute inset-x-0 -top-16 h-16 bg-gradient-to-t from-slate-950/90 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite & Tailwind.</p>
        <nav className="flex flex-wrap items-center gap-4">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 text-slate-300 transition hover:text-accent"
            >
              <span className="text-accent">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
