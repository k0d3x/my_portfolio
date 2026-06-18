import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

const iconFor = (label: string) => {
  switch (label) {
    case "GitHub":
      return GithubIcon;
    case "LinkedIn":
      return LinkedinIcon;
    default:
      return Mail;
  }
};

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            03
          </span>
          <span className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
            Let&apos;s talk
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <h3 className="mt-10 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
          Have a challenging problem?{" "}
          <span className="text-gradient">Let&apos;s build it together.</span>
        </h3>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Reach me directly
              </h4>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center gap-3 text-sm transition-colors hover:text-accent"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                      <Mail size={17} />
                    </span>
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 text-sm transition-colors hover:text-accent"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                      <Phone size={17} />
                    </span>
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <MapPin size={17} />
                  </span>
                  {profile.location}
                </li>
              </ul>
            </div>

            <div className="glass rounded-3xl p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Find me online
              </h4>
              <ul className="mt-5 space-y-3">
                {socials.map((s) => {
                  const Icon = iconFor(s.label);
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl bg-white/[0.02] px-4 py-3 ring-1 ring-white/[0.06] transition hover:bg-white/[0.05]"
                      >
                        <span className="flex items-center gap-3 text-sm">
                          <Icon size={16} className="text-accent" />
                          <span className="font-medium">{s.label}</span>
                          <span className="text-muted">{s.handle}</span>
                        </span>
                        <ArrowUpRight
                          size={15}
                          className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
