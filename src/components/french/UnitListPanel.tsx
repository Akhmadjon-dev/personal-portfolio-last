import { useMemo, useRef, useState, useEffect } from 'react';
import type { FrenchUnit } from '../../data/french/types';

interface ParsedUnit {
  id: number;
  title: string;
  meta: string[];
  bodyHtml: string;
}

interface Labels {
  search_placeholder: string;
  no_results: string;
  total_units: string;
  open: string;
  close: string;
}

interface Props {
  units: FrenchUnit[];
  labels: Labels;
  initialOpenId?: number;
  /** Optional: render an extra slot inside an open unit (e.g. an "Analyse with AI" button). */
  renderExtra?: (unit: ParsedUnit) => React.ReactNode;
  /** Selector inside the unit HTML that contains the title (default: h-tag heuristic). */
  titleSelector?: string;
}

function parseUnit(unit: FrenchUnit, titleSelector?: string): ParsedUnit {
  if (typeof window === 'undefined') {
    return { id: unit.id, title: `Unit ${unit.id}`, meta: [], bodyHtml: unit.html };
  }
  const doc = new DOMParser().parseFromString(unit.html, 'text/html');
  // Try common title selectors in order: explicit, sp-unit-title, vb-unit-title, first heading
  const candidates = [titleSelector, '.sp-unit-title', '.vb-unit-title', 'h2', 'h3', 'h4'].filter(
    Boolean,
  ) as string[];
  let titleEl: Element | null = null;
  for (const sel of candidates) {
    titleEl = doc.body.querySelector(sel);
    if (titleEl) break;
  }
  const title = titleEl?.textContent?.trim() || `Unit ${unit.id}`;

  // Strip the unit-header (we replace it with our own header bar).
  doc.body.querySelector('.sp-unit-header')?.remove();
  doc.body.querySelector('.vb-unit-header')?.remove();

  // Pull meta tags (level + theme) for badges.
  const meta: string[] = [];
  doc.body.querySelectorAll('.sp-tag').forEach((el) => {
    const t = el.textContent?.trim();
    if (t) meta.push(t);
  });
  doc.body.querySelectorAll('.vb-count').forEach((el) => el.remove());

  return { id: unit.id, title, meta, bodyHtml: doc.body.innerHTML };
}

export default function UnitListPanel({
  units,
  labels,
  initialOpenId,
  renderExtra,
  titleSelector,
}: Props) {
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<number | null>(initialOpenId ?? null);
  const [parsed, setParsed] = useState<ParsedUnit[] | null>(null);

  useEffect(() => {
    setParsed(units.map((u) => parseUnit(u, titleSelector)));
  }, [units, titleSelector]);

  const haystack = useRef<Map<number, string>>(new Map());
  useEffect(() => {
    if (!parsed) return;
    const m = new Map<number, string>();
    parsed.forEach((u) => {
      // strip tags from bodyHtml for plain-text search
      const div = document.createElement('div');
      div.innerHTML = u.bodyHtml;
      m.set(u.id, `${u.title}\n${div.textContent ?? ''}`.toLowerCase());
    });
    haystack.current = m;
  }, [parsed]);

  const filtered = useMemo(() => {
    if (!parsed) return [];
    const needle = search.trim().toLowerCase();
    if (!needle) return parsed;
    return parsed.filter((u) => haystack.current.get(u.id)?.includes(needle));
  }, [parsed, search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={labels.search_placeholder}
        className="w-full px-5 py-3 rounded-full border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors mb-3"
      />
      <p className="text-xs font-mono text-muted mb-6">
        {labels.total_units}: {filtered.length} / {units.length}
      </p>

      <div className="space-y-3">
        {filtered.length === 0 ? (
          <p className="text-center text-muted py-12">{labels.no_results}</p>
        ) : (
          filtered.map((u) => {
            const isOpen = openId === u.id;
            return (
              <article
                key={u.id}
                className="rounded-2xl border border-mist dark:border-white/10 bg-paper dark:bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : u.id)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-paper-dim dark:hover:bg-white/[0.03] transition-colors"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-ink text-paper dark:bg-paper dark:text-ink font-display flex items-center justify-center">
                    {u.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl tracking-tight">{u.title}</h3>
                    {u.meta.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {u.meta.map((m, i) => (
                          <span
                            key={i}
                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-mist dark:border-white/10 text-muted"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span
                    className={`text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 border-t border-mist dark:border-white/10">
                    <div
                      className="french-content"
                      dangerouslySetInnerHTML={{ __html: u.bodyHtml }}
                    />
                    {renderExtra && <div className="mt-5">{renderExtra(u)}</div>}
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

export type { ParsedUnit };
