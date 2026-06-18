import { MapPin, Mail, Sparkles } from "lucide-react";
import { profile, skillGroups, experience } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            01
          </span>
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
            About me
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        {/* Bio */}
        <Reveal>
          <div>
            <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
              I turn complex problems into{" "}
              <span className="text-accent">resilient systems</span>.
            </h3>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                I&apos;m an accomplished software engineer with{" "}
                {profile.yearsExperience} years of experience designing and
                delivering scalable, high-performance applications across Java,
                Spring Boot, Python and modern microservices architecture.
              </p>
              <p>
                My journey runs from enhancing Android audio frameworks at
                Harman, to transforming a monolithic OTT/IPTV platform into
                microservices at Nagravision, to scaling Walmart&apos;s grocery
                fulfilment to 20 million cases a day — and today, leading the
                migration of an enterprise MDM platform to Apple&apos;s
                Declarative Device Management at Ivanti.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} className="text-accent" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail size={15} className="text-accent" />
                {profile.email}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Capabilities */}
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <StaggerItem
                key={group.title}
                className="glass rounded-2xl p-5 transition-colors hover:border-accent/30"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                  <Icon size={18} />
                </span>
                <h4 className="mt-3 text-sm font-semibold">{group.title}</h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-muted ring-1 ring-white/[0.06]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>

      {/* Career timeline */}
      <Reveal>
        <h3 className="mt-20 text-lg font-semibold uppercase tracking-widest text-muted">
          Career timeline
        </h3>
      </Reveal>

      <div className="mt-8 space-y-3">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.03}>
            <div className="group grid gap-3 rounded-2xl glass p-5 transition-colors hover:border-accent/30 sm:grid-cols-[200px_1fr] sm:items-start sm:gap-6 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-accent">{job.period}</p>
                <p className="mt-1 font-semibold">{job.company}</p>
                <p className="text-xs text-muted">{job.location}</p>
              </div>
              <div>
                <h4 className="font-semibold">{job.role}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {job.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {job.highlights.slice(0, 2).map((h) => (
                    <li
                      key={h}
                      className="inline-flex items-center gap-1.5 text-xs text-muted"
                    >
                      <Sparkles size={12} className="text-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
