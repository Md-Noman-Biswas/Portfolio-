'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, Menu } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useEffect, useRef, useState } from 'react';
import {
  education,
  platforms,
  profile,
  projects,
  metrics,
  researchInterests,
  researchTimeline,
  skills,
} from '@/data/portfolio';
import { SectionWrapper } from './section-wrapper';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#competitive-programming', label: 'CP' },
  { href: '#contact', label: 'Contact' },
];

function AnimatedCounter({ value, label }: { value: number; label: string }) {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.7 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 18, mass: 0.8 });
  const rounded = useTransform(springValue, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => setDisplayValue(latest));
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={counterRef} className="glass-card p-4 text-center">
      <p className="font-serif text-3xl font-semibold text-cyan-300 light:text-cyan-700">{displayValue}+</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400 light:text-slate-600">{label}</p>
    </div>
  );
}

export function PortfolioPage() {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setStatus({ type: 'error', message: data.error ?? 'Failed to send message. Please try again.' });
        return;
      }

      setStatus({ type: 'success', message: data.message ?? 'Message sent successfully.' });
      event.currentTarget.reset();
    } catch {
      setStatus({ type: 'error', message: 'Network error while sending message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }} className="pb-12">
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-3 focus:py-2 focus:text-slate-950">
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/65 backdrop-blur-xl light:border-slate-200 light:bg-white/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8" aria-label="Main navigation">
          <Link href="#hero" className="text-sm font-semibold tracking-[0.2em] text-cyan-300 light:text-cyan-700">
            ECE | AI
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white light:text-slate-600 light:hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-slate-700/80 p-2 md:hidden"
              onClick={() => document.getElementById('mobile-nav')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              aria-label="Open section navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
            <ThemeToggle />
          </div>
        </nav>
        <div id="mobile-nav" className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 pb-3 md:hidden sm:px-8">
          {navItems.map((item) => (
            <a key={`mobile-${item.href}`} href={item.href} className="whitespace-nowrap rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300 light:border-slate-300 light:text-slate-700">
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <section id="hero" className="relative isolate overflow-hidden px-4 pb-24 pt-24 sm:px-8">
        <div className="hero-aurora absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-slate-950/70 light:to-slate-50/70" />
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300 light:text-cyan-700">Third-Year ECE Undergraduate</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold tracking-tight md:text-7xl">{profile.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 light:text-slate-600">AI &amp; Machine Learning Enthusiast | ECE Undergraduate</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              View Projects
            </a>
            <a href="#research" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300 light:border-slate-300 light:hover:text-cyan-700">
              View Research
            </a>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-300 light:border-slate-300 light:hover:text-cyan-700">
              Download Resume <Download className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid max-w-xl gap-4 sm:grid-cols-2">
            <AnimatedCounter value={metrics.projectsCompleted} label="Projects Completed" />
            <AnimatedCounter value={metrics.coursesFinished} label="Courses Finished" />
          </div>
        </motion.div>
      </section>

      <SectionWrapper
        id="about"
        title="About"
        subtitle="Research-driven engineer focused on transforming ML theory into robust systems with measurable outcomes."
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <article className="surface p-7">
            <p className="leading-relaxed text-slate-200 light:text-slate-700">
              I am a third-year Electrical and Computer Engineering student with a concentration in AI and machine learning. My academic work emphasizes statistical learning theory,
              embedded systems, and reproducible experimentation pipelines for real-world datasets.
            </p>
            <p className="mt-5 leading-relaxed text-slate-200 light:text-slate-700">
              I am especially motivated by interdisciplinary problems at the intersection of computer vision and geospatial intelligence, where robust representation learning can create
              high-impact decision support tools.
            </p>
          </article>
          <div className="surface p-7">
            <h3 className="font-serif text-xl font-semibold">Education Timeline</h3>
            <div className="mt-5 space-y-5">
              {education.map((item) => (
                <div key={item.period} className="relative border-l border-cyan-500/50 pl-4">
                  <p className="text-sm text-cyan-300 light:text-cyan-700">{item.period}</p>
                  <p className="font-medium">{item.institution}</p>
                  <p className="text-sm text-slate-300 light:text-slate-600">{item.program}</p>
                  <p className="text-sm text-slate-400 light:text-slate-500">{item.detail}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{item.expectedGraduation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" title="Skills" subtitle="Core engineering toolkit across software, machine learning, and systems development.">
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, list]) => (
            <article key={category} className="surface p-7">
              <h3 className="font-serif text-xl font-semibold">{category}</h3>
              <div className="mt-5 space-y-4">
                {list.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 light:bg-slate-200" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level} aria-label={`${skill.name} proficiency`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects" title="Projects" subtitle="Selected work across machine learning systems and software engineering.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article whileHover={{ y: -6 }} key={project.title} className="surface card-hover flex h-full flex-col p-7">
              <h3 className="font-serif text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300 light:text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs light:bg-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm">
                <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700" href={project.github} target="_blank" rel="noreferrer noopener">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                {project.demo ? (
                  <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700" href={project.demo} target="_blank" rel="noreferrer noopener">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="research" title="Research" subtitle="Academic exploration in modern representation learning and computer vision.">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.article whileHover={{ y: -4 }} className="surface card-hover p-7">
            <h3 className="font-serif text-xl font-semibold">Research Interests</h3>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-300 light:text-slate-600 sm:grid-cols-2">
              {researchInterests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>

            <div className="mt-7 glass-card p-5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-semibold">Ongoing Research Title Placeholder</h4>
                <span className="rounded-full border border-cyan-400 px-3 py-1 text-xs text-cyan-300">Ongoing</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 light:text-slate-700">
                This ongoing work investigates robust feature extraction techniques from limited-label geospatial imagery through self-supervised objectives. The study aims to quantify
                representation quality and transferability under domain shift constraints.
              </p>
              <p className="mt-3 text-sm text-slate-300 light:text-slate-700">
                <strong>Methods:</strong> Contrastive Learning, Transfer Learning, Linear Evaluation Protocols
              </p>
              <p className="mt-1 text-sm text-slate-300 light:text-slate-700">
                <strong>Tools:</strong> PyTorch, Weights &amp; Biases, QGIS
              </p>
              <a
                href="/paper-placeholder.pdf"
                download
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Download Paper <Download className="h-4 w-4" />
              </a>
            </div>
          </motion.article>

          <motion.aside whileHover={{ y: -4 }} className="surface card-hover p-7">
            <h3 className="font-serif text-xl font-semibold">Research Timeline</h3>
            <div className="mt-5 space-y-4">
              {researchTimeline.map((entry) => (
                <div key={entry.year} className="border-l border-slate-700 pl-4 light:border-slate-300">
                  <p className="text-xs uppercase tracking-wider text-cyan-300 light:text-cyan-700">{entry.year}</p>
                  <p className="text-sm text-slate-300 light:text-slate-600">{entry.event}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="competitive-programming"
        title="Competitive Programming"
        subtitle="Algorithmic problem solving to strengthen reasoning, efficiency, and implementation speed."
      >
        <article className="surface p-7">
          <p className="leading-relaxed text-slate-300 light:text-slate-600">
            I practice competitive programming to improve data structure fluency, complexity analysis, and disciplined debugging under time constraints. Current focus includes graph theory,
            dynamic programming, and greedy optimization patterns.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <span key={platform} className="rounded-full border border-slate-700 px-3 py-1 text-sm light:border-slate-300">
                {platform}
              </span>
            ))}
          </div>
        </article>
      </SectionWrapper>

      <SectionWrapper id="contact" title="Contact" subtitle="Let&apos;s connect for research collaboration, internships, and engineering opportunities.">
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <article className="surface p-7">
            <h3 className="font-serif text-xl font-semibold">Reach Out</h3>
            <a href={`mailto:${profile.email}`} className="mt-4 flex items-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <div className="mt-5 flex gap-4">
              <a href={profile.linkedin} className="rounded-full border border-slate-700 p-2 hover:border-cyan-400" aria-label="LinkedIn profile" target="_blank" rel="noreferrer noopener">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={profile.github} className="rounded-full border border-slate-700 p-2 hover:border-cyan-400" aria-label="GitHub profile" target="_blank" rel="noreferrer noopener">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </article>

          <form onSubmit={onSubmit} className="surface space-y-4 p-7" noValidate>
            <label className="block text-sm" htmlFor="name">
              Name
            </label>
            <input id="name" required name="name" maxLength={80} className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 outline-none focus:border-cyan-400 light:border-slate-300 light:bg-white" />
            <label className="block text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              required
              name="email"
              type="email"
              maxLength={120}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 outline-none focus:border-cyan-400 light:border-slate-300 light:bg-white"
            />
            <label className="block text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              name="message"
              rows={4}
              minLength={10}
              maxLength={1200}
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 outline-none focus:border-cyan-400 light:border-slate-300 light:bg-white"
            />
            <button disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70" type="submit">
              {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight className="h-4 w-4" />
            </button>
            {status ? (
              <p className={`text-sm ${status.type === 'success' ? 'text-cyan-300 light:text-cyan-700' : 'text-rose-300 light:text-rose-600'}`} role="status" aria-live="polite">
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </SectionWrapper>
    </motion.main>
  );
}
