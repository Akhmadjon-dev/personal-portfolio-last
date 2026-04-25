import { useMemo, useState } from 'react';
import {
  ALL_WORDS,
  BY_CATEGORY,
  CATEGORY_META,
  dailyWord,
  type Word,
  type WordCategory,
} from '../../data/french/words';

type DisplayLang = 'en' | 'ru' | 'uz';

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
  daily_label: string;
  search_placeholder: string;
  results: string;
  no_results: string;
  level_label: string;
  example_label: string;
  category_labels: CategoryLabels;
  all: string;
}

interface Props {
  locale: 'en' | 'ru' | 'uz';
  labels: Labels;
}

const LEVEL_STYLES: Record<string, string> = {
  A1: 'bg-success/15 text-success border-success/30',
  A2: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  B1: 'bg-accent-warm/20 text-amber-700 dark:text-amber-400 border-accent-warm/40',
};

export default function TopWordsPanel({ locale, labels }: Props) {
  const lang: DisplayLang = locale;
  const [activeCategory, setActiveCategory] = useState<WordCategory | 'all'>('verb');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const today = useMemo(() => dailyWord(), []);

  const sourceList: Word[] = activeCategory === 'all' ? ALL_WORDS : BY_CATEGORY[activeCategory];

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    if (!needle) return sourceList;
    return sourceList.filter((w) => {
      return (
        w.fr.toLowerCase().includes(needle) ||
        w[lang].toLowerCase().includes(needle) ||
        w.example.fr.toLowerCase().includes(needle) ||
        w.example[lang].toLowerCase().includes(needle)
      );
    });
  }, [sourceList, search, lang]);

  function toggleExpanded(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const categoryButtons: Array<{ key: WordCategory; label: string }> = [
    { key: 'verb', label: labels.category_labels.verb },
    { key: 'adverb', label: labels.category_labels.adverb },
    { key: 'adjective', label: labels.category_labels.adjective },
    { key: 'noun', label: labels.category_labels.noun },
    { key: 'connector', label: labels.category_labels.connector },
    { key: 'phrase', label: labels.category_labels.phrase },
  ];

  const todayId = `${today.category}-${today.rank}`;

  return (
    <div>
      {/* Daily word banner */}
      <article
        className="relative overflow-hidden rounded-2xl border border-mist dark:border-white/10 bg-gradient-to-br from-accent-warm/10 via-accent/5 to-transparent dark:from-accent-warm/15 dark:via-accent/10 p-5 md:p-7 mb-8"
      >
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {labels.daily_label}
          </span>
          <span
            className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${LEVEL_STYLES[today.level] ?? ''}`}
          >
            {today.level}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
            {labels.category_labels[today.category]}
          </span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-1">{today.fr}</h3>
        <p className="text-lg text-muted mb-4">{today[lang]}</p>
        <div className="text-sm border-l-2 border-accent/40 pl-3">
          <p className="italic text-ink dark:text-paper">{today.example.fr}</p>
          <p className="text-muted">{today.example[lang]}</p>
        </div>
      </article>

      {/* Category tabs */}
      <nav className="flex gap-2 overflow-x-auto -mx-2 px-2 mb-5">
        <div className="flex gap-2 min-w-max">
          {categoryButtons.map(({ key, label }) => {
            const meta = CATEGORY_META[key];
            const count = BY_CATEGORY[key].length;
            const active = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  setExpanded(new Set());
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                    : 'border-mist dark:border-white/10 text-muted hover:text-ink dark:hover:text-paper hover:border-ink/30'
                }`}
              >
                <span aria-hidden="true">{meta.icon}</span>
                <span>{label}</span>
                <span className="text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={labels.search_placeholder}
          className="w-full px-5 py-3 rounded-full border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
        />
      </div>
      <p className="text-xs font-mono text-muted mb-5">
        {labels.results}: {filtered.length} / {sourceList.length}
      </p>

      {/* Word list */}
      <div className="space-y-1.5">
        {filtered.length === 0 ? (
          <p className="text-center text-muted py-12">{labels.no_results}</p>
        ) : (
          filtered.map((w) => {
            const id = `${w.category}-${w.rank}`;
            const isOpen = expanded.has(id);
            const isToday = id === todayId;
            return (
              <article
                key={id}
                className={`rounded-xl border bg-paper dark:bg-white/[0.02] transition-colors ${
                  isToday
                    ? 'border-accent/40'
                    : 'border-mist dark:border-white/10 hover:border-ink/20 dark:hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleExpanded(id)}
                  className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 text-left"
                >
                  <span className="font-mono text-xs text-muted w-7 md:w-8 flex-shrink-0">
                    #{w.rank}
                  </span>

                  <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-3 items-baseline">
                    <span className="font-display text-lg md:text-xl text-ink dark:text-paper truncate">
                      {w.fr}
                    </span>
                    <span className="text-sm md:text-base text-muted truncate">{w[lang]}</span>
                  </div>

                  <span
                    className={`hidden sm:inline-flex font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border flex-shrink-0 ${LEVEL_STYLES[w.level] ?? ''}`}
                  >
                    {w.level}
                  </span>
                  <span
                    className={`text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 border-t border-mist dark:border-white/10 space-y-3 text-sm">
                    <div className="flex flex-wrap items-center gap-2 pt-3">
                      <span
                        className={`sm:hidden font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${LEVEL_STYLES[w.level] ?? ''}`}
                      >
                        {w.level}
                      </span>
                      {w.feminine && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-mist dark:border-white/10 text-muted">
                          fém. {w.feminine}
                        </span>
                      )}
                      {w.gender && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-mist dark:border-white/10 text-muted">
                          {w.gender === 'm' ? 'le' : 'la'}
                        </span>
                      )}
                      {w.plural && (
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-mist dark:border-white/10 text-muted">
                          pl. {w.plural}
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
                        {labels.example_label}
                      </p>
                      <p className="italic text-ink dark:text-paper">{w.example.fr}</p>
                      <p className="text-muted">{w.example[lang]}</p>
                    </div>

                    {w.notes && (
                      <p className="text-xs text-muted italic">{w.notes}</p>
                    )}
                  </div>
                )}
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
