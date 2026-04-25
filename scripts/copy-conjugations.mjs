import { copyFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '..', 'node_modules', 'french-verbs-lefff', 'dist', 'conjugations.json');
const dst = resolve(__dirname, '..', 'public', 'french-conjugations.json');

if (!existsSync(src)) {
  console.warn(`[copy-conjugations] source not found: ${src} — skipping (run npm install first)`);
  process.exit(0);
}

mkdirSync(dirname(dst), { recursive: true });
copyFileSync(src, dst);
const size = statSync(dst).size;
console.log(`[copy-conjugations] ${(size / 1024 / 1024).toFixed(1)} MB → public/french-conjugations.json`);
