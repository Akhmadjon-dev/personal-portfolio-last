# Features map — what's portfolio, what's a feature, how to remove

The repo hosts three things that live in the same Astro site:

1. **Portfolio** — the home/CV/contact site at `/`, `/cv`, `/ru/*`, `/uz/*`. Always required.
2. **Mon Français** — French-learning app at `/french`, `/ru/french`, `/uz/french`.
3. **DevPrep** — frontend-interview app at `/interview`, `/ru/interview`, `/uz/interview`.

Mon Français and DevPrep are optional. This doc lists every file or block that needs changing if you decide to remove either.

---

## Portfolio (always present)

```
src/components/portfolio/   — Hero, FeaturedProjects, Cv, ContactForm, etc.
src/components/shared/      — Nav, Footer, ThemeToggle, LangSwitcher
src/layouts/Layout.astro    — head, theme init, Inter + Instrument Serif fonts
src/content/projects/       — 4 featured-project entries
src/content.config.ts       — projects collection schema
src/i18n/{en,ru,uz}.json    — top-level keys: meta, nav, hero, what_i_do, projects,
                              about, skills, experience, testimonials, contact, footer, cv
src/pages/index.astro       — / (and /ru/, /uz/)
src/pages/cv.astro          — /cv (and /ru/cv, /uz/cv)
src/styles/global.css       — Tailwind import + design tokens (paper/ink/accent…)
public/favicon.svg, favicon.ico, cv.pdf
```

The portfolio pulls in `tools` data from i18n to render two project cards
on the home page (Mon Français + DevPrep). Those cards are in
[src/components/portfolio/Tools.astro](src/components/portfolio/Tools.astro)
and the i18n keys are `tools.french` + `tools.interview`.

---

## To remove **Mon Français** (`/french`)

### Delete
```
src/components/french/
src/data/french/
src/styles/french-content.css
src/pages/french/index.astro
src/pages/ru/french/index.astro
src/pages/uz/french/index.astro
scripts/copy-conjugations.mjs
scripts/extract-french.mjs
public/french-conjugations.json    (gitignored, regenerated on install)
```

### Edit
1. **`package.json`** — remove deps:
   ```
   "french-verbs": "^5.4.0",
   "french-verbs-lefff": "^3.4.0",
   ```
   And remove the scripts:
   ```
   "postinstall": "node scripts/copy-conjugations.mjs",
   "predev":      "node scripts/copy-conjugations.mjs",
   "prebuild":    "node scripts/copy-conjugations.mjs"
   ```
2. **`src/components/portfolio/Tools.astro`** — remove the French card from the
   `tools` array, OR delete `Tools.astro` entirely + remove the `<Tools />`
   composition in [src/components/portfolio/Home.astro](src/components/portfolio/Home.astro)
   if you also remove DevPrep below.
3. **`src/components/shared/Nav.astro`** — remove the `tools` link from `links`
   if Tools is gone.
4. **`src/i18n/{en,ru,uz}.json`** — delete the top-level `french` block (panel
   labels + tenses + conjugator + top-words + quiz copy). Also delete
   `tools.french` if removing the Tools card. Also delete `panels.tools` /
   `panel_descriptions.tools` if removing the section.
5. **`.gitignore`** — remove the line `public/french-conjugations.json`.

The Playfair Display + Lora fonts are imported by `french-content.css`
(via `@import url(...)`) — they vanish automatically when that file is deleted.

---

## To remove **DevPrep** (`/interview`)

### Delete
```
src/components/interview/
src/data/interview/
src/styles/devprep-content.css
src/pages/interview/index.astro
src/pages/ru/interview/index.astro
src/pages/uz/interview/index.astro
```

### Edit
1. **`src/components/portfolio/Tools.astro`** — remove the DevPrep card from
   the `tools` array (mirror of the French step above).
2. **`src/components/shared/Nav.astro`** — remove the `tools` link if Tools
   is gone.
3. **`src/i18n/{en,ru,uz}.json`** — delete the top-level `interview` block
   (panel labels + level names + progress copy). Also delete `tools.interview`.

DevPrep has zero npm deps tied to it — the CSS lives in its own
`devprep-content.css` (imported by `DevPrepApp.tsx`), which deletes with
the rest.

---

## Adding a new feature

Match the pattern:

- `src/components/<feature>/<FeatureApp>.tsx` — top-level React island
- `src/data/<feature>/` — typed data modules
- `src/styles/<feature>-content.css` — feature-only styles, imported by the island (not by Layout)
- `src/pages/<feature>/index.astro` + `src/pages/{ru,uz}/<feature>/index.astro`
- `src/i18n/{en,ru,uz}.json` — top-level `<feature>` block + a `tools.<feature>` entry if you want it on the home page card grid
- Optional `tools.<feature>` card in [src/components/portfolio/Tools.astro](src/components/portfolio/Tools.astro)

Feature CSS goes via `@import` from inside the feature CSS file (not `Layout.astro`)
so its fonts and rules only ship when the feature actually loads.
