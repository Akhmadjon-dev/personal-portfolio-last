import type { Word, WordCategory } from './types';
import { VERBS } from './verbs';
import { ADVERBS } from './adverbs';
import { ADJECTIVES } from './adjectives';
import { NOUNS } from './nouns';
import { CONNECTORS } from './connectors';
import { PHRASES } from './phrases';

export { VERBS, ADVERBS, ADJECTIVES, NOUNS, CONNECTORS, PHRASES };
export * from './types';
export { PRONUNCIATIONS, pronunciationFor, type Pronunciation } from './pronunciations';
export { VERB_META, verbMetaFor, type VerbMeta, type Auxiliary } from './verb-meta';

export const BY_CATEGORY: Record<WordCategory, Word[]> = {
  verb: VERBS,
  adverb: ADVERBS,
  adjective: ADJECTIVES,
  noun: NOUNS,
  connector: CONNECTORS,
  phrase: PHRASES,
};

export const ALL_WORDS: Word[] = [
  ...VERBS,
  ...ADVERBS,
  ...ADJECTIVES,
  ...NOUNS,
  ...CONNECTORS,
  ...PHRASES,
];

/** Stable "word of the day" — picks one verb per UTC date, deterministic. */
export function dailyWord(date: Date = new Date()): Word {
  const dayIndex = Math.floor(date.getTime() / 86_400_000);
  return VERBS[dayIndex % VERBS.length];
}
