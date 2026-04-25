import { useEffect, useState } from 'react';
import {
  AI_MODE_META,
  ANTHROPIC_KEY_STORAGE,
  callAnthropic,
  type AIMode,
} from '../../data/french/ai';

interface Labels {
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
}

interface Props {
  labels: Labels;
  initialMode?: AIMode;
  initialText?: string;
}

export default function AIBox({ labels, initialMode = 'summarize', initialText = '' }: Props) {
  const [mode, setMode] = useState<AIMode>(initialMode);
  const [text, setText] = useState(initialText);
  const [extra, setExtra] = useState('');
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [keySaved, setKeySaved] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ANTHROPIC_KEY_STORAGE);
      if (saved) setApiKey(saved);
    } catch {
      // ignore
    }
  }, []);

  function saveKey() {
    const trimmed = apiKey.trim();
    if (!trimmed) return;
    try {
      localStorage.setItem(ANTHROPIC_KEY_STORAGE, trimmed);
      setKeySaved(true);
      setTimeout(() => setKeySaved(false), 1800);
    } catch {
      // ignore
    }
  }

  async function run() {
    setError(null);
    setResult(null);
    if (!text.trim()) {
      setError('empty');
      return;
    }
    const key = apiKey.trim() || localStorage.getItem(ANTHROPIC_KEY_STORAGE) || '';
    if (!key) {
      setError('no_key');
      return;
    }
    setRunning(true);
    try {
      const out = await callAnthropic({ apiKey: key, mode, text, extra });
      setResult(out);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setRunning(false);
    }
  }

  function copyResult() {
    if (!result) return;
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  const modes: AIMode[] = ['summarize', 'explain', 'translate', 'vocab', 'dialogue'];

  return (
    <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
      <div>
        <h3 className="font-display text-2xl mb-2">{labels.title}</h3>
        <p className="text-muted mb-6">{labels.body}</p>

        <label className="block font-mono text-[11px] uppercase tracking-widest text-muted mb-2">
          {labels.mode_label}
        </label>
        <div className="flex flex-wrap gap-2 mb-5">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition-colors ${
                mode === m
                  ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                  : 'border-mist dark:border-white/10 text-muted hover:text-ink dark:hover:text-paper'
              }`}
            >
              <span>{AI_MODE_META[m].icon}</span>
              <span>{labels.modes[m]}</span>
            </button>
          ))}
        </div>

        <label className="block font-mono text-[11px] uppercase tracking-widest text-muted mb-2">
          {labels.text_label}
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={7}
          placeholder={labels.text_placeholder}
          className="w-full px-4 py-3 rounded-xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 mb-4"
        />

        <label className="block font-mono text-[11px] uppercase tracking-widest text-muted mb-2">
          {labels.extra_label}
        </label>
        <input
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          placeholder={labels.extra_placeholder}
          className="w-full px-4 py-3 rounded-xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 mb-5"
        />

        <button
          onClick={run}
          disabled={running}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {running ? labels.running : labels.run} {!running && <span aria-hidden="true">→</span>}
        </button>

        {error === 'empty' && (
          <p className="mt-3 text-sm text-accent">⚠ {labels.text_placeholder}</p>
        )}
        {error === 'no_key' && <p className="mt-3 text-sm text-accent">⚠ {labels.api_notice}</p>}
        {error && error !== 'empty' && error !== 'no_key' && (
          <p className="mt-3 text-sm text-accent">{error}</p>
        )}

        {result && (
          <div className="mt-6 rounded-xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02]">
            <header className="flex items-center justify-between p-3 px-4 border-b border-mist dark:border-white/10">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {labels.result_label}
              </span>
              <button
                onClick={copyResult}
                className="text-xs px-3 py-1 rounded-full border border-mist dark:border-white/10 hover:border-accent transition-colors"
              >
                {copied ? labels.copied : labels.copy}
              </button>
            </header>
            <div
              className="p-4 text-sm leading-relaxed whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: result
                  .replace(/\n\n/g, '<br><br>')
                  .replace(/\n/g, '<br>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>'),
              }}
            />
          </div>
        )}
      </div>

      <aside className="md:sticky md:top-24 self-start">
        <div className="rounded-xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] p-5">
          <h4 className="font-display text-lg mb-1">🔑 {labels.api_key_label}</h4>
          <p className="text-xs text-muted mb-3">
            {labels.api_key_get}{' '}
            <a
              href="https://console.anthropic.com"
              target="_blank"
              rel="noopener"
              className="text-accent hover:underline"
            >
              {labels.api_key_url_label}
            </a>
            .
          </p>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={labels.api_key_placeholder}
            className="w-full px-3 py-2 rounded-lg border border-mist dark:border-white/10 bg-paper-dim dark:bg-white/[0.04] focus:border-accent focus:outline-none text-sm font-mono mb-3"
          />
          <button
            onClick={saveKey}
            className="w-full px-4 py-2 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {labels.api_key_save}
          </button>
          {keySaved && <p className="mt-2 text-xs text-success font-mono">✓ {labels.api_key_saved}</p>}
        </div>
      </aside>
    </div>
  );
}
