# Adithya Upadhyayula — portfolio

The live portfolio at `/` is ported from commit `358d046` on `archive/pre-foundation`. The foundation commit `9350002` remains in Git history, and the original pre-redesign site remains on `archive/pre-redesign`.

## Run

```bash
npm install
npm run dev
```

The app uses Next.js 16.3.8 App Router, React 19.2.8, strict TypeScript, Tailwind CSS v4, and Framer Motion. npm and `package-lock.json` are the package manager source of truth.

## Structure

- `app/page.tsx` is the recovered homepage: sunset hero, interactive topographic interests field, About, cardiovascular research, and animated project corridor.
- `app/globals.css` includes the foundation's design tokens and the archived site's visual rules. Foundation color tokens remain on `:root`; the recovered dusk palette is scoped to `body`, while `/design-system` uses the foundation palette.
- `components/` includes recovered navigation, glass effects, motion choreography, interactive media, diagrams, and project transitions. `components/glass/` and `components/motion/` retain the foundation's reusable materials and motion utilities.
- `data/projects.ts` and `data/research.ts` are the source of truth for verified project and research facts. `lib/projects.ts` adapts that data to the recovered project presentation without duplicating records.
- `app/work/[slug]/page.tsx` uses the recovered case-study composition. `/work` presents the project corridor; `/research` presents the recovered research composition. `/about` and `/lab` redirect to the corresponding homepage sections, as in the archived single-page design. Earlier `/case-studies/[slug]` and `/projects` URLs redirect to the current work routes.
- `public/dusk-horizon.jpg` is the exact asset from the archived build. The SVG project and research visuals are illustrative, not scientific data.
- `/design-system` remains a development-only utility and returns 404 in production.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

No deployment target or domain is configured in the repository. `next.config.ts` only adds `127.0.0.1` as a local development origin.
