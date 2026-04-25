import { useState } from 'react';
import '../../styles/french-content.css';
import GrammarPanel from './GrammarPanel';
import UnitListPanel from './UnitListPanel';
import AIBox from './AIBox';
import TopWordsPanel from './TopWordsPanel';
import QuizPanel from './QuizPanel';
import { GRAMMAR, GRAMMAR_UZ } from '../../data/french/grammar';
import { VOCAB_UNITS } from '../../data/french/vocab';
import { SPEAKING_UNITS } from '../../data/french/speaking';
import type { AIMode } from '../../data/french/ai';

type PanelKey = 'grammar' | 'top_words' | 'vocab' | 'speaking' | 'quiz' | 'ai';

interface CategoryLabels {
  verb: string;
  adverb: string;
  adjective: string;
  noun: string;
  connector: string;
  phrase: string;
}

interface FrenchLabels {
  hero_eyebrow: string;
  hero_title: string;
  hero_subtitle: string;
  panels: Record<PanelKey, string>;
  panel_descriptions: Record<PanelKey, string>;
  grammar: {
    search_placeholder: string;
    diff: string;
    topic: string;
    source: string;
    no_results: string;
    total: string;
    back_to_list: string;
  };
  vocab: {
    search_placeholder: string;
    no_results: string;
    total_units: string;
    open: string;
    close: string;
  };
  speaking: {
    search_placeholder: string;
    no_results: string;
    total_units: string;
    open: string;
    close: string;
    analyse_with_ai: string;
  };
  top_words: {
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
  };
  quiz: {
    title: string;
    subtitle: string;
    pick_category: string;
    pick_mode: string;
    mode_fr_to_x: string;
    mode_x_to_fr: string;
    start: string;
    question_progress: string;
    score: string;
    what_does_it_mean: string;
    pick_french: string;
    next: string;
    finish: string;
    result_score: string;
    best: string;
    retry_missed: string;
    play_again: string;
    pick_another: string;
    no_missed: string;
    category_labels: CategoryLabels;
  };
  ai: {
    title: string;
    body: string;
    mode_label: string;
    modes: Record<AIMode, string>;
    text_label: string;
    text_placeholder: string;
    extra_label: string;
    extra_placeholder: string;
    run: string;
    running: string;
    result_label: string;
    copy: string;
    copied: string;
    api_notice: string;
    api_key_label: string;
    api_key_placeholder: string;
    api_key_save: string;
    api_key_saved: string;
    api_key_get: string;
    api_key_url_label: string;
  };
}

interface Props {
  labels: FrenchLabels;
  locale: 'en' | 'ru' | 'uz';
}

export default function MonFrancaisApp({ labels, locale }: Props) {
  const [panel, setPanel] = useState<PanelKey>('grammar');
  const [seedAiText, setSeedAiText] = useState('');

  const grammarData = locale === 'uz' ? GRAMMAR_UZ : GRAMMAR;

  const panels: Array<{ key: PanelKey; icon: string }> = [
    { key: 'grammar', icon: '📐' },
    { key: 'top_words', icon: '🏆' },
    { key: 'vocab', icon: '📖' },
    { key: 'speaking', icon: '🗣️' },
    { key: 'quiz', icon: '🎯' },
    { key: 'ai', icon: '✨' },
  ];

  function sendToAI(text: string) {
    setSeedAiText(text);
    setPanel('ai');
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
      <header className="pt-10 md:pt-16 pb-8 md:pb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
          {labels.hero_eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-4">
          {labels.hero_title}
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed">{labels.hero_subtitle}</p>
      </header>

      <nav className="sticky top-16 z-30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 mb-6 bg-paper/85 dark:bg-[#0F0F10]/85 backdrop-blur border-y border-mist dark:border-white/5 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {panels.map(({ key, icon }) => {
            const active = panel === key;
            return (
              <button
                key={key}
                onClick={() => setPanel(key)}
                className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${
                  active
                    ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                    : 'border-mist dark:border-white/10 text-muted hover:text-ink dark:hover:text-paper hover:border-ink/30'
                }`}
              >
                <span aria-hidden="true">{icon}</span>
                <span>{labels.panels[key]}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <p className="text-sm text-muted mb-6 md:mb-8 max-w-2xl">{labels.panel_descriptions[panel]}</p>

      {panel === 'grammar' && (
        <GrammarPanel
          data={grammarData}
          labels={labels.grammar}
          storageKey={`mon-francais:${locale}:grammar`}
        />
      )}

      {panel === 'top_words' && <TopWordsPanel locale={locale} labels={labels.top_words} />}

      {panel === 'vocab' && (
        <UnitListPanel
          units={VOCAB_UNITS}
          labels={labels.vocab}
          titleSelector=".vb-unit-title"
        />
      )}

      {panel === 'speaking' && (
        <UnitListPanel
          units={SPEAKING_UNITS}
          labels={labels.speaking}
          titleSelector=".sp-unit-title"
          renderExtra={(unit) => (
            <button
              onClick={() => {
                const div = document.createElement('div');
                div.innerHTML = unit.bodyHtml;
                const fr: string[] = [];
                div.querySelectorAll('.sp-fr').forEach((el) => {
                  const text = el.textContent?.trim();
                  if (text) fr.push(text);
                });
                sendToAI(fr.join('\n'));
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-paper text-sm font-medium hover:opacity-90 transition-opacity"
            >
              ✨ {labels.speaking.analyse_with_ai}
            </button>
          )}
        />
      )}

      {panel === 'quiz' && <QuizPanel locale={locale} labels={labels.quiz} />}

      {panel === 'ai' && <AIBox labels={labels.ai} initialText={seedAiText} />}
    </div>
  );
}
