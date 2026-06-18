# Ameer Ali Khan — Portfolio

A premium, responsive, single-page portfolio for **Ameer Ali Khan**, Senior
Software Engineer. Built with **Next.js (App Router)**, **TypeScript**,
**Tailwind CSS v4** and **Motion**, featuring a bold dark theme and subtle
micro-animations.

## Sections

- **Home** — hero with framed portrait, value proposition and a rotating skills marquee
- **About** — bio, capabilities and a career timeline
- **Work** — filterable project gallery with detail pages (`/projects/[slug]`)
- **Contact** — contact form (name, email, project type, budget) and social links

## Editing content

**Everything is driven by one file:** `src/lib/data.ts`. Update your name, bio,
skills, projects, experience, social links and contact options there and the
whole site updates automatically.

### Your résumé PDF

The **Résumé** button downloads `public/Ameer_Ali_Khan.pdf` directly. Replace
that file to update it (and adjust `resumeHref` in `src/lib/data.ts` if you
rename it).

### Your photo

The hero portrait is `src/assets/portrait.png`, statically imported in
`src/components/sections/HeroSection.tsx` (so it gets the correct base path on
GitHub Pages automatically).

## Develop

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # static export to ./out
```

## Deploy (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it. In the repo, set **Settings → Pages → Source:
GitHub Actions**.

## Tech

- Next.js 16 · React 19 · TypeScript
- Tailwind CSS v4
- Motion for animations
- lucide-react for icons
