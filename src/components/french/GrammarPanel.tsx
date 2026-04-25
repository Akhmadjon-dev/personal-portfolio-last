import { useMemo, useState } from 'react';
import { GRAMMAR, GRAMMAR_UZ } from '../../data/french/grammar';

interface Labels {
  search_placeholder: string;
  diff: string;
  topic: string;
  source: string;
  no_results: string;
  total: string;
  back_to_list: string;
}

interface Props {
  locale: 'en' | 'ru' | 'uz';
  labels: Labels;
}

const DIFF_COLORS: Record<string, string> = {
  A1: 'bg-success/15 text-success border-success/30',
  A2: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  B1: 'bg-accent-warm/20 text-amber-700 dark:text-amber-400 border-accent-warm/40',
  B2: 'bg-accent/15 text-accent border-accent/30',
  C1: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
  C2: 'bg-indigo-700/15 text-indigo-700 dark:text-indigo-400 border-indigo-700/30',
};

export default function GrammarPanel({ locale, labels }: Props) {
  const data = locale === 'uz' ? GRAMMAR_UZ : GRAMMAR;
  const [search, setSearch] = useState('');
  const [activeDiff, setActiveDiff] = useState<Set<string>>(new Set());
  const [activeTopic, setActiveTopic] = useState<Set<string>>(new Set());
  const [openId, setOpenId] = useState<number | null>(null);

  const allDiffs = useMemo(() => {
    const set = new Set<string>();
    data.forEach((d) => set.add(d.diff));
    return Array.from(set).sort();
  }, [data]);

  const allTopics = useMemo(() => {
    const set = new Set<string>();
    data.forEach((d) => set.add(d.topic));
    return Array.from(set).sort();
  }, [data]);

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return data.filter((item) => {
      if (activeDiff.size && !activeDiff.has(item.diff)) return false;
      if (activeTopic.size && !activeTopic.has(item.topic)) return false;
      if (
        needle &&
        !item.title.toLowerCase().includes(needle) &&
        !item.preview.toLowerCase().includes(needle)
      )
        return false;
      return true;
    });
  }, [data, search, activeDiff, activeTopic]);

  function toggleSet<T>(set: Set<T>, value: T): Set<T> {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    return next;
  }

  if (openId !== null) {
    const topic = data.find((t) => t.id === openId);
    if (!topic) {
      setOpenId(null);
      return null;
    }
    return (
      <div>
        <button
          onClick={() => setOpenId(null)}
          className="inline-flex items-center gap-2 mb-6 text-sm text-muted hover:text-ink dark:hover:text-paper transition-colors"
        >
          ← {labels.back_to_list}
        </button>
        <div className="rounded-2xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${DIFF_COLORS[topic.diff] ?? ''}`}
            >
              {topic.diff}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              {topic.topic}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              · {topic.source}
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">{topic.title}</h2>
          <p className="text-muted mb-6">{topic.preview}</p>
          <div className="french-content" dangerouslySetInnerHTML={{ __html: topic.content }} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={labels.search_placeholder}
          className="w-full px-5 py-3 rounded-full border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
        />

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted mr-2">
            {labels.diff}:
          </span>
          {allDiffs.map((d) => {
            const on = activeDiff.has(d);
            return (
              <button
                key={d}
                onClick={() => setActiveDiff((s) => toggleSet(s, d))}
                className={`px-3 py-1 rounded-full border text-xs font-semibold transition-colors ${
                  on ? DIFF_COLORS[d] ?? '' : 'border-mist dark:border-white/10 text-muted'
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted mr-2">
            {labels.topic}:
          </span>
          {allTopics.map((t) => {
            const on = activeTopic.has(t);
            return (
              <button
                key={t}
                onClick={() => setActiveTopic((s) => toggleSet(s, t))}
                className={`px-3 py-1 rounded-full border text-xs transition-colors ${
                  on
                    ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                    : 'border-mist dark:border-white/10 text-muted hover:text-ink dark:hover:text-paper'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <p className="text-xs font-mono text-muted">
          {labels.total}: {filtered.length} / {data.length}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {filtered.length === 0 ? (
          <p className="md:col-span-2 text-center text-muted py-12">{labels.no_results}</p>
        ) : (
          filtered.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setOpenId(topic.id)}
              className="text-left p-4 rounded-xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] hover:border-ink/25 dark:hover:border-white/25 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${DIFF_COLORS[topic.diff] ?? ''}`}
                >
                  {topic.diff}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {topic.topic}
                </span>
              </div>
              <h3 className="font-display text-lg leading-tight mb-1">{topic.title}</h3>
              <p className="text-sm text-muted line-clamp-2">{topic.preview}</p>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
