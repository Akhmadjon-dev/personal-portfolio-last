export type AIMode = 'summarize' | 'explain' | 'translate' | 'vocab' | 'dialogue';

type Builder = (text: string, extra: string) => string;

export const AI_PROMPTS: Record<AIMode, Builder> = {
  summarize: (text, extra) =>
    `You are a helpful French teacher assistant. Provide a clear English summary of the following French text. Note key vocabulary and grammar structures.\n${extra ? `Additional focus: ${extra}\n` : ''}\nFrench text:\n${text}`,
  explain: (text, extra) =>
    `You are a French grammar expert. Analyze this French text and explain all notable grammar structures in clear English, organized by grammar point.\n${extra ? `Additional focus: ${extra}\n` : ''}\nFrench text:\n${text}`,
  translate: (text, extra) =>
    `Translate the following French text into natural English, then note any interesting idiomatic expressions or vocabulary.\n${extra ? `Additional note: ${extra}\n` : ''}\nFrench text:\n${text}`,
  vocab: (text, extra) =>
    `Extract the most important vocabulary from this French text. For each: French form, English meaning, grammatical category, short usage example.\n${extra ? `Additional focus: ${extra}\n` : ''}\nFrench text:\n${text}`,
  dialogue: (text, extra) =>
    `Analyze this French dialogue: (1) what the conversation is about, (2) key expressions, (3) register/tone, (4) cultural notes.\n${extra ? `Additional focus: ${extra}\n` : ''}\nFrench text:\n${text}`,
};

export const AI_MODE_META: Record<AIMode, { icon: string }> = {
  summarize: { icon: '📝' },
  explain: { icon: '🔍' },
  translate: { icon: '🌐' },
  vocab: { icon: '📚' },
  dialogue: { icon: '🎙️' },
};

export const ANTHROPIC_KEY_STORAGE = 'anthropic_key';

export interface CallAIParams {
  apiKey: string;
  mode: AIMode;
  text: string;
  extra?: string;
  model?: string;
  signal?: AbortSignal;
}

export async function callAnthropic({
  apiKey,
  mode,
  text,
  extra = '',
  model = 'claude-sonnet-4-5',
  signal,
}: CallAIParams): Promise<string> {
  const prompt = AI_PROMPTS[mode](text, extra);
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model,
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    }),
    signal,
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error.message);
  return data.content[0].text as string;
}
