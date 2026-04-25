import { Suspense, lazy, useState } from 'react';
import '../../styles/french-content.css';
import type { AIMode } from '../../data/french/ai';

// Lazy-loaded panels — each ships its own data + dependencies in its own
// chunk, so the initial /french load only includes the shell + tab nav.
const GrammarPanel = lazy(() => import('./GrammarPanel'));
const TopWordsPanel = lazy(() => import('./TopWordsPanel'));
const TensesPanel = lazy(() => import('./TensesPanel'));
const ConjugatorPanel = lazy(() => import('./ConjugatorPanel'));
const VocabPanel = lazy(() => import('./VocabPanel'));
const SpeakingPanel = lazy(() => import('./SpeakingPanel'));
const QuizPanel = lazy(() => import('./QuizPanel'));
const AIBox = lazy(() => import('./AIBox'));

type PanelKey =
  | 'grammar'
  | 'top_words'
  | 'tenses'
  | 'conjugator'
  | 'vocab'
  | 'speaking'
  | 'quiz'
  | 'ai';

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
    irregular_only?: string;
    speak_label?: string;
  };
  tenses: {
    title: string;
    subtitle: string;
    formula_label: string;
    usage_label: string;
    examples_label: string;
    conjugation_label: string;
    group_labels: {
      present: string;
      past: string;
      future: string;
      conditional: string;
      mood: string;
      literary: string;
    };
    jump_to_conjugator: string;
  };
  conjugator: {
    title: string;
    subtitle: string;
    input_label: string;
    input_placeholder: string;
    search_button: string;
    loading: string;
    not_found: string;
    not_found_hint: string;
    suggestions_label: string;
    pronoun_je: string;
    pronoun_tu: string;
    pronoun_il: string;
    pronoun_elle: string;
    pronoun_nous: string;
    pronoun_vous: string;
    pronoun_ils: string;
    pronoun_elles: string;
    pronoun_tu_imp: string;
    pronoun_nous_imp: string;
    pronoun_vous_imp: string;
    tense_present: string;
    tense_passe_compose: string;
    tense_imparfait: string;
    tense_plus_que_parfait: string;
    tense_passe_simple: string;
    tense_passe_recent: string;
    tense_futur_proche: string;
    tense_futur_simple: string;
    tense_futur_anterieur: string;
    tense_conditionnel: string;
    tense_conditionnel_passe: string;
    tense_subjonctif: string;
    tense_imperatif: string;
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

function PanelLoading() {
  return (
    <div className="py-12 text-center text-muted font-mono text-sm">
      <span className="inline-block w-4 h-4 border-2 border-mist dark:border-white/15 border-t-accent rounded-full animate-spin align-middle mr-2"></span>
      Loading…
    </div>
  );
}

export default function MonFrancaisApp({ labels, locale }: Props) {
  const [panel, setPanel] = useState<PanelKey>('grammar');
  const [seedAiText, setSeedAiText] = useState('');
  const [seedConjugatorVerb, setSeedConjugatorVerb] = useState<string | undefined>(undefined);

  const panels: Array<{ key: PanelKey; icon: string }> = [
    { key: 'grammar', icon: '📐' },
    { key: 'top_words', icon: '🏆' },
    { key: 'tenses', icon: '⏱' },
    { key: 'conjugator', icon: '🔁' },
    { key: 'vocab', icon: '📖' },
    { key: 'speaking', icon: '🗣️' },
    { key: 'quiz', icon: '🎯' },
    { key: 'ai', icon: '✨' },
  ];

  function sendToAI(text: string) {
    setSeedAiText(text);
    setPanel('ai');
  }

  function jumpToConjugator(verb: string) {
    setSeedConjugatorVerb(verb);
    setPanel('conjugator');
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

      <Suspense fallback={<PanelLoading />}>
        {panel === 'grammar' && <GrammarPanel locale={locale} labels={labels.grammar} />}
        {panel === 'top_words' && <TopWordsPanel locale={locale} labels={labels.top_words} />}
        {panel === 'tenses' && (
          <TensesPanel locale={locale} labels={labels.tenses} onConjugate={jumpToConjugator} />
        )}
        {panel === 'conjugator' && (
          <ConjugatorPanel locale={locale} labels={labels.conjugator} initialVerb={seedConjugatorVerb} />
        )}
        {panel === 'vocab' && <VocabPanel labels={labels.vocab} />}
        {panel === 'speaking' && <SpeakingPanel labels={labels.speaking} onSendToAI={sendToAI} />}
        {panel === 'quiz' && <QuizPanel locale={locale} labels={labels.quiz} />}
        {panel === 'ai' && <AIBox labels={labels.ai} initialText={seedAiText} />}
      </Suspense>
    </div>
  );
}
