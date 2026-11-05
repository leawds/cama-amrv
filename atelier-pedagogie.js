// Pour les deux TD1, chaque explication du cours prend un autre exemple que le corrigé.
window.ATELIER_TD1 = {
  "td1-amvr.jpg": [
    {
      courseDiagram: "Deux essais, un même train~plan:Modèle de freinage > play:Rail sec ou humide > graph:Distances comparées~Garde la vitesse initiale et change l’adhérence pour étudier son effet.",
      diagram: "Un essai de levage sous rafale~crane:Charge suspendue > plan:Câble + masse + vent > graph:Courbe du balancement~Le modèle fixe les règles. En les exécutant avec une rafale donnée, on obtient l’angle de la charge au fil du temps.",
      icons: ["plan", "target", "cube", "graph", "loop"],
      course: [
        ["Choisir ce que le modèle représente", "Un modèle est une abstraction construite pour répondre à une question. Pour étudier l’arrêt d’un train, on garde la vitesse, le freinage et l’adhérence. La couleur des wagons ne joue aucun rôle dans ce calcul."],
        ["Séparer l’état, les paramètres et les entrées", "La position et la vitesse décrivent l’état à un instant donné. La masse est un paramètre fixé pour l’essai. L’ordre de freiner est une entrée qui change au cours du temps. Le simulateur applique les règles pour faire évoluer l’état."],
        ["Lire un résultat de simulation", "Une distance d’arrêt calculée vaut pour les hypothèses de l’essai. On peut garder le même train et comparer une voie sèche à une voie humide. Si les distances mesurées sur le terrain s’écartent des prédictions, on peut revoir le modèle."]
      ],
      practice: ["Deux essais partent à 80 km/h, sur rail sec puis humide. Qu’est-ce qui change ?", "La condition d’adhérence change. La vitesse initiale et la structure du modèle peuvent rester identiques. On compare les distances d’arrêt obtenues."]
    },
    {
      courseDiagram: "Tester l’arrêt avant une ligne~target:Critère d’arrêt > play:Essai de référence > graph:Écart mesuré > loop:Ajuster puis rejouer~À chaque essai, garde des conditions comparables pour isoler l’effet du changement.",
      scene: "craneWall",
      diagram: "Suivre une charge près d’un mur~crane:Déplacement imposé > graph:Distance minimale > loop:Ajustement et nouvel essai~On rejoue les mêmes commandes avant et après l’ajustement. La comparaison montre l’effet du paramètre modifié.",
      icons: ["target", "plan", "code", "play", "graph", "loop"],
      course: [
        ["Reconnaître le livrable de chaque étape", "Pour un simulateur de freinage, la définition produit une mission et un critère, par exemple s’arrêter avant une ligne. La modélisation produit des règles, comme la relation entre adhérence et décélération. L’implémentation traduit ces règles en programme."],
        ["Concevoir un essai qui permette de conclure", "Lors de l’exécution, on fixe la vitesse initiale et le point de freinage. Pour isoler l’effet de l’adhérence, on garde ces conditions et on ne change que l’état de la voie. À l’analyse, on compare les distances ou les courbes de vitesse."],
        ["Valider puis raffiner", "Valider consiste à comparer les résultats à une mesure réelle ou à un comportement attendu. Si le freinage est systématiquement trop fort, on ajuste la règle ou un paramètre, puis on rejoue l’essai de référence. Un autre essai vérifie que l’amélioration se généralise."]
      ],
      practice: ["On mesure une distance d’arrêt, on modifie un coefficient, puis on relance. À quelles étapes correspondent ces actions ?", "Mesurer et comparer relève de l’analyse. Modifier le coefficient puis refaire l’essai relève du raffinement."]
    },
    {
      courseDiagram: "Un pas dans le musée virtuel~person:Le visiteur avance > game:Position suivie > speaker:Son de la vitrine~Le capteur donne une entrée. La scène applique une règle et rend un retour perceptible.",
      diagram: "Dans la cabine, le point de vue suit le grutier~person:Il se penche > headset:Le casque recalcule la vue > crane:Le crochet devient visible~La scène répond au mouvement de la tête. Les contrôleurs pilotent séparément les mouvements de la grue.",
      icons: ["headset", "game", "eyes"],
      course: [
        ["Suivre une boucle perception-action", "Dans un musée virtuel, des capteurs mesurent le mouvement de tête. Le moteur met à jour la caméra et le casque affiche la nouvelle vue. Le visiteur perçoit le changement et décide de se rapprocher d’une vitrine."],
        ["Distinguer interaction et simple observation", "Tourner la tête modifie le point de vue. Saisir un objet avec un contrôleur modifie l’état de la scène. Le scénario de communication décrit les commandes et les retours. Le scénario de contenu décrit la visite, les objets et les événements prévus."],
        ["Relier immersion et présence", "Le champ visuel, le suivi des mouvements et la cohérence des retours favorisent l’immersion. Une latence perceptible entre un geste et l’image peut rompre cette cohérence. La présence désigne le sentiment de se trouver dans le musée."]
      ],
      practice: ["Une vitrine émet un son seulement quand le visiteur s’en approche. Où se situent l’entrée et le retour ?", "La position suivie est l’entrée. La scène détecte le franchissement d’un seuil et le son entendu constitue le retour."]
    }
  ],
  "td1-cama.jpg": [
    {
      courseDiagram: "Une recherche sur la borne de gare~screen:Plan affiché > hand:Choisir une voie > speaker:Itinéraire annoncé~Le plan mobilise la vision, la voix l’audition. La sélection provoque la réponse.",
      diagram: "Lire un formulaire en deux scènes~text:Saisie des champs > game:Envoi > screen:Confirmation~Le formulaire répond à une action, donc il est interactif. Les libellés et les champs passent par le canal écrit dans la dimension visuelle.",
      icons: ["plan", "text", "film", "grid", "pencil", "screen", "keyboard", "target"],
      course: [
        ["Classer le canal et la dimension à deux niveaux", "Dans une borne de gare, un plan et un libellé sont deux formes visuelles, l’image et le texte. Une annonce parlée ajoute un canal sonore qui mobilise l’audition. Plusieurs canaux peuvent partager une même dimension."],
        ["Tester l’interaction avec un aller-retour", "Une affiche animée peut défiler toute seule. Une carte qui zoome après un geste répond à l’utilisateur. Les contrôles d’un lecteur, comme pause ou lecture, agissent sur la lecture et ne rendent pas forcément le récit lui-même interactif."],
        ["Repérer une scène et ses liens", "Un plan de gare et son bouton de recherche forment une scène cohérente. Le résultat de la recherche peut former une autre scène. Un lien hypermédia permet d’y naviguer. Un lien sémantique relie, par le sens, la légende au pictogramme qu’elle explique."]
      ],
      practice: ["Une borne affiche un plan et lit l’itinéraire à voix haute après sélection. Où vois-tu les canaux et l’interaction ?", "Image et texte relèvent de la vue, parole de l’audition. L’interaction est la sélection suivie de la réponse de la borne."]
    },
    {
      courseDiagram: "Coder le rythme en flashes~wave:Bips du métronome > code:Un flash par bip > eye:Intervalles visibles~Le code transmet le rythme. La hauteur et le timbre demanderaient un codage supplémentaire.",
      scene: "birdSignal",
      diagram: "Rendre visible un chant d’oiseau~bird:Son dans le temps > spectrum:Tracé temps-fréquence > eye:Fréquences et durées lisibles~Le graphique conserve des indices sur le chant. Pour entendre le timbre, il faut disposer du son ou d’une reconstruction.",
      icons: ["eye", "speaker", "bird", "plan", "hand", "target", "bubble", "text", "code"],
      course: [
        ["Identifier la perception de départ", "Le rythme d’un métronome entendu est auditif. Si on transforme les battements en impulsions lumineuses, la nouvelle expression est visuelle. L’information encodée reste le rythme, même si le sens mobilisé change."],
        ["Séparer ce que le code conserve et ce qu’il omet", "Des flashes à chaque battement conservent les intervalles, mais ils ne décrivent pas le timbre du clic. Un plan en relief peut conserver des distances relatives si son échelle est connue. Une conversion dépend donc du code et de sa précision."],
        ["Traiter les contenus abstraits par leur forme", "Un itinéraire est une suite d’instructions. On peut l’exprimer par une carte, une consigne parlée ou un plan tactile. La carte donne une vue d’ensemble, tandis que l’audio présente les étapes dans l’ordre."]
      ],
      practice: ["On traduit une alarme en flashes espacés comme les bips. Cite un élément conservé et un élément perdu.", "Les intervalles entre bips peuvent être conservés. La hauteur du son n’est plus communiquée si la lumière ne la code pas."]
    },
    {
      courseDiagram: "Un étage, deux façons de l’annoncer~bubble:Numéro d’étage > speaker:Parole entendue | screen:Texte vu~Le même message emprunte deux formes et deux supports.",
      diagram: "Décomposer la vibration de la manette~bubble:Choc signalé > game:Manette et moteur > wave:Vibration > hand:Toucher~Le message signale un choc. La manette est le support, la vibration le canal et le toucher la dimension.",
      icons: ["speaker", "plan", "game", "screen"],
      course: [
        ["Partir de l’information transmise", "Sur un quai, le changement de voie est le message. Le même contenu peut être écrit sur un panneau ou prononcé dans une annonce. La formulation varie avec le contexte et le récepteur doit l’interpréter."],
        ["Distinguer le dispositif du signal", "Le haut-parleur est le dispositif qui matérialise l’annonce. La parole est la forme du signal que le voyageur entend. Le panneau est un autre support et l’écriture devient le canal."],
        ["Retrouver la dimension par la perception", "La parole mobilise l’audition. Le texte et le pictogramme affichés mobilisent la vision. Une information codée dans un relief ou une vibration peut mobiliser le toucher."]
      ],
      practice: ["Un ascenseur annonce le numéro d’étage tout en l’affichant. Classe les deux sorties.", "Le numéro d’étage est le message commun. Haut-parleur, parole et audition forment une sortie. Écran, texte et vision forment l’autre."]
    }
  ]
};

// Schémas de résolution des exercices ouverts des annales, dans l’ordre des sujets.
window.ATELIER_ANNAL_SOLUTIONS = {
  "MAVR_2024_2025_Session_0_001.pdf": [
    "Du voisinage à la règle~cube:Dimensions d’un objet | network:Objet près du mur | wave:Vibrer si proche~La proximité est une relation spatiale. La vibration déclenchée par une condition relève de la sémantique.",
    "Quand le poids se fait sentir~cube:Soulever un poids > person:Mouvement du bras > spring:Résistance rendue~Le mouvement sollicite la kinesthésie et la proprioception. Un actionneur peut simuler l’effort."
  ],
  "MAVR_2023_2024_Session_0_Test3_Statement.pdf": [
    "Sur le sujet, repère les fentes~screen:Pixels alternés > barrier:Masque à fentes > eyes:Une vue par œil~Le masque bloque certains rayons. La séparation fonctionne dans les zones de vision prévues.",
    "Sur le sujet, repère les lentilles~screen:Pixels alternés > lens:Lentilles courbes > eyes:Rayons déviés~Le réseau lenticulaire réfracte les rayons vers les zones de vision gauche et droite."
  ],
  "MAVR_2024_2025_Exam_001.pdf": [
    "Boucler un essai vibrotactile~wave:Émettre la série > hand:Ressentir les impulsions > keyboard:Saisir nombre et force > loop:Comparer et rejouer~Le système compare la réponse au nombre et à la force qu’il a envoyés.",
    "Corriger le code puis espacer les formes~code:Réparer les blocs > cube:Cône et sphère au même point > arrow:Déplacer le cône~Une translation différente libère la vue du cône sans créer un nouveau nœud."
  ],
  "AMAD_2024_2025_Session_0_001.pdf": [
    "Classer le travail de préparation~text:Synopsis global | film:Séquence de scènes | person:Planche d’un personnage~Vérifie pour chaque tâche qui décide et si elle concerne le projet ou un personnage.",
    "Classer le travail de production~person:Poses clés > film:Images intermédiaires > speaker:Son > play:Montage~Le logiciel peut interpoler des poses. L’enregistrement mobilise un microphone et une prise de son."
  ],
  "AMAD_2024_2025_Session_0_2nd.pdf": [
    "Tracer le résultat de 3 + 2~keyboard:Saisie > target:Valider > screen:Afficher 5 objets > speaker:Lire le résultat~Les opérandes sont des données. La validité de la saisie est une décision.",
    "Faire nommer l’objet~screen:Montrer l’objet > speaker:Dire le nom > keyboard:Recueillir la réponse > target:Comparer et répondre~Une erreur déclenche une correction et un nouvel essai."
  ],
  "AMAD_2024_2025_Exam_001.pdf": [
    "Une capture change le fond~game:Déplacer le chariot > cube:Détecter la capture > screen:Éclairer ou assombrir > loop:Prochain objet~La décision sur la capture contrôle le retour visuel, puis le jeu revient à la boucle.",
    "Une action différente par colonne~cube:Objet qui tombe | screen:Fond qui change | wheel:Roues qui tournent | game:Chariot qui glisse~Le fond et l’objet suivent le scénario. Le mouvement du chariot et de ses roues répond au joueur."
  ]
};
