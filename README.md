# Pro Legal — modular Next.js project

**Same Pro Legal landing page, colors, components, service data, and frontend behavior** as the previous ZIP, reorganized into a structure similar to the provided Textonext tree. All original design styles are kept.

## Quick start (Windows PowerShell)

**Open the extracted folder that directly contains `package.json`**.

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

These commands work from the **root folder**. You can also run `cd frontend; npm run dev` after installing dependencies at the root.

### Build check

```powershell
npm run lint
npm run build
```

## Layout

```text
Pro_Legal_Structured/
├── package.json              # Root npm workspace; npm commands work here
├── frontend/
│   ├── package.json          # Actual Next.js application
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   ├── public/
│   └── src/
│       ├── app/
│       │   ├── (marketing)/
│       │   │   ├── page.tsx
│       │   │   ├── consultation/page.tsx
│       │   │   ├── services/[slug]/page.tsx
│       │   │   ├── categories/[id]/page.tsx
│       │   │   └── info/[slug]/page.tsx
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── not-found.tsx
│       ├── components/
│       │   ├── layout/       # Header, Footer
│       │   └── ui/           # Brand
│       ├── modules/
│       │   ├── home/components/
│       │   └── services/components/
│       └── lib/               # Service data and static page definitions
├── backend/                  # Reserved, not implemented
└── docs/                     # Folder tree and architecture notes
```

## What's unchanged

- The exact original stylesheet and palette: `#C83D4D`, `#A92E40`, `#FFF3F4`, `#FFFFFF`, `#20232B`
- Hero, navigation/mega menus, services discovery, testimonials, FAQ, CTAs and consultation demo
- Search behavior, service catalogue, responsive rules and visible copy
- All public URLs and dynamic placeholder service routes

## Scope

The code remains **frontend-only**. There is no login, database, backend/API, or real consultation submission. `backend/` is reserved for later development and must not be treated as a working API.

See `docs/ARCHITECTURE.md` and `docs/FOLDER_TREE.txt`.
