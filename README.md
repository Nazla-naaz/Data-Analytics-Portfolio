# Nazla K — Data Analyst Portfolio

A dark-mode, dashboard-style Data Analyst portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Edit your content
Everything on the site — name, bio, projects, framework steps, certifications, books, tools, links — lives in **`config.ts`** in the project root. Edit that one file and every page updates automatically. You don't need to touch any component or page file to update your content.

Look for `// TODO:` comments in `config.ts` — that's where you drop in your real GitHub URL, LinkedIn URL, and email.

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel
1. Push this folder to a GitHub repo (e.g. your `Data-Analytics-Portfolio` repo).
2. Go to https://vercel.com/new, import the repo, keep the defaults (Framework Preset: Next.js) and click **Deploy**.
3. Every push to `main` auto-deploys.

## Add your resume PDF
Drop a file named `resume.pdf` into the `public/` folder — the Resume and For Recruiters pages already link to `/resume.pdf`.

## Project structure
```
app/
  page.tsx                 Home
  work/page.tsx             Work / Observatory (project list)
  work/[slug]/page.tsx       Individual case study
  framework/page.tsx         10-step Analytics Framework
  certifications/page.tsx    Certifications
  library/page.tsx           Library / Books
  about/page.tsx              About Me
  resume/page.tsx             Resume
  contact/page.tsx            Contact
  for-recruiters/page.tsx     For Recruiters
components/                  Sidebar, MobileNav, cards, dashboard mock
config.ts                     ALL editable content
```
