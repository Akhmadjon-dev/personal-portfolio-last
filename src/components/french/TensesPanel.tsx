import { useState } from 'react';
import { TENSES, TENSE_GROUPS, type TenseCategory } from '../../data/french/tenses';

type DisplayLang = 'en' | 'ru' | 'uz';

interface GroupLabels {
  present: string;
  past: string;
  future: string;
  conditional: string;
  mood: string;
  literary: string;
}

interface Labels {
  title: string;
  subtitle: string;
  formula_label: string;
  usage_label: string;
  examples_label: string;
  conjugation_label: string;
  group_labels: GroupLabels;
  jump_to_conjugator: string;
}

interface Props {
  locale: 'en' | 'ru' | 'uz';
  labels: Labels;
  onConjugate?: (verb: string) => void;
}

const CATEGORY_TINT: Record<TenseCategory, string> = {
  present: 'border-l-success/40',
  past: 'border-l-accent/40',
  future: 'border-l-emerald-500/40',
  conditional: 'border-l-accent-warm/40',
  mood: 'border-l-purple-500/40',
  literary: 'border-l-indigo-700/40',
};

export default function TensesPanel({ locale, labels, onConjugate }: Props) {
  const lang: DisplayLang = locale;
  const [openKey, setOpenKey] = useState<string | null>('present');

  return (
    <div>
      <div className="mb-8 max-w-2xl">
        <h3 className="font-display text-2xl mb-2">{labels.title}</h3>
        <p className="text-muted">{labels.subtitle}</p>
      </div>

      <div className="space-y-10">
        {TENSE_GROUPS.map((group) => {
          const tenses = group.tenses
            .map((k) => TENSES.find((t) => t.key === k))
            .filter(Boolean);
          if (tenses.length === 0) return null;
          return (
            <section key={group.key}>
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-accent mb-3">
                {labels.group_labels[group.key]}
              </h4>
              <div className="space-y-3">
                {tenses.map((t) => {
                  if (!t) return null;
                  const isOpen = openKey === t.key;
                  return (
                    <article
                      key={t.key}
                      className={`rounded-2xl border-l-4 border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] transition-colors ${CATEGORY_TINT[t.category]}`}
                    >
                      <button
                        onClick={() => setOpenKey(isOpen ? null : t.key)}
                        className="w-full flex items-center gap-3 p-4 md:p-5 text-left"
                      >
                        <div className="flex-1 min-w-0">
                          <h5 className="font-display text-xl md:text-2xl tracking-tight">{t.fr}</h5>
                          <p className="text-xs font-mono text-muted truncate mt-0.5">
                            {t.formulaShort}
                          </p>
                        </div>
                        <span
                          className={`text-muted transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        >
                          ▾
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-4 md:px-5 pb-5 pt-0 border-t border-mist dark:border-white/10 space-y-5 text-sm">
                          <div className="pt-4">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
                              {labels.formula_label}
                            </p>
                            <p className="text-ink-soft dark:text-paper/85 font-mono leading-relaxed">
                              {t.formula}
                            </p>
                          </div>

                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-1">
                              {labels.usage_label}
                            </p>
                            <p className="leading-relaxed">{t.usage[lang]}</p>
                          </div>

                          {t.exampleVerb && t.conjugationSample && (
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                                {labels.conjugation_label}: <span className="italic text-accent">{t.exampleVerb}</span>
                              </p>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                                {t.conjugationSample.map((form, i) => (
                                  <span
                                    key={i}
                                    className="font-mono text-xs px-2.5 py-1.5 rounded-lg bg-paper-dim dark:bg-white/[0.04] border border-mist dark:border-white/10"
                                  >
                                    {form}
                                  </span>
                                ))}
                              </div>
                              {onConjugate && (
                                <button
                                  onClick={() => onConjugate(t.exampleVerb ?? 'parler')}
                                  className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                                >
                                  {labels.jump_to_conjugator} <span aria-hidden="true">→</span>
                                </button>
                              )}
                            </div>
                          )}

                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
                              {labels.examples_label}
                            </p>
                            <ul className="space-y-2">
                              {t.examples.map((ex, i) => (
                                <li key={i} className="border-l-2 border-accent/30 pl-3">
                                  <p className="italic text-ink dark:text-paper">{ex.fr}</p>
                                  <p className="text-muted">{ex[lang]}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
