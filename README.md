# Soham Patel — Portfolio

Rebuilt from scratch on Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.
Dark/purple/glass design system, resume-sourced content throughout.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. This was written in a sandbox with no network access, so it
could not be `npm install`'d or build-checked here — run it locally first and flag anything
that breaks.

## Deploy

```bash
npm i -g vercel
vercel
```

Or push to a GitHub repo and import it in the Vercel dashboard — same as the current site.

## Before you ship it, fill these in

- **Project links** — `lib/data.ts` → `projects[]`. `githubUrl` / `liveUrl` are left
  `undefined` for VibeForge, RESUmate, CAME Web Platform, and Evolvere because no public
  repo or live URL exists anywhere I could check (not on the resume, not on the current
  site). Cards render without a "Links coming soon" note until you add real ones — no dead
  `#` buttons.
- **`public/resume.pdf`** — this is your actual uploaded resume, already wired to both
  "Download Resume" buttons. Swap the file whenever you update your resume; the filename
  stays `resume.pdf`.
- **LinkedIn** — pulled straight from your resume's link annotations and cross-checked
  against your current live site: `linkedin.com/in/soham-patel23`. Worth a glance to confirm
  it's still current.
- **Email** — using `sohamp2305@gmail.com` (the address printed on your resume). Note: the
  resume PDF's actual mailto *link* was a dead template artifact pointing to `x@gmail.com` —
  I ignored it and used the real address instead.

## What changed vs. the old site

The old site (`project-jyqdl.vercel.app`) still shows a BDR stint at Evolvere, a PythonTA
"Researcher" title, AfterDark Creatives, the trading bot, and an AI Investment Dashboard —
none of which are in your current resume. Per your instructions this rebuild replaces all of
it: Enercare and CAME are new, Evolvere and the UofT research role are reframed to match your
resume's actual bullets, and the project grid is now VibeForge / RESUmate / CAME / Evolvere.
Education now reflects a Statistics minor and a May 2028 graduation, matching the resume.

## Design system

| Token | Value |
|---|---|
| Background | `#08060C` (void) |
| Panel | `#130F1E` |
| Accent | `#9B6BFF` (signal-400) → `#4C2A85` gradient |
| Text | `#F6F4FB` (paper) / `#9C94B3` (mist) |
| Display type | Space Grotesk |
| Body type | Inter |
| Utility/mono type | JetBrains Mono |

Signature element is the hero terminal card — everything else (nav, cards, sections) stays
deliberately quiet glassmorphism so that and the gradient headline are what pop.

## Structure

```
app/            layout, page, global styles
components/     one file per section + shared ui/ primitives
lib/data.ts     all resume content — edit here, not in the components
public/         resume.pdf
```
