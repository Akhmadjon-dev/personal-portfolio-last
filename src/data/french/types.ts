export type Diff = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

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
