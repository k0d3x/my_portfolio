import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes while resolving conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a /public asset path with the configured base path so it resolves
 * correctly when the site is hosted under a sub-path (e.g. GitHub Pages
 * project sites: /my_portfolio). next/image with `unoptimized` does not add
 * the base path automatically, so use this for raw image/asset src values.
 */
export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
