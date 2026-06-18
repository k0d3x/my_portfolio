import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:opacity-50";

const sizes = "px-6 py-3";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-3 via-accent to-accent-2 text-[#04060c] shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5",
  outline:
    "glass text-foreground hover:border-accent/40 hover:-translate-y-0.5",
  ghost:
    "text-muted hover:text-foreground",
};

type ButtonLinkProps = LinkProps & {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  /** When set, the browser downloads the linked file instead of navigating. */
  download?: boolean | string;
};

export function ButtonLink({
  children,
  variant = "primary",
  className,
  external,
  download,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      {...(download ? { download } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, sizes, variants[variant], className)}
    >
      {children}
    </Link>
  );
}
