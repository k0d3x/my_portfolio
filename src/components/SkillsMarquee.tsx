import { skills } from "@/lib/data";

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...skills, ...skills];
  return (
    <div className="flex w-max">
      <ul
        className={`flex shrink-0 items-center gap-3 pr-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((skill, i) => (
          <li
            key={`${skill}-${i}`}
            className="glass rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap text-foreground/90"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Rotating, infinitely-scrolling marquee of skills (two rows, opposite directions).
 */
export function SkillsMarquee() {
  return (
    <div
      className="relative flex w-full max-w-full flex-col gap-3 overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <Row />
      <Row reverse />
    </div>
  );
}
