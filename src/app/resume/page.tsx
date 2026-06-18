import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import {
  profile,
  experience,
  education,
  skills,
  socials,
} from "@/lib/data";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${profile.name}, ${profile.role}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-16 pt-32 print:pt-6">
      <div className="no-print mb-6 flex items-center justify-between">
        <Link
          href="/#about"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} /> Back
        </Link>
        <PrintButton />
      </div>

      <p className="no-print mb-8 rounded-xl bg-white/[0.03] px-4 py-3 text-xs text-muted ring-1 ring-white/[0.06]">
        Tip: click <span className="font-semibold">Print / Save as PDF</span> and
        choose &quot;Save as PDF&quot;. To use your own file instead, drop it in{" "}
        <code className="text-accent">/public</code> and update{" "}
        <code className="text-accent">resumeHref</code> in{" "}
        <code className="text-accent">src/lib/data.ts</code>.
      </p>

      <article className="glass rounded-3xl p-8 print:rounded-none print:border-0 print:bg-white print:p-0 print:text-black">
        {/* Header */}
        <header className="border-b border-border pb-6 print:border-black/20">
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 font-medium text-accent print:text-black">
            {profile.role} · {profile.tagline}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted print:text-black/70">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={13} /> {profile.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} /> {profile.location}
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent print:text-black">
            Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted print:text-black/80">
            {profile.heroSub}
          </p>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent print:text-black">
            Experience
          </h2>
          <div className="mt-3 space-y-5">
            {experience.map((job, i) => (
              <div key={`${job.company}-${i}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-semibold">
                    {job.role} — {job.company}
                  </h3>
                  <span className="text-xs text-muted print:text-black/60">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted print:text-black/80">
                  {job.description}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted print:text-black/80">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent print:text-black">
            Technical Skills
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted print:text-black/80">
            {skills.join(" · ")}
          </p>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent print:text-black">
            Education
          </h2>
          {education.map((e) => (
            <p key={e.degree} className="mt-2 text-sm">
              <span className="font-semibold">{e.degree}</span> —{" "}
              <span className="text-muted print:text-black/80">
                {e.school}, {e.year}
              </span>
            </p>
          ))}
        </section>

        {/* Links */}
        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent print:text-black">
            Links
          </h2>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted print:text-black/80">
            {socials.map((s) => (
              <span key={s.label}>
                <span className="font-medium text-foreground print:text-black">
                  {s.label}:
                </span>{" "}
                {s.handle}
              </span>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
