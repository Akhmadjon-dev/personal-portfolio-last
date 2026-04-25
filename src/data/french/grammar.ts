import type { GrammarTopic, GrammarUzMap } from './types';

export const GRAMMAR: GrammarTopic[] = [
  // ══════════════════════════════════════════════════════
  // INTERMEDIAIRE BOOK — A2/B1 FOUNDATIONS
  // ══════════════════════════════════════════════════════
  {
    id: 1,
    title: "Le Verbe ÊTRE — Dialogue & Bases",
    diff: "A1", topic: "Verbs", source: "Inter",
    preview: "Conjugation of être, subject pronouns, à/de/chez, basic dialogue patterns.",
    content: `
<h3>Conjugaison complète</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Être</th><th>Exemple</th></tr>
  <tr><td>Je</td><td class="form-cell">suis</td><td class="fr-cell">Je suis français.</td></tr>
  <tr><td>Tu</td><td class="form-cell">es</td><td class="fr-cell">Tu es américain.</td></tr>
  <tr><td>Il / Elle / On</td><td class="form-cell">est</td><td class="fr-cell">Elle est à Paris.</td></tr>
  <tr><td>Nous</td><td class="form-cell">sommes</td><td class="fr-cell">Nous sommes en vacances.</td></tr>
  <tr><td>Vous</td><td class="form-cell">êtes</td><td class="fr-cell">Vous êtes de Madrid ?</td></tr>
  <tr><td>Ils / Elles</td><td class="form-cell">sont</td><td class="fr-cell">Ils sont de Londres.</td></tr>
</table>

<h3>Être aux autres temps</h3>
<table class="grammar-table">
  <tr><th>Temps</th><th>Je</th><th>Tu</th><th>Il/Elle</th><th>Nous</th><th>Vous</th><th>Ils/Elles</th></tr>
  <tr><td>Passé composé</td><td class="form-cell">ai été</td><td class="form-cell">as été</td><td class="form-cell">a été</td><td class="form-cell">avons été</td><td class="form-cell">avez été</td><td class="form-cell">ont été</td></tr>
  <tr><td>Imparfait</td><td class="form-cell">étais</td><td class="form-cell">étais</td><td class="form-cell">était</td><td class="form-cell">étions</td><td class="form-cell">étiez</td><td class="form-cell">étaient</td></tr>
  <tr><td>Futur simple</td><td class="form-cell">serai</td><td class="form-cell">seras</td><td class="form-cell">sera</td><td class="form-cell">serons</td><td class="form-cell">serez</td><td class="form-cell">seront</td></tr>
  <tr><td>Conditionnel</td><td class="form-cell">serais</td><td class="form-cell">serais</td><td class="form-cell">serait</td><td class="form-cell">serions</td><td class="form-cell">seriez</td><td class="form-cell">seraient</td></tr>
  <tr><td>Subjonctif</td><td class="form-cell">sois</td><td class="form-cell">sois</td><td class="form-cell">soit</td><td class="form-cell">soyons</td><td class="form-cell">soyez</td><td class="form-cell">soient</td></tr>
</table>

<h3>Le dialogue de base : JE et VOUS</h3>
<p><strong>« JE »</strong> et <strong>« VOUS »</strong> sont les pronoms de base du dialogue :</p>
<div class="example-box"><div class="fr">– Vous êtes de Paris, monsieur Ricard ?<br>– Non, je suis de Marseille.</div></div>

<h3>Les usages principaux de ÊTRE</h3>
<table class="grammar-table">
  <tr><th>Usage</th><th>Exemple</th><th>Traduction</th></tr>
  <tr><td>Identité / profession</td><td class="fr-cell">Je suis médecin. Elle est avocate.</td><td class="en-cell">I'm a doctor. She's a lawyer.</td></tr>
  <tr><td>Nationalité</td><td class="fr-cell">Nous sommes espagnols.</td><td class="en-cell">We are Spanish.</td></tr>
  <tr><td>État / sentiment</td><td class="fr-cell">Tu es fatigué ? Il est content.</td><td class="en-cell">Are you tired? He is happy.</td></tr>
  <tr><td>Lieu (être à/en/au)</td><td class="fr-cell">Je suis à Paris. Elle est en France.</td><td class="en-cell">I'm in Paris. She's in France.</td></tr>
  <tr><td>Date / heure</td><td class="fr-cell">Nous sommes le 15 mars. Il est 9 heures.</td><td class="en-cell">It's March 15. It's 9 o'clock.</td></tr>
  <tr><td>Auxiliaire (passé composé)</td><td class="fr-cell">Elle est partie hier.</td><td class="en-cell">She left yesterday.</td></tr>
  <tr><td>Voix passive</td><td class="fr-cell">Le livre est lu par les étudiants.</td><td class="en-cell">The book is read by the students.</td></tr>
</table>

<h3>Nationalités fréquentes</h3>
<table class="grammar-table">
  <tr><th>Masculin</th><th>Féminin</th><th>Pays</th></tr>
  <tr><td class="fr-cell">anglais</td><td class="fr-cell">anglaise</td><td>Angleterre</td></tr>
  <tr><td class="fr-cell">français</td><td class="fr-cell">française</td><td>France</td></tr>
  <tr><td class="fr-cell">allemand</td><td class="fr-cell">allemande</td><td>Allemagne</td></tr>
  <tr><td class="fr-cell">japonais</td><td class="fr-cell">japonaise</td><td>Japon</td></tr>
  <tr><td class="fr-cell">brésilien</td><td class="fr-cell">brésilienne</td><td>Brésil</td></tr>
  <tr><td class="fr-cell">italien</td><td class="fr-cell">italienne</td><td>Italie</td></tr>
  <tr><td class="fr-cell">américain</td><td class="fr-cell">américaine</td><td>États-Unis</td></tr>
  <tr><td class="fr-cell">espagnol</td><td class="fr-cell">espagnole</td><td>Espagne</td></tr>
  <tr><td class="fr-cell">chinois</td><td class="fr-cell">chinoise</td><td>Chine</td></tr>
  <tr><td class="fr-cell">russe</td><td class="fr-cell">russe</td><td>Russie</td></tr>
  <tr><td class="fr-cell">turc</td><td class="fr-cell">turque</td><td>Turquie</td></tr>
  <tr><td class="fr-cell">grec</td><td class="fr-cell">grecque</td><td>Grèce</td></tr>
</table>
<div class="tip-box"><strong>💡 Règles :</strong> Les nationalités en <strong>-ais, -ois</strong> → fém. <strong>-aise, -oise</strong>. En <strong>-ien</strong> → <strong>-ienne</strong>. En <strong>-ain</strong> → <strong>-aine</strong>. Terminés par <strong>-e</strong> → identiques (russe/russe).</div>

<h3>À, DE, CHEZ — prépositions de lieu</h3>
<table class="grammar-table">
  <tr><th>Préposition</th><th>Usage</th><th>Exemple</th></tr>
  <tr><td class="form-cell">à</td><td>Lieu où on est (ville)</td><td class="fr-cell">Je suis à Berlin. / Je suis à l'hôtel.</td></tr>
  <tr><td class="form-cell">de</td><td>Ville d'origine</td><td class="fr-cell">Je suis de Rome. / Je viens de Lyon.</td></tr>
  <tr><td class="form-cell">chez</td><td>Chez une personne</td><td class="fr-cell">Je suis chez Pierre / chez moi / chez le docteur.</td></tr>
  <tr><td class="form-cell">en</td><td>Pays féminin / continent</td><td class="fr-cell">Je suis en France / en Europe / en Asie.</td></tr>
  <tr><td class="form-cell">au</td><td>Pays masculin</td><td class="fr-cell">Je suis au Japon / au Brésil / au Canada.</td></tr>
  <tr><td class="form-cell">aux</td><td>Pays pluriel</td><td class="fr-cell">Je suis aux États-Unis / aux Philippines.</td></tr>
</table>
<div class="tip-box"><strong>💡 Liaison :</strong> « De » + voyelle → « d' » : <em>Vous êtes d'où ? – Je suis d'Athènes.</em></div>

<h3>Expressions courantes avec ÊTRE</h3>
<div class="example-box"><div class="fr">être en retard / en avance / à l'heure<br>être d'accord (avec quelqu'un)<br>être en train de + infinitif (action en cours)<br>être sur le point de + infinitif (action imminente)<br>être au courant (de quelque chose) — to be aware<br>être en forme / en bonne santé — to be fit / healthy<br>n'est-ce pas ? — isn't it? (tag question)</div></div>
<div class="warning-box"><strong>⚠ Erreurs fréquentes :</strong><br>
Ne dites pas : <em>~~Je suis 25 ans~~</em> → Dites : <em>J'<strong>ai</strong> 25 ans.</em> (l'âge utilise AVOIR)<br>
Ne dites pas : <em>~~Je suis froid~~</em> → Dites : <em>J'<strong>ai</strong> froid.</em> (sensations physiques utilisent AVOIR)<br>
Ne dites pas : <em>~~Je suis d'accord à toi~~</em> → Dites : <em>Je suis d'accord <strong>avec</strong> toi.</em></div>`
  },

  {
    id: 2,
    title: "Les Pronoms Sujets — TU, VOUS, ON",
    diff: "A1", topic: "Pronouns", source: "Inter",
    preview: "When to use tu vs vous, on = nous in spoken French, gender agreement with ils/elles.",
    content: `
<h3>VOUS : politesse ou pluriel</h3>
<p><strong>« Vous »</strong> can address one person (formal/polite) or multiple people :</p>
<div class="example-box"><div class="fr">– Vous êtes prêt, monsieur ? (politesse, une personne)<br>– Vous êtes prêts, les enfants ? (pluriel)</div></div>

<h3>TU : pour les amis, la famille</h3>
<div class="example-box"><div class="fr">– Tu es prêt, papa ? / – Tu es prête, mon amie ?</div></div>
<div class="warning-box"><strong>⚠ Registre :</strong> With someone's name, use <em>vous</em> (formal) or <em>tu</em> (familiar):<br><em>Vous êtes prêt, Max ?</em> (moins familier) vs <em>Tu es prêt, Max ?</em> (plus familier)</div>

<h3>IL et ELLE — personnes et choses</h3>
<p><strong>Il</strong> and <strong>elle</strong> refer to people OR things (matching the noun's gender) :</p>
<div class="example-box"><div class="fr">Elle est belle, Isabelle. Il est beau, Kevin.<br>Elle est belle, la tour Eiffel. Il est beau, le musée d'Orsay.</div></div>
<div class="tip-box"><strong>💡 ILS :</strong> A mixed group (masculine + feminine) uses <strong>ils</strong> :<br><em>Paul, Marie, Cathy et Julie sont français. Ils sont de Nice.</em></div>

<h3>ON = NOUS (langage courant)</h3>
<p>In spoken French, <strong>on</strong> replaces <strong>nous</strong> — the verb is singular :</p>
<div class="example-box"><div class="fr">Paul et moi, nous sommes français. On est de Nice.</div><div class="en">Paul and I, we are French. We're from Nice.</div></div>
<p><strong>On</strong> also means « tout le monde » (everyone) :</p>
<div class="example-box"><div class="fr">En France, on est gourmand = tout le monde est gourmand.</div></div>
<div class="tip-box"><strong>💡 Liaison obligatoire :</strong> <em>Vous_êtes</em> (z) / <em>On_est</em> (n) / <em>Ils_ont</em> (z)</div>

<h3>Tableau récapitulatif complet des pronoms sujets</h3>
<table class="grammar-table">
  <tr><th>Personne</th><th>Pronom</th><th>Usage</th><th>Exemple</th></tr>
  <tr><td>1ère sing.</td><td class="form-cell">je / j'</td><td>Le locuteur</td><td class="fr-cell">Je parle français. J'habite à Paris.</td></tr>
  <tr><td>2ème sing. familier</td><td class="form-cell">tu</td><td>Ami, famille, enfant</td><td class="fr-cell">Tu viens ce soir ?</td></tr>
  <tr><td>3ème sing. masc.</td><td class="form-cell">il</td><td>Personne/chose masculine</td><td class="fr-cell">Il travaille ici. Il est grand, ce bâtiment.</td></tr>
  <tr><td>3ème sing. fém.</td><td class="form-cell">elle</td><td>Personne/chose féminine</td><td class="fr-cell">Elle est belle, cette ville.</td></tr>
  <tr><td>3ème sing. indéf.</td><td class="form-cell">on</td><td>Nous (oral), tout le monde, les gens</td><td class="fr-cell">On y va ? En France, on mange bien.</td></tr>
  <tr><td>1ère plur.</td><td class="form-cell">nous</td><td>Formel ou écrit</td><td class="fr-cell">Nous vous remercions de votre patience.</td></tr>
  <tr><td>2ème plur. / politesse</td><td class="form-cell">vous</td><td>Pluriel ou forme polie</td><td class="fr-cell">Vous désirez, madame ?</td></tr>
  <tr><td>3ème plur. masc./mixte</td><td class="form-cell">ils</td><td>Groupe masculin ou mixte</td><td class="fr-cell">Ils sont partis ensemble.</td></tr>
  <tr><td>3ème plur. fém.</td><td class="form-cell">elles</td><td>Groupe entièrement féminin</td><td class="fr-cell">Elles sont toutes médecins.</td></tr>
</table>

<h3>Quand passer du VOUS au TU ?</h3>
<p>Le passage au tutoiement s'appelle le <strong>« tutoiement »</strong>. La question typique :</p>
<div class="example-box"><div class="fr">– On peut se tutoyer ?<br>– Oui, bien sûr ! Tu peux me tutoyer.</div></div>
<p><strong>Contextes de TU :</strong> amis, famille, collègues du même niveau, jeunes entre eux, enfants, réseaux sociaux.</p>
<p><strong>Contextes de VOUS :</strong> inconnus, supérieur hiérarchique, client/commerçant, personne âgée, contexte formel.</p>
<div class="warning-box"><strong>⚠ En cas de doute :</strong> utilisez toujours VOUS — la personne vous proposera le tutoiement si elle le souhaite. Tutoyer quelqu'un sans permission peut être perçu comme impoli.</div>

<h3>ON — les trois sens</h3>
<table class="grammar-table">
  <tr><th>Sens</th><th>Équivalent</th><th>Exemple</th></tr>
  <tr><td>= Nous (courant)</td><td class="form-cell">we</td><td class="fr-cell">On part demain. (= Nous partons demain.)</td></tr>
  <tr><td>= Les gens en général</td><td class="form-cell">people / one</td><td class="fr-cell">En France, on boit du vin. On dit que c'est vrai.</td></tr>
  <tr><td>= Quelqu'un (indéfini)</td><td class="form-cell">someone</td><td class="fr-cell">On a sonné à la porte. On m'a volé mon sac !</td></tr>
</table>
<div class="tip-box"><strong>💡 Accord avec ON :</strong> Quand on = nous, l'adjectif/participe peut s'accorder au pluriel :<br><em>On est arrivé<strong>s</strong> hier.</em> (nous) vs <em>On est arrivé tard.</em> (les gens en général)</div>`
  },

  {
    id: 3,
    title: "L'Adjectif (1) — Accord en Genre et Nombre",
    diff: "A1", topic: "Adjectives", source: "Inter",
    preview: "Forming feminine and plural adjectives, color adjectives, irregular forms.",
    content: `
<h3>Masculin → Féminin : règle générale</h3>
<p>En général, on ajoute <strong>-e</strong> au masculin :</p>
<div class="example-box"><div class="fr">Paul est grand. → Anne est grande.<br>Il est original. → Elle est originale.</div></div>
<p>Si le masculin se termine par <strong>-e</strong>, le féminin est identique :</p>
<div class="example-box"><div class="fr">Il est sympathique. → Elle est sympathique.</div></div>

<h3>Terminaisons spéciales au féminin</h3>
<table class="grammar-table">
  <tr><th>Terminaison masc.</th><th>Féminin</th><th>Exemples</th></tr>
  <tr><td>-en / -on / -el</td><td class="form-cell">double + -e</td><td class="fr-cell">italien→italienne, mignon→mignonne, ponctuel→ponctuelle</td></tr>
  <tr><td>-if</td><td class="form-cell">-ive</td><td class="fr-cell">sportif→sportive, actif→active</td></tr>
  <tr><td>-eux</td><td class="form-cell">-euse</td><td class="fr-cell">sérieux→sérieuse, rêveur→rêveuse</td></tr>
  <tr><td>-eur (person)</td><td class="form-cell">-euse / -trice</td><td class="fr-cell">calculateur→calculatrice, étranger→étrangère</td></tr>
  <tr><td>-er</td><td class="form-cell">-ère</td><td class="fr-cell">premier→première</td></tr>
  <tr><td>-et</td><td class="form-cell">-ète</td><td class="fr-cell">discret→discrète</td></tr>
</table>

<h3>Cas particuliers (irréguliers)</h3>
<div class="example-box"><div class="fr">beau/belle · nouveau/nouvelle · vieux/vieille · doux/douce<br>roux/rousse · jaloux/jalouse · blanc/blanche · long/longue<br>frais/fraîche · sec/sèche · faux/fausse · gros/grosse · fou/folle</div></div>

<h3>Singulier → Pluriel</h3>
<p>Règle générale : singulier + <strong>-s</strong></p>
<div class="example-box"><div class="fr">Paul est grand. → Paul et Marc sont grands.</div></div>
<p>Si le singulier se termine par <strong>-s</strong> ou <strong>-x</strong>, le pluriel est identique :</p>
<div class="example-box"><div class="fr">Il est français. → Ils sont français.</div></div>
<p><strong>-al / -eau → -aux :</strong> <em>original→originaux, beau→beaux, sentimental→sentimentaux</em></p>
<p>Exceptions : <em>banal/banals, fatal/fatals, naval/navals</em></p>

<h3>Adjectifs de couleur</h3>
<p>Couleurs dérivées d'un objet ou composées sont <strong>invariables</strong> :</p>
<div class="example-box"><div class="fr">des pulls marron · des robes vert foncé · des yeux bleu marine · des pulls gris clair</div></div>
<div class="tip-box"><strong>💡 Exception :</strong> rose, mauve, violette et châtain s'accordent quand même : <em>des robes roses, des chemises violettes</em></div>

<h3>Position de l'adjectif</h3>
<p>En français, la plupart des adjectifs se placent <strong>après</strong> le nom :</p>
<div class="example-box"><div class="fr">une voiture <strong>rouge</strong> · un homme <strong>intelligent</strong> · une femme <strong>élégante</strong></div></div>
<p>Certains adjectifs courants se placent <strong>avant</strong> le nom (BANGS: Beauty, Age, Number, Goodness, Size) :</p>
<table class="grammar-table">
  <tr><th>Catégorie</th><th>Adjectifs</th><th>Exemple</th></tr>
  <tr><td>Beauté</td><td class="form-cell">beau, joli, vilain</td><td class="fr-cell">une <strong>belle</strong> maison</td></tr>
  <tr><td>Âge</td><td class="form-cell">jeune, vieux, nouveau, ancien</td><td class="fr-cell">un <strong>vieil</strong> ami</td></tr>
  <tr><td>Nombre</td><td class="form-cell">premier, dernier, prochain</td><td class="fr-cell">le <strong>premier</strong> jour</td></tr>
  <tr><td>Bonté</td><td class="form-cell">bon, mauvais, meilleur, gentil</td><td class="fr-cell">un <strong>bon</strong> repas</td></tr>
  <tr><td>Taille</td><td class="form-cell">grand, petit, gros, long, haut</td><td class="fr-cell">une <strong>petite</strong> fille</td></tr>
</table>

<h3>Formes spéciales devant voyelle/h muet (masculin)</h3>
<table class="grammar-table">
  <tr><th>Adjectif</th><th>Devant consonne</th><th>Devant voyelle/h muet</th><th>Féminin</th></tr>
  <tr><td>beau</td><td class="form-cell">un beau garçon</td><td class="form-cell">un bel homme</td><td class="form-cell">une belle femme</td></tr>
  <tr><td>nouveau</td><td class="form-cell">un nouveau livre</td><td class="form-cell">un nouvel ami</td><td class="form-cell">une nouvelle amie</td></tr>
  <tr><td>vieux</td><td class="form-cell">un vieux château</td><td class="form-cell">un vieil arbre</td><td class="form-cell">une vieille maison</td></tr>
  <tr><td>fou</td><td class="form-cell">un fou rire</td><td class="form-cell">un fol espoir</td><td class="form-cell">une folle idée</td></tr>
  <tr><td>mou</td><td class="form-cell">un mou caractère</td><td class="form-cell">un mol oreiller</td><td class="form-cell">une molle attitude</td></tr>
</table>

<h3>Adjectifs qui changent de sens selon la position</h3>
<table class="grammar-table">
  <tr><th>Avant le nom</th><th>Sens</th><th>Après le nom</th><th>Sens</th></tr>
  <tr><td class="fr-cell">un <strong>ancien</strong> élève</td><td>former</td><td class="fr-cell">un meuble <strong>ancien</strong></td><td>antique/old</td></tr>
  <tr><td class="fr-cell">un <strong>grand</strong> homme</td><td>great</td><td class="fr-cell">un homme <strong>grand</strong></td><td>tall</td></tr>
  <tr><td class="fr-cell">un <strong>pauvre</strong> homme</td><td>unfortunate</td><td class="fr-cell">un homme <strong>pauvre</strong></td><td>poor (no money)</td></tr>
  <tr><td class="fr-cell">mon <strong>propre</strong> fils</td><td>own</td><td class="fr-cell">une chemise <strong>propre</strong></td><td>clean</td></tr>
  <tr><td class="fr-cell">un <strong>seul</strong> homme</td><td>only one</td><td class="fr-cell">un homme <strong>seul</strong></td><td>alone/lonely</td></tr>
  <tr><td class="fr-cell">un <strong>cher</strong> ami</td><td>dear (beloved)</td><td class="fr-cell">un restaurant <strong>cher</strong></td><td>expensive</td></tr>
  <tr><td class="fr-cell">un <strong>certain</strong> charme</td><td>a certain (vague)</td><td class="fr-cell">un fait <strong>certain</strong></td><td>definite/sure</td></tr>
  <tr><td class="fr-cell">la <strong>dernière</strong> semaine</td><td>final</td><td class="fr-cell">la semaine <strong>dernière</strong></td><td>last (most recent)</td></tr>
</table>
<div class="warning-box"><strong>⚠ Erreurs fréquentes :</strong><br>
Ne dites pas : <em>~~une rouge voiture~~</em> → Dites : <em>une voiture rouge</em><br>
Ne dites pas : <em>~~un beau homme~~</em> → Dites : <em>un <strong>bel</strong> homme</em> (devant voyelle)<br>
Ne dites pas : <em>~~des beau yeux~~</em> → Dites : <em>de <strong>beaux</strong> yeux</em> (des → de devant adj. + nom au pluriel)</div>`
  },

  {
    id: 4,
    title: "La Négation et l'Interrogation (1)",
    diff: "A1", topic: "Negation", source: "Inter",
    preview: "Ne...pas, four ways to ask questions, responses: oui/non/si, moi aussi/moi non plus.",
    content: `
<h3>La Négation simple : NE...PAS</h3>
<p>Two elements wrap the conjugated verb :</p>
<div class="example-box"><div class="fr">Je suis en vacances. → Je <strong>ne suis pas</strong> en vacances.<br>Nous sommes en juillet. → Nous <strong>ne sommes pas</strong> en juillet.</div></div>
<div class="tip-box"><strong>💡 Élision :</strong> « ne » → « n' » devant voyelle : <em>Vous n'êtes pas fatigué ?</em></div>

<h3>4 façons de poser une question oui/non</h3>
<table class="grammar-table">
  <tr><th>Méthode</th><th>Exemple</th><th>Registre</th></tr>
  <tr><td>Intonation montante</td><td class="fr-cell">Vous êtes irlandais ?</td><td>Très courant</td></tr>
  <tr><td>Est-ce que…</td><td class="fr-cell">Est-ce que vous êtes irlandais ?</td><td>Courant, téléphone</td></tr>
  <tr><td>Inversion sujet-verbe</td><td class="fr-cell">Êtes-vous irlandais ?</td><td>Formel / écrit</td></tr>
  <tr><td>Reprise du nom par pronom</td><td class="fr-cell">Patrick est-il irlandais ?</td><td>Formel</td></tr>
</table>

<h3>La Réponse</h3>
<table class="grammar-table">
  <tr><th>Réponse</th><th>Usage</th><th>Exemple</th></tr>
  <tr><td class="form-cell">Oui</td><td>Réponse affirmative</td><td class="fr-cell">– Vous êtes marié ? – Oui, je suis marié.</td></tr>
  <tr><td class="form-cell">Non</td><td>Nie toute la question</td><td class="fr-cell">– Tu travailles le samedi ? – Non.</td></tr>
  <tr><td class="form-cell">Si</td><td>Oui après une négation</td><td class="fr-cell">– Vous n'êtes pas marié ? – Si, je suis marié.</td></tr>
  <tr><td class="form-cell">Pas</td><td>Nie une partie seulement</td><td class="fr-cell">– Tu travailles le samedi ? – Pas le matin.</td></tr>
  <tr><td class="form-cell">Moi aussi</td><td>Confirme affirmation</td><td class="fr-cell">– Je suis marié. – Moi aussi.</td></tr>
  <tr><td class="form-cell">Moi non plus</td><td>Confirme négation</td><td class="fr-cell">– Je ne suis pas marié. – Moi non plus.</td></tr>
</table>

<h3>Négation avec les articles</h3>
<p>Après <strong>ne...pas</strong>, les articles indéfinis et partitifs deviennent <strong>de/d'</strong> :</p>
<table class="grammar-table">
  <tr><th>Affirmatif</th><th>Négatif</th></tr>
  <tr><td class="fr-cell">J'ai <strong>un</strong> chien.</td><td class="fr-cell">Je n'ai <strong>pas de</strong> chien.</td></tr>
  <tr><td class="fr-cell">J'ai <strong>des</strong> enfants.</td><td class="fr-cell">Je n'ai <strong>pas d'</strong>enfants.</td></tr>
  <tr><td class="fr-cell">Je bois <strong>du</strong> café.</td><td class="fr-cell">Je ne bois <strong>pas de</strong> café.</td></tr>
</table>
<div class="tip-box"><strong>💡 Exception :</strong> après <em>c'est / ce n'est pas</em>, l'article reste : <em>Ce n'est <strong>pas un</strong> problème.</em></div>

<h3>Négation à l'oral — omission du NE</h3>
<p>À l'oral, le <strong>« ne »</strong> disparaît souvent. C'est très courant et normal :</p>
<div class="example-box"><div class="fr">Écrit : Je <strong>ne</strong> sais <strong>pas</strong>. → Oral : Je sais <strong>pas</strong>. / <em>Chais pas.</em><br>Écrit : Il <strong>n'</strong>y a <strong>pas</strong> de problème. → Oral : Y a <strong>pas</strong> de problème.<br>Écrit : Tu <strong>ne</strong> viens <strong>pas</strong> ? → Oral : Tu viens <strong>pas</strong> ?</div></div>
<div class="warning-box"><strong>⚠ À l'écrit formel</strong>, gardez toujours le <strong>ne</strong>. L'omission est réservée au français parlé et informel.</div>

<h3>L'inversion sujet-verbe — détails</h3>
<p>Quand le sujet est un nom (pas un pronom), on fait une <strong>reprise par pronom</strong> :</p>
<div class="example-box"><div class="fr">Pierre est-<strong>il</strong> français ? (pas : ~~Est Pierre français ?~~)<br>Marie a-t-<strong>elle</strong> des enfants ? (t euphonique entre deux voyelles)<br>Les enfants sont-<strong>ils</strong> arrivés ?</div></div>
<div class="tip-box"><strong>💡 Le « t » euphonique :</strong> entre verbe finissant par voyelle et il/elle/on :<br><em>Parle-<strong>t</strong>-il français ?</em> · <em>A-<strong>t</strong>-elle un frère ?</em> · <em>Va-<strong>t</strong>-on partir ?</em></div>`
  },

  {
    id: 5,
    title: "Le Nom et l'Article",
    diff: "A1", topic: "Nouns & Articles", source: "Inter",
    preview: "Masculine/feminine of nouns for people and things, definite vs indefinite articles, élision, liaison.",
    content: `
<h3>Masculin et Féminin des noms de PERSONNES</h3>
<p>Pour les personnes, le genre correspond au sexe :</p>
<table class="grammar-table">
  <tr><th>Règle</th><th>Masculin</th><th>Féminin</th></tr>
  <tr><td>Règle générale : + -e</td><td class="fr-cell">un étudiant</td><td class="fr-cell">une étudiante</td></tr>
  <tr><td>-en → -enne</td><td class="fr-cell">un musicien</td><td class="fr-cell">une musicienne</td></tr>
  <tr><td>-on → -onne</td><td class="fr-cell">un champion</td><td class="fr-cell">une championne</td></tr>
  <tr><td>-eur → -euse / -trice</td><td class="fr-cell">un serveur / un acteur</td><td class="fr-cell">une serveuse / une actrice</td></tr>
  <tr><td>Irréguliers</td><td class="fr-cell">un homme, un mari, un roi</td><td class="fr-cell">une femme, une femme, une reine</td></tr>
</table>
<div class="tip-box"><strong>💡 Titres :</strong> Madame, Mademoiselle, Monsieur s'utilisent sans article.</div>

<h3>L'Article INDÉFINI (un/une/des)</h3>
<p>Désigne <strong>une catégorie</strong> ou introduit un nom inconnu :</p>
<div class="example-box"><div class="fr">C'est une tour moderne. / J'ai un chien, une chatte (et deux canaris).</div></div>

<h3>L'Article DÉFINI (le/la/l'/les)</h3>
<p>Désigne une chose <strong>en particulier</strong> ou exprime une <strong>généralité</strong> :</p>
<div class="example-box"><div class="fr">La tour Eiffel (en particulier) · La liberté, le bonheur, l'amour (généralité)</div></div>
<div class="warning-box"><strong>⚠ Verbes de goût :</strong> Après aimer, détester, adorer → article DÉFINI :<br><em>J'aime la laine. Je déteste le polyester. J'adore les couleurs gaies.</em></div>

<h3>Liaison et Élision obligatoires</h3>
<table class="grammar-table">
  <tr><th>Règle</th><th>Correct</th><th>Incorrect</th></tr>
  <tr><td>Liaison avec voyelle</td><td class="fr-cell">un_étudiant (n), les_étudiants (z)</td><td class="fr-cell">un étudiant sans liaison</td></tr>
  <tr><td>Élision le/la + voyelle</td><td class="fr-cell">l'école, l'homme</td><td class="fr-cell">le école, la homme</td></tr>
  <tr><td>H aspiré = pas d'élision</td><td class="fr-cell">le hasard, la Hollande, les héros</td><td></td></tr>
</table>

<h3>Le genre des CHOSES — indices utiles</h3>
<p>Pour les objets, le genre est arbitraire, mais certaines terminaisons donnent des indices :</p>
<table class="grammar-table">
  <tr><th>Souvent MASCULIN</th><th>Souvent FÉMININ</th></tr>
  <tr><td class="fr-cell">-age : le voyage, le fromage</td><td class="fr-cell">-tion/-sion : la nation, la décision</td></tr>
  <tr><td class="fr-cell">-ment : le gouvernement, le moment</td><td class="fr-cell">-té/-tié : la liberté, la moitié</td></tr>
  <tr><td class="fr-cell">-isme : le tourisme, le capitalisme</td><td class="fr-cell">-ure : la nature, la culture</td></tr>
  <tr><td class="fr-cell">-eau : le bureau, le château</td><td class="fr-cell">-ence/-ance : la science, la distance</td></tr>
  <tr><td class="fr-cell">-oir : le miroir, le couloir</td><td class="fr-cell">-ie : la vie, la philosophie</td></tr>
  <tr><td class="fr-cell">-et : le billet, le secret</td><td class="fr-cell">-ette : la fourchette, la cassette</td></tr>
</table>
<div class="warning-box"><strong>⚠ Exceptions notables :</strong><br>
<em>la page, la plage, l'image</em> (fém. malgré -age)<br>
<em>le silence, le commerce</em> (masc. malgré -ence/-erce)<br>
<em>l'eau</em> (fém. malgré -eau)</div>

<h3>Le pluriel des noms — cas spéciaux</h3>
<table class="grammar-table">
  <tr><th>Singulier</th><th>Pluriel</th><th>Exemples</th></tr>
  <tr><td>Règle générale</td><td class="form-cell">+ s</td><td class="fr-cell">un livre → des livres</td></tr>
  <tr><td>-s, -x, -z</td><td class="form-cell">invariable</td><td class="fr-cell">un bras → des bras · une voix → des voix</td></tr>
  <tr><td>-eau, -au</td><td class="form-cell">+ x</td><td class="fr-cell">un château → des châteaux · un noyau → des noyaux</td></tr>
  <tr><td>-al</td><td class="form-cell">-aux</td><td class="fr-cell">un journal → des journaux · un animal → des animaux</td></tr>
  <tr><td>-ail (certains)</td><td class="form-cell">-aux</td><td class="fr-cell">un travail → des travaux · un vitrail → des vitraux</td></tr>
  <tr><td>-ou (7 exceptions)</td><td class="form-cell">+ x</td><td class="fr-cell">un bijou → des bijoux · un caillou → des cailloux</td></tr>
</table>
<div class="tip-box"><strong>💡 Les 7 noms en -ou + x :</strong> bijou, caillou, chou, genou, hibou, joujou, pou → bijou<strong>x</strong>, caillou<strong>x</strong>…<br>Tous les autres en -ou prennent -s : <em>des trous, des clous, des sous</em></div>

<h3>Noms avec double genre (sens différent)</h3>
<table class="grammar-table">
  <tr><th>Masculin</th><th>Sens</th><th>Féminin</th><th>Sens</th></tr>
  <tr><td class="fr-cell">le livre</td><td>book</td><td class="fr-cell">la livre</td><td>pound (weight/currency)</td></tr>
  <tr><td class="fr-cell">le poste</td><td>position/job</td><td class="fr-cell">la poste</td><td>post office</td></tr>
  <tr><td class="fr-cell">le tour</td><td>tour/turn</td><td class="fr-cell">la tour</td><td>tower</td></tr>
  <tr><td class="fr-cell">le mode</td><td>mode/way</td><td class="fr-cell">la mode</td><td>fashion</td></tr>
</table>`
  },

  {
    id: 6,
    title: "C'est / Il est — Identification et Description",
    diff: "A1", topic: "Sentence Structure", source: "Inter",
    preview: "C'est for identification, il/elle est for description, profession without article.",
    content: `
<h3>C'EST — Identification et présentation</h3>
<p>Pour <strong>identifier</strong> ou <strong>présenter</strong> une chose ou une personne :</p>
<table class="grammar-table">
  <tr><th>Forme</th><th>Exemple</th></tr>
  <tr><td class="form-cell">C'est + nom singulier</td><td class="fr-cell">C'est un fruit. / C'est mon voisin.</td></tr>
  <tr><td class="form-cell">Ce sont + nom pluriel</td><td class="fr-cell">Ce sont des fruits. / Ce sont mes voisins.</td></tr>
</table>
<p>La question d'identification est toujours au singulier :</p>
<div class="example-box"><div class="fr">– Qu'est-ce que c'est ? → C'est un dessin. / Ce sont des dessins.<br>– Qui est-ce ? → C'est mon cousin. / Ce sont mes cousins.</div></div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>Qui est-ce ?</em> — Ne dites pas : <em>~~Qui est-X?~~</em></div>
<p>À l'interphone, on dit toujours <em>C'est</em> (singulier) : <em>Qui est-ce ? – C'est nous ! C'est Anna et Peter !</em></p>
<p>Négation : <em>Ce n'est pas Max. Ce n'est pas mon livre.</em></p>

<h3>IL/ELLE EST — Description</h3>
<p>Pour décrire une chose ou une personne <strong>en particulier</strong>, on utilise <strong>Il/Elle est + adjectif</strong> :</p>
<div class="example-box"><div class="fr">C'est mon livre. Il est bleu. / C'est Peter. Il est blond.</div></div>

<h3>LA PROFESSION — sans article après être</h3>
<p>Pour indiquer la profession, on utilise <strong>être + profession</strong> sans article :</p>
<div class="example-box"><div class="fr">Il est médecin. / Elle est professeur. / Je suis étudiant.</div><div class="en">He is a doctor. / She is a teacher. / I am a student.</div></div>
<div class="warning-box"><strong>⚠ Mais avec C'est, on met l'article :</strong><br><em>C'est un médecin. / C'est une excellente professeur.</em></div>

<h3>Commentaire général — C'est + adjectif neutre</h3>
<div class="example-box"><div class="fr">– Oh, c'est beau ! – Mmm, c'est bon. – Oh là là, c'est cher.</div></div>
<div class="tip-box"><strong>💡 La mer, c'est beau</strong> (neutre) vs <strong>La mer est belle</strong> (description de la mer).</div>

<h3>Tableau récapitulatif — C'est vs Il/Elle est</h3>
<table class="grammar-table">
  <tr><th>C'EST / CE SONT</th><th>IL/ELLE EST — ILS/ELLES SONT</th></tr>
  <tr><td class="fr-cell">+ article + nom : <em>C'est <strong>un</strong> ami.</em></td><td class="fr-cell">+ adjectif seul : <em>Il est <strong>sympa</strong>.</em></td></tr>
  <tr><td class="fr-cell">+ nom propre : <em>C'est <strong>Marie</strong>.</em></td><td class="fr-cell">+ profession (sans art.) : <em>Elle est <strong>avocate</strong>.</em></td></tr>
  <tr><td class="fr-cell">+ pronom : <em>C'est <strong>lui</strong> / <strong>moi</strong> / <strong>nous</strong>.</em></td><td class="fr-cell">+ nationalité : <em>Il est <strong>français</strong>.</em></td></tr>
  <tr><td class="fr-cell">+ adjectif (commentaire) : <em>C'est <strong>génial</strong> !</em></td><td class="fr-cell">+ lieu : <em>Il est <strong>à Paris</strong>.</em></td></tr>
  <tr><td class="fr-cell">+ date/heure : <em>C'est <strong>le 14 juillet</strong>.</em></td><td class="fr-cell">+ heure : <em>Il est <strong>8 heures</strong>.</em></td></tr>
</table>

<h3>Cas ambigus fréquents</h3>
<div class="example-box"><div class="fr"><strong>Profession avec article (adjectif ou précision) → C'est :</strong><br>C'est un <strong>bon</strong> médecin. / C'est un médecin <strong>français</strong>.<br>(pas : ~~Il est un bon médecin.~~)<br><br><strong>Religion / statut → même règle que profession :</strong><br>Il est catholique. / Elle est célibataire. / Ils sont végétariens.</div></div>

<h3>IL EST — expressions impersonnelles</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Exemple</th><th>Alternative courante</th></tr>
  <tr><td class="form-cell">Il est + adj. + de + inf.</td><td class="fr-cell">Il est difficile de comprendre.</td><td class="fr-cell">C'est difficile à comprendre.</td></tr>
  <tr><td class="form-cell">Il est + adj. + que + subj.</td><td class="fr-cell">Il est important que tu viennes.</td><td class="fr-cell">C'est important que tu viennes.</td></tr>
  <tr><td class="form-cell">Il est + heure</td><td class="fr-cell">Il est trois heures et demie.</td><td class="fr-cell">—</td></tr>
</table>
<div class="warning-box"><strong>⚠ À l'oral :</strong> « C'est » remplace souvent « Il est » dans les expressions impersonnelles :<br><em>C'est facile de parler français !</em> (au lieu de <em>Il est facile de…</em>)</div>`
  },

  {
    id: 7,
    title: "Les Possessifs — Adjectifs et Pronoms",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "Mon/ma/mes through leur/leurs, plus possessive pronouns le mien/la mienne/les miens…",
    content: `
<h3>L'Adjectif possessif — s'accorde avec le NOM possédé</h3>
<table class="grammar-table">
  <tr><th>Possesseur</th><th>Nom masc. sing.</th><th>Nom fém. sing.</th><th>Nom pluriel</th></tr>
  <tr><td>Je</td><td class="form-cell">mon père</td><td class="form-cell">ma mère</td><td class="form-cell">mes parents</td></tr>
  <tr><td>Tu</td><td class="form-cell">ton fils</td><td class="form-cell">ta fille</td><td class="form-cell">tes enfants</td></tr>
  <tr><td>Il/Elle</td><td class="form-cell">son cousin</td><td class="form-cell">sa cousine</td><td class="form-cell">ses cousin(e)s</td></tr>
  <tr><td>Nous</td><td class="form-cell">notre père</td><td class="form-cell">notre mère</td><td class="form-cell">nos parents</td></tr>
  <tr><td>Vous</td><td class="form-cell">votre fils</td><td class="form-cell">votre fille</td><td class="form-cell">vos enfants</td></tr>
  <tr><td>Ils/Elles</td><td class="form-cell">leur cousin</td><td class="form-cell">leur cousine</td><td class="form-cell">leurs cousin(e)s</td></tr>
</table>
<div class="tip-box"><strong>💡 Ma/ta/sa → mon/ton/son devant voyelle ou h muet :</strong><br><em>mon amie, ton erreur, son hésitation</em></div>
<div class="tip-box"><strong>💡 On = notre/nos :</strong> <em>On est chez notre grand-mère. Quand on est vieux, on parle de son passé.</em></div>
<p>Pour les parties du corps, on remplace le possessif par l'article défini quand le possesseur est évident :</p>
<div class="example-box"><div class="fr">Ma tête est brûlante. → J'ai mal à <strong>la</strong> tête. (pas : à ma tête)</div></div>

<h3>Le Pronom possessif — remplace le nom + possessif</h3>
<table class="grammar-table">
  <tr><th>Possesseur</th><th>Masc. sing.</th><th>Fém. sing.</th><th>Masc. plur.</th><th>Fém. plur.</th></tr>
  <tr><td>Je</td><td class="form-cell">le mien</td><td class="form-cell">la mienne</td><td class="form-cell">les miens</td><td class="form-cell">les miennes</td></tr>
  <tr><td>Tu</td><td class="form-cell">le tien</td><td class="form-cell">la tienne</td><td class="form-cell">les tiens</td><td class="form-cell">les tiennes</td></tr>
  <tr><td>Il/Elle</td><td class="form-cell">le sien</td><td class="form-cell">la sienne</td><td class="form-cell">les siens</td><td class="form-cell">les siennes</td></tr>
  <tr><td>Nous</td><td class="form-cell">le nôtre</td><td class="form-cell">la nôtre</td><td class="form-cell">les nôtres</td><td class="form-cell">les nôtres</td></tr>
  <tr><td>Vous</td><td class="form-cell">le vôtre</td><td class="form-cell">la vôtre</td><td class="form-cell">les vôtres</td><td class="form-cell">les vôtres</td></tr>
  <tr><td>Ils/Elles</td><td class="form-cell">le leur</td><td class="form-cell">la leur</td><td class="form-cell">les leurs</td><td class="form-cell">les leurs</td></tr>
</table>
<div class="example-box"><div class="fr">– C'est mon sac. C'est <strong>le mien</strong>. / C'est ma montre. C'est <strong>la mienne</strong>.</div></div>
<div class="warning-box"><strong>⚠ notre ≠ le nôtre :</strong> <em>notre</em> = adjectif (sans accent) / <em>le nôtre</em> = pronom (avec accent circumflexe)</div>

<h3>Possessif vs Article défini — parties du corps</h3>
<p>En français, on utilise l'<strong>article défini</strong> (pas le possessif) pour les parties du corps quand le possesseur est clair :</p>
<table class="grammar-table">
  <tr><th>Français (correct)</th><th>Français (incorrect)</th><th>Anglais</th></tr>
  <tr><td class="fr-cell">J'ai mal à <strong>la</strong> tête.</td><td class="fr-cell">~~J'ai mal à ma tête.~~</td><td>My head hurts.</td></tr>
  <tr><td class="fr-cell">Il lève <strong>la</strong> main.</td><td class="fr-cell">~~Il lève sa main.~~</td><td>He raises his hand.</td></tr>
  <tr><td class="fr-cell">Elle se lave <strong>les</strong> mains.</td><td class="fr-cell">~~Elle lave ses mains.~~</td><td>She washes her hands.</td></tr>
  <tr><td class="fr-cell">Fermez <strong>les</strong> yeux !</td><td class="fr-cell">~~Fermez vos yeux !~~</td><td>Close your eyes!</td></tr>
</table>
<div class="tip-box"><strong>💡 On garde le possessif</strong> quand il y a un adjectif : <em>Elle a levé <strong>sa</strong> petite main.</em></div>

<h3>Expressions avec les possessifs</h3>
<div class="example-box"><div class="fr">À mon avis… — In my opinion…<br>À ta/votre place… — If I were you… (In your place…)<br>C'est mon tour. — It's my turn.<br>Chacun son tour. — Each one's turn. / One at a time.<br>À chacun le sien. — To each his own.</div></div>

<h3>Son/sa/ses — piège pour anglophones</h3>
<p>En français, <strong>son/sa/ses</strong> s'accorde avec le <strong>nom possédé</strong>, pas avec le possesseur :</p>
<div class="example-box"><div class="fr">Marie aime <strong>son</strong> père. (son = masculin, car « père » est masculin)<br>Pierre aime <strong>sa</strong> mère. (sa = féminin, car « mère » est féminin)<br>Marie aime <strong>sa</strong> voiture. / Pierre aime <strong>sa</strong> voiture. (même forme !)</div></div>
<div class="warning-box"><strong>⚠</strong> Contrairement à l'anglais (his/her), le français ne distingue pas le genre du possesseur à la 3ème personne.</div>`
  },

  {
    id: 8,
    title: "Les Démonstratifs — Ce, Cette, Ces, Celui-ci…",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "Demonstrative adjectives (ce/cette/ces/cet) and pronouns (celui-ci/celle-là/ceux/celles).",
    content: `
<h3>L'Adjectif démonstratif — s'accorde avec le nom</h3>
<table class="grammar-table">
  <tr><th>Genre / Nombre</th><th>Forme</th><th>Exemple</th></tr>
  <tr><td>Masculin singulier</td><td class="form-cell">ce</td><td class="fr-cell">ce pont, ce monument</td></tr>
  <tr><td>Masculin sing. + voyelle/h muet</td><td class="form-cell">cet</td><td class="fr-cell">cet ami, cet homme</td></tr>
  <tr><td>Féminin singulier</td><td class="form-cell">cette</td><td class="fr-cell">cette église, cette semaine</td></tr>
  <tr><td>Pluriel (tous genres)</td><td class="form-cell">ces</td><td class="fr-cell">ces statues, ces amis</td></tr>
</table>
<div class="tip-box"><strong>💡 Liaison obligatoire :</strong> <em>ces_amis</em> (z), <em>ces_étudiants</em> (z) · Mais : <em>ces|héros</em> (h aspiré)</div>

<h3>Éloignement : -là-bas, -ci, -là</h3>
<div class="example-box"><div class="fr">Ce monument, <strong>là-bas</strong>, c'est l'Opéra. (éloignement)<br>ce mois-<strong>ci</strong> (proche) · ce mois-<strong>là</strong> (éloigné)</div></div>

<h3>Le Pronom démonstratif — pour éviter la répétition</h3>
<table class="grammar-table">
  <tr><th>Genre</th><th>-ci (proche)</th><th>-là (lointain)</th></tr>
  <tr><td>Masc. sing.</td><td class="form-cell">celui-ci</td><td class="form-cell">celui-là</td></tr>
  <tr><td>Fém. sing.</td><td class="form-cell">celle-ci</td><td class="form-cell">celle-là</td></tr>
  <tr><td>Masc. plur.</td><td class="form-cell">ceux-ci</td><td class="form-cell">ceux-là</td></tr>
  <tr><td>Fém. plur.</td><td class="form-cell">celles-ci</td><td class="form-cell">celles-là</td></tr>
</table>
<div class="example-box"><div class="fr">– Je voudrais ce gâteau, cette brioche et ces croissants.<br>– Moi, je voudrais <strong>celui-ci, celle-ci</strong> et <strong>ceux-ci</strong>.</div></div>
<p><strong>Celui de / Celle de</strong> expriment la possession :</p>
<div class="example-box"><div class="fr">– À qui est ce vélo ? – C'est <strong>celui de</strong> Léa.</div></div>

<h3>Celui qui / Celui que — avec une relative</h3>
<p>Les pronoms démonstratifs se combinent avec <strong>qui, que, où, dont</strong> :</p>
<table class="grammar-table">
  <tr><th>Structure</th><th>Exemple</th><th>Sens</th></tr>
  <tr><td class="form-cell">celui/celle qui + verbe</td><td class="fr-cell"><strong>Celui qui</strong> parle est mon frère.</td><td>The one who speaks…</td></tr>
  <tr><td class="form-cell">celui/celle que + sujet + verbe</td><td class="fr-cell"><strong>Celle que</strong> tu vois est ma sœur.</td><td>The one (whom) you see…</td></tr>
  <tr><td class="form-cell">celui/celle où + verbe</td><td class="fr-cell"><strong>Celui où</strong> j'habite est petit.</td><td>The one where I live…</td></tr>
  <tr><td class="form-cell">celui/celle dont + sujet + verbe</td><td class="fr-cell"><strong>Celui dont</strong> je parle est rouge.</td><td>The one I'm talking about…</td></tr>
</table>
<div class="example-box"><div class="fr">– Quel film tu préfères ? – <strong>Celui que</strong> nous avons vu hier.<br>– Quelles chaussures tu veux ? – <strong>Celles qui</strong> sont en vitrine.</div></div>

<h3>CE / CECI / CELA / ÇA — pronoms neutres</h3>
<table class="grammar-table">
  <tr><th>Forme</th><th>Usage</th><th>Exemple</th></tr>
  <tr><td class="form-cell">ce (c')</td><td>Avec être : identification</td><td class="fr-cell">C'est vrai. Ce sont mes amis.</td></tr>
  <tr><td class="form-cell">cela</td><td>Formel, écrit</td><td class="fr-cell">Cela ne me plaît pas.</td></tr>
  <tr><td class="form-cell">ça</td><td>Oral, courant</td><td class="fr-cell">Ça va ? Ça ne fait rien. Ça m'énerve !</td></tr>
  <tr><td class="form-cell">ceci</td><td>Ce qui suit (rare)</td><td class="fr-cell">Écoutez bien ceci : la réunion est annulée.</td></tr>
</table>
<div class="tip-box"><strong>💡 « Ça »</strong> est omniprésent à l'oral : <em>Ça dépend. Ça marche ! Ça suffit ! Ça y est !</em></div>`
  },

  {
    id: 9,
    title: "Les Verbes en -ER au Présent",
    diff: "A1", topic: "Verbs", source: "Inter",
    preview: "Conjugation of -er verbs, pronunciation rules, spelling changes, j'arrive/j'habite.",
    content: `
<h3>Conjugaison — à partir du radical</h3>
<p>Infinitif sans <strong>-er</strong> = le radical. Terminaisons : <strong>-e, -es, -e, -ons, -ez, -ent</strong></p>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Parler (parl-)</th><th>Dîner (dîn-)</th></tr>
  <tr><td>Je / J'</td><td class="form-cell">parle</td><td class="form-cell">dîne</td></tr>
  <tr><td>Tu</td><td class="form-cell">parles</td><td class="form-cell">dînes</td></tr>
  <tr><td>Il/Elle/On</td><td class="form-cell">parle</td><td class="form-cell">dîne</td></tr>
  <tr><td>Nous</td><td class="form-cell">parlons</td><td class="form-cell">dînons</td></tr>
  <tr><td>Vous</td><td class="form-cell">parlez</td><td class="form-cell">dînez</td></tr>
  <tr><td>Ils/Elles</td><td class="form-cell">parlent</td><td class="form-cell">dînent</td></tr>
</table>

<h3>Prononciation — finale muette</h3>
<p>Pour toutes les personnes sauf <em>nous</em> et <em>vous</em>, la finale est muette :</p>
<div class="example-box"><div class="fr">Je parl<strong>/</strong> · Tu parl<strong>/</strong> · Il parl<strong>/</strong> · Ils parl<strong>/</strong> — même prononciation !</div></div>
<p>Seules <em>nous</em> et <em>vous</em> ont une finale sonore : <em>Nous parl<strong>-ons</strong> / Vous parl<strong>-ez</strong></em></p>

<h3>Attention aux verbes en -ier</h3>
<div class="example-box"><div class="fr">Étudi-er : j'<strong>étudie</strong> / Appréci-er : j'<strong>apprécie</strong> (ne pas oublier le i)</div></div>

<h3>Je → J' devant voyelle ou h muet</h3>
<div class="example-box"><div class="fr">Je arrive → <strong>J'arrive</strong> / Je habite → <strong>J'habite</strong></div></div>

<h3>Verbes à changement orthographique</h3>
<table class="grammar-table">
  <tr><th>Type</th><th>Exemple</th><th>Je/tu/il/ils</th><th>Nous/vous</th></tr>
  <tr><td>e → è (e_er)</td><td class="fr-cell">acheter</td><td class="form-cell">j'achète</td><td class="form-cell">nous achetons</td></tr>
  <tr><td>é → è (é_er)</td><td class="fr-cell">préférer</td><td class="form-cell">je préfère</td><td class="form-cell">nous préférons</td></tr>
  <tr><td>l → ll (-eler)</td><td class="fr-cell">appeler</td><td class="form-cell">j'appelle</td><td class="form-cell">nous appelons</td></tr>
  <tr><td>g → ge (nous)</td><td class="fr-cell">manger</td><td class="form-cell">je mange</td><td class="form-cell">nous mangeons</td></tr>
  <tr><td>c → ç (nous)</td><td class="fr-cell">commencer</td><td class="form-cell">je commence</td><td class="form-cell">nous commençons</td></tr>
  <tr><td>y → i (je/tu/il/ils)</td><td class="fr-cell">payer, essayer</td><td class="form-cell">je paie / j'essaie</td><td class="form-cell">nous payons / essayons</td></tr>
  <tr><td>y → i (obligatoire)</td><td class="fr-cell">envoyer, ennuyer</td><td class="form-cell">j'envoie / j'ennuie</td><td class="form-cell">nous envoyons / ennuyons</td></tr>
</table>

<h3>Le verbe ALLER — irrégulier en -ER</h3>
<p><strong>Aller</strong> est le seul verbe en -er complètement irrégulier :</p>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Présent</th><th>Futur</th><th>Subjonctif</th><th>Impératif</th></tr>
  <tr><td>je</td><td class="form-cell">vais</td><td class="form-cell">irai</td><td class="form-cell">aille</td><td class="form-cell">—</td></tr>
  <tr><td>tu</td><td class="form-cell">vas</td><td class="form-cell">iras</td><td class="form-cell">ailles</td><td class="form-cell">va</td></tr>
  <tr><td>il/elle</td><td class="form-cell">va</td><td class="form-cell">ira</td><td class="form-cell">aille</td><td class="form-cell">—</td></tr>
  <tr><td>nous</td><td class="form-cell">allons</td><td class="form-cell">irons</td><td class="form-cell">allions</td><td class="form-cell">allons</td></tr>
  <tr><td>vous</td><td class="form-cell">allez</td><td class="form-cell">irez</td><td class="form-cell">alliez</td><td class="form-cell">allez</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">vont</td><td class="form-cell">iront</td><td class="form-cell">aillent</td><td class="form-cell">—</td></tr>
</table>
<div class="tip-box"><strong>💡 Aller + infinitif = futur proche :</strong> <em>Je <strong>vais manger</strong>.</em> (= I'm going to eat.)</div>

<h3>Les 25 verbes en -ER les plus fréquents</h3>
<div class="example-box"><div class="fr">parler · habiter · travailler · aimer · jouer · regarder · écouter · manger<br>demander · donner · chercher · trouver · penser · arriver · passer · rester<br>appeler · acheter · commencer · changer · montrer · marcher · porter · laisser · tomber</div></div>

<h3>Négation et pronoms avec les verbes en -ER</h3>
<div class="example-box"><div class="fr"><strong>Négation :</strong> Je <strong>ne</strong> parle <strong>pas</strong> anglais. / Tu <strong>ne</strong> manges <strong>pas</strong> ?<br><strong>Avec pronom COD :</strong> Je <strong>le</strong> regarde. / Je <strong>ne le</strong> regarde <strong>pas</strong>.<br><strong>Avec pronom COI :</strong> Je <strong>lui</strong> parle. / Je <strong>ne lui</strong> parle <strong>pas</strong>.</div></div>
<div class="warning-box"><strong>⚠ Erreur fréquente :</strong> Ne confondez pas <em>je mange</em> (manger) et <em>je menge</em> (n'existe pas !). Le radical ne change pas sauf pour les changements orthographiques du tableau ci-dessus.</div>`
  },

  {
    id: 10,
    title: "L'Adverbe — Bon/Bien, Rapide/Vite, Très/Beaucoup",
    diff: "A2", topic: "Adverbs", source: "Inter",
    preview: "Adjective vs adverb, bon/bien, rapide/vite, très vs beaucoup, adverbs in -ment.",
    content: `
<h3>Adjectif vs Adverbe</h3>
<p>L'adjectif modifie un <strong>nom</strong>. L'adverbe modifie un <strong>verbe, adjectif ou adverbe</strong> :</p>
<div class="example-box"><div class="fr">Il comprend <strong>vite</strong>. Il parle <strong>bien</strong>. Il a un <strong>bon</strong> accent.</div></div>

<h3>BON (adjectif) vs BIEN (adverbe)</h3>
<table class="grammar-table">
  <tr><th>BON — qualifie un NOM</th><th>BIEN — modifie un VERBE</th></tr>
  <tr><td class="fr-cell">Alain est un <strong>bon</strong> acteur. ≠ Lili est une <strong>mauvaise</strong> actrice.</td><td class="fr-cell">Il joue <strong>bien</strong>. ≠ Elle joue <strong>mal</strong>.</td></tr>
</table>
<div class="warning-box"><strong>⚠ C'est bon ≠ C'est bien :</strong><br>
<em>C'est bon</em> = goût physique : <em>C'est bon, le chocolat.</em><br>
<em>C'est bien</em> = tout le reste : <em>C'est bien, le cinéma.</em><br>
<em>C'est bon</em> aussi = « ça va, c'est ok » / <em>C'est bien ça</em> = confirmation</div>

<h3>RAPIDE (adjectif) vs VITE (adverbe)</h3>
<div class="example-box"><div class="fr">Ce train est <strong>rapide</strong>. ≠ Ces trains sont <strong>lents</strong>.<br>Il roule <strong>vite</strong>. ≠ Ils roulent <strong>lentement</strong>.</div></div>

<h3>TRÈS vs BEAUCOUP</h3>
<table class="grammar-table">
  <tr><th>TRÈS — modifie adjectif/adverbe</th><th>BEAUCOUP — modifie un verbe</th></tr>
  <tr><td class="fr-cell">Il est <strong>très</strong> bavard. Il parle <strong>très</strong> bien.</td><td class="fr-cell">Il parle <strong>beaucoup</strong>.</td></tr>
  <tr><td class="fr-cell">≠ Il est <strong>peu</strong> bavard.</td><td class="fr-cell">≠ Il parle <strong>peu</strong>.</td></tr>
</table>
<div class="warning-box"><strong>⚠ Beaucoup et très sont incompatibles :</strong><br>Dites : <em>Il dort beaucoup</em> — Ne dites pas : <em>~~Il dort très beaucoup~~</em><br>Avec avoir peur/froid/mal → très : <em>J'ai <strong>très</strong> froid.</em> — Pas : <em>~~J'ai beaucoup froid~~</em></div>

<h3>Adverbes en -MENT</h3>
<p>Formation : féminin de l'adjectif + <strong>-ment</strong></p>
<div class="example-box"><div class="fr">lent → lente → <strong>lentement</strong> · rapide → rapide → <strong>rapidement</strong><br>doux → douce → <strong>doucement</strong> · sérieux → sérieuse → <strong>sérieusement</strong><br>Exception : <em>gentiment</em> (not gentillement)</div></div>

<h3>Formation irrégulière des adverbes en -MENT</h3>
<table class="grammar-table">
  <tr><th>Règle</th><th>Adjectif</th><th>Adverbe</th></tr>
  <tr><td>Adj. masc. en -ent → -emment</td><td class="fr-cell">évident, fréquent, récent</td><td class="form-cell">évidemment, fréquemment, récemment</td></tr>
  <tr><td>Adj. masc. en -ant → -amment</td><td class="fr-cell">suffisant, courant, brillant</td><td class="form-cell">suffisamment, couramment, brillamment</td></tr>
  <tr><td>Cas spéciaux</td><td class="fr-cell">gentil, bref, précis</td><td class="form-cell">gentiment, brièvement, précisément</td></tr>
  <tr><td>Adverbes sans adjectif</td><td class="fr-cell">—</td><td class="form-cell">vite, bien, mal, exprès, ensemble, debout</td></tr>
</table>

<h3>Place de l'adverbe dans la phrase</h3>
<table class="grammar-table">
  <tr><th>Temps</th><th>Position</th><th>Exemple</th></tr>
  <tr><td>Présent</td><td class="form-cell">Après le verbe</td><td class="fr-cell">Il parle <strong>bien</strong> français.</td></tr>
  <tr><td>Passé composé (court)</td><td class="form-cell">Entre auxiliaire et participe</td><td class="fr-cell">Il a <strong>bien</strong> parlé. J'ai <strong>beaucoup</strong> mangé.</td></tr>
  <tr><td>Passé composé (long)</td><td class="form-cell">Après le participe</td><td class="fr-cell">Il a parlé <strong>couramment</strong>. Elle a répondu <strong>poliment</strong>.</td></tr>
  <tr><td>Avec infinitif</td><td class="form-cell">Avant l'infinitif</td><td class="fr-cell">Il faut <strong>bien</strong> manger. / Je veux <strong>vraiment</strong> partir.</td></tr>
</table>

<h3>Comparatif et superlatif des adverbes</h3>
<table class="grammar-table">
  <tr><th>Adverbe</th><th>Comparatif</th><th>Superlatif</th></tr>
  <tr><td class="fr-cell">bien</td><td class="form-cell"><strong>mieux</strong> (pas ~~plus bien~~)</td><td class="form-cell">le mieux</td></tr>
  <tr><td class="fr-cell">mal</td><td class="form-cell"><strong>pis / plus mal</strong></td><td class="form-cell">le pis / le plus mal</td></tr>
  <tr><td class="fr-cell">beaucoup</td><td class="form-cell"><strong>plus</strong> (pas ~~plus beaucoup~~)</td><td class="form-cell">le plus</td></tr>
  <tr><td class="fr-cell">peu</td><td class="form-cell"><strong>moins</strong></td><td class="form-cell">le moins</td></tr>
  <tr><td class="fr-cell">vite</td><td class="form-cell">plus vite</td><td class="form-cell">le plus vite</td></tr>
</table>
<div class="example-box"><div class="fr">Il parle <strong>mieux</strong> que moi. / Elle chante <strong>le mieux</strong> de tous.<br>Tu travailles <strong>plus</strong> que ton frère. / C'est lui qui travaille <strong>le plus</strong>.</div></div>`
  },

  {
    id: 11,
    title: "L'Expression de la Quantité",
    diff: "A2", topic: "Nouns & Articles", source: "Inter",
    preview: "Partitive articles (du/de la/de l'/des), quantités exprimées, négation de la quantité.",
    content: `
<h3>Les Partitifs — quantité indéterminée</h3>
<p>Pour indiquer une quantité indéterminée (« some »), on utilise <strong>de + article défini</strong> :</p>
<table class="grammar-table">
  <tr><th>Type</th><th>Partitif</th><th>Exemple</th></tr>
  <tr><td>Féminin</td><td class="form-cell">de la</td><td class="fr-cell">de la viande, de la patience</td></tr>
  <tr><td>Devant voyelle</td><td class="form-cell">de l'</td><td class="fr-cell">de l'huile, de l'eau</td></tr>
  <tr><td>Masculin</td><td class="form-cell">du (= de + le)</td><td class="fr-cell">du poisson, du soleil</td></tr>
  <tr><td>Pluriel</td><td class="form-cell">des (= de + les)</td><td class="fr-cell">des fruits, des rillettes</td></tr>
</table>
<div class="example-box"><div class="fr">Je mange <strong>du</strong> poisson avec <strong>de la</strong> salade et <strong>des</strong> légumes.</div></div>
<div class="tip-box"><strong>💡 Article défini vs partitif :</strong><br><em>Le lait est bon pour la santé.</em> (= tout) · <em>Buvez <strong>du</strong> lait.</em> (= partie)</div>
<div class="warning-box"><strong>⚠ Pas de partitif après SANS :</strong><br><em>Je mange de la salade <strong>sans</strong> huile/<strong>sans</strong> vinaigre.</em></div>

<h3>Les Quantités exprimées (expressions + DE)</h3>
<p>Après toutes les expressions de quantité, on utilise <strong>de</strong> (sans article) :</p>
<div class="example-box"><div class="fr">beaucoup <strong>de</strong> café · un peu <strong>de</strong> lait · assez <strong>de</strong> temps · trop <strong>de</strong> sucre<br>un kilo <strong>de</strong> tomates · une bouteille <strong>de</strong> vin · trois tranches <strong>de</strong> jambon</div></div>

<h3>La Négation de la quantité</h3>
<p>Après <strong>ne...pas</strong>, du/de la/des/un/une → <strong>de (d')</strong> :</p>
<div class="example-box"><div class="fr">Je mange du pain. → Je ne mange <strong>pas de</strong> pain.<br>Il y a des tomates. → Il n'y a <strong>pas de</strong> tomates.<br>J'ai un frère. → Je n'ai <strong>pas de</strong> frère.</div></div>
<div class="tip-box"><strong>💡 Exception avec être :</strong> Après c'est/ce n'est pas, l'article reste :<br><em>Ce n'est <strong>pas un</strong> problème.</em></div>

<h3>Expressions de quantité — liste complète</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">un peu de</td><td>a little</td><td class="fr-cell">un peu <strong>de</strong> sel</td></tr>
  <tr><td class="form-cell">assez de</td><td>enough</td><td class="fr-cell">assez <strong>de</strong> temps</td></tr>
  <tr><td class="form-cell">beaucoup de</td><td>a lot of</td><td class="fr-cell">beaucoup <strong>de</strong> travail</td></tr>
  <tr><td class="form-cell">trop de</td><td>too much/many</td><td class="fr-cell">trop <strong>de</strong> bruit</td></tr>
  <tr><td class="form-cell">pas assez de</td><td>not enough</td><td class="fr-cell">pas assez <strong>de</strong> place</td></tr>
  <tr><td class="form-cell">plus de / moins de</td><td>more/less</td><td class="fr-cell">plus <strong>de</strong> patience, moins <strong>de</strong> stress</td></tr>
  <tr><td class="form-cell">autant de</td><td>as much/many</td><td class="fr-cell">autant <strong>de</strong> courage</td></tr>
  <tr><td class="form-cell">la plupart de + art.</td><td>most of</td><td class="fr-cell">la plupart <strong>des</strong> gens (exception : garde l'article)</td></tr>
  <tr><td class="form-cell">plusieurs</td><td>several</td><td class="fr-cell">plusieurs personnes (pas de « de »)</td></tr>
  <tr><td class="form-cell">quelques</td><td>a few</td><td class="fr-cell">quelques minutes (pas de « de »)</td></tr>
</table>

<h3>Contenants et mesures + DE</h3>
<div class="example-box"><div class="fr">une tasse <strong>de</strong> café · un verre <strong>de</strong> vin · une bouteille <strong>d'</strong>eau<br>un kilo <strong>de</strong> pommes · un litre <strong>de</strong> lait · un morceau <strong>de</strong> fromage<br>une tranche <strong>de</strong> jambon · une part <strong>de</strong> gâteau · un paquet <strong>de</strong> biscuits<br>une boîte <strong>de</strong> conserve · un pot <strong>de</strong> confiture · un sachet <strong>de</strong> thé</div></div>
<div class="warning-box"><strong>⚠ Bien/Plusieurs/Quelques :</strong> ces mots s'utilisent <strong>sans « de »</strong> :<br><em>J'ai <strong>plusieurs</strong> amis.</em> · <em>Il y a <strong>quelques</strong> erreurs.</em> · <em>Bien <strong>des</strong> gens pensent…</em> (bien + des = exception)</div>`
  },

  {
    id: 12,
    title: "Les Verbes -IR, -RE, -OIR au Présent",
    diff: "A2", topic: "Verbs", source: "Inter",
    preview: "All types of -ir/-re/-oir verbs including dormir, partir, mettre, écrire, pouvoir, vouloir…",
    content: `
<h3>Verbes -IR type FINIR (2 radicaux : fin- / finiss-)</h3>
<p>Singulier : <strong>fin-</strong> / Pluriel : <strong>finiss-</strong></p>
<div class="example-box"><div class="fr">je finis, tu finis, il finit / nous finissons, vous finissez, ils finissent<br>Aussi : choisir, applaudir, guérir, ralentir, démolir, blanchir, rougir, vieillir…</div></div>
<div class="tip-box"><strong>💡 Naître, connaître, paraître</strong> se conjuguent sur le même modèle : <em>Je connais/Vous connaissez / Il naît/Ils naissent</em></div>

<h3>Verbes -IR type DORMIR (2 radicaux : dor- / dorm-)</h3>
<p>Singulier : consonne finale du radical tombe</p>
<table class="grammar-table">
  <tr><th>Type</th><th>Singulier</th><th>Pluriel</th><th>Aussi</th></tr>
  <tr><td>DORM-IR</td><td class="form-cell">je dors, il dort</td><td class="form-cell">nous dormons</td><td class="fr-cell">s'endormir</td></tr>
  <tr><td>PART-IR</td><td class="form-cell">je pars, il part</td><td class="form-cell">nous partons</td><td class="fr-cell">sortir, sentir, mentir</td></tr>
  <tr><td>SERV-IR</td><td class="form-cell">je sers, il sert</td><td class="form-cell">nous servons</td><td class="fr-cell">se servir</td></tr>
</table>
<div class="tip-box"><strong>💡 Vivre / suivre</strong> se conjuguent sur le même modèle que dormir/partir.</div>

<h3>Verbes -RE/-OIR à 2 radicaux</h3>
<table class="grammar-table">
  <tr><th>Type</th><th>Je / Il</th><th>Nous / Ils</th></tr>
  <tr><td class="fr-cell">mettre</td><td class="form-cell">je mets, il met</td><td class="form-cell">nous mettons, ils mettent</td></tr>
  <tr><td class="fr-cell">entendre</td><td class="form-cell">j'entends, il entend</td><td class="form-cell">nous entendons, ils entendent</td></tr>
  <tr><td class="fr-cell">écrire</td><td class="form-cell">j'écris, il écrit</td><td class="form-cell">nous écrivons, ils écrivent</td></tr>
  <tr><td class="fr-cell">lire</td><td class="form-cell">je lis, il lit</td><td class="form-cell">nous lisons, ils lisent</td></tr>
  <tr><td class="fr-cell">conduire</td><td class="form-cell">je conduis, il conduit</td><td class="form-cell">nous conduisons, ils conduisent</td></tr>
</table>

<h3>Cas particuliers importants</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Je</th><th>Nous</th><th>Ils</th></tr>
  <tr><td class="fr-cell">savoir</td><td class="form-cell">je sais</td><td class="form-cell">nous savons</td><td class="form-cell">ils savent</td></tr>
  <tr><td class="fr-cell">voir</td><td class="form-cell">je vois</td><td class="form-cell">nous voyons</td><td class="form-cell">ils voient</td></tr>
  <tr><td class="fr-cell">croire</td><td class="form-cell">je crois</td><td class="form-cell">nous croyons</td><td class="form-cell">ils croient</td></tr>
  <tr><td class="fr-cell">courir</td><td class="form-cell">je cours</td><td class="form-cell">nous courons</td><td class="form-cell">ils courent</td></tr>
  <tr><td class="fr-cell">peindre</td><td class="form-cell">je peins</td><td class="form-cell">nous peignons</td><td class="form-cell">ils peignent</td></tr>
</table>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>Ils voient, ils croient</em> — Ne dites pas : <em>~~Ils voyent, ils croyent~~</em></div>

<h3>Verbes irréguliers essentiels — FAIRE, PRENDRE, DIRE, VENIR</h3>
<table class="grammar-table">
  <tr><th></th><th>FAIRE</th><th>PRENDRE</th><th>DIRE</th><th>VENIR</th></tr>
  <tr><td>je</td><td class="form-cell">fais</td><td class="form-cell">prends</td><td class="form-cell">dis</td><td class="form-cell">viens</td></tr>
  <tr><td>tu</td><td class="form-cell">fais</td><td class="form-cell">prends</td><td class="form-cell">dis</td><td class="form-cell">viens</td></tr>
  <tr><td>il/elle</td><td class="form-cell">fait</td><td class="form-cell">prend</td><td class="form-cell">dit</td><td class="form-cell">vient</td></tr>
  <tr><td>nous</td><td class="form-cell">faisons</td><td class="form-cell">prenons</td><td class="form-cell">disons</td><td class="form-cell">venons</td></tr>
  <tr><td>vous</td><td class="form-cell">faites</td><td class="form-cell">prenez</td><td class="form-cell"><strong>dites</strong></td><td class="form-cell">venez</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">font</td><td class="form-cell">prennent</td><td class="form-cell">disent</td><td class="form-cell">viennent</td></tr>
</table>
<div class="warning-box"><strong>⚠ Attention :</strong><br>
<em>vous <strong>faites</strong></em> (pas ~~faisez~~) · <em>vous <strong>dites</strong></em> (pas ~~disez~~)<br>
Mais : <em>vous contredisez, vous médisez, vous prédisez</em> (les composés de « dire » sont réguliers !)</div>

<h3>Verbes en -AÎTRE : connaître, paraître, naître</h3>
<table class="grammar-table">
  <tr><th></th><th>CONNAÎTRE</th><th>PARAÎTRE</th><th>NAÎTRE</th></tr>
  <tr><td>je</td><td class="form-cell">connais</td><td class="form-cell">parais</td><td class="form-cell">nais</td></tr>
  <tr><td>il/elle</td><td class="form-cell">connaît</td><td class="form-cell">paraît</td><td class="form-cell">naît</td></tr>
  <tr><td>nous</td><td class="form-cell">connaissons</td><td class="form-cell">paraissons</td><td class="form-cell">naissons</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">connaissent</td><td class="form-cell">paraissent</td><td class="form-cell">naissent</td></tr>
</table>

<h3>OUVRIR, OFFRIR, SOUFFRIR, CUEILLIR — conjugués comme -ER</h3>
<p>Ces verbes en -IR se conjuguent comme des verbes en -ER au présent :</p>
<div class="example-box"><div class="fr">j'<strong>ouvre</strong>, tu <strong>ouvres</strong>, il <strong>ouvre</strong>, nous <strong>ouvrons</strong>, vous <strong>ouvrez</strong>, ils <strong>ouvrent</strong><br>j'<strong>offre</strong> · je <strong>souffre</strong> · je <strong>cueille</strong> · je <strong>couvre</strong> · je <strong>découvre</strong></div></div>
<div class="tip-box"><strong>💡 Participes passés :</strong> ouvert, offert, souffert, couvert, découvert (irréguliers !)</div>

<h3>Tableau des participes passés irréguliers</h3>
<table class="grammar-table">
  <tr><th>Infinitif</th><th>Participe passé</th><th>Infinitif</th><th>Participe passé</th></tr>
  <tr><td class="fr-cell">avoir</td><td class="form-cell">eu</td><td class="fr-cell">être</td><td class="form-cell">été</td></tr>
  <tr><td class="fr-cell">faire</td><td class="form-cell">fait</td><td class="fr-cell">dire</td><td class="form-cell">dit</td></tr>
  <tr><td class="fr-cell">prendre</td><td class="form-cell">pris</td><td class="fr-cell">mettre</td><td class="form-cell">mis</td></tr>
  <tr><td class="fr-cell">écrire</td><td class="form-cell">écrit</td><td class="fr-cell">lire</td><td class="form-cell">lu</td></tr>
  <tr><td class="fr-cell">voir</td><td class="form-cell">vu</td><td class="fr-cell">savoir</td><td class="form-cell">su</td></tr>
  <tr><td class="fr-cell">pouvoir</td><td class="form-cell">pu</td><td class="fr-cell">vouloir</td><td class="form-cell">voulu</td></tr>
  <tr><td class="fr-cell">devoir</td><td class="form-cell">dû</td><td class="fr-cell">croire</td><td class="form-cell">cru</td></tr>
  <tr><td class="fr-cell">boire</td><td class="form-cell">bu</td><td class="fr-cell">vivre</td><td class="form-cell">vécu</td></tr>
  <tr><td class="fr-cell">venir</td><td class="form-cell">venu</td><td class="fr-cell">tenir</td><td class="form-cell">tenu</td></tr>
  <tr><td class="fr-cell">courir</td><td class="form-cell">couru</td><td class="fr-cell">mourir</td><td class="form-cell">mort</td></tr>
  <tr><td class="fr-cell">naître</td><td class="form-cell">né</td><td class="fr-cell">connaître</td><td class="form-cell">connu</td></tr>
  <tr><td class="fr-cell">conduire</td><td class="form-cell">conduit</td><td class="fr-cell">construire</td><td class="form-cell">construit</td></tr>
  <tr><td class="fr-cell">ouvrir</td><td class="form-cell">ouvert</td><td class="fr-cell">offrir</td><td class="form-cell">offert</td></tr>
  <tr><td class="fr-cell">peindre</td><td class="form-cell">peint</td><td class="fr-cell">craindre</td><td class="form-cell">craint</td></tr>
  <tr><td class="fr-cell">suivre</td><td class="form-cell">suivi</td><td class="fr-cell">plaire</td><td class="form-cell">plu</td></tr>
</table>`
  },

  {
    id: 13,
    title: "Pouvoir, Devoir, Falloir, Vouloir",
    diff: "A2", topic: "Verbs", source: "Inter",
    preview: "Modal verbs: capacity/permission (pouvoir), obligation/probability (devoir), necessity (falloir).",
    content: `
<h3>POUVOIR + infinitif — capacité ou permission</h3>
<p><strong>Capacité</strong> physique ou intellectuelle :</p>
<div class="example-box"><div class="fr">Paul <strong>peut</strong> soulever cent kilos. / Marie <strong>peut</strong> traduire en trois langues.</div></div>
<p><strong>Permission</strong> :</p>
<div class="example-box"><div class="fr">Vous <strong>pouvez</strong> rester dans cette salle. / On ne <strong>peut</strong> pas fumer ici.</div></div>
<div class="tip-box"><strong>💡 Pour demander un service</strong>, utilisez le conditionnel :<br><em><strong>Pourriez-vous</strong> me dire où se trouve la poste ?</em> (plus poli que <em>Pouvez-vous...</em>)</div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>Je peux rester.</em> — Ne dites pas : <em>~~C'est possible pour moi de rester.~~</em></div>

<h3>DEVOIR + infinitif — obligation ou probabilité</h3>
<p><strong>Obligation / besoin :</strong></p>
<div class="example-box"><div class="fr">Je <strong>dois</strong> payer mes impôts. (obligation) / Je <strong>dois</strong> acheter du pain. (besoin)</div></div>
<p><strong>Probabilité</strong> (= il est probable que) :</p>
<div class="example-box"><div class="fr">Il est neuf heures à Paris. Il <strong>doit</strong> être cinq heures à Rio.<br>Il y a des embouteillages : il <strong>doit</strong> y avoir un accident.</div></div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>Je dois partir.</em> — Ne dites pas : <em>~~C'est nécessaire pour moi de partir.~~</em></div>

<h3>FALLOIR + infinitif — nécessité générale</h3>
<p>S'utilise seulement à la forme <strong>impersonnelle</strong> (il faut) :</p>
<div class="example-box"><div class="fr"><strong>Il faut</strong> manger pour vivre. = On doit (tous) manger pour vivre.</div></div>
<div class="tip-box"><strong>💡 Il ne faut pas / On ne doit pas / On ne peut pas</strong> peuvent être interchangeables :<br><em>On ne peut pas s'asseoir sur la pelouse. = On ne doit pas / Il ne faut pas s'asseoir…</em></div>

<h3>Conjugaison</h3>
<table class="grammar-table">
  <tr><th></th><th>pouvoir</th><th>devoir</th><th>falloir</th><th>vouloir</th></tr>
  <tr><td>je/j'</td><td class="form-cell">peux</td><td class="form-cell">dois</td><td class="form-cell">—</td><td class="form-cell">veux</td></tr>
  <tr><td>tu</td><td class="form-cell">peux</td><td class="form-cell">dois</td><td class="form-cell">—</td><td class="form-cell">veux</td></tr>
  <tr><td>il/elle</td><td class="form-cell">peut</td><td class="form-cell">doit</td><td class="form-cell">il faut</td><td class="form-cell">veut</td></tr>
  <tr><td>nous</td><td class="form-cell">pouvons</td><td class="form-cell">devons</td><td class="form-cell">—</td><td class="form-cell">voulons</td></tr>
  <tr><td>vous</td><td class="form-cell">pouvez</td><td class="form-cell">devez</td><td class="form-cell">—</td><td class="form-cell">voulez</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">peuvent</td><td class="form-cell">doivent</td><td class="form-cell">—</td><td class="form-cell">veulent</td></tr>
</table>

<h3>Ces verbes aux autres temps</h3>
<table class="grammar-table">
  <tr><th>Temps</th><th>Pouvoir</th><th>Devoir</th><th>Vouloir</th><th>Falloir</th></tr>
  <tr><td>Passé composé</td><td class="form-cell">j'ai pu</td><td class="form-cell">j'ai dû</td><td class="form-cell">j'ai voulu</td><td class="form-cell">il a fallu</td></tr>
  <tr><td>Imparfait</td><td class="form-cell">je pouvais</td><td class="form-cell">je devais</td><td class="form-cell">je voulais</td><td class="form-cell">il fallait</td></tr>
  <tr><td>Futur simple</td><td class="form-cell">je pourrai</td><td class="form-cell">je devrai</td><td class="form-cell">je voudrai</td><td class="form-cell">il faudra</td></tr>
  <tr><td>Conditionnel</td><td class="form-cell">je pourrais</td><td class="form-cell">je devrais</td><td class="form-cell">je voudrais</td><td class="form-cell">il faudrait</td></tr>
  <tr><td>Subjonctif</td><td class="form-cell">que je puisse</td><td class="form-cell">que je doive</td><td class="form-cell">que je veuille</td><td class="form-cell">qu'il faille</td></tr>
</table>

<h3>Nuances de sens selon le temps</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">je dois</td><td>obligation présente</td><td class="fr-cell">Je dois partir maintenant.</td></tr>
  <tr><td class="form-cell">j'ai dû</td><td>obligation passée / probabilité passée</td><td class="fr-cell">J'ai dû annuler. / Il a dû oublier.</td></tr>
  <tr><td class="form-cell">je devais</td><td>obligation habituelle / plan passé</td><td class="fr-cell">Je devais me lever tôt. / Je devais partir à 8h.</td></tr>
  <tr><td class="form-cell">je devrais</td><td>conseil (conditionnel)</td><td class="fr-cell">Tu devrais dormir plus.</td></tr>
  <tr><td class="form-cell">j'aurais dû</td><td>regret</td><td class="fr-cell">J'aurais dû étudier davantage.</td></tr>
</table>

<h3>SAVOIR vs POUVOIR — distinction importante</h3>
<table class="grammar-table">
  <tr><th>SAVOIR = compétence acquise</th><th>POUVOIR = capacité / permission</th></tr>
  <tr><td class="fr-cell">Je <strong>sais</strong> nager. (j'ai appris)</td><td class="fr-cell">Je <strong>peux</strong> nager ici. (c'est permis/possible)</td></tr>
  <tr><td class="fr-cell">Elle <strong>sait</strong> conduire. (elle a le permis)</td><td class="fr-cell">Elle ne <strong>peut</strong> pas conduire. (elle est blessée)</td></tr>
  <tr><td class="fr-cell">Il <strong>sait</strong> parler japonais.</td><td class="fr-cell">Il ne <strong>peut</strong> pas parler. (il a mal à la gorge)</td></tr>
</table>
<div class="warning-box"><strong>⚠ Vouloir au conditionnel :</strong> Pour être poli, utilisez <em>je <strong>voudrais</strong></em> (pas <em>je veux</em>) :<br><em>Je <strong>voudrais</strong> un café, s'il vous plaît.</em> (poli) vs <em>Je <strong>veux</strong> un café.</em> (brusque / enfantin)</div>`
  },

  {
    id: 14,
    title: "Les Pronoms Compléments Directs",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "Le/la/les replace direct objects; me/te/nous/vous; negation placement; elision.",
    content: `
<h3>Les pronoms directs remplacent le complément d'objet direct</h3>
<p>Ils répondent à la question « qui ? » ou « quoi ? » et se placent <strong>devant le verbe</strong> :</p>
<div class="example-box"><div class="fr">Je regarde le garçon. → Je <strong>le</strong> regarde.<br>Je regarde la fille. → Je <strong>la</strong> regarde.<br>Je regarde les enfants. → Je <strong>les</strong> regarde.</div></div>

<h3>Tableau complet</h3>
<table class="grammar-table">
  <tr><th>Personne</th><th>Pronom</th><th>Exemple</th></tr>
  <tr><td>1ère sing.</td><td class="form-cell">me (m')</td><td class="fr-cell">Il m'écoute. / Il me voit.</td></tr>
  <tr><td>2ème sing.</td><td class="form-cell">te (t')</td><td class="fr-cell">Je te connais. / Ils t'invitent.</td></tr>
  <tr><td>3ème masc. sing.</td><td class="form-cell">le (l')</td><td class="fr-cell">Je le prends. / Elle l'adore.</td></tr>
  <tr><td>3ème fém. sing.</td><td class="form-cell">la (l')</td><td class="fr-cell">Il la connaît. / Je l'aime.</td></tr>
  <tr><td>1ère plur.</td><td class="form-cell">nous</td><td class="fr-cell">Elle nous appelle.</td></tr>
  <tr><td>2ème plur.</td><td class="form-cell">vous</td><td class="fr-cell">Je vous entends.</td></tr>
  <tr><td>3ème plur.</td><td class="form-cell">les</td><td class="fr-cell">Tu les vois ?</td></tr>
</table>
<div class="tip-box"><strong>💡 Élision :</strong> me, te, le, la → m', t', l' devant voyelle ou h muet :<br><em>Il m'écoute. Elle l'adore. Ils t'invitent.</em></div>

<h3>La négation — se place avant et après le bloc pronom+verbe</h3>
<div class="example-box"><div class="fr">Je le regarde. → Je <strong>ne</strong> le regarde <strong>pas</strong>.<br>Nous les connaissons. → Nous <strong>ne</strong> les connaissons <strong>pas</strong>.</div></div>

<h3>Avec aimer/connaître — personnes de préférence</h3>
<div class="example-box"><div class="fr">– Tu aimes Julie ? – Oui, je <strong>l'</strong>aime.<br>– Tu connais son père ? – Oui, je <strong>le</strong> connais.</div><div class="en">For things, use ça: – Tu aimes le fromage ? – Oui, <strong>j'aime ça</strong>. (not le)</div></div>

<h3>Au passé composé — accord du participe passé</h3>
<p>Avec <strong>avoir</strong>, le participe passé s'accorde avec le COD <strong>placé avant</strong> le verbe :</p>
<table class="grammar-table">
  <tr><th>Sans pronom (pas d'accord)</th><th>Avec pronom COD avant (accord !)</th></tr>
  <tr><td class="fr-cell">J'ai acheté <strong>la robe</strong>.</td><td class="fr-cell">Je <strong>l'</strong>ai achetée. (fém. sing.)</td></tr>
  <tr><td class="fr-cell">J'ai vu <strong>les filles</strong>.</td><td class="fr-cell">Je <strong>les</strong> ai vues. (fém. plur.)</td></tr>
  <tr><td class="fr-cell">Il a pris <strong>les clés</strong>.</td><td class="fr-cell">Il <strong>les</strong> a prises. (fém. plur.)</td></tr>
</table>
<div class="warning-box"><strong>⚠</strong> L'accord se fait uniquement quand le COD est <strong>avant</strong> le verbe (pronom ou « que » relatif) :<br><em>La robe <strong>que</strong> j'ai achetée.</em> · <em>Quels films as-tu <strong>vus</strong> ?</em></div>

<h3>Avec l'infinitif et le futur proche</h3>
<div class="example-box"><div class="fr"><strong>Futur proche :</strong> Je vais <strong>le</strong> faire. / Je ne vais pas <strong>le</strong> faire.<br><strong>Verbe + infinitif :</strong> Je veux <strong>le</strong> voir. / Je peux <strong>les</strong> aider.<br>Le pronom se place devant l'infinitif (pas devant le verbe conjugué).</div></div>

<h3>Verbes courants avec COD (sans préposition)</h3>
<div class="example-box"><div class="fr">regarder qqn/qqch · écouter qqn · voir qqn/qqch · entendre qqn<br>aimer qqn · connaître qqn · chercher qqn/qqch · trouver qqch<br>prendre qqch · acheter qqch · attendre qqn/qqch · appeler qqn</div></div>`
  },

  {
    id: 15,
    title: "Les Pronoms Indirects — LUI, LEUR",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "Indirect object pronouns lui/leur, order of double pronouns, y and en.",
    content: `
<h3>Pronoms indirects — remplacent à + personne</h3>
<table class="grammar-table">
  <tr><th>Personne</th><th>Pronom</th><th>Exemple</th></tr>
  <tr><td>à moi</td><td class="form-cell">me (m')</td><td class="fr-cell">Il me parle. / Il m'écrit.</td></tr>
  <tr><td>à toi</td><td class="form-cell">te (t')</td><td class="fr-cell">Je te dis la vérité.</td></tr>
  <tr><td>à lui/à elle</td><td class="form-cell">lui</td><td class="fr-cell">Je lui explique. / Il lui téléphone.</td></tr>
  <tr><td>à nous</td><td class="form-cell">nous</td><td class="fr-cell">Elle nous écrit.</td></tr>
  <tr><td>à vous</td><td class="form-cell">vous</td><td class="fr-cell">Je vous envoie un mail.</td></tr>
  <tr><td>à eux/à elles</td><td class="form-cell">leur</td><td class="fr-cell">Il leur répond.</td></tr>
</table>

<h3>Y — remplace lieu ou à + chose</h3>
<div class="example-box"><div class="fr">Tu vas à Paris ? → Tu <strong>y</strong> vas ?<br>Il pense à son travail ? → Il <strong>y</strong> pense.</div><div class="en">Are you going (there)? / He's thinking about it.</div></div>

<h3>EN — remplace de + nom (quantité, origine)</h3>
<div class="example-box"><div class="fr">Tu veux du café ? → Tu <strong>en</strong> veux ?<br>Je reviens de France. → J'<strong>en</strong> reviens.<br>Il y a trois croissants. → Il <strong>y en</strong> a trois.</div></div>

<h3>Ordre des pronoms dans la phrase</h3>
<table class="grammar-table">
  <tr><th>Position 1</th><th>Position 2</th><th>Position 3</th><th>Position 4</th><th>Position 5</th></tr>
  <tr><td class="form-cell">me/te/se/nous/vous</td><td class="form-cell">le/la/les</td><td class="form-cell">lui/leur</td><td class="form-cell">y</td><td class="form-cell">en</td></tr>
</table>
<div class="example-box"><div class="fr">Il <strong>me le</strong> donne. / Je <strong>le lui</strong> ai donné. / Elle <strong>y en</strong> a mis.</div></div>

<h3>COD vs COI — comment distinguer ?</h3>
<table class="grammar-table">
  <tr><th>COD (le/la/les)</th><th>COI (lui/leur)</th></tr>
  <tr><td>Verbe + qqn/qqch (sans préposition)</td><td>Verbe + <strong>à</strong> + qqn</td></tr>
  <tr><td class="fr-cell">Je vois Pierre → Je <strong>le</strong> vois.</td><td class="fr-cell">Je parle <strong>à</strong> Pierre → Je <strong>lui</strong> parle.</td></tr>
  <tr><td class="fr-cell">Je prends le livre → Je <strong>le</strong> prends.</td><td class="fr-cell">Je donne le livre <strong>à</strong> Marie → Je <strong>lui</strong> donne le livre.</td></tr>
</table>

<h3>Verbes courants avec COI (à + personne)</h3>
<div class="example-box"><div class="fr">parler à qqn · téléphoner à qqn · écrire à qqn · répondre à qqn<br>donner qqch à qqn · demander qqch à qqn · dire qqch à qqn · envoyer qqch à qqn<br>offrir qqch à qqn · montrer qqch à qqn · expliquer qqch à qqn · prêter qqch à qqn</div></div>

<h3>Verbes qui utilisent les pronoms toniques (pas lui/leur)</h3>
<p>Certains verbes avec <strong>à</strong> n'acceptent pas lui/leur. On utilise <strong>à + pronom tonique</strong> :</p>
<div class="example-box"><div class="fr">penser <strong>à</strong> lui/elle · faire attention <strong>à</strong> lui · s'intéresser <strong>à</strong> lui<br>s'habituer <strong>à</strong> elle · tenir <strong>à</strong> eux · se fier <strong>à</strong> eux</div></div>
<div class="warning-box"><strong>⚠</strong> Ne dites pas : <em>~~Je lui pense~~</em> → Dites : <em>Je pense <strong>à elle</strong>.</em><br>
Ne dites pas : <em>~~Je lui m'habitue~~</em> → Dites : <em>Je m'habitue <strong>à lui</strong>.</em></div>

<h3>Double pronoms à l'impératif affirmatif</h3>
<p>À l'impératif affirmatif, l'ordre change :</p>
<div class="example-box"><div class="fr"><strong>Affirmatif :</strong> Donne-<strong>le-moi</strong> ! / Passe-<strong>la-lui</strong> ! / Donnez-<strong>les-leur</strong> !<br><strong>Négatif :</strong> Ne <strong>me le</strong> donne pas ! / Ne <strong>la lui</strong> passe pas !</div></div>`
  },

  {
    id: 16,
    title: "L'Impératif",
    diff: "A2", topic: "Verbs", source: "Inter",
    preview: "Formation of imperative for tu/nous/vous, irregular forms, pronouns with imperative.",
    content: `
<h3>Utilisation et formation</h3>
<p>L'impératif donne une instruction, un conseil ou un ordre. C'est un présent <strong>sans sujet</strong>, seulement pour <em>tu, nous, vous</em> :</p>
<div class="example-box"><div class="fr">Tu pars. → <strong>Pars !</strong> / Nous partons. → <strong>Partons !</strong> / Vous partez. → <strong>Partez !</strong></div></div>

<h3>Verbes en -ER : pas de -s à tu</h3>
<div class="example-box"><div class="fr"><strong>Regarde !</strong> · <strong>Écoute !</strong> · <strong>Va</strong> vite à l'école ! (pas de s)</div></div>
<div class="tip-box"><strong>💡 Exception devant en/y :</strong> on garde le -s pour la liaison :<br><em>Parles-<strong>en</strong> à Paul !</em> (z) · <em>Penses-<strong>y</strong> !</em> (z) · <em>Vas-<strong>y</strong> !</em> (z)</div>

<h3>Impératifs irréguliers</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Tu</th><th>Nous</th><th>Vous</th></tr>
  <tr><td class="fr-cell">être</td><td class="form-cell">Sois</td><td class="form-cell">Soyons</td><td class="form-cell">Soyez</td></tr>
  <tr><td class="fr-cell">avoir</td><td class="form-cell">Aie</td><td class="form-cell">Ayons</td><td class="form-cell">Ayez</td></tr>
  <tr><td class="fr-cell">savoir</td><td class="form-cell">Sache</td><td class="form-cell">Sachons</td><td class="form-cell">Sachez</td></tr>
  <tr><td class="fr-cell">vouloir</td><td class="form-cell">Veuille</td><td class="form-cell">Voulons</td><td class="form-cell">Veuillez</td></tr>
</table>
<div class="example-box"><div class="fr"><strong>Sois</strong> tranquille. / <strong>Ayez</strong> l'obligeance… / <strong>Veuillez</strong> patienter. / <strong>Veuillez</strong> insérer votre carte.</div></div>

<h3>Place des pronoms compléments</h3>
<p>À la forme <strong>affirmative</strong> → pronoms <strong>après</strong> le verbe (avec tiret) :</p>
<div class="example-box"><div class="fr">Écoute-<strong>le</strong> ! · Téléphone-<strong>lui</strong> ! · Allons-<strong>y</strong> ! · Prends-<strong>en</strong> !<br><strong>me/te → moi/toi :</strong> Téléphone-<strong>moi</strong> ! · Lève-<strong>toi</strong> !</div></div>
<p>À la forme <strong>négative</strong> → pronoms <strong>devant</strong> le verbe (forme normale) :</p>
<div class="example-box"><div class="fr">Ne <strong>me</strong> téléphone pas ! / Ne <strong>te</strong> lève pas ! / Ne <strong>t'</strong>inquiète pas !</div></div>

<h3>L'impératif des verbes pronominaux</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Affirmatif</th><th>Négatif</th></tr>
  <tr><td class="fr-cell">se lever</td><td class="form-cell">Lève-<strong>toi</strong> ! Levons-<strong>nous</strong> ! Levez-<strong>vous</strong> !</td><td class="form-cell">Ne <strong>te</strong> lève pas !</td></tr>
  <tr><td class="fr-cell">se dépêcher</td><td class="form-cell">Dépêche-<strong>toi</strong> !</td><td class="form-cell">Ne <strong>te</strong> dépêche pas !</td></tr>
  <tr><td class="fr-cell">s'asseoir</td><td class="form-cell">Assieds-<strong>toi</strong> ! Asseyez-<strong>vous</strong> !</td><td class="form-cell">Ne <strong>t'</strong>assieds pas !</td></tr>
  <tr><td class="fr-cell">se taire</td><td class="form-cell">Tais-<strong>toi</strong> !</td><td class="form-cell">Ne <strong>te</strong> tais pas !</td></tr>
</table>

<h3>Expressions courantes à l'impératif</h3>
<div class="example-box"><div class="fr"><strong>Politesse :</strong> Veuillez patienter. / Veuillez vous asseoir. / Veuillez m'excuser.<br><strong>Encouragement :</strong> Allez ! Courage ! / Vas-y ! Fonce !<br><strong>Conseil :</strong> Fais attention ! / Prends soin de toi ! / Sois prudent !<br><strong>Interdiction :</strong> Ne touche pas ! / N'y va pas ! / Ne t'en fais pas !<br><strong>Invitation :</strong> Entrez ! / Asseyez-vous ! / Servez-vous ! / Faites comme chez vous !</div></div>

<h3>Impératif + infinitif (instructions écrites)</h3>
<p>Dans les recettes, modes d'emploi, panneaux, on utilise souvent l'<strong>infinitif</strong> au lieu de l'impératif :</p>
<div class="example-box"><div class="fr">Ne pas fumer. / Ne pas déranger. / Agiter avant emploi.<br>Battre les œufs. Ajouter le sucre. Mélanger doucement.</div></div>
<div class="tip-box"><strong>💡</strong> L'infinitif est impersonnel — il s'adresse à tout le monde. L'impératif est personnel — il s'adresse à tu/nous/vous.</div>`
  },

  {
    id: 17,
    title: "Le Conditionnel (1) — Politesse, Conseil, Désir",
    diff: "B1", topic: "Tenses", source: "Inter",
    preview: "Conditional for polite requests (voudrais/pourriez), advice (devriez), desires (aimerais).",
    content: `
<h3>Trois usages principaux du Conditionnel (1)</h3>

<h3>1. La POLITESSE — demander poliment</h3>
<div class="example-box"><div class="fr">– Je <strong>voudrais</strong> un renseignement. (verbe « vouloir »)<br>– Est-ce que je <strong>pourrais</strong> parler à monsieur Bruni ? (verbe « pouvoir »)</div><div class="en">I would like some information. / Could I speak to Mr. Bruni?</div></div>

<h3>2. Le CONSEIL — suggestion</h3>
<div class="example-box"><div class="fr">– Vous <strong>devriez</strong> moderniser votre entreprise. (verbe « devoir »)<br>– Tu <strong>devrais</strong> te faire couper les cheveux.</div><div class="en">You should modernize… / You should get a haircut.</div></div>

<h3>3. Le DÉSIR — wish or longing</h3>
<div class="example-box"><div class="fr">– J'<strong>aimerais</strong> savoir dessiner. (verbe « aimer »)<br>– Je <strong>voudrais</strong> être en vacances.<br>– Je <strong>boirais</strong> <strong>bien</strong> un café. (« bien » = volontiers)</div></div>

<h3>Formes courantes à mémoriser</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Je / Vous</th><th>Terminaisons</th></tr>
  <tr><td class="fr-cell">vouloir</td><td class="form-cell">je voudrais / vous voudriez</td><td rowspan="6" class="form-cell">-rais, -rais, -rait<br>-rions, -riez, -raient</td></tr>
  <tr><td class="fr-cell">aimer</td><td class="form-cell">j'aimerais / vous aimeriez</td></tr>
  <tr><td class="fr-cell">devoir</td><td class="form-cell">je devrais / vous devriez</td></tr>
  <tr><td class="fr-cell">pouvoir</td><td class="form-cell">je pourrais / vous pourriez</td></tr>
  <tr><td class="fr-cell">faire</td><td class="form-cell">je ferais / vous feriez</td></tr>
  <tr><td class="fr-cell">aller</td><td class="form-cell">j'irais / vous iriez</td></tr>
</table>
<div class="tip-box"><strong>💡 Formation :</strong> radical du futur + terminaisons de l'imparfait (-rais, -rais, -rait, -rions, -riez, -raient)</div>

<h3>Conjugaison complète du conditionnel — verbes irréguliers</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Je</th><th>Tu</th><th>Il/Elle</th><th>Nous</th><th>Vous</th><th>Ils/Elles</th></tr>
  <tr><td class="fr-cell">être</td><td class="form-cell">serais</td><td class="form-cell">serais</td><td class="form-cell">serait</td><td class="form-cell">serions</td><td class="form-cell">seriez</td><td class="form-cell">seraient</td></tr>
  <tr><td class="fr-cell">avoir</td><td class="form-cell">aurais</td><td class="form-cell">aurais</td><td class="form-cell">aurait</td><td class="form-cell">aurions</td><td class="form-cell">auriez</td><td class="form-cell">auraient</td></tr>
  <tr><td class="fr-cell">savoir</td><td class="form-cell">saurais</td><td class="form-cell">saurais</td><td class="form-cell">saurait</td><td class="form-cell">saurions</td><td class="form-cell">sauriez</td><td class="form-cell">sauraient</td></tr>
  <tr><td class="fr-cell">voir</td><td class="form-cell">verrais</td><td class="form-cell">verrais</td><td class="form-cell">verrait</td><td class="form-cell">verrions</td><td class="form-cell">verriez</td><td class="form-cell">verraient</td></tr>
  <tr><td class="fr-cell">envoyer</td><td class="form-cell">enverrais</td><td class="form-cell">enverrais</td><td class="form-cell">enverrait</td><td class="form-cell">enverrions</td><td class="form-cell">enverriez</td><td class="form-cell">enverraient</td></tr>
  <tr><td class="fr-cell">courir</td><td class="form-cell">courrais</td><td class="form-cell">courrais</td><td class="form-cell">courrait</td><td class="form-cell">courrions</td><td class="form-cell">courriez</td><td class="form-cell">courraient</td></tr>
</table>
<div class="warning-box"><strong>⚠ Double « r » :</strong> pouvoir → pour<strong>r</strong>ais · voir → ver<strong>r</strong>ais · courir → cour<strong>r</strong>ais · envoyer → enver<strong>r</strong>ais<br>Ne confondez pas le futur et le conditionnel : <em>je pourr<strong>ai</strong></em> (futur) vs <em>je pourr<strong>ais</strong></em> (conditionnel)</div>

<h3>Conditionnel de politesse — expressions utiles</h3>
<div class="example-box"><div class="fr">Je <strong>voudrais</strong> réserver une table pour deux. (= I'd like to…)<br>Est-ce que je <strong>pourrais</strong> avoir l'addition ? (= Could I…?)<br>Vous <strong>n'auriez</strong> pas un stylo ? (= You wouldn't happen to have…?)<br><strong>Pourriez</strong>-vous me passer le sel ? (= Could you…?)<br>Tu <strong>ne saurais</strong> pas où est la gare ? (= Would you happen to know…?)<br>Ça vous <strong>dérangerait</strong> de fermer la fenêtre ? (= Would you mind…?)</div></div>`
  },

  {
    id: 18,
    title: "Les Relatifs — Qui, Que, Où, Dont",
    diff: "B1", topic: "Pronouns", source: "Inter",
    preview: "Simple relative pronouns qui/que/où, plus dont, la mise en relief, relatifs composés.",
    content: `
<h3>Les Relatifs simples</h3>
<table class="grammar-table">
  <tr><th>Relatif</th><th>Fonction</th><th>Exemple</th></tr>
  <tr><td class="form-cell">QUI</td><td>Sujet du verbe qui suit (personne ou chose)</td><td class="fr-cell">La femme <strong>qui</strong> passe est brune. / L'air <strong>qui</strong> passe à la radio est « Summertime ».</td></tr>
  <tr><td class="form-cell">QUE (QU')</td><td>Complément d'objet (personne ou chose)</td><td class="fr-cell">La femme <strong>que</strong> je regarde porte une robe. / L'air <strong>qu'</strong>il écoute…</td></tr>
  <tr><td class="form-cell">OÙ</td><td>Lieu ou temps</td><td class="fr-cell">La ville <strong>où</strong> j'habite est grande. / Le jour <strong>où</strong> je suis né…</td></tr>
  <tr><td class="form-cell">DONT</td><td>Remplace de + nom (verbes en de)</td><td class="fr-cell">Le film <strong>dont</strong> je parle est excellent. / L'idéal <strong>dont</strong> il rêve…</td></tr>
</table>
<div class="tip-box"><strong>💡 Élision :</strong> que → qu' devant voyelle, mais QUI ne change jamais :<br><em>La femme <strong>qu'</strong>il aime est brune. / La femme <strong>qui</strong> arrive est blonde.</em></div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>C'est un livre <strong>qui</strong> est intéressant.</em> — Ne dites pas : <em>~~C'est un livre que c'est intéressant~~</em></div>

<h3>La mise en relief avec QUI / QUE</h3>
<div class="example-box"><div class="fr">C'est lui <strong>qui</strong> a téléphoné. (mise en relief du sujet)<br>C'est lui <strong>que</strong> j'ai vu. (mise en relief du complément)</div></div>

<h3>Les Relatifs composés — lequel, laquelle, lesquels…</h3>
<p>Après une préposition (sauf de) quand on parle d'une chose :</p>
<table class="grammar-table">
  <tr><th>Genre/Nombre</th><th>Forme</th><th>Exemple</th></tr>
  <tr><td>Masc. sing.</td><td class="form-cell">lequel</td><td class="fr-cell">Le stylo avec <strong>lequel</strong> j'écris…</td></tr>
  <tr><td>Fém. sing.</td><td class="form-cell">laquelle</td><td class="fr-cell">La table sur <strong>laquelle</strong> j'écris…</td></tr>
  <tr><td>Masc. plur.</td><td class="form-cell">lesquels</td><td class="fr-cell">Les raisons pour <strong>lesquelles</strong>…</td></tr>
  <tr><td>Fém. plur.</td><td class="form-cell">lesquelles</td><td class="fr-cell">Les personnes auxquelles…</td></tr>
</table>
<div class="tip-box"><strong>💡 Contractions :</strong> à + lequel → <em>auquel</em> · de + lequel → <em>duquel</em> · à + lesquels → <em>auxquels</em></div>

<h3>DONT — détails avancés</h3>
<p><strong>Dont</strong> remplace <strong>de + nom</strong> dans trois cas :</p>
<table class="grammar-table">
  <tr><th>Cas</th><th>Verbe/Expression + de</th><th>Avec DONT</th></tr>
  <tr><td>Verbe + de</td><td class="fr-cell">parler de, rêver de, avoir besoin de, avoir peur de, s'occuper de</td><td class="fr-cell">Le film <strong>dont</strong> je parle. / La chose <strong>dont</strong> j'ai besoin.</td></tr>
  <tr><td>Nom + de (possession)</td><td class="fr-cell">le père de Marie, le titre du livre</td><td class="fr-cell">L'homme <strong>dont</strong> le père est médecin. / Le livre <strong>dont</strong> j'ai oublié le titre.</td></tr>
  <tr><td>Adjectif + de</td><td class="fr-cell">content de, fier de, satisfait de</td><td class="fr-cell">Le résultat <strong>dont</strong> je suis fier.</td></tr>
</table>
<div class="warning-box"><strong>⚠ DONT vs D'OÙ :</strong><br>
<em>La ville <strong>d'où</strong> je viens.</em> (origine géographique) — pas : ~~dont je viens~~<br>
<em>L'idée <strong>dont</strong> je parle.</em> (verbe + de) — pas : ~~d'où je parle~~</div>

<h3>CE QUI / CE QUE / CE DONT / CE À QUOI — relatifs sans antécédent</h3>
<p>Quand il n'y a pas de nom avant le relatif (on parle d'une idée abstraite) :</p>
<table class="grammar-table">
  <tr><th>Forme</th><th>Fonction</th><th>Exemple</th></tr>
  <tr><td class="form-cell">ce qui</td><td>sujet</td><td class="fr-cell"><strong>Ce qui</strong> m'intéresse, c'est la musique. / Dis-moi <strong>ce qui</strong> se passe.</td></tr>
  <tr><td class="form-cell">ce que</td><td>COD</td><td class="fr-cell"><strong>Ce que</strong> tu dis est vrai. / Je ne comprends pas <strong>ce que</strong> tu veux.</td></tr>
  <tr><td class="form-cell">ce dont</td><td>de + chose</td><td class="fr-cell"><strong>Ce dont</strong> j'ai besoin, c'est du repos. / C'est <strong>ce dont</strong> je parlais.</td></tr>
  <tr><td class="form-cell">ce à quoi</td><td>à + chose</td><td class="fr-cell"><strong>Ce à quoi</strong> je pense est compliqué.</td></tr>
</table>
<div class="example-box"><div class="fr">Tout <strong>ce qui</strong> brille n'est pas or. (= Everything that glitters…)<br>Fais <strong>ce que</strong> tu veux ! (= Do what you want!)<br>Voilà <strong>ce dont</strong> il s'agit. (= Here's what it's about.)</div></div>`
  },

  {
    id: 19,
    title: "La Négation (2) — Jamais, Plus, Rien, Personne, Aucun",
    diff: "B1", topic: "Negation", source: "Inter",
    preview: "Advanced negation: ne...jamais, ne...plus, ne...rien, ne...personne, ne...aucun, ni...ni.",
    content: `
<h3>NE... JAMAIS ≠ toujours</h3>
<div class="example-box"><div class="fr">Je bois <strong>toujours</strong> du thé le matin. → Je ne bois <strong>jamais</strong> de café. (= habitude)</div></div>

<h3>NE... PLUS ≠ encore / toujours</h3>
<div class="example-box"><div class="fr">Max fume <strong>encore</strong>. → Moi, je ne fume <strong>plus</strong>. (= changement)<br>– Tu fumes <strong>toujours</strong> ? → Non, je ne fume <strong>plus</strong>.</div></div>
<div class="tip-box"><strong>💡 Prononciation :</strong> Le « s » de « plus » négatif ne se prononce jamais :<br><em>Je ne bois plu/</em> · <em>Je ne fume plu/</em></div>

<h3>NE... AUCUN ≠ pas un seul</h3>
<div class="example-box"><div class="fr">Je ne connais <strong>aucun</strong> Français. = pas un seul Français<br>Je n'ai <strong>aucun</strong> ami en France. = pas un seul ami</div></div>

<h3>NE... RIEN ≠ quelque chose · NE... PERSONNE ≠ quelqu'un</h3>
<table class="grammar-table">
  <tr><th>Affirmation</th><th>Négation</th></tr>
  <tr><td class="fr-cell">Tu vois quelque chose ?</td><td class="fr-cell">Je ne vois <strong>rien</strong>.</td></tr>
  <tr><td class="fr-cell">Tu attends quelqu'un ?</td><td class="fr-cell">Je n'attends <strong>personne</strong>.</td></tr>
</table>
<div class="tip-box"><strong>💡 En position sujet :</strong> <em><strong>Rien</strong> ne bouge. <strong>Personne</strong> ne parle.</em></div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>Je ne connais <strong>personne</strong>.</em> — Ne dites pas : <em>~~Je ne connais pas personne~~</em></div>

<h3>Plusieurs négations peuvent se combiner</h3>
<div class="example-box"><div class="fr">Tu ne comprends <strong>jamais rien</strong>. / Il n'y a <strong>plus personne</strong>.</div></div>

<h3>NE... NI... NI — neither...nor</h3>
<div class="example-box"><div class="fr">Je n'aime <strong>ni</strong> le thé <strong>ni</strong> le café. / Il ne parle <strong>ni</strong> français <strong>ni</strong> anglais.</div></div>

<h3>NE... QUE — restriction (seulement)</h3>
<div class="example-box"><div class="fr">Il ne mange <strong>que</strong> des légumes. = Il mange seulement des légumes.</div></div>

<h3>Négation au passé composé</h3>
<p>La négation entoure l'<strong>auxiliaire</strong> (pas le participe passé) :</p>
<table class="grammar-table">
  <tr><th>Négation</th><th>Exemple au passé composé</th></tr>
  <tr><td class="form-cell">ne…pas</td><td class="fr-cell">Je <strong>n'</strong>ai <strong>pas</strong> mangé.</td></tr>
  <tr><td class="form-cell">ne…jamais</td><td class="fr-cell">Il <strong>n'</strong>a <strong>jamais</strong> voyagé.</td></tr>
  <tr><td class="form-cell">ne…plus</td><td class="fr-cell">Nous <strong>n'</strong>avons <strong>plus</strong> parlé.</td></tr>
  <tr><td class="form-cell">ne…rien</td><td class="fr-cell">Je <strong>n'</strong>ai <strong>rien</strong> compris.</td></tr>
  <tr><td class="form-cell">ne…personne</td><td class="fr-cell">Je <strong>n'</strong>ai vu <strong>personne</strong>. (personne = après le participe !)</td></tr>
  <tr><td class="form-cell">ne…aucun</td><td class="fr-cell">Il <strong>n'</strong>a fait <strong>aucune</strong> erreur. (aucun = après le participe)</td></tr>
</table>
<div class="warning-box"><strong>⚠ PERSONNE et AUCUN</strong> se placent <strong>après</strong> le participe passé (pas entre auxiliaire et participe) :<br><em>Je n'ai vu <strong>personne</strong>.</em> (pas : ~~Je n'ai personne vu.~~)</div>

<h3>Négation à l'infinitif</h3>
<p>Les deux éléments de la négation se placent <strong>ensemble avant</strong> l'infinitif :</p>
<div class="example-box"><div class="fr">Il m'a dit de <strong>ne pas</strong> venir. (pas : ~~ne venir pas~~)<br>Il est important de <strong>ne jamais</strong> mentir.<br>Je préfère <strong>ne rien</strong> dire. / Il vaut mieux <strong>ne plus</strong> y penser.</div></div>

<h3>SANS + infinitif / nom — négation implicite</h3>
<div class="example-box"><div class="fr">Il est parti <strong>sans</strong> dire au revoir. / <strong>Sans</strong> argent, on ne peut rien faire.<br>Elle travaille <strong>sans</strong> jamais se plaindre. (sans + négation = double négatif possible)</div></div>

<h3>Récapitulatif complet des négations</h3>
<table class="grammar-table">
  <tr><th>Affirmatif</th><th>Négatif</th></tr>
  <tr><td class="fr-cell">toujours / souvent</td><td class="form-cell">ne…jamais</td></tr>
  <tr><td class="fr-cell">encore / toujours</td><td class="form-cell">ne…plus</td></tr>
  <tr><td class="fr-cell">quelque chose</td><td class="form-cell">ne…rien</td></tr>
  <tr><td class="fr-cell">quelqu'un</td><td class="form-cell">ne…personne</td></tr>
  <tr><td class="fr-cell">quelque part</td><td class="form-cell">ne…nulle part</td></tr>
  <tr><td class="fr-cell">déjà</td><td class="form-cell">ne…pas encore</td></tr>
  <tr><td class="fr-cell">et…et / ou…ou</td><td class="form-cell">ne…ni…ni</td></tr>
  <tr><td class="fr-cell">un(e) / des / du / de la</td><td class="form-cell">ne…aucun(e)</td></tr>
</table>`
  },

  {
    id: 20,
    title: "Le Passé Composé avec ÊTRE",
    diff: "A2", topic: "Tenses", source: "Inter",
    preview: "14 movement/state change verbs use être; agreement of past participle with subject.",
    content: `
<h3>Les verbes du type ARRIVER / PARTIR — avec ÊTRE</h3>
<p>Ces 14 verbes indiquent un <strong>changement de lieu</strong> :</p>
<table class="grammar-table">
  <tr><th colspan="2">Les 14 verbes (+ leurs composés)</th></tr>
  <tr><td class="fr-cell">venir / revenir / devenir</td><td class="fr-cell">entrer / rentrer</td></tr>
  <tr><td class="fr-cell">aller / s'en aller</td><td class="fr-cell">sortir / ressortir</td></tr>
  <tr><td class="fr-cell">arriver / repartir</td><td class="fr-cell">partir / repartir</td></tr>
  <tr><td class="fr-cell">monter / remonter</td><td class="fr-cell">descendre / redescendre</td></tr>
  <tr><td class="fr-cell">naître / renaître</td><td class="fr-cell">mourir</td></tr>
  <tr><td class="fr-cell">rester (= déplacement zéro)</td><td class="fr-cell">passer / tomber / retourner</td></tr>
</table>

<h3>Formation — être au présent + participe passé</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Partir</th><th>Arriver</th><th>Venir</th></tr>
  <tr><td>je</td><td class="form-cell">suis parti(e)</td><td class="form-cell">suis arrivé(e)</td><td class="form-cell">suis venu(e)</td></tr>
  <tr><td>tu</td><td class="form-cell">es parti(e)</td><td class="form-cell">es arrivé(e)</td><td class="form-cell">es venu(e)</td></tr>
  <tr><td>il/elle</td><td class="form-cell">est parti/partie</td><td class="form-cell">est arrivé/e</td><td class="form-cell">est venu/e</td></tr>
  <tr><td>nous</td><td class="form-cell">sommes parti(e)s</td><td class="form-cell">sommes arrivé(e)s</td><td class="form-cell">sommes venu(e)s</td></tr>
  <tr><td>vous</td><td class="form-cell">êtes parti(e)(s)</td><td class="form-cell">êtes arrivé(e)(s)</td><td class="form-cell">êtes venu(e)(s)</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">sont partis/parties</td><td class="form-cell">sont arrivés/ées</td><td class="form-cell">sont venus/venues</td></tr>
</table>
<div class="example-box"><div class="fr">Elle est <strong>restée</strong> chez elle. / Ils sont <strong>allés</strong> au restaurant.</div></div>

<h3>Accord du participe passé avec le sujet</h3>
<div class="tip-box"><strong>💡 Le participe s'accorde comme un adjectif avec le sujet :</strong><br>Masc. sing. : <em>parti</em> · Fém. sing. : <em>partie</em> · Masc. plur. : <em>partis</em> · Fém. plur. : <em>parties</em></div>

<h3>Verbes de manière de se déplacer → avec AVOIR</h3>
<div class="example-box"><div class="fr">J'<strong>ai</strong> marché, j'<strong>ai</strong> couru, j'<strong>ai</strong> sauté, j'<strong>ai</strong> dansé.</div><div class="en">These use AVOIR because they indicate HOW you moved, not WHERE you went.</div></div>
<div class="tip-box"><strong>💡 RESTER → être</strong> (= déplacement zéro) : <em>Je <strong>suis</strong> resté à l'hôtel</em> signifie : je ne suis pas sorti.</div>

<h3>Moyen mnémotechnique — DR & MRS VANDERTRAMP</h3>
<div class="example-box"><div class="fr"><strong>D</strong>evenir · <strong>R</strong>evenir · <strong>M</strong>onter · <strong>R</strong>ester · <strong>S</strong>ortir<br><strong>V</strong>enir · <strong>A</strong>ller · <strong>N</strong>aître · <strong>D</strong>escendre · <strong>E</strong>ntrer · <strong>R</strong>entrer<br><strong>T</strong>omber · <strong>R</strong>etourner · <strong>A</strong>rriver · <strong>M</strong>ourir · <strong>P</strong>artir</div></div>

<h3>Verbes qui changent d'auxiliaire selon l'usage</h3>
<p>Certains verbes utilisent <strong>être</strong> (intransitif / changement de lieu) OU <strong>avoir</strong> (transitif / avec COD) :</p>
<table class="grammar-table">
  <tr><th>Verbe</th><th>ÊTRE (sans COD)</th><th>AVOIR (avec COD)</th></tr>
  <tr><td class="fr-cell">monter</td><td class="fr-cell">Je <strong>suis monté</strong> au 3ème étage.</td><td class="fr-cell">J'<strong>ai monté</strong> les valises.</td></tr>
  <tr><td class="fr-cell">descendre</td><td class="fr-cell">Elle <strong>est descendue</strong> au rez-de-chaussée.</td><td class="fr-cell">Elle <strong>a descendu</strong> les poubelles.</td></tr>
  <tr><td class="fr-cell">sortir</td><td class="fr-cell">Il <strong>est sorti</strong> à 8h.</td><td class="fr-cell">Il <strong>a sorti</strong> le chien.</td></tr>
  <tr><td class="fr-cell">rentrer</td><td class="fr-cell">Nous <strong>sommes rentrés</strong> tard.</td><td class="fr-cell">J'<strong>ai rentré</strong> la voiture au garage.</td></tr>
  <tr><td class="fr-cell">passer</td><td class="fr-cell">Il <strong>est passé</strong> chez moi.</td><td class="fr-cell">J'<strong>ai passé</strong> un bon week-end.</td></tr>
  <tr><td class="fr-cell">retourner</td><td class="fr-cell">Elle <strong>est retournée</strong> au bureau.</td><td class="fr-cell">Il <strong>a retourné</strong> la crêpe.</td></tr>
</table>

<h3>Tous les verbes pronominaux → ÊTRE</h3>
<div class="example-box"><div class="fr">Je <strong>me suis</strong> levé(e) tôt. / Elle <strong>s'est</strong> habillée vite.<br>Nous <strong>nous sommes</strong> promenés. / Ils <strong>se sont</strong> rencontrés à Paris.</div></div>
<div class="warning-box"><strong>⚠ Accord avec les pronominaux :</strong><br>
Le participe s'accorde avec le <strong>sujet</strong> si le pronom est COD :<br>
<em>Elle <strong>s'</strong>est lavé<strong>e</strong>.</em> (se = COD = elle-même)<br>
Pas d'accord si le pronom est COI :<br>
<em>Elle <strong>s'</strong>est lavé <strong>les mains</strong>.</em> (se = COI, les mains = COD)</div>`
  },

  {
    id: 21,
    title: "L'Imparfait — Habitudes et Descriptions",
    diff: "A2", topic: "Tenses", source: "Inter",
    preview: "Formation of imparfait, usage for past habits/descriptions, imparfait vs passé composé.",
    content: `
<h3>Formation</h3>
<p>Radical de la 1ère personne du pluriel du présent + terminaisons :</p>
<p><strong>-ais, -ais, -ait, -ions, -iez, -aient</strong></p>
<table class="grammar-table">
  <tr><th>Nous au présent</th><th>Radical</th><th>Je / Il / Ils</th></tr>
  <tr><td class="fr-cell">nous parl<strong>ons</strong></td><td class="form-cell">parl-</td><td class="form-cell">parlais / parlait / parlaient</td></tr>
  <tr><td class="fr-cell">nous pren<strong>ons</strong></td><td class="form-cell">pren-</td><td class="form-cell">prenais / prenait / prenaient</td></tr>
  <tr><td class="fr-cell">nous finiss<strong>ons</strong></td><td class="form-cell">finiss-</td><td class="form-cell">finissais / finissait / finissaient</td></tr>
  <tr><td class="fr-cell">nous mange<strong>ons</strong></td><td class="form-cell">mange-</td><td class="form-cell">mangeais (g+e+a)</td></tr>
  <tr><td class="fr-cell">nous commençons</td><td class="form-cell">commença-</td><td class="form-cell">commençais (ç+a)</td></tr>
</table>
<div class="warning-box"><strong>⚠ Seul irrégulier :</strong> être → j'<strong>étais</strong>, tu <strong>étais</strong>, il <strong>était</strong>, nous <strong>étions</strong>…</div>

<h3>Utilisation</h3>
<p><strong>1. Les habitudes passées :</strong></p>
<div class="example-box"><div class="fr">Maintenant, j'habite à Paris. Avant, j'<strong>habitais</strong> à Marseille.<br>Quand j'<strong>étais</strong> jeune, je <strong>jouais</strong> du piano.</div></div>
<p><strong>2. Après certaines expressions :</strong> <em>À cette époque-là, Avant, Quand j'étais jeune,</em> → imparfait</p>

<h3>L'Imparfait et le Passé Composé</h3>
<table class="grammar-table">
  <tr><th>Imparfait (IMP)</th><th>Passé Composé (PC)</th></tr>
  <tr><td>Souvenirs, habitudes passées</td><td>Événements ponctuels</td></tr>
  <tr><td>Décor, descriptions (comme une photo)</td><td>Succession d'événements (comme un film)</td></tr>
  <tr><td>Durée indéfinie (Avant, Quand…)</td><td>Durée définie (De 1980 à 1990, Pendant dix ans…)</td></tr>
</table>
<div class="example-box"><div class="fr">Le jour où j'<strong>ai joué</strong> (PC) devant la reine, j'<strong>avais</strong> (IMP) douze ans. C'<strong>était</strong> (IMP) la fête de l'école. Il <strong>faisait</strong> (IMP) chaud.</div></div>
<div class="example-box"><div class="fr">Pendant que je <strong>jouais</strong> (IMP = en cours), la reine <strong>est arrivée</strong> (PC = interruption soudaine).</div></div>
<div class="tip-box"><strong>💡 Tout à coup / soudain / brusquement</strong> → introduisent un PC<br><strong>Pendant que</strong> → introduit un imparfait</div>

<h3>Conjugaison complète de l'imparfait — verbes irréguliers</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Nous (présent)</th><th>Je (imparfait)</th><th>Nous (imparfait)</th></tr>
  <tr><td class="fr-cell">avoir</td><td class="form-cell">nous avons</td><td class="form-cell">j'avais</td><td class="form-cell">nous avions</td></tr>
  <tr><td class="fr-cell">faire</td><td class="form-cell">nous faisons</td><td class="form-cell">je faisais</td><td class="form-cell">nous faisions</td></tr>
  <tr><td class="fr-cell">prendre</td><td class="form-cell">nous prenons</td><td class="form-cell">je prenais</td><td class="form-cell">nous prenions</td></tr>
  <tr><td class="fr-cell">boire</td><td class="form-cell">nous buvons</td><td class="form-cell">je buvais</td><td class="form-cell">nous buvions</td></tr>
  <tr><td class="fr-cell">voir</td><td class="form-cell">nous voyons</td><td class="form-cell">je voyais</td><td class="form-cell">nous voyions</td></tr>
  <tr><td class="fr-cell">pouvoir</td><td class="form-cell">nous pouvons</td><td class="form-cell">je pouvais</td><td class="form-cell">nous pouvions</td></tr>
  <tr><td class="fr-cell">savoir</td><td class="form-cell">nous savons</td><td class="form-cell">je savais</td><td class="form-cell">nous savions</td></tr>
  <tr><td class="fr-cell">devoir</td><td class="form-cell">nous devons</td><td class="form-cell">je devais</td><td class="form-cell">nous devions</td></tr>
  <tr><td class="fr-cell">vouloir</td><td class="form-cell">nous voulons</td><td class="form-cell">je voulais</td><td class="form-cell">nous voulions</td></tr>
  <tr><td class="fr-cell">venir</td><td class="form-cell">nous venons</td><td class="form-cell">je venais</td><td class="form-cell">nous venions</td></tr>
  <tr><td class="fr-cell"><strong>être</strong></td><td class="form-cell">—</td><td class="form-cell"><strong>j'étais</strong></td><td class="form-cell"><strong>nous étions</strong></td></tr>
</table>

<h3>Mots-clés associés à l'imparfait vs passé composé</h3>
<table class="grammar-table">
  <tr><th>→ IMPARFAIT (habitude/décor)</th><th>→ PASSÉ COMPOSÉ (événement)</th></tr>
  <tr><td class="fr-cell">autrefois, avant, à cette époque</td><td class="fr-cell">hier, la semaine dernière, en 2020</td></tr>
  <tr><td class="fr-cell">chaque jour, tous les matins, souvent</td><td class="fr-cell">un jour, soudain, tout à coup</td></tr>
  <tr><td class="fr-cell">d'habitude, en général, normalement</td><td class="fr-cell">ce matin, ce jour-là, à ce moment-là</td></tr>
  <tr><td class="fr-cell">quand j'étais jeune/petit, pendant que</td><td class="fr-cell">pendant deux heures, de 9h à 11h</td></tr>
</table>

<h3>Imparfait de politesse</h3>
<p>L'imparfait peut exprimer la <strong>politesse</strong> (comme le conditionnel) :</p>
<div class="example-box"><div class="fr">Je <strong>voulais</strong> vous demander un service. (= je voudrais)<br>Je <strong>venais</strong> vous voir pour le dossier. (= je viens)</div></div>

<h3>Récit au passé — construction type</h3>
<div class="example-box"><div class="fr">Il <strong>faisait</strong> beau (IMP=décor). Les oiseaux <strong>chantaient</strong> (IMP=décor).<br>Soudain, un homme <strong>est entré</strong> (PC=action). Il <strong>portait</strong> (IMP=description) un chapeau noir.<br>Il <strong>a regardé</strong> (PC=action) autour de lui et <strong>a posé</strong> (PC=action) une valise sur la table.</div></div>`
  },

  {
    id: 22,
    title: "Le Futur Simple",
    diff: "B1", topic: "Tenses", source: "Inter",
    preview: "Future simple formation, irregular stems, futur simple vs futur proche, quand + futur.",
    content: `
<h3>Utilisation</h3>
<p>Pour des projets d'avenir ou des prévisions (souvent dans le long terme) :</p>
<div class="example-box"><div class="fr">Dans cinq ans, je <strong>prendrai</strong> ma retraite.<br>Demain, il <strong>pleuvra</strong> sur toute la France.</div></div>

<h3>Formation — infinitif + terminaisons</h3>
<p><strong>Terminaisons : -ai, -as, -a, -ons, -ez, -ont</strong></p>
<p>Pour les infinitifs en -re, on supprime le -e final :</p>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Parler</th><th>Finir</th><th>Vendre (vendr-)</th></tr>
  <tr><td>je</td><td class="form-cell">parlerai</td><td class="form-cell">finirai</td><td class="form-cell">vendrai</td></tr>
  <tr><td>tu</td><td class="form-cell">parleras</td><td class="form-cell">finiras</td><td class="form-cell">vendras</td></tr>
  <tr><td>il/elle</td><td class="form-cell">parlera</td><td class="form-cell">finira</td><td class="form-cell">vendra</td></tr>
  <tr><td>nous</td><td class="form-cell">parlerons</td><td class="form-cell">finirons</td><td class="form-cell">vendrons</td></tr>
  <tr><td>vous</td><td class="form-cell">parlerez</td><td class="form-cell">finirez</td><td class="form-cell">vendrez</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">parleront</td><td class="form-cell">finiront</td><td class="form-cell">vendront</td></tr>
</table>
<div class="tip-box"><strong>💡 Le son « r »</strong> est caractéristique du futur simple.</div>

<h3>Radicaux irréguliers</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Radical</th><th>Je…</th><th>Verbe</th><th>Radical</th><th>Je…</th></tr>
  <tr><td class="fr-cell">être</td><td class="form-cell">ser-</td><td class="form-cell">serai</td><td class="fr-cell">aller</td><td class="form-cell">ir-</td><td class="form-cell">irai</td></tr>
  <tr><td class="fr-cell">avoir</td><td class="form-cell">aur-</td><td class="form-cell">aurai</td><td class="fr-cell">faire</td><td class="form-cell">fer-</td><td class="form-cell">ferai</td></tr>
  <tr><td class="fr-cell">pouvoir</td><td class="form-cell">pourr-</td><td class="form-cell">pourrai</td><td class="fr-cell">devoir</td><td class="form-cell">devr-</td><td class="form-cell">devrai</td></tr>
  <tr><td class="fr-cell">vouloir</td><td class="form-cell">voudr-</td><td class="form-cell">voudrai</td><td class="fr-cell">venir</td><td class="form-cell">viendr-</td><td class="form-cell">viendrai</td></tr>
  <tr><td class="fr-cell">voir</td><td class="form-cell">verr-</td><td class="form-cell">verrai</td><td class="fr-cell">savoir</td><td class="form-cell">saur-</td><td class="form-cell">saurai</td></tr>
  <tr><td class="fr-cell">il y a</td><td class="form-cell">—</td><td class="form-cell">il y aura</td><td class="fr-cell">il faut</td><td class="form-cell">—</td><td class="form-cell">il faudra</td></tr>
</table>

<h3>Futur Simple vs Futur Proche</h3>
<p><strong>Futur proche</strong> (aller + inf.) = imminent, certain, planifié :</p>
<div class="example-box"><div class="fr">Je <strong>vais partir</strong> dans cinq minutes. (imminent)</div></div>
<p><strong>Futur simple</strong> = plus lointain, prévision, moins certain :</p>
<div class="example-box"><div class="fr">Dans dix ans, les voitures <strong>seront</strong> toutes électriques.</div></div>
<div class="tip-box"><strong>💡 Après QUAND/LORSQUE :</strong> Contrairement à l'anglais, le français utilise le futur simple :<br><em>Quand tu <strong>arriveras</strong>, appelle-moi.</em> (= When you arrive — présent en anglais, futur en français!)</div>

<h3>Tous les radicaux irréguliers du futur (complet)</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Radical</th><th>Verbe</th><th>Radical</th></tr>
  <tr><td class="fr-cell">être</td><td class="form-cell">ser-</td><td class="fr-cell">avoir</td><td class="form-cell">aur-</td></tr>
  <tr><td class="fr-cell">aller</td><td class="form-cell">ir-</td><td class="fr-cell">faire</td><td class="form-cell">fer-</td></tr>
  <tr><td class="fr-cell">pouvoir</td><td class="form-cell">pourr-</td><td class="fr-cell">devoir</td><td class="form-cell">devr-</td></tr>
  <tr><td class="fr-cell">vouloir</td><td class="form-cell">voudr-</td><td class="fr-cell">venir</td><td class="form-cell">viendr-</td></tr>
  <tr><td class="fr-cell">voir</td><td class="form-cell">verr-</td><td class="fr-cell">savoir</td><td class="form-cell">saur-</td></tr>
  <tr><td class="fr-cell">envoyer</td><td class="form-cell">enverr-</td><td class="fr-cell">courir</td><td class="form-cell">courr-</td></tr>
  <tr><td class="fr-cell">mourir</td><td class="form-cell">mourr-</td><td class="fr-cell">acquérir</td><td class="form-cell">acquerr-</td></tr>
  <tr><td class="fr-cell">tenir</td><td class="form-cell">tiendr-</td><td class="fr-cell">recevoir</td><td class="form-cell">recevr-</td></tr>
  <tr><td class="fr-cell">valoir</td><td class="form-cell">vaudr-</td><td class="fr-cell">falloir</td><td class="form-cell">faudr-</td></tr>
  <tr><td class="fr-cell">pleuvoir</td><td class="form-cell">pleuvr-</td><td class="fr-cell">s'asseoir</td><td class="form-cell">assiér-/assoir-</td></tr>
</table>
<div class="tip-box"><strong>💡 Les composés suivent le même modèle :</strong><br>
venir → viendr- donc : revenir → reviendr-, devenir → deviendr-, prévenir → préviendr-<br>
tenir → tiendr- donc : obtenir → obtiendr-, retenir → retiendr-, maintenir → maintiendr-</div>

<h3>Conjonctions de temps + futur (pas le présent !)</h3>
<p>Contrairement à l'anglais, le français utilise le futur après les conjonctions de temps :</p>
<table class="grammar-table">
  <tr><th>Français (futur)</th><th>Anglais (présent)</th></tr>
  <tr><td class="fr-cell"><strong>Quand</strong> tu <strong>seras</strong> grand…</td><td>When you <strong>are</strong> older…</td></tr>
  <tr><td class="fr-cell"><strong>Lorsqu'</strong>il <strong>arrivera</strong>…</td><td>When he <strong>arrives</strong>…</td></tr>
  <tr><td class="fr-cell"><strong>Dès que</strong> j'<strong>aurai</strong> fini…</td><td>As soon as I <strong>have</strong> finished…</td></tr>
  <tr><td class="fr-cell"><strong>Tant que</strong> tu <strong>seras</strong> là…</td><td>As long as you <strong>are</strong> here…</td></tr>
  <tr><td class="fr-cell"><strong>Aussitôt que</strong> vous <strong>saurez</strong>…</td><td>As soon as you <strong>know</strong>…</td></tr>
</table>
<div class="warning-box"><strong>⚠ Rappel :</strong> Après <strong>SI</strong> (hypothèse), on n'utilise <strong>jamais</strong> le futur :<br><em><strong>Si</strong> tu <strong>viens</strong> (présent !), je <strong>serai</strong> content.</em></div>`
  },

  {
    id: 23,
    title: "Le Conditionnel (2) — L'Imaginaire et les Hypothèses",
    diff: "B1", topic: "Tenses", source: "Inter",
    preview: "Conditional for imagination, unconfirmed information, regrets; conditionnel passé formation.",
    content: `
<h3>L'expression de l'IMAGINAIRE</h3>
<div class="example-box"><div class="fr">Sans toi, je <strong>serais</strong> perdu. Je <strong>ferais</strong> n'importe quoi.<br>Sans mon psy, j'<strong>aurais raté</strong> ma vie.</div></div>
<p>On rencontre surtout ces formes avec « si » (hypothèse) :</p>
<div class="example-box"><div class="fr">Si tu n'étais pas là, je <strong>serais</strong> perdu.</div></div>

<h3>Supposition avec AU CAS OÙ</h3>
<div class="example-box"><div class="fr"><strong>Au cas où</strong> vous <strong>auriez</strong> des problèmes, téléphonez-moi.<br><strong>Au cas où</strong> vous <strong>auriez trouvé</strong> des clés, laissez-les au concierge.</div></div>

<h3>Information non confirmée (journalisme)</h3>
<div class="example-box"><div class="fr">Le président <strong>devrait</strong> se rendre à Tokyo. (= selon nos sources)<br>L'accident d'avion <strong>aurait fait</strong> deux cents victimes.</div></div>

<h3>Les REGRETS — conditionnel passé</h3>
<div class="example-box"><div class="fr">J'<strong>aurais aimé</strong> faire du piano. J'<strong>aurais dû</strong> travailler plus.</div></div>

<h3>Formation du Conditionnel</h3>
<table class="grammar-table">
  <tr><th>Conditionnel présent</th><th>Conditionnel passé</th></tr>
  <tr><td>Radical du futur + terminaisons de l'imparfait</td><td>Conditionnel de être ou avoir + participe passé</td></tr>
  <tr><td class="form-cell">Je voudr<strong>ais</strong> / Je devr<strong>ais</strong></td><td class="form-cell">J'<strong>aurais voulu</strong> / J'<strong>aurais dû</strong></td></tr>
</table>

<h3>Conditionnel passé — conjugaison complète</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Avec AVOIR</th><th>Avec ÊTRE</th></tr>
  <tr><td>j'</td><td class="form-cell">aurais parlé</td><td class="form-cell">serais parti(e)</td></tr>
  <tr><td>tu</td><td class="form-cell">aurais parlé</td><td class="form-cell">serais parti(e)</td></tr>
  <tr><td>il/elle</td><td class="form-cell">aurait parlé</td><td class="form-cell">serait parti(e)</td></tr>
  <tr><td>nous</td><td class="form-cell">aurions parlé</td><td class="form-cell">serions parti(e)s</td></tr>
  <tr><td>vous</td><td class="form-cell">auriez parlé</td><td class="form-cell">seriez parti(e)(s)</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">auraient parlé</td><td class="form-cell">seraient parti(e)s</td></tr>
</table>

<h3>Expressions de regret avec le conditionnel passé</h3>
<div class="example-box"><div class="fr">J'<strong>aurais dû</strong> étudier plus. (= I should have studied more.)<br>Tu <strong>aurais pu</strong> me prévenir ! (= You could have warned me!)<br>Il <strong>n'aurait pas fallu</strong> dire ça. (= You shouldn't have said that.)<br>J'<strong>aurais aimé</strong> être musicien. (= I would have liked to be a musician.)<br>Nous <strong>aurions voulu</strong> rester plus longtemps. (= We would have wanted to stay longer.)</div></div>

<h3>Récapitulatif — les 5 usages du conditionnel</h3>
<table class="grammar-table">
  <tr><th>Usage</th><th>Temps</th><th>Exemple</th></tr>
  <tr><td>Politesse</td><td class="form-cell">Cond. présent</td><td class="fr-cell">Je <strong>voudrais</strong> un café.</td></tr>
  <tr><td>Conseil</td><td class="form-cell">Cond. présent</td><td class="fr-cell">Tu <strong>devrais</strong> dormir plus.</td></tr>
  <tr><td>Désir / souhait</td><td class="form-cell">Cond. présent</td><td class="fr-cell">J'<strong>aimerais</strong> voyager.</td></tr>
  <tr><td>Hypothèse (si + IMP)</td><td class="form-cell">Cond. présent</td><td class="fr-cell">Si j'avais le temps, je <strong>voyagerais</strong>.</td></tr>
  <tr><td>Regret</td><td class="form-cell">Cond. passé</td><td class="fr-cell">J'<strong>aurais dû</strong> partir.</td></tr>
  <tr><td>Info non confirmée</td><td class="form-cell">Cond. prés./passé</td><td class="fr-cell">Il <strong>serait</strong> malade. Il <strong>aurait démissionné</strong>.</td></tr>
</table>`
  },

  {
    id: 24,
    title: "Les Hypothèses avec SI",
    diff: "B1", topic: "Tenses", source: "Inter",
    preview: "Si + présent → futur; si + imparfait → conditionnel; si + plus-que-parfait → conditionnel passé.",
    content: `
<h3>L'Hypothèse sur LE FUTUR — si + présent</h3>
<p><strong>QUAND</strong> + futur simple = certitude :</p>
<div class="example-box"><div class="fr">L'année prochaine, quand je <strong>reviendrai</strong> à Paris, j'<strong>irai</strong> au Ritz.</div></div>
<p><strong>SI</strong> + présent → futur simple = hypothèse possible :</p>
<div class="example-box"><div class="fr">Si je <strong>reviens</strong> à Paris (l'année prochaine), j'<strong>irai</strong> au Ritz.<br>Demain, si je <strong>sors</strong> tôt, je <strong>passerai</strong> chez toi.</div></div>
<div class="warning-box"><strong>⚠ Jamais de futur après SI (hypothèse) :</strong><br><em>S'il <strong>fait</strong> beau et si j'<strong>ai</strong> des vacances, j'<strong>irai</strong> à la plage.</em></div>

<h3>Généralité et recommandation</h3>
<div class="example-box"><div class="fr">Si on mange trop, on grossit. (généralité = « si » + présent/présent)<br>Si tu sors, mets ton manteau ! (recommandation = « si » + présent/impératif)</div></div>

<h3>L'Hypothèse sur LE PRÉSENT — si + imparfait → conditionnel</h3>
<div class="example-box"><div class="fr">Si tu n'<strong>étais</strong> pas là, je <strong>serais</strong> perdu. (mais tu es là = irréel présent)<br>Si j'<strong>avais</strong> plus d'argent, je <strong>voyagerais</strong> plus.</div></div>

<h3>L'Hypothèse sur LE PASSÉ — si + plus-que-parfait → conditionnel passé</h3>
<div class="example-box"><div class="fr">Si j'<strong>avais su</strong>, je n'<strong>aurais pas fait</strong> ça. (mais je n'ai pas su = irréel passé)</div></div>

<h3>Récapitulatif des hypothèses</h3>
<table class="grammar-table">
  <tr><th>Si + …</th><th>Résultat</th><th>Sens</th></tr>
  <tr><td class="form-cell">PRÉSENT</td><td class="form-cell">FUTUR SIMPLE</td><td>Hypothèse future (possible)</td></tr>
  <tr><td class="form-cell">IMPARFAIT</td><td class="form-cell">CONDITIONNEL PRÉSENT</td><td>Irréel du présent</td></tr>
  <tr><td class="form-cell">PLUS-QUE-PARFAIT</td><td class="form-cell">CONDITIONNEL PASSÉ</td><td>Irréel du passé</td></tr>
</table>

<h3>Exemples détaillés pour chaque type d'hypothèse</h3>
<p><strong>1. Si + présent → futur / impératif / présent :</strong></p>
<div class="example-box"><div class="fr">Si tu <strong>as</strong> le temps, <strong>viens</strong> me voir ! (impératif)<br>Si vous <strong>voulez</strong>, on <strong>peut</strong> commencer. (présent)<br>S'il <strong>pleut</strong> demain, nous <strong>resterons</strong> à la maison. (futur)</div></div>

<p><strong>2. Si + imparfait → conditionnel présent (irréel du présent) :</strong></p>
<div class="example-box"><div class="fr">Si j'<strong>étais</strong> riche, j'<strong>achèterais</strong> une île. (mais je ne suis pas riche)<br>Si tu <strong>parlais</strong> français, tu <strong>comprendrais</strong> cette chanson.<br>Si nous <strong>avions</strong> plus de temps, nous <strong>irions</strong> au musée.</div></div>

<p><strong>3. Si + plus-que-parfait → conditionnel passé (irréel du passé) :</strong></p>
<div class="example-box"><div class="fr">Si j'<strong>avais étudié</strong>, j'<strong>aurais réussi</strong> l'examen. (mais je n'ai pas étudié)<br>Si elle <strong>était venue</strong>, elle <strong>aurait rencontré</strong> Pierre.<br>Si nous <strong>avions su</strong>, nous ne <strong>serions</strong> pas <strong>partis</strong>.</div></div>

<h3>Combinaison passé → présent (hypothèse mixte)</h3>
<div class="example-box"><div class="fr">Si j'<strong>avais accepté</strong> ce travail (PQP = passé), je <strong>serais</strong> à Tokyo maintenant (cond. prés. = présent).</div></div>

<h3>Autres structures hypothétiques (sans SI)</h3>
<table class="grammar-table">
  <tr><th>Structure</th><th>Exemple</th></tr>
  <tr><td class="form-cell">Au cas où + conditionnel</td><td class="fr-cell"><strong>Au cas où</strong> il <strong>pleuvrait</strong>, prends un parapluie.</td></tr>
  <tr><td class="form-cell">Même si + indicatif</td><td class="fr-cell"><strong>Même si</strong> tu <strong>insistes</strong>, je ne viendrai pas.</td></tr>
  <tr><td class="form-cell">À condition que + subjonctif</td><td class="fr-cell">J'accepte <strong>à condition que</strong> tu <strong>viennes</strong> aussi.</td></tr>
  <tr><td class="form-cell">À condition de + infinitif</td><td class="fr-cell">Tu peux réussir <strong>à condition de</strong> travailler.</td></tr>
  <tr><td class="form-cell">Sans + nom/infinitif</td><td class="fr-cell"><strong>Sans</strong> toi, je serais perdu.</td></tr>
  <tr><td class="form-cell">Avec + nom</td><td class="fr-cell"><strong>Avec</strong> plus d'argent, je voyagerais.</td></tr>
</table>
<div class="warning-box"><strong>⚠ Rappel :</strong> Après <strong>SI</strong> on ne met <strong>jamais</strong> le conditionnel ni le futur :<br>
<em>~~Si j'aurais su...~~</em> → <em>Si j'<strong>avais su</strong>…</em><br>
<em>~~Si tu viendras...~~</em> → <em>Si tu <strong>viens</strong>…</em></div>`
  },

  {
    id: 25,
    title: "Le Subjonctif Présent",
    diff: "B1", topic: "Tenses", source: "Inter",
    preview: "Formation (ils-stem + endings), il faut que, verbs of desire/emotion/doubt, irregular subjunctives.",
    content: `
<h3>Utilisation</h3>
<p>L'indicatif indique la réalité de façon <strong>objective</strong>. Le subjonctif indique la réalité de façon <strong>subjective</strong> (désir, sentiment, attente, obligation).</p>
<p>La forme la plus fréquente : <strong>IL FAUT QUE + subjonctif</strong></p>
<div class="example-box"><div class="fr">Il faut <strong>manger</strong> pour vivre. (infinitif = obligation générale)<br>Il faut <strong>que je mange</strong> tôt. (subjonctif = obligation personnelle)</div></div>

<h3>Formation</h3>
<p>Radical de la 3ème personne du pluriel du présent + <strong>-e, -es, -e, -ions, -iez, -ent</strong></p>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Ils (présent)</th><th>Que je…</th><th>Que nous…</th></tr>
  <tr><td class="fr-cell">parler</td><td class="fr-cell">ils parlent</td><td class="form-cell">parle</td><td class="form-cell">parlions</td></tr>
  <tr><td class="fr-cell">finir</td><td class="fr-cell">ils finissent</td><td class="form-cell">finisse</td><td class="form-cell">finissions</td></tr>
  <tr><td class="fr-cell">partir</td><td class="fr-cell">ils partent</td><td class="form-cell">parte</td><td class="form-cell">partions</td></tr>
  <tr><td class="fr-cell">boire</td><td class="fr-cell">ils boivent</td><td class="form-cell">boive</td><td class="form-cell">buvions</td></tr>
  <tr><td class="fr-cell">prendre</td><td class="fr-cell">ils prennent</td><td class="form-cell">prenne</td><td class="form-cell">prenions</td></tr>
</table>

<h3>Subjonctifs irréguliers</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Que je…</th><th>Que nous…</th><th>Qu'ils…</th></tr>
  <tr><td class="fr-cell">être</td><td class="form-cell">sois</td><td class="form-cell">soyons</td><td class="form-cell">soient</td></tr>
  <tr><td class="fr-cell">avoir</td><td class="form-cell">aie</td><td class="form-cell">ayons</td><td class="form-cell">aient</td></tr>
  <tr><td class="fr-cell">aller</td><td class="form-cell">aille</td><td class="form-cell">allions</td><td class="form-cell">aillent</td></tr>
  <tr><td class="fr-cell">faire</td><td class="form-cell">fasse</td><td class="form-cell">fassions</td><td class="form-cell">fassent</td></tr>
  <tr><td class="fr-cell">pouvoir</td><td class="form-cell">puisse</td><td class="form-cell">puissions</td><td class="form-cell">puissent</td></tr>
  <tr><td class="fr-cell">savoir</td><td class="form-cell">sache</td><td class="form-cell">sachions</td><td class="form-cell">sachent</td></tr>
</table>

<h3>Déclencheurs du subjonctif</h3>
<table class="grammar-table">
  <tr><th>Catégorie</th><th>Expressions</th></tr>
  <tr><td>Obligation</td><td class="fr-cell">il faut que, il est nécessaire que, il est important que</td></tr>
  <tr><td>Désir / volonté</td><td class="fr-cell">vouloir que, souhaiter que, préférer que, aimer que</td></tr>
  <tr><td>Sentiment</td><td class="fr-cell">être content/triste/surpris que, regretter que, avoir peur que</td></tr>
  <tr><td>Doute</td><td class="fr-cell">douter que, ne pas croire que, ne pas penser que</td></tr>
  <tr><td>Conjonctions</td><td class="fr-cell">pour que, afin que, bien que, avant que, à moins que</td></tr>
</table>
<div class="tip-box"><strong>💡 Même sujet → infinitif :</strong><br><em>Je veux <strong>partir</strong>.</em> (même sujet) · <em>Je veux <strong>qu'il parte</strong>.</em> (sujets différents)</div>

<h3>Conjugaison complète du subjonctif — verbes courants irréguliers</h3>
<table class="grammar-table">
  <tr><th></th><th>ÊTRE</th><th>AVOIR</th><th>ALLER</th><th>FAIRE</th><th>POUVOIR</th><th>SAVOIR</th><th>VOULOIR</th></tr>
  <tr><td>que je</td><td class="form-cell">sois</td><td class="form-cell">aie</td><td class="form-cell">aille</td><td class="form-cell">fasse</td><td class="form-cell">puisse</td><td class="form-cell">sache</td><td class="form-cell">veuille</td></tr>
  <tr><td>que tu</td><td class="form-cell">sois</td><td class="form-cell">aies</td><td class="form-cell">ailles</td><td class="form-cell">fasses</td><td class="form-cell">puisses</td><td class="form-cell">saches</td><td class="form-cell">veuilles</td></tr>
  <tr><td>qu'il</td><td class="form-cell">soit</td><td class="form-cell">ait</td><td class="form-cell">aille</td><td class="form-cell">fasse</td><td class="form-cell">puisse</td><td class="form-cell">sache</td><td class="form-cell">veuille</td></tr>
  <tr><td>que nous</td><td class="form-cell">soyons</td><td class="form-cell">ayons</td><td class="form-cell">allions</td><td class="form-cell">fassions</td><td class="form-cell">puissions</td><td class="form-cell">sachions</td><td class="form-cell">voulions</td></tr>
  <tr><td>que vous</td><td class="form-cell">soyez</td><td class="form-cell">ayez</td><td class="form-cell">alliez</td><td class="form-cell">fassiez</td><td class="form-cell">puissiez</td><td class="form-cell">sachiez</td><td class="form-cell">vouliez</td></tr>
  <tr><td>qu'ils</td><td class="form-cell">soient</td><td class="form-cell">aient</td><td class="form-cell">aillent</td><td class="form-cell">fassent</td><td class="form-cell">puissent</td><td class="form-cell">sachent</td><td class="form-cell">veuillent</td></tr>
</table>

<h3>Subjonctif vs Indicatif — le piège</h3>
<table class="grammar-table">
  <tr><th>SUBJONCTIF (subjectif)</th><th>INDICATIF (objectif)</th></tr>
  <tr><td class="fr-cell">Je <strong>veux</strong> qu'il vienne. (volonté)</td><td class="fr-cell">Je <strong>sais</strong> qu'il vient. (certitude)</td></tr>
  <tr><td class="fr-cell">Je <strong>doute</strong> qu'il soit là. (doute)</td><td class="fr-cell">Je <strong>crois</strong> qu'il est là. (croyance)</td></tr>
  <tr><td class="fr-cell">Je ne <strong>pense</strong> pas qu'il ait raison.</td><td class="fr-cell">Je <strong>pense</strong> qu'il a raison.</td></tr>
  <tr><td class="fr-cell">Il est <strong>possible</strong> qu'il pleuve.</td><td class="fr-cell">Il est <strong>certain</strong> qu'il pleut.</td></tr>
  <tr><td class="fr-cell"><strong>Bien que</strong> ce soit difficile…</td><td class="fr-cell"><strong>Parce que</strong> c'est difficile…</td></tr>
</table>
<div class="warning-box"><strong>⚠ Verbes d'opinion :</strong><br>
Affirmatif → <strong>indicatif</strong> : <em>Je crois qu'il <strong>a</strong> raison.</em><br>
Négatif/interrogatif → <strong>subjonctif</strong> : <em>Je ne crois pas qu'il <strong>ait</strong> raison. Crois-tu qu'il <strong>ait</strong> raison ?</em></div>

<h3>Subjonctif passé</h3>
<p>Formation : <strong>subjonctif de avoir/être + participe passé</strong></p>
<div class="example-box"><div class="fr">Je suis content qu'il <strong>soit venu</strong>. (= I'm glad he came.)<br>Je regrette qu'elle <strong>ait dit</strong> ça. (= I regret she said that.)<br>Bien qu'il <strong>ait plu</strong>, nous sommes sortis. (= Although it rained…)<br>Il faut qu'il <strong>ait fini</strong> avant midi.</div></div>

<h3>Conjonctions qui exigent le subjonctif — liste complète</h3>
<div class="example-box"><div class="fr"><strong>But :</strong> pour que, afin que, de sorte que, de peur que, de crainte que<br><strong>Concession :</strong> bien que, quoique, encore que<br><strong>Temps :</strong> avant que, en attendant que, jusqu'à ce que<br><strong>Condition :</strong> à condition que, pourvu que, à moins que, sans que<br><strong>⚠ Après que</strong> prend l'<strong>indicatif</strong> (pas le subjonctif) : <em>Après qu'il <strong>est</strong> parti…</em></div></div>`
  },

  {
    id: 26,
    title: "Les Relations Logiques — Cause, Conséquence, But, Opposition",
    diff: "B1", topic: "Conjunctions", source: "Inter",
    preview: "Parce que/comme/puisque (cause), donc/alors (conséquence), pour que/afin que (but), bien que (opposition).",
    content: `
<h3>LA CAUSE</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Particularité</th><th>Exemple</th></tr>
  <tr><td class="form-cell">parce que</td><td>Répond à « pourquoi ? » — place la cause en fin</td><td class="fr-cell">Je reste à la maison <strong>parce que</strong> je suis malade.</td></tr>
  <tr><td class="form-cell">comme</td><td>Place la cause en début de phrase</td><td class="fr-cell"><strong>Comme</strong> je suis malade, je reste à la maison.</td></tr>
  <tr><td class="form-cell">puisque</td><td>La cause est connue/évidente pour l'interlocuteur</td><td class="fr-cell"><strong>Puisque</strong> tu sors, achète du pain, s'il te plaît.</td></tr>
  <tr><td class="form-cell">car / en effet</td><td>Surtout à l'écrit (plus formel)</td><td class="fr-cell">Mon fils ne va pas à l'école, <strong>car</strong> il est souffrant.</td></tr>
  <tr><td class="form-cell">à cause de + nom</td><td>Cause neutre ou négative</td><td class="fr-cell">La rue est barrée <strong>à cause des</strong> travaux.</td></tr>
  <tr><td class="form-cell">grâce à + nom</td><td>Cause positive</td><td class="fr-cell">J'ai réussi <strong>grâce à</strong> toi.</td></tr>
</table>

<h3>LA CONSÉQUENCE</h3>
<div class="example-box"><div class="fr">Je n'ai pas de permis, <strong>donc</strong> je ne peux pas conduire.<br>La rue est barrée, <strong>alors</strong> passons par-derrière ! (langage courant)<br>L'examen était difficile, <strong>de sorte que</strong> beaucoup ont abandonné.</td></div></div>

<h3>LE BUT</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Après</th><th>Exemple</th></tr>
  <tr><td class="form-cell">pour + infinitif</td><td>Même sujet</td><td class="fr-cell">Je me dépêche <strong>pour</strong> être à l'heure.</td></tr>
  <tr><td class="form-cell">pour que + subjonctif</td><td>Sujets différents</td><td class="fr-cell">Je me dépêche <strong>pour que</strong> tout soit prêt.</td></tr>
  <tr><td class="form-cell">afin de / afin que</td><td>Formel</td><td class="fr-cell">Je vous écris <strong>afin de</strong> vous informer.</td></tr>
</table>
<div class="tip-box"><strong>💡 Distinguer pour que (but) et parce que (cause) :</strong><br><em>J'utilise ce shampoing <strong>pour que</strong> mes cheveux frisent.</em> = but<br><em>J'utilise ce shampoing <strong>parce que</strong> mes cheveux frisent.</em> = cause</div>

<h3>L'OPPOSITION et LA CONCESSION</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Après</th><th>Exemple</th></tr>
  <tr><td class="form-cell">mais</td><td>Indicatif</td><td class="fr-cell">Il est riche, <strong>mais</strong> il est avare.</td></tr>
  <tr><td class="form-cell">bien que / quoique</td><td>Subjonctif</td><td class="fr-cell"><strong>Bien qu'</strong>il soit fatigué, il continue.</td></tr>
  <tr><td class="form-cell">cependant / pourtant</td><td>Indicatif</td><td class="fr-cell">Il travaille dur, <strong>cependant</strong> il ne réussit pas.</td></tr>
  <tr><td class="form-cell">au lieu de + infinitif</td><td>Même sujet</td><td class="fr-cell">Il dort <strong>au lieu de</strong> travailler.</td></tr>
</table>

<h3>Connecteurs logiques avancés</h3>
<table class="grammar-table">
  <tr><th>Fonction</th><th>Expression</th><th>Exemple</th></tr>
  <tr><td>Addition</td><td class="form-cell">de plus, en outre, par ailleurs, d'ailleurs</td><td class="fr-cell"><strong>De plus</strong>, il est compétent.</td></tr>
  <tr><td>Illustration</td><td class="form-cell">par exemple, notamment, en particulier</td><td class="fr-cell">Il parle plusieurs langues, <strong>notamment</strong> le japonais.</td></tr>
  <tr><td>Explication</td><td class="form-cell">c'est-à-dire, autrement dit, en d'autres termes</td><td class="fr-cell">Il est bilingue, <strong>c'est-à-dire</strong> qu'il parle deux langues.</td></tr>
  <tr><td>Conclusion</td><td class="form-cell">en conclusion, en somme, bref, finalement</td><td class="fr-cell"><strong>Bref</strong>, il faut agir maintenant.</td></tr>
  <tr><td>Temps</td><td class="form-cell">d'abord, ensuite, puis, enfin, finalement</td><td class="fr-cell"><strong>D'abord</strong> on mange, <strong>ensuite</strong> on sort.</td></tr>
</table>

<h3>Cause vs But — ne pas confondre</h3>
<div class="example-box"><div class="fr"><strong>CAUSE</strong> (pourquoi ? = explication) :<br>Je mets de la crème <strong>parce que</strong> j'ai un coup de soleil. (= raison)<br><br><strong>BUT</strong> (pour quoi faire ? = objectif) :<br>Je mets de la crème <strong>pour</strong> éviter les coups de soleil. (= intention)</div></div>

<h3>Tableau récapitulatif — mode après chaque connecteur</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Mode</th><th>Remarque</th></tr>
  <tr><td class="form-cell">parce que / car / puisque</td><td>Indicatif</td><td>Cause</td></tr>
  <tr><td class="form-cell">donc / alors / c'est pourquoi</td><td>Indicatif</td><td>Conséquence</td></tr>
  <tr><td class="form-cell">pour que / afin que</td><td><strong>Subjonctif</strong></td><td>But (2 sujets)</td></tr>
  <tr><td class="form-cell">bien que / quoique</td><td><strong>Subjonctif</strong></td><td>Concession</td></tr>
  <tr><td class="form-cell">à moins que</td><td><strong>Subjonctif</strong></td><td>Condition négative</td></tr>
  <tr><td class="form-cell">sans que</td><td><strong>Subjonctif</strong></td><td>Sans que + ne explt.</td></tr>
  <tr><td class="form-cell">de sorte que</td><td>Indicatif (conséq.) / Subjonctif (but)</td><td>Double usage</td></tr>
</table>
<div class="warning-box"><strong>⚠ Même sujet → infinitif :</strong><br>
<em>pour <strong>que</strong> je comprenne</em> (2 sujets) → <em>pour <strong>comprendre</strong></em> (1 sujet)<br>
<em>bien <strong>que</strong> je sois fatigué</em> → pas de raccourci (bien que exige toujours le subjonctif)</div>`
  },

  // ══════════════════════════════════════════════════════
  // MISSING CHAPTERS — ALL 23 ADDED NOW (COMPLETE COVERAGE)
  // ══════════════════════════════════════════════════════

  {
    id: 41,
    title: "Les Noms de Parenté et de Groupe",
    diff: "A1", topic: "Nouns & Articles", source: "Inter",
    preview: "Family vocabulary (parenté, belle-famille), gens vs personnes, tout le monde.",
    content: `
<h3>LA PARENTÉ — vocabulaire essentiel</h3>
<table class="grammar-table">
  <tr><th>Lien</th><th>Masc./Fém.</th><th>Pluriel</th></tr>
  <tr><td>Parents directs</td><td class="fr-cell">le père / la mère</td><td class="fr-cell">les parents</td></tr>
  <tr><td>Enfants</td><td class="fr-cell">le fils / la fille</td><td class="fr-cell">les enfants</td></tr>
  <tr><td>Grands-parents</td><td class="fr-cell">le grand-père / la grand-mère</td><td class="fr-cell">les grands-parents</td></tr>
  <tr><td>Petits-enfants</td><td class="fr-cell">le petit-fils / la petite-fille</td><td class="fr-cell">les petits-enfants</td></tr>
  <tr><td>Collatéraux</td><td class="fr-cell">l'oncle / la tante · le neveu / la nièce</td><td class="fr-cell">les neveux</td></tr>
</table>
<div class="tip-box"><strong>💡 « Grand »</strong> qualifie les ascendants au 2ème degré, <strong>« petit »</strong> les descendants.<br>
<strong>« Les parents »</strong> = le père et la mère / <strong>« des parents »</strong> = autre parenté (cousins, oncles…)</div>

<h3>La parenté par ALLIANCE (belle-famille)</h3>
<table class="grammar-table">
  <tr><th>Lien (côté mari)</th><th>Masculin</th><th>Féminin</th></tr>
  <tr><td>Père/mère du conjoint</td><td class="fr-cell">le beau-père</td><td class="fr-cell">la belle-mère</td></tr>
  <tr><td>Frère/sœur du conjoint</td><td class="fr-cell">le beau-frère</td><td class="fr-cell">la belle-sœur</td></tr>
  <tr><td>Mari de la fille</td><td class="fr-cell">le gendre</td><td class="fr-cell">la belle-fille</td></tr>
</table>
<div class="warning-box"><strong>⚠ Mon ami(e)</strong> = compagnon ou compagne (partenaire) / <strong>un(e) ami(e)</strong> = relation amicale</div>

<h3>LES NOMS DE GROUPE</h3>
<table class="grammar-table">
  <tr><th>Mot</th><th>Sens</th><th>Accord</th></tr>
  <tr><td class="form-cell">des gens</td><td>Nombre indéterminé (collectif)</td><td class="fr-cell">Les gens <strong>pensent</strong> que… (pluriel)</td></tr>
  <tr><td class="form-cell">des personnes</td><td>Nombre déterminé (1, 2, 3…)</td><td class="fr-cell">Il y a dix personnes.</td></tr>
  <tr><td class="form-cell">tout le monde</td><td>= les gens (tous)</td><td class="fr-cell">Tout le monde <strong>pense</strong> que… (singulier)</td></tr>
  <tr><td class="form-cell">le monde entier</td><td>= tous les pays</td><td class="fr-cell">Max voyage dans le monde entier.</td></tr>
</table>

<h3>Vocabulaire familial étendu</h3>
<table class="grammar-table">
  <tr><th>Lien</th><th>Masculin</th><th>Féminin</th></tr>
  <tr><td>Frère / Sœur</td><td class="fr-cell">le frère (aîné / cadet)</td><td class="fr-cell">la sœur (aînée / cadette)</td></tr>
  <tr><td>Cousin(e)</td><td class="fr-cell">le cousin germain</td><td class="fr-cell">la cousine germaine</td></tr>
  <tr><td>Parrain / Marraine</td><td class="fr-cell">le parrain</td><td class="fr-cell">la marraine</td></tr>
  <tr><td>Filleul(e)</td><td class="fr-cell">le filleul</td><td class="fr-cell">la filleule</td></tr>
  <tr><td>Demi-frère/sœur</td><td class="fr-cell">le demi-frère</td><td class="fr-cell">la demi-sœur</td></tr>
  <tr><td>Arrière-grands-parents</td><td class="fr-cell">l'arrière-grand-père</td><td class="fr-cell">l'arrière-grand-mère</td></tr>
</table>

<h3>Expressions courantes sur la famille</h3>
<div class="example-box"><div class="fr">une famille nombreuse — a large family<br>un enfant unique — an only child<br>les jumeaux / les jumelles — twins<br>être l'aîné(e) / le/la cadet(te) / le/la benjamin(e) — eldest / middle / youngest<br>un ménage — a household<br>un foyer — a home/household<br>une famille recomposée — a blended family</div></div>
<div class="warning-box"><strong>⚠ Pluriel des noms composés :</strong><br>
<em>un grand-père → des <strong>grands-pères</strong></em> · <em>une grand-mère → des <strong>grands-mères</strong></em><br>
<em>un beau-père → des <strong>beaux-pères</strong></em> · <em>une belle-sœur → des <strong>belles-sœurs</strong></em></div>`
  },

  {
    id: 42,
    title: "« IL Y A » et « C'EST » — L'Existence",
    diff: "A1", topic: "Sentence Structure", source: "Inter",
    preview: "Il y a signals existence in a place; c'est/ce sont identify what was just mentioned.",
    content: `
<h3>« IL Y A » — signale l'existence dans un lieu</h3>
<p>Contrairement à l'anglais et l'italien qui utilisent « être », le français utilise la construction impersonnelle <strong>« il y a »</strong> :</p>
<div class="example-box"><div class="fr">Dans la rue, <strong>il y a</strong> une voiture verte. <strong>C'est</strong> une Jaguar.</div></div>
<div class="tip-box"><strong>💡 Toujours au singulier :</strong> « il y a » + nom ne change pas au pluriel :<br><em>Dans la rue, il y a <strong>un</strong> homme. / Dans la rue, il y a <strong>dix</strong> hommes.</em></div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>Dans la rue, il y a un…</em> — Ne dites pas : <em>~~Dans la rue, c'est un…~~</em></div>
<p>Le lieu n'est pas nécessairement exprimé :</p>
<div class="example-box"><div class="fr">À huit heures, <strong>il y a</strong> un match de football. (à la télévision/au stade, etc.)</div></div>

<h3>« C'EST » / « CE SONT » — identifient ce qui vient d'être présenté</h3>
<p><strong>C'est</strong> (singulier) et <strong>Ce sont</strong> (pluriel) identifient une chose ou une personne <strong>présente ou déjà présentée</strong> :</p>
<div class="example-box"><div class="fr">– Regarde, <strong>c'est un</strong> cerisier du Japon. / <strong>Ce sont des</strong> cerisiers du Japon.<br>À Budapest, il y a un fleuve : <strong>c'est</strong> le Danube.<br>Dans le bureau, il y a une dame blonde : <strong>c'est</strong> la secrétaire.</div></div>
<div class="tip-box"><strong>💡 Séquence typique :</strong> <em>il y a</em> (existence) → <em>c'est</em> (identification) :<br><em>Dans la rue, <strong>il y a</strong> une voiture verte. <strong>C'est</strong> une Jaguar.</em></div>

<h3>« IL Y A » aux différents temps</h3>
<table class="grammar-table">
  <tr><th>Temps</th><th>Forme</th><th>Exemple</th></tr>
  <tr><td>Présent</td><td class="form-cell">il y a</td><td class="fr-cell">Il y a un problème.</td></tr>
  <tr><td>Passé composé</td><td class="form-cell">il y a eu</td><td class="fr-cell">Il y a eu un accident hier.</td></tr>
  <tr><td>Imparfait</td><td class="form-cell">il y avait</td><td class="fr-cell">Il y avait beaucoup de monde.</td></tr>
  <tr><td>Futur</td><td class="form-cell">il y aura</td><td class="fr-cell">Il y aura du soleil demain.</td></tr>
  <tr><td>Conditionnel</td><td class="form-cell">il y aurait</td><td class="fr-cell">Il y aurait un problème.</td></tr>
  <tr><td>Subjonctif</td><td class="form-cell">qu'il y ait</td><td class="fr-cell">Il faut qu'il y ait assez de place.</td></tr>
</table>

<h3>IL Y A = ago (expression de temps)</h3>
<p>« Il y a » + durée = <strong>ago</strong> en anglais :</p>
<div class="example-box"><div class="fr">Il est parti <strong>il y a</strong> deux heures. (= He left two hours ago.)<br>J'ai commencé ce travail <strong>il y a</strong> trois mois.<br>Elle a déménagé <strong>il y a</strong> longtemps.</div></div>
<div class="warning-box"><strong>⚠ IL Y A vs DEPUIS :</strong><br>
<em>Il est parti <strong>il y a</strong> 2 heures.</em> (passé composé = action terminée)<br>
<em>Il travaille ici <strong>depuis</strong> 2 ans.</em> (présent = action qui continue)</div>

<h3>IL Y A vs IL EXISTE vs IL RESTE</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Nuance</th><th>Exemple</th></tr>
  <tr><td class="form-cell">il y a</td><td>existence simple</td><td class="fr-cell">Il y a 8 planètes dans le système solaire.</td></tr>
  <tr><td class="form-cell">il existe</td><td>existence (plus formel/philosophique)</td><td class="fr-cell">Il existe plusieurs solutions.</td></tr>
  <tr><td class="form-cell">il reste</td><td>ce qui subsiste</td><td class="fr-cell">Il reste du gâteau. / Il ne reste plus de places.</td></tr>
  <tr><td class="form-cell">il manque</td><td>ce qui fait défaut</td><td class="fr-cell">Il manque deux personnes.</td></tr>
</table>`
  },

  {
    id: 43,
    title: "La Situation dans l'Espace (1) — Villes, Pays, Continents",
    diff: "A1", topic: "Prepositions", source: "Inter",
    preview: "À + cities; en/au/aux + countries and continents; country genders; origin with de/du/des.",
    content: `
<h3>Les villes, les pays, les continents</h3>
<p><strong>Les villes</strong> n'ont en général <strong>pas d'article</strong> :</p>
<div class="example-box"><div class="fr">Paris · Vienne · Tokyo — Mais : <em>Le Havre, Le Caire, La Haye…</em> (article dans le nom)</div></div>
<p><strong>Les pays et les continents</strong> ont en général un article. En général, les pays qui se terminent par <strong>-e</strong> sont <strong>féminins</strong> :</p>
<div class="example-box"><div class="fr"><em>la</em> France · <em>la</em> Suisse · <em>la</em> Russie — <em>le</em> Japon · <em>le</em> Canada · <em>le</em> Brésil<br>Mais : <em>le</em> Mexique, <em>le</em> Cambodge (exceptions)</div></div>

<h3>À, EN, AU(X) — où on est / où on va</h3>
<table class="grammar-table">
  <tr><th>Structure</th><th>Usage</th><th>Exemples</th></tr>
  <tr><td class="form-cell">à + ville (ou pays sans article)</td><td>city or article-less country</td><td class="fr-cell">à Paris · à Madrid · à Cuba · à Hawaï</td></tr>
  <tr><td class="form-cell">en + pays féminin ou continent</td><td>feminine country or continent</td><td class="fr-cell">en France · en Russie · en Europe · en Afrique</td></tr>
  <tr><td class="form-cell">au + pays masculin</td><td>masculine singular country</td><td class="fr-cell">au Japon · au Brésil · au Canada · au Maroc</td></tr>
  <tr><td class="form-cell">aux + pays pluriel</td><td>plural country name</td><td class="fr-cell">aux États-Unis · aux Pays-Bas</td></tr>
</table>
<div class="tip-box"><strong>💡 EN devant voyelle :</strong> On utilise « en » devant tout pays singulier qui commence par une voyelle :<br><em>en Iran, en Angola, en Israël</em></div>
<div class="tip-box"><strong>💡 Villes avec article :</strong> <em>Je vais <strong>à La</strong> Havane / <strong>au</strong> Caire</em></div>

<h3>DE / DU / DES — l'origine</h3>
<table class="grammar-table">
  <tr><th>Type</th><th>Expression</th><th>Exemples</th></tr>
  <tr><td>Ville</td><td class="form-cell">de + ville</td><td class="fr-cell">Je viens de Paris. / de Rome.</td></tr>
  <tr><td>Pays féminin</td><td class="form-cell">de + pays</td><td class="fr-cell">Je viens de France. / de Belgique.</td></tr>
  <tr><td>Pays masculin</td><td class="form-cell">du + pays</td><td class="fr-cell">Je viens du Japon. / du Brésil.</td></tr>
  <tr><td>Pays pluriel</td><td class="form-cell">des + pays</td><td class="fr-cell">Je viens des États-Unis.</td></tr>
</table>

<h3>Tableau des pays les plus courants avec leur genre</h3>
<table class="grammar-table">
  <tr><th>Pays (fém. = en)</th><th>Pays (masc. = au)</th><th>Pays (plur. = aux)</th></tr>
  <tr><td class="fr-cell">la France · l'Allemagne</td><td class="fr-cell">le Japon · le Canada</td><td class="fr-cell">les États-Unis</td></tr>
  <tr><td class="fr-cell">l'Espagne · l'Italie</td><td class="fr-cell">le Brésil · le Portugal</td><td class="fr-cell">les Pays-Bas</td></tr>
  <tr><td class="fr-cell">la Russie · la Chine</td><td class="fr-cell">le Maroc · le Sénégal</td><td class="fr-cell">les Philippines</td></tr>
  <tr><td class="fr-cell">la Belgique · la Suisse</td><td class="fr-cell">le Mexique · le Vietnam</td><td class="fr-cell">les Émirats arabes</td></tr>
  <tr><td class="fr-cell">la Turquie · la Grèce</td><td class="fr-cell">le Liban · le Pérou</td><td class="fr-cell">—</td></tr>
</table>

<h3>Expressions de localisation</h3>
<table class="grammar-table">
  <tr><th>Préposition</th><th>Usage</th><th>Exemple</th></tr>
  <tr><td class="form-cell">dans le nord/sud/est/ouest de</td><td>Direction dans un pays</td><td class="fr-cell">J'habite dans le sud de la France.</td></tr>
  <tr><td class="form-cell">au nord/sud/est/ouest de</td><td>Direction externe</td><td class="fr-cell">La Belgique est au nord de la France.</td></tr>
  <tr><td class="form-cell">près de / loin de</td><td>Proximité / éloignement</td><td class="fr-cell">Lyon est près de Genève. Paris est loin de Tokyo.</td></tr>
  <tr><td class="form-cell">à côté de / en face de</td><td>Position relative</td><td class="fr-cell">Le restaurant est à côté de l'hôtel.</td></tr>
</table>
<div class="tip-box"><strong>💡 Les îles :</strong> à + île sans article : <em>à Cuba, à Malte</em> · en/au + île avec article : <em>en Corse, en Sardaigne, à la Réunion</em></div>`
  },

  {
    id: 44,
    title: "Le Verbe « AVOIR »",
    diff: "A1", topic: "Verbs", source: "Inter",
    preview: "Conjugation of avoir; l'âge (avoir + ans); avoir faim/froid/peur/mal; avoir les yeux bleus.",
    content: `
<h3>Conjugaison</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Avoir</th><th>Exemple</th></tr>
  <tr><td>J'</td><td class="form-cell">ai</td><td class="fr-cell">J'ai un passeport.</td></tr>
  <tr><td>Tu</td><td class="form-cell">as</td><td class="fr-cell">Tu as une carte d'identité.</td></tr>
  <tr><td>Il/Elle/On</td><td class="form-cell">a</td><td class="fr-cell">Il a vingt ans.</td></tr>
  <tr><td>Nous</td><td class="form-cell">avons</td><td class="fr-cell">Nous avons un garçon et une fille.</td></tr>
  <tr><td>Vous</td><td class="form-cell">avez</td><td class="fr-cell">Vous avez des enfants ?</td></tr>
  <tr><td>Ils/Elles</td><td class="form-cell">ont</td><td class="fr-cell">Ils ont froid.</td></tr>
</table>
<p>Après « avoir », on utilise en général un <strong>nom</strong> : <em>J'ai une moto. / Vous avez un vélo.</em></p>

<h3>L'ÂGE — avoir + ans</h3>
<div class="example-box"><div class="fr">Mon fils <strong>a</strong> 3 mois. / J'<strong>ai</strong> trente ans.</div><div class="en">Always avoir for age — never être!</div></div>
<div class="warning-box"><strong>⚠ Il est jeune</strong> (être + adjectif) ≠ <strong>Il a vingt ans</strong> (avoir + nom)<br>Ne dites pas : <em>~~Je suis trente ans~~</em></div>

<h3>AVOIR FAIM, AVOIR FROID — sensations</h3>
<p>Pour exprimer une sensation de manque ou de douleur : <strong>avoir + nom sans article</strong></p>
<table class="grammar-table">
  <tr><th>Expression</th><th>Sens</th><th>Expression</th><th>Sens</th></tr>
  <tr><td class="fr-cell">avoir chaud/froid</td><td>to be hot/cold</td><td class="fr-cell">avoir faim/soif</td><td>to be hungry/thirsty</td></tr>
  <tr><td class="fr-cell">avoir sommeil</td><td>to be sleepy</td><td class="fr-cell">avoir peur (de)</td><td>to be afraid (of)</td></tr>
  <tr><td class="fr-cell">avoir mal à la tête</td><td>to have a headache</td><td class="fr-cell">avoir besoin de</td><td>to need</td></tr>
  <tr><td class="fr-cell">avoir envie de</td><td>to feel like</td><td class="fr-cell">avoir raison/tort</td><td>to be right/wrong</td></tr>
</table>
<div class="warning-box"><strong>⚠ Intensité → très</strong> (pas beaucoup) :<br><em>J'ai <strong>très</strong> faim.</em> — Ne dites pas : <em>~~J'ai beaucoup faim~~</em><br>Avec besoin : <em>J'ai <strong>vraiment</strong> besoin de repos.</em></div>

<h3>AVOIR LES YEUX BLEUS — description physique</h3>
<div class="example-box"><div class="fr">Il <strong>a</strong> les yeux bleus et les cheveux courts.<br>Elle <strong>a</strong> un grand nez et de grosses lèvres.</div><div class="en">Physical features use avoir + les/des.</div></div>

<h3>AVOIR aux autres temps</h3>
<table class="grammar-table">
  <tr><th>Temps</th><th>Je</th><th>Tu</th><th>Il/Elle</th><th>Nous</th><th>Vous</th><th>Ils/Elles</th></tr>
  <tr><td>Passé composé</td><td class="form-cell">ai eu</td><td class="form-cell">as eu</td><td class="form-cell">a eu</td><td class="form-cell">avons eu</td><td class="form-cell">avez eu</td><td class="form-cell">ont eu</td></tr>
  <tr><td>Imparfait</td><td class="form-cell">avais</td><td class="form-cell">avais</td><td class="form-cell">avait</td><td class="form-cell">avions</td><td class="form-cell">aviez</td><td class="form-cell">avaient</td></tr>
  <tr><td>Futur simple</td><td class="form-cell">aurai</td><td class="form-cell">auras</td><td class="form-cell">aura</td><td class="form-cell">aurons</td><td class="form-cell">aurez</td><td class="form-cell">auront</td></tr>
  <tr><td>Conditionnel</td><td class="form-cell">aurais</td><td class="form-cell">aurais</td><td class="form-cell">aurait</td><td class="form-cell">aurions</td><td class="form-cell">auriez</td><td class="form-cell">auraient</td></tr>
  <tr><td>Subjonctif</td><td class="form-cell">aie</td><td class="form-cell">aies</td><td class="form-cell">ait</td><td class="form-cell">ayons</td><td class="form-cell">ayez</td><td class="form-cell">aient</td></tr>
</table>

<h3>Toutes les expressions avec AVOIR</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Sens</th><th>Expression</th><th>Sens</th></tr>
  <tr><td class="fr-cell">avoir l'air + adj.</td><td>to look/seem</td><td class="fr-cell">avoir de la chance</td><td>to be lucky</td></tr>
  <tr><td class="fr-cell">avoir lieu</td><td>to take place</td><td class="fr-cell">avoir honte (de)</td><td>to be ashamed (of)</td></tr>
  <tr><td class="fr-cell">avoir l'habitude de</td><td>to be used to</td><td class="fr-cell">avoir confiance en</td><td>to trust</td></tr>
  <tr><td class="fr-cell">avoir l'intention de</td><td>to intend to</td><td class="fr-cell">avoir hâte de</td><td>to look forward to</td></tr>
  <tr><td class="fr-cell">avoir du mal à</td><td>to have trouble</td><td class="fr-cell">avoir beau + inf.</td><td>despite doing</td></tr>
</table>
<div class="example-box"><div class="fr">Tu <strong>as l'air</strong> fatigué. / La réunion <strong>a lieu</strong> demain.<br>J'<strong>ai beau</strong> essayer, je n'y arrive pas. (= Despite trying, I can't do it.)<br>J'<strong>ai hâte de</strong> te revoir ! (= I can't wait to see you again!)</div></div>`
  },

  {
    id: 45,
    title: "L'Adjectif (2) — Place et Formes Spéciales",
    diff: "A2", topic: "Adjectives", source: "Inter",
    preview: "Rules for adjective placement, bel/vieil/nouvel before vowels, des → de before adjective.",
    content: `
<h3>La place de l'adjectif — règle générale</h3>
<p>On place en général l'adjectif <strong>après</strong> le nom :</p>
<div class="example-box"><div class="fr">une chemise <strong>blanche</strong> · un livre <strong>intéressant</strong> · un exercice <strong>difficile</strong></div></div>
<p>Quelques adjectifs fréquents et assez courts se placent <strong>devant</strong> le nom :</p>
<div class="example-box"><div class="fr">beau/joli · bon/mauvais · petit/grand/gros · nouveau/jeune/vieux · double/demi · autre/même<br><em>une <strong>petite</strong> maison · une <strong>jolie</strong> robe · un <strong>gros</strong> livre</em></div></div>

<h3>Les nombres se placent toujours DEVANT</h3>
<div class="example-box"><div class="fr">les <strong>trois</strong> mousquetaires · les <strong>sept</strong> nains · le <strong>septième</strong> art<br>Quand il y a plusieurs adjectifs, les nombres se placent devant les autres :<br>les <strong>trois</strong> petits cochons · les <strong>dix</strong> dernières années</div></div>

<h3>PREMIER, DERNIER, PROCHAIN</h3>
<p>Devant le nom pour les <strong>séries</strong> :</p>
<div class="example-box"><div class="fr">le <strong>premier</strong> candidat · le <strong>prochain</strong> candidat · le <strong>dernier</strong> candidat</div></div>
<p>Après le nom pour les <strong>dates</strong> :</p>
<div class="example-box"><div class="fr">mardi <strong>dernier</strong> / mardi <strong>prochain</strong> · le mois <strong>dernier</strong> / le mois <strong>prochain</strong></div></div>

<h3>Formes spéciales : BEL, VIEIL, NOUVEL</h3>
<p>Devant voyelle ou h muet, beau → <strong>bel</strong>, vieux → <strong>vieil</strong>, nouveau → <strong>nouvel</strong> :</p>
<div class="example-box"><div class="fr">un <strong>bel</strong> acteur · un <strong>vieil</strong> homme · un <strong>nouvel</strong> ordinateur</div></div>

<h3>DES → DE devant adjectif antéposé</h3>
<p>En général, quand l'adjectif est placé devant le nom, « des » devient « de » :</p>
<div class="example-box"><div class="fr"><strong>de</strong> bons amis · <strong>de</strong> beaux livres (pas : ~~des bons amis~~, ~~des beaux livres~~)</div></div>

<h3>Liaison quand l'adjectif précède le nom</h3>
<div class="example-box"><div class="fr">un petit_enfant (t) · un bon_acteur (n) · de grands_amis (z)</div></div>

<h3>Plusieurs adjectifs avec un même nom</h3>
<p>Quand un nom est accompagné de deux adjectifs, chacun garde sa position normale :</p>
<div class="example-box"><div class="fr">un <strong>petit</strong> chien <strong>noir</strong> (petit = avant, noir = après)<br>une <strong>belle</strong> robe <strong>rouge</strong> · un <strong>vieux</strong> quartier <strong>historique</strong><br>un <strong>grand</strong> appartement <strong>lumineux</strong></div></div>
<p>Si les deux vont après le nom, on les relie par <strong>et</strong> :</p>
<div class="example-box"><div class="fr">une femme <strong>intelligente et courageuse</strong> · un film <strong>long et ennuyeux</strong></div></div>

<h3>Adjectifs toujours après le nom</h3>
<div class="example-box"><div class="fr"><strong>Couleurs :</strong> une robe bleue, un chat noir<br><strong>Formes :</strong> une table ronde, un terrain plat<br><strong>Nationalités :</strong> un restaurant français, un ami espagnol<br><strong>Religions :</strong> une église catholique, un temple bouddhiste<br><strong>Participes passés comme adjectifs :</strong> un homme fatigué, une porte fermée</div></div>
<div class="warning-box"><strong>⚠ « Seul »</strong> change de sens selon la position :<br>
<em>un <strong>seul</strong> homme</em> = only one man · <em>un homme <strong>seul</strong></em> = a lonely man</div>`
  },

  {
    id: 46,
    title: "Les Nombres — Cardinaux et Ordinaux",
    diff: "A1", topic: "Nouns & Articles", source: "Inter",
    preview: "Cardinal numbers 0–1 billion, spelling rules, pronunciation, ordinal numbers.",
    content: `
<h3>Les nombres cardinaux</h3>
<table class="grammar-table">
  <tr><th>0–19</th><th>20–99</th><th>100+</th></tr>
  <tr><td class="fr-cell">0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf, 10 dix, 11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 17 dix-sept, 18 dix-huit, 19 dix-neuf</td><td class="fr-cell">20 vingt, 21 vingt et un, 30 trente, 40 quarante, 50 cinquante, 60 soixante, 70 soixante-dix, 71 soixante et onze, 80 quatre-vingts, 81 quatre-vingt-un, 90 quatre-vingt-dix, 91 quatre-vingt-onze</td><td class="fr-cell">100 cent, 101 cent un, 200 deux cents, 201 deux cent un, 1 000 mille, 1 000 000 un million, 1 000 000 000 un milliard</td></tr>
</table>
<div class="tip-box"><strong>💡 Suisse romande et Belgique :</strong> septante (70), octante/huitante (80), nonante (90)</div>

<h3>Règles d'orthographe importantes</h3>
<p><strong>VINGT et CENT</strong> prennent un -s quand multipliés (sans autre nombre après) :</p>
<div class="example-box"><div class="fr">quatre-<strong>vingts</strong> · trois <strong>cents</strong> · huit <strong>cents</strong><br>Mais : quatre-vingt-<strong>trois</strong> · trois cent <strong>cinquante</strong> (pas de -s)</div></div>
<p><strong>MILLE</strong> est toujours invariable. <strong>MILLION / MILLIARD</strong> s'accordent :</p>
<div class="example-box"><div class="fr">trois <strong>mille</strong> · trois <strong>millions</strong> · dix <strong>milliards</strong></div></div>
<p>Jusqu'à cent, les composés sont reliés par un <strong>tiret</strong>. 21, 31… sont reliés par <strong>et</strong> :</p>
<div class="example-box"><div class="fr">dix-sept · cinquante-cinq · soixante-douze<br>vingt <strong>et</strong> un · trente <strong>et</strong> un · soixante <strong>et</strong> onze</div></div>

<h3>Prononciation</h3>
<p>Finales muettes devant consonne : <em>hui/f jours · si/x livres · di/x personnes</em></p>
<p>Le « s » de six et dix se prononce « z » devant voyelle : <em>six_adultes, dix_amis</em></p>
<p>« Neuf » se prononce « neuv » devant heures et ans : <em>neuf_heures (v), neuf_ans (v)</em></p>

<h3>Les nombres ordinaux</h3>
<div class="example-box"><div class="fr">1er/1ère premier/première · 2ème deuxième · 3ème troisième · 4ème quatrième<br>5ème cinquième · 8ème huitième · 9ème neuvième · 21ème vingt et unième</div></div>

<h3>Formation des ordinaux</h3>
<p>Cardinal + <strong>-ième</strong> (le -e final tombe) :</p>
<div class="example-box"><div class="fr">deux → deuxi<strong>ème</strong> · quatre → quatri<strong>ème</strong> · onze → onzi<strong>ème</strong><br>Exceptions : un → premi<strong>er</strong>/premi<strong>ère</strong> · cinq → cinqu<strong>ième</strong> · neuf → neuv<strong>ième</strong></div></div>

<h3>Nombres dans la vie quotidienne</h3>
<table class="grammar-table">
  <tr><th>Contexte</th><th>Comment lire</th><th>Exemple</th></tr>
  <tr><td>Numéro de téléphone</td><td class="form-cell">Par groupes de deux</td><td class="fr-cell">06 45 23 78 91 = zéro six, quarante-cinq, vingt-trois…</td></tr>
  <tr><td>Prix</td><td class="form-cell">nombre + euros + centimes</td><td class="fr-cell">15,50 € = quinze euros cinquante</td></tr>
  <tr><td>Pourcentage</td><td class="form-cell">nombre + pour cent</td><td class="fr-cell">50 % = cinquante pour cent</td></tr>
  <tr><td>Décimaux</td><td class="form-cell">nombre + virgule + nombre</td><td class="fr-cell">3,14 = trois virgule quatorze</td></tr>
  <tr><td>Fractions</td><td class="form-cell">cardinal + ordinal</td><td class="fr-cell">1/3 = un tiers · 1/4 = un quart · 3/4 = trois quarts</td></tr>
</table>
<div class="tip-box"><strong>💡 Approximations :</strong> une dizaine (≈10) · une douzaine (≈12) · une vingtaine (≈20) · une centaine (≈100) · un millier (≈1000)</div>`
  },

  {
    id: 47,
    title: "Le Temps (1) — Date, Heure et Météo",
    diff: "A1", topic: "Nouns & Articles", source: "Inter",
    preview: "Saying dates (nous sommes le…), days/months/seasons, telling time (il est…), weather.",
    content: `
<h3>La date — NOUS SOMMES / ON EST + jour</h3>
<div class="example-box"><div class="fr">Aujourd'hui, <strong>nous sommes le</strong> 3 février. C'est l'hiver.<br><strong>On est</strong> lundi. / <strong>C'est</strong> lundi. (à l'oral)</div></div>
<div class="tip-box"><strong>💡 Règles :</strong><br>• L'article précède toujours la date : <em>Paris, <strong>le</strong> 8 novembre 1988</em><br>• Jour + date : <em>Nous sommes <strong>le</strong> mercredi 18 août</em><br>• On dit « <strong>le premier</strong> » mais « <strong>le deux</strong>, le trois… »</div>

<h3>Les jours, mois et saisons</h3>
<p><strong>Jours :</strong> lundi · mardi · mercredi · jeudi · vendredi · samedi · dimanche</p>
<div class="tip-box"><strong>Lundi</strong> (sans article) = ce lundi / <strong>Le lundi</strong> (avec article) = tous les lundis<br>Le matin/l'après-midi/le soir (pendant)</div>
<p><strong>Mois :</strong> janvier · février · mars · avril · mai · juin · juillet · août · septembre · octobre · novembre · décembre</p>
<div class="example-box"><div class="fr">Nous sommes <strong>en</strong> mars. / Nous sommes <strong>au mois de</strong> mars.<br>Nous sommes <strong>début</strong> mars / <strong>mi-mars</strong> / <strong>fin</strong> mars. (sans article)</div></div>
<p><strong>Saisons :</strong> le printemps · l'été · l'automne · l'hiver</p>
<div class="example-box"><div class="fr"><strong>au</strong> printemps · <strong>en</strong> été · <strong>en</strong> automne · <strong>en</strong> hiver</div></div>
<div class="example-box"><div class="fr">Pour les années : <strong>en</strong> 2017 · <strong>au</strong> XXIe siècle / <strong>en</strong> 1789 · <strong>au</strong> XVIIIe siècle</div></div>

<h3>L'heure — IL EST + heure</h3>
<p>Toujours singulier « il est » + heure :</p>
<table class="grammar-table">
  <tr><th>Heure</th><th>Façon de dire</th></tr>
  <tr><td>8h00</td><td class="fr-cell">huit heures</td></tr>
  <tr><td>8h15</td><td class="fr-cell">huit heures et quart</td></tr>
  <tr><td>8h30</td><td class="fr-cell">huit heures et demie</td></tr>
  <tr><td>8h45</td><td class="fr-cell">neuf heures moins le quart</td></tr>
  <tr><td>8h55</td><td class="fr-cell">neuf heures moins cinq</td></tr>
  <tr><td>12h00</td><td class="fr-cell">midi</td></tr>
  <tr><td>24h00</td><td class="fr-cell">minuit</td></tr>
</table>
<div class="tip-box"><strong>💡 « Demi »</strong> s'accorde après le nom : <em>une demi-heure / une heure et <strong>demie</strong></em><br>Horaires officiels : <em>20h25 = vingt heures vingt-cinq</em></div>

<h3>La météo — IL FAIT / IL Y A / IL + verbe</h3>
<table class="grammar-table">
  <tr><th>Il fait + adjectif</th><th>Il y a + nom</th><th>Il + verbe</th></tr>
  <tr><td class="fr-cell">Il fait chaud/froid/beau/mauvais.</td><td class="fr-cell">Il y a du soleil/du vent/des nuages/du brouillard.</td><td class="fr-cell">Il pleut/Il neige/Il fait 10°.</td></tr>
</table>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>Aujourd'hui, il fait froid.</em> — Ne dites pas : <em>~~Aujourd'hui, c'est froid~~</em></div>

<h3>Expressions de temps courantes</h3>
<table class="grammar-table">
  <tr><th>Passé</th><th>Présent</th><th>Futur</th></tr>
  <tr><td class="fr-cell">hier / hier matin / hier soir</td><td class="fr-cell">aujourd'hui / maintenant</td><td class="fr-cell">demain / demain matin</td></tr>
  <tr><td class="fr-cell">avant-hier</td><td class="fr-cell">en ce moment</td><td class="fr-cell">après-demain</td></tr>
  <tr><td class="fr-cell">la semaine dernière</td><td class="fr-cell">cette semaine</td><td class="fr-cell">la semaine prochaine</td></tr>
  <tr><td class="fr-cell">le mois dernier / l'an dernier</td><td class="fr-cell">ce mois-ci / cette année</td><td class="fr-cell">le mois prochain / l'an prochain</td></tr>
  <tr><td class="fr-cell">autrefois / jadis / il y a longtemps</td><td class="fr-cell">de nos jours / actuellement</td><td class="fr-cell">bientôt / prochainement / un jour</td></tr>
</table>

<h3>Fréquence</h3>
<div class="example-box"><div class="fr"><strong>toujours</strong> (100%) · <strong>souvent</strong> (≈80%) · <strong>de temps en temps</strong> (≈40%)<br><strong>parfois / quelquefois</strong> (≈30%) · <strong>rarement</strong> (≈10%) · <strong>jamais</strong> (0%)<br>tous les jours / chaque jour · une fois par semaine · deux fois par mois</div></div>

<h3>Demander et dire l'heure</h3>
<div class="example-box"><div class="fr"><strong>Demander :</strong> Quelle heure est-il ? / Il est quelle heure ? / Vous avez l'heure ?<br><strong>Répondre :</strong> Il est trois heures. / Il est midi et demi. / Il est minuit moins dix.</div></div>`
  },

  {
    id: 48,
    title: "Les Indéfinis — Quelques, Chaque, Tout, Quelqu'un",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "Indefinite adjectives (quelques/plusieurs/chaque/tout) and pronouns (quelqu'un/quelque chose/quelque part).",
    content: `
<h3>L'adjectif indéfini — exprime une quantité</h3>
<table class="grammar-table">
  <tr><th>Adjectif</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">quelques</td><td>petit nombre</td><td class="fr-cell">quelques étudiant(e)s</td></tr>
  <tr><td class="form-cell">plusieurs</td><td>nombre plus important</td><td class="fr-cell">plusieurs étudiant(e)s</td></tr>
  <tr><td class="form-cell">chaque</td><td>individu en particulier (singulier)</td><td class="fr-cell">chaque étudiant(e)</td></tr>
  <tr><td class="form-cell">tout / toute / tous / toutes</td><td>totalité</td><td class="fr-cell">tout le groupe · tous les étudiants</td></tr>
  <tr><td class="form-cell">certain(e)s / d'autres</td><td>partie de l'ensemble</td><td class="fr-cell">certains étudiants · d'autres étudiants</td></tr>
  <tr><td class="form-cell">aucun(e)</td><td>quantité zéro</td><td class="fr-cell">je ne connais aucun(e) étudiant(e)</td></tr>
</table>
<div class="tip-box"><strong>💡 Chaque</strong> = tous les éléments d'un ensemble, pris séparément :<br><em><strong>Chaque</strong> étudiant a un livre.</em> = Tous les étudiants ont un livre.</div>
<div class="tip-box"><strong>💡 Tous les jours</strong> (= chaque jour) · <strong>Toutes les nuits</strong> (= chaque nuit)</div>
<div class="warning-box"><strong>⚠ D'autres</strong> est le pluriel de « un(e) autre » :<br>Dites : <em>J'attends <strong>d'autres</strong> étudiants.</em> — Ne dites pas : <em>~~J'attends des autres étudiants~~</em></div>

<h3>Le pronom indéfini — identique à l'adjectif</h3>
<div class="example-box"><div class="fr">Les étudiants sont tous sympathiques. <strong>Certains</strong> sont très jeunes, <strong>d'autres</strong> plus âgés. <strong>Quelques-uns</strong> sont bilingues.</div></div>
<div class="tip-box"><strong>💡 Tout (pronom neutre)</strong> renvoie à des <em>choses</em> :<br><em>Tout va bien. / Je comprends tout. / Merci pour <strong>tout</strong>.</em><br><strong>Tous (pronom pluriel)</strong> renvoie à des personnes : <em>Merci à <strong>tous</strong>.</em></div>

<h3>QUELQU'UN, QUELQUE CHOSE, QUELQUE PART</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Question</th><th>Contraire</th></tr>
  <tr><td class="form-cell">quelqu'un</td><td>Qui ?</td><td class="fr-cell">personne</td></tr>
  <tr><td class="form-cell">quelque chose</td><td>Quoi ?</td><td class="fr-cell">rien</td></tr>
  <tr><td class="form-cell">quelque part</td><td>Où ?</td><td class="fr-cell">nulle part</td></tr>
</table>
<div class="tip-box"><strong>💡 Suivi d'un adjectif → de :</strong><br><em>quelqu'un <strong>de</strong> bien · quelque chose <strong>de</strong> nouveau · rien <strong>de</strong> spécial</em><br>Ces pronoms sont invariables : <em>Paul est <strong>quelqu'un</strong> d'intelligent. Marie est <strong>quelqu'un</strong> d'intelligent.</em></div>

<h3>TOUT / TOUTE / TOUS / TOUTES — emplois détaillés</h3>
<table class="grammar-table">
  <tr><th>Forme</th><th>Fonction</th><th>Exemple</th></tr>
  <tr><td class="form-cell">tout le / toute la</td><td>adjectif + art. défini (= entier)</td><td class="fr-cell"><strong>Tout le</strong> monde est là. / <strong>Toute la</strong> journée.</td></tr>
  <tr><td class="form-cell">tous les / toutes les</td><td>adjectif + art. défini pluriel (= chaque)</td><td class="fr-cell"><strong>Tous les</strong> jours. / <strong>Toutes les</strong> semaines.</td></tr>
  <tr><td class="form-cell">tout (invariable)</td><td>pronom neutre (= everything)</td><td class="fr-cell"><strong>Tout</strong> va bien. / J'ai <strong>tout</strong> compris.</td></tr>
  <tr><td class="form-cell">tous / toutes</td><td>pronom pluriel (= everyone)</td><td class="fr-cell"><strong>Tous</strong> sont venus. / Elles sont <strong>toutes</strong> parties.</td></tr>
</table>
<div class="tip-box"><strong>💡 Prononciation :</strong> <em>tous</em> adjectif = « tou » (s muet) : <em>tous les jours</em><br><em>tous</em> pronom = « touss » (s prononcé) : <em>ils sont <strong>tous</strong> là</em></div>

<h3>N'IMPORTE + interrogatif</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">n'importe qui</td><td>anyone (whoever)</td><td class="fr-cell">N'importe qui peut le faire.</td></tr>
  <tr><td class="form-cell">n'importe quoi</td><td>anything (whatever)</td><td class="fr-cell">Il dit n'importe quoi ! (= nonsense)</td></tr>
  <tr><td class="form-cell">n'importe où</td><td>anywhere</td><td class="fr-cell">On peut aller n'importe où.</td></tr>
  <tr><td class="form-cell">n'importe quand</td><td>anytime</td><td class="fr-cell">Appelez-moi n'importe quand.</td></tr>
  <tr><td class="form-cell">n'importe quel(le)</td><td>any (adjective)</td><td class="fr-cell">À n'importe quelle heure.</td></tr>
  <tr><td class="form-cell">n'importe comment</td><td>any way / carelessly</td><td class="fr-cell">Il s'habille n'importe comment.</td></tr>
</table>`
  },

  {
    id: 49,
    title: "Le Temps (2) — Depuis, Pour, Pendant, En",
    diff: "A2", topic: "Prepositions", source: "Inter",
    preview: "Since/for ongoing (depuis), planned duration (pour), completed duration (pendant), time taken (en).",
    content: `
<h3>DEPUIS — origine d'une action toujours actuelle</h3>
<div class="example-box"><div class="fr">Je suis professeur <strong>depuis</strong> 1981. (= avec une date)<br>Je suis professeur <strong>depuis</strong> 15 ans. (= avec une durée)</div><div class="en">Action began in the past and is still ongoing NOW → présent + depuis</div></div>
<p>En début de phrase, on peut aussi dire :</p>
<div class="example-box"><div class="fr"><strong>Il y a 15 ans que</strong> je suis professeur. / <strong>Ça fait 15 ans que</strong> je suis professeur.</div></div>
<p>Devant un verbe : <strong>depuis que</strong> :</p>
<div class="example-box"><div class="fr"><strong>Depuis que</strong> je fais du sport, je dors mieux.</div></div>

<h3>POUR — durée prévue</h3>
<div class="example-box"><div class="fr">Je suis en stage <strong>pour</strong> trois jours. (c'est prévu)<br>J'ai un traitement <strong>pour</strong> six mois.</div></div>

<h3>PENDANT — durée de développement d'une action</h3>
<div class="example-box"><div class="fr">Le matin, je me brosse les cheveux <strong>pendant</strong> cinq minutes.<br><strong>Pendant</strong> deux heures, je ne pense à rien.</div></div>
<div class="tip-box"><strong>💡 Pendant peut être supprimé</strong>, sauf en début de phrase :<br><em>Je dors huit heures. / Je me repose deux heures. (sans pendant = courant)</em></div>

<h3>EN — quantité de temps nécessaire pour faire quelque chose</h3>
<div class="example-box"><div class="fr">Je fais huit kilomètres <strong>en</strong> une heure.<br>En général, je déjeune <strong>en</strong> 10 minutes.</div></div>

<h3>Récapitulatif — PENDANT vs EN</h3>
<div class="warning-box"><strong>⚠ Distinguer :</strong><br>
<em>Tous les jours, je nage <strong>pendant</strong> 1h.</em> (je nage et je nage et je nage… = accent sur l'action)<br>
<em>Je fais 3 km <strong>en</strong> 1h.</em> (je mets 1h pour faire 3 km = temps de réalisation)</div>

<h3>Tableau récapitulatif complet — DEPUIS vs IL Y A vs PENDANT vs EN vs POUR</h3>
<table class="grammar-table">
  <tr><th>Mot</th><th>Temps verbal</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">depuis</td><td>Présent (ou imparfait)</td><td>Action commencée dans le passé, qui continue</td><td class="fr-cell">J'habite ici <strong>depuis</strong> 2010.</td></tr>
  <tr><td class="form-cell">il y a</td><td>Passé composé</td><td>Ago (action terminée)</td><td class="fr-cell">Il est parti <strong>il y a</strong> 2 heures.</td></tr>
  <tr><td class="form-cell">pendant</td><td>Tous les temps</td><td>Durée de l'action</td><td class="fr-cell">J'ai attendu <strong>pendant</strong> 30 min.</td></tr>
  <tr><td class="form-cell">en</td><td>Tous les temps</td><td>Temps nécessaire pour accomplir</td><td class="fr-cell">J'ai fini <strong>en</strong> 10 minutes.</td></tr>
  <tr><td class="form-cell">pour</td><td>Présent / futur</td><td>Durée prévue / planifiée</td><td class="fr-cell">Je pars <strong>pour</strong> trois jours.</td></tr>
  <tr><td class="form-cell">dans</td><td>Présent / futur</td><td>In (futur) = à partir de maintenant</td><td class="fr-cell">Le train part <strong>dans</strong> 5 minutes.</td></tr>
</table>
<div class="warning-box"><strong>⚠ DEPUIS vs IL Y A :</strong><br>
<em>Je travaille ici <strong>depuis</strong> 5 ans.</em> (= je travaille encore ici → présent)<br>
<em>J'ai commencé <strong>il y a</strong> 5 ans.</em> (= point de départ passé → passé composé)</div>`
  },

  {
    id: 50,
    title: "Le Pronom « EN »",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "EN replaces de + noun; partitive quantities; with expressions of quantity; negation.",
    content: `
<h3>EN remplace un nom précédé de « DE »</h3>
<p>On utilise <strong>en</strong> pour remplacer un complément introduit par « de » (partitif, quantité) :</p>
<div class="example-box"><div class="fr">– Vous mangez de la viande ? – Oui, j'<strong>en</strong> mange.<br>– Vous buvez du vin ? – Oui, j'<strong>en</strong> bois.<br>– Vous achetez des surgelés ? – Oui, j'<strong>en</strong> achète.</div></div>
<div class="warning-box"><strong>⚠ À la question « Il y a du pain ? » :</strong><br>Répondez : <em>Oui, <strong>il y en a</strong>.</em> — Ne répondez pas : <em>~~Oui, il y a~~</em></div>

<h3>EN est nécessaire même quand la quantité est exprimée</h3>
<div class="example-box"><div class="fr">– Vous avez des enfants ? – Oui, j'<strong>en</strong> ai <strong>deux</strong>.<br>– Il y a vingt étudiants ? – Non, il y <strong>en</strong> a <strong>trente</strong>.<br>– Vous avez combien de télé ? – J'<strong>en</strong> ai <strong>une</strong> (deux, trois…)</div></div>
<div class="tip-box"><strong>💡 Un(e)</strong> est considéré comme une quantité (= 1) :<br>– Vous avez une voiture ? – Oui, j'<strong>en</strong> ai une. (pas : ~~Oui, j'ai une~~)</div>

<h3>La négation avec EN</h3>
<p>La négation se place <strong>avant et après</strong> le bloc pronom + verbe :</p>
<div class="example-box"><div class="fr">– Vous avez des brioches ? – Non, je <strong>n'en ai pas</strong>.<br>– Il y a du pain ? – Non, il <strong>n'y en a plus</strong>.</div></div>
<div class="warning-box"><strong>⚠ Un(e) disparaît à la forme négative :</strong><br>– Vous avez un stylo ? – Non, je <strong>n'en ai pas</strong>. (pas : ~~je n'en ai pas un~~)</div>

<h3>EN avec les expressions en « DE »</h3>
<table class="grammar-table">
  <tr><th>Expression + DE</th><th>Avec EN</th></tr>
  <tr><td class="fr-cell">avoir besoin <strong>de</strong></td><td class="fr-cell">J'<strong>en</strong> ai besoin. (= I need some/it.)</td></tr>
  <tr><td class="fr-cell">avoir peur <strong>de</strong></td><td class="fr-cell">J'<strong>en</strong> ai peur. (= I'm afraid of it.)</td></tr>
  <tr><td class="fr-cell">avoir envie <strong>de</strong></td><td class="fr-cell">J'<strong>en</strong> ai envie. (= I feel like it.)</td></tr>
  <tr><td class="fr-cell">parler <strong>de</strong></td><td class="fr-cell">J'<strong>en</strong> parle souvent. (= I talk about it.)</td></tr>
  <tr><td class="fr-cell">s'occuper <strong>de</strong></td><td class="fr-cell">Je m'<strong>en</strong> occupe. (= I'm taking care of it.)</td></tr>
  <tr><td class="fr-cell">venir <strong>de</strong> (lieu)</td><td class="fr-cell">J'<strong>en</strong> viens. (= I'm coming from there.)</td></tr>
  <tr><td class="fr-cell">être content/satisfait <strong>de</strong></td><td class="fr-cell">J'<strong>en</strong> suis content. (= I'm happy about it.)</td></tr>
</table>

<h3>EN — place dans la phrase</h3>
<div class="example-box"><div class="fr"><strong>Présent :</strong> J'<strong>en</strong> mange. / Je n'<strong>en</strong> mange pas.<br><strong>Passé composé :</strong> J'<strong>en</strong> ai mangé. / Je n'<strong>en</strong> ai pas mangé.<br><strong>Futur proche :</strong> Je vais <strong>en</strong> acheter. / Je ne vais pas <strong>en</strong> acheter.<br><strong>Impératif :</strong> Manges-<strong>en</strong> ! / N'<strong>en</strong> mange pas !</div></div>
<div class="warning-box"><strong>⚠ EN pour les personnes :</strong> On utilise <strong>de + pronom tonique</strong> (pas EN) pour les personnes :<br>
<em>Je parle <strong>de lui</strong>.</em> (pas : ~~J'en parle~~ quand c'est une personne spécifique)<br>
Mais : <em>Des enfants ? J'<strong>en</strong> ai trois.</em> (quantité → EN est ok)</div>`
  },

  {
    id: 51,
    title: "La Situation dans l'Espace (2) — Régions et Origine",
    diff: "A2", topic: "Prepositions", source: "Inter",
    preview: "EN/dans le/dans les for regions; DE/DU for geographic origin; products and their origin.",
    content: `
<h3>LES RÉGIONS, DÉPARTEMENTS, ÉTATS FÉDÉRÉS</h3>
<table class="grammar-table">
  <tr><th>Structure</th><th>Usage</th><th>Exemples</th></tr>
  <tr><td class="form-cell">en + nom féminin</td><td>région ou état féminin</td><td class="fr-cell">en Bretagne · en Bavière · en Californie</td></tr>
  <tr><td class="form-cell">dans le + nom masculin</td><td>région ou état masculin</td><td class="fr-cell">dans le Cantal · dans le Wisconsin · dans le Devonshire</td></tr>
  <tr><td class="form-cell">dans les + nom pluriel</td><td>région plurielle</td><td class="fr-cell">dans les Alpes · dans les Abruzzes · dans les Andes</td></tr>
</table>

<h3>L'ORIGINE GÉOGRAPHIQUE — DE ou DU ?</h3>
<table class="grammar-table">
  <tr><th>Structure</th><th>Usage</th><th>Exemples</th></tr>
  <tr><td class="form-cell">du + nom masculin</td><td>pays, région, état masculin</td><td class="fr-cell">Je viens du Maroc / du Poitou / du Texas.</td></tr>
  <tr><td class="form-cell">de + nom féminin</td><td>pays, région, état féminin</td><td class="fr-cell">Je viens de Belgique / de Normandie / de Californie.</td></tr>
</table>
<div class="example-box"><div class="fr">le café <strong>du</strong> Brésil · le foie gras <strong>du</strong> Périgord · le consulat <strong>du</strong> Maroc<br>le café <strong>de</strong> Colombie · les fruits <strong>de</strong> Provence · le consulat <strong>de</strong> France</div></div>
<div class="tip-box"><strong>💡 D' devant voyelle :</strong> les oranges <strong>d'</strong>Espagne · les citrons <strong>d'</strong>Israël</div>
<div class="warning-box"><strong>⚠ Pas d'élision devant h aspiré :</strong> les tulipes <strong>de</strong> Hollande (pas : <em>~~d'Hollande~~</em>)<br>
<strong>Dites :</strong> <em>Je viens de Chine.</em> — Ne dites pas : <em>~~Je viens de la Chine~~</em></div>

<h3>Prépositions de lieu — dans/sur/sous/devant/derrière</h3>
<table class="grammar-table">
  <tr><th>Préposition</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">dans</td><td>inside</td><td class="fr-cell">dans la boîte · dans la rue · dans le tiroir</td></tr>
  <tr><td class="form-cell">sur</td><td>on (surface)</td><td class="fr-cell">sur la table · sur le mur · sur Internet</td></tr>
  <tr><td class="form-cell">sous</td><td>under</td><td class="fr-cell">sous le lit · sous la pluie</td></tr>
  <tr><td class="form-cell">devant</td><td>in front of</td><td class="fr-cell">devant la maison · devant l'école</td></tr>
  <tr><td class="form-cell">derrière</td><td>behind</td><td class="fr-cell">derrière le bâtiment</td></tr>
  <tr><td class="form-cell">entre</td><td>between</td><td class="fr-cell">entre la banque et la poste</td></tr>
  <tr><td class="form-cell">au-dessus de</td><td>above</td><td class="fr-cell">au-dessus de la porte</td></tr>
  <tr><td class="form-cell">au-dessous de</td><td>below</td><td class="fr-cell">au-dessous du pont</td></tr>
  <tr><td class="form-cell">au milieu de</td><td>in the middle of</td><td class="fr-cell">au milieu de la place</td></tr>
  <tr><td class="form-cell">au bout de</td><td>at the end of</td><td class="fr-cell">au bout de la rue</td></tr>
</table>`
  },

  {
    id: 52,
    title: "Le Verbe « ALLER » et les Transports",
    diff: "A1", topic: "Verbs", source: "Inter",
    preview: "Conjugation of aller, aller + lieu, transport prepositions (en voiture/à pied), aller voir vs visiter.",
    content: `
<h3>Conjugaison — verbe très irrégulier</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Aller</th><th>Exemple</th></tr>
  <tr><td>Je</td><td class="form-cell">vais</td><td class="fr-cell">Je vais à Paris.</td></tr>
  <tr><td>Tu</td><td class="form-cell">vas</td><td class="fr-cell">Tu vas à Rome.</td></tr>
  <tr><td>Il/Elle/On</td><td class="form-cell">va</td><td class="fr-cell">Il va en Suisse.</td></tr>
  <tr><td>Nous</td><td class="form-cell">allons</td><td class="fr-cell">Nous allons au Maroc.</td></tr>
  <tr><td>Vous</td><td class="form-cell">allez</td><td class="fr-cell">Vous allez au cinéma.</td></tr>
  <tr><td>Ils/Elles</td><td class="form-cell">vont</td><td class="fr-cell">Ils vont à la piscine.</td></tr>
</table>

<h3>ALLER + LIEU</h3>
<p>Le verbe « aller » est suivi d'un lieu :</p>
<div class="example-box"><div class="fr">Je vais <strong>à</strong> Berlin. / Je vais <strong>à</strong> l'hôtel. / Je vais <strong>chez</strong> des amis.</div></div>
<p>Avec des personnes, on utilise « chez » :</p>
<div class="example-box"><div class="fr">Je vais à la boucherie / <strong>chez</strong> le boucher.</div></div>
<p>Quand le lieu n'est pas précisé, on utilise le pronom « y » :</p>
<div class="example-box"><div class="fr">– On <strong>y</strong> va ? – Allons-<strong>y</strong> !</div></div>

<h3>Moyens de transport</h3>
<table class="grammar-table">
  <tr><th>EN + moyen de transport (principal)</th><th>À + moyen non motorisé</th></tr>
  <tr><td class="fr-cell">en voiture · en avion · en train · en bus · en bateau · en vélo · en taxi · en métro</td><td class="fr-cell">à pied · à bicyclette · à cheval · à moto (possible aussi)</td></tr>
</table>

<h3>ALLER VOIR vs VISITER</h3>
<div class="warning-box"><strong>⚠ Distinction importante :</strong><br>
<strong>Aller voir / venir voir</strong> + personne : <em>Je <strong>vais voir</strong> mes parents le dimanche.</em><br>
<strong>Visiter</strong> + lieu touristique : <em>Je <strong>visite</strong> Notre-Dame.</em><br>
Ne dites pas : <em>~~Je visite ma grand-mère.~~</em></div>

<h3>ALLER aux autres temps (rappel)</h3>
<table class="grammar-table">
  <tr><th>Temps</th><th>Je</th><th>Il/Elle</th><th>Nous</th><th>Ils/Elles</th></tr>
  <tr><td>Passé composé</td><td class="form-cell">suis allé(e)</td><td class="form-cell">est allé(e)</td><td class="form-cell">sommes allé(e)s</td><td class="form-cell">sont allé(e)s</td></tr>
  <tr><td>Imparfait</td><td class="form-cell">allais</td><td class="form-cell">allait</td><td class="form-cell">allions</td><td class="form-cell">allaient</td></tr>
  <tr><td>Futur</td><td class="form-cell">irai</td><td class="form-cell">ira</td><td class="form-cell">irons</td><td class="form-cell">iront</td></tr>
  <tr><td>Conditionnel</td><td class="form-cell">irais</td><td class="form-cell">irait</td><td class="form-cell">irions</td><td class="form-cell">iraient</td></tr>
  <tr><td>Subjonctif</td><td class="form-cell">aille</td><td class="form-cell">aille</td><td class="form-cell">allions</td><td class="form-cell">aillent</td></tr>
</table>

<h3>Expressions courantes avec ALLER</h3>
<div class="example-box"><div class="fr">Comment allez-vous ? / Comment vas-tu ? / Ça va ?<br>Ça va bien / mal / comme ci comme ça / pas mal / couci-couça.<br><strong>Aller bien/mal :</strong> Cette robe te va bien ! (= suits you)<br><strong>S'en aller :</strong> Je m'en vais. / Va-t'en ! (= Go away!)<br><strong>Allons-y !</strong> = Let's go! · <strong>On y va ?</strong> = Shall we go?</div></div>`
  },

  {
    id: 53,
    title: "Le Pronom « Y »",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "Y replaces place complements (à + lieu); Y replaces à + thing; fixed expressions with y.",
    content: `
<h3>Y remplace des compléments de LIEU</h3>
<div class="example-box"><div class="fr">Paul va à Lyon. → Il <strong>y</strong> va en voiture.<br>Anne habite à Athènes. → Elle <strong>y</strong> habite depuis un an.<br>Je suis chez moi. → J'<strong>y</strong> suis jusqu'à six heures.</div></div>

<h3>Y remplace des noms de CHOSES précédés de « à »</h3>
<div class="example-box"><div class="fr">Je pense à mon pays. → J'<strong>y</strong> pense moi aussi.<br>Je participe à ce projet. → J'<strong>y</strong> participe aussi.<br>Je m'intéresse à la politique. → Je m'<strong>y</strong> intéresse aussi.</div></div>
<div class="warning-box"><strong>⚠ Pour les PERSONNES, on utilise un pronom tonique :</strong><br>Je pense à Paul. → Je pense <strong>à lui</strong>. (pas : ~~J'y pense~~)<br>Je parle à Paul. → Je <strong>lui</strong> parle. (pronom indirect, pas y)</div>

<h3>Expressions courantes avec Y</h3>
<div class="example-box"><div class="fr">Paul est un connaisseur en vin : il s'<strong>y</strong> connaît.<br>Je ne suis pas responsable : je n'<strong>y</strong> suis pour rien.<br>N'oubliez pas de passer demain ! – Je n'<strong>y</strong> manquerai pas !<br>Voilà, ça <strong>y</strong> est, c'est fini ! On peut partir.</div></div>

<h3>La négation avec Y</h3>
<div class="example-box"><div class="fr">Il n'<strong>y</strong> va pas. / Il n'<strong>y</strong> en a plus. / Je ne m'<strong>y</strong> intéresse pas.</div></div>

<h3>Y — place dans la phrase (comme EN)</h3>
<div class="example-box"><div class="fr"><strong>Présent :</strong> J'<strong>y</strong> vais. / Je n'<strong>y</strong> vais pas.<br><strong>Passé composé :</strong> J'<strong>y</strong> suis allé. / Je n'<strong>y</strong> suis pas allé.<br><strong>Futur proche :</strong> Je vais <strong>y</strong> aller. / Je ne vais pas <strong>y</strong> aller.<br><strong>Impératif :</strong> Vas-<strong>y</strong> ! / Allons-<strong>y</strong> ! / N'<strong>y</strong> va pas !</div></div>

<h3>Verbes courants avec « à » (qui utilisent Y pour les choses)</h3>
<div class="example-box"><div class="fr">penser <strong>à</strong> · réfléchir <strong>à</strong> · s'intéresser <strong>à</strong> · participer <strong>à</strong><br>s'habituer <strong>à</strong> · tenir <strong>à</strong> · renoncer <strong>à</strong> · croire <strong>à</strong><br>faire attention <strong>à</strong> · s'attendre <strong>à</strong> · jouer <strong>à</strong></div></div>

<h3>Y vs LUI/LEUR — récapitulatif</h3>
<table class="grammar-table">
  <tr><th>Verbe + à</th><th>+ chose → Y</th><th>+ personne → LUI/LEUR</th></tr>
  <tr><td class="fr-cell">répondre à</td><td class="fr-cell">J'<strong>y</strong> réponds. (au mail)</td><td class="fr-cell">Je <strong>lui</strong> réponds. (à Marie)</td></tr>
  <tr><td class="fr-cell">penser à</td><td class="fr-cell">J'<strong>y</strong> pense. (au projet)</td><td class="fr-cell">Je pense <strong>à elle</strong>. (tonique !)</td></tr>
  <tr><td class="fr-cell">s'intéresser à</td><td class="fr-cell">Je m'<strong>y</strong> intéresse. (à l'art)</td><td class="fr-cell">Je m'intéresse <strong>à lui</strong>. (tonique)</td></tr>
</table>`
  },

  {
    id: 54,
    title: "La Situation dans l'Espace et le Temps (3) — À, De, Jusqu'à, Vers, Entre",
    diff: "A2", topic: "Prepositions", source: "Inter",
    preview: "À (point), de…à (range), jusqu'à (limit), à partir de (start), vers/environ (approximation), entre/parmi.",
    content: `
<h3>À — indique un POINT dans l'espace ou le temps</h3>
<div class="example-box"><div class="fr">Je termine mon travail <strong>à</strong> dix-huit heures.<br>Nous sommes <strong>à</strong> Paris (<strong>à</strong> l'école, <strong>au</strong> deuxième étage).</div></div>

<h3>DE… À — distance d'un point à un autre</h3>
<div class="example-box"><div class="fr">Je travaille <strong>de</strong> 8 heures <strong>à</strong> midi, <strong>du</strong> lundi <strong>au</strong> vendredi.<br>Il y a huit cents kilomètres <strong>de</strong> Paris <strong>à</strong> Avignon.</div></div>

<h3>JUSQU'À — indique une LIMITE</h3>
<div class="example-box"><div class="fr">En France, on travaille en général <strong>jusqu'à</strong> soixante-deux ans.<br>Le TGV Atlantique va <strong>jusqu'au</strong> Croisic.</div></div>

<h3>À PARTIR DE — indique un POINT DE DÉPART</h3>
<div class="example-box"><div class="fr">L'horaire d'hiver commence <strong>à partir du</strong> 22 septembre.<br>Il y a des embouteillages <strong>à partir de</strong> Versailles.</div></div>

<h3>VERS et ENVIRON — approximation</h3>
<table class="grammar-table">
  <tr><th>VERS + heure (sauf avec « il est »)</th><th>ENVIRON + quantité</th></tr>
  <tr><td class="fr-cell">Nous dînons <strong>vers</strong> huit heures.<br>Nous arriverons <strong>vers</strong> midi.</td><td class="fr-cell">Paul a <strong>environ</strong> 30 ans.<br>Il gagne <strong>environ</strong> 2 000 euros.</td></tr>
</table>
<div class="warning-box"><strong>⚠ Avec il est :</strong> <em>Il est <strong>environ</strong> sept heures.</em> (pas vers avec il est)</div>

<h3>ENTRE et PARMI</h3>
<div class="example-box"><div class="fr"><strong>Entre</strong> deux éléments : <em>B est entre A et C. / J'hésite entre deux métiers.</em><br><strong>Parmi</strong> plusieurs éléments : <em>B est une lettre <strong>parmi</strong> les lettres de l'alphabet.</em><br><strong>Entre nous, entre eux</strong> = à l'exclusion d'autres personnes : <em><strong>Entre nous</strong>, je vais vous confier un secret.</em></div></div>

<h3>Récapitulatif des prépositions de temps et d'espace</h3>
<table class="grammar-table">
  <tr><th>Préposition</th><th>Espace (lieu)</th><th>Temps</th></tr>
  <tr><td class="form-cell">à</td><td class="fr-cell">Je suis <strong>à</strong> Paris.</td><td class="fr-cell">Je pars <strong>à</strong> 8h.</td></tr>
  <tr><td class="form-cell">de…à</td><td class="fr-cell"><strong>De</strong> Paris <strong>à</strong> Lyon.</td><td class="fr-cell"><strong>De</strong> 8h <strong>à</strong> 12h.</td></tr>
  <tr><td class="form-cell">jusqu'à</td><td class="fr-cell"><strong>Jusqu'à</strong> Marseille.</td><td class="fr-cell"><strong>Jusqu'à</strong> midi.</td></tr>
  <tr><td class="form-cell">vers</td><td class="fr-cell"><strong>Vers</strong> le sud.</td><td class="fr-cell"><strong>Vers</strong> 8 heures.</td></tr>
  <tr><td class="form-cell">entre</td><td class="fr-cell"><strong>Entre</strong> Paris et Lyon.</td><td class="fr-cell"><strong>Entre</strong> 8h et 10h.</td></tr>
  <tr><td class="form-cell">dans</td><td class="fr-cell"><strong>Dans</strong> la rue.</td><td class="fr-cell"><strong>Dans</strong> 5 minutes.</td></tr>
</table>`
  },

  {
    id: 55,
    title: "Les Pronoms Toniques — Moi, Toi, Lui, Elle, Nous, Vous, Eux, Elles",
    diff: "A2", topic: "Pronouns", source: "Inter",
    preview: "Stressed pronouns after prepositions, after c'est, with aussi/non plus, to emphasize subject.",
    content: `
<h3>Les pronoms toniques</h3>
<table class="grammar-table">
  <tr><th>Pronom sujet</th><th>Pronom tonique</th></tr>
  <tr><td>je</td><td class="form-cell">moi</td></tr>
  <tr><td>tu</td><td class="form-cell">toi</td></tr>
  <tr><td>il</td><td class="form-cell">lui</td></tr>
  <tr><td>elle</td><td class="form-cell">elle</td></tr>
  <tr><td>nous</td><td class="form-cell">nous</td></tr>
  <tr><td>vous</td><td class="form-cell">vous</td></tr>
  <tr><td>ils</td><td class="form-cell">eux</td></tr>
  <tr><td>elles</td><td class="form-cell">elles</td></tr>
</table>
<div class="tip-box"><strong>💡 SOI</strong> = pronom tonique de « tout le monde / on » :<br><em>On est bien, chez <strong>soi</strong>. / Il faut prendre soin de <strong>soi</strong>.</em></div>

<h3>4 usages principaux</h3>
<p><strong>1. Après une PRÉPOSITION :</strong></p>
<div class="example-box"><div class="fr">Max travaille avec <strong>moi</strong>. / Léa habite chez <strong>lui</strong>. / Partons sans <strong>eux</strong>.</div></div>
<p><strong>2. Après C'EST :</strong></p>
<div class="example-box"><div class="fr">– C'est <strong>toi</strong> ? – C'est <strong>moi</strong> ! / – Qui est là ? – C'est <strong>eux</strong>…</div></div>
<p><strong>3. Avec AUSSI, NON PLUS, PAS, ET, NI :</strong></p>
<div class="example-box"><div class="fr">– Je suis fatigué. Et <strong>toi</strong> ? – <strong>Moi</strong> aussi.<br>– Elle n'est pas sympa ! – <strong>Lui</strong> non plus. / – Jo a faim. – <strong>Pas moi</strong>.</div></div>
<p><strong>4. Pour RENFORCER le sujet / marquer un CONTRASTE :</strong></p>
<div class="example-box"><div class="fr">– Je suis en forme, et toi ? – <strong>Moi</strong>, je suis fatiguée.<br>– Jean est pour le nucléaire, et toi ? – <strong>Moi</strong>, je suis contre.</div></div>
<div class="warning-box"><strong>⚠ Ne commencez pas une conversation par « Moi, je… »</strong> — c'est trop direct et peu élégant en français soutenu.</div>

<h3>Après les prépositions — exemples détaillés</h3>
<table class="grammar-table">
  <tr><th>Préposition</th><th>Exemple</th></tr>
  <tr><td class="form-cell">avec</td><td class="fr-cell">Tu viens avec <strong>moi</strong> ? / Il travaille avec <strong>eux</strong>.</td></tr>
  <tr><td class="form-cell">sans</td><td class="fr-cell">Ne pars pas sans <strong>elle</strong> ! / Il est venu sans <strong>nous</strong>.</td></tr>
  <tr><td class="form-cell">chez</td><td class="fr-cell">Je suis chez <strong>moi</strong>. / Viens chez <strong>toi</strong>.</td></tr>
  <tr><td class="form-cell">pour</td><td class="fr-cell">C'est pour <strong>vous</strong>. / Il a fait ça pour <strong>elle</strong>.</td></tr>
  <tr><td class="form-cell">à (possession)</td><td class="fr-cell">Ce livre est à <strong>moi</strong>. / C'est à <strong>toi</strong> ?</td></tr>
  <tr><td class="form-cell">selon / d'après</td><td class="fr-cell">Selon <strong>lui</strong>, c'est faux. / D'après <strong>eux</strong>...</td></tr>
  <tr><td class="form-cell">à cause de / grâce à</td><td class="fr-cell">Grâce à <strong>toi</strong> ! / À cause d'<strong>elle</strong>.</td></tr>
</table>

<h3>-MÊME(S) — insistance</h3>
<p>On ajoute <strong>-même(s)</strong> au pronom tonique pour insister :</p>
<div class="example-box"><div class="fr">Je l'ai fait <strong>moi-même</strong>. (= I did it myself.)<br>Elle s'est coupée <strong>elle-même</strong>. / Ils l'ont construit <strong>eux-mêmes</strong>.<br>Faites-le <strong>vous-même</strong> ! (= Do it yourself!)</div></div>`
  },

  {
    id: 56,
    title: "L'Interrogation (2) — Où, Quand, Comment, Quel, Lequel",
    diff: "A2", topic: "Questions", source: "Inter",
    preview: "Information questions with inversion; qui/que/quoi as interrogative pronouns; quel/lequel; exclamation.",
    content: `
<h3>OÙ, QUAND, COMMENT, COMBIEN, POURQUOI</h3>
<p>L'interrogatif en début de phrase entraîne une <strong>inversion</strong> du verbe et du pronom sujet :</p>
<table class="grammar-table">
  <tr><th>Interrogatif</th><th>Sens</th><th>Exemple (formel)</th><th>Avec est-ce que (courant)</th></tr>
  <tr><td class="form-cell">Où</td><td>lieu</td><td class="fr-cell">Où allez-vous ?</td><td class="fr-cell">Où est-ce que vous allez ?</td></tr>
  <tr><td class="form-cell">Quand</td><td>temps</td><td class="fr-cell">Quand partez-vous ?</td><td class="fr-cell">Quand est-ce que vous partez ?</td></tr>
  <tr><td class="form-cell">Comment</td><td>manière</td><td class="fr-cell">Comment partez-vous ?</td><td class="fr-cell">Comment est-ce que vous partez ?</td></tr>
  <tr><td class="form-cell">Combien</td><td>quantité</td><td class="fr-cell">Combien payez-vous ?</td><td class="fr-cell">Combien est-ce que vous payez ?</td></tr>
  <tr><td class="form-cell">Pourquoi</td><td>cause/but</td><td class="fr-cell">Pourquoi partez-vous en train ?</td><td class="fr-cell">Pourquoi est-ce que vous partez en train ?</td></tr>
</table>
<div class="tip-box"><strong>💡 Français familier :</strong> interrogatif en fin de phrase sans inversion :<br><em>Vous allez <strong>où</strong> ? / Vous partez <strong>quand</strong> ?</em></div>
<div class="tip-box"><strong>💡 Avec un nom sujet :</strong> on ajoute un pronom de rappel :<br><em>Où vos <strong>amis</strong> vont-<strong>ils</strong> ? / Où Paul va-<strong>t</strong>-il ?</em> (-t- entre deux voyelles)</div>

<h3>QUI, QUE, QUOI — interrogatifs</h3>
<table class="grammar-table">
  <tr><th></th><th>QUI (personne)</th><th>QUE / QUOI (chose)</th></tr>
  <tr><td>Cherchez-vous ?</td><td class="fr-cell"><strong>Qui</strong> cherchez-vous ? / <strong>Qui est-ce que</strong> vous cherchez ? / Vous cherchez <strong>qui</strong> ?</td><td class="fr-cell"><strong>Que</strong> cherchez-vous ? / <strong>Qu'est-ce que</strong> vous cherchez ? / Vous cherchez <strong>quoi</strong> ?</td></tr>
  <tr><td>Sujet</td><td class="fr-cell"><strong>Qui est-ce qui</strong> sonne ? = C'est le facteur. (personne)</td><td class="fr-cell"><strong>Qu'est-ce qui</strong> sonne ? = C'est le téléphone. (chose)</td></tr>
</table>

<h3>QUEL(S), QUELLE(S) — interrogatifs adjectifs</h3>
<div class="example-box"><div class="fr"><strong>Quel</strong> âge avez-vous ? / <strong>Quelle</strong> est votre nationalité ? / <strong>Quels</strong> pays connaissez-vous ?</div></div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em><strong>Quelle</strong> est votre profession ?</em> — Ne dites pas : <em>~~Qu'est-ce que votre profession ?~~</em></div>
<p><strong>LEQUEL, LAQUELLE, LESQUELS, LESQUELLES</strong> — pour choisir entre plusieurs :</p>
<div class="example-box"><div class="fr">– Passe-moi le stylo. – <strong>Quel</strong> stylo ? (je ne vois pas de stylo) / – <strong>Lequel</strong> ? (le bleu ou le rouge ?)</div></div>

<h3>L'EXCLAMATION</h3>
<div class="example-box"><div class="fr"><strong>Quel</strong> temps splendide ! / <strong>Quelle</strong> jolie fille ! / <strong>Quel</strong> idiot !<br><strong>Qu'est-ce qu'</strong>il fait chaud ! (fam.) / <strong>Qu'</strong>elle est jolie ! / <strong>Comme</strong> je suis bête !</div></div>

<h3>Récapitulatif — les 3 registres de la question</h3>
<table class="grammar-table">
  <tr><th>Registre</th><th>Exemple (où ?)</th><th>Exemple (qui ?)</th></tr>
  <tr><td>Familier (oral)</td><td class="fr-cell">Tu vas <strong>où</strong> ?</td><td class="fr-cell">Tu cherches <strong>qui</strong> ?</td></tr>
  <tr><td>Courant (est-ce que)</td><td class="fr-cell"><strong>Où est-ce que</strong> tu vas ?</td><td class="fr-cell"><strong>Qui est-ce que</strong> tu cherches ?</td></tr>
  <tr><td>Formel (inversion)</td><td class="fr-cell"><strong>Où</strong> vas-tu ?</td><td class="fr-cell"><strong>Qui</strong> cherches-tu ?</td></tr>
</table>

<h3>Questions avec COMBIEN</h3>
<div class="example-box"><div class="fr"><strong>Combien</strong> ça coûte ? / Ça coûte <strong>combien</strong> ? (familier)<br><strong>Combien de</strong> temps faut-il ? / <strong>Combien de</strong> personnes y a-t-il ?<br><strong>Combien</strong> en voulez-vous ? / <strong>Combien</strong> mesurez-vous ?</div></div>

<h3>QUEL vs LEQUEL — différence</h3>
<table class="grammar-table">
  <tr><th>QUEL + nom (adjectif)</th><th>LEQUEL (pronom — remplace quel + nom)</th></tr>
  <tr><td class="fr-cell"><strong>Quel</strong> livre préfères-tu ?</td><td class="fr-cell"><strong>Lequel</strong> préfères-tu ?</td></tr>
  <tr><td class="fr-cell"><strong>Quelle</strong> couleur aimez-vous ?</td><td class="fr-cell"><strong>Laquelle</strong> aimez-vous ?</td></tr>
  <tr><td class="fr-cell"><strong>Quels</strong> films avez-vous vus ?</td><td class="fr-cell"><strong>Lesquels</strong> avez-vous vus ?</td></tr>
  <tr><td class="fr-cell"><strong>Quelles</strong> chaussures préférez-vous ?</td><td class="fr-cell"><strong>Lesquelles</strong> préférez-vous ?</td></tr>
</table>`
  },

  {
    id: 57,
    title: "Le Discours Indirect au Présent",
    diff: "B1", topic: "Sentence Structure", source: "Inter",
    preview: "Reporting statements (que), yes/no questions (si), information questions, imperatives (de + inf).",
    content: `
<h3>Le discours indirect permet de rapporter des paroles ou des pensées</h3>
<p><strong>Verbes introducteurs :</strong> dire, demander, répondre, affirmer, déclarer, penser, etc.</p>

<h3>Affirmation → + QUE</h3>
<div class="example-box"><div class="fr">Paul dit : « Il pleut. » → Paul dit <strong>qu'</strong>il pleut.<br>Il pense : « C'est dommage. » → Il pense <strong>que</strong> c'est dommage.</div></div>

<h3>Question oui/non → + SI</h3>
<div class="example-box"><div class="fr">– Est-ce que vous sortez ? → Il demande <strong>si</strong> vous sortez.<br>– Il fait froid ? → Il demande <strong>s'</strong>il fait froid.</div></div>

<h3>Question avec interrogatif → interrogatif sans inversion</h3>
<div class="example-box"><div class="fr">– Où allez-vous ? → Il demande <strong>où</strong> vous allez.<br>– Quand partez-vous ? → Il demande <strong>quand</strong> vous partez.</div></div>

<h3>Qu'est-ce que / qui → CE QUE / CE QUI</h3>
<div class="example-box"><div class="fr">– Qu'est-ce que vous faites ? → Il demande <strong>ce que</strong> vous faites.<br>– Qu'est-ce qui se passe ? → Il demande <strong>ce qui</strong> se passe.<br>– Que voulez-vous ? → Il demande <strong>ce que</strong> vous voulez.</div></div>

<h3>Impératif → DE + infinitif</h3>
<div class="example-box"><div class="fr">– Partez ! → Il lui dit <strong>de</strong> partir.</div></div>

<h3>Points importants</h3>
<div class="tip-box"><strong>💡 Dites :</strong> <em>Je sais <strong>ce qu'</strong>il veut.</em> — Ne dites pas : <em>~~Je sais qu'est-ce qu'il veut~~</em></div>
<p>Quand il y a plusieurs phrases, on répète les éléments de liaison :</p>
<div class="example-box"><div class="fr">– Je pars et j'emmène ma fille. → Il dit <strong>qu'</strong>il part <strong>et qu'</strong>il emmène sa fille.<br>– Tu es prêt ? On y va ? → Il demande <strong>si</strong> tu es prêt <strong>et si</strong> on y va.</div></div>

<h3>Changements de pronoms et possessifs</h3>
<table class="grammar-table">
  <tr><th>Discours direct</th><th>Discours indirect</th></tr>
  <tr><td class="fr-cell">je / me / mon</td><td class="form-cell">il/elle / le/la / son</td></tr>
  <tr><td class="fr-cell">tu / te / ton</td><td class="form-cell">je / me / mon (ou il selon le contexte)</td></tr>
  <tr><td class="fr-cell">nous / notre</td><td class="form-cell">ils/elles / leur</td></tr>
</table>
<div class="example-box"><div class="fr">Il dit : « <strong>Je</strong> suis content de <strong>mon</strong> travail. » → Il dit <strong>qu'il</strong> est content de <strong>son</strong> travail.<br>Elle dit : « <strong>Tu</strong> es en retard. » → Elle me dit <strong>que je</strong> suis en retard.</div></div>

<h3>Discours indirect au PASSÉ — concordance des temps</h3>
<p>Quand le verbe introducteur est au passé, les temps changent :</p>
<table class="grammar-table">
  <tr><th>Discours direct</th><th>Discours indirect (passé)</th></tr>
  <tr><td class="fr-cell">Présent → </td><td class="form-cell">Imparfait</td></tr>
  <tr><td class="fr-cell">Passé composé → </td><td class="form-cell">Plus-que-parfait</td></tr>
  <tr><td class="fr-cell">Futur → </td><td class="form-cell">Conditionnel</td></tr>
  <tr><td class="fr-cell">Futur antérieur → </td><td class="form-cell">Conditionnel passé</td></tr>
  <tr><td class="fr-cell">Imparfait → </td><td class="form-cell">Imparfait (pas de changement)</td></tr>
</table>
<div class="example-box"><div class="fr">Il a dit : « Je <strong>suis</strong> fatigué. » → Il a dit qu'il <strong>était</strong> fatigué.<br>Elle a dit : « J'<strong>ai vu</strong> Paul. » → Elle a dit qu'elle <strong>avait vu</strong> Paul.<br>Il a dit : « Je <strong>viendrai</strong> demain. » → Il a dit qu'il <strong>viendrait</strong> le lendemain.</div></div>`
  },

  {
    id: 58,
    title: "Les Prépositions et les Verbes — À et DE",
    diff: "B1", topic: "Verbs", source: "Inter",
    preview: "Verbs followed by à + infinitive (commencer à), verbs followed by de + infinitive (arrêter de), no preposition.",
    content: `
<h3>Les prépositions À et DE sont arbitraires</h3>
<p>Après une préposition, les verbes se mettent à l'<strong>infinitif</strong>.</p>

<h3>Verbes courants + DE + infinitif</h3>
<div class="example-box"><div class="fr">accepter de · arrêter de · décider de · essayer de · finir de · oublier de<br>refuser de · regretter de · rêver de · s'arrêter de · se dépêcher de</div></div>
<div class="example-box"><div class="fr">On commence <strong>à</strong> travailler à 8h. On finit <strong>de</strong> travailler à 19h.<br>On essaie <strong>de</strong> faire le maximum. On refuse <strong>de</strong> continuer.</div></div>

<h3>Verbes courants + À + infinitif</h3>
<div class="example-box"><div class="fr">apprendre à · aider qqn à · arriver à · chercher à · commencer à<br>continuer à · hésiter à · inviter qqn à · réussir à · se mettre à</div></div>

<h3>Après adjectif ou nom → souvent DE</h3>
<div class="example-box"><div class="fr">Je suis content <strong>de</strong> partir. / Je suis heureux <strong>de</strong> vous voir. / Je suis pressé <strong>de</strong> finir.<br>J'ai envie <strong>de</strong> dormir. / J'ai peur <strong>de</strong> rater. / J'ai l'habitude <strong>de</strong> travailler tard.</div></div>
<div class="tip-box"><strong>💡 Mais : être prêt À · être habitué À · avoir tendance À · avoir du mal À</strong></div>

<h3>Verbes de goût et de projet → PAS de préposition</h3>
<div class="example-box"><div class="fr">J'adore voyager seul. / Je déteste attendre. / J'espère partir. / Je pense revenir.</div></div>
<div class="warning-box"><strong>⚠ Dites :</strong> <em>J'espère partir.</em> — Ne dites pas : <em>~~J'espère de partir~~</em><br>La forme infinitive d'un verbe n'est pas précédée de préposition : <em>Marcher, courir, bouger est bon pour la santé.</em></div>

<h3>Listes complètes par catégorie</h3>
<table class="grammar-table">
  <tr><th>Verbe + DE + infinitif</th><th>Verbe + À + infinitif</th><th>Verbe + Ø + infinitif</th></tr>
  <tr><td class="fr-cell">accepter de<br>arrêter de<br>avoir peur de<br>cesser de<br>choisir de<br>décider de<br>demander de<br>empêcher de<br>essayer de<br>éviter de<br>finir de<br>interdire de<br>menacer de<br>mériter de<br>obliger de<br>oublier de<br>permettre de<br>promettre de<br>proposer de<br>refuser de<br>regretter de<br>rêver de<br>risquer de<br>suggérer de<br>tenter de</td><td class="fr-cell">aider à<br>apprendre à<br>arriver à<br>chercher à<br>commencer à<br>consentir à<br>continuer à<br>encourager à<br>hésiter à<br>inviter à<br>se mettre à<br>parvenir à<br>passer (du temps) à<br>penser à<br>renoncer à<br>réussir à<br>servir à<br>s'habituer à<br>tenir à</td><td class="fr-cell">aimer<br>adorer<br>aller<br>compter<br>désirer<br>détester<br>devoir<br>espérer<br>faire<br>falloir<br>laisser<br>oser<br>penser<br>pouvoir<br>préférer<br>savoir<br>sembler<br>souhaiter<br>venir<br>vouloir</td></tr>
</table>`
  },

  {
    id: 59,
    title: "Les Verbes de Déplacement — Aller, Venir, Visiter",
    diff: "A2", topic: "Verbs", source: "Inter",
    preview: "Aller vs venir (direction); retourner/revenir; rentrer; aller voir vs visiter; verbs of movement + infinitive.",
    content: `
<h3>ALLER et VENIR — directions opposées</h3>
<table class="grammar-table">
  <tr><th>ALLER — d'un lieu vers un autre</th><th>VENIR — d'un lieu vers le lieu où on est</th></tr>
  <tr><td class="fr-cell">Je <strong>vais</strong> à Paris. (Je ne suis pas à Paris.)</td><td class="fr-cell"><strong>Venez</strong> me voir à Paris ! (Je suis à Paris.)</td></tr>
</table>
<div class="tip-box"><strong>💡 Avec moi/avec nous → VENIR :</strong><br><em>On va en Afrique et Joan <strong>vient</strong> avec nous.</em> (Joan va aussi en Afrique)</div>

<h3>RETOURNER, REVENIR, RENTRER</h3>
<table class="grammar-table">
  <tr><th>Verbe</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">retourner</td><td>= aller une nouvelle fois</td><td class="fr-cell">Je retourne à Paris. (j'y suis déjà allé)</td></tr>
  <tr><td class="form-cell">revenir</td><td>= venir une nouvelle fois</td><td class="fr-cell">Attendez-moi, ici, je reviens.</td></tr>
  <tr><td class="form-cell">rentrer</td><td>= revenir à son domicile / pays d'origine</td><td class="fr-cell">Je rentre chez moi à 8h du soir.</td></tr>
</table>

<h3>Verbes de déplacement + infinitif SANS préposition</h3>
<div class="example-box"><div class="fr">Je viens <strong>chercher</strong> Pierre. / Je descends <strong>acheter</strong> le journal.<br>(pas de préposition entre le verbe de mouvement et l'infinitif)</div></div>

<h3>ALLER VOIR / VENIR VOIR vs VISITER</h3>
<div class="warning-box"><strong>⚠ Distinction cruciale :</strong><br>
<em><strong>Aller voir / venir voir</strong></em> + personne : <em>Je vais voir mes parents dimanche. / Mes cousins viennent me voir souvent.</em><br>
<em><strong>Visiter</strong></em> + lieu touristique : <em>Je visite Notre-Dame. / Nous visitons l'église avec un guide.</em><br>
<em><strong>JAMAIS :</strong></em> ~~Je visite ma grand-mère.~~ / Pour les toilettes → <em>« Où sont les toilettes ? »</em> et non <em>~~« Est-ce que je peux visiter les toilettes ? »</em>~~</div>`
  },

  {
    id: 60,
    title: "Le Futur Proche — Aller + Infinitif",
    diff: "A1", topic: "Tenses", source: "Inter",
    preview: "Formation (aller présent + infinitif), immediate/planned future, negation, expressions de temps.",
    content: `
<h3>Formation — aller (présent) + infinitif</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Futur proche</th><th>Exemple</th></tr>
  <tr><td>Je</td><td class="form-cell">vais + inf.</td><td class="fr-cell">Je vais dîner au restaurant.</td></tr>
  <tr><td>Tu</td><td class="form-cell">vas + inf.</td><td class="fr-cell">Tu vas rester chez toi ?</td></tr>
  <tr><td>Il/Elle/On</td><td class="form-cell">va + inf.</td><td class="fr-cell">Il va aller au cinéma.</td></tr>
  <tr><td>Nous</td><td class="form-cell">allons + inf.</td><td class="fr-cell">Nous allons visiter une expo.</td></tr>
  <tr><td>Vous</td><td class="form-cell">allez + inf.</td><td class="fr-cell">Vous allez partir en week-end ?</td></tr>
  <tr><td>Ils/Elles</td><td class="form-cell">vont + inf.</td><td class="fr-cell">Ils vont finir leur travail.</td></tr>
</table>

<h3>Utilisation</h3>
<p><strong>Événement immédiat</strong> (sans précision de temps) :</p>
<div class="example-box"><div class="fr">Vite : le train <strong>va partir</strong> ! / Regarde : il <strong>va pleuvoir</strong> ! / Attention : tu <strong>vas tomber</strong> !</div></div>
<p><strong>Futur planifié</strong> (avec précision de temps) :</p>
<div class="example-box"><div class="fr">Je <strong>vais partir</strong> en septembre. / Je <strong>vais rester</strong> six ou sept ans en France.</div></div>
<div class="warning-box"><strong>⚠ Futur proche d'ALLER :</strong> on utilise deux fois le verbe « aller » :<br><em>Je <strong>vais aller</strong> en Grèce. / Nous <strong>allons aller</strong> en Espagne.</em></div>

<h3>Expressions de temps</h3>
<table class="grammar-table">
  <tr><th>Présent</th><th>Futur</th></tr>
  <tr><td class="fr-cell">Aujourd'hui · Cette semaine · Ce mois-ci · Cette année</td><td class="fr-cell">Demain · La semaine prochaine · Le mois prochain · L'année prochaine</td></tr>
</table>

<h3>La négation au futur proche</h3>
<p>NE…PAS entoure le verbe <strong>aller</strong> (pas l'infinitif) :</p>
<div class="example-box"><div class="fr">Je <strong>ne vais pas</strong> travailler demain. / Il <strong>ne va pas</strong> pleuvoir.<br>Nous <strong>n'allons pas</strong> sortir ce soir.</div></div>

<h3>Place des pronoms avec le futur proche</h3>
<p>Les pronoms compléments se placent devant l'<strong>infinitif</strong> :</p>
<div class="example-box"><div class="fr">Je vais <strong>le</strong> faire. / Je ne vais pas <strong>le</strong> faire.<br>Tu vas <strong>lui</strong> parler ? / Vous allez <strong>y</strong> aller ?<br>Je vais <strong>m'</strong>habiller. / Ils vont <strong>se</strong> coucher.</div></div>

<h3>Futur proche vs Futur simple — quand utiliser lequel ?</h3>
<table class="grammar-table">
  <tr><th>Futur proche (aller + inf.)</th><th>Futur simple</th></tr>
  <tr><td class="fr-cell">Action imminente, prévue, décidée</td><td class="fr-cell">Prédiction, projection, promesse</td></tr>
  <tr><td class="fr-cell">Lié au présent du locuteur</td><td class="fr-cell">Plus distant dans le temps</td></tr>
  <tr><td class="fr-cell">Je <strong>vais partir</strong> dans 5 min.</td><td class="fr-cell">Un jour, je <strong>partirai</strong> loin.</td></tr>
  <tr><td class="fr-cell">Il <strong>va pleuvoir</strong>. (nuages visibles)</td><td class="fr-cell">Demain il <strong>pleuvra</strong>. (météo)</td></tr>
</table>
<div class="tip-box"><strong>💡 À l'oral :</strong> les Français utilisent beaucoup plus le futur proche que le futur simple dans la conversation quotidienne.</div>`
  },

  {
    id: 61,
    title: "Le Temps (3) — Il y a, Dans, Depuis, Chronologie",
    diff: "B1", topic: "Prepositions", source: "Inter",
    preview: "Il y a (past moment), dans (future moment), depuis (ongoing), pour/pendant/en; chronology tables.",
    content: `
<h3>L'ORIGINE et LA DURÉE</h3>
<table class="grammar-table">
  <tr><th>Expression</th><th>Sens</th><th>Exemple</th></tr>
  <tr><td class="form-cell">il y a + durée</td><td>moment du passé</td><td class="fr-cell">Je suis arrivé <strong>il y a</strong> six mois. (= 6 mois avant maintenant)</td></tr>
  <tr><td class="form-cell">dans + durée</td><td>moment du futur</td><td class="fr-cell">Je partirai <strong>dans</strong> deux ans. (= 2 ans après maintenant)</td></tr>
  <tr><td class="form-cell">depuis + date/durée</td><td>durée qui continue jusqu'au présent</td><td class="fr-cell">J'étudie le français <strong>depuis</strong> trois ans.</td></tr>
  <tr><td class="form-cell">pour + durée</td><td>durée prévue</td><td class="fr-cell">Je suis à Paris <strong>pour</strong> deux ans.</td></tr>
  <tr><td class="form-cell">pendant + durée</td><td>durée finie (début et fin précise)</td><td class="fr-cell">Il a plu <strong>pendant</strong> huit jours.</td></tr>
  <tr><td class="form-cell">en + durée</td><td>quantité de temps pour faire qch.</td><td class="fr-cell">Je fais le ménage <strong>en</strong> dix minutes.</td></tr>
</table>
<div class="warning-box"><strong>⚠ Distinguer EN et DANS :</strong><br>
<em>On doit finir <strong>en</strong> trois jours.</em> = temps de réalisation (il faut 3 jours)<br>
<em>On doit finir <strong>dans</strong> trois jours.</em> = date future (dans 3 jours à partir d'aujourd'hui)</div>

<h3>LA CHRONOLOGIE — par rapport au présent</h3>
<table class="grammar-table">
  <tr><th>Avant-hier</th><th>Hier</th><th>Aujourd'hui</th><th>Demain</th><th>Après-demain</th></tr>
  <tr><td class="fr-cell">La semaine d'avant</td><td class="fr-cell">La semaine dernière</td><td class="fr-cell">Cette semaine</td><td class="fr-cell">La semaine prochaine</td><td class="fr-cell">La semaine d'après</td></tr>
  <tr><td class="fr-cell">Le mois d'avant</td><td class="fr-cell">Le mois dernier</td><td class="fr-cell">Ce mois-ci</td><td class="fr-cell">Le mois prochain</td><td class="fr-cell">Le mois d'après</td></tr>
  <tr><td class="fr-cell">L'année d'avant</td><td class="fr-cell">L'année dernière</td><td class="fr-cell">Cette année</td><td class="fr-cell">L'année prochaine</td><td class="fr-cell">L'année d'après</td></tr>
</table>

<h3>Par rapport au PASSÉ ou au FUTUR (discours indirect)</h3>
<table class="grammar-table">
  <tr><th>En discours direct</th><th>En discours indirect (passé)</th></tr>
  <tr><td class="fr-cell">aujourd'hui / ce matin</td><td class="fr-cell">ce jour-là / ce matin-là</td></tr>
  <tr><td class="fr-cell">hier / la veille</td><td class="fr-cell">la veille / le matin d'avant</td></tr>
  <tr><td class="fr-cell">demain / le lendemain</td><td class="fr-cell">le lendemain / le matin d'après</td></tr>
  <tr><td class="fr-cell">la semaine prochaine</td><td class="fr-cell">la semaine suivante / d'après</td></tr>
</table>`
  },

  {
    id: 62,
    title: "Venir de / Être en Train de / Être sur le Point de",
    diff: "B1", topic: "Verbs", source: "Inter",
    preview: "Recent past (venir de), ongoing action (être en train de), imminent action (être sur le point de).",
    content: `
<h3>VENIR DE + infinitif — passé récent</h3>
<p>Exprime qu'une action vient de se terminer (il y a très peu de temps) :</p>
<div class="example-box"><div class="fr">– Paul est là ? – Non, il <strong>vient de</strong> sortir. (= il est sorti il n'y a pas longtemps)</div></div>
<p>Pour insister : <em>Jean vient <strong>juste</strong> de partir.</em></p>
<div class="warning-box"><strong>⚠ Venir de</strong> s'utilise sans précision de temps :<br>
Dites : <em>Jean <strong>vient de</strong> sortir.</em> — Ne dites pas : <em>~~Jean vient de sortir il y a 5 min.~~</em></div>

<h3>ÊTRE EN TRAIN DE + infinitif — action en cours</h3>
<p>Exprime une action <strong>en cours de réalisation</strong> (= en ce moment) :</p>
<div class="example-box"><div class="fr">Je suis <strong>en train de</strong> dîner. (= en ce moment, je dîne)<br>– Ne le dérangez pas ! Il est <strong>en train de</strong> travailler.</div></div>
<p>On peut aussi l'utiliser au passé :</p>
<div class="example-box"><div class="fr">J'<strong>étais en train de</strong> dîner quand le téléphone a sonné.</div></div>

<h3>ÊTRE SUR LE POINT DE + infinitif — action imminente</h3>
<p>Exprime qu'une action va se produire <strong>très bientôt</strong> :</p>
<div class="example-box"><div class="fr">Nous sommes <strong>sur le point d'</strong>arriver en France. (= nous allons arriver bientôt)<br>= nous allons atterrir bientôt.</div></div>

<h3>Résumé des trois constructions</h3>
<div class="example-box"><div class="fr">Nous <strong>venons de</strong> quitter l'Angleterre. (passé récent)<br>Nous <strong>sommes en train de</strong> survoler la Manche. (en cours)<br>Nous <strong>sommes sur le point d'</strong>arriver en France. (imminence)</div></div>

<h3>Tableau chronologique complet des périphrases verbales</h3>
<table class="grammar-table">
  <tr><th>Moment</th><th>Périchraste</th><th>Exemple</th></tr>
  <tr><td>Passé récent</td><td class="form-cell">venir de + inf.</td><td class="fr-cell">Je <strong>viens de</strong> manger.</td></tr>
  <tr><td>Action en cours</td><td class="form-cell">être en train de + inf.</td><td class="fr-cell">Je suis <strong>en train de</strong> manger.</td></tr>
  <tr><td>Futur imminent</td><td class="form-cell">être sur le point de + inf.</td><td class="fr-cell">Je suis <strong>sur le point de</strong> partir.</td></tr>
  <tr><td>Futur proche</td><td class="form-cell">aller + inf.</td><td class="fr-cell">Je <strong>vais</strong> partir.</td></tr>
</table>

<h3>Venir de — au présent et à l'imparfait seulement</h3>
<div class="example-box"><div class="fr"><strong>Présent :</strong> Je <strong>viens de</strong> finir. (= I just finished.)<br><strong>Imparfait :</strong> Je <strong>venais de</strong> finir quand il est arrivé. (= I had just finished when…)<br>⚠ Pas d'autre temps : on ne dit pas ~~j'ai venu de~~ ni ~~je viendrai de~~</div></div>

<h3>Négation avec ces constructions</h3>
<div class="example-box"><div class="fr">Je <strong>ne viens pas de</strong> manger. (rare mais possible)<br>Je <strong>ne suis pas en train de</strong> dormir !<br>Il <strong>n'est pas sur le point de</strong> partir.</div></div>`
  },

  {
    id: 63,
    title: "Le Futur Antérieur",
    diff: "B2", topic: "Tenses", source: "Inter",
    preview: "Future perfect formation; action preceding another future action; résumé of all indicative tenses.",
    content: `
<h3>Utilisation</h3>
<p>Le futur antérieur indique qu'un événement <strong>précède</strong> un autre événement dans l'avenir :</p>
<div class="example-box"><div class="fr">Je vais dîner et je vais sortir.<br>Quand j'<strong>aurai dîné</strong>, je sortirai.</div><div class="en">When I have eaten dinner, I will go out. (future perfect precedes simple future)</div></div>
<div class="example-box"><div class="fr">Je me marierai quand j'<strong>aurai terminé</strong> mes études.</div></div>

<h3>Formation — être ou avoir au futur simple + participe passé</h3>
<table class="grammar-table">
  <tr><th>Avec AVOIR</th><th>Avec ÊTRE</th></tr>
  <tr><td class="form-cell">j'aurai dîné · nous aurons fini</td><td class="form-cell">il sera parti · je me serai couché(e)</td></tr>
</table>

<h3>Résumé de tous les temps de l'indicatif</h3>
<table class="grammar-table">
  <tr><th>Passé</th><th>Présent</th><th>Futur</th></tr>
  <tr><td class="fr-cell"><strong>Imparfait :</strong> J'habitais à Rome.</td><td class="fr-cell"><strong>Présent :</strong> J'habite à Paris.</td><td class="fr-cell"><strong>Futur simple :</strong> J'habiterai à Tokyo.</td></tr>
  <tr><td class="fr-cell"><strong>Passé composé :</strong> J'ai déménagé il y a six mois.</td><td class="fr-cell"><strong>Futur proche :</strong> Je vais déménager dans six mois.</td><td class="fr-cell"></td></tr>
  <tr><td class="fr-cell"><strong>Plus-que-parfait :</strong> J'avais fini mes études (quand j'ai déménagé).</td><td class="fr-cell"></td><td class="fr-cell"><strong>Futur antérieur :</strong> Tu me rejoindras quand j'aurai déménagé.</td></tr>
</table>
<div class="tip-box"><strong>💡 Règle générale :</strong><br>
Les temps simples expriment des <strong>habitudes et des situations</strong> (statiques).<br>
Les temps composés expriment des <strong>changements et des ruptures</strong> (dynamiques).</div>

<h3>Conjugaison complète du futur antérieur</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Avec AVOIR (finir)</th><th>Avec ÊTRE (partir)</th></tr>
  <tr><td>j'</td><td class="form-cell">aurai fini</td><td class="form-cell">serai parti(e)</td></tr>
  <tr><td>tu</td><td class="form-cell">auras fini</td><td class="form-cell">seras parti(e)</td></tr>
  <tr><td>il/elle</td><td class="form-cell">aura fini</td><td class="form-cell">sera parti(e)</td></tr>
  <tr><td>nous</td><td class="form-cell">aurons fini</td><td class="form-cell">serons parti(e)s</td></tr>
  <tr><td>vous</td><td class="form-cell">aurez fini</td><td class="form-cell">serez parti(e)(s)</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">auront fini</td><td class="form-cell">seront parti(e)s</td></tr>
</table>

<h3>Conjonctions + futur antérieur</h3>
<div class="example-box"><div class="fr"><strong>Quand</strong> tu <strong>auras fini</strong>, tu pourras sortir.<br><strong>Dès que</strong> j'<strong>aurai reçu</strong> la réponse, je t'appelle.<br><strong>Aussitôt que</strong> nous <strong>serons arrivés</strong>, nous dînerons.<br><strong>Tant que</strong> tu n'<strong>auras pas compris</strong>, je réexpliquerai.</div></div>

<h3>Futur antérieur — supposition sur le passé</h3>
<div class="example-box"><div class="fr">Il n'est pas là. Il <strong>aura oublié</strong>. (= He must have forgotten.)<br>Elle ne répond pas. Elle <strong>sera partie</strong> en vacances.<br>Ils ne sont pas venus. Ils <strong>n'auront pas reçu</strong> l'invitation.</div></div>

<h3>Récapitulatif de tous les temps composés</h3>
<table class="grammar-table">
  <tr><th>Temps composé</th><th>Formation</th><th>Exemple</th></tr>
  <tr><td class="form-cell">Passé composé</td><td>présent de avoir/être + p.p.</td><td class="fr-cell">J'<strong>ai mangé</strong>. / Je <strong>suis parti</strong>.</td></tr>
  <tr><td class="form-cell">Plus-que-parfait</td><td>imparfait de avoir/être + p.p.</td><td class="fr-cell">J'<strong>avais mangé</strong>. / J'<strong>étais parti</strong>.</td></tr>
  <tr><td class="form-cell">Futur antérieur</td><td>futur de avoir/être + p.p.</td><td class="fr-cell">J'<strong>aurai mangé</strong>. / Je <strong>serai parti</strong>.</td></tr>
  <tr><td class="form-cell">Conditionnel passé</td><td>conditionnel de avoir/être + p.p.</td><td class="fr-cell">J'<strong>aurais mangé</strong>. / Je <strong>serais parti</strong>.</td></tr>
  <tr><td class="form-cell">Subjonctif passé</td><td>subjonctif de avoir/être + p.p.</td><td class="fr-cell">que j'<strong>aie mangé</strong>. / que je <strong>sois parti</strong>.</td></tr>
</table>`
  },

  // ══════════════════════════════════════════════════════
  // NIVEAU A TOPICS — ALREADY ESTABLISHED, EXPANDED
  // ══════════════════════════════════════════════════════
  {
    id: 27,
    title: "Definite Articles: le, la, l', les",
    diff: "A1", topic: "Nouns & Articles", source: "A",
    preview: "Use definite articles for specific nouns, categories, abstract concepts, and contractions au/du.",
    content: `
<h3>Forms</h3>
<table class="grammar-table">
  <tr><th>Gender / Number</th><th>Article</th><th>Example</th></tr>
  <tr><td>Masculine singular</td><td class="form-cell">le</td><td class="fr-cell">le livre</td></tr>
  <tr><td>Feminine singular</td><td class="form-cell">la</td><td class="fr-cell">la maison</td></tr>
  <tr><td>Before vowel/silent-h</td><td class="form-cell">l'</td><td class="fr-cell">l'ami, l'heure</td></tr>
  <tr><td>All plurals</td><td class="form-cell">les</td><td class="fr-cell">les enfants</td></tr>
</table>
<h3>Key uses</h3>
<p><strong>1. Specific known noun:</strong></p>
<div class="example-box"><div class="fr">Ferme la fenêtre, s'il te plaît.</div></div>
<p><strong>2. General categories / abstract ideas:</strong></p>
<div class="example-box"><div class="fr">J'aime le café. / La liberté est précieuse.</div><div class="en">I love coffee (in general). / Freedom is precious.</div></div>
<h3>Contractions with à and de</h3>
<table class="grammar-table">
  <tr><th>Preposition + Article</th><th>Contracted form</th><th>Example</th></tr>
  <tr><td>à + le</td><td class="form-cell">au</td><td class="fr-cell">Je vais au marché.</td></tr>
  <tr><td>à + les</td><td class="form-cell">aux</td><td class="fr-cell">Il parle aux étudiants.</td></tr>
  <tr><td>de + le</td><td class="form-cell">du</td><td class="fr-cell">Le livre du professeur.</td></tr>
  <tr><td>de + les</td><td class="form-cell">des</td><td class="fr-cell">Les photos des enfants.</td></tr>
</table>
<div class="tip-box"><strong>💡 Tip:</strong> à + la, à + l', de + la, de + l' do NOT contract: <em>Il parle à la fille. / Le livre de l'étudiant.</em></div>
<h3>When to use definite articles (vs English)</h3>
<p>French uses definite articles much more than English:</p>
<div class="example-box"><div class="fr"><strong>With likes/dislikes:</strong> J'aime <strong>le</strong> chocolat. (I like chocolate — no article in English)<br><strong>With generalizations:</strong> <strong>Les</strong> enfants adorent jouer. (Children love playing)<br><strong>With countries:</strong> <strong>La</strong> France est belle. (France is beautiful)<br><strong>With languages:</strong> Je parle <strong>le</strong> français. (I speak French)<br><strong>With days (habitual):</strong> <strong>Le</strong> lundi, je travaille. (On Mondays, I work)<br><strong>With body parts:</strong> J'ai mal à <strong>la</strong> tête. (My head hurts)</div></div>`
  },

  {
    id: 28,
    title: "Indefinite & Partitive Articles",
    diff: "A1", topic: "Nouns & Articles", source: "A",
    preview: "Un/une/des for unspecified nouns; du/de la/de l' for uncountable quantities.",
    content: `
<h3>Indefinite articles: un, une, des</h3>
<table class="grammar-table">
  <tr><th>Type</th><th>Article</th><th>Example</th></tr>
  <tr><td>Masculine singular</td><td class="form-cell">un</td><td class="fr-cell">un homme (a man)</td></tr>
  <tr><td>Feminine singular</td><td class="form-cell">une</td><td class="fr-cell">une femme (a woman)</td></tr>
  <tr><td>Plural (all genders)</td><td class="form-cell">des</td><td class="fr-cell">des amis (some friends)</td></tr>
</table>
<h3>Partitive articles: du, de la, de l', des</h3>
<table class="grammar-table">
  <tr><th>Type</th><th>Article</th><th>Example</th></tr>
  <tr><td>Masculine</td><td class="form-cell">du (= de + le)</td><td class="fr-cell">du pain, du vin</td></tr>
  <tr><td>Feminine</td><td class="form-cell">de la</td><td class="fr-cell">de la soupe, de la patience</td></tr>
  <tr><td>Before vowel/h</td><td class="form-cell">de l'</td><td class="fr-cell">de l'eau, de l'argent</td></tr>
</table>
<h3>After negation → de (d')</h3>
<div class="warning-box"><strong>⚠ Key rule:</strong> After ne…pas, un/une/des/du/de la → <strong>de (d')</strong><br>
<em>J'ai un frère. → Je n'ai pas <strong>de</strong> frère.</em><br>
<em>Je mange du pain. → Je ne mange pas <strong>de</strong> pain.</em></div>
<div class="tip-box"><strong>💡 Exception avec être:</strong> <em>Ce n'est pas un problème.</em> (article stays after être)</div>

<h3>Summary: which article when?</h3>
<table class="grammar-table">
  <tr><th>Situation</th><th>Article</th><th>Example</th></tr>
  <tr><td>Specific item</td><td class="form-cell">le/la/les</td><td class="fr-cell">Donne-moi <strong>le</strong> livre. (the specific book)</td></tr>
  <tr><td>Countable, unknown</td><td class="form-cell">un/une/des</td><td class="fr-cell">J'ai <strong>un</strong> chat. (a cat)</td></tr>
  <tr><td>Uncountable, some</td><td class="form-cell">du/de la/de l'</td><td class="fr-cell">Je veux <strong>du</strong> café. (some coffee)</td></tr>
  <tr><td>After negation</td><td class="form-cell">de/d'</td><td class="fr-cell">Je n'ai pas <strong>de</strong> café.</td></tr>
  <tr><td>After quantity expression</td><td class="form-cell">de/d'</td><td class="fr-cell">Beaucoup <strong>de</strong> café.</td></tr>
  <tr><td>Likes/dislikes (general)</td><td class="form-cell">le/la/les</td><td class="fr-cell">J'aime <strong>le</strong> café.</td></tr>
</table>`
  },

  {
    id: 29,
    title: "Adjective Agreement & Position",
    diff: "A1", topic: "Adjectives", source: "A",
    preview: "Adjectives agree in gender and number; BANGS adjectives go before the noun.",
    content: `
<h3>Position of Adjectives</h3>
<p>Most adjectives go <strong>after</strong> the noun in French:</p>
<div class="example-box"><div class="fr">une voiture rouge / un film intéressant</div><div class="en">a red car / an interesting film</div></div>
<p><strong>BANGS adjectives</strong> go <strong>before</strong> the noun — Beauty, Age, Number, Goodness, Size:</p>
<div class="example-box"><div class="fr">un beau garçon / une vieille maison / un grand problème / un bon repas</div></div>
<div class="tip-box"><strong>💡 BANGS list:</strong> beau, joli, jeune, vieux, nouveau, ancien, petit, grand, gros, bon, mauvais, meilleur, premier, dernier, autre, même, cher.</div>
<div class="warning-box"><strong>⚠ Position changes meaning:</strong><br>
<em>un ancien professeur</em> (a former teacher) vs <em>un bâtiment ancien</em> (an old/ancient building)<br>
<em>un grand homme</em> (a great man) vs <em>un homme grand</em> (a tall man)</div>

<h3>Complete irregular feminine forms</h3>
<table class="grammar-table">
  <tr><th>Masc.</th><th>Fem.</th><th>Masc.</th><th>Fem.</th></tr>
  <tr><td class="fr-cell">beau</td><td class="form-cell">belle</td><td class="fr-cell">nouveau</td><td class="form-cell">nouvelle</td></tr>
  <tr><td class="fr-cell">vieux</td><td class="form-cell">vieille</td><td class="fr-cell">blanc</td><td class="form-cell">blanche</td></tr>
  <tr><td class="fr-cell">long</td><td class="form-cell">longue</td><td class="fr-cell">doux</td><td class="form-cell">douce</td></tr>
  <tr><td class="fr-cell">faux</td><td class="form-cell">fausse</td><td class="fr-cell">roux</td><td class="form-cell">rousse</td></tr>
  <tr><td class="fr-cell">frais</td><td class="form-cell">fraîche</td><td class="fr-cell">sec</td><td class="form-cell">sèche</td></tr>
  <tr><td class="fr-cell">fou</td><td class="form-cell">folle</td><td class="fr-cell">gros</td><td class="form-cell">grosse</td></tr>
  <tr><td class="fr-cell">favori</td><td class="form-cell">favorite</td><td class="fr-cell">public</td><td class="form-cell">publique</td></tr>
  <tr><td class="fr-cell">complet</td><td class="form-cell">complète</td><td class="fr-cell">discret</td><td class="form-cell">discrète</td></tr>
</table>`
  },

  {
    id: 30,
    title: "Comparatives & Superlatives",
    diff: "A2", topic: "Adjectives", source: "A",
    preview: "Plus/moins/aussi…que for comparisons; le/la plus/moins for superlatives; meilleur/mieux.",
    content: `
<h3>Comparatives</h3>
<table class="grammar-table">
  <tr><th>Type</th><th>Structure</th><th>Example</th></tr>
  <tr><td>Superiority</td><td class="form-cell">plus + adj + que</td><td class="fr-cell">Marie est plus grande que Paul.</td></tr>
  <tr><td>Inferiority</td><td class="form-cell">moins + adj + que</td><td class="fr-cell">Ce film est moins long que l'autre.</td></tr>
  <tr><td>Equality</td><td class="form-cell">aussi + adj + que</td><td class="fr-cell">Tu es aussi intelligent que lui.</td></tr>
  <tr><td>Noun comparison</td><td class="form-cell">plus de + nom + que</td><td class="fr-cell">Il a plus de patience que moi.</td></tr>
</table>
<h3>Superlatives</h3>
<div class="example-box"><div class="fr">C'est la plus belle ville du monde. / C'est le moins cher de tous.</div></div>
<div class="warning-box"><strong>⚠ After superlative, "in" = de:</strong> <em>le meilleur restaurant <strong>de</strong> la ville</em></div>
<h3>Irregular forms</h3>
<table class="grammar-table">
  <tr><th>Adjective</th><th>Comparative</th><th>Superlative</th></tr>
  <tr><td class="fr-cell">bon(ne)</td><td class="fr-cell">meilleur(e) que</td><td class="fr-cell">le/la meilleur(e)</td></tr>
  <tr><td class="fr-cell">bien (adverbe)</td><td class="fr-cell">mieux que</td><td class="fr-cell">le mieux</td></tr>
  <tr><td class="fr-cell">mauvais(e)</td><td class="fr-cell">pire que / plus mauvais</td><td class="fr-cell">le pire</td></tr>
  <tr><td class="fr-cell">petit(e)</td><td class="fr-cell">moindre / plus petit</td><td class="fr-cell">le/la moindre</td></tr>
</table>

<h3>Comparing quantities</h3>
<table class="grammar-table">
  <tr><th>Structure</th><th>Meaning</th><th>Example</th></tr>
  <tr><td class="form-cell">plus de + noun + que</td><td>more…than</td><td class="fr-cell">Il a <strong>plus de</strong> patience <strong>que</strong> moi.</td></tr>
  <tr><td class="form-cell">moins de + noun + que</td><td>less/fewer…than</td><td class="fr-cell">Il y a <strong>moins de</strong> monde <strong>que</strong> hier.</td></tr>
  <tr><td class="form-cell">autant de + noun + que</td><td>as much/many…as</td><td class="fr-cell">J'ai <strong>autant de</strong> travail <strong>que</strong> toi.</td></tr>
</table>

<h3>Comparing actions (verbs)</h3>
<div class="example-box"><div class="fr">Il travaille <strong>plus que</strong> moi. / Elle dort <strong>moins que</strong> lui.<br>Il mange <strong>autant que</strong> trois personnes !</div></div>

<h3>Common comparative expressions</h3>
<div class="example-box"><div class="fr">de plus en plus (more and more) · de moins en moins (less and less)<br>de mieux en mieux (better and better) · de pire en pire (worse and worse)<br>plus…plus (the more…the more) : <strong>Plus</strong> on étudie, <strong>plus</strong> on comprend.</div></div>`
  },

  {
    id: 31,
    title: "Present Tense — All Verb Groups",
    diff: "A1", topic: "Verbs", source: "A",
    preview: "Complete conjugation of -er/-ir/-re verbs plus all essential irregular verbs.",
    content: `
<h3>Essential Irregular Verbs</h3>
<table class="grammar-table">
  <tr><th></th><th>être</th><th>avoir</th><th>aller</th><th>faire</th><th>venir</th><th>prendre</th></tr>
  <tr><td>je/j'</td><td class="form-cell">suis</td><td class="form-cell">ai</td><td class="form-cell">vais</td><td class="form-cell">fais</td><td class="form-cell">viens</td><td class="form-cell">prends</td></tr>
  <tr><td>tu</td><td class="form-cell">es</td><td class="form-cell">as</td><td class="form-cell">vas</td><td class="form-cell">fais</td><td class="form-cell">viens</td><td class="form-cell">prends</td></tr>
  <tr><td>il/elle</td><td class="form-cell">est</td><td class="form-cell">a</td><td class="form-cell">va</td><td class="form-cell">fait</td><td class="form-cell">vient</td><td class="form-cell">prend</td></tr>
  <tr><td>nous</td><td class="form-cell">sommes</td><td class="form-cell">avons</td><td class="form-cell">allons</td><td class="form-cell">faisons</td><td class="form-cell">venons</td><td class="form-cell">prenons</td></tr>
  <tr><td>vous</td><td class="form-cell">êtes</td><td class="form-cell">avez</td><td class="form-cell">allez</td><td class="form-cell">faites</td><td class="form-cell">venez</td><td class="form-cell">prenez</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">sont</td><td class="form-cell">ont</td><td class="form-cell">vont</td><td class="form-cell">font</td><td class="form-cell">viennent</td><td class="form-cell">prennent</td></tr>
</table>
<div class="tip-box"><strong>💡 -ir type finir:</strong> remove -ir, add: -is, -is, -it, -issons, -issez, -issent<br><strong>-re type vendre:</strong> remove -re, add: -s, -s, -, -ons, -ez, -ent</div>

<h3>More essential irregular verbs</h3>
<table class="grammar-table">
  <tr><th></th><th>dire</th><th>lire</th><th>écrire</th><th>mettre</th><th>boire</th><th>voir</th></tr>
  <tr><td>je</td><td class="form-cell">dis</td><td class="form-cell">lis</td><td class="form-cell">écris</td><td class="form-cell">mets</td><td class="form-cell">bois</td><td class="form-cell">vois</td></tr>
  <tr><td>tu</td><td class="form-cell">dis</td><td class="form-cell">lis</td><td class="form-cell">écris</td><td class="form-cell">mets</td><td class="form-cell">bois</td><td class="form-cell">vois</td></tr>
  <tr><td>il</td><td class="form-cell">dit</td><td class="form-cell">lit</td><td class="form-cell">écrit</td><td class="form-cell">met</td><td class="form-cell">boit</td><td class="form-cell">voit</td></tr>
  <tr><td>nous</td><td class="form-cell">disons</td><td class="form-cell">lisons</td><td class="form-cell">écrivons</td><td class="form-cell">mettons</td><td class="form-cell">buvons</td><td class="form-cell">voyons</td></tr>
  <tr><td>vous</td><td class="form-cell">dites</td><td class="form-cell">lisez</td><td class="form-cell">écrivez</td><td class="form-cell">mettez</td><td class="form-cell">buvez</td><td class="form-cell">voyez</td></tr>
  <tr><td>ils</td><td class="form-cell">disent</td><td class="form-cell">lisent</td><td class="form-cell">écrivent</td><td class="form-cell">mettent</td><td class="form-cell">boivent</td><td class="form-cell">voient</td></tr>
</table>
<table class="grammar-table">
  <tr><th></th><th>pouvoir</th><th>vouloir</th><th>devoir</th><th>savoir</th><th>connaître</th><th>croire</th></tr>
  <tr><td>je</td><td class="form-cell">peux</td><td class="form-cell">veux</td><td class="form-cell">dois</td><td class="form-cell">sais</td><td class="form-cell">connais</td><td class="form-cell">crois</td></tr>
  <tr><td>tu</td><td class="form-cell">peux</td><td class="form-cell">veux</td><td class="form-cell">dois</td><td class="form-cell">sais</td><td class="form-cell">connais</td><td class="form-cell">crois</td></tr>
  <tr><td>il</td><td class="form-cell">peut</td><td class="form-cell">veut</td><td class="form-cell">doit</td><td class="form-cell">sait</td><td class="form-cell">connaît</td><td class="form-cell">croit</td></tr>
  <tr><td>nous</td><td class="form-cell">pouvons</td><td class="form-cell">voulons</td><td class="form-cell">devons</td><td class="form-cell">savons</td><td class="form-cell">connaissons</td><td class="form-cell">croyons</td></tr>
  <tr><td>vous</td><td class="form-cell">pouvez</td><td class="form-cell">voulez</td><td class="form-cell">devez</td><td class="form-cell">savez</td><td class="form-cell">connaissez</td><td class="form-cell">croyez</td></tr>
  <tr><td>ils</td><td class="form-cell">peuvent</td><td class="form-cell">veulent</td><td class="form-cell">doivent</td><td class="form-cell">savent</td><td class="form-cell">connaissent</td><td class="form-cell">croient</td></tr>
</table>`
  },

  {
    id: 32,
    title: "Passé Composé avec AVOIR",
    diff: "A2", topic: "Tenses", source: "A",
    preview: "Formation with avoir + past participle; irregular participles; agreement with preceding COD.",
    content: `
<h3>Formation : avoir (présent) + participe passé</h3>
<table class="grammar-table">
  <tr><th>Infinitif</th><th>Participe passé</th><th>Exemple</th></tr>
  <tr><td>-er verbs</td><td class="form-cell">-é</td><td class="fr-cell">parler → j'ai parlé</td></tr>
  <tr><td>-ir verbs</td><td class="form-cell">-i</td><td class="fr-cell">finir → j'ai fini</td></tr>
  <tr><td>-re verbs</td><td class="form-cell">-u</td><td class="fr-cell">vendre → j'ai vendu</td></tr>
</table>
<h3>Participes irréguliers essentiels</h3>
<table class="grammar-table">
  <tr><th>Infinitif</th><th>Participe</th><th>Infinitif</th><th>Participe</th></tr>
  <tr><td class="fr-cell">être</td><td class="form-cell">été</td><td class="fr-cell">avoir</td><td class="form-cell">eu</td></tr>
  <tr><td class="fr-cell">faire</td><td class="form-cell">fait</td><td class="fr-cell">prendre</td><td class="form-cell">pris</td></tr>
  <tr><td class="fr-cell">mettre</td><td class="form-cell">mis</td><td class="fr-cell">voir</td><td class="form-cell">vu</td></tr>
  <tr><td class="fr-cell">écrire</td><td class="form-cell">écrit</td><td class="fr-cell">lire</td><td class="form-cell">lu</td></tr>
  <tr><td class="fr-cell">dire</td><td class="form-cell">dit</td><td class="fr-cell">vouloir</td><td class="form-cell">voulu</td></tr>
  <tr><td class="fr-cell">pouvoir</td><td class="form-cell">pu</td><td class="fr-cell">venir</td><td class="form-cell">venu</td></tr>
  <tr><td class="fr-cell">boire</td><td class="form-cell">bu</td><td class="fr-cell">ouvrir</td><td class="form-cell">ouvert</td></tr>
</table>
<div class="tip-box"><strong>💡 Accord avec COD antéposé :</strong> Le participe s'accorde si le COD est placé AVANT le verbe :<br><em>Les photos <strong>que</strong> j'ai prises. (prises accorde avec « photos »)</em></div>

<h3>Complete conjugation example</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>manger</th><th>finir</th><th>faire (irrég.)</th></tr>
  <tr><td>j'</td><td class="form-cell">ai mangé</td><td class="form-cell">ai fini</td><td class="form-cell">ai fait</td></tr>
  <tr><td>tu</td><td class="form-cell">as mangé</td><td class="form-cell">as fini</td><td class="form-cell">as fait</td></tr>
  <tr><td>il/elle</td><td class="form-cell">a mangé</td><td class="form-cell">a fini</td><td class="form-cell">a fait</td></tr>
  <tr><td>nous</td><td class="form-cell">avons mangé</td><td class="form-cell">avons fini</td><td class="form-cell">avons fait</td></tr>
  <tr><td>vous</td><td class="form-cell">avez mangé</td><td class="form-cell">avez fini</td><td class="form-cell">avez fait</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">ont mangé</td><td class="form-cell">ont fini</td><td class="form-cell">ont fait</td></tr>
</table>

<h3>Negation at passé composé</h3>
<div class="example-box"><div class="fr">Je <strong>n'</strong>ai <strong>pas</strong> mangé. / Il <strong>n'</strong>a <strong>rien</strong> dit. / Nous <strong>n'</strong>avons <strong>jamais</strong> vu ça.<br>Elle <strong>n'</strong>a <strong>plus</strong> travaillé. / Je n'ai vu <strong>personne</strong>. (personne after p.p.)</div></div>

<h3>Time markers for passé composé</h3>
<div class="example-box"><div class="fr">hier · la semaine dernière · le mois dernier · l'année dernière<br>il y a deux jours · ce matin · tout à coup · soudain · un jour<br>en 2020 · pendant trois heures · de 9h à 11h</div></div>`
  },

  {
    id: 33,
    title: "Negation — Complete Guide",
    diff: "A1", topic: "Negation", source: "A",
    preview: "Ne...pas, ne...plus, ne...jamais, ne...rien, ne...personne, ne...que, ne...ni...ni.",
    content: `
<h3>Basic Negation: ne…pas</h3>
<div class="example-box"><div class="fr">Je parle français. → Je <strong>ne</strong> parle <strong>pas</strong> français. / Il <strong>n'</strong>aime <strong>pas</strong> ça.</div></div>
<h3>All Negative Structures</h3>
<table class="grammar-table">
  <tr><th>Structure</th><th>Meaning</th><th>Example</th></tr>
  <tr><td class="form-cell">ne…plus</td><td>no longer</td><td class="fr-cell">Je ne fume plus.</td></tr>
  <tr><td class="form-cell">ne…jamais</td><td>never</td><td class="fr-cell">Il ne ment jamais.</td></tr>
  <tr><td class="form-cell">ne…rien</td><td>nothing</td><td class="fr-cell">Je ne sais rien.</td></tr>
  <tr><td class="form-cell">ne…personne</td><td>nobody</td><td class="fr-cell">Je ne vois personne.</td></tr>
  <tr><td class="form-cell">ne…que</td><td>only</td><td class="fr-cell">Il ne mange que des légumes.</td></tr>
  <tr><td class="form-cell">ne…aucun(e)</td><td>not a single</td><td class="fr-cell">Je n'ai aucun problème.</td></tr>
  <tr><td class="form-cell">ne…ni…ni</td><td>neither…nor</td><td class="fr-cell">Je n'aime ni le thé ni le café.</td></tr>
</table>
<h3>Position in compound tenses</h3>
<p>ne…pas/plus/jamais/rien wrap around the <strong>auxiliary</strong> :</p>
<div class="example-box"><div class="fr">Je <strong>n'</strong>ai <strong>pas</strong> mangé. / Il <strong>n'</strong>a <strong>jamais</strong> voyagé.</div></div>
<p>ne…personne and ne…que wrap around the whole past participle:</p>
<div class="example-box"><div class="fr">Je n'ai vu <strong>personne</strong>. / Il n'a mangé <strong>que</strong> du pain.</div></div>`
  },

  {
    id: 34,
    title: "Asking Questions",
    diff: "A1", topic: "Questions", source: "A",
    preview: "Three ways to ask yes/no questions; all question words; qui/que as interrogative pronouns.",
    content: `
<h3>Three Ways to Ask Yes/No Questions</h3>
<table class="grammar-table">
  <tr><th>Method</th><th>Example</th><th>Register</th></tr>
  <tr><td>Rising intonation only</td><td class="fr-cell">Tu parles français ?</td><td>Very informal</td></tr>
  <tr><td>Est-ce que…</td><td class="fr-cell">Est-ce que tu parles français ?</td><td>Neutral / everyday</td></tr>
  <tr><td>Inversion (verb-subject)</td><td class="fr-cell">Parles-tu français ?</td><td>Formal / written</td></tr>
</table>
<div class="tip-box"><strong>💡 Inversion + -t- :</strong> With il/elle/on ending in a vowel: <em>A-<strong>t</strong>-il un frère ? / Va-<strong>t</strong>-elle venir ?</em></div>
<h3>Question Words</h3>
<table class="grammar-table">
  <tr><th>French</th><th>English</th><th>Example</th></tr>
  <tr><td class="form-cell">Qui</td><td>Who</td><td class="fr-cell">Qui est là ?</td></tr>
  <tr><td class="form-cell">Que / Quoi</td><td>What</td><td class="fr-cell">Que fais-tu ? / Tu fais quoi ?</td></tr>
  <tr><td class="form-cell">Où</td><td>Where</td><td class="fr-cell">Où habites-tu ?</td></tr>
  <tr><td class="form-cell">Quand</td><td>When</td><td class="fr-cell">Quand est-ce qu'il arrive ?</td></tr>
  <tr><td class="form-cell">Pourquoi</td><td>Why</td><td class="fr-cell">Pourquoi tu ris ?</td></tr>
  <tr><td class="form-cell">Comment</td><td>How</td><td class="fr-cell">Comment ça va ?</td></tr>
  <tr><td class="form-cell">Combien (de)</td><td>How much/many</td><td class="fr-cell">Combien ça coûte ?</td></tr>
  <tr><td class="form-cell">Quel(le)(s)</td><td>Which/What</td><td class="fr-cell">Quel film tu préfères ?</td></tr>
</table>

<h3>Answering questions</h3>
<table class="grammar-table">
  <tr><th>Answer</th><th>Usage</th><th>Example</th></tr>
  <tr><td class="form-cell">Oui</td><td>Yes (to affirmative question)</td><td class="fr-cell">– Tu viens ? – <strong>Oui</strong>.</td></tr>
  <tr><td class="form-cell">Non</td><td>No</td><td class="fr-cell">– Tu viens ? – <strong>Non</strong>.</td></tr>
  <tr><td class="form-cell">Si</td><td>Yes (contradicting a negative)</td><td class="fr-cell">– Tu ne viens pas ? – <strong>Si</strong>, je viens !</td></tr>
  <tr><td class="form-cell">Peut-être</td><td>Maybe</td><td class="fr-cell">– Tu viens ? – <strong>Peut-être</strong>.</td></tr>
</table>
<div class="warning-box"><strong>⚠ Common mistake:</strong> Answering <em>oui</em> to a negative question when you mean <em>si</em>:<br>– Tu n'as pas faim ? – <strong>Si</strong> ! (= Yes, I am hungry!) — Not oui.</div>`
  },

  {
    id: 35,
    title: "Prepositions — À, De, En, Dans, Sur…",
    diff: "A2", topic: "Prepositions", source: "A",
    preview: "Core uses of à/de, en vs dans, countries/cities, depuis/pendant, sur/sous.",
    content: `
<h3>À — at, to, in</h3>
<div class="example-box"><div class="fr">Je suis à Paris. / Je vais à Lyon. / à midi, à 3h / une tasse à thé / penser à</div></div>
<h3>DE — of, from, about</h3>
<div class="example-box"><div class="fr">Je viens de Paris. / Le livre de Marie. / une robe de soie / parler de / beaucoup de</div></div>
<h3>EN vs DANS — both mean "in"</h3>
<table class="grammar-table">
  <tr><th>EN</th><th>DANS</th></tr>
  <tr><td class="fr-cell">en France (country, fem.)</td><td class="fr-cell">dans le jardin (inside a specific place)</td></tr>
  <tr><td class="fr-cell">en voiture / en avion (transport)</td><td class="fr-cell">dans la voiture (inside the car)</td></tr>
  <tr><td class="fr-cell">en été / en hiver / en juin</td><td class="fr-cell">dans trois jours (in 3 days' time)</td></tr>
  <tr><td class="fr-cell">en deux heures (time taken)</td><td class="fr-cell">dans deux heures (starting from now)</td></tr>
</table>
<h3>Countries & Prepositions</h3>
<table class="grammar-table">
  <tr><th>Country type</th><th>Going to</th><th>Coming from</th></tr>
  <tr><td>Feminine (most)</td><td class="form-cell">en France, en Espagne</td><td class="form-cell">de France</td></tr>
  <tr><td>Masculine (few)</td><td class="form-cell">au Japon, aux États-Unis</td><td class="form-cell">du Japon, des États-Unis</td></tr>
  <tr><td>City</td><td class="form-cell">à Rome</td><td class="form-cell">de Rome</td></tr>
</table>
<h3>DEPUIS vs PENDANT</h3>
<div class="example-box"><div class="fr"><strong>Depuis</strong> 2020 (action still ongoing) : Je travaille ici <strong>depuis</strong> 2020.<br><strong>Pendant</strong> deux heures (completed duration) : J'ai étudié <strong>pendant</strong> deux heures.</div></div>`
  },

  {
    id: 36,
    title: "Reflexive Verbs (Verbes Pronominaux)",
    diff: "A2", topic: "Verbs", source: "A",
    preview: "Se lever, se coucher, s'appeler — reflexive pronouns, passé composé with être, agreement.",
    content: `
<h3>Reflexive Pronouns</h3>
<table class="grammar-table">
  <tr><th>Subject</th><th>Reflexive pronoun</th><th>Se lever</th></tr>
  <tr><td>je</td><td class="form-cell">me (m')</td><td class="fr-cell">je me lève</td></tr>
  <tr><td>tu</td><td class="form-cell">te (t')</td><td class="fr-cell">tu te lèves</td></tr>
  <tr><td>il/elle/on</td><td class="form-cell">se (s')</td><td class="fr-cell">il se lève</td></tr>
  <tr><td>nous</td><td class="form-cell">nous</td><td class="fr-cell">nous nous levons</td></tr>
  <tr><td>vous</td><td class="form-cell">vous</td><td class="fr-cell">vous vous levez</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">se (s')</td><td class="fr-cell">ils se lèvent</td></tr>
</table>
<h3>Common Reflexive Verbs</h3>
<div class="example-box"><div class="fr">se lever · se coucher · se réveiller · s'habiller · se laver · se brosser<br>se souvenir de · s'appeler · se sentir · se tromper · se dépêcher</div></div>
<h3>Passé Composé with être</h3>
<div class="example-box"><div class="fr">Elle <strong>s'est levée</strong> tôt. / Ils <strong>se sont rencontrés</strong> à Paris.</div><div class="en">Always use être; past participle agrees with subject.</div></div>
<div class="warning-box"><strong>⚠ No agreement with direct object after verb:</strong><br><em>Elle s'est lavé <strong>les mains</strong>.</em> (les mains = COD after, no agreement)</div>

<h3>Types of reflexive verbs</h3>
<table class="grammar-table">
  <tr><th>Type</th><th>Meaning</th><th>Examples</th></tr>
  <tr><td>Truly reflexive</td><td>Action on oneself</td><td class="fr-cell">se laver (wash oneself), se couper (cut oneself)</td></tr>
  <tr><td>Reciprocal</td><td>Each other</td><td class="fr-cell">s'aimer (love each other), se voir (see each other)</td></tr>
  <tr><td>Idiomatic</td><td>Fixed meaning</td><td class="fr-cell">s'en aller (leave), se souvenir (remember), se taire (be quiet)</td></tr>
  <tr><td>Passive meaning</td><td>Impersonal passive</td><td class="fr-cell">Ça se dit. (That's how it's said) / Ça ne se fait pas.</td></tr>
</table>

<h3>Negation with reflexive verbs</h3>
<div class="example-box"><div class="fr"><strong>Présent :</strong> Je <strong>ne me</strong> lève <strong>pas</strong> tôt.<br><strong>Passé composé :</strong> Elle <strong>ne s'</strong>est <strong>pas</strong> levée.<br><strong>Impératif :</strong> <strong>Ne te</strong> couche <strong>pas</strong> tard ! (neg.) vs Couche-<strong>toi</strong> ! (affirm.)</div></div>

<h3>Daily routine verbs (complete list)</h3>
<div class="example-box"><div class="fr">se réveiller → se lever → se laver / se doucher → se brosser les dents<br>→ se raser → s'habiller → se maquiller → se coiffer / se peigner<br>→ se dépêcher → se reposer → se déshabiller → se coucher → s'endormir</div></div>`
  },

  {
    id: 37,
    title: "Plus-que-parfait — The Pluperfect",
    diff: "B1", topic: "Tenses", source: "A",
    preview: "The 'past of the past': action before another past action. Formation and si-clause usage.",
    content: `
<h3>Formation — Imparfait de avoir/être + participe passé</h3>
<div class="example-box"><div class="fr">j'avais parlé / nous avions fini / elle était arrivée / ils s'étaient levés</div></div>
<h3>Usage</h3>
<p>Expresses an action that took place <strong>before</strong> another past action:</p>
<div class="example-box"><div class="fr">Quand je suis arrivé, elle <strong>était déjà partie</strong>.</div><div class="en">When I arrived, she had already left.</div></div>
<div class="example-box"><div class="fr">Il ne savait pas que j'<strong>avais téléphoné</strong>.</div><div class="en">He didn't know that I had called.</div></div>
<h3>In si-clauses (irréel du passé)</h3>
<div class="example-box"><div class="fr">Si j'<strong>avais su</strong>, je n'<strong>aurais pas fait</strong> ça.</div><div class="en">If I had known, I wouldn't have done that.</div></div>

<h3>Complete conjugation</h3>
<table class="grammar-table">
  <tr><th>Pronom</th><th>Avec AVOIR (parler)</th><th>Avec ÊTRE (partir)</th></tr>
  <tr><td>j'</td><td class="form-cell">avais parlé</td><td class="form-cell">étais parti(e)</td></tr>
  <tr><td>tu</td><td class="form-cell">avais parlé</td><td class="form-cell">étais parti(e)</td></tr>
  <tr><td>il/elle</td><td class="form-cell">avait parlé</td><td class="form-cell">était parti(e)</td></tr>
  <tr><td>nous</td><td class="form-cell">avions parlé</td><td class="form-cell">étions parti(e)s</td></tr>
  <tr><td>vous</td><td class="form-cell">aviez parlé</td><td class="form-cell">étiez parti(e)(s)</td></tr>
  <tr><td>ils/elles</td><td class="form-cell">avaient parlé</td><td class="form-cell">étaient parti(e)s</td></tr>
</table>

<h3>Plus-que-parfait in reported speech</h3>
<div class="example-box"><div class="fr">« J'ai vu ce film. » → Il a dit qu'il <strong>avait vu</strong> ce film.<br>« Elle est partie. » → Il m'a dit qu'elle <strong>était partie</strong>.</div></div>

<h3>Key time markers</h3>
<div class="example-box"><div class="fr">déjà · avant · la veille · auparavant · jusque-là · ne…pas encore<br><em>Quand je suis arrivé, il <strong>avait déjà</strong> mangé.</em><br><em>La veille, ils <strong>avaient réservé</strong> une table.</em></div></div>`
  },

  {
    id: 38,
    title: "Gérondif — En + Participe Présent",
    diff: "B1", topic: "Verbs", source: "A",
    preview: "Formation, simultaneous actions (while doing), means (by doing), condition (if doing).",
    content: `
<h3>Formation — en + présent</h3>
<p><strong>en</strong> + radical du nous (présent) + <strong>-ant</strong></p>
<div class="example-box"><div class="fr">parl<strong>ant</strong> → <strong>en parlant</strong> · finiss<strong>ant</strong> → <strong>en finissant</strong> · fais<strong>ant</strong> → <strong>en faisant</strong></div></div>
<p>Irréguliers : être → <strong>en étant</strong> · avoir → <strong>en ayant</strong> · savoir → <strong>en sachant</strong></p>
<h3>Three main uses</h3>
<p><strong>1. Simultaneous actions (while):</strong></p>
<div class="example-box"><div class="fr">Il chante <strong>en travaillant</strong>.</div><div class="en">He sings while working.</div></div>
<p><strong>2. Means / how (by doing):</strong></p>
<div class="example-box"><div class="fr">On apprend <strong>en pratiquant</strong>.</div><div class="en">One learns by practising.</div></div>
<p><strong>3. Condition (if/when doing):</strong></p>
<div class="example-box"><div class="fr"><strong>En partant</strong> tôt, tu éviteras les embouteillages.</div><div class="en">By leaving early, you'll avoid traffic jams.</div></div>
<div class="tip-box"><strong>💡 Same subject rule:</strong> The gérondif's subject must match the main clause. <em>Il s'est blessé <strong>en tombant</strong>.</em></div>

<h3>Gérondif vs Participe présent</h3>
<table class="grammar-table">
  <tr><th>Gérondif (en + -ant)</th><th>Participe présent (-ant seul)</th></tr>
  <tr><td class="fr-cell"><strong>En</strong> parlant, il gesticule. (while speaking)</td><td class="fr-cell">Un homme <strong>parlant</strong> trois langues. (who speaks — adj.)</td></tr>
  <tr><td>= while / by (adverb of manner)</td><td>= who / which (adjective clause)</td></tr>
  <tr><td>Same subject as main verb</td><td>Modifies a noun</td></tr>
</table>

<h3>TOUT EN + gérondif — emphasis / opposition</h3>
<div class="example-box"><div class="fr"><strong>Tout en</strong> reconnaissant ses qualités, je critique son attitude.<br>(= While admitting his qualities, I criticize his attitude.)<br><strong>Tout en</strong> marchant, elle lisait son téléphone. (= Even while walking…)</div></div>

<h3>Common gérondif expressions</h3>
<div class="example-box"><div class="fr"><strong>En attendant</strong> — meanwhile / while waiting<br><strong>En passant</strong> — in passing / by the way<br><strong>En général</strong> — in general (not a true gérondif but similar form)<br>C'est <strong>en forgeant</strong> qu'on devient forgeron. (Practice makes perfect.)</div></div>`
  },

  {
    id: 39,
    title: "Passive Voice — La Voix Passive",
    diff: "B2", topic: "Sentence Structure", source: "A",
    preview: "Être + past participle, par/de agent, passive in all tenses, French alternatives to passive.",
    content: `
<h3>Formation — être (conjugated) + past participle</h3>
<table class="grammar-table">
  <tr><th>Active</th><th>Passive</th></tr>
  <tr><td class="fr-cell">Le chien mange le gâteau.</td><td class="fr-cell">Le gâteau <strong>est mangé</strong> par le chien.</td></tr>
</table>
<h3>In different tenses</h3>
<table class="grammar-table">
  <tr><th>Tense</th><th>Example</th></tr>
  <tr><td>Présent</td><td class="fr-cell">La lettre est écrite.</td></tr>
  <tr><td>Passé composé</td><td class="fr-cell">La lettre a été écrite.</td></tr>
  <tr><td>Imparfait</td><td class="fr-cell">La lettre était écrite.</td></tr>
  <tr><td>Futur</td><td class="fr-cell">La lettre sera écrite.</td></tr>
</table>
<h3>Alternatives to the passive in French</h3>
<p>French prefers active constructions. Use <strong>on</strong> or a reflexive:</p>
<div class="example-box"><div class="fr"><strong>On</strong> parle français ici. (= Le français est parlé ici.)<br>Ce plat <strong>se mange</strong> chaud. / Ça <strong>ne se dit pas</strong>.</div></div>

<h3>PAR vs DE — agent in passive</h3>
<table class="grammar-table">
  <tr><th>PAR (action)</th><th>DE (state / feeling)</th></tr>
  <tr><td class="fr-cell">Le gâteau est mangé <strong>par</strong> les enfants.</td><td class="fr-cell">Il est aimé <strong>de</strong> tout le monde.</td></tr>
  <tr><td class="fr-cell">La maison a été construite <strong>par</strong> un architecte.</td><td class="fr-cell">Elle est respectée <strong>de</strong> ses collègues.</td></tr>
  <tr><td class="fr-cell">Le voleur a été arrêté <strong>par</strong> la police.</td><td class="fr-cell">Le jardin est entouré <strong>de</strong> fleurs.</td></tr>
</table>
<div class="tip-box"><strong>💡 Rule of thumb:</strong> Use <strong>par</strong> for actions (dynamic) and <strong>de</strong> for states/emotions/descriptions (static).<br>Verbs like <em>aimer, respecter, connaître, entourer, couvrir, accompagner</em> → often <strong>de</strong>.</div>

<h3>SE FAIRE + infinitif — passive with personal impact</h3>
<div class="example-box"><div class="fr">Il <strong>s'est fait</strong> voler son portefeuille. (= He got his wallet stolen.)<br>Elle <strong>s'est fait</strong> couper les cheveux. (= She got her hair cut.)<br>Je me suis <strong>fait</strong> arrêter par la police. (= I got arrested.)</div></div>`
  },

  {
    id: 40,
    title: "Discours Indirect — Reported Speech",
    diff: "B2", topic: "Sentence Structure", source: "A",
    preview: "Tense backshift in reported speech, pronoun changes, time expression shifts, reporting questions.",
    content: `
<h3>Tense Shifts (when main verb is past)</h3>
<table class="grammar-table">
  <tr><th>Direct speech</th><th>Reported speech</th></tr>
  <tr><td>Présent</td><td class="form-cell">Imparfait</td></tr>
  <tr><td>Passé composé</td><td class="form-cell">Plus-que-parfait</td></tr>
  <tr><td>Futur simple</td><td class="form-cell">Conditionnel présent</td></tr>
  <tr><td>Imparfait</td><td class="form-cell">Imparfait (no change)</td></tr>
</table>
<div class="example-box"><div class="fr">« Je <strong>partirai</strong> demain. » → Il a dit qu'il <strong>partirait</strong> le lendemain.</div></div>
<h3>Time Expression Shifts</h3>
<table class="grammar-table">
  <tr><th>Direct</th><th>Indirect</th></tr>
  <tr><td class="fr-cell">aujourd'hui</td><td class="fr-cell">ce jour-là</td></tr>
  <tr><td class="fr-cell">demain</td><td class="fr-cell">le lendemain</td></tr>
  <tr><td class="fr-cell">hier</td><td class="fr-cell">la veille</td></tr>
  <tr><td class="fr-cell">la semaine prochaine</td><td class="fr-cell">la semaine suivante</td></tr>
</table>
<h3>Reporting questions</h3>
<div class="example-box"><div class="fr">« Est-ce que tu viens ? » → Il m'a demandé <strong>si</strong> je venais.<br>« Qu'est-ce que tu veux ? » → Il a demandé <strong>ce que</strong> je voulais.</div></div>

<h3>Reporting imperatives</h3>
<div class="example-box"><div class="fr">« Partez ! » → Il leur a dit <strong>de</strong> partir.<br>« Ne touche pas ! » → Elle m'a dit <strong>de ne pas</strong> toucher.<br>« Asseyez-vous ! » → Il nous a demandé <strong>de</strong> nous asseoir.</div></div>

<h3>Common reporting verbs</h3>
<table class="grammar-table">
  <tr><th>Verb</th><th>Usage</th><th>Example</th></tr>
  <tr><td class="form-cell">dire que</td><td>statement</td><td class="fr-cell">Il a <strong>dit qu'</strong>il était fatigué.</td></tr>
  <tr><td class="form-cell">demander si / ce que</td><td>question</td><td class="fr-cell">Il a <strong>demandé si</strong> je venais.</td></tr>
  <tr><td class="form-cell">répondre que</td><td>answer</td><td class="fr-cell">J'ai <strong>répondu que</strong> oui.</td></tr>
  <tr><td class="form-cell">expliquer que</td><td>explanation</td><td class="fr-cell">Il a <strong>expliqué qu'</strong>il avait un problème.</td></tr>
  <tr><td class="form-cell">affirmer / prétendre que</td><td>claim</td><td class="fr-cell">Elle <strong>prétend que</strong> c'est faux.</td></tr>
  <tr><td class="form-cell">ajouter que</td><td>add</td><td class="fr-cell">Il a <strong>ajouté qu'</strong>il reviendrait.</td></tr>
  <tr><td class="form-cell">promettre que / de</td><td>promise</td><td class="fr-cell">Il a <strong>promis qu'</strong>il serait là. / Il a promis <strong>de</strong> venir.</td></tr>
</table>`
  }
];

export const GRAMMAR_UZ_MAP: GrammarUzMap = {
  1:  { title: "ÊTRE Fe'li — Dialog va Asoslar", preview: "Être fe'lining tuslanishi, ega olmoshlari, à/de/chez, asosiy dialog namunalari." },
  2:  { title: "Ega Olmoshlari — TU, VOUS, ON", preview: "Tu va vous qachon ishlatiladi, og'zaki fransuzchada on = nous, ils/elles bilan jins moslashuvi." },
  3:  { title: "Sifat (1) — Jins va Son bo'yicha Moslashtirish", preview: "Ayollik va ko'plik sifatlarini yasash, rang sifatlari, noregular shakllar." },
  4:  { title: "Inkor va So'roq (1)", preview: "Ne...pas, savol berishning to'rt usuli, javoblar: oui/non/si, moi aussi/moi non plus." },
  5:  { title: "Ot va Artikl", preview: "Otlarning erkaklik/ayollik jinsi, aniq va noaniq artikllar, élision, liaison." },
  6:  { title: "C'est / Il est — Aniqlash va Tavsif", preview: "C'est aniqlash uchun, il/elle est tavsif uchun, kasblar artiklsiz." },
  7:  { title: "Egalik — Sifat va Olmoshlar", preview: "Mon/ma/mes dan leur/leurs gacha, hamda egalik olmoshlari le mien/la mienne/les miens…" },
  8:  { title: "Ko'rsatish — Ce, Cette, Ces, Celui-ci…", preview: "Ko'rsatish sifatlari (ce/cette/ces/cet) va olmoshlari (celui-ci/celle-là/ceux/celles)." },
  9:  { title: "Hozirgi Zamonda -ER Fe'llari", preview: "-er fe'llarining tuslanishi, talaffuz qoidalari, imlo o'zgarishlari, j'arrive/j'habite." },
  10: { title: "Ravish — Bon/Bien, Rapide/Vite, Très/Beaucoup", preview: "Sifat va ravish farqi, bon/bien, rapide/vite, très va beaucoup, -ment ravishlar." },
  11: { title: "Miqdor Ifodasi", preview: "Bo'lish artikllari (du/de la/de l'/des), miqdor ifodalari, miqdor inkori." },
  12: { title: "Hozirgi Zamonda -IR, -RE, -OIR Fe'llari", preview: "Barcha -ir/-re/-oir fe'l turlari: dormir, partir, mettre, écrire, pouvoir, vouloir…" },
  13: { title: "Pouvoir, Devoir, Falloir, Vouloir", preview: "Modal fe'llar: qobiliyat/ruxsat (pouvoir), majburiyat/ehtimol (devoir), zarurat (falloir)." },
  14: { title: "To'g'ri To'ldiruvchi Olmoshlar", preview: "Le/la/les to'g'ri to'ldiruvchilarni almashtiradi; me/te/nous/vous; inkor joylashuvi; élision." },
  15: { title: "Bilvosita Olmoshlar — LUI, LEUR", preview: "Bilvosita to'ldiruvchi olmoshlari lui/leur, ikki olmosh tartibi, y va en." },
  16: { title: "Buyruq Mayli", preview: "Tu/nous/vous uchun buyruq mayli yasalishi, noregular shakllar, buyruq bilan olmoshlar." },
  17: { title: "Shart Mayli (1) — Xushmuomalalik, Maslahat, Istak", preview: "Xushmuomala so'rovlar (voudrais/pourriez), maslahat (devriez), istaklar (aimerais) uchun shart mayli." },
  18: { title: "Nisbiy Olmoshlar — Qui, Que, Où, Dont", preview: "Oddiy nisbiy olmoshlar qui/que/où, shuningdek dont, ta'kidlash, murakkab nisbiy olmoshlar." },
  19: { title: "Inkor (2) — Jamais, Plus, Rien, Personne, Aucun", preview: "Murakkab inkor: ne...jamais, ne...plus, ne...rien, ne...personne, ne...aucun, ni...ni." },
  20: { title: "ÊTRE bilan Passé Composé", preview: "14 ta harakat/holat o'zgarishi fe'llari être ishlatadi; ega bilan o'tgan zamon sifatdoshining moslashuvi." },
  21: { title: "Imparfait — Odatlar va Tasvirlar", preview: "Imparfait yasalishi, o'tmishdagi odatlar/tasvirlar uchun ishlatilishi, imparfait va passé composé farqi." },
  22: { title: "Oddiy Kelasi Zamon", preview: "Futur simple yasalishi, noregular o'zaklar, futur simple va futur proche farqi, quand + futur." },
  23: { title: "Shart Mayli (2) — Xayol va Farazlar", preview: "Xayol, tasdiqlanmagan ma'lumot, afsus uchun shart mayli; conditionnel passé yasalishi." },
  24: { title: "SI bilan Farazlar", preview: "Si + présent → futur; si + imparfait → conditionnel; si + plus-que-parfait → conditionnel passé." },
  25: { title: "Hozirgi Zamon Subjonctif", preview: "Yasalishi (ils-negiz + qo'shimchalar), il faut que, istak/his-tuyg'u/shubha fe'llari, noregular subjonctiflar." },
  26: { title: "Mantiqiy Aloqalar — Sabab, Oqibat, Maqsad, Qarama-qarshilik", preview: "Parce que/comme/puisque (sabab), donc/alors (oqibat), pour que/afin que (maqsad), bien que (qarama-qarshilik)." },
  41: { title: "Qarindoshlik va Guruh Otlari", preview: "Oila lug'ati (qarindoshlik, quda-anda), gens va personnes, tout le monde." },
  42: { title: "« IL Y A » va « C'EST » — Mavjudlik", preview: "Il y a joyda mavjudlikni bildiradi; c'est/ce sont hozirgina aytilgan narsani aniqlaydi." },
  43: { title: "Makonda Joylashuv (1) — Shaharlar, Mamlakatlar, Qit'alar", preview: "À + shaharlar; en/au/aux + mamlakatlar va qit'alar; mamlakat jinslari; de/du/des bilan kelib chiqish." },
  44: { title: "« AVOIR » Fe'li", preview: "Avoir tuslanishi; yosh (avoir + ans); avoir faim/froid/peur/mal; avoir les yeux bleus." },
  45: { title: "Sifat (2) — O'rni va Maxsus Shakllar", preview: "Sifat joylashuvi qoidalari, unli oldida bel/vieil/nouvel, sifat oldida des → de." },
  46: { title: "Sonlar — Asosiy va Tartib", preview: "0 dan 1 milliardgacha asosiy sonlar, imlo qoidalari, talaffuz, tartib sonlari." },
  47: { title: "Vaqt (1) — Sana, Soat va Ob-havo", preview: "Sanalarni aytish (nous sommes le…), kunlar/oylar/fasllar, soat aytish (il est…), ob-havo." },
  48: { title: "Noaniq Olmoshlar — Quelques, Chaque, Tout, Quelqu'un", preview: "Noaniq sifatlar (quelques/plusieurs/chaque/tout) va olmoshlar (quelqu'un/quelque chose/quelque part)." },
  49: { title: "Vaqt (2) — Depuis, Pour, Pendant, En", preview: "Davom etayotgan/beri (depuis), rejalashtirilgan davomiylik (pour), tugallangan davomiylik (pendant), sarflangan vaqt (en)." },
  50: { title: "« EN » Olmoshi", preview: "EN de + ot o'rnini bosadi; bo'lish miqdorlari; miqdor ifodalari bilan; inkor." },
  51: { title: "Makonda Joylashuv (2) — Viloyatlar va Kelib Chiqish", preview: "Viloyatlar uchun EN/dans le/dans les; geografik kelib chiqish uchun DE/DU; mahsulotlar va ularning kelib chiqishi." },
  52: { title: "« ALLER » Fe'li va Transport", preview: "Aller tuslanishi, aller + joy, transport predloglari (en voiture/à pied), aller voir va visiter farqi." },
  53: { title: "« Y » Olmoshi", preview: "Y joy to'ldiruvchilarini (à + lieu) almashtiradi; Y à + narsa o'rnini bosadi; y bilan qotib qolgan iboralar." },
  54: { title: "Makon va Vaqtda Joylashuv (3) — À, De, Jusqu'à, Vers, Entre", preview: "À (nuqta), de…à (oraliq), jusqu'à (chegara), à partir de (boshlanish), vers/environ (taxminiy), entre/parmi." },
  55: { title: "Ta'kidli Olmoshlar — Moi, Toi, Lui, Elle, Nous, Vous, Eux, Elles", preview: "Predloglardan keyin, c'est dan keyin, aussi/non plus bilan, egani ta'kidlash uchun kuchli olmoshlar." },
  56: { title: "So'roq (2) — Où, Quand, Comment, Quel, Lequel", preview: "Inversiya bilan ma'lumot savollari; so'roq olmoshlari qui/que/quoi; quel/lequel; undov." },
  57: { title: "Hozirgi Zamonda Bilvosita Nutq", preview: "Gaplarni xabar qilish (que), ha/yo'q savollari (si), ma'lumot savollari, buyruqlar (de + inf)." },
  58: { title: "Predloglar va Fe'llar — À va DE", preview: "À + infinitiv bilan fe'llar (commencer à), de + infinitiv bilan fe'llar (arrêter de), predlogsiz." },
  59: { title: "Harakat Fe'llari — Aller, Venir, Visiter", preview: "Aller va venir (yo'nalish); retourner/revenir; rentrer; aller voir va visiter; harakat fe'llari + infinitiv." },
  60: { title: "Yaqin Kelasi Zamon — Aller + Infinitif", preview: "Yasalishi (aller hozirgi + infinitif), tezkor/rejalashtirilgan kelajak, inkor, vaqt ifodalari." },
  61: { title: "Vaqt (3) — Il y a, Dans, Depuis, Xronologiya", preview: "Il y a (o'tgan lahza), dans (kelasi lahza), depuis (davom etayotgan), pour/pendant/en; xronologiya jadvallari." },
  62: { title: "Venir de / Être en Train de / Être sur le Point de", preview: "Yaqin o'tgan zamon (venir de), davom etayotgan harakat (être en train de), yaqinlashayotgan harakat (être sur le point de)." },
  63: { title: "Oldingi Kelasi Zamon", preview: "Futur antérieur yasalishi; boshqa kelasi zamondagi harakatdan oldin bo'lgan harakat; barcha indikativ zamonlar xulosasi." },
  27: { title: "Aniq Artikllar: le, la, l', les", preview: "Aniq otlar, turkumlar, mavhum tushunchalar uchun aniq artikllar va au/du qisqartmalari." },
  28: { title: "Noaniq va Bo'lish Artikllari", preview: "Noaniq otlar uchun un/une/des; sanalmaydigan miqdorlar uchun du/de la/de l'." },
  29: { title: "Sifat Moslashuvi va O'rni", preview: "Sifatlar jins va sonda moslashadi; BANGS sifatlari otdan oldin turadi." },
  30: { title: "Qiyoslash va Orttirma Daraja", preview: "Qiyoslash uchun plus/moins/aussi…que; orttirma daraja uchun le/la plus/moins; meilleur/mieux." },
  31: { title: "Hozirgi Zamon — Barcha Fe'l Guruhlari", preview: "-er/-ir/-re fe'llarining to'liq tuslanishi hamda barcha muhim noregular fe'llar." },
  32: { title: "AVOIR bilan Passé Composé", preview: "Avoir + o'tgan zamon sifatdoshi bilan yasalishi; noregular sifatdoshlar; oldingi COD bilan moslashtirish." },
  33: { title: "Inkor — To'liq Qo'llanma", preview: "Ne...pas, ne...plus, ne...jamais, ne...rien, ne...personne, ne...que, ne...ni...ni." },
  34: { title: "Savol Berish", preview: "Ha/yo'q savollarini berishning uch usuli; barcha so'roq so'zlari; so'roq olmoshlari qui/que." },
  35: { title: "Predloglar — À, De, En, Dans, Sur…", preview: "À/de ning asosiy ishlatilishlari, en va dans, mamlakatlar/shaharlar, depuis/pendant, sur/sous." },
  36: { title: "O'zlik Fe'llari (Verbes Pronominaux)", preview: "Se lever, se coucher, s'appeler — o'zlik olmoshlari, être bilan passé composé, moslashtirish." },
  37: { title: "Plus-que-parfait — O'tgan Zamondagi O'tgan", preview: "O'tmishning o'tmishi: boshqa o'tgan harakatdan oldingi harakat. Yasalishi va si-gap ishlatilishi." },
  38: { title: "Gérondif — En + Hozirgi Zamon Sifatdoshi", preview: "Yasalishi, bir vaqtdagi harakatlar (qilayotganda), vosita (qilib), shart (qilsa)." },
  39: { title: "Majhul Nisbat — La Voix Passive", preview: "Être + o'tgan zamon sifatdoshi, par/de bilan bajaruvchi, barcha zamonlarda majhul, fransuzcha alternativalar." },
  40: { title: "Bilvosita Nutq — Reported Speech", preview: "Xabar qilishda zamon o'zgarishi, olmosh o'zgarishlari, vaqt ifodalari o'zgarishi, savollarni xabar qilish." }
};;

export const GRAMMAR_UZ: GrammarTopic[] = GRAMMAR.map((item) => {
  const uz = GRAMMAR_UZ_MAP[item.id];
  if (!uz) return item;
  return { ...item, title: uz.title, preview: uz.preview };
});
