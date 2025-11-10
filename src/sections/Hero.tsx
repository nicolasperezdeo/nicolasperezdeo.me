import { motion } from 'framer-motion';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { profile } from '../data/profile';
import { KeywordPill } from '../components/KeywordPill';
import { ContactLink } from '../components/ContactLink';

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E9] via-[#FBF4BD]/70 to-white" aria-hidden="true" />
      <div className="absolute inset-x-0 -top-48 h-[32rem] bg-gradient-to-br from-[#FBF4BD]/40 via-white/20 to-transparent blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FBF4BD]/80 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black/80 shadow-sm backdrop-blur-md">
            {profile.subtitle}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-black/80 sm:text-xl">
            {profile.summary}
          </p>

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
            <div className="sm:col-span-2">
              <ContactLink
                href={profile.github}
                label="GitHub"
                icon={<FaGithub className="h-5 w-5" />}
              />
              <motion.div
                className="mt-3 rounded-lg border border-[#FBF4BD]/60 bg-white/50 p-3 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img
                  src="https://ghchart.rshah.org/6688A2/nicolasperezdeo"
                  alt="GitHub Contribution Graph"
                  className="w-full"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1 rounded-[2.5rem] border border-[#FBF4BD]/60 bg-white/50 backdrop-blur-md p-8 shadow-lg shadow-[#F5F1E9]/40"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="absolute inset-x-12 -top-20 -z-10 h-40 rounded-full bg-gradient-to-br from-[#FBF4BD]/40 via-white/30 to-transparent blur-3xl" />

          <div className="flex items-center justify-between gap-6">
            <motion.div
              className="flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/assets/img/Nico_website.png"
                alt="Nicolas Perez de Olaguer"
                className="h-24 w-24 rounded-full border-2 border-[#FBF4BD]/60 shadow-md"
              />
            </motion.div>
            <div className="flex-1 min-w-0">
              <p className="text-sm uppercase tracking-widest text-black/70 whitespace-nowrap">Currently in</p>
              <p className="mt-1 flex items-center gap-2 text-lg font-semibold text-black">
                <HiMapPin className="h-5 w-5 text-black/70" />
                {profile.location}
              </p>
            </div>
            <div className="hidden lg:block flex-shrink-0 rounded-full border border-[#FBF4BD]/60 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70 shadow-sm backdrop-blur-md whitespace-nowrap">
              Open to Opportunities
            </div>
          </div>

          <div className="lg:hidden mt-4 text-center">
            <div className="inline-block rounded-full border border-[#FBF4BD]/60 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-black/70 shadow-sm backdrop-blur-md">
              Open to Opportunities
            </div>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm uppercase tracking-wide text-black/70">Experience</dt>
              <dd className="mt-2 text-3xl font-semibold text-black">6+ years</dd>
              <p className="mt-2 text-sm text-black/70">
                Building and deploying production ML systems.
              </p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-black/70">Specialization</dt>
              <dd className="mt-2 text-3xl font-semibold text-black">GenAI & MLOps</dd>
              <p className="mt-2 text-sm text-black/70">
                LLM pipelines and scalable ML infrastructure.
              </p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-black/70">Stack</dt>
              <dd className="mt-2 text-3xl font-semibold text-black">AWS + Docker</dd>
              <p className="mt-2 text-sm text-black/70">
                End-to-end platforms with Terraform & CI/CD.
              </p>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-black/70">Expertise</dt>
              <dd className="mt-2 text-3xl font-semibold text-black">Computer Vision</dd>
              <p className="mt-2 text-sm text-black/70">
                Applied across medical imaging and beyond.
              </p>
            </div>
          </dl>
        </motion.div>
      </div>
    </header>
  );
}