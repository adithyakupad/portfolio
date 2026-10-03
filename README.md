# Adithya Upadhyayula — design foundation

The active app is an architecture and visual-system scaffold. The previous visual site is preserved on the `archive/pre-foundation` branch; the original pre-redesign site remains on `archive/pre-redesign`.

## Run

```bash
npm install
npm run dev
```

Open `/design-system` in development to preview palette, type, materials, illustrative media, and motion. That route returns 404 in production. The homepage is intentionally minimal until the next design stage.

## Stack and routes

Next.js 16.3.8 App Router, React 19.2.8, strict TypeScript, Tailwind CSS v4, and Framer Motion. npm and `package-lock.json` are the package manager source of truth. Tailwind v4 is configured in `app/globals.css` and `postcss.config.mjs`; it does not need a `tailwind.config` file. Public routes: `/`, `/work`, `/work/[slug]`, `/research`, `/lab`, and `/about`. Earlier `/case-studies/[slug]` and `/projects` links redirect to `/work`.

## Design foundation

- `app/globals.css` is the single source of truth for color, type, layout, glass, and breakpoint tokens. Tailwind v4 reads the same palette through `@theme inline`.
- `components/glass/FrostedPanel.tsx` is the diffuse information material. `LiquidGlass.tsx` is the clearer interactive material with a pointer-responsive highlight.
- `components/motion/` and `lib/motion.ts` hold shared reveal, stagger, parallax, scroll-progress, and timing rules. CSS handles the small illustrative loops. Reduced motion is supported in both systems.
- `data/projects.ts` and `data/research.ts` hold verified content. Optional fields stay empty until there is evidence to fill them.
- `components/visuals/` contains design illustrations only. They are labeled as conceptual and must not be presented as scientific results.
- `public/images/`, `public/projects/`, `public/research/`, and `public/textures/` are ready for approved media. Add an image under `public/` and set `heroMedia: { src, alt }` for a project; the detail route then uses it instead of the illustration.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

No deployment target or domain is configured in this repository. `origin` points to the existing GitHub repository. `next.config.ts` allows `127.0.0.1` only as an additional local development origin.
