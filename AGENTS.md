# AGENTS.md

## Project Context

This is a standalone React/Vite marketing website for OWS. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup and build commands.

## Key Files

- `src/`: frontend application source.
- `src/pages/Home.jsx`: the single page rendered by the site, composed from `src/components/ows/*` sections.
- `vite.config.js`: Vite config.

## Working Notes

- `npm run dev` starts the local dev server; `npm run build` produces the production bundle in `dist/`.
- Run the relevant checks from `package.json` (`lint`, `typecheck`) before finishing code changes.
