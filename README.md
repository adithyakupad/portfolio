# Adithya Upadhyayula — Biology × Machines

Personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and custom CSS/SVG motion. The original pre-redesign site is preserved in the `archive/pre-redesign` Git branch.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Verify a production build with `npm run build` and static checks with `npm run lint`.

## Structure

- `app/page.tsx`: narrative homepage
- `app/work/page.tsx`: work index
- `app/work/[slug]/page.tsx`: data-driven project case study template
- `app/research/page.tsx`, `app/lab/page.tsx`, `app/about/page.tsx`: supporting routes
- `lib/projects.ts`: project content, sections, status, and optional media
- `components/Visuals.tsx`: illustrative SVG visuals; these are not measured scientific data
- `components/ProjectMedia.tsx`: chooses real project media when supplied, otherwise the domain illustration
- `components/SiteNav.tsx`: adaptive liquid-glass navigation
- `app/globals.css`: design tokens, layouts, frosted information material, liquid control material, and motion choreography

## Replacing illustrative media

Place approved project images under `public/`, then add `heroMedia: { src: "/filename.jpg", alt: "..." }` to that entry in `lib/projects.ts`. The work index, homepage, and case study will switch to the image together. The cardiovascular visual in `components/Visuals.tsx` is explicitly conceptual and can be replaced in the research page when publishable media is available. The current portrait is in `public/portrait.jpg`.

The animations are CSS based, use transforms and opacity where practical, and honor `prefers-reduced-motion`. Scroll-linked effects degrade to static layouts in browsers without scroll timelines.
