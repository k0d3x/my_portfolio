import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
    >
      {/* gradient glow */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40`}
      />

      <div className="flex items-start justify-between">
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${project.accent} text-[#04060c]`}
        >
          <Icon size={22} />
        </span>
        <ArrowUpRight
          size={20}
          className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted">
        <span className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
          {project.category}
        </span>
        <span>{project.period}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{project.company}</p>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-white/[0.03] px-2 py-1 text-[11px] font-medium text-muted ring-1 ring-white/[0.06]"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="rounded-md px-2 py-1 text-[11px] font-medium text-muted">
            +{project.stack.length - 4}
          </span>
        )}
      </div>
    </Link>
  );
}
