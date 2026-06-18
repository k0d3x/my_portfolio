import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Target,
  UserRound,
} from "lucide-react";
import { getProject, projects } from "@/lib/data";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const Icon = project.icon;
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-5xl px-6 pb-16 pt-36 sm:pt-44">
      <Reveal>
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to work
        </Link>
      </Reveal>

      {/* Header */}
      <Reveal delay={0.05}>
        <div className="relative mt-8 overflow-hidden rounded-[2rem] glass p-8 sm:p-12">
          <div
            className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${project.accent} opacity-25 blur-3xl`}
          />
          <span
            className={`grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${project.accent} text-[#04060c]`}
          >
            <Icon size={30} />
          </span>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
            <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 size={13} /> {project.company}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} /> {project.period}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.summary}
          </p>
        </div>
      </Reveal>

      {/* Body */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10">
          <Reveal>
            <section>
              <h2 className="flex items-center gap-2.5 text-xl font-semibold">
                <Target size={20} className="text-accent" /> The problem
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                {project.problem}
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="flex items-center gap-2.5 text-xl font-semibold">
                <UserRound size={20} className="text-accent" /> My role
              </h2>
              <p className="mt-4 leading-relaxed text-muted">{project.role}</p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-xl font-semibold">What I did</h2>
              <ul className="mt-4 space-y-3">
                {project.contributions.map((c) => (
                  <li key={c} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Reveal>
            <div className="glass rounded-3xl p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted">
                <CheckCircle2 size={15} className="text-emerald-400" /> Results
              </h3>
              <ul className="mt-4 space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm leading-relaxed">
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-emerald-400"
                    />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass rounded-3xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Tech stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium ring-1 ring-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Next project */}
      <Reveal>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 rounded-3xl glass p-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Next project
            </p>
            <p className="mt-1 text-lg font-semibold">{next.title}</p>
          </div>
          <ButtonLink href={`/projects/${next.slug}`} variant="outline">
            View next <ArrowRight size={16} />
          </ButtonLink>
        </div>
      </Reveal>
    </article>
  );
}
