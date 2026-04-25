import UnitListPanel from './UnitListPanel';
import { VOCAB_UNITS } from '../../data/french/vocab';

interface Labels {
  search_placeholder: string;
  no_results: string;
  total_units: string;
  open: string;
  close: string;
}

export default function VocabPanel({ labels }: { labels: Labels }) {
  return <UnitListPanel units={VOCAB_UNITS} labels={labels} titleSelector=".vb-unit-title" />;
}
