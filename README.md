# Nelson Fernandez — Personal Developer Portfolio

A responsive, modern personal developer portfolio website built with **Next.js (App Router)**, **TypeScript**, **React**, **Tailwind CSS**, and **Lucide React**.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Package Manager:** pnpm

## Getting Started Locally

```bash
cd nelson-portfolio
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `pnpm dev` — Start the local development server
- `pnpm build` — Create an optimized production build
- `pnpm start` — Run the compiled production server
- `pnpm lint` — Run ESLint checks
- `pnpm typecheck` — Run TypeScript compiler checks (`tsc --noEmit`)

## Adding Your Final Resume PDF

Place your final PDF resume inside `public/files/` named:

```text
public/files/Nelson-Fernandez-Resume.pdf
```

Once placed there, the **Download My Resume** buttons on the website will serve and download your PDF directly.
