# sameer-cv

## What this repo contains

- `src/routes/__root.tsx` — root route shell and application layout.
- `src/routes/index.tsx` — the main index page served at `/`.
- `src/server.ts` — Netlify-compatible SSR wrapper.
- `src/start.ts` — TanStack Start request and error middleware.
- `vite.config.ts` — Vite config with Netlify Nitro preset.
- `netlify.toml` — Netlify build settings for GitHub deploy.

## Netlify GitHub deployment setup

### GitHub repo structure
- This repository root is the project root.
- Do not set a Netlify base directory when the repository root is this folder.

### Netlify site settings
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `.netlify/functions-internal`
- Base directory: leave blank

### Netlify build environment
- Add build environment variable:
  - `NODE_VERSION` = `20`

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Notes

- The deployed index page is defined in `src/routes/index.tsx`.
- The top-level app shell and metadata are defined in `src/routes/__root.tsx`.
- This app uses TanStack Start SSR on Netlify via Nitro.

## Ready state

- `vite.config.ts` is Netlify-ready with `nitro: { preset: "netlify" }`.
- `netlify.toml` is configured to publish `dist` and use `.netlify/functions-internal`.
- Unused dependencies `@tanstack/router-plugin`, `@hookform/resolvers`, and `date-fns` were removed from `package.json`.
