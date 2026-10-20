![screenshot of cv.jarocki.me, a CV built with this template](.github/screenshot.png)

<h1>minimalist cv <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBartoszJarocki%2Fcv"><img src="https://vercel.com/button" alt="Deploy with Vercel" height="24" align="right"></a></h1>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

simple web app that renders a minimalist CV with print-friendly layout.

## requirements

- node 22.15 or later. `pnpm verify` refuses to run on older versions.
- pnpm

## getting started

```bash
git clone https://github.com/BartoszJarocki/cv.git
cd cv
pnpm install
pnpm dev
# open http://localhost:3000
# edit src/data/resume-data.ts to customize
```

## scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production
pnpm start        # start production server
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run both linting and formatting checks
pnpm check:fix    # run both linting and formatting with auto-fix
pnpm verify       # check the page that pnpm build prerendered
```

## project structure

```
scripts/
└── verify.mjs          # checks run by pnpm verify
src/
├── app/                # next.js app router
│   ├── components/     # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── apple-icon.png  # home screen icon
│   ├── favicon.ico     # browser tab icon
│   ├── globals.css     # color palette and base styles
│   ├── layout.tsx      # root layout with metadata
│   ├── opengraph-image.tsx
│   ├── page.tsx        # main resume page
│   ├── robots.ts
│   └── sitemap.ts
├── components/         # shared components
│   ├── icons/          # social icon components
│   ├── ui/             # presentational components
│   ├── command-menu-dialog.tsx
│   └── command-menu.tsx
├── data/               # resume data configuration
│   ├── avatar.jpg      # your photo
│   └── resume-data.ts
└── lib/                # utilities and types
    ├── resume.ts
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## customization

all resume content lives in a single file:

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  location: "Your City, Country",
  siteUrl: "https://cv.example.com", // where this CV is deployed
  about: "One line under your name", // also the meta description and share image text
  summary: "A paragraph for the About section",
  // ... more fields
}

export const SECTION_TITLES = {
  summary: "About",
  work: "Work Experience",
  // ... education, skills, projects
}
```

`SECTION_TITLES`, in the same file, holds the section headings. to rename or translate a section, change its heading there. the page skips any section whose data is empty, such as `projects: []`.

replace `src/data/avatar.jpg` with your own square photo, a jpeg or a png. to use another file name, put the file directly in `src/data` and change the avatar import in `src/data/resume-data.ts`.

styling uses tailwind css. the palette is six oklch color roles in `src/app/globals.css`, one set for light and one for dark. `tailwind.config.js` maps the tailwind color names onto those roles. `src/app/opengraph-image.tsx` and the `themeColor` list in `src/app/layout.tsx` set their own hex colors, so a palette change in `globals.css` does not reach the share image or the browser theme color.

## license

MIT
