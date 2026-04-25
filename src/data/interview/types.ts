export type Level = 'entry' | 'junior' | 'mid' | 'senior' | 'expert' | 'architect';
export type QuestionType = 'theory' | 'code';

export interface Question {
  q: string;
  a: string;
  level: Level;
  type: QuestionType;
}

export interface Topic {
  icon: string;
  name: string;
  questions: Question[];
}

export type DataMap = Record<string, Topic>;

export const t = (q: string, a: string, level: Level): Question => ({ q, a, level, type: 'theory' });
export const c = (q: string, a: string, level: Level): Question => ({ q, a, level, type: 'code' });

export const LEVELS: Level[] = ['entry', 'junior', 'mid', 'senior', 'expert', 'architect'];
