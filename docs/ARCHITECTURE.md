# Pro Legal source organization

This project follows the **structure and modular separation** from the supplied Textonext repository tree, **not** its source code or infrastructure.

- `frontend/` — all runnable application source and Next.js config.
- `frontend/src/app/` — Next.js App Router; `(marketing)` groups route files without changing public URLs.
- `frontend/src/components/` — shared layout and branding components.
- `frontend/src/modules/home/components/` — the nine original homepage sections.
- `frontend/src/modules/services/components/` — search and consultation form.
- `frontend/src/lib/` — unchanged service list and informational page definitions.
- `frontend/public/` — assets location for future use.
- `backend/` — reserved for an eventual backend; contains no implementation.
- `docs/` — documentation only.

## Invariants

1. The existing design tokens and entire `globals.css` file are unchanged.
2. All original UI component bodies are unchanged except for import paths that had to be updated after moving feature components.
3. URLs remain `/`, `/services/[slug]`, `/categories/[id]`, `/consultation` and `/info/[slug]`.
4. There is no server-side form processing, database, login or payments.
5. Run `npm install` and `npm run dev` from **the ZIP's top-level folder**, the one that contains the root `package.json`.

## Changes compared with the previous ZIP

- Moved Next.js and component files under `frontend/src` following Textonext's conventions.
- Introduced a route group for marketing pages: Next.js route group names do not appear in URLs.
- Updated TypeScript `@/` alias to `./src/*`.
- Updated only necessary component import paths.
- Added npm workspaces scripts at the top level so beginners do not encounter a missing `package.json`.
