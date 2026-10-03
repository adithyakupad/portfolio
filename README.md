# Adithya Upadhyayula — portfolio

A personal site about work at the interface of biology and machines.

## Stack

Next.js App Router, TypeScript, Tailwind CSS 4, and bespoke CSS/SVG visuals. The site does not require a motion or graphics library.

## Develop

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Before shipping, run `npm run lint` and `npm run build`.

## Content

- `lib/projects.ts` is the central source for selected projects and their optional case-study sections. Missing results, evidence, and links are omitted until real material is available.
- `lib/site.ts` contains identity, social links, and About-page recognition.
- `components/Visuals.tsx` contains original illustrative artwork. The research visual is explicitly marked as conceptual, not patient data.
- `public/portrait.jpg` is the portrait preserved from the previous site.
- `app/projects/[slug]/page.tsx` renders the project case studies.
- `app/research/page.tsx` holds the research narrative.

The previous version, including its résumé, remains on `archive/pre-redesign`.

## Deployment

The GitHub repository lists a Vercel URL, but no deployment connection or custom domain is configured in this codebase. Verify hosting settings in the relevant account before publishing.
