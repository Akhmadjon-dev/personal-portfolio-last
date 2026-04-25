import type { FrenchUnit } from './types';

export const VOCAB_UNITS: FrenchUnit[] = [
  { id: 1, html: `<div class="vb-unit-group open" data-vb-unit="1">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">1</div>
          <div class="vb-unit-title">Un café — Food & Drink</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Les repas</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">un petit-déjeuner</span><span class="vb-en">breakfast (7h)</span></div>
            <div class="vb-item"><span class="vb-fr">un déjeuner</span><span class="vb-en">lunch (12h)</span></div>
            <div class="vb-item"><span class="vb-fr">un dîner</span><span class="vb-en">dinner (20h)</span></div>
            <div class="vb-item"><span class="vb-fr">la carte</span><span class="vb-en">menu (à la carte)</span></div>
            <div class="vb-item"><span class="vb-fr">le menu / la formule</span><span class="vb-en">set menu</span></div>
            <div class="vb-item"><span class="vb-fr">le plat du jour</span><span class="vb-en">dish of the day</span></div>
          </div></div>
          <div class="vb-category"><h4>À table</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">un verre</span><span class="vb-en">glass</span></div>
            <div class="vb-item"><span class="vb-fr">une assiette</span><span class="vb-en">plate</span></div>
            <div class="vb-item"><span class="vb-fr">un couteau</span><span class="vb-en">knife</span></div>
            <div class="vb-item"><span class="vb-fr">une fourchette</span><span class="vb-en">fork</span></div>
            <div class="vb-item"><span class="vb-fr">une cuiller</span><span class="vb-en">spoon</span></div>
            <div class="vb-item"><span class="vb-fr">le serveur / la serveuse</span><span class="vb-en">waiter / waitress</span></div>
          </div></div>
          <div class="vb-category"><h4>Les boissons</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une eau minérale plate</span><span class="vb-en">still mineral water</span></div>
            <div class="vb-item"><span class="vb-fr">une eau gazeuse</span><span class="vb-en">sparkling water</span></div>
            <div class="vb-item"><span class="vb-fr">un demi (à la pression)</span><span class="vb-en">draught beer (25cl)</span></div>
            <div class="vb-item"><span class="vb-fr">une orange pressée</span><span class="vb-en">fresh-squeezed OJ</span></div>
            <div class="vb-item"><span class="vb-fr">un café crème</span><span class="vb-en">coffee with cream</span></div>
            <div class="vb-item"><span class="vb-fr">une carafe d'eau</span><span class="vb-en">jug of tap water</span></div>
          </div></div>
          <div class="vb-category"><h4>Les desserts</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une tarte aux pommes</span><span class="vb-en">apple tart</span></div>
            <div class="vb-item"><span class="vb-fr">une crème brûlée</span><span class="vb-en">crème brûlée</span></div>
            <div class="vb-item"><span class="vb-fr">une mousse au chocolat</span><span class="vb-en">chocolate mousse</span></div>
            <div class="vb-item"><span class="vb-fr">une glace à la vanille</span><span class="vb-en">vanilla ice cream</span></div>
            <div class="vb-item"><span class="vb-fr">une salade de fruits</span><span class="vb-en">fruit salad</span></div>
          </div></div>
          <div class="vb-category"><h4>Plats & Nourriture (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">un croque-monsieur</span><span class="vb-en">croque-monsieur sandwich</span></div>
            <div class="vb-item"><span class="vb-fr">une salade verte</span><span class="vb-en">green salad</span></div>
            <div class="vb-item"><span class="vb-fr">un sandwich jambon-beurre</span><span class="vb-en">ham-and-butter sandwich</span></div>
            <div class="vb-item"><span class="vb-fr">un croissant</span><span class="vb-en">croissant</span></div>
            <div class="vb-item"><span class="vb-fr">une tartine</span><span class="vb-en">slice of bread with spread</span></div>
            <div class="vb-item"><span class="vb-fr">une salade au chèvre chaud</span><span class="vb-en">warm goat cheese salad</span></div>
            <div class="vb-item"><span class="vb-fr">un saumon grillé</span><span class="vb-en">grilled salmon</span></div>
            <div class="vb-item"><span class="vb-fr">le riz</span><span class="vb-en">rice</span></div>
            <div class="vb-item"><span class="vb-fr">un lapin à la moutarde</span><span class="vb-en">rabbit in mustard sauce</span></div>
            <div class="vb-item"><span class="vb-fr">les légumes</span><span class="vb-en">vegetables</span></div>
            <div class="vb-item"><span class="vb-fr">une assiette de crudités</span><span class="vb-en">plate of raw vegetables</span></div>
            <div class="vb-item"><span class="vb-fr">les légumes cuits</span><span class="vb-en">cooked vegetables</span></div>
            <div class="vb-item"><span class="vb-fr">une assiette de frites</span><span class="vb-en">plate of chips/fries</span></div>
            <div class="vb-item"><span class="vb-fr">les haricots verts</span><span class="vb-en">green beans</span></div>
            <div class="vb-item"><span class="vb-fr">sans beurre</span><span class="vb-en">without butter</span></div>
            <div class="vb-item"><span class="vb-fr">végétarienne</span><span class="vb-en">vegetarian</span></div>
            <div class="vb-item"><span class="vb-fr">l'addition</span><span class="vb-en">the bill</span></div>
            <div class="vb-item"><span class="vb-fr">un petit verre de blanc</span><span class="vb-en">small glass of white wine</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 2 -->` },
  { id: 2, html: `<div class="vb-unit-group" data-vb-unit="2">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">2</div>
          <div class="vb-unit-title">Au téléphone — Phone & Work</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Les jours de la semaine</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">lundi</span><span class="vb-en">Monday</span></div>
            <div class="vb-item"><span class="vb-fr">mardi</span><span class="vb-en">Tuesday</span></div>
            <div class="vb-item"><span class="vb-fr">mercredi</span><span class="vb-en">Wednesday</span></div>
            <div class="vb-item"><span class="vb-fr">jeudi</span><span class="vb-en">Thursday</span></div>
            <div class="vb-item"><span class="vb-fr">vendredi</span><span class="vb-en">Friday</span></div>
            <div class="vb-item"><span class="vb-fr">samedi</span><span class="vb-en">Saturday</span></div>
            <div class="vb-item"><span class="vb-fr">dimanche</span><span class="vb-en">Sunday</span></div>
            <div class="vb-item"><span class="vb-fr">aujourd'hui</span><span class="vb-en">today</span></div>
            <div class="vb-item"><span class="vb-fr">demain</span><span class="vb-en">tomorrow</span></div>
          </div></div>
          <div class="vb-category"><h4>Au bureau — statuts</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">être libre ≠ occupé</span><span class="vb-en">free ≠ busy</span></div>
            <div class="vb-item"><span class="vb-fr">être en réunion</span><span class="vb-en">in a meeting</span></div>
            <div class="vb-item"><span class="vb-fr">être en rendez-vous</span><span class="vb-en">at an appointment</span></div>
            <div class="vb-item"><span class="vb-fr">être en déplacement</span><span class="vb-en">away on business</span></div>
            <div class="vb-item"><span class="vb-fr">être en retard ≠ en avance</span><span class="vb-en">late ≠ early</span></div>
            <div class="vb-item"><span class="vb-fr">un rendez-vous</span><span class="vb-en">appointment / meeting</span></div>
          </div></div>
          <div class="vb-category"><h4>Téléphone & Vie quotidienne (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">un ami / une amie</span><span class="vb-en">a friend</span></div>
            <div class="vb-item"><span class="vb-fr">un(e) secrétaire</span><span class="vb-en">secretary</span></div>
            <div class="vb-item"><span class="vb-fr">le cabinet médical</span><span class="vb-en">medical surgery</span></div>
            <div class="vb-item"><span class="vb-fr">le docteur</span><span class="vb-en">doctor</span></div>
            <div class="vb-item"><span class="vb-fr">urgent</span><span class="vb-en">urgent</span></div>
            <div class="vb-item"><span class="vb-fr">une possibilité</span><span class="vb-en">an opening/possibility</span></div>
            <div class="vb-item"><span class="vb-fr">à midi</span><span class="vb-en">at noon</span></div>
            <div class="vb-item"><span class="vb-fr">l'aéroport</span><span class="vb-en">airport</span></div>
            <div class="vb-item"><span class="vb-fr">un vol</span><span class="vb-en">a flight</span></div>
            <div class="vb-item"><span class="vb-fr">réserver</span><span class="vb-en">to book/reserve</span></div>
            <div class="vb-item"><span class="vb-fr">un numéro de téléphone</span><span class="vb-en">phone number</span></div>
            <div class="vb-item"><span class="vb-fr">une adresse</span><span class="vb-en">address</span></div>
            <div class="vb-item"><span class="vb-fr">un numéro de réservation</span><span class="vb-en">booking number</span></div>
            <div class="vb-item"><span class="vb-fr">un taxi</span><span class="vb-en">taxi</span></div>
            <div class="vb-item"><span class="vb-fr">chez des clients</span><span class="vb-en">with clients</span></div>
            <div class="vb-item"><span class="vb-fr">après-midi</span><span class="vb-en">afternoon</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 3 -->` },
  { id: 3, html: `<div class="vb-unit-group" data-vb-unit="3">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">3</div>
          <div class="vb-unit-title">La vie quotidienne — Daily Life</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>La famille</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le père / la mère</span><span class="vb-en">father / mother</span></div>
            <div class="vb-item"><span class="vb-fr">le frère / la sœur</span><span class="vb-en">brother / sister</span></div>
            <div class="vb-item"><span class="vb-fr">le fils / la fille</span><span class="vb-en">son / daughter</span></div>
            <div class="vb-item"><span class="vb-fr">le mari / la femme</span><span class="vb-en">husband / wife</span></div>
            <div class="vb-item"><span class="vb-fr">les parents</span><span class="vb-en">parents (= père + mère)</span></div>
          </div></div>
          <div class="vb-category"><h4>Les nationalités et langues</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">français(e)</span><span class="vb-en">French</span></div>
            <div class="vb-item"><span class="vb-fr">anglais(e)</span><span class="vb-en">English</span></div>
            <div class="vb-item"><span class="vb-fr">espagnol(e)</span><span class="vb-en">Spanish</span></div>
            <div class="vb-item"><span class="vb-fr">allemand(e)</span><span class="vb-en">German</span></div>
            <div class="vb-item"><span class="vb-fr">italien(ne)</span><span class="vb-en">Italian</span></div>
            <div class="vb-item"><span class="vb-fr">parler bien / un peu</span><span class="vb-en">to speak well / a little</span></div>
          </div></div>
          <div class="vb-category"><h4>Vie quotidienne (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une réunion</span><span class="vb-en">a meeting</span></div>
            <div class="vb-item"><span class="vb-fr">une conférence</span><span class="vb-en">conference</span></div>
            <div class="vb-item"><span class="vb-fr">les participants</span><span class="vb-en">participants</span></div>
            <div class="vb-item"><span class="vb-fr">le/la responsable</span><span class="vb-en">manager</span></div>
            <div class="vb-item"><span class="vb-fr">un hôtel</span><span class="vb-en">hotel</span></div>
            <div class="vb-item"><span class="vb-fr">un restaurant</span><span class="vb-en">restaurant</span></div>
            <div class="vb-item"><span class="vb-fr">les langues étrangères</span><span class="vb-en">foreign languages</span></div>
            <div class="vb-item"><span class="vb-fr">sympa / ouvert(e)</span><span class="vb-en">nice / open-minded</span></div>
            <div class="vb-item"><span class="vb-fr">fantastique</span><span class="vb-en">fantastic</span></div>
            <div class="vb-item"><span class="vb-fr">les cours</span><span class="vb-en">classes</span></div>
            <div class="vb-item"><span class="vb-fr">étudier</span><span class="vb-en">to study</span></div>
            <div class="vb-item"><span class="vb-fr">adorer</span><span class="vb-en">to love/adore</span></div>
            <div class="vb-item"><span class="vb-fr">un courriel</span><span class="vb-en">email</span></div>
            <div class="vb-item"><span class="vb-fr">retraité(e)</span><span class="vb-en">retired</span></div>
            <div class="vb-item"><span class="vb-fr">le répondeur</span><span class="vb-en">answering machine</span></div>
            <div class="vb-item"><span class="vb-fr">les voyages</span><span class="vb-en">travels</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 4 -->` },
  { id: 4, html: `<div class="vb-unit-group" data-vb-unit="4">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">4</div>
          <div class="vb-unit-title">Le voyage — Travel</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Le voyage</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une valise</span><span class="vb-en">suitcase</span></div>
            <div class="vb-item"><span class="vb-fr">un billet</span><span class="vb-en">ticket</span></div>
            <div class="vb-item"><span class="vb-fr">un appareil photo</span><span class="vb-en">camera</span></div>
            <div class="vb-item"><span class="vb-fr">faire les bagages</span><span class="vb-en">to pack</span></div>
            <div class="vb-item"><span class="vb-fr">prendre l'avion/le train</span><span class="vb-en">to fly / take the train</span></div>
            <div class="vb-item"><span class="vb-fr">les saisons / les mois</span><span class="vb-en">seasons / months</span></div>
            <div class="vb-item"><span class="vb-fr">la date</span><span class="vb-en">the date</span></div>
            <div class="vb-item"><span class="vb-fr">les couleurs</span><span class="vb-en">colours</span></div>
          </div></div>
          <div class="vb-category"><h4>Voyager (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">faire le pont</span><span class="vb-en">make a long weekend</span></div>
            <div class="vb-item"><span class="vb-fr">un long week-end</span><span class="vb-en">long weekend</span></div>
            <div class="vb-item"><span class="vb-fr">le trajet</span><span class="vb-en">journey</span></div>
            <div class="vb-item"><span class="vb-fr">chez des amis</span><span class="vb-en">at friends' place</span></div>
            <div class="vb-item"><span class="vb-fr">la première fois</span><span class="vb-en">the first time</span></div>
            <div class="vb-item"><span class="vb-fr">le mari</span><span class="vb-en">husband</span></div>
            <div class="vb-item"><span class="vb-fr">un sac de voyage</span><span class="vb-en">travel bag</span></div>
            <div class="vb-item"><span class="vb-fr">un sac à main</span><span class="vb-en">handbag</span></div>
            <div class="vb-item"><span class="vb-fr">un plan</span><span class="vb-en">map</span></div>
            <div class="vb-item"><span class="vb-fr">un guide</span><span class="vb-en">guidebook</span></div>
            <div class="vb-item"><span class="vb-fr">partir</span><span class="vb-en">to leave</span></div>
            <div class="vb-item"><span class="vb-fr">fatigué(e)</span><span class="vb-en">tired</span></div>
            <div class="vb-item"><span class="vb-fr">une chambre</span><span class="vb-en">room</span></div>
            <div class="vb-item"><span class="vb-fr">la haute saison</span><span class="vb-en">high season</span></div>
            <div class="vb-item"><span class="vb-fr">petit-déjeuner inclus</span><span class="vb-en">breakfast included</span></div>
            <div class="vb-item"><span class="vb-fr">la carte bleue</span><span class="vb-en">credit card</span></div>
            <div class="vb-item"><span class="vb-fr">la mer</span><span class="vb-en">the sea</span></div>
            <div class="vb-item"><span class="vb-fr">le soleil</span><span class="vb-en">the sun</span></div>
            <div class="vb-item"><span class="vb-fr">une île</span><span class="vb-en">island</span></div>
            <div class="vb-item"><span class="vb-fr">un paradis</span><span class="vb-en">paradise</span></div>
            <div class="vb-item"><span class="vb-fr">magnifique</span><span class="vb-en">magnificent</span></div>
            <div class="vb-item"><span class="vb-fr">une terrasse</span><span class="vb-en">terrace</span></div>
            <div class="vb-item"><span class="vb-fr">un bateau</span><span class="vb-en">boat</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 5 -->` },
  { id: 5, html: `<div class="vb-unit-group" data-vb-unit="5">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">5</div>
          <div class="vb-unit-title">Les renseignements — Admin & Banking</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Administration & Banque</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">un renseignement</span><span class="vb-en">information</span></div>
            <div class="vb-item"><span class="vb-fr">un justificatif de domicile</span><span class="vb-en">proof of address</span></div>
            <div class="vb-item"><span class="vb-fr">remplir un formulaire</span><span class="vb-en">fill in a form</span></div>
            <div class="vb-item"><span class="vb-fr">un compte d'épargne</span><span class="vb-en">savings account</span></div>
            <div class="vb-item"><span class="vb-fr">retirer de l'argent</span><span class="vb-en">withdraw money</span></div>
            <div class="vb-item"><span class="vb-fr">une grève</span><span class="vb-en">strike</span></div>
          </div></div>
          <div class="vb-category"><h4>Services & Documents (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une bibliothèque</span><span class="vb-en">library</span></div>
            <div class="vb-item"><span class="vb-fr">une carte de bibliothèque</span><span class="vb-en">library card</span></div>
            <div class="vb-item"><span class="vb-fr">une photo d'identité</span><span class="vb-en">photo ID</span></div>
            <div class="vb-item"><span class="vb-fr">une quittance de loyer</span><span class="vb-en">rent receipt</span></div>
            <div class="vb-item"><span class="vb-fr">une facture d'électricité</span><span class="vb-en">electricity bill</span></div>
            <div class="vb-item"><span class="vb-fr">un versement</span><span class="vb-en">deposit/payment</span></div>
            <div class="vb-item"><span class="vb-fr">les intérêts</span><span class="vb-en">interest</span></div>
            <div class="vb-item"><span class="vb-fr">un prospectus / un dépliant</span><span class="vb-en">brochure/leaflet</span></div>
            <div class="vb-item"><span class="vb-fr">une grève nationale</span><span class="vb-en">national strike</span></div>
            <div class="vb-item"><span class="vb-fr">le remboursement</span><span class="vb-en">refund</span></div>
            <div class="vb-item"><span class="vb-fr">l'échange</span><span class="vb-en">exchange</span></div>
            <div class="vb-item"><span class="vb-fr">les bons de voyage</span><span class="vb-en">travel vouchers</span></div>
            <div class="vb-item"><span class="vb-fr">valable un an</span><span class="vb-en">valid for one year</span></div>
            <div class="vb-item"><span class="vb-fr">impossible</span><span class="vb-en">impossible</span></div>
            <div class="vb-item"><span class="vb-fr">une association humanitaire</span><span class="vb-en">humanitarian association</span></div>
            <div class="vb-item"><span class="vb-fr">le temps libre</span><span class="vb-en">free time</span></div>
            <div class="vb-item"><span class="vb-fr">les personnes âgées</span><span class="vb-en">elderly people</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 6 -->` },
  { id: 6, html: `<div class="vb-unit-group" data-vb-unit="6">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">6</div>
          <div class="vb-unit-title">Autour de bébé — Family News</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Bébé & Famille</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">avoir un bébé</span><span class="vb-en">to have a baby</span></div>
            <div class="vb-item"><span class="vb-fr">accoucher</span><span class="vb-en">to give birth</span></div>
            <div class="vb-item"><span class="vb-fr">le congé de maternité</span><span class="vb-en">maternity leave</span></div>
            <div class="vb-item"><span class="vb-fr">le compagnon / la compagne</span><span class="vb-en">partner (unmarried)</span></div>
            <div class="vb-item"><span class="vb-fr">le couple / le mariage</span><span class="vb-en">couple / marriage</span></div>
            <div class="vb-item"><span class="vb-fr">reprendre le travail</span><span class="vb-en">return to work</span></div>
          </div></div>
          <div class="vb-category"><h4>Famille & Nouvelles (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une grande nouvelle</span><span class="vb-en">big news</span></div>
            <div class="vb-item"><span class="vb-fr">content(e)</span><span class="vb-en">happy</span></div>
            <div class="vb-item"><span class="vb-fr">ravi(e)</span><span class="vb-en">thrilled</span></div>
            <div class="vb-item"><span class="vb-fr">fou / folle de joie</span><span class="vb-en">overjoyed</span></div>
            <div class="vb-item"><span class="vb-fr">un petit-enfant</span><span class="vb-en">grandchild</span></div>
            <div class="vb-item"><span class="vb-fr">la clinique</span><span class="vb-en">clinic</span></div>
            <div class="vb-item"><span class="vb-fr">l'accouchement</span><span class="vb-en">birth/delivery</span></div>
            <div class="vb-item"><span class="vb-fr">prévu</span><span class="vb-en">planned/expected</span></div>
            <div class="vb-item"><span class="vb-fr">continuer à travailler</span><span class="vb-en">continue working</span></div>
            <div class="vb-item"><span class="vb-fr">voyager</span><span class="vb-en">to travel</span></div>
            <div class="vb-item"><span class="vb-fr">changer de travail</span><span class="vb-en">change jobs</span></div>
            <div class="vb-item"><span class="vb-fr">s'occuper de</span><span class="vb-en">look after</span></div>
            <div class="vb-item"><span class="vb-fr">abandonner</span><span class="vb-en">give up</span></div>
            <div class="vb-item"><span class="vb-fr">garder</span><span class="vb-en">to keep / to look after</span></div>
            <div class="vb-item"><span class="vb-fr">un chat</span><span class="vb-en">a cat</span></div>
            <div class="vb-item"><span class="vb-fr">les vacances</span><span class="vb-en">holidays</span></div>
            <div class="vb-item"><span class="vb-fr">se marier</span><span class="vb-en">to get married</span></div>
            <div class="vb-item"><span class="vb-fr">la jeunesse actuelle</span><span class="vb-en">young people today</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 7 -->` },
  { id: 7, html: `<div class="vb-unit-group" data-vb-unit="7">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">7</div>
          <div class="vb-unit-title">La santé — Health</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Santé & Médecine</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">avoir de la fièvre</span><span class="vb-en">have a fever</span></div>
            <div class="vb-item"><span class="vb-fr">avoir le nez qui coule</span><span class="vb-en">have a runny nose</span></div>
            <div class="vb-item"><span class="vb-fr">tousser</span><span class="vb-en">to cough</span></div>
            <div class="vb-item"><span class="vb-fr">un comprimé</span><span class="vb-en">a tablet</span></div>
            <div class="vb-item"><span class="vb-fr">un sirop</span><span class="vb-en">a syrup</span></div>
            <div class="vb-item"><span class="vb-fr">l'ordonnance</span><span class="vb-en">prescription</span></div>
            <div class="vb-item"><span class="vb-fr">le médecin généraliste</span><span class="vb-en">GP / family doctor</span></div>
          </div></div>
          <div class="vb-category"><h4>Santé & Corps (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">avoir mal à…</span><span class="vb-en">to have pain in…</span></div>
            <div class="vb-item"><span class="vb-fr">mal au ventre</span><span class="vb-en">stomachache</span></div>
            <div class="vb-item"><span class="vb-fr">mal à la tête</span><span class="vb-en">headache</span></div>
            <div class="vb-item"><span class="vb-fr">une indigestion</span><span class="vb-en">indigestion</span></div>
            <div class="vb-item"><span class="vb-fr">pâle</span><span class="vb-en">pale</span></div>
            <div class="vb-item"><span class="vb-fr">fatigué(e)</span><span class="vb-en">tired</span></div>
            <div class="vb-item"><span class="vb-fr">le rhume</span><span class="vb-en">a cold</span></div>
            <div class="vb-item"><span class="vb-fr">enrhumé(e)</span><span class="vb-en">have a cold</span></div>
            <div class="vb-item"><span class="vb-fr">la pharmacienne</span><span class="vb-en">pharmacist</span></div>
            <div class="vb-item"><span class="vb-fr">un médicament</span><span class="vb-en">medicine</span></div>
            <div class="vb-item"><span class="vb-fr">homéopathique</span><span class="vb-en">homeopathic</span></div>
            <div class="vb-item"><span class="vb-fr">efficace</span><span class="vb-en">effective</span></div>
            <div class="vb-item"><span class="vb-fr">la toux</span><span class="vb-en">cough</span></div>
            <div class="vb-item"><span class="vb-fr">l'aspirine</span><span class="vb-en">aspirin</span></div>
            <div class="vb-item"><span class="vb-fr">dormir mal</span><span class="vb-en">sleep badly</span></div>
            <div class="vb-item"><span class="vb-fr">les cauchemars</span><span class="vb-en">nightmares</span></div>
            <div class="vb-item"><span class="vb-fr">les insomnies</span><span class="vb-en">insomnia</span></div>
            <div class="vb-item"><span class="vb-fr">stressé(e)</span><span class="vb-en">stressed</span></div>
            <div class="vb-item"><span class="vb-fr">déprimé(e)</span><span class="vb-en">depressed</span></div>
            <div class="vb-item"><span class="vb-fr">les soucis</span><span class="vb-en">worries</span></div>
            <div class="vb-item"><span class="vb-fr">divorcer</span><span class="vb-en">to divorce</span></div>
            <div class="vb-item"><span class="vb-fr">ausculter</span><span class="vb-en">to examine</span></div>
            <div class="vb-item"><span class="vb-fr">la tension</span><span class="vb-en">blood pressure</span></div>
            <div class="vb-item"><span class="vb-fr">un remontant</span><span class="vb-en">a tonic</span></div>
            <div class="vb-item"><span class="vb-fr">raisonnable</span><span class="vb-en">reasonable</span></div>
            <div class="vb-item"><span class="vb-fr">la confiance</span><span class="vb-en">confidence/trust</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 8 -->` },
  { id: 8, html: `<div class="vb-unit-group" data-vb-unit="8">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">8</div>
          <div class="vb-unit-title">Les relations humaines — Relationships</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Apparence & Caractère</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">les cheveux bouclés/raides</span><span class="vb-en">curly/straight hair</span></div>
            <div class="vb-item"><span class="vb-fr">rousse</span><span class="vb-en">red-haired</span></div>
            <div class="vb-item"><span class="vb-fr">costaud</span><span class="vb-en">stocky</span></div>
            <div class="vb-item"><span class="vb-fr">mince</span><span class="vb-en">slim</span></div>
            <div class="vb-item"><span class="vb-fr">un sourire</span><span class="vb-en">smile</span></div>
            <div class="vb-item"><span class="vb-fr">bavarder</span><span class="vb-en">to chat</span></div>
            <div class="vb-item"><span class="vb-fr">sympa</span><span class="vb-en">nice/friendly</span></div>
            <div class="vb-item"><span class="vb-fr">timide</span><span class="vb-en">shy</span></div>
          </div></div>
          <div class="vb-category"><h4>Relations & Description (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">un prétexte</span><span class="vb-en">an excuse</span></div>
            <div class="vb-item"><span class="vb-fr">joli(e)</span><span class="vb-en">pretty</span></div>
            <div class="vb-item"><span class="vb-fr">le charme</span><span class="vb-en">charm</span></div>
            <div class="vb-item"><span class="vb-fr">le regard</span><span class="vb-en">gaze/look</span></div>
            <div class="vb-item"><span class="vb-fr">inviter</span><span class="vb-en">to invite</span></div>
            <div class="vb-item"><span class="vb-fr">prendre un verre</span><span class="vb-en">have a drink</span></div>
            <div class="vb-item"><span class="vb-fr">remarquer</span><span class="vb-en">to notice</span></div>
            <div class="vb-item"><span class="vb-fr">échanger</span><span class="vb-en">to exchange</span></div>
            <div class="vb-item"><span class="vb-fr">éclater de rire</span><span class="vb-en">burst out laughing</span></div>
            <div class="vb-item"><span class="vb-fr">un restaurant de poisson</span><span class="vb-en">fish restaurant</span></div>
            <div class="vb-item"><span class="vb-fr">le foie gras</span><span class="vb-en">foie gras</span></div>
            <div class="vb-item"><span class="vb-fr">le coq au vin</span><span class="vb-en">coq au vin</span></div>
            <div class="vb-item"><span class="vb-fr">la viande</span><span class="vb-en">meat</span></div>
            <div class="vb-item"><span class="vb-fr">une sole</span><span class="vb-en">sole (fish)</span></div>
            <div class="vb-item"><span class="vb-fr">délicieux / délicieuse</span><span class="vb-en">delicious</span></div>
            <div class="vb-item"><span class="vb-fr">journaliste</span><span class="vb-en">journalist</span></div>
            <div class="vb-item"><span class="vb-fr">le monde entier</span><span class="vb-en">the entire world</span></div>
            <div class="vb-item"><span class="vb-fr">danser</span><span class="vb-en">to dance</span></div>
            <div class="vb-item"><span class="vb-fr">une jupe</span><span class="vb-en">skirt</span></div>
            <div class="vb-item"><span class="vb-fr">un haut</span><span class="vb-en">a top</span></div>
            <div class="vb-item"><span class="vb-fr">une veste</span><span class="vb-en">jacket</span></div>
            <div class="vb-item"><span class="vb-fr">un pantalon</span><span class="vb-en">trousers</span></div>
            <div class="vb-item"><span class="vb-fr">bien habillé(e)</span><span class="vb-en">well dressed</span></div>
            <div class="vb-item"><span class="vb-fr">une boutique de vêtements</span><span class="vb-en">clothes shop</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 9 -->` },
  { id: 9, html: `<div class="vb-unit-group" data-vb-unit="9">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">9</div>
          <div class="vb-unit-title">Les tâches domestiques — Home & Chores</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Ménage & Courses</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">faire le ménage</span><span class="vb-en">do the housework</span></div>
            <div class="vb-item"><span class="vb-fr">faire la vaisselle</span><span class="vb-en">do the washing-up</span></div>
            <div class="vb-item"><span class="vb-fr">faire les vitres</span><span class="vb-en">clean the windows</span></div>
            <div class="vb-item"><span class="vb-fr">faire le repassage</span><span class="vb-en">do the ironing</span></div>
            <div class="vb-item"><span class="vb-fr">faire les courses</span><span class="vb-en">do the shopping</span></div>
            <div class="vb-item"><span class="vb-fr">une grande surface</span><span class="vb-en">supermarket</span></div>
            <div class="vb-item"><span class="vb-fr">une droguerie</span><span class="vb-en">hardware/cleaning shop</span></div>
          </div></div>
          <div class="vb-category"><h4>Maison & Objets (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une femme de ménage</span><span class="vb-en">cleaner</span></div>
            <div class="vb-item"><span class="vb-fr">en forme</span><span class="vb-en">fit/in shape</span></div>
            <div class="vb-item"><span class="vb-fr">un produit de nettoyage</span><span class="vb-en">cleaning product</span></div>
            <div class="vb-item"><span class="vb-fr">nettoyer</span><span class="vb-en">to clean</span></div>
            <div class="vb-item"><span class="vb-fr">un escabeau</span><span class="vb-en">step-ladder</span></div>
            <div class="vb-item"><span class="vb-fr">monter sur</span><span class="vb-en">to stand on / climb</span></div>
            <div class="vb-item"><span class="vb-fr">prendre sa retraite</span><span class="vb-en">to retire</span></div>
            <div class="vb-item"><span class="vb-fr">dynamique</span><span class="vb-en">dynamic/energetic</span></div>
            <div class="vb-item"><span class="vb-fr">extraordinaire</span><span class="vb-en">extraordinary</span></div>
            <div class="vb-item"><span class="vb-fr">agréable</span><span class="vb-en">pleasant</span></div>
            <div class="vb-item"><span class="vb-fr">un amour</span><span class="vb-en">darling/love</span></div>
            <div class="vb-item"><span class="vb-fr">une brosse à dents</span><span class="vb-en">toothbrush</span></div>
            <div class="vb-item"><span class="vb-fr">le dentifrice</span><span class="vb-en">toothpaste</span></div>
            <div class="vb-item"><span class="vb-fr">une serviette</span><span class="vb-en">towel</span></div>
            <div class="vb-item"><span class="vb-fr">le savon</span><span class="vb-en">soap</span></div>
            <div class="vb-item"><span class="vb-fr">une chaise</span><span class="vb-en">chair</span></div>
            <div class="vb-item"><span class="vb-fr">désordonné(e)</span><span class="vb-en">messy</span></div>
            <div class="vb-item"><span class="vb-fr">maladroit(e)</span><span class="vb-en">clumsy</span></div>
            <div class="vb-item"><span class="vb-fr">supporter</span><span class="vb-en">to put up with</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 10 -->` },
  { id: 10, html: `<div class="vb-unit-group" data-vb-unit="10">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">10</div>
          <div class="vb-unit-title">Le patrimoine — Heritage</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Patrimoine & Vin</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le patrimoine</span><span class="vb-en">cultural heritage</span></div>
            <div class="vb-item"><span class="vb-fr">un château médiéval</span><span class="vb-en">medieval castle</span></div>
            <div class="vb-item"><span class="vb-fr">une cathédrale gothique</span><span class="vb-en">Gothic cathedral</span></div>
            <div class="vb-item"><span class="vb-fr">le domaine viticole</span><span class="vb-en">wine estate</span></div>
            <div class="vb-item"><span class="vb-fr">les vendanges</span><span class="vb-en">grape harvest</span></div>
            <div class="vb-item"><span class="vb-fr">une cave</span><span class="vb-en">wine cellar</span></div>
            <div class="vb-item"><span class="vb-fr">une dégustation</span><span class="vb-en">wine tasting</span></div>
          </div></div>
          <div class="vb-category"><h4>Tourisme & Régions (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">les vignes</span><span class="vb-en">vines/vineyards</span></div>
            <div class="vb-item"><span class="vb-fr">les raisins</span><span class="vb-en">grapes</span></div>
            <div class="vb-item"><span class="vb-fr">les vignerons</span><span class="vb-en">wine-growers</span></div>
            <div class="vb-item"><span class="vb-fr">les tonneaux</span><span class="vb-en">barrels</span></div>
            <div class="vb-item"><span class="vb-fr">rêver</span><span class="vb-en">to dream</span></div>
            <div class="vb-item"><span class="vb-fr">la vieille ville</span><span class="vb-en">old town</span></div>
            <div class="vb-item"><span class="vb-fr">restauré(e)</span><span class="vb-en">restored</span></div>
            <div class="vb-item"><span class="vb-fr">une église romane</span><span class="vb-en">Romanesque church</span></div>
            <div class="vb-item"><span class="vb-fr">un monument historique</span><span class="vb-en">historic monument</span></div>
            <div class="vb-item"><span class="vb-fr">gourmand(e)</span><span class="vb-en">food lover</span></div>
            <div class="vb-item"><span class="vb-fr">la gastronomie</span><span class="vb-en">gastronomy</span></div>
            <div class="vb-item"><span class="vb-fr">une foire</span><span class="vb-en">fair</span></div>
            <div class="vb-item"><span class="vb-fr">les fromages</span><span class="vb-en">cheeses</span></div>
            <div class="vb-item"><span class="vb-fr">le vin</span><span class="vb-en">wine</span></div>
            <div class="vb-item"><span class="vb-fr">une chambre d'hôte</span><span class="vb-en">bed and breakfast</span></div>
            <div class="vb-item"><span class="vb-fr">une ferme</span><span class="vb-en">farm</span></div>
            <div class="vb-item"><span class="vb-fr">la campagne</span><span class="vb-en">countryside</span></div>
            <div class="vb-item"><span class="vb-fr">charmant(e)</span><span class="vb-en">charming</span></div>
            <div class="vb-item"><span class="vb-fr">reposé(e)</span><span class="vb-en">rested</span></div>
            <div class="vb-item"><span class="vb-fr">somptueux / somptueuse</span><span class="vb-en">sumptuous</span></div>
            <div class="vb-item"><span class="vb-fr">merveilleux / merveilleuse</span><span class="vb-en">wonderful</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 11 -->` },
  { id: 11, html: `<div class="vb-unit-group" data-vb-unit="11">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">11</div>
          <div class="vb-unit-title">L'immobilier — Housing</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Logement</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">un appartement</span><span class="vb-en">flat/apartment</span></div>
            <div class="vb-item"><span class="vb-fr">un studio</span><span class="vb-en">studio flat</span></div>
            <div class="vb-item"><span class="vb-fr">un trois pièces</span><span class="vb-en">3-room flat</span></div>
            <div class="vb-item"><span class="vb-fr">louer</span><span class="vb-en">to rent</span></div>
            <div class="vb-item"><span class="vb-fr">l'ascenseur</span><span class="vb-en">lift/elevator</span></div>
            <div class="vb-item"><span class="vb-fr">le loyer</span><span class="vb-en">rent</span></div>
            <div class="vb-item"><span class="vb-fr">les charges</span><span class="vb-en">service charges</span></div>
            <div class="vb-item"><span class="vb-fr">la cuisine équipée</span><span class="vb-en">fitted kitchen</span></div>
          </div></div>
          <div class="vb-category"><h4>Logement & État (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une agence immobilière</span><span class="vb-en">real estate agency</span></div>
            <div class="vb-item"><span class="vb-fr">la surface</span><span class="vb-en">size (sq. metres)</span></div>
            <div class="vb-item"><span class="vb-fr">les pièces</span><span class="vb-en">rooms</span></div>
            <div class="vb-item"><span class="vb-fr">la cuisine</span><span class="vb-en">kitchen</span></div>
            <div class="vb-item"><span class="vb-fr">la salle de bains</span><span class="vb-en">bathroom</span></div>
            <div class="vb-item"><span class="vb-fr">le jardin</span><span class="vb-en">garden</span></div>
            <div class="vb-item"><span class="vb-fr">calme</span><span class="vb-en">quiet</span></div>
            <div class="vb-item"><span class="vb-fr">en bon état</span><span class="vb-en">in good condition</span></div>
            <div class="vb-item"><span class="vb-fr">en mauvais état</span><span class="vb-en">in bad condition</span></div>
            <div class="vb-item"><span class="vb-fr">repeindre</span><span class="vb-en">to repaint</span></div>
            <div class="vb-item"><span class="vb-fr">sombre</span><span class="vb-en">dark</span></div>
            <div class="vb-item"><span class="vb-fr">la lumière</span><span class="vb-en">light</span></div>
            <div class="vb-item"><span class="vb-fr">un bruit bizarre</span><span class="vb-en">strange noise</span></div>
            <div class="vb-item"><span class="vb-fr">la plomberie</span><span class="vb-en">plumbing</span></div>
            <div class="vb-item"><span class="vb-fr">une fuite</span><span class="vb-en">a leak</span></div>
            <div class="vb-item"><span class="vb-fr">les toilettes</span><span class="vb-en">toilet</span></div>
            <div class="vb-item"><span class="vb-fr">un placard</span><span class="vb-en">cupboard</span></div>
            <div class="vb-item"><span class="vb-fr">un réfrigérateur</span><span class="vb-en">fridge</span></div>
            <div class="vb-item"><span class="vb-fr">les travaux</span><span class="vb-en">work/repairs</span></div>
            <div class="vb-item"><span class="vb-fr">un mur</span><span class="vb-en">wall</span></div>
            <div class="vb-item"><span class="vb-fr">un arbre</span><span class="vb-en">tree</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 12 -->` },
  { id: 12, html: `<div class="vb-unit-group" data-vb-unit="12">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">12</div>
          <div class="vb-unit-title">Les lieux — City & Directions</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Directions & Transport</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">tout droit</span><span class="vb-en">straight ahead</span></div>
            <div class="vb-item"><span class="vb-fr">tourner à droite/gauche</span><span class="vb-en">turn right/left</span></div>
            <div class="vb-item"><span class="vb-fr">au coin</span><span class="vb-en">at the corner</span></div>
            <div class="vb-item"><span class="vb-fr">en face de</span><span class="vb-en">opposite</span></div>
            <div class="vb-item"><span class="vb-fr">à côté de</span><span class="vb-en">next to</span></div>
            <div class="vb-item"><span class="vb-fr">à pied</span><span class="vb-en">on foot</span></div>
            <div class="vb-item"><span class="vb-fr">la station de métro</span><span class="vb-en">metro station</span></div>
            <div class="vb-item"><span class="vb-fr">l'arrêt de bus</span><span class="vb-en">bus stop</span></div>
          </div></div>
          <div class="vb-category"><h4>Ville & Maison (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">la gare</span><span class="vb-en">station</span></div>
            <div class="vb-item"><span class="vb-fr">loin</span><span class="vb-en">far</span></div>
            <div class="vb-item"><span class="vb-fr">le pont</span><span class="vb-en">bridge</span></div>
            <div class="vb-item"><span class="vb-fr">traverser</span><span class="vb-en">to cross</span></div>
            <div class="vb-item"><span class="vb-fr">l'escalier</span><span class="vb-en">staircase</span></div>
            <div class="vb-item"><span class="vb-fr">le couloir</span><span class="vb-en">corridor</span></div>
            <div class="vb-item"><span class="vb-fr">l'étage</span><span class="vb-en">floor/storey</span></div>
            <div class="vb-item"><span class="vb-fr">en panne</span><span class="vb-en">broken down</span></div>
            <div class="vb-item"><span class="vb-fr">fatigant</span><span class="vb-en">tiring</span></div>
            <div class="vb-item"><span class="vb-fr">le salon</span><span class="vb-en">living room</span></div>
            <div class="vb-item"><span class="vb-fr">la salle à manger</span><span class="vb-en">dining room</span></div>
            <div class="vb-item"><span class="vb-fr">l'entrée</span><span class="vb-en">hallway</span></div>
            <div class="vb-item"><span class="vb-fr">la porte</span><span class="vb-en">door</span></div>
            <div class="vb-item"><span class="vb-fr">un tableau</span><span class="vb-en">picture/painting</span></div>
            <div class="vb-item"><span class="vb-fr">les étagères</span><span class="vb-en">shelves</span></div>
            <div class="vb-item"><span class="vb-fr">les cartons</span><span class="vb-en">boxes</span></div>
            <div class="vb-item"><span class="vb-fr">un canapé</span><span class="vb-en">sofa</span></div>
            <div class="vb-item"><span class="vb-fr">un ordinateur</span><span class="vb-en">computer</span></div>
            <div class="vb-item"><span class="vb-fr">une table basse</span><span class="vb-en">coffee table</span></div>
            <div class="vb-item"><span class="vb-fr">un lit</span><span class="vb-en">bed</span></div>
            <div class="vb-item"><span class="vb-fr">la grippe</span><span class="vb-en">flu</span></div>
            <div class="vb-item"><span class="vb-fr">tout installer</span><span class="vb-en">install everything</span></div>
            <div class="vb-item"><span class="vb-fr">les brocantes</span><span class="vb-en">antique fairs</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 13 -->` },
  { id: 13, html: `<div class="vb-unit-group" data-vb-unit="13">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">13</div>
          <div class="vb-unit-title">Au bureau — Professional</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Bureau & Réunions</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">une réunion</span><span class="vb-en">a meeting</span></div>
            <div class="vb-item"><span class="vb-fr">reporter</span><span class="vb-en">to reschedule</span></div>
            <div class="vb-item"><span class="vb-fr">un fournisseur</span><span class="vb-en">supplier</span></div>
            <div class="vb-item"><span class="vb-fr">la fiche technique</span><span class="vb-en">technical sheet</span></div>
            <div class="vb-item"><span class="vb-fr">une pièce jointe</span><span class="vb-en">attachment</span></div>
            <div class="vb-item"><span class="vb-fr">le/la responsable</span><span class="vb-en">manager</span></div>
            <div class="vb-item"><span class="vb-fr">l'entreprise</span><span class="vb-en">company</span></div>
          </div></div>
          <div class="vb-category"><h4>Bureau & Communication (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">les présentations</span><span class="vb-en">introductions</span></div>
            <div class="vb-item"><span class="vb-fr">les collaborateurs</span><span class="vb-en">colleagues</span></div>
            <div class="vb-item"><span class="vb-fr">enchanté(e)</span><span class="vb-en">pleased to meet you</span></div>
            <div class="vb-item"><span class="vb-fr">confirmer</span><span class="vb-en">to confirm</span></div>
            <div class="vb-item"><span class="vb-fr">l'adresse électronique</span><span class="vb-en">email address</span></div>
            <div class="vb-item"><span class="vb-fr">l'ordre du jour</span><span class="vb-en">agenda (meeting)</span></div>
            <div class="vb-item"><span class="vb-fr">les chiffres du trimestre</span><span class="vb-en">quarterly figures</span></div>
            <div class="vb-item"><span class="vb-fr">les coûts de fabrication</span><span class="vb-en">production costs</span></div>
            <div class="vb-item"><span class="vb-fr">augmenter</span><span class="vb-en">to increase</span></div>
            <div class="vb-item"><span class="vb-fr">les résultats</span><span class="vb-en">results</span></div>
            <div class="vb-item"><span class="vb-fr">un rapport complet</span><span class="vb-en">complete report</span></div>
            <div class="vb-item"><span class="vb-fr">les concurrents</span><span class="vb-en">competitors</span></div>
            <div class="vb-item"><span class="vb-fr">les dossiers</span><span class="vb-en">files</span></div>
            <div class="vb-item"><span class="vb-fr">disponible</span><span class="vb-en">available</span></div>
            <div class="vb-item"><span class="vb-fr">un fabricant</span><span class="vb-en">manufacturer</span></div>
            <div class="vb-item"><span class="vb-fr">une confirmation</span><span class="vb-en">confirmation</span></div>
            <div class="vb-item"><span class="vb-fr">un document</span><span class="vb-en">document</span></div>
            <div class="vb-item"><span class="vb-fr">transmettre</span><span class="vb-en">to send/forward</span></div>
            <div class="vb-item"><span class="vb-fr">merci par avance</span><span class="vb-en">thank you in advance</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 14 -->` },
  { id: 14, html: `<div class="vb-unit-group" data-vb-unit="14">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">14</div>
          <div class="vb-unit-title">Les gens — People & Character</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Personnalité & Goûts</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">parler de ses goûts</span><span class="vb-en">talk about tastes</span></div>
            <div class="vb-item"><span class="vb-fr">la personnalité</span><span class="vb-en">personality</span></div>
            <div class="vb-item"><span class="vb-fr">savoir ≠ connaître</span><span class="vb-en">know facts ≠ know people/places</span></div>
            <div class="vb-item"><span class="vb-fr">timide / bavard(e)</span><span class="vb-en">shy / talkative</span></div>
            <div class="vb-item"><span class="vb-fr">la laideur ≠ la beauté</span><span class="vb-en">ugliness ≠ beauty</span></div>
            <div class="vb-item"><span class="vb-fr">C'est quelqu'un de bien.</span><span class="vb-en">He/She is a good person.</span></div>
          </div></div>
          <div class="vb-category"><h4>Caractère & Rencontres (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">les collègues</span><span class="vb-en">colleagues</span></div>
            <div class="vb-item"><span class="vb-fr">antipathique</span><span class="vb-en">unpleasant</span></div>
            <div class="vb-item"><span class="vb-fr">faux / fausse</span><span class="vb-en">fake</span></div>
            <div class="vb-item"><span class="vb-fr">froid(e)</span><span class="vb-en">cold</span></div>
            <div class="vb-item"><span class="vb-fr">distant(e)</span><span class="vb-en">distant</span></div>
            <div class="vb-item"><span class="vb-fr">arrogant(e)</span><span class="vb-en">arrogant</span></div>
            <div class="vb-item"><span class="vb-fr">joyeux / joyeuse</span><span class="vb-en">cheerful</span></div>
            <div class="vb-item"><span class="vb-fr">la bonne humeur</span><span class="vb-en">good mood</span></div>
            <div class="vb-item"><span class="vb-fr">drôle</span><span class="vb-en">funny</span></div>
            <div class="vb-item"><span class="vb-fr">l'humour</span><span class="vb-en">humour</span></div>
            <div class="vb-item"><span class="vb-fr">le grand amour</span><span class="vb-en">great love</span></div>
            <div class="vb-item"><span class="vb-fr">le cinéma</span><span class="vb-en">cinema</span></div>
            <div class="vb-item"><span class="vb-fr">une boîte (de nuit)</span><span class="vb-en">nightclub</span></div>
            <div class="vb-item"><span class="vb-fr">un pique-nique</span><span class="vb-en">picnic</span></div>
            <div class="vb-item"><span class="vb-fr">refuser</span><span class="vb-en">to refuse</span></div>
            <div class="vb-item"><span class="vb-fr">le comportement</span><span class="vb-en">behaviour</span></div>
            <div class="vb-item"><span class="vb-fr">déranger</span><span class="vb-en">to disturb</span></div>
            <div class="vb-item"><span class="vb-fr">divorcé(e)</span><span class="vb-en">divorced</span></div>
            <div class="vb-item"><span class="vb-fr">intelligent(e)</span><span class="vb-en">intelligent</span></div>
            <div class="vb-item"><span class="vb-fr">sympathique</span><span class="vb-en">nice/likeable</span></div>
            <div class="vb-item"><span class="vb-fr">réservé(e)</span><span class="vb-en">reserved</span></div>
            <div class="vb-item"><span class="vb-fr">le meilleur ami / la meilleure amie</span><span class="vb-en">best friend</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 15 -->` },
  { id: 15, html: `<div class="vb-unit-group" data-vb-unit="15">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">15</div>
          <div class="vb-unit-title">Le sport — Sport & Fitness</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Sports & Activités</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le ski</span><span class="vb-en">skiing</span></div>
            <div class="vb-item"><span class="vb-fr">la randonnée</span><span class="vb-en">hiking</span></div>
            <div class="vb-item"><span class="vb-fr">la natation</span><span class="vb-en">swimming</span></div>
            <div class="vb-item"><span class="vb-fr">le cyclisme</span><span class="vb-en">cycling</span></div>
            <div class="vb-item"><span class="vb-fr">un entraînement</span><span class="vb-en">training</span></div>
            <div class="vb-item"><span class="vb-fr">les sports d'équipe</span><span class="vb-en">team sports</span></div>
            <div class="vb-item"><span class="vb-fr">les bienfaits du sport</span><span class="vb-en">benefits of sport</span></div>
          </div></div>
          <div class="vb-category"><h4>Sports & Montagne (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">les sports d'hiver</span><span class="vb-en">winter sports</span></div>
            <div class="vb-item"><span class="vb-fr">les skis</span><span class="vb-en">skis</span></div>
            <div class="vb-item"><span class="vb-fr">apprendre</span><span class="vb-en">to learn</span></div>
            <div class="vb-item"><span class="vb-fr">un accident</span><span class="vb-en">accident</span></div>
            <div class="vb-item"><span class="vb-fr">un(e) débutant(e)</span><span class="vb-en">beginner</span></div>
            <div class="vb-item"><span class="vb-fr">un moniteur</span><span class="vb-en">instructor</span></div>
            <div class="vb-item"><span class="vb-fr">les pistes</span><span class="vb-en">runs/slopes</span></div>
            <div class="vb-item"><span class="vb-fr">les remontées mécaniques</span><span class="vb-en">ski lifts</span></div>
            <div class="vb-item"><span class="vb-fr">le vertige</span><span class="vb-en">vertigo/dizziness</span></div>
            <div class="vb-item"><span class="vb-fr">le ski de fond</span><span class="vb-en">cross-country skiing</span></div>
            <div class="vb-item"><span class="vb-fr">se casser la jambe</span><span class="vb-en">break one's leg</span></div>
            <div class="vb-item"><span class="vb-fr">tomber</span><span class="vb-en">to fall</span></div>
            <div class="vb-item"><span class="vb-fr">inquiet / inquiète</span><span class="vb-en">worried</span></div>
            <div class="vb-item"><span class="vb-fr">calme-toi !</span><span class="vb-en">calm down!</span></div>
            <div class="vb-item"><span class="vb-fr">le foot / le football</span><span class="vb-en">football</span></div>
            <div class="vb-item"><span class="vb-fr">la randonnée en montagne</span><span class="vb-en">mountain hiking</span></div>
            <div class="vb-item"><span class="vb-fr">un sac à dos</span><span class="vb-en">backpack</span></div>
            <div class="vb-item"><span class="vb-fr">marcher</span><span class="vb-en">to walk</span></div>
            <div class="vb-item"><span class="vb-fr">le rugby</span><span class="vb-en">rugby</span></div>
            <div class="vb-item"><span class="vb-fr">l'esprit d'équipe</span><span class="vb-en">team spirit</span></div>
            <div class="vb-item"><span class="vb-fr">le dynamisme</span><span class="vb-en">dynamism</span></div>
            <div class="vb-item"><span class="vb-fr">le paysage</span><span class="vb-en">scenery</span></div>
            <div class="vb-item"><span class="vb-fr">le vélo</span><span class="vb-en">cycling/bicycle</span></div>
            <div class="vb-item"><span class="vb-fr">la marche à pied</span><span class="vb-en">walking</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 16 -->` },
  { id: 16, html: `<div class="vb-unit-group" data-vb-unit="16">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">16</div>
          <div class="vb-unit-title">L'entreprise — Career</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Carrière & Emploi</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">l'entreprise</span><span class="vb-en">company</span></div>
            <div class="vb-item"><span class="vb-fr">un entretien d'embauche</span><span class="vb-en">job interview</span></div>
            <div class="vb-item"><span class="vb-fr">un CV</span><span class="vb-en">résumé/CV</span></div>
            <div class="vb-item"><span class="vb-fr">une candidature</span><span class="vb-en">application</span></div>
            <div class="vb-item"><span class="vb-fr">le poste</span><span class="vb-en">position/job</span></div>
            <div class="vb-item"><span class="vb-fr">la formation</span><span class="vb-en">training/degree</span></div>
            <div class="vb-item"><span class="vb-fr">les perspectives d'évolution</span><span class="vb-en">career prospects</span></div>
          </div></div>
          <div class="vb-category"><h4>Parcours professionnel (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le parcours professionnel</span><span class="vb-en">professional background</span></div>
            <div class="vb-item"><span class="vb-fr">les études de commerce</span><span class="vb-en">business studies</span></div>
            <div class="vb-item"><span class="vb-fr">un vendeur / une vendeuse</span><span class="vb-en">salesperson</span></div>
            <div class="vb-item"><span class="vb-fr">faire faillite</span><span class="vb-en">go bankrupt</span></div>
            <div class="vb-item"><span class="vb-fr">le chômage</span><span class="vb-en">unemployment</span></div>
            <div class="vb-item"><span class="vb-fr">rapidement</span><span class="vb-en">quickly</span></div>
            <div class="vb-item"><span class="vb-fr">un attaché commercial</span><span class="vb-en">sales representative</span></div>
            <div class="vb-item"><span class="vb-fr">une promotion</span><span class="vb-en">promotion</span></div>
            <div class="vb-item"><span class="vb-fr">responsable des ventes</span><span class="vb-en">sales manager</span></div>
            <div class="vb-item"><span class="vb-fr">élargir</span><span class="vb-en">to broaden</span></div>
            <div class="vb-item"><span class="vb-fr">les compétences</span><span class="vb-en">skills</span></div>
            <div class="vb-item"><span class="vb-fr">les responsabilités</span><span class="vb-en">responsibilities</span></div>
            <div class="vb-item"><span class="vb-fr">bilingue</span><span class="vb-en">bilingual</span></div>
            <div class="vb-item"><span class="vb-fr">les outils informatiques</span><span class="vb-en">IT tools</span></div>
            <div class="vb-item"><span class="vb-fr">maîtriser</span><span class="vb-en">to master/know well</span></div>
            <div class="vb-item"><span class="vb-fr">les logiciels</span><span class="vb-en">software</span></div>
            <div class="vb-item"><span class="vb-fr">le salaire brut</span><span class="vb-en">gross salary</span></div>
            <div class="vb-item"><span class="vb-fr">le statut de cadre</span><span class="vb-en">executive status</span></div>
            <div class="vb-item"><span class="vb-fr">un stage</span><span class="vb-en">internship/course</span></div>
            <div class="vb-item"><span class="vb-fr">les techniques de vente</span><span class="vb-en">sales techniques</span></div>
            <div class="vb-item"><span class="vb-fr">l'usine</span><span class="vb-en">factory</span></div>
            <div class="vb-item"><span class="vb-fr">les commerciaux</span><span class="vb-en">sales staff</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 17 -->` },
  { id: 17, html: `<div class="vb-unit-group" data-vb-unit="17">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">17</div>
          <div class="vb-unit-title">Le bricolage — DIY & Home</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Outils & Réparations</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le bricolage</span><span class="vb-en">DIY / home improvement</span></div>
            <div class="vb-item"><span class="vb-fr">une perceuse</span><span class="vb-en">drill</span></div>
            <div class="vb-item"><span class="vb-fr">un tournevis</span><span class="vb-en">screwdriver</span></div>
            <div class="vb-item"><span class="vb-fr">un marteau</span><span class="vb-en">hammer</span></div>
            <div class="vb-item"><span class="vb-fr">une fuite</span><span class="vb-en">a leak</span></div>
            <div class="vb-item"><span class="vb-fr">l'évier</span><span class="vb-en">kitchen sink</span></div>
            <div class="vb-item"><span class="vb-fr">une ampoule</span><span class="vb-en">light bulb</span></div>
            <div class="vb-item"><span class="vb-fr">réparer</span><span class="vb-en">to repair</span></div>
          </div></div>
          <div class="vb-category"><h4>Bricolage & Maison (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">planter des clous</span><span class="vb-en">hammer in nails</span></div>
            <div class="vb-item"><span class="vb-fr">les clous</span><span class="vb-en">nails</span></div>
            <div class="vb-item"><span class="vb-fr">la boîte à outils</span><span class="vb-en">toolbox</span></div>
            <div class="vb-item"><span class="vb-fr">une planche</span><span class="vb-en">plank</span></div>
            <div class="vb-item"><span class="vb-fr">une échelle</span><span class="vb-en">ladder</span></div>
            <div class="vb-item"><span class="vb-fr">un voisin serviable</span><span class="vb-en">helpful neighbour</span></div>
            <div class="vb-item"><span class="vb-fr">fixer des étagères</span><span class="vb-en">fix shelves</span></div>
            <div class="vb-item"><span class="vb-fr">faire des trous</span><span class="vb-en">make holes</span></div>
            <div class="vb-item"><span class="vb-fr">bricoleur / bricoleuse</span><span class="vb-en">handy/DIY person</span></div>
            <div class="vb-item"><span class="vb-fr">le matériel</span><span class="vb-en">equipment</span></div>
            <div class="vb-item"><span class="vb-fr">une ampoule grillée</span><span class="vb-en">blown bulb</span></div>
            <div class="vb-item"><span class="vb-fr">une lampe</span><span class="vb-en">lamp</span></div>
            <div class="vb-item"><span class="vb-fr">brancher</span><span class="vb-en">to plug in</span></div>
            <div class="vb-item"><span class="vb-fr">une rallonge électrique</span><span class="vb-en">extension cord</span></div>
            <div class="vb-item"><span class="vb-fr">le fil électrique</span><span class="vb-en">electrical wire</span></div>
            <div class="vb-item"><span class="vb-fr">dangereux / dangereuse</span><span class="vb-en">dangerous</span></div>
            <div class="vb-item"><span class="vb-fr">l'installation</span><span class="vb-en">wiring/installation</span></div>
            <div class="vb-item"><span class="vb-fr">trop ancien(ne)</span><span class="vb-en">too old</span></div>
            <div class="vb-item"><span class="vb-fr">un électricien</span><span class="vb-en">electrician</span></div>
            <div class="vb-item"><span class="vb-fr">un plombier</span><span class="vb-en">plumber</span></div>
            <div class="vb-item"><span class="vb-fr">la décoration</span><span class="vb-en">decoration</span></div>
            <div class="vb-item"><span class="vb-fr">jaune pâle</span><span class="vb-en">pale yellow</span></div>
            <div class="vb-item"><span class="vb-fr">vert clair</span><span class="vb-en">light green</span></div>
            <div class="vb-item"><span class="vb-fr">la moquette</span><span class="vb-en">carpet</span></div>
            <div class="vb-item"><span class="vb-fr">les soldes</span><span class="vb-en">sales</span></div>
            <div class="vb-item"><span class="vb-fr">crevé(e)</span><span class="vb-en">exhausted</span></div>
            <div class="vb-item"><span class="vb-fr">emprunter</span><span class="vb-en">to borrow</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 18 -->` },
  { id: 18, html: `<div class="vb-unit-group" data-vb-unit="18">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">18</div>
          <div class="vb-unit-title">La météo — Weather</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Météo & Climat</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le soleil / la pluie</span><span class="vb-en">sun / rain</span></div>
            <div class="vb-item"><span class="vb-fr">la neige / le vent</span><span class="vb-en">snow / wind</span></div>
            <div class="vb-item"><span class="vb-fr">le brouillard</span><span class="vb-en">fog</span></div>
            <div class="vb-item"><span class="vb-fr">la température</span><span class="vb-en">temperature</span></div>
            <div class="vb-item"><span class="vb-fr">le bulletin météo</span><span class="vb-en">weather forecast</span></div>
            <div class="vb-item"><span class="vb-fr">bronzer</span><span class="vb-en">to sunbathe</span></div>
            <div class="vb-item"><span class="vb-fr">la plage</span><span class="vb-en">beach</span></div>
            <div class="vb-item"><span class="vb-fr">le changement climatique</span><span class="vb-en">climate change</span></div>
          </div></div>
          <div class="vb-category"><h4>Météo & Vacances (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">chaud</span><span class="vb-en">warm/hot</span></div>
            <div class="vb-item"><span class="vb-fr">froid</span><span class="vb-en">cold</span></div>
            <div class="vb-item"><span class="vb-fr">les degrés</span><span class="vb-en">degrees</span></div>
            <div class="vb-item"><span class="vb-fr">les baigneurs</span><span class="vb-en">swimmers</span></div>
            <div class="vb-item"><span class="vb-fr">vide</span><span class="vb-en">empty</span></div>
            <div class="vb-item"><span class="vb-fr">un monde fou</span><span class="vb-en">crowded</span></div>
            <div class="vb-item"><span class="vb-fr">la crème solaire</span><span class="vb-en">sunscreen</span></div>
            <div class="vb-item"><span class="vb-fr">les coups de soleil</span><span class="vb-en">sunburn</span></div>
            <div class="vb-item"><span class="vb-fr">se baigner</span><span class="vb-en">to swim/bathe</span></div>
            <div class="vb-item"><span class="vb-fr">entrer doucement</span><span class="vb-en">go in gently</span></div>
            <div class="vb-item"><span class="vb-fr">une question d'habitude</span><span class="vb-en">matter of habit</span></div>
            <div class="vb-item"><span class="vb-fr">la glace</span><span class="vb-en">ice</span></div>
            <div class="vb-item"><span class="vb-fr">l'hiver</span><span class="vb-en">winter</span></div>
            <div class="vb-item"><span class="vb-fr">le mistral</span><span class="vb-en">mistral wind</span></div>
            <div class="vb-item"><span class="vb-fr">assez doux</span><span class="vb-en">quite mild</span></div>
            <div class="vb-item"><span class="vb-fr">les nuages</span><span class="vb-en">clouds</span></div>
            <div class="vb-item"><span class="vb-fr">gris</span><span class="vb-en">grey</span></div>
            <div class="vb-item"><span class="vb-fr">triste</span><span class="vb-en">sad</span></div>
            <div class="vb-item"><span class="vb-fr">sourd(e)</span><span class="vb-en">deaf</span></div>
            <div class="vb-item"><span class="vb-fr">tant mieux</span><span class="vb-en">all the better</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 19 -->` },
  { id: 19, html: `<div class="vb-unit-group" data-vb-unit="19">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">19</div>
          <div class="vb-unit-title">La fac — University</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Université & Études</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">la fac (l'université)</span><span class="vb-en">university</span></div>
            <div class="vb-item"><span class="vb-fr">un exposé</span><span class="vb-en">a presentation</span></div>
            <div class="vb-item"><span class="vb-fr">une bibliothèque</span><span class="vb-en">library</span></div>
            <div class="vb-item"><span class="vb-fr">le restaurant U (RU)</span><span class="vb-en">student cafeteria</span></div>
            <div class="vb-item"><span class="vb-fr">étudier</span><span class="vb-en">to study</span></div>
            <div class="vb-item"><span class="vb-fr">venir de + infinitif</span><span class="vb-en">to have just done</span></div>
            <div class="vb-item"><span class="vb-fr">demander / donner une opinion</span><span class="vb-en">ask/give an opinion</span></div>
          </div></div>
          <div class="vb-category"><h4>Université & Études (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le secrétariat</span><span class="vb-en">secretary's office</span></div>
            <div class="vb-item"><span class="vb-fr">les inscriptions</span><span class="vb-en">enrolment</span></div>
            <div class="vb-item"><span class="vb-fr">les cours</span><span class="vb-en">classes/courses</span></div>
            <div class="vb-item"><span class="vb-fr">un(e) prof</span><span class="vb-en">lecturer/teacher</span></div>
            <div class="vb-item"><span class="vb-fr">la littérature</span><span class="vb-en">literature</span></div>
            <div class="vb-item"><span class="vb-fr">passionnant(e)</span><span class="vb-en">fascinating</span></div>
            <div class="vb-item"><span class="vb-fr">enseigner</span><span class="vb-en">to teach</span></div>
            <div class="vb-item"><span class="vb-fr">les programmes d'échanges</span><span class="vb-en">exchange programmes</span></div>
            <div class="vb-item"><span class="vb-fr">partir à l'étranger</span><span class="vb-en">go abroad</span></div>
            <div class="vb-item"><span class="vb-fr">l'expérience</span><span class="vb-en">experience</span></div>
            <div class="vb-item"><span class="vb-fr">bénéfique</span><span class="vb-en">beneficial</span></div>
            <div class="vb-item"><span class="vb-fr">enrichissant(e)</span><span class="vb-en">enriching</span></div>
            <div class="vb-item"><span class="vb-fr">les crédits</span><span class="vb-en">credits</span></div>
            <div class="vb-item"><span class="vb-fr">la mobilité internationale</span><span class="vb-en">international mobility</span></div>
            <div class="vb-item"><span class="vb-fr">un semestre</span><span class="vb-en">semester</span></div>
            <div class="vb-item"><span class="vb-fr">découvrir</span><span class="vb-en">to discover</span></div>
            <div class="vb-item"><span class="vb-fr">un projet</span><span class="vb-en">a project</span></div>
            <div class="vb-item"><span class="vb-fr">le budget</span><span class="vb-en">budget</span></div>
            <div class="vb-item"><span class="vb-fr">les fonds</span><span class="vb-en">funding</span></div>
            <div class="vb-item"><span class="vb-fr">développer</span><span class="vb-en">to develop</span></div>
            <div class="vb-item"><span class="vb-fr">débordé(e)</span><span class="vb-en">swamped/overwhelmed</span></div>
            <div class="vb-item"><span class="vb-fr">la bibliographie</span><span class="vb-en">bibliography</span></div>
            <div class="vb-item"><span class="vb-fr">les notes du cours</span><span class="vb-en">course notes</span></div>
            <div class="vb-item"><span class="vb-fr">rater</span><span class="vb-en">to miss/fail</span></div>
            <div class="vb-item"><span class="vb-fr">hésiter</span><span class="vb-en">to hesitate</span></div>
            <div class="vb-item"><span class="vb-fr">recommander</span><span class="vb-en">to recommend</span></div>
          </div></div>
        </div>
      </div>

      <!-- UNIT 20 -->` },
  { id: 20, html: `<div class="vb-unit-group" data-vb-unit="20">
        <div class="vb-unit-header" onclick="toggleVbUnit(this)">
          <div class="vb-unit-num">20</div>
          <div class="vb-unit-title">La ville — City Life</div>
          <span class="vb-count"></span>
          <svg class="vb-unit-chevron" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="vb-unit-body">
          <div class="vb-category"><h4>Ville & Société</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">rénover</span><span class="vb-en">to renovate</span></div>
            <div class="vb-item"><span class="vb-fr">la réussite</span><span class="vb-en">success</span></div>
            <div class="vb-item"><span class="vb-fr">regretter</span><span class="vb-en">to miss/regret</span></div>
            <div class="vb-item"><span class="vb-fr">évoluer</span><span class="vb-en">to change/evolve</span></div>
            <div class="vb-item"><span class="vb-fr">les transports en commun</span><span class="vb-en">public transport</span></div>
            <div class="vb-item"><span class="vb-fr">les lieux culturels</span><span class="vb-en">cultural venues</span></div>
            <div class="vb-item"><span class="vb-fr">les problèmes sociaux</span><span class="vb-en">social issues</span></div>
          </div></div>
          <div class="vb-category"><h4>Ville & Société (dialogues)</h4><div class="vb-grid">
            <div class="vb-item"><span class="vb-fr">le musée</span><span class="vb-en">museum</span></div>
            <div class="vb-item"><span class="vb-fr">le bâtiment</span><span class="vb-en">building</span></div>
            <div class="vb-item"><span class="vb-fr">restructurer</span><span class="vb-en">to restructure</span></div>
            <div class="vb-item"><span class="vb-fr">superbe</span><span class="vb-en">superb</span></div>
            <div class="vb-item"><span class="vb-fr">la lumière du jour</span><span class="vb-en">daylight</span></div>
            <div class="vb-item"><span class="vb-fr">l'architecte</span><span class="vb-en">architect</span></div>
            <div class="vb-item"><span class="vb-fr">fier / fière</span><span class="vb-en">proud</span></div>
            <div class="vb-item"><span class="vb-fr">inaugurer</span><span class="vb-en">to inaugurate</span></div>
            <div class="vb-item"><span class="vb-fr">émerveillé(e)</span><span class="vb-en">amazed</span></div>
            <div class="vb-item"><span class="vb-fr">le quartier</span><span class="vb-en">neighbourhood</span></div>
            <div class="vb-item"><span class="vb-fr">réhabiliter</span><span class="vb-en">to renovate/rehabilitate</span></div>
            <div class="vb-item"><span class="vb-fr">sale</span><span class="vb-en">dirty</span></div>
            <div class="vb-item"><span class="vb-fr">pauvre</span><span class="vb-en">poor</span></div>
            <div class="vb-item"><span class="vb-fr">les commerces</span><span class="vb-en">shops</span></div>
            <div class="vb-item"><span class="vb-fr">abandonné(e)</span><span class="vb-en">abandoned</span></div>
            <div class="vb-item"><span class="vb-fr">les logements</span><span class="vb-en">housing</span></div>
            <div class="vb-item"><span class="vb-fr">la criminalité</span><span class="vb-en">crime</span></div>
            <div class="vb-item"><span class="vb-fr">le trafic de drogue</span><span class="vb-en">drug trafficking</span></div>
            <div class="vb-item"><span class="vb-fr">les vols</span><span class="vb-en">thefts</span></div>
            <div class="vb-item"><span class="vb-fr">un quartier sensible</span><span class="vb-en">sensitive neighbourhood</span></div>
            <div class="vb-item"><span class="vb-fr">un H.L.M.</span><span class="vb-en">council housing</span></div>
            <div class="vb-item"><span class="vb-fr">détruire</span><span class="vb-en">to demolish</span></div>
            <div class="vb-item"><span class="vb-fr">remplacer</span><span class="vb-en">to replace</span></div>
            <div class="vb-item"><span class="vb-fr">confortable</span><span class="vb-en">comfortable</span></div>
            <div class="vb-item"><span class="vb-fr">un inconvénient</span><span class="vb-en">downside</span></div>
            <div class="vb-item"><span class="vb-fr">le marché</span><span class="vb-en">market</span></div>
            <div class="vb-item"><span class="vb-fr">les œufs</span><span class="vb-en">eggs</span></div>
            <div class="vb-item"><span class="vb-fr">le lait frais</span><span class="vb-en">fresh milk</span></div>
            <div class="vb-item"><span class="vb-fr">un chien</span><span class="vb-en">dog</span></div>
            <div class="vb-item"><span class="vb-fr">un chemin de terre</span><span class="vb-en">dirt track</span></div>
            <div class="vb-item"><span class="vb-fr">le bon vieux temps</span><span class="vb-en">the good old days</span></div>
            <div class="vb-item"><span class="vb-fr">la télévision</span><span class="vb-en">television</span></div>
            <div class="vb-item"><span class="vb-fr">lire</span><span class="vb-en">to read</span></div>
            <div class="vb-item"><span class="vb-fr">écrire</span><span class="vb-en">to write</span></div>
            <div class="vb-item"><span class="vb-fr">malheureusement</span><span class="vb-en">unfortunately</span></div>
            <div class="vb-item"><span class="vb-fr">heureusement</span><span class="vb-en">fortunately</span></div>
            <div class="vb-item"><span class="vb-fr">ennuyeux / ennuyeuse</span><span class="vb-en">boring</span></div>
            <div class="vb-item"><span class="vb-fr">malade</span><span class="vb-en">ill/sick</span></div>
            <div class="vb-item"><span class="vb-fr">la pharmacie</span><span class="vb-en">pharmacy</span></div>
            <div class="vb-item"><span class="vb-fr">l'animation</span><span class="vb-en">buzz/liveliness</span></div>
          </div></div>
        </div>
      </div>

    </div><!-- end vocabulary panel -->` }
];
