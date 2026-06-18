import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { assetPath } from "@/lib/utils";

const socialIcon = (label: string) => {
  switch (label) {
    case "GitHub":
      return GithubIcon;
    case "LinkedIn":
      return LinkedinIcon;
    default:
      return Mail;
  }
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl scroll-mt-24 items-center px-6 pb-16 pt-32 sm:pt-36"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 text-lg font-medium text-muted">
              Hello, I&apos;m {profile.firstName} 👋
            </p>
            <h1 className="mt-2 text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              <span className="block">Senior</span>
              <span className="block text-gradient">Software</span>
              <span className="block">Engineer</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {profile.heroSub}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#work">
                View my work <ArrowRight size={18} />
              </ButtonLink>
              <ButtonLink
                href={profile.resumeHref}
                variant="outline"
                download="Ameer_Ali_Khan.pdf"
              >
                <Download size={16} /> Résumé
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                Follow
              </span>
              <div className="h-px w-8 bg-border" />
              <div className="flex gap-2">
                {socials.map((s) => {
                  const Icon = socialIcon(s.label);
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-xl glass text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right — framed portrait */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-square w-[78%] max-w-md sm:w-[60%] lg:w-full">
            {/* glow */}
            <div className="absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-accent/25 blur-3xl" />
            {/* rotating dashed rings */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/30" />
            <div className="absolute inset-[8%] animate-spin-reverse rounded-full border border-accent/15" />
            {/* orbiting dot */}
            <div className="absolute inset-0 animate-spin-slow">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_20px_4px] shadow-accent/50" />
            </div>

            {/* portrait */}
            <div className="absolute inset-[12%] overflow-hidden rounded-full ring-1 ring-white/10">
              <Image
                src={assetPath(profile.photo)}
                alt={`Portrait of ${profile.name}`}
                width={720}
                height={720}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating stat chip */}
            <div className="absolute -bottom-2 -left-2 flex items-center gap-2 rounded-2xl glass px-4 py-3 sm:-left-6">
              <span className="text-2xl font-black text-accent">
                {profile.yearsExperience}
              </span>
              <span className="text-[11px] leading-tight text-muted">
                years
                <br />
                experience
              </span>
            </div>

            {/* floating role chip */}
            <div className="absolute -right-2 top-6 hidden items-center gap-2 rounded-2xl glass px-4 py-2.5 sm:flex">
              <ArrowUpRight size={16} className="text-accent" />
              <span className="text-xs font-medium">{profile.tagline}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
