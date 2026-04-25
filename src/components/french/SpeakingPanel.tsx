import UnitListPanel, { type ParsedUnit } from './UnitListPanel';
import { SPEAKING_UNITS } from '../../data/french/speaking';

interface Labels {
  search_placeholder: string;
  no_results: string;
  total_units: string;
  open: string;
  close: string;
  analyse_with_ai: string;
}

interface Props {
  labels: Labels;
  onSendToAI: (text: string) => void;
}

export default function SpeakingPanel({ labels, onSendToAI }: Props) {
  return (
    <UnitListPanel
      units={SPEAKING_UNITS}
      labels={labels}
      titleSelector=".sp-unit-title"
      renderExtra={(unit: ParsedUnit) => (
        <button
          onClick={() => {
            const div = document.createElement('div');
            div.innerHTML = unit.bodyHtml;
            const fr: string[] = [];
            div.querySelectorAll('.sp-fr').forEach((el) => {
              const text = el.textContent?.trim();
              if (text) fr.push(text);
            });
            onSendToAI(fr.join('\n'));
          }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-paper text-sm font-medium hover:opacity-90 transition-opacity"
        >
          ✨ {labels.analyse_with_ai}
        </button>
      )}
    />
  );
}
