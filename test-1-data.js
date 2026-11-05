// Révision ciblée à partir des deux TD1 et du dossier ETUDE.
window.TEST_ONE = {
  amvr: {
    title: "AMVR · Simulation et réalité virtuelle",
    courses: [
      ["VR Concept Definition · § 1–2", "19i-pFzocJ85Cc4NzOLtoD9Y3uwgCQkhG"],
      ["Immersion · § 1–3", "1BknT0A6K_6JeHmeKYhdUPC-_mnOLk6tW"]
    ],
    lesson: `
**Modéliser**, c’est choisir les éléments, variables, relations et limites qui représentent le système. **Simuler**, c’est exécuter ce modèle avec des conditions initiales et des commandes pour observer son évolution. Pour la grue, les équations de balancement forment une partie du modèle. La courbe de balancement obtenue après une rafale est un résultat de simulation.

==bleu:Define the System → Build the Model → Implement in Code → Run the Simulation → Analyze Results → Refine & Repeat.== Définir fixe la mission et le périmètre. Modéliser fixe les règles. Implémenter les rend exécutables. Exécuter produit des données. Analyser les interprète. Raffiner modifie le modèle et vérifie l’amélioration par un nouvel essai.

**En VR**, la boucle est bidirectionnelle et synchronisée. Action de l’utilisateur → capture par les capteurs → mise à jour du monde → retours visuels, sonores ou haptiques → nouvelle action. Le **scénario de communication** définit les commandes et retours. Le **scénario de contenu** organise les missions et événements. L’immersion combine dispositif, monde 3D cohérent, scénario et engagement. La présence est le sentiment d’être dans ce monde.
`,
    td: "td1-amvr.jpg",
    questions: [
      ["Q1 · Modélisation et simulation", "Comparer définition, objectif, objet d’étude, résultat et lien entre les deux.", `
| Aspect | Modélisation | Simulation |
| --- | --- | --- |
| Définition | Construction d’une représentation du système | Exécution de cette représentation dans des conditions données |
| Objectif | Choisir les aspects utiles et leurs règles | Étudier des comportements, comparer des scénarios ou entraîner |
| Objet | Structure, état, variables et relations | Évolution de l’état pendant l’essai |
| Résultat | Modèle géométrique, mathématique ou logique | Trajectoires, courbes, événements et indicateurs |
| Lien | Donne les règles utilisées par le simulateur | Produit des observations qui permettent de réviser le modèle |
*Modeling defines how the system is represented. Simulation executes the model to study its behavior under specified conditions.*
`],
      ["Q2 · Pipeline du simulateur de grue", "Décrire les six étapes. Pour chacune, donner l’objectif, les actions, les outils logiciels et matériels et les acteurs.", `
| Étape | Objectif | Actions | Outils | Acteurs |
| --- | --- | --- | --- | --- |
| 1 · Define the System | Délimiter le système et les objectifs | Recenser mât, flèche, chariot, contrepoids, cabine, moteurs, câble, commandes et obstacles. Fixer les critères de sécurité et d’oscillation. | Plans, documentation, observations sur chantier | Grutier, formateur, ingénieur sécurité |
| 2 · Build the Model | Formaliser structure et dynamique | Définir angle de flèche, position du chariot, longueur du câble et masse. Représenter gravité, vent, oscillations, limites et collisions. | Schémas, CAO, équations de la charge suspendue | Ingénieur mécanique, modeleur 3D |
| 3 · Implement in Code | Rendre le modèle exécutable | Programmer physique et collisions. Joystick 1 pour rotation et chariot, joystick 2 pour levage, pédales pour réglage ou freinage. Afficher masse, vent et position du chariot. | Unity et C# par exemple, PC, écran, deux joysticks et pédales | Développeur, intégrateur |
| 4 · Run the Simulation | Exécuter les essais | Fixer masse et état de départ. Répéter le déplacement avec et sans rafale. Enregistrer commandes, trajectoires et alertes. | Poste de simulation, scénarios, journal de données | Apprenant, instructeur, testeur |
| 5 · Analyze Results | Interpréter et valider | Mesurer oscillation maximale, collisions et distance minimale. Comparer aux observations de référence et distinguer erreur de conduite et défaut du modèle. | Rejeu, courbes, mesures de référence | Formateur, ingénieur simulation, grutier expert |
| 6 · Refine & Repeat | Corriger puis vérifier | Si la charge s’immobilise trop vite, ajuster l’amortissement. Rejouer les mêmes commandes, puis tester avec une autre masse. | Paramètres physiques, scénario enregistré, tests | Ingénieur simulation, développeur, formateur |
**Exemple de réponse solide.** « À l’analyse, on mesure la distance minimale entre la charge et un mur. Au raffinement, on corrige le paramètre responsable puis on rejoue le même essai. »
`],
      ["Q3 · Passer du simulateur à la VR", "Expliquer les changements, les interactions et le niveau d’immersion.", `
1. **Changements.** Le casque affiche une vue stéréoscopique depuis la cabine. Les mouvements de tête modifient la perspective. La physique de la grue reste le cœur du simulateur.
2. **Interactions.** Se pencher pour voir le crochet, saisir un joystick virtuel, appuyer sur un bouton. La charge bouge et le tableau de bord réagit. Le son spatialisé et les vibrations peuvent compléter les retours si le système les implémente.
3. **Niveau élevé.** Le casque occupe une grande partie du champ visuel, le suivi recalcule la perspective et les contrôleurs permettent d’agir dans la cabine. La cohérence des retours et leur faible latence soutiennent la présence.
`]
    ]
  },
  cama: {
    title: "CAMA · Médias et communication",
    courses: [["Communication and Multimedia · § 1–5", "15DOxfUM9LANVWhvbHWZUBpb0e5av-WMe"]],
    lesson: `
**Émetteur → encodage → message matérialisé → réception → interprétation.** La compréhension dépend du contexte et des connaissances du récepteur.

==vert:Support = moyen matériel. Canal = forme homogène. Dimension = domaine perceptif.== Dans une alerte sur smartphone, l’écran est le support, le texte et l’icône sont deux canaux dans la dimension visuelle. Une vibration ajoute un canal tactile. Plusieurs canaux peuvent suffire à faire du multimédia dans une seule dimension. Une interaction suppose une réponse du système à l’action de l’utilisateur.

Une **scène** est une unité cohérente délimitée par une discontinuité dans le flux du contenu. Les **liens hypermédias** permettent un parcours non linéaire. Les **liens sémantiques** relient les médias qui contribuent au même sens. Les métadonnées décrivent la nature et le format des éléments de la scène.

La **dimension de définition** correspond à la perception d’origine. La **dimension d’expression** correspond à la représentation choisie. Le chant d’un oiseau est auditif, son spectrogramme est visuel. Le graphique conserve la structure temps-fréquence. La lecture du graphique demande d’interpréter un code.
`,
    td: "td1-cama.jpg",
    questions: [
      ["Exercice 1 · Classer les huit exemples", "Donner les canaux, les dimensions, le caractère multimédia ou interactif et une scène pour chaque exemple.", `
| Exemple | Canaux et dimensions | Multimédia | Interactif | Scène possible |
| --- | --- | --- | --- | --- |
| PDF | Texte et éventuelles images → visuelle | Oui si illustré | Si liens ou champs intégrés | Page ou section cohérente |
| TXT | Texte affiché → visuelle | Non pour le texte seul | Lecture seule dans le cas de base | Bloc consacré à un sujet |
| Documentaire | Images animées → visuelle. Voix, musique → auditive. | Oui avec bande-son | Contenu linéaire. Le lecteur offre lecture et pause. | Interview ou séquence dans un lieu |
| Gestion de stock | Texte, tableaux, photos éventuelles → visuelle | Oui avec texte et photos | Oui, recherche, filtre, modification | Liste de stock ou fiche produit |
| Traitement d’image | Image et texte d’interface → visuelle | Oui avec ces deux canaux | Oui, un filtre modifie l’image | Édition ou recadrage |
| Page de présentation statique | Texte et illustrations éventuelles → visuelle | Oui si illustrée | Lecture simple. Les liens ajoutent une interaction de navigation. | Présentation du programme |
| Formulaire dynamique | Libellés, champs et messages → visuelle | Selon le contenu. Texte seul possible. | Oui, validation et confirmation | Saisie puis confirmation |
| Agenda | Texte et calendrier graphique → visuelle. Son ou vibration selon les rappels. | Oui si plusieurs canaux sont utilisés | Oui, créer ou déplacer un rendez-vous | Vue semaine ou ajout d’événement |
**Hypothèse de copie.** Indique la version considérée. Une interaction au clavier n’ajoute pas automatiquement un retour tactile.
`],
      ["Exercice 2 · Réexprimer une information et préciser les pertes", "Pour chaque élément, trouver sa dimension d’origine et des expressions dans d’autres dimensions.", `
| Information | Origine | Exemples d’expression et limites |
| --- | --- | --- |
| Couleurs | Visuelle | Noms prononcés ou motifs tactiles associés. Le code transmet les catégories, les nuances demandent plus de précision. |
| Chanson | Auditive | Partition et paroles visuelles. Mélodie et mots conservés, timbre et interprétation moins bien restitués. Vibrations tactiles pour le tempo, avec perte des paroles et de la mélodie dans ce codage. |
| Chant d’oiseau | Auditive | Spectrogramme visuel pour les fréquences et durées. Vibrations pour la cadence, avec perte du détail fréquentiel. |
| Dimensions d’une pièce | Spatiale, généralement appréciée par la vue | Cotes parlées auditives ou plan tactile en relief. Les nombres peuvent rester exacts à l’oral, l’organisation spatiale est moins immédiate. Le relief dépend de l’échelle et de la finesse du support. |
| Texture | Tactile | Macrophoto visuelle pour l’apparence du relief ou description orale. Friction et souplesse sont difficiles à restituer. |
| Acidité | Gustative pour la sensation | Valeur de pH affichée ou description orale « très acidulé ». Le pH mesure une propriété, la sensation dépend aussi du sucre et d’autres facteurs. |
| Odeur sucrée | Olfactive | Étiquette visuelle ou description auditive « vanille douce ». Elles identifient une catégorie, avec perte des nuances de l’odeur réelle. |
| Chapitre | Visuelle si imprimé ou affiché | Lecture audio ou braille. Le texte peut être conservé, les tableaux et figures doivent être adaptés. |
| Algorithme | Abstrait, visuelle pour le pseudo-code écrit | Lecture audio ou code braille. La logique peut rester intacte, tandis que l’imbrication ou la disposition d’un organigramme se repère moins vite. |
`],
      ["Exercice 3 · Processus de communication", "Définir message, support, canal et dimension. Classer les quatre cas.", `
**Message** — forme encodée de l’idée à transmettre. **Support physique** — moyen matériel qui rend le message perceptible. **Canal** — forme homogène du message. **Dimension perceptive** — domaine sensoriel dans lequel il est reçu.

| Exemple | Support physique | Canal | Dimension |
| --- | --- | --- | --- |
| Podcast | Écouteurs ou haut-parleur | Voix, musique éventuelle | Auditive |
| Photo imprimée | Papier et encre | Image fixe | Visuelle |
| Vibration de manette VR | Moteur vibrant et coque de la manette | Vibration | Tactile ou haptique |
| Texte sur smartphone | Écran du smartphone | Texte écrit | Visuelle |
`]
    ]
  }
};
