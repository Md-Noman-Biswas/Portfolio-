'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Github, Linkedin, Mail, X } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import {
  education,
  platforms,
  profile,
  projects,
  researchInterests,
  researchMetrics,
  researchPapers,
  researchTimeline,
  skills,
} from '@/data/portfolio';
import { SectionWrapper } from '@/components/section-wrapper';
import { ThemeToggle } from '@/components/theme-toggle';

/**
 * Centralized navigation keeps desktop/mobile menus in sync.
 */
const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#competitive-programming', label: 'CP' },
  { href: '#contact', label: 'Contact' },
];

const researchTags = ['All', 'SSL', 'Geospatial', 'CV'] as const;

type ResearchTag = (typeof researchTags)[number];
type SubmitStatus = { type: 'success' | 'error'; message: string } | null;

function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-lg light:border-slate-200 light:bg-white/85">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8" aria-label="Main navigation">
        <Link href="#hero" className="text-sm font-semibold tracking-[0.2em] text-cyan-300 light:text-cyan-700">
          ECE | AI
        </Link>

        <ul className="hidden items-center gap-6 md:flex" aria-label="Primary sections">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-slate-300 transition hover:text-white light:text-slate-600 light:hover:text-slate-900">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </nav>

      <nav className="mx-auto max-w-6xl overflow-x-auto px-4 pb-3 md:hidden sm:px-8" aria-label="Mobile section navigation">
        <ul className="flex gap-3">
          {navItems.map((item) => (
            <li key={`mobile-${item.href}`}>
              <a href={item.href} className="whitespace-nowrap rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300 light:border-slate-300 light:text-slate-700">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="relative isolate overflow-hidden px-4 pb-18 pt-22 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.14),transparent_35%)]" />

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 light:text-cyan-700">Third-Year ECE Undergraduate</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300 light:text-slate-600">AI &amp; Machine Learning Enthusiast | ECE Undergraduate</p>

        <div className="mt-8 flex flex-wrap gap-3.5">
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
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <SectionWrapper id="about" title="About" subtitle="Research-driven engineer focused on turning theoretical machine learning ideas into practical systems.">
      <div className="section-stack">
        <article className="surface p-6">
          <p className="text-slate-300 light:text-slate-600">
            I am an Electrical and Computer Engineering student focused on representation learning, geospatial AI, and robust model evaluation. I enjoy building reproducible pipelines,
            designing clean experiments, and translating findings into deployable systems.
          </p>
        </article>

        <div className="section-stack-sm">
          {education.map((item) => (
            <article key={item.institution} className="surface p-6">
              <p className="text-xs uppercase tracking-wide text-cyan-300 light:text-cyan-700">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.institution}</h3>
              <p className="mt-2 text-slate-300 light:text-slate-600">{item.program}</p>
              <p className="text-sm text-slate-400 light:text-slate-500">{item.detail}</p>
              <p className="mt-2 text-sm text-slate-300 light:text-slate-600">{item.expectedGraduation}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Core technical stack used across coursework, research, and production prototypes.">
      <div className="section-grid-2">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="surface p-6">
            <h3 className="text-lg font-semibold">{category}</h3>
            <ul className="mt-4 space-y-4" aria-label={`${category} skills`}>
              {items.map((skill) => (
                <li key={skill.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-slate-400 light:text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 light:bg-slate-200" aria-hidden="true">
                    <div className="h-full rounded-full bg-cyan-400" style={{ width: `${skill.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Selected work in machine learning systems and software engineering.">
      <div className="section-grid-3">
        {projects.map((project) => (
          <article key={project.title} className="surface flex h-full flex-col p-6">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm text-slate-300 light:text-slate-600">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project technologies">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs light:bg-slate-200">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700" href={project.github} target="_blank" rel="noreferrer noopener">
                <Github className="h-4 w-4" /> GitHub
              </a>
              {project.demo ? (
                <a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700" href={project.demo} target="_blank" rel="noreferrer noopener">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

/**
 * Research section groups metrics, publication cards, filters, timeline,
 * and modal PDF preview in one cohesive, reusable unit.
 */
function ResearchSection() {
  const [selectedArea, setSelectedArea] = useState<ResearchTag>('All');
  const [activePaperPdf, setActivePaperPdf] = useState<string | null>(null);

  const filteredPapers = useMemo(
    () => researchPapers.filter((paper) => selectedArea === 'All' || paper.tags.includes(selectedArea)),
    [selectedArea],
  );

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePaperPdf(null);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <>
      <SectionWrapper id="research" title="Research" subtitle="Publication-focused profile highlighting reproducible AI research output.">
        <div className="section-stack">
          <article className="surface p-6">
            <h3 className="text-lg font-semibold">Research Metrics</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-3">
              {researchMetrics.map((metric) => (
                <li key={metric.label} className="rounded-xl border border-slate-700/80 bg-slate-900/50 p-4 light:border-slate-300 light:bg-slate-100/80">
                  <p className="text-xs uppercase tracking-wider text-slate-400 light:text-slate-500">{metric.label}</p>
                  <p className="mt-2 text-base font-semibold text-slate-100 light:text-slate-900">{metric.value}</p>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <article className="surface p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">Selected Publications</h3>
                <fieldset className="flex flex-wrap gap-2" aria-label="Filter research by area">
                  <legend className="sr-only">Research area filter</legend>
                  {researchTags.map((area) => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => setSelectedArea(area)}
                      aria-pressed={selectedArea === area}
                      className={`rounded-full border px-3 py-1.5 text-xs transition ${
                        selectedArea === area
                          ? 'border-cyan-400 bg-cyan-500/15 text-cyan-200 light:text-cyan-800'
                          : 'border-slate-700 text-slate-300 hover:border-cyan-500/60 light:border-slate-300 light:text-slate-700'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </fieldset>
              </div>

              <p className="mt-4 text-sm text-slate-300 light:text-slate-600">Areas: {researchInterests.join(' · ')}</p>

              <div className="mt-5 space-y-4">
                {filteredPapers.map((paper) => (
                  <article key={paper.title} className="rounded-xl border border-slate-700/80 p-5 light:border-slate-300">
                    <p className="text-xs uppercase tracking-wide text-slate-400 light:text-slate-500">{paper.venue}</p>
                    <h4 className="mt-2 font-semibold leading-snug">{paper.title}</h4>
                    <p className="mt-1 text-sm text-slate-400 light:text-slate-600">{paper.authors}</p>

                    <div className="mt-4 rounded-lg border border-slate-700/70 bg-slate-900/60 p-4 text-sm light:border-slate-300 light:bg-slate-100/80">
                      <p className="text-xs uppercase tracking-wide text-slate-400 light:text-slate-500">Citation Preview</p>
                      <p className="mt-2 text-slate-300 light:text-slate-700">
                        {paper.authors} ({paper.venue.split('·').pop()?.trim()}). <em>{paper.title}</em>. DOI: {paper.doi.replace('https://doi.org/', '')}
                      </p>
                    </div>

                    <p className="mt-3 text-sm text-slate-300 light:text-slate-600">{paper.abstract}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                      <a href={paper.doi} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700" target="_blank" rel="noreferrer noopener">
                        DOI Link <ExternalLink className="h-4 w-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setActivePaperPdf(paper.pdf)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-3 py-1.5 transition hover:border-cyan-400 hover:text-cyan-300"
                        aria-label={`Open PDF for ${paper.title}`}
                      >
                        View PDF
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <aside className="surface p-6" aria-label="Academic research timeline">
              <h3 className="text-lg font-semibold">Academic Timeline</h3>
              <ol className="mt-5 space-y-5">
                {researchTimeline.map((entry, index) => (
                  <li key={`${entry.year}-${entry.event}`} className="relative pl-8">
                    <span className="absolute left-1 top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-400" aria-hidden="true" />
                    {index < researchTimeline.length - 1 ? (
                      <span className="absolute left-2.5 top-5 h-[calc(100%+12px)] w-px bg-slate-700 light:bg-slate-300" aria-hidden="true" />
                    ) : null}
                    <p className="text-xs uppercase tracking-wider text-cyan-300 light:text-cyan-700">{entry.year}</p>
                    <p className="mt-1 text-sm text-slate-300 light:text-slate-600">{entry.event}</p>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </SectionWrapper>

      {activePaperPdf ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4" role="dialog" aria-modal="true" aria-label="Research paper PDF viewer">
          <div className="relative h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 light:border-slate-300 light:bg-white">
            <button
              type="button"
              onClick={() => setActivePaperPdf(null)}
              className="absolute right-3 top-3 z-10 rounded-full border border-slate-600 bg-slate-900/90 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 light:bg-white"
              aria-label="Close PDF viewer"
            >
              <X className="h-4 w-4" />
            </button>
            <iframe src={activePaperPdf} title="Research paper preview" className="h-full w-full" loading="lazy" />
          </div>
        </div>
      ) : null}
    </>
  );
}

function CompetitiveProgrammingSection() {
  return (
    <SectionWrapper
      id="competitive-programming"
      title="Competitive Programming"
      subtitle="Algorithmic problem solving to strengthen reasoning, efficiency, and implementation speed."
    >
      <article className="surface p-6">
        <p className="text-slate-300 light:text-slate-600">
          I practice competitive programming to improve data structure fluency, complexity analysis, and disciplined debugging under time constraints. Current focus includes graph
          theory, dynamic programming, and greedy optimization patterns.
        </p>
        <ul className="mt-5 flex flex-wrap gap-3" aria-label="Competitive programming platforms">
          {platforms.map((platform) => (
            <li key={platform} className="rounded-full border border-slate-700 px-3 py-1 text-sm light:border-slate-300">
              {platform}
            </li>
          ))}
        </ul>
      </article>
    </SectionWrapper>
  );
}

/**
 * Contact section handles form submission and status feedback while
 * preserving a fully semantic and keyboard-friendly form structure.
 */
function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>(null);
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
    <SectionWrapper id="contact" title="Contact" subtitle="Let&apos;s connect for research collaboration, internships, and engineering opportunities.">
      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <article className="surface p-6">
          <h3 className="text-lg font-semibold">Reach Out</h3>
          <a href={`mailto:${profile.email}`} className="mt-4 flex items-center gap-2 text-cyan-300 hover:text-cyan-200 light:text-cyan-700">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <div className="mt-4 flex gap-4">
            <a href={profile.linkedin} className="rounded-full border border-slate-700 p-2 hover:border-cyan-400" aria-label="LinkedIn profile" target="_blank" rel="noreferrer noopener">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={profile.github} className="rounded-full border border-slate-700 p-2 hover:border-cyan-400" aria-label="GitHub profile" target="_blank" rel="noreferrer noopener">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </article>

        <form onSubmit={onSubmit} className="surface space-y-4 p-6" noValidate aria-label="Contact form">
          <label className="block text-sm" htmlFor="name">
            Name
          </label>
          <input id="name" required name="name" maxLength={80} autoComplete="name" className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 outline-none focus:border-cyan-400 light:border-slate-300 light:bg-white" />
          <label className="block text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            required
            name="email"
            type="email"
            autoComplete="email"
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
          <button
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
          >
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
  );
}

export function PortfolioShell() {
  return (
    <main className="pb-12">
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-3 focus:py-2 focus:text-slate-950">
        Skip to content
      </a>

      <HeaderNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchSection />
      <CompetitiveProgrammingSection />
      <ContactSection />
    </main>
  );
}
