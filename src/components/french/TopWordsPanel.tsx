import { useMemo, useState } from 'react';
import {
  ALL_WORDS,
  BY_CATEGORY,
  CATEGORY_META,
  dailyWord,
  pronunciationFor,
  verbMetaFor,
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
  ipa_label?: string;
  phonetic_label?: string;
  pp_label?: string;
  aux_label?: string;
  irregular_only?: string;
  speak_label?: string;
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

function speak(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'fr-FR';
  utt.rate = 0.92;
  window.speechSynthesis.speak(utt);
}

function SpeakButton({ text, label }: { text: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      aria-label={label ?? `Speak ${text}`}
      className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-mist dark:border-white/10 text-muted hover:text-accent hover:border-accent transition-colors flex-shrink-0"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </button>
  );
}

export default function TopWordsPanel({ locale, labels }: Props) {
  const lang: DisplayLang = locale;
  const [activeCategory, setActiveCategory] = useState<WordCategory | 'all'>('verb');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [irregularOnly, setIrregularOnly] = useState(false);

  const today = useMemo(() => dailyWord(), []);

  const sourceList: Word[] = activeCategory === 'all' ? ALL_WORDS : BY_CATEGORY[activeCategory];
  const showIrregularFilter = activeCategory === 'verb';

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return sourceList.filter((w) => {
      if (irregularOnly && showIrregularFilter) {
        const meta = verbMetaFor(w.fr);
        if (!meta?.irregular) return false;
      }
      if (!needle) return true;
      return (
        w.fr.toLowerCase().includes(needle) ||
        w[lang].toLowerCase().includes(needle) ||
        w.example.fr.toLowerCase().includes(needle) ||
        w.example[lang].toLowerCase().includes(needle)
      );
    });
  }, [sourceList, search, lang, irregularOnly, showIrregularFilter]);

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
  const todayPron = pronunciationFor(today.fr);
  const todayMeta = today.category === 'verb' ? verbMetaFor(today.fr) : null;

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
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <h3 className="font-display text-3xl md:text-4xl tracking-tight">{today.fr}</h3>
          <SpeakButton text={today.fr} label={labels.speak_label} />
        </div>
        {todayPron && (
          <p className="text-sm text-muted font-mono mb-1">
            <span className="text-accent">{todayPron.ipa}</span>{' '}
            <span className="opacity-70">·</span> <span>{todayPron.phonetic}</span>
          </p>
        )}
        <p className="text-lg text-muted mb-4">{today[lang]}</p>
        {todayMeta && (
          <p className="text-xs font-mono text-muted mb-3">
            p.p. <span className="text-ink dark:text-paper italic">{todayMeta.pastParticiple}</span>{' · '}
            aux. <span className="text-ink dark:text-paper">{todayMeta.auxiliary}</span>
          </p>
        )}
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

      {/* Search + Irregular filter */}
      <div className="mb-3 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={labels.search_placeholder}
          className="flex-1 px-5 py-3 rounded-full border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
        />
        {showIrregularFilter && (
          <button
            type="button"
            onClick={() => setIrregularOnly((v) => !v)}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm border transition-colors whitespace-nowrap ${
              irregularOnly
                ? 'bg-accent text-paper border-accent'
                : 'border-mist dark:border-white/10 text-muted hover:border-accent hover:text-accent'
            }`}
          >
            ⚠ {labels.irregular_only ?? 'Irregular only'}
          </button>
        )}
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
            const pron = pronunciationFor(w.fr);
            const vmeta = w.category === 'verb' ? verbMetaFor(w.fr) : null;
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

                  <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-1 sm:gap-3 items-center">
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="font-display text-lg md:text-xl text-ink dark:text-paper truncate">
                        {w.fr}
                      </span>
                      {vmeta?.irregular && (
                        <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full border border-accent/40 text-accent flex-shrink-0">
                          irr
                        </span>
                      )}
                    </span>
                    <span className="text-sm md:text-base text-muted truncate">{w[lang]}</span>
                  </div>

                  <SpeakButton text={w.fr} label={labels.speak_label} />

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
                    {pron && (
                      <p className="font-mono text-xs pt-3 mb-1">
                        <span className="text-accent">{pron.ipa}</span>
                        {' · '}
                        <span className="text-muted">{pron.phonetic}</span>
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-2">
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
                      {vmeta && (
                        <>
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-mist dark:border-white/10 text-muted">
                            p.p. <span className="text-ink dark:text-paper italic normal-case">{vmeta.pastParticiple}</span>
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-mist dark:border-white/10 text-muted">
                            aux. <span className="text-ink dark:text-paper normal-case">{vmeta.auxiliary}</span>
                          </span>
                        </>
                      )}
                    </div>

                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
                        {labels.example_label}
                      </p>
                      <div className="flex items-start gap-2">
                        <p className="italic text-ink dark:text-paper flex-1">{w.example.fr}</p>
                        <SpeakButton text={w.example.fr} label={labels.speak_label} />
                      </div>
                      <p className="text-muted">{w.example[lang]}</p>
                    </div>

                    {w.notes && <p className="text-xs text-muted italic">{w.notes}</p>}
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
