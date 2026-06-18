import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Reveal } from "@/components/ui/Reveal";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            02
          </span>
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
            Selected work
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-2xl text-muted">
          Platforms and systems I&apos;ve architected and shipped. Filter by
          category to explore the work that matters to you.
        </p>
      </Reveal>

      <div className="mt-10">
        <ProjectsGrid />
      </div>
    </section>
  );
}
