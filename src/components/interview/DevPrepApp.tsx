import { useEffect, useMemo, useState } from 'react';
import '../../styles/devprep-content.css';
import type { DataMap, Level, Question } from '../../data/interview/types';
import { LEVELS } from '../../data/interview/types';

interface InterviewLabels {
  headline_pre: string;
  headline_highlight: string;
  subtitle: string;
  search_placeholder: string;
  code_only: string;
  hide_completed: string;
  results: string;
  progress: string;
  no_results: string;
  footer: string;
  levels: Record<Level, string>;
  type_code: string;
  type_theory: string;
}

interface Props {
  data: DataMap;
  labels: InterviewLabels;
  storageKey: string;
}

const LEVEL_STYLES: Record<Level, string> = {
  entry: 'bg-success/15 text-success border-success/30',
  junior: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  mid: 'bg-accent-warm/20 text-amber-700 dark:text-amber-400 border-accent-warm/40',
  senior: 'bg-accent/15 text-accent border-accent/30',
  expert: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
  architect: 'bg-indigo-700/15 text-indigo-700 dark:text-indigo-400 border-indigo-700/30',
};

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ');
}

function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? ''));
}

export default function DevPrepApp({ data, labels, storageKey }: Props) {
  const topicKeys = Object.keys(data);
  const [activeTopic, setActiveTopic] = useState<string>(topicKeys[0]);
  const [search, setSearch] = useState('');
  const [activeLevels, setActiveLevels] = useState<Set<Level>>(new Set(LEVELS));
  const [codeOnly, setCodeOnly] = useState(false);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setCompleted(new Set(JSON.parse(raw) as string[]));
    } catch {
      // ignore
    }
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(Array.from(completed)));
    } catch {
      // ignore
    }
  }, [completed, storageKey]);

  const topic = data[activeTopic];

  const visibleQuestions = useMemo(() => {
    if (!topic) return [] as Array<{ q: Question; id: string; idx: number }>;
    const needle = search.trim().toLowerCase();
    return topic.questions
      .map((q, idx) => ({ q, idx, id: `${activeTopic}:${idx}` }))
      .filter(({ q, id }) => {
        if (!activeLevels.has(q.level)) return false;
        if (codeOnly && q.type !== 'code') return false;
        if (hideCompleted && completed.has(id)) return false;
        if (needle && !stripTags(q.q).toLowerCase().includes(needle)) return false;
        return true;
      });
  }, [topic, search, activeLevels, codeOnly, hideCompleted, completed, activeTopic]);

  const topicProgress = useMemo(() => {
    if (!topic) return { done: 0, total: 0, pct: 0 };
    const total = topic.questions.length;
    const done = topic.questions.reduce(
      (acc, _, idx) => acc + (completed.has(`${activeTopic}:${idx}`) ? 1 : 0),
      0,
    );
    const pct = total ? Math.round((done / total) * 100) : 0;
    return { done, total, pct };
  }, [topic, completed, activeTopic]);

  function toggleLevel(level: Level) {
    setActiveLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  }

  function toggleCompleted(id: string) {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleExpanded(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pb-24">
      <header className="pt-12 md:pt-16 pb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">DevPrep</p>
        <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-[1.05] mb-5">
          {labels.headline_pre}{' '}
          <span className="bg-accent text-paper px-3 rounded-lg">{labels.headline_highlight}</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl">{labels.subtitle}</p>
      </header>

      <nav className="sticky top-16 z-30 -mx-6 px-6 py-3 mb-6 bg-paper/80 dark:bg-[#0F0F10]/80 backdrop-blur border-y border-mist dark:border-white/5 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {topicKeys.map((key) => {
            const t = data[key];
            const isActive = key === activeTopic;
            return (
              <button
                key={key}
                onClick={() => setActiveTopic(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                    : 'border-mist dark:border-white/10 text-muted hover:text-ink dark:hover:text-paper hover:border-ink/30'
                }`}
              >
                <span aria-hidden="true">{t.icon}</span>
                <span>{t.name}</span>
                <span className="text-xs opacity-60">{t.questions.length}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="space-y-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={labels.search_placeholder}
            className="flex-1 px-5 py-3 rounded-full border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {LEVELS.map((lvl) => {
            const on = activeLevels.has(lvl);
            return (
              <button
                key={lvl}
                onClick={() => toggleLevel(lvl)}
                className={`px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-colors ${
                  on ? LEVEL_STYLES[lvl] : 'border-mist dark:border-white/10 text-muted/60'
                }`}
              >
                {labels.levels[lvl]}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={codeOnly}
              onChange={(e) => setCodeOnly(e.target.checked)}
              className="w-4 h-4 accent-accent"
            />
            {labels.code_only}
          </label>
          <label className="inline-flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={hideCompleted}
              onChange={(e) => setHideCompleted(e.target.checked)}
              className="w-4 h-4 accent-accent"
            />
            {labels.hide_completed}
          </label>
          <span className="ml-auto font-mono text-accent">
            {format(labels.results, { count: visibleQuestions.length })}
          </span>
        </div>

        <div>
          <div className="h-1.5 bg-mist dark:bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent-warm transition-all duration-500"
              style={{ width: `${topicProgress.pct}%` }}
            />
          </div>
          <p className="text-xs text-muted mt-2 font-mono">
            {format(labels.progress, topicProgress)}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {visibleQuestions.length === 0 ? (
          <p className="text-muted text-center py-12">{labels.no_results}</p>
        ) : (
          visibleQuestions.map(({ q, id, idx }) => {
            const isOpen = expanded.has(id);
            const isDone = completed.has(id);
            return (
              <article
                key={id}
                className={`rounded-2xl border bg-paper dark:bg-white/[0.02] transition-colors ${
                  isDone
                    ? 'border-success/30 opacity-70'
                    : 'border-mist dark:border-white/10 hover:border-ink/20 dark:hover:border-white/20'
                }`}
              >
                <header
                  className="flex items-center gap-4 p-4 md:p-5 cursor-pointer"
                  onClick={() => toggleExpanded(id)}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompleted(id);
                    }}
                    aria-label={isDone ? 'Mark incomplete' : 'Mark complete'}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isDone
                        ? 'bg-success border-success text-paper'
                        : 'border-mist dark:border-white/20 hover:border-accent'
                    }`}
                  >
                    {isDone && <span className="text-xs">✓</span>}
                  </button>

                  <span className="font-mono text-xs text-muted w-7 flex-shrink-0">{idx + 1}</span>

                  <div
                    className="flex-1 text-sm md:text-base devprep-question"
                    dangerouslySetInnerHTML={{ __html: q.q }}
                  />

                  <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                    {q.type === 'code' && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {labels.type_code}
                      </span>
                    )}
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${LEVEL_STYLES[q.level]}`}
                    >
                      {labels.levels[q.level]}
                    </span>
                  </div>

                  <span
                    className={`text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    ▾
                  </span>
                </header>

                {isOpen && (
                  <div
                    className="px-4 md:px-5 pb-5 pt-1 border-t border-mist dark:border-white/10 devprep-answer"
                    dangerouslySetInnerHTML={{ __html: q.a }}
                  />
                )}
              </article>
            );
          })
        )}
      </div>

      <p className="text-center text-sm text-muted mt-12 font-mono">{labels.footer}</p>
    </div>
  );
}
