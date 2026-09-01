// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ahmadjon.uz',
  output: 'static',
  integrations: [react(), mdx()],
  i18n: {
    locales: ['en', 'ru', 'uz'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});