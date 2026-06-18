import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SkillsMarquee } from "@/components/SkillsMarquee";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="border-y border-border py-6">
        <p className="mb-4 px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Tools &amp; technologies I work with
        </p>
        <SkillsMarquee />
      </section>

      <AboutSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
