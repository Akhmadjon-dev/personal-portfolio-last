/* Reference data for the French tenses panel.
 * Each entry has a formula, when-to-use note in 3 languages, and 2 examples
 * with translations. The exampleVerb + conjugationSample is shown as a small
 * 6-form table so learners can see endings at a glance.
 */

export type TenseCategory = 'present' | 'past' | 'future' | 'conditional' | 'mood' | 'literary';

export interface TenseExample {
  fr: string;
  en: string;
  ru: string;
  uz: string;
}

export interface TenseInfo {
  key: string;
  fr: string;                     // French name
  category: TenseCategory;
  formula: string;                // human-readable construction rule
  formulaShort: string;
  usage: { en: string; ru: string; uz: string };
  examples: TenseExample[];
  exampleVerb?: string;
  /** 6 forms in this tense: je, tu, il/elle, nous, vous, ils/elles */
  conjugationSample?: string[];
}

export const TENSES: TenseInfo[] = [
  // ── Present ──────────────────────────────────────────────────────
  {
    key: 'present',
    fr: 'Présent',
    category: 'present',
    formula: 'stem + endings: -er → -e/-es/-e/-ons/-ez/-ent · -ir → -is/-is/-it/-issons/-issez/-issent · -re → -s/-s/-/-ons/-ez/-ent',
    formulaShort: 'stem + present endings',
    usage: {
      en: 'Current actions, habits, general truths, and (often) the immediate future.',
      ru: 'Текущие действия, привычки, общие истины и (часто) ближайшее будущее.',
      uz: "Hozirgi harakatlar, odatlar, umumiy haqiqatlar va (ko'pincha) yaqin kelajak.",
    },
    examples: [
      { fr: 'Je parle français.', en: 'I speak French.', ru: 'Я говорю по-французски.', uz: 'Men fransuzcha gapiraman.' },
      { fr: 'Il pleut depuis ce matin.', en: 'It has been raining since this morning.', ru: 'С утра идёт дождь.', uz: "Ertalabdan beri yomg'ir yog'yapti." },
    ],
    exampleVerb: 'parler',
    conjugationSample: ['je parle', 'tu parles', 'il/elle parle', 'nous parlons', 'vous parlez', 'ils/elles parlent'],
  },

  // ── Past ─────────────────────────────────────────────────────────
  {
    key: 'passe_compose',
    fr: 'Passé composé',
    category: 'past',
    formula: 'avoir / être (présent) + participe passé · agreement with être verbs',
    formulaShort: 'aux. (présent) + p.p.',
    usage: {
      en: 'Completed actions in the past — the standard "past tense" of spoken French.',
      ru: 'Завершённые действия в прошлом — основное прошедшее время в разговорной речи.',
      uz: "O'tmishda tugagan harakatlar — og'zaki fransuz tilining asosiy o'tgan zamoni.",
    },
    examples: [
      { fr: "J'ai mangé une pomme.", en: 'I ate an apple.', ru: 'Я съел яблоко.', uz: 'Men olma yedim.' },
      { fr: 'Elle est partie hier.', en: 'She left yesterday.', ru: 'Она уехала вчера.', uz: 'U kecha ketdi.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ["j'ai parlé", 'tu as parlé', 'il/elle a parlé', 'nous avons parlé', 'vous avez parlé', 'ils/elles ont parlé'],
  },
  {
    key: 'imparfait',
    fr: 'Imparfait',
    category: 'past',
    formula: 'nous-stem (drop -ons) + -ais/-ais/-ait/-ions/-iez/-aient',
    formulaShort: 'stem + imparfait endings',
    usage: {
      en: 'Past habits, ongoing past actions, descriptions, "used to" / "was -ing".',
      ru: 'Привычки в прошлом, продолжающиеся действия, описания. Аналог "раньше делал" / "делал в тот момент".',
      uz: "O'tmishdagi odatlar, davom etayotgan harakatlar, tavsiflar. \"Ilgari qilardim\" / \"o'sha paytda qilayotgan edim\".",
    },
    examples: [
      { fr: "Quand j'étais petit, je jouais au foot.", en: 'When I was little, I used to play football.', ru: 'Когда я был маленьким, я играл в футбол.', uz: 'Kichik vaqtimda futbol o\'ynardim.' },
      { fr: 'Il pleuvait quand je suis sorti.', en: 'It was raining when I went out.', ru: 'Шёл дождь, когда я вышел.', uz: 'Men chiqqanimda yomg\'ir yog\'ardi.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ['je parlais', 'tu parlais', 'il/elle parlait', 'nous parlions', 'vous parliez', 'ils/elles parlaient'],
  },
  {
    key: 'plus_que_parfait',
    fr: 'Plus-que-parfait',
    category: 'past',
    formula: 'avoir / être (imparfait) + participe passé',
    formulaShort: 'aux. (imparfait) + p.p.',
    usage: {
      en: 'A past action that happened BEFORE another past action — "had done".',
      ru: 'Действие в прошлом, произошедшее ДО другого действия в прошлом — "сделал к моменту".',
      uz: "O'tmishdagi boshqa harakatdan oldin sodir bo'lgan harakat — \"qilgan edim\".",
    },
    examples: [
      { fr: "Quand je suis arrivé, il était déjà parti.", en: 'When I arrived, he had already left.', ru: 'Когда я пришёл, он уже ушёл.', uz: "Men kelganimda, u allaqachon ketgan edi." },
      { fr: "Elle avait fini ses devoirs avant le dîner.", en: 'She had finished her homework before dinner.', ru: 'Она закончила домашнюю работу до ужина.', uz: 'U kechki ovqatdan oldin uy vazifasini tugatgan edi.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ["j'avais parlé", 'tu avais parlé', 'il/elle avait parlé', 'nous avions parlé', 'vous aviez parlé', 'ils/elles avaient parlé'],
  },
  {
    key: 'passe_recent',
    fr: 'Passé récent',
    category: 'past',
    formula: 'venir (présent) + de + infinitif',
    formulaShort: 'venir de + infinitif',
    usage: {
      en: 'Action that just happened — "just did". Periphrastic, very common in speech.',
      ru: 'Действие, которое только что произошло — "только что сделал". Очень распространено в речи.',
      uz: "Hozirgina sodir bo'lgan harakat — \"endigina qildim\". Nutqda juda keng tarqalgan.",
    },
    examples: [
      { fr: "Je viens de manger.", en: 'I just ate.', ru: 'Я только что поел.', uz: 'Endigina ovqatlandim.' },
      { fr: "Elle vient d'arriver.", en: 'She just arrived.', ru: 'Она только что приехала.', uz: 'U endigina keldi.' },
    ],
  },
  {
    key: 'passe_simple',
    fr: 'Passé simple',
    category: 'literary',
    formula: '-er → -ai/-as/-a/-âmes/-âtes/-èrent · -ir/-re → -is/-is/-it/-îmes/-îtes/-irent · irregulars vary',
    formulaShort: 'stem + passé simple endings',
    usage: {
      en: 'Literary past tense — used in novels, history books, fairy tales. Almost never spoken; recognise it but don\'t use it conversationally.',
      ru: 'Литературное прошедшее время — встречается в романах, истории, сказках. Почти не используется в речи; узнавайте, но не используйте.',
      uz: "Adabiy o'tgan zamon — romanlarda, tarixiy kitoblarda, ertaklarda uchraydi. Nutqda deyarli ishlatilmaydi; tanib oling, lekin ishlatmang.",
    },
    examples: [
      { fr: "Il marcha vers la forêt.", en: 'He walked toward the forest.', ru: 'Он пошёл к лесу.', uz: 'U o\'rmonga qarab yurdi.' },
      { fr: "Elle ouvrit la porte et entra.", en: 'She opened the door and entered.', ru: 'Она открыла дверь и вошла.', uz: 'U eshikni ochdi va ichkariga kirdi.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ['je parlai', 'tu parlas', 'il/elle parla', 'nous parlâmes', 'vous parlâtes', 'ils/elles parlèrent'],
  },

  // ── Future ───────────────────────────────────────────────────────
  {
    key: 'futur_proche',
    fr: 'Futur proche',
    category: 'future',
    formula: 'aller (présent) + infinitif',
    formulaShort: 'aller + infinitif',
    usage: {
      en: 'Imminent or planned future — "going to do". Very common in speech.',
      ru: 'Ближайшее или запланированное будущее — "собираюсь делать". Очень распространено в речи.',
      uz: "Yaqin yoki rejalashtirilgan kelajak — \"qilmoqchiman\". Nutqda juda keng tarqalgan.",
    },
    examples: [
      { fr: "Je vais partir demain.", en: 'I am going to leave tomorrow.', ru: 'Я уеду завтра.', uz: 'Men ertaga ketmoqchiman.' },
      { fr: "Il va pleuvoir ce soir.", en: 'It is going to rain tonight.', ru: 'Сегодня вечером пойдёт дождь.', uz: "Bugun kechqurun yomg'ir yog'adi." },
    ],
  },
  {
    key: 'futur_simple',
    fr: 'Futur simple',
    category: 'future',
    formula: 'infinitif + -ai/-as/-a/-ons/-ez/-ont · drop final -e of -re verbs',
    formulaShort: 'infinitif + futur endings',
    usage: {
      en: 'Future events, predictions, polite requests, promises.',
      ru: 'Будущие события, прогнозы, вежливые просьбы, обещания.',
      uz: 'Kelajakdagi voqealar, bashoratlar, xushmuomala iltimoslar, va\'dalar.',
    },
    examples: [
      { fr: "Je parlerai français un jour.", en: 'I will speak French one day.', ru: 'Однажды я буду говорить по-французски.', uz: 'Bir kuni men fransuzcha gapiraman.' },
      { fr: "Demain, il fera beau.", en: 'Tomorrow it will be nice out.', ru: 'Завтра будет хорошая погода.', uz: 'Ertaga ob-havo yaxshi bo\'ladi.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ['je parlerai', 'tu parleras', 'il/elle parlera', 'nous parlerons', 'vous parlerez', 'ils/elles parleront'],
  },
  {
    key: 'futur_anterieur',
    fr: 'Futur antérieur',
    category: 'future',
    formula: 'avoir / être (futur simple) + participe passé',
    formulaShort: 'aux. (futur simple) + p.p.',
    usage: {
      en: 'Future action that will be completed BEFORE another future action — "will have done".',
      ru: 'Будущее действие, которое завершится ДО другого будущего действия — "сделаю к моменту".',
      uz: "Kelajakdagi boshqa harakatdan oldin tugaydigan harakat — \"qilgan bo'laman\".",
    },
    examples: [
      { fr: "Quand tu arriveras, j'aurai fini.", en: 'When you arrive, I will have finished.', ru: 'Когда ты приедешь, я уже закончу.', uz: 'Sen kelganingda, men allaqachon tugatgan bo\'laman.' },
      { fr: "Dans une heure, ils seront partis.", en: 'In an hour, they will have left.', ru: 'Через час они уже уедут.', uz: 'Bir soatdan keyin ular ketgan bo\'lishadi.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ["j'aurai parlé", 'tu auras parlé', 'il/elle aura parlé', 'nous aurons parlé', 'vous aurez parlé', 'ils/elles auront parlé'],
  },

  // ── Conditional ──────────────────────────────────────────────────
  {
    key: 'conditionnel',
    fr: 'Conditionnel présent',
    category: 'conditional',
    formula: 'futur stem (= infinitif) + imparfait endings (-ais/-ais/-ait/-ions/-iez/-aient)',
    formulaShort: 'futur stem + imparfait endings',
    usage: {
      en: 'Hypothetical actions ("would do"), polite requests, advice ("should"), reported speech for future-in-past.',
      ru: 'Гипотетические действия ("бы сделал"), вежливые просьбы, советы ("следовало бы"), будущее в прошедшем.',
      uz: "Faraziy harakatlar (\"qilardim\"), xushmuomala iltimoslar, maslahatlar, o'tmishdagi kelajak.",
    },
    examples: [
      { fr: "Je voudrais un café, s'il vous plaît.", en: 'I would like a coffee, please.', ru: 'Я бы хотел кофе, пожалуйста.', uz: 'Iltimos, kofe xohlardim.' },
      { fr: "Si j'avais le temps, je viendrais.", en: 'If I had the time, I would come.', ru: 'Если бы у меня было время, я бы пришёл.', uz: 'Vaqtim bo\'lganida, kelardim.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ['je parlerais', 'tu parlerais', 'il/elle parlerait', 'nous parlerions', 'vous parleriez', 'ils/elles parleraient'],
  },
  {
    key: 'conditionnel_passe',
    fr: 'Conditionnel passé',
    category: 'conditional',
    formula: 'avoir / être (conditionnel présent) + participe passé',
    formulaShort: 'aux. (conditionnel) + p.p.',
    usage: {
      en: 'Hypothetical past — "would have done". Regret or alternate past outcomes.',
      ru: 'Гипотетическое прошлое — "сделал бы". Сожаление или альтернативные исходы.',
      uz: "Faraziy o'tgan zamon — \"qilgan bo'lardim\". Afsuslanish yoki muqobil o'tmish.",
    },
    examples: [
      { fr: "J'aurais aimé venir avec toi.", en: 'I would have liked to come with you.', ru: 'Я бы хотел пойти с тобой.', uz: 'Sen bilan kelishni xohlardim.' },
      { fr: "Si j'avais su, je serais resté.", en: 'If I had known, I would have stayed.', ru: 'Если бы я знал, я бы остался.', uz: 'Bilganimda, qolardim.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ["j'aurais parlé", 'tu aurais parlé', 'il/elle aurait parlé', 'nous aurions parlé', 'vous auriez parlé', 'ils/elles auraient parlé'],
  },

  // ── Moods ────────────────────────────────────────────────────────
  {
    key: 'subjonctif',
    fr: 'Subjonctif présent',
    category: 'mood',
    formula: 'ils-stem (drop -ent) + -e/-es/-e/-ions/-iez/-ent · "que" trigger',
    formulaShort: '(que) + stem + subj. endings',
    usage: {
      en: 'Doubt, wish, emotion, necessity, after expressions like "il faut que", "je veux que", "bien que".',
      ru: 'Сомнение, желание, эмоция, необходимость. После выражений "il faut que", "je veux que", "bien que".',
      uz: 'Shubha, xohish, hissiyot, zarurat. "Il faut que", "je veux que", "bien que" iboralaridan keyin.',
    },
    examples: [
      { fr: "Il faut que tu partes maintenant.", en: 'You need to leave now.', ru: 'Тебе нужно уйти сейчас.', uz: 'Sen hozir ketishing kerak.' },
      { fr: "Je veux que tu sois heureux.", en: 'I want you to be happy.', ru: 'Я хочу, чтобы ты был счастлив.', uz: 'Men sen baxtli bo\'lishingni xohlayman.' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ['que je parle', 'que tu parles', "qu'il/elle parle", 'que nous parlions', 'que vous parliez', "qu'ils/elles parlent"],
  },
  {
    key: 'imperatif',
    fr: 'Impératif',
    category: 'mood',
    formula: 'présent forms (no subject pronoun): tu, nous, vous · -er verbs drop final -s in tu form',
    formulaShort: 'présent forms, no subject',
    usage: {
      en: 'Commands, requests, instructions. Three forms only: tu, nous (let\'s), vous.',
      ru: 'Команды, просьбы, инструкции. Только три формы: tu, nous ("давайте"), vous.',
      uz: "Buyruqlar, iltimoslar, ko'rsatmalar. Faqat uchta shakl: tu, nous (\"keling\"), vous.",
    },
    examples: [
      { fr: "Parle plus fort !", en: 'Speak louder!', ru: 'Говори громче!', uz: 'Balandroq gapir!' },
      { fr: "Allons-y !", en: "Let's go!", ru: 'Идём!', uz: 'Ketamiz!' },
    ],
    exampleVerb: 'parler',
    conjugationSample: ['parle', 'parlons', 'parlez'],
  },
];

export const TENSE_GROUPS: Array<{ key: TenseCategory; tenses: string[] }> = [
  { key: 'present', tenses: ['present'] },
  { key: 'past', tenses: ['passe_compose', 'imparfait', 'plus_que_parfait', 'passe_recent'] },
  { key: 'future', tenses: ['futur_proche', 'futur_simple', 'futur_anterieur'] },
  { key: 'conditional', tenses: ['conditionnel', 'conditionnel_passe'] },
  { key: 'mood', tenses: ['subjonctif', 'imperatif'] },
  { key: 'literary', tenses: ['passe_simple'] },
];

export function tenseByKey(key: string): TenseInfo | undefined {
  return TENSES.find((t) => t.key === key);
}
