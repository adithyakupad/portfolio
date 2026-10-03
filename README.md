# Adithya Upadhyayula — Biology × Machines

Personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and custom CSS/SVG motion. The original pre-redesign site is preserved in the `archive/pre-redesign` Git branch.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Verify a production build with `npm run build` and static checks with `npm run lint`.

## Structure

- `app/page.tsx`: short sunset homepage and responsive waveform interests field
- `app/projects/page.tsx`: project and experiment index
- `app/research/page.tsx`: cardiovascular research page
- `app/about/page.tsx`: background and contact
- `app/case-studies/[slug]/page.tsx`: data-driven project case study template
- `app/work/page.tsx`, `app/work/[slug]/page.tsx`, `app/projects/[slug]/page.tsx`, `app/lab/page.tsx`: redirects for old links
- `lib/projects.ts`: project content, sections, status, and optional media
- `components/Visuals.tsx`: illustrative SVG visuals, not measured scientific data
- `components/ProjectMedia.tsx`: chooses real project media when supplied, otherwise a domain illustration
- `components/WaveField.tsx`: canvas line field across the interests section that responds to pointer movement
- `components/SiteNav.tsx`: adaptive liquid-glass navigation
- `app/globals.css`: design tokens, layouts, materials, and motion

## Replacing illustrative media

Place approved project images under `public/`, then add `heroMedia: { src: "/filename.jpg", alt: "..." }` to that entry in `lib/projects.ts`. Project case studies will use the image. The cardiovascular visual in `components/Visuals.tsx` is explicitly conceptual and can be replaced in the research page when publishable media is available. The current portrait is in `public/portrait.jpg`.

The opening uses an original generated dusk horizon in `public/dusk-horizon.jpg`, made from the user-supplied album cover as a color and horizon reference. The cover itself is not shipped. The line field uses a lightweight canvas renderer with reduced frame rates on mobile and honors `prefers-reduced-motion`.
