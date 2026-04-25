import { useMemo, useState } from 'react';
import { VERBS, verbMetaFor } from '../../data/french/words';

type DisplayLang = 'en' | 'ru' | 'uz';

interface Labels {
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
}

interface Props {
  locale: 'en' | 'ru' | 'uz';
  labels: Labels;
  initialVerb?: string;
}

interface ConjugationResult {
  verb: string;
  pastParticiple: string;
  auxiliary: 'AVOIR' | 'ETRE';
  groups: TenseGroupOutput[];
}

interface TenseGroupOutput {
  tenseKey: string;
  tenseLabel: string;
  forms: ConjugatedForm[];
  isImperative?: boolean;
}

interface ConjugatedForm {
  pronoun: string;
  conjugated: string;
}

const PRONOUN_KEYS: Array<keyof Labels> = [
  'pronoun_je',
  'pronoun_tu',
  'pronoun_il',
  'pronoun_elle',
  'pronoun_nous',
  'pronoun_vous',
  'pronoun_ils',
  'pronoun_elles',
];

// Each pronoun maps to (person index 0-5, gender, number) used by french-verbs.
const PRONOUN_SHAPES: Array<{
  pronoun: 'je' | 'tu' | 'il' | 'elle' | 'nous' | 'vous' | 'ils' | 'elles';
  person: 0 | 1 | 2 | 3 | 4 | 5;
  gender: 'M' | 'F';
  number: 'S' | 'P';
}> = [
  { pronoun: 'je',    person: 0, gender: 'M', number: 'S' },
  { pronoun: 'tu',    person: 1, gender: 'M', number: 'S' },
  { pronoun: 'il',    person: 2, gender: 'M', number: 'S' },
  { pronoun: 'elle',  person: 2, gender: 'F', number: 'S' },
  { pronoun: 'nous',  person: 3, gender: 'M', number: 'P' },
  { pronoun: 'vous',  person: 4, gender: 'M', number: 'P' },
  { pronoun: 'ils',   person: 5, gender: 'M', number: 'P' },
  { pronoun: 'elles', person: 5, gender: 'F', number: 'P' },
];

const VOWEL_RE = /^[aeiouéèêëâàîïôöùûüœhAEIOUÉÈÊËÂÀÎÏÔÖÙÛÜŒH]/;

function elide(prefix: string, form: string): string {
  if (VOWEL_RE.test(form)) {
    if (prefix === 'je') return `j'${form}`;
    if (prefix === 'que je') return `que j'${form}`;
    if (prefix === 'que tu') return `que tu ${form}`;
    if (prefix === 'que il' || prefix === 'qu\'il') return `qu'il ${form}`;
    if (prefix === 'que elle' || prefix === 'qu\'elle') return `qu'elle ${form}`;
    if (prefix === 'que ils' || prefix === 'qu\'ils') return `qu'ils ${form}`;
    if (prefix === 'que elles' || prefix === 'qu\'elles') return `qu'elles ${form}`;
    if (prefix === 'que nous') return `que nous ${form}`;
    if (prefix === 'que vous') return `que vous ${form}`;
    if (prefix === 'de') return `d'${form}`;
  }
  return `${prefix} ${form}`;
}

function pronounWithSubjunctive(p: string): string {
  // "que je", "que tu", "qu'il", "qu'elle", "que nous", "que vous", "qu'ils", "qu'elles"
  if (p === 'il' || p === 'elle' || p === 'ils' || p === 'elles') return `qu'${p}`;
  return `que ${p}`;
}

let lefffPromise: Promise<unknown> | null = null;
let verbsLibPromise: Promise<unknown> | null = null;

async function loadConjugator() {
  if (!verbsLibPromise) verbsLibPromise = import('french-verbs');
  if (!lefffPromise) lefffPromise = import('french-verbs-lefff/dist/conjugations.json');
  const [lib, dataMod] = await Promise.all([verbsLibPromise, lefffPromise]);
  return {
    lib: lib as typeof import('french-verbs'),
    data: ((dataMod as { default?: unknown }).default ?? dataMod) as Record<string, unknown>,
  };
}

async function conjugateVerb(verb: string, labels: Labels): Promise<ConjugationResult | null> {
  const { lib, data } = await loadConjugator();
  if (!data[verb]) return null;

  const meta = verbMetaFor(verb);
  const auxiliary: 'AVOIR' | 'ETRE' = lib.alwaysAuxEtre(verb) || meta?.auxiliary === 'être' ? 'ETRE' : 'AVOIR';

  function getOne(tense: string, shape: (typeof PRONOUN_SHAPES)[number], composed: boolean): string {
    const opts = composed
      ? { aux: auxiliary, agreeGender: shape.gender, agreeNumber: shape.number }
      : {};
    return lib.getConjugation(
      data as never,
      verb,
      tense as never,
      shape.person,
      opts as never,
      false,
      undefined,
      undefined,
      'Act',
    );
  }

  function buildSimple(tense: string): ConjugatedForm[] {
    return PRONOUN_SHAPES.map((shape) => {
      const form = getOne(tense, shape, false);
      return { pronoun: labels[`pronoun_${shape.pronoun}` as keyof Labels], conjugated: elide(shape.pronoun, form) };
    });
  }

  function buildCompound(tense: string): ConjugatedForm[] {
    return PRONOUN_SHAPES.map((shape) => {
      const form = getOne(tense, shape, true);
      return { pronoun: labels[`pronoun_${shape.pronoun}` as keyof Labels], conjugated: elide(shape.pronoun, form) };
    });
  }

  function buildSubjunctive(): ConjugatedForm[] {
    return PRONOUN_SHAPES.map((shape) => {
      const form = getOne('SUBJONCTIF_PRESENT', shape, false);
      const pronounWithQue = pronounWithSubjunctive(shape.pronoun);
      // pronoun_je → "que j'..." pattern handled by elide
      let display: string;
      if (pronounWithQue.startsWith("qu'")) {
        // qu'il + form, qu'elle + form, etc. — no extra space if form starts with vowel? Actually "qu'il" is already eliding.
        display = `${pronounWithQue} ${form}`;
      } else if (pronounWithQue === 'que je' && VOWEL_RE.test(form)) {
        display = `que j'${form}`;
      } else {
        display = `${pronounWithQue} ${form}`;
      }
      return { pronoun: labels[`pronoun_${shape.pronoun}` as keyof Labels], conjugated: display };
    });
  }

  function buildImperative(): ConjugatedForm[] {
    const tu = lib.getConjugation(data as never, verb, 'IMPERATIF_PRESENT' as never, 1, {} as never, false, undefined, undefined, 'Act');
    const nous = lib.getConjugation(data as never, verb, 'IMPERATIF_PRESENT' as never, 3, {} as never, false, undefined, undefined, 'Act');
    const vous = lib.getConjugation(data as never, verb, 'IMPERATIF_PRESENT' as never, 4, {} as never, false, undefined, undefined, 'Act');
    return [
      { pronoun: labels.pronoun_tu_imp, conjugated: tu ? `${tu} !` : '—' },
      { pronoun: labels.pronoun_nous_imp, conjugated: nous ? `${nous} !` : '—' },
      { pronoun: labels.pronoun_vous_imp, conjugated: vous ? `${vous} !` : '—' },
    ];
  }

  function buildPeriphrastic(prefix: string, infinitive: string, helperVerb: 'aller' | 'venir', usePreposition: boolean): ConjugatedForm[] {
    return PRONOUN_SHAPES.map((shape) => {
      const helper = lib.getConjugation(data as never, helperVerb, 'PRESENT' as never, shape.person, {} as never, false, undefined, undefined, 'Act');
      const helperWithPronoun = elide(shape.pronoun, helper);
      const tail = usePreposition ? `de ${infinitive}` : infinitive;
      // For "venir de + vowel-starting infinitive", "de" elides to "d'"
      const tailFormatted = usePreposition && VOWEL_RE.test(infinitive) ? `d'${infinitive}` : tail;
      return { pronoun: labels[`pronoun_${shape.pronoun}` as keyof Labels], conjugated: `${helperWithPronoun} ${tailFormatted}` };
    });
  }

  const groups: TenseGroupOutput[] = [
    { tenseKey: 'present', tenseLabel: labels.tense_present, forms: buildSimple('PRESENT') },
    { tenseKey: 'passe_compose', tenseLabel: labels.tense_passe_compose, forms: buildCompound('PASSE_COMPOSE') },
    { tenseKey: 'futur_simple', tenseLabel: labels.tense_futur_simple, forms: buildSimple('FUTUR') },
    { tenseKey: 'futur_proche', tenseLabel: labels.tense_futur_proche, forms: buildPeriphrastic('aller', verb, 'aller', false) },
    { tenseKey: 'imparfait', tenseLabel: labels.tense_imparfait, forms: buildSimple('IMPARFAIT') },
    { tenseKey: 'imperatif', tenseLabel: labels.tense_imperatif, forms: buildImperative(), isImperative: true },
    { tenseKey: 'plus_que_parfait', tenseLabel: labels.tense_plus_que_parfait, forms: buildCompound('PLUS_QUE_PARFAIT') },
    { tenseKey: 'futur_anterieur', tenseLabel: labels.tense_futur_anterieur, forms: buildCompound('FUTUR_ANTERIEUR') },
    { tenseKey: 'passe_recent', tenseLabel: labels.tense_passe_recent, forms: buildPeriphrastic('venir', verb, 'venir', true) },
    { tenseKey: 'conditionnel', tenseLabel: labels.tense_conditionnel, forms: buildSimple('CONDITIONNEL_PRESENT') },
    { tenseKey: 'conditionnel_passe', tenseLabel: labels.tense_conditionnel_passe, forms: buildCompound('CONDITIONNEL_PASSE_1') },
    { tenseKey: 'subjonctif', tenseLabel: labels.tense_subjonctif, forms: buildSubjunctive() },
    { tenseKey: 'passe_simple', tenseLabel: labels.tense_passe_simple, forms: buildSimple('PASSE_SIMPLE') },
  ];

  return {
    verb,
    pastParticiple: meta?.pastParticiple ?? '',
    auxiliary,
    groups,
  };
}

export default function ConjugatorPanel({ labels, initialVerb }: Props) {
  const [input, setInput] = useState(initialVerb ?? '');
  const [verb, setVerb] = useState(initialVerb ?? '');
  const [result, setResult] = useState<ConjugationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const suggestions = useMemo(() => VERBS.slice(0, 30).map((v) => v.fr), []);

  async function run(v: string) {
    if (!v.trim()) return;
    const trimmed = v.trim().toLowerCase();
    setVerb(trimmed);
    setResult(null);
    setNotFound(false);
    setLoading(true);
    try {
      const r = await conjugateVerb(trimmed, labels);
      if (!r) setNotFound(true);
      setResult(r);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mb-8 max-w-3xl">
        <h3 className="font-display text-2xl mb-2">{labels.title}</h3>
        <p className="text-muted">{labels.subtitle}</p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          run(input);
        }}
        className="flex flex-col sm:flex-row gap-3 mb-5"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={labels.input_placeholder}
          aria-label={labels.input_label}
          className="flex-1 px-5 py-3 rounded-full border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors font-display text-lg"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? labels.loading : labels.search_button}
          {!loading && <span aria-hidden="true">→</span>}
        </button>
      </form>

      {!result && !loading && !notFound && (
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-3">
            {labels.suggestions_label}
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setInput(s);
                  run(s);
                }}
                className="px-3 py-1 rounded-full border border-mist dark:border-white/10 text-sm text-muted hover:text-accent hover:border-accent transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {notFound && (
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 mb-6">
          <p className="font-medium mb-1">⚠ {labels.not_found}: <span className="italic">{verb}</span></p>
          <p className="text-sm text-muted">{labels.not_found_hint}</p>
        </div>
      )}

      {result && (
        <div className="space-y-8">
          <header className="rounded-2xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-1">Verbe</p>
            <h2 className="font-display text-4xl tracking-tight">{result.verb}</h2>
            {result.pastParticiple && (
              <p className="mt-2 text-sm font-mono text-muted">
                p.p. <span className="text-ink dark:text-paper italic">{result.pastParticiple}</span>
                {' · '}
                aux. <span className="text-ink dark:text-paper">{result.auxiliary.toLowerCase()}</span>
              </p>
            )}
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {result.groups.map((g) => (
              <article
                key={g.tenseKey}
                className="rounded-2xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] overflow-hidden"
              >
                <header className="px-4 py-3 bg-paper-dim dark:bg-white/[0.04] border-b border-mist dark:border-white/10">
                  <h4 className="font-display text-lg tracking-tight">{g.tenseLabel}</h4>
                </header>
                <table className="w-full text-sm">
                  <tbody>
                    {g.forms.map((f, i) => (
                      <tr
                        key={i}
                        className={i < g.forms.length - 1 ? 'border-b border-mist dark:border-white/[0.06]' : ''}
                      >
                        <td className="px-4 py-2 font-mono text-xs text-muted w-1/3 align-top">{f.pronoun}</td>
                        <td className="px-4 py-2 font-display italic">{f.conjugated || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export { conjugateVerb };
