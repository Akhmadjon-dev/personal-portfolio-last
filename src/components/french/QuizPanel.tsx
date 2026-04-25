import { useEffect, useState } from 'react';
import {
  BY_CATEGORY,
  CATEGORY_META,
  type Word,
  type WordCategory,
} from '../../data/french/words';

type DisplayLang = 'en' | 'ru' | 'uz';
type Mode = 'fr-to-x' | 'x-to-fr';

interface CategoryLabels {
  verb: string;
  adverb: string;
  adjective: string;
  noun: string;
  connector: string;
  phrase: string;
}

interface Labels {
  title: string;
  subtitle: string;
  pick_category: string;
  pick_mode: string;
  mode_fr_to_x: string;     // "French → meaning"
  mode_x_to_fr: string;     // "Meaning → French"
  start: string;
  question_progress: string; // "Question {n} of {total}"
  score: string;
  what_does_it_mean: string;
  pick_french: string;
  next: string;
  finish: string;
  result_score: string;     // "You scored {n} / {total}"
  best: string;
  retry_missed: string;
  play_again: string;
  pick_another: string;
  category_labels: CategoryLabels;
  no_missed: string;
}

interface Props {
  locale: 'en' | 'ru' | 'uz';
  labels: Labels;
}

interface QuizQuestion {
  word: Word;
  options: string[];      // 4 options (one is the answer)
  correctIdx: number;
}

const QUESTION_COUNT = 10;
const STORAGE_KEY = 'mf-quiz-best';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadBestScores(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Record<string, number>;
  } catch {
    // ignore
  }
  return {};
}

function saveBestScore(key: string, score: number) {
  try {
    const all = loadBestScores();
    if (!all[key] || all[key] < score) {
      all[key] = score;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    }
  } catch {
    // ignore
  }
}

export default function QuizPanel({ locale, labels }: Props) {
  const lang: DisplayLang = locale;
  const [phase, setPhase] = useState<'setup' | 'playing' | 'done'>('setup');
  const [category, setCategory] = useState<WordCategory>('verb');
  const [mode, setMode] = useState<Mode>('fr-to-x');
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [missed, setMissed] = useState<Word[]>([]);
  const [score, setScore] = useState(0);
  const [bestScores, setBestScores] = useState<Record<string, number>>({});

  useEffect(() => {
    setBestScores(loadBestScores());
  }, []);

  const bestKey = `${category}:${mode}:${lang}`;
  const currentBest = bestScores[bestKey] ?? 0;

  function start(retryWith?: Word[]) {
    const pool = retryWith && retryWith.length >= 4 ? retryWith : BY_CATEGORY[category];
    const count = retryWith ? Math.min(retryWith.length, QUESTION_COUNT) : QUESTION_COUNT;
    const distractorPool = BY_CATEGORY[category];
    // Build questions; ensure we have enough distractors from the full category pool
    const sample = shuffle(pool).slice(0, count);
    const qs = sample.map((word) => {
      const others = distractorPool.filter((w) => w.rank !== word.rank);
      const distractors = shuffle(others).slice(0, 3);
      const correctText = mode === 'fr-to-x' ? word[lang] : word.fr;
      const distractorTexts = distractors.map((d) => (mode === 'fr-to-x' ? d[lang] : d.fr));
      const options = shuffle([correctText, ...distractorTexts]);
      return { word, options, correctIdx: options.indexOf(correctText) };
    });
    setQuestions(qs);
    setCurrentIdx(0);
    setSelected(null);
    setMissed([]);
    setScore(0);
    setPhase('playing');
  }

  function pick(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const q = questions[currentIdx];
    if (idx === q.correctIdx) {
      setScore((s) => s + 1);
    } else {
      setMissed((m) => [...m, q.word]);
    }
  }

  function next() {
    if (currentIdx + 1 >= questions.length) {
      saveBestScore(bestKey, score);
      setPhase('done');
      setBestScores(loadBestScores());
      return;
    }
    setCurrentIdx((i) => i + 1);
    setSelected(null);
  }

  function retryMissed() {
    if (missed.length === 0) return;
    start(missed);
  }

  function backToSetup() {
    setPhase('setup');
    setSelected(null);
    setQuestions([]);
  }

  // ---- Setup phase ----
  if (phase === 'setup') {
    const categoryButtons: Array<{ key: WordCategory; label: string }> = [
      { key: 'verb', label: labels.category_labels.verb },
      { key: 'adverb', label: labels.category_labels.adverb },
      { key: 'adjective', label: labels.category_labels.adjective },
      { key: 'noun', label: labels.category_labels.noun },
      { key: 'connector', label: labels.category_labels.connector },
      { key: 'phrase', label: labels.category_labels.phrase },
    ];

    return (
      <div className="max-w-2xl">
        <h3 className="font-display text-2xl mb-2">{labels.title}</h3>
        <p className="text-muted mb-8">{labels.subtitle}</p>

        <div className="mb-7">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
            {labels.pick_category}
          </p>
          <div className="flex flex-wrap gap-2">
            {categoryButtons.map(({ key, label }) => {
              const active = category === key;
              const count = BY_CATEGORY[key].length;
              return (
                <button
                  key={key}
                  onClick={() => setCategory(key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active
                      ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                      : 'border-mist dark:border-white/10 text-muted hover:text-ink dark:hover:text-paper hover:border-ink/30'
                  }`}
                >
                  <span aria-hidden="true">{CATEGORY_META[key].icon}</span>
                  <span>{label}</span>
                  <span className="text-xs opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
            {labels.pick_mode}
          </p>
          <div className="grid sm:grid-cols-2 gap-2">
            <button
              onClick={() => setMode('fr-to-x')}
              className={`p-4 rounded-xl border text-left transition-colors ${
                mode === 'fr-to-x'
                  ? 'border-accent bg-accent/5'
                  : 'border-mist dark:border-white/10 hover:border-ink/30'
              }`}
            >
              <span className="block text-base font-medium mb-1">FR → {lang.toUpperCase()}</span>
              <span className="block text-xs text-muted">{labels.mode_fr_to_x}</span>
            </button>
            <button
              onClick={() => setMode('x-to-fr')}
              className={`p-4 rounded-xl border text-left transition-colors ${
                mode === 'x-to-fr'
                  ? 'border-accent bg-accent/5'
                  : 'border-mist dark:border-white/10 hover:border-ink/30'
              }`}
            >
              <span className="block text-base font-medium mb-1">{lang.toUpperCase()} → FR</span>
              <span className="block text-xs text-muted">{labels.mode_x_to_fr}</span>
            </button>
          </div>
        </div>

        {currentBest > 0 && (
          <p className="text-sm font-mono text-muted mb-5">
            {labels.best}: {currentBest} / {QUESTION_COUNT}
          </p>
        )}

        <button
          onClick={() => start()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-medium hover:opacity-90 transition-opacity"
        >
          {labels.start} <span aria-hidden="true">→</span>
        </button>
      </div>
    );
  }

  // ---- Playing phase ----
  if (phase === 'playing') {
    const q = questions[currentIdx];
    const answered = selected !== null;
    const prompt = mode === 'fr-to-x' ? q.word.fr : q.word[lang];
    const promptHint =
      mode === 'fr-to-x' ? labels.what_does_it_mean : labels.pick_french;

    return (
      <div className="max-w-2xl">
        <header className="flex items-center justify-between mb-6 text-sm">
          <span className="font-mono text-muted">
            {labels.question_progress
              .replace('{n}', String(currentIdx + 1))
              .replace('{total}', String(questions.length))}
          </span>
          <span className="font-mono text-accent">
            {labels.score}: {score}
          </span>
        </header>

        <div className="rounded-2xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] p-6 md:p-8 mb-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
            {promptHint}
          </p>
          <p className="font-display text-3xl md:text-4xl tracking-tight">{prompt}</p>
        </div>

        <div className="space-y-2 mb-6">
          {q.options.map((opt, i) => {
            const isCorrect = i === q.correctIdx;
            const isPicked = i === selected;
            const showCorrect = answered && isCorrect;
            const showWrong = answered && isPicked && !isCorrect;
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={answered}
                className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-colors ${
                  showCorrect
                    ? 'border-success bg-success/10'
                    : showWrong
                      ? 'border-accent bg-accent/10'
                      : answered
                        ? 'border-mist dark:border-white/10 opacity-60'
                        : 'border-mist dark:border-white/10 hover:border-ink/30 hover:bg-paper-dim dark:hover:bg-white/[0.03]'
                }`}
              >
                <span className="font-mono text-xs text-muted w-5 flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
                {showCorrect && <span className="text-success" aria-hidden="true">✓</span>}
                {showWrong && <span className="text-accent" aria-hidden="true">✗</span>}
              </button>
            );
          })}
        </div>

        <button
          onClick={next}
          disabled={!answered}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {currentIdx + 1 >= questions.length ? labels.finish : labels.next}{' '}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    );
  }

  // ---- Done phase ----
  return (
    <div className="max-w-2xl">
      <div className="rounded-2xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] p-7 md:p-9 text-center mb-6">
        <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">
          {labels.title}
        </p>
        <p className="font-display text-5xl md:text-6xl tracking-tight mb-2">
          {score} <span className="text-muted">/ {questions.length}</span>
        </p>
        <p className="text-muted">
          {labels.result_score
            .replace('{n}', String(score))
            .replace('{total}', String(questions.length))}
        </p>
        {currentBest > 0 && (
          <p className="text-xs font-mono text-muted mt-3">
            {labels.best}: {Math.max(currentBest, score)} / {questions.length}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {missed.length > 0 ? (
          <button
            onClick={retryMissed}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-paper text-sm font-medium hover:opacity-90"
          >
            {labels.retry_missed} ({missed.length})
          </button>
        ) : (
          <span className="px-5 py-2.5 text-sm text-success font-mono">✓ {labels.no_missed}</span>
        )}
        <button
          onClick={() => start()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium hover:opacity-90"
        >
          {labels.play_again}
        </button>
        <button
          onClick={backToSetup}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-mist dark:border-white/10 text-sm hover:bg-paper-dim dark:hover:bg-white/5"
        >
          {labels.pick_another}
        </button>
      </div>
    </div>
  );
}
