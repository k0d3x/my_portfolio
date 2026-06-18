import type { NextConfig } from "next";

// When deploying to GitHub Pages under https://<user>.github.io/<repo>/,
// the site is served from a sub-path. The deploy workflow sets
// NEXT_PUBLIC_BASE_PATH to "/<repo>" automatically. Locally it stays "".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Produce a fully static site in ./out that GitHub Pages can serve.
  output: "export",
  // GitHub Pages has no image optimization server.
  images: { unoptimized: true },
  // Serve correctly from a project sub-path (ignored when empty).
  basePath,
  // Emit folder-style URLs (/about/ -> about/index.html) for static hosts.
  trailingSlash: true,
};

export default nextConfig;
