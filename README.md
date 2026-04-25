# ahmadjon.uz

Personal portfolio for Ahmadjon Abdusamadov — Senior Frontend Engineer (React / Next.js / TypeScript). Also hosts two personal tools:

- [/french](src/pages/french/) — **Mon Français**: 63 grammar topics, 500+ vocabulary words from Vite et Bien, 20 speaking units with dialogues + cultural notes, and an Anthropic-powered tutor.
- [/interview](src/pages/interview/) — **DevPrep**: 330 frontend interview questions across React, JavaScript, HTML & CSS, Next.js, TypeScript, and Web Fundamentals, with progress tracking.

## Stack

- [Astro 6](https://astro.build) (static, multi-locale routing for EN/RU/UZ)
- [React 19](https://react.dev) islands for the interactive panels
- [Tailwind CSS 4](https://tailwindcss.com) via the Vite plugin
- [Web3Forms](https://web3forms.com) for the contact form
- Hosted on [Vercel](https://vercel.com)

## Develop

```sh
npm install
npm run dev          # http://localhost:4321
npm run build
npm run preview
```

Node 22.12+ required.

## Layout

```
src/
├── layouts/Layout.astro        # nav, footer, theme init, font loading
├── components/
│   ├── shared/                 # Nav, Footer, ThemeToggle, LangSwitcher
│   ├── portfolio/              # Hero, FeaturedProjects, Cv, ContactForm…
│   ├── interview/              # DevPrepApp React island
│   └── french/                 # MonFrancaisApp + GrammarPanel + UnitListPanel + AIBox
├── data/
│   ├── interview/              # 330 questions × 2 languages, typed
│   └── french/                 # GRAMMAR + GRAMMAR_UZ_MAP + 20 vocab + 20 speaking units
├── content/projects/           # 4 featured project entries (content collection)
├── i18n/{en,ru,uz}.json        # 3-language dictionaries
├── styles/                     # global.css + french-content.css
└── pages/                      # /, /cv, /french, /interview × {/, /ru/, /uz/}
public/
├── cv.pdf
├── favicon.svg
└── favicon.ico
scripts/
└── extract-french.mjs          # re-runnable extractor for legacy french-app data
```

The pre-rebuild jQuery site lives on the `legacy` branch.
