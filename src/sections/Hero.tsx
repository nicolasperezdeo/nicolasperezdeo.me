import { motion } from 'framer-motion';
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { profile } from '../data/profile';
import { KeywordPill } from '../components/KeywordPill';
import { ContactLink } from '../components/ContactLink';

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" aria-hidden="true" />
      <div className="absolute inset-x-0 -top-48 h-[32rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent/90">
            {profile.subtitle}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {profile.keywords.map((keyword) => (
              <KeywordPill key={keyword} label={keyword} />
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:max-w-xl sm:grid-cols-2">
            <ContactLink
              href={`mailto:${profile.email}`}
              label="Email Nicolas"
              icon={<HiEnvelope className="h-5 w-5" />}
            />
            <ContactLink
              href={profile.linkedin}
              label="LinkedIn"
              icon={<FaLinkedin className="h-5 w-5" />}
            />
            <ContactLink
              href={profile.github}
              label="GitHub"
              icon={<FaGithub className="h-5 w-5" />}
            />
            <ContactLink
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              label="Schedule a call"
              icon={<HiPhone className="h-5 w-5" />}
            />
          </div>
        </motion.div>
        <motion.div
          className="relative flex-1 rounded-[2.5rem] border border-slate-800/60 bg-slate-900/50 p-8 shadow-xl shadow-black/50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="absolute inset-x-12 -top-20 -z-10 h-40 rounded-full bg-gradient-to-br from-primary/50 via-accent/30 to-transparent blur-3xl" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500">Currently in</p>
              <p className="mt-1 flex items-center gap-2 text-lg font-semibold text-white">
                <HiMapPin className="h-5 w-5 text-accent" />
                {profile.location}
              </p>
            </div>
            <div className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Open to Lead Roles
            </div>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Experience</dt>
              <dd className="mt-2 text-3xl font-semibold text-white">5+ years</dd>
              <p className="mt-2 text-sm text-slate-400">
                Leading full-lifecycle ML platforms for diagnostic imaging.
              </p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Impact</dt>
              <dd className="mt-2 text-3xl font-semibold text-white">12%+</dd>
              <p className="mt-2 text-sm text-slate-400">Improvement over expert ophthalmologists in cataract grading.</p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Scale</dt>
              <dd className="mt-2 text-3xl font-semibold text-white">Nationwide</dd>
              <p className="mt-2 text-sm text-slate-400">Designed resilient inference for GP clinic networks.</p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-slate-500">Focus</dt>
              <dd className="mt-2 text-3xl font-semibold text-white">Computer Vision</dd>
              <p className="mt-2 text-sm text-slate-400">Deploying models that deliver measurable clinical value.</p>
            </div>
          </dl>
        </motion.div>
      </div>
    </header>
  );
}
