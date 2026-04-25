import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const LEGACY = resolve(ROOT, '..', 'french-app', 'index.html');
const OUT = resolve(ROOT, 'src', 'data', 'french');

mkdirSync(OUT, { recursive: true });

const src = readFileSync(LEGACY, 'utf8').split('\n');
const slice = (a, b) => src.slice(a - 1, b).join('\n');

const grammarBody = slice(2848, 6030);
const grammarUzBody = slice(6035, 6099);
const vocabHtml = slice(1134, 2097);
const speakingHtml = slice(2099, 2843);

// --- types.ts -----------------------------------------------------------
writeFileSync(resolve(OUT, 'types.ts'), `export type Diff = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface GrammarTopic {
  id: number;
  title: string;
  diff: Diff;
  topic: string;
  source: string;
  preview: string;
  content: string;
}

export interface GrammarUzEntry {
  title: string;
  preview: string;
}
export type GrammarUzMap = Record<number, GrammarUzEntry>;

export interface FrenchUnit {
  id: number;
  html: string;
}
`);

// --- grammar.ts ---------------------------------------------------------
const grammarTs = `import type { GrammarTopic, GrammarUzMap } from './types';

export const GRAMMAR: GrammarTopic[] = ${grammarBody.replace(/^const GRAMMAR = \[/, '[').replace(/\];?\s*$/, ']')};

export ${grammarUzBody.replace(/^const GRAMMAR_UZ_MAP = \{/, 'const GRAMMAR_UZ_MAP: GrammarUzMap = {')};

export const GRAMMAR_UZ: GrammarTopic[] = GRAMMAR.map((item) => {
  const uz = GRAMMAR_UZ_MAP[item.id];
  if (!uz) return item;
  return { ...item, title: uz.title, preview: uz.preview };
});
`;
writeFileSync(resolve(OUT, 'grammar.ts'), grammarTs);

// --- helper to split a panel HTML into per-unit chunks ------------------
// `re` must capture the unit id as group 1; the matching line is treated as
// the START of the new unit (kept inside the chunk).
function splitUnits(html, re) {
  const lines = html.split('\n');
  const units = [];
  let curr = null;
  for (const line of lines) {
    const m = line.match(re);
    if (m) {
      if (curr) units.push(curr);
      curr = { id: Number(m[1]), buf: [line] };
      continue;
    }
    if (curr) curr.buf.push(line);
  }
  if (curr) units.push(curr);
  return units.map(({ id, buf }) => ({ id, html: buf.join('\n').trim() }));
}

function emitUnits(name, units, exportName) {
  const escape = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  const body = units
    .map((u) => `  { id: ${u.id}, html: \`${escape(u.html)}\` }`)
    .join(',\n');
  return `import type { FrenchUnit } from './types';

export const ${exportName}: FrenchUnit[] = [
${body}
];
`;
}

const vocabUnits = splitUnits(vocabHtml, /data-vb-unit="(\d+)"/);
const speakingUnits = splitUnits(speakingHtml, /id="spu-(\d+)"/);

writeFileSync(resolve(OUT, 'vocab.ts'), emitUnits('vocab', vocabUnits, 'VOCAB_UNITS'));
writeFileSync(resolve(OUT, 'speaking.ts'), emitUnits('speaking', speakingUnits, 'SPEAKING_UNITS'));

// --- print summary ------------------------------------------------------
console.log(`grammar: lines ${grammarBody.split('\n').length}`);
console.log(`grammar_uz: ${grammarUzBody.split('\n').length} lines`);
console.log(`vocab units: ${vocabUnits.length}`);
console.log(`speaking units: ${speakingUnits.length}`);
console.log(`vocab html: ${vocabHtml.length} chars`);
console.log(`speaking html: ${speakingHtml.length} chars`);
