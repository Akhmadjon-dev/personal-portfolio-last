# Portfolio Rebuild — Full Plan

Detailed plan for the Astro rebuild of ahmadjon.dev. Use this to resume work from any machine.

---

## TL;DR

We're replacing a 2015-era jQuery template with a modern Astro site. Same repo. The legacy site keeps serving on Vercel from the repo root **until we swap**. The new site is being built inside `astro-site/` in complete isolation. Zero risk to the live site during development.

**Goal:** a portfolio that is (1) fast (Lighthouse 95+), (2) stands out to both technical and non-technical visitors, (3) also hosts two personal tools — Mon Français and DevPrep — as featured projects at `/french` and `/interview`.

---

## Decisions locked in

| Decision | Choice |
|---|---|
| Hosting | Vercel (static) |
| Backend | None. Formspree for contact form. |
| Framework | Astro 6 + React 19 islands (for interactivity) |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Languages | EN (default, `/`), RU (`/ru/`), UZ (`/uz/`) — everywhere |
| Design direction | **B + A** — product-landing-page structure (hero, what-I-do, featured projects, about, contact) with warm Josh-Comeau-like details (soft gradients, friendly micro-animations, personal photo) |
| Fonts | Instrument Serif (display) + Inter (body) + system mono |
| Palette | Warm: paper `#FAFAF7`, ink `#1A1A1A`, coral accent `#F47858`, amber `#FBB040` |
| Dark mode | Yes, `.dark` class on `<html>`, toggle in nav |
| Tools routing | **Option 3** — French + Interview appear as featured project cards linking to `/french` and `/interview` |
| CV | Keep `cv.pdf` at `/public/cv.pdf`. Also build a web version at `/cv`. |
| Animation | Framer Motion, scoped to hero scroll reveal only. `prefers-reduced-motion` respected. |

---

## Current state (Phase 0 — DONE)

Scaffolded `astro-site/` with:

```
astro-site/
├── astro.config.mjs          # site, output, i18n, React, Tailwind Vite plugin
├── vercel.json               # cleanUrls, no trailing slash
├── tsconfig.json             # astro/strict
├── package.json              # astro 6.1.9, react 19, tailwind 4
├── public/
│   ├── favicon.ico
│   └── favicon.svg
└── src/
    ├── layouts/
    │   └── Layout.astro      # <html>, head, nav, main, footer, theme init
    ├── components/
    │   ├── shared/
    │   │   ├── Nav.astro
    │   │   ├── Footer.astro
    │   │   ├── LangSwitcher.astro
    │   │   └── ThemeToggle.astro
    │   └── portfolio/
    │       ├── Home.astro          # hero + what-i-do + tools + about + contact placeholder
    │       └── Placeholder.astro   # "Coming soon" block used by /cv, /french, /interview
    ├── i18n/
    │   ├── en.json
    │   ├── ru.json
    │   ├── uz.json
    │   └── utils.ts          # getDict, localizePath, stripLocale, getLocaleFromUrl
    ├── styles/
    │   └── global.css        # Tailwind import + @theme tokens + dark variant
    └── pages/
        ├── index.astro             # EN /
        ├── cv.astro                # EN /cv
        ├── french/index.astro      # EN /french
        ├── interview/index.astro   # EN /interview
        ├── ru/
        │   ├── index.astro
        │   ├── cv.astro
        │   ├── french/index.astro
        │   └── interview/index.astro
        └── uz/
            ├── index.astro
            ├── cv.astro
            ├── french/index.astro
            └── interview/index.astro
```

Build verified: 12 pages, ~208 KB total CSS/JS, no errors.

---

## How to resume work on any machine

```bash
git clone <repo-url>
cd personal-portfolio-last/astro-site
npm install
npm run dev          # http://localhost:4321
npm run build        # produces dist/
npm run preview      # serves dist/ locally
```

Node ≥ 22.12.0 required.

---

## Phase 1 — Portfolio (NEXT)

Goal: replace the Home placeholder with the real B+A design and ship to a Vercel preview URL.

### 1.1 Inputs still needed from user

- [ ] **Professional photo** (any of: headshot, product shot, at-desk photo). Drop into `astro-site/src/assets/photos/ahmadjon.jpg`. Ideal: 1200×1600 portrait, color-corrected.
- [ ] **Formspree form ID** — sign up at [formspree.io](https://formspree.io), create a form, paste the ID. Or pick an alternative (Resend + Vercel function, EmailJS, Web3Forms).
- [ ] **Social URLs** — confirm GitHub / LinkedIn / Telegram / Twitter handles to wire real links in `Footer.astro` (currently placeholder `#`).
- [ ] **Custom domain** — is `ahmadjon.dev` the intended domain? Update `site` in `astro.config.mjs` if different.
- [ ] **Testimonials** — skip the section entirely, or provide 1–3 quotes from past clients/colleagues.

### 1.2 Port real content from legacy `js/i18n.js`

Legacy translations live in `../js/i18n.js` as a big JS object. Port the useful keys into the three `src/i18n/*.json` dictionaries. Don't port verbatim — refine copy for the new design. In particular:

- Hero subline — rewrite punchier
- "What I do" (Services) — keep 3 cards max, each under 14 words
- About — one paragraph, not three
- Skills chips — flatten into a clean array

### 1.3 Project data as a content collection

Create `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    tagline: z.record(z.string()),       // { en, ru, uz }
    outcome: z.record(z.string()),
    tech: z.array(z.string()),
    image: z.string(),                    // relative to src/assets
    link: z.string().optional(),
    repo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
```

Create JSON entries under `src/content/projects/`:
- `winechain.json` — WineChain project
- `ai-lean.json` — AI-Lean
- `property.json` — Property platform
- `lingua.json` — Lingua app
- `mon-francais.json` — Mon Français → links to `/french`
- `devprep.json` — DevPrep → links to `/interview`

Pull images from legacy `../images/` (winechain.png, ai-lean.png, property.png, lingua.png) into `src/assets/projects/` **as WebP** (run through `sharp` or `cwebp` first; see 1.6).

### 1.4 Build real sections

Replace `components/portfolio/Home.astro` with real components:

```
components/portfolio/
├── Hero.astro              # photo + headline + CTAs + scroll cue + one FM reveal
├── WhatIDo.astro           # 3 icon cards
├── FeaturedProjects.astro  # reads collection, renders grid of ProjectCard
├── ProjectCard.astro       # image, problem, result, tech chips
├── About.astro             # photo (smaller) + bio + timeline/skills
├── TrustedBy.astro         # optional logo strip (skip if nothing)
├── ContactForm.tsx         # React island, Formspree POST, validation, success state
└── Footer.astro            # (already built, may need real social links)
```

### 1.5 Build `/cv` web page

Same info as `cv.pdf` but HTML:
- Header: name, role, contact
- Experience (roles with dates, bullets of outcomes)
- Education
- Skills grid
- "Download PDF" link
- Print-friendly CSS (@media print)

Three variants — `src/pages/cv.astro`, `src/pages/ru/cv.astro`, `src/pages/uz/cv.astro`. Share a `src/components/portfolio/Cv.astro` component.

### 1.6 Image pipeline

Astro has built-in `<Image />` (astro:assets). For each hero/project image:

```astro
---
import { Image } from 'astro:assets';
import winechain from '../assets/projects/winechain.webp';
---
<Image src={winechain} alt="WineChain dashboard" width={800} height={500} loading="lazy" />
```

Astro auto-generates responsive `srcset`, lazy-loads, and outputs WebP/AVIF.

Before adding images, run legacy PNGs through compression:
```bash
# macOS with cwebp installed via brew install webp
cwebp -q 80 ../images/winechain.png -o src/assets/projects/winechain.webp
```
Or use `sharp` via a one-off Node script. Target: every project image under 150 KB.

### 1.7 Contact form (Formspree)

Create `components/portfolio/ContactForm.tsx`:

```tsx
import { useState } from 'react';

export default function ContactForm({ formId, labels }: Props) {
  const [state, setState] = useState<'idle'|'sending'|'ok'|'err'>('idle');
  // POST to https://formspree.io/f/{formId}
  // Render success state inline, not redirect
}
```

Mount as a React island in `ContactSection.astro` with `client:visible`.

### 1.8 Polish before swap

- [ ] Favicon set (generate from initials or logo with realfavicongenerator.net)
- [ ] OG images per page (1200×630) — generate with Satori or Figma export
- [ ] `sitemap.xml` — add `@astrojs/sitemap` integration
- [ ] `robots.txt` in `public/`
- [ ] `404.astro` — branded, with link back home
- [ ] Lighthouse pass in prod preview — fix anything under 95 in Perf/A11y/Best Practices/SEO
- [ ] Mobile QA — 360px width, 414px, 768px

### 1.9 Swap to main (end of Phase 1)

**Pre-swap safety:**
```bash
git checkout main
git branch legacy                       # preserves current live site forever
git push origin legacy
```

**Swap (chosen approach: move Astro to root):**
```bash
# From repo root
mv astro-site/* .
mv astro-site/.gitignore .              # overwrite if needed, merge if needed
mv astro-site/.vscode .                 # optional
rmdir astro-site

# Delete legacy
rm -rf 404.html light-index.html contact.php config.json \
       googleed3964f777817833.html assets css js images \
       french-app interview index.html
# Keep cv.pdf, move into public/
mv cv.pdf public/

git add -A
git commit -m "refactor: replace legacy jQuery site with Astro rebuild"
git push origin main
```

**Alternative (keep subfolder):** set Vercel → Project → Settings → Root Directory to `astro-site`, then delete legacy root files only. Simpler git diff, slightly messier local structure.

**Vercel auto-deploys.** If anything looks off, rollback in Vercel dashboard (all deployments retained 30+ days) or re-point DNS to the `legacy` branch.

---

## Phase 2 — DevPrep (`/interview`)

Goal: rebuild `interview/index.html` (1,140 lines, 244 KB) as a proper component tree with the question database as content.

### 2.1 Extract data

Legacy data lives in the old file inside a `const DATA = [...]` array. Extract into:

```
src/content/interview/
├── en/
│   ├── fullstack.json
│   ├── frontend.json
│   └── backend.json
├── ru/…  (if content is translatable)
└── uz/…
```

Schema (per question):
```ts
{
  id: string,
  level: 'entry'|'junior'|'mid'|'senior'|'expert'|'architect',
  category: string,
  question: string,
  answer: string,              // MDX or HTML-ish string
  codeOnly?: boolean,
}
```

Consider MDX collections instead of JSON if answers contain code blocks — Astro MDX support is first-class.

### 2.2 UI as React island

Create `components/interview/DevPrepApp.tsx` — the whole interactive UI:
- Search input (fuzzy match over question + answer)
- Level filter chips (6 levels, color-coded)
- Toggles: code-only mode, hide completed
- Progress bar + completion %
- Dark mode already inherited from site theme
- Card expand/collapse on click
- `localStorage` for completion state (`devprep:completed:<id>`)

Render from `src/pages/interview/index.astro`:
```astro
---
import Layout from '../../layouts/Layout.astro';
import DevPrepApp from '../../components/interview/DevPrepApp';
import { getCollection } from 'astro:content';
const questions = await getCollection('interview');
---
<Layout title="DevPrep" locale="en">
  <DevPrepApp questions={questions} client:load />
</Layout>
```

### 2.3 Localization

Chrome (nav, filter labels, button text) comes from the JSON dictionaries. Question content stays per-language in the collection folders.

### 2.4 Keyboard shortcuts (nice-to-have)

- `/` focus search
- `1-6` filter by level
- `d` toggle dark
- `c` toggle code-only

---

## Phase 3 — Mon Français (`/french`)

Goal: rebuild `french-app/index.html` (6,711 lines, 688 KB) as a component tree with 63 grammar topics, Vite et Bien vocabulary (500+ words), and speaking panels as content.

### 3.1 Content extraction — biggest Phase-3 task

Legacy file has everything inline. Need to pull out:

- **Grammar topics** (63) — `src/content/french-grammar/*.mdx`
  - Fields: `topic`, `level` (A1–C2), `examples[]`, `irregulars[]`, `explanation` (body)
- **Vocabulary units** (20 from Vite et Bien) — `src/content/french-vocab/*.json`
  - Fields: `unit`, `theme`, `words[] { fr, en, uz, ru, example }`
- **Speaking panels** — `src/content/french-speaking/*.mdx`
  - Fields: `scenario` (restaurant, phone, etc.), `dialogue[]`, `expressions[]`, `grammar_notes[]`, `cultural_notes[]`

Write a one-off Node script `scripts/extract-french.mjs` that parses the legacy HTML and emits content files. Don't translate by hand.

### 3.2 UI components

```
components/french/
├── MonFrancaisApp.tsx        # shell + routing between panels
├── GrammarCard.tsx           # flip-card, favorite toggle
├── SpeakingPanel.tsx
├── VocabList.tsx
├── SearchBar.tsx             # sticky
├── AnthropicKeyInput.tsx     # localStorage key storage (keep legacy behavior)
└── ProgressPanel.tsx         # completion stats
```

### 3.3 Anthropic AI features (optional, keep the door open)

Current legacy app stores an Anthropic API key in localStorage. Keep that flow — users paste their own key. If you want server-side AI, Phase 5 option: add a Vercel Edge function that proxies to Claude Messages API, reading key from env var.

### 3.4 Routes

- `/french` — landing (unit picker, level selector)
- `/french/grammar/[slug]` — per-topic deep page
- `/french/vocab/[unit]` — per-unit vocab
- `/french/speaking/[scenario]` — speaking scenarios

Three-language mirror under `/ru/french/…` and `/uz/french/…` for chrome; actual French content is obviously in French.

---

## Phase 4 — Polish & ship

- [ ] Vercel Analytics (add `@vercel/analytics` in `Layout.astro`)
- [ ] Speed Insights (add `@vercel/speed-insights`)
- [ ] Sitemap autogen via `@astrojs/sitemap`
- [ ] `robots.txt`
- [ ] OG images (Satori generation at build time, per page)
- [ ] 404 page, branded
- [ ] Lighthouse pass — target 95+ all axes
- [ ] Cross-browser: Safari iOS, Chrome Android, Firefox, Edge
- [ ] Cross-viewport: 360, 390, 768, 1024, 1440
- [ ] Print CSS for `/cv`
- [ ] `hreflang` tags for EN/RU/UZ variants (SEO)
- [ ] Schema.org Person + WebSite structured data

---

## Pending user inputs (master checklist)

Before Phase 1 can fully complete:

- [ ] Professional photo (1 or 2)
- [ ] Formspree form ID (or alternative)
- [ ] Confirm social URLs (GitHub, LinkedIn, Telegram, Twitter)
- [ ] Confirm production domain
- [ ] Testimonials (yes with quotes / skip)
- [ ] Update logo/favicon if wanted (currently Astro default)

---

## File inventory at handoff

**Tracked (will be in git):**
- `astro-site/astro.config.mjs`
- `astro-site/package.json`
- `astro-site/package-lock.json`
- `astro-site/tsconfig.json`
- `astro-site/vercel.json`
- `astro-site/README.md` (Astro default)
- `astro-site/PLAN.md` (this file)
- `astro-site/.gitignore`
- `astro-site/.vscode/` (Astro default)
- `astro-site/public/favicon.*`
- `astro-site/src/**/*`

**Ignored (won't be in git):**
- `astro-site/node_modules/`
- `astro-site/dist/`
- `astro-site/.astro/`

**Legacy (untouched, still live on Vercel until swap):**
- `/index.html`, `/light-index.html`, `/404.html`
- `/css/`, `/js/`, `/images/`, `/assets/`
- `/french-app/`, `/interview/`
- `/contact.php`, `/config.json`, `/cv.pdf`

---

## Rollback & safety notes

- Old site is untouched until we explicitly swap. Pushing `astro-site/` changes nothing in production.
- Before swap, a `legacy` branch preserves full old state.
- Vercel retains deploys ~30 days; instant rollback via dashboard.
- If Vercel starts auto-detecting Astro and tries to build it, go to Project Settings → Build & Development Settings and explicitly set Framework Preset to "Other" and Output Directory to `./` until swap.

---

## Quick command reference

```bash
# Dev
cd astro-site && npm run dev

# Build + preview
cd astro-site && npm run build && npm run preview

# Add content (example)
# Create src/content/projects/winechain.json, Astro picks it up next dev restart

# Add integration (example)
cd astro-site && npx astro add sitemap

# Deploy preview manually (if you install vercel CLI)
cd astro-site && vercel
```
