/**
 * Render dist/cv-print/index.html to public/cv.pdf with headless Chrome.
 *
 * Why this exists: the CV PDF is the document that gets parsed by an ATS and
 * summarised by an LLM ranker, and a hand-maintained PDF drifts away from the
 * site within one edit. Generating it from src/pages/cv-print.astro — which in
 * turn reads src/i18n/en.json — means the PDF, the /cv page and the site
 * timeline cannot disagree about a date, a title or an employer name.
 *
 * Usage:  npm run cv:pdf         (builds the site, then regenerates the PDF)
 *         CHROME_PATH=... npm run cv:pdf
 *
 * Notes:
 *   --no-pdf-header-footer is required. Without it Chrome stamps the page URL
 *   and a date into the PDF margins; headers and footers are one of the things
 *   résumé parsers are known to mis-attribute.
 */
import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { tmpdir } from 'node:os';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..');

const SOURCE = join(ROOT, 'dist', 'cv-print', 'index.html');
const OUT_PUBLIC = join(ROOT, 'public', 'cv.pdf');
const OUT_DIST = join(ROOT, 'dist', 'cv.pdf');

const CANDIDATES = [
  process.env.CHROME_PATH,
  // Windows
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  // macOS
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // Linux
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean);

const chrome = CANDIDATES.find((p) => existsSync(p));

if (!chrome) {
  console.error('[cv:pdf] No Chrome/Edge binary found. Set CHROME_PATH to one.');
  process.exit(1);
}

if (!existsSync(SOURCE)) {
  console.error(`[cv:pdf] ${SOURCE} missing — run \`npm run build\` first.`);
  process.exit(1);
}

const staging = join(tmpdir(), `cv-pdf-${Date.now()}.pdf`);

execFileSync(
  chrome,
  [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--no-pdf-header-footer',
    '--virtual-time-budget=8000',
    `--print-to-pdf=${staging}`,
    pathToFileURL(SOURCE).href,
  ],
  { stdio: 'inherit' },
);

if (!existsSync(staging)) {
  console.error('[cv:pdf] Chrome reported success but produced no file.');
  process.exit(1);
}

mkdirSync(dirname(OUT_PUBLIC), { recursive: true });
copyFileSync(staging, OUT_PUBLIC);
if (existsSync(dirname(OUT_DIST))) copyFileSync(staging, OUT_DIST);

const kb = (statSync(OUT_PUBLIC).size / 1024).toFixed(1);
console.log(`[cv:pdf] public/cv.pdf written (${kb} KB)`);
console.log('[cv:pdf] Verify reading order with:  pdftotext -enc UTF-8 public/cv.pdf -');
