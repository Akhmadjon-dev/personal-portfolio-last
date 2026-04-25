import { useState } from 'react';

type Status = 'idle' | 'sending' | 'ok' | 'err';

interface Labels {
  fields: { name: string; email: string; subject: string; message: string };
  send: string;
  sending: string;
  success_title: string;
  success_body: string;
  error_title: string;
  error_body: string;
}

interface Props {
  accessKey: string;
  labels: Labels;
}

export default function ContactForm({ accessKey, labels }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('access_key', accessKey);
    data.set('from_name', 'ahmadjon.uz contact form');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('ok');
        form.reset();
      } else {
        setError(json.message || 'Unknown error');
        setStatus('err');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error');
      setStatus('err');
    }
  }

  if (status === 'ok') {
    return (
      <div className="rounded-[var(--radius-card)] border border-success/30 bg-success/5 p-8 text-center">
        <div className="text-3xl mb-3" aria-hidden="true">✓</div>
        <h3 className="font-display text-2xl mb-2">{labels.success_title}</h3>
        <p className="text-muted">{labels.success_body}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Input name="name" placeholder={labels.fields.name} required />
        <Input name="email" type="email" placeholder={labels.fields.email} required />
      </div>
      <Input name="subject" placeholder={labels.fields.subject} />
      <Textarea name="message" placeholder={labels.fields.message} required rows={5} />

      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? labels.sending : labels.send}
        {status !== 'sending' && <span aria-hidden="true">→</span>}
      </button>

      {status === 'err' && (
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm">
          <strong className="block mb-1">{labels.error_title}</strong>
          <span className="text-muted">{labels.error_body}</span>
          {error && <code className="block mt-2 text-xs text-muted font-mono">{error}</code>}
        </div>
      )}
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors text-ink dark:text-paper placeholder:text-muted"
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors text-ink dark:text-paper placeholder:text-muted resize-y"
    />
  );
}
