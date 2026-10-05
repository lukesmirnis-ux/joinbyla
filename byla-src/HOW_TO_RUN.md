# BYLA Website — Source Code

Dark navy single-page site for the Business Youth Leadership Association,
built with TanStack Start (React 19), Tailwind CSS v4, and Vite 7.

## Main files
- `src/routes/index.tsx` — the whole page: hero, About, Format (4 stages), Scoring rubric, Rules, Leadership roles, Partner tiers, footer CTA. Logo in header and hero.
- `src/routes/__root.tsx` — HTML head: title, description, social tags, Google Fonts (Fraunces + IBM Plex Sans), favicon.
- `src/styles.css` — design tokens (dark navy palette) and the `.dossier` / `.glass` surface styles and animations.
- `src/assets/byla-logo.jpg` — your logo (also used for `public/favicon.png`).
- `src/components/ui/*` — pre-built UI components (only some are used).

## Run locally
1. Install [Bun](https://bun.sh) (or use npm/pnpm).
2. `bun install`
3. `bun run dev` — opens at http://localhost:5173
4. `bun run build` for a production build.

## Notes
- The contact email (hello@byla.org) and the key dates (TBD) are placeholders — replace them in `src/routes/index.tsx`.
- `src/routeTree.gen.ts` is generated automatically; do not edit it by hand.
