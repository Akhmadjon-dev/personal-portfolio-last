export type WordCategory = 'verb' | 'adverb' | 'adjective' | 'noun' | 'connector' | 'phrase';

export type CEFRLevel = 'A1' | 'A2' | 'B1';

export type Lang = 'fr' | 'en' | 'ru' | 'uz';

export interface Translations {
  fr: string;
  en: string;
  ru: string;
  uz: string;
}

export interface Word {
  rank: number;                // ranking inside its category (1 = most frequent)
  fr: string;                  // primary French form (infinitive for verbs, masc. sing. for adjectives, etc.)
  en: string;
  ru: string;
  uz: string;
  example: Translations;       // a single example sentence, French + 3 translations
  category: WordCategory;
  level: CEFRLevel;
  notes?: string;              // free-text English hint (irregular forms, register, etc.)
  feminine?: string;           // for adjectives that have a different feminine form
  plural?: string;             // for irregular plural nouns
  gender?: 'm' | 'f';          // for nouns
}

export interface CategoryMeta {
  key: WordCategory;
  icon: string;                // emoji
  storageKey: string;          // for localStorage scope (favorites, quiz state)
}

export const CATEGORY_META: Record<WordCategory, CategoryMeta> = {
  verb:      { key: 'verb',      icon: '⚡', storageKey: 'mf-verbs' },
  adverb:    { key: 'adverb',    icon: '🌀', storageKey: 'mf-adverbs' },
  adjective: { key: 'adjective', icon: '🎨', storageKey: 'mf-adjectives' },
  noun:      { key: 'noun',      icon: '📦', storageKey: 'mf-nouns' },
  connector: { key: 'connector', icon: '🔗', storageKey: 'mf-connectors' },
  phrase:    { key: 'phrase',    icon: '💬', storageKey: 'mf-phrases' },
};

export function translationFor(word: Word, lang: 'en' | 'ru' | 'uz'): string {
  return word[lang];
}

export function exampleFor(word: Word, lang: Lang): string {
  return word.example[lang];
}
