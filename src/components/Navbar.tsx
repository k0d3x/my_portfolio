"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <nav
        className={cn(
          "mx-4 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:mx-auto sm:max-w-5xl",
          scrolled ? "glass shadow-lg shadow-black/40" : "bg-transparent"
        )}
        aria-label="Primary"
      >
        <a href="/#home" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-sm font-black text-[#0a0a0c]">
            AK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-accent"
                    : "text-muted hover:text-foreground"
                )}
              >
                {active === link.id && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-accent/10 ring-1 ring-accent/20" />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonLink href="/#contact" className="px-5 py-2.5">
            Let&apos;s talk
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl glass md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 overflow-hidden rounded-2xl glass p-2 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    active === link.id
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-2 py-2">
              <ButtonLink href="/#contact" className="w-full">
                Let&apos;s talk
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
