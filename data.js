// Base de données complète enrichie pour AMRV & CAMA (Master Informatique / AIA - USTO-MB)
// Intègre le nouveau document officiel "Chapitre 1 : Rappels sur la Représentation et la Nature des Données Multimédia" (Son, Image, Vidéo, Haptique)
// ainsi que les notes manuscrites du TD AMRV (Modèle vs Simulation) et les annales d'examens.

const REVISION_DATA = {
  // ==========================================
  // 1. SYNTHÈSES DES COURS
  // ==========================================
  courses: {
    amrv: [
      {
        id: "amrv_td_q1",
        title: "TD AMRV • Question Fondamentale : Modèle vs Simulation",
        image: "assets/amrv_bright.jpg",
        imageCaption: "La Modélisation (Statique) comme fondement de la Simulation (Dynamique)",
        tag: "Note Manuscrite du TD",
        summary: "Tableau comparatif exact issu des séances de TD : définitions, buts, focus, sorties et relation.",
        sections: [
          {
            heading: "1. Comparaison Formelle : Modèle vs Simulation (Note du Cours)",
            content: `Au TD d'AMRV, le professeur formalise la distinction entre les deux concepts clés :

| Critère | Le Modèle (Modélisation) | La Simulation |
| :--- | :--- | :--- |
| **Définition** | ==Entité lisible par l'ordinateur (machine)==. | ==Tout passage du monde physique au monde virtuel==. |
| **But** | Permettre de **traiter les problèmes par la machine**. | ==Expérience par analogie==. |
| **Focus / Concentration** | Se concentre sur la ==description statique==. | Se concentre sur ==l'évolution dans le temps (dynamique)==, l'exécution. |
| **Sortie (Output)** | Le ==modèle numérique==. | ==L'exécution== (comportement observable). |
| **Ordre logique** | **Modélisation d'abord** $\\longrightarrow$ | $\\longrightarrow$ **Simulation après**. |

<!-- DIAGRAM:modelSimulation -->

<!-- PDF:td_amrv_handwritten_note.jpg|Note Manuscrite Officielle TD1 : Modèle vs Simulation|Fiche TD USTO-MB|Document original photographié en cours confrontant Définition, But, Focus, Sortie et Relation Mutuelle. -->

<!-- VIDEO:cfbKR48nSyQ|What is a Digital Twin? Modèle Statique vs Simulation Dynamique|IBM Technology|Visualisation concrète de la distinction entre modèle numérique (blueprint statique) et simulation (exécution dynamique dans le temps avec flux de capteurs). -->

**La Relation Mutuelle Essentielle :**
- Le **modèle** est la ==base de la simulation==.
- La **simulation** est ==l'exécution du modèle==.`
          }
        ],
        keyPoints: [
          "Modélisation = description statique (entité lisible par la machine).",
          "Simulation = dynamique en fonction du temps (passage du réel au virtuel, expérience par analogie).",
          "Relation : Le modèle est la base de la simulation ; la simulation est l'exécution du modèle !"
        ]
      },
      {
        id: "amrv_c1",
        title: "Chapitre 1 : Concepts Fondamentaux & Simulation Informatique",
        image: "assets/amrv_bright.jpg",
        imageCaption: "Laboratoire de Réalité Virtuelle & Jumeau Numérique (Simulation Immersive)",
        tag: "Concepts VR",
        summary: "Définition de la Réalité Virtuelle, Pipeline de simulation et les 4 piliers.",
        sections: [
          {
            heading: "1. La Simulation Informatique",
            content: `Une simulation informatique est un **modèle virtuel qui reproduit le comportement d'un système ou processus du monde physique**.
Elle permet d'expérimenter en toute sécurité, à moindre coût et de tester des scénarios « what if » (jumeau numérique / *digital twin*).

**Le Pipeline de Simulation Informatique :**
En résumé d'examen : **« Comprendre, Modéliser et Implémenter »** (*Understand, model and implement*).
En détail (étapes opérationnelles) :
1. **Définir le système** (*Define the System*) : identifier le périmètre, poser les objectifs.
2. **Construire le modèle** (*Build the Model*) : abstraction mathématique/logique, variables et lois.
3. **Implémenter dans le code** (*Implement in Code*) : codage (Python, Unity, C++, etc.).
4. **Exécuter la simulation** (*Run Simulation*) : conditions initiales, évolution temporelle.
5. **Analyser les résultats** (*Analyze Results*) : visualisation des sorties, comparaison avec le réel.
6. **Ajuster & Répéter** (*Refine & Repeat*) : calibrage et amélioration continue.`
          },
          {
            heading: "2. Qu'est-ce que la Réalité Virtuelle (VR) ?",
            content: `**Définition complète d'examen :**
> *« La Réalité Virtuelle est une translation dynamique de l'utilisateur dans le monde numérique »* (*A dynamic translation of the user in the digital world*).
C'est une simulation générée par ordinateur qui plonge l'utilisateur dans un univers artificiel immersif, interactif et multimédia.

**Les 4 Piliers Fondamentaux de la VR :**
1. **Simulation Virtuelle :** Conception et animation en temps réel (modélisation 3D, moteurs graphiques).
2. **Expérience Immersive :** Transfert de la perception du monde physique vers le monde virtuel.
3. **Interaction Temps Réel :** Bidirectionnelle et synchronisée. Requiert **2 scénarios** :
   - *Scénario de communication :* définit comment l'utilisateur interagit avec le monde virtuel.
   - *Scénario de contenu :* structure les événements, les objets et les réactions.
4. **Expérience Multimédia :** Mobilisation de plusieurs canaux sensoriels (Vision, Ouïe, Haptique).`
          },
          {
            heading: "3. Immersion & Interférences de Contradiction",
            content: `**L'Interférence de Contradiction :**
- C'est une **perception partielle du monde réel** qui vient contredire la perception du monde virtuel.
- Si elle est **nulle**, l'immersion est totale.
- Perception visuelle non exclusive au monde virtuel = **immersion partielle ou Réalité Augmentée (AR)**.
- Objets réels perçus avec interférence de contradiction nulle = **Virtualité Augmentée (Augmented Virtuality)**.`
          }
        ],
        keyPoints: [
          "Pipeline de simulation : Comprendre -> Modéliser -> Implémenter.",
          "Définition VR : Translation dynamique de l'utilisateur dans le monde numérique.",
          "Interférence de contradiction = Perception partielle du monde réel.",
          "2 scénarios : Scénario de Communication et Scénario de Contenu."
        ]
      },
      {
        id: "amrv_c2",
        title: "Chapitre 2 : Immersion, Modalités Sensorielles & Périphériques",
        image: "assets/haptic_glove.jpg",
        imageCaption: "Dispositifs Sensoriels & Gants Haptiques à Retour d'Effort (Immersion Totale)",
        tag: "Immersion & Matériel",
        summary: "Canaux sensoriels (vision, ouïe, haptique, proprioception), stéréoscopie, calcul des scores d'immersion.",
        sections: [
          {
            heading: "1. Les Sens Humains & Leurs Rôles en VR",
            content: `- **Vision :** canal dominant (>70% de l'immersion). Projection d'instances 3D sur écrans 2D selon l'angle de vue.
- **Ouïe (Audio 3D spatialisé) :** rendu binaural (ITD, ILD, HRTF) pour la distance et l'azimut.
- **Toucher Cutané (Tactile) :** mécanorécepteurs de la peau (pression, contact, vibration, température).
- **Retour d'Effort (Kinesthésie) :** perception musculaire des forces et résistances. Dispositif essentiellement **mécanique**.
- **Proprioception :** perception de la position et de l'orientation de son propre corps dans l'espace.
- **Système Vestibulaire :** oreille interne, responsable de l'équilibre et de l'orientation spatiale (pesanteur).`
          },
          {
            heading: "2. Stéréoscopie & Dispositifs Visuels",
            content: `- **Séparation à l'écran :** les deux images sont affichées **simultanément** (polarisation, barrière de parallaxe).
- **Séparation par lunettes actives :** utilise un **dispositif mécanique/électro-optique télécommandé** (obturateurs LCD synchronisés).
- **Dispositifs :** HMD (visiocasque), Fish Tank VR (bureau stéréoscopique), CAVE (salle de projection immersive).`
          },
          {
            heading: "3. La Grille d'Évaluation Empirique de l'Immersion (TD1)",
            content: `Scores officiels de référence (Présence + Contrôle + Ergonomie + Interactivité) :
- **Salle de projection 3D :** PALU (4 + 3 + 4 + 1 = **12**)
- **Visiocasque (HMD) :** PAEU (4 + 3 + 3 + 1 = **11**)
- **Gants de données :** TMEB (1 + 4 + 3 + 2 = **10**)
- **Manette avec retour d'effort :** TMCB (1 + 4 + 2 + 2 = **9**)
- **Manette classique sans RE :** AMCU (0 + 4 + 2 + 1 = **7**)
- **Oreillettes Binaural :** PNEA (4 + 0 + 3 + 0 = **7**)
- **Écran tactile :** ECOU (2 + 2 + 1 + 1 = **6**)
- **Écran classique non-tactile :** ENOA (2 + 0 + 1 + 0 = **3**)
- **Souris :** AEOU (0 + 1 + 1 + 1 = **3**)`
          }
        ],
        keyPoints: [
          "Séparation à l'écran = images simultanées.",
          "Lunettes actives = obturateurs alternés télécommandés.",
          "Retour d'effort = dispositif mécanique externe.",
          "HMD = 11 pts (PAEU), Salle 3D = 12 pts (PALU), Gants = 10 pts (TMEB)."
        ]
      },
      {
        id: "amrv_c3",
        title: "Chapitre 3 : Modélisation des Mondes Virtuels (VR Worlds)",
        image: "assets/hero_vr.jpg",
        imageCaption: "Modélisation des univers virtuels, primitives géométriques et graphes de scène",
        tag: "Modélisation & VRML",
        summary: "Les 6 contraintes, les 4 couches de modélisation et analyse de code VRML/X3D.",
        sections: [
          {
            heading: "1. Les 6 Contraintes de Modélisation",
            content: `1. **Consistance Géométrique :** formes, dimensions et proportions réalistes.
2. **Cohérence Spatiale :** logique physique des positions et distances.
3. **Plausibilité Physique :** respect des lois physiques (gravité, collision, résistance).
4. **Continuité Temporelle :** transitions et mouvements fluides sans téléportations.
5. **Consistance Sémantique :** signification et rôle préservés pour chaque objet.
6. **Efficacité Computationnelle :** optimisation impérative pour le rendu temps réel.`
          },
          {
            heading: "2. Les 4 Couches de Modélisation (Test 2024-2025)",
            content: `1. **Modèle Géométrique :** formes, sommets, coordonnées des primitives, dimensions relatives (ex: largeur = 2x hauteur), couleurs/textures. Résolution finie par définition.
2. **Modèle Cinématique :** description des mouvements, trajectoires et transformations au cours du temps (bornage min/max de coordonnées).
3. **Modèle Topologique :** structure des relations spatiales, adjacence, connectivité, voisinage, groupement à distance fixe.
4. **Modèle Sémantique :** règles logiques d'interaction, détection de collisions (ex: arrêter le mouvement lors d'un contact), déclencheurs sensoriels et comportementaux.`
          },
          {
            heading: "3. Analyse & Débogage VRML / X3D (Examen)",
            content: `- Erreurs de syntaxe fréquentes : \`titles\` au lieu de \`title\`, \`Children\` avec majuscule au lieu de \`children\`, accolades fermantes manquantes \`}}}\`.
- Visibilité : un cylindre avec \`bottom FALSE, top FALSE, side FALSE\` ne rend aucune face (invisible) ! Deux objets avec la même \`translation\` se masquent mutuellement.`
          }
        ],
        keyPoints: [
          "Graphe d'adjacence = Modèle Topologique.",
          "Fumée et eau = Non-solides.",
          "Règles de collision et réactions = Modèle Sémantique.",
          "Résolution géométrique = Finie par définition."
        ]
      }
    ],

    cama: [
      {
        id: "cama_c1_new",
        title: "Chapitre 1 : Nature & Représentation des Données Multimédia",
        image: "assets/cama_bright.jpg",
        imageCaption: "Chaîne complète de traitement et compression multimédia (Audio, Image, Vidéo, Haptique)",
        tag: "Nouveau Polycopié Officiel",
        summary: "Communication multimédia, Son (Shannon, ADSR, psychoacoustique, MP3), Image (Vectorielle, RGB, YUV, JPEG), Vidéo (GOP, SAD, H.264), Haptique (IEEE 1918.1.1, Hooke, Passivité).",
        sections: [
          {
            heading: "1. Communication Multimédia & Éléments du Système",
            content: `La communication multimédia fusionne texte, image, son, vidéo et haptique.
**Les 3 facteurs de complexité :**
1. **Volume énorme :** 1 image HD non compressée = 6 Mo, 1 minute de vidéo 4K = 5 Go.
2. **Dimension temporelle :** médias statiques (texte, image) vs dynamiques (audio, vidéo) exigeant une synchronisation stricte.
3. **Hétérogénéité :** combinaison de données aux propriétés physiques fondamentalement différentes.

**Médias DISCRETS vs CONTINUS :**
- **Discrets (indépendants du temps) :** Texte, images fixes (JPEG, PNG), vectoriel (SVG). Pas de débit continu ni de synchronisation.
- **Continus (dépendants du temps) :** Son, vidéo, animation. Exigent un débit constant, gestion de gigue (*jitter*), mémoire tampon (*buffer*) et synchronisation son-image.
- **Fichier vs Flux :** Fichier = téléchargement complet préalable, accès aléatoire instantané. Flux (*streaming*) = lecture en continu pendant la réception avec adaptation dynamique de débit (ABR).`
          },
          {
            heading: "2. Le Son : Physique, Psychoacoustique & Compression",
            content: `<!-- IMAGE:audio_waves.jpg|Propagation des ondes sonores, spectre fréquentiel et acoustique binaurale 3D -->

**Nature physique :** Onde mécanique de pression longitudinale dans un milieu élastique.
- Fréquence (hauteur) : Grave < 300 Hz, Aigu > 4000 Hz. Audition humaine : 20 Hz à 20 kHz (dynamique ~120 dB).
- <!-- DIAGRAM:adsr -->

- Enveloppe **ADSR** : Attack (attaque), Decay (chute), Sustain (tenue), Release (extinction).

**Psychoacoustique (Comment l'oreille « triche ») :**
- *Courbes de Fletcher-Munson :* sensibilité maximale vers 2-4 kHz (zone de la voix), faible dans les extrêmes.
- *Masquage fréquentiel :* un son fort masque les sons faibles de fréquences voisines (principe clé du MP3).
- *Masquage temporel :* Post-masquage (oreille sourde pendant 100-200 ms après un son fort de 80 dB) et Pré-masquage (inaudible 5 ms AVANT le son fort).
- *Indices de localisation spatiale :*
  - **ITD (Interaural Time Difference) :** retard d'arrivée entre oreilles (~0.6 ms). Efficace pour les graves (< 1500 Hz).
  - **ILD (Interaural Level Difference) :** atténuation par l'ombre de la tête. Efficace pour les aigus (> 3000 Hz).
  - **HRTF (Head-Related Transfer Function) :** filtrage par le pavillon de l'oreille, lève l'ambiguïté du *cône de confusion* (avant/arrière).

<!-- DIAGRAM:shannon -->

**Numérisation & Formules Audio :**
- ==Shannon-Nyquist : $F_e \\ge 2 \\times F_{max}$==. Téléphonie : ==$F_e = 8\\text{ kHz}$==. CD Audio : ==$F_e = 44.1\\text{ kHz}$== (pour $F_{max} = 20\\text{ kHz}$).
- **Quantification :** $2^N$ niveaux. Rapport Signal/Bruit : $\\text{SNR} \\approx 6.02 \\times B + 1.25\\text{ dB}$ (sur 16 bits = 98 dB).
- ==Débit binaire PCM : $\\text{Débit} = F_e \\times B \\times C$== ($C=1$ mono, $C=2$ stéréo). Ex CD : ==$44100 \\times 16 \\times 2 = 1.411\\text{ Mbit/s}$==.
- **Taille d'un fichier audio :** $\\text{Taille (octets)} = \\frac{\\text{Débit} \\times \\text{Durée (s)}}{8}$. ==1 min CD stéréo = 10.5 Mo==.
- **MP3 (MPEG-1 Layer III) :** Découpe en 32 sous-bandes de 625 Hz, FFT, modèle psychoacoustique, seuillage de masquage, allocation adaptative de bits, codage de Huffman. 1 trame = 1152 échantillons = 26 ms.

<!-- VIDEO:pWjdWCePgvA|D/A & A/D | Digital Show and Tell (Shannon-Nyquist sur Oscilloscope)|Xiph.Org (Monty Montgomery)|Visualisation sur oscilloscope en temps réel de l'échantillonnage de Shannon-Nyquist, pourquoi il n'y a pas d'effet d'escalier en audio, et le rôle du filtre de reconstruction anti-repliement. -->`
          },
          {
            heading: "3. L'Image : Vectoriel, Matriciel & Chaîne JPEG",
            content: `<!-- IMAGE:image_decomp.jpg|Décomposition de l'image numérique en canaux RGB, luminance Y et chrominance CbCr -->

**Image Vectorielle :** Formules mathématiques (zoom infini sans pixellisation).
- Segment / Droite : $P = P_0 + t(P_1 - P_0)$ avec $t \\in [0, 1]$.
- Courbe de Bézier cubique (4 points de contrôle) : $B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3 P_3$.

**Image Matricielle & Espaces Couleur :**
- RGB (24 bits True Color = 16.7M couleurs) : 1 pixel = 3 octets. Taille brute $1920 \\times 1080 = 6.22\\text{ Mo}$.
- YUV / YCbCr : sépare Luminance ($Y$) et Chrominance ($Cb, Cr$).
- Formules BT.601 (Full range [0-255]) :
  - $Y = 0.299 R + 0.587 G + 0.114 B$
  - $Cb = 128 - 0.1687 R - 0.3313 G + 0.5 B$
  - $Cr = 128 + 0.5 R - 0.4187 G - 0.0813 B$
- ==Sous-échantillonnage chroma 4:2:0 : $Cb$ et $Cr$ divisés par 2 en largeur ET en hauteur. Gain de 50% de taille sans perte visible.==

<!-- DIAGRAM:chromaSubsampling -->

**La Chaîne de Compression JPEG en 5 étapes :**
1. Conversion RGB $\\rightarrow$ YCbCr et ==sous-échantillonnage 4:2:0==.
2. Découpage en blocs de ==$8 \\times 8$ pixels== sur le canal Y.
3. ==DCT (Transformée en Cosinus Discrète) :== passage spatial $\\rightarrow$ fréquentiel (1 coeff DC basse fréquence + 63 coeffs AC hautes fréquences).
4. ==Quantification :== division des 64 coefficients par la table de quantification (écrase les hautes fréquences à 0). *Étape irréversible avec perte*.
5. ==Codage entropique :== parcours en **Zigzag** (regroupe les zéros à la fin), codage différentiel pour DC, codage RLE pour AC et Huffman.

<!-- VIDEO:CPT4FSkFUgs|The Unreasonable Effectiveness of JPEG: A Signal Processing Approach|Reducible|Démonstration visuelle 2D/3D complète de la DCT (Discrete Cosine Transform) par blocs 8x8, la matrice de quantification et le parcours en zigzag. -->

<!-- VIDEO:Kv1Hiv3ox8I|How are Images Compressed? [46MB to 4.07MB] JPEG In Depth|Branch Education|Animation 3D détaillée expliquant le sous-échantillonnage chroma YCbCr 4:2:0, la transformée DCT et le codage entropique de Huffman. -->`
          },
          {
            heading: "4. La Vidéo : GOP, Estimation de Mouvement & Normes",
            content: `<!-- IMAGE:video_motion.jpg|Compression vidéo temporelle : vecteurs d'estimation de mouvement et trames I/P/B du GOP -->

Formule taille brute : $\\text{Taille} = \\text{Résolution} \\times \\text{fps} \\times \\text{Profondeur} \\times \\text{Durée}$.
Combinaison de 2 compressions :
1. **INTRA-image (spatiale) :** compression type JPEG sur chaque frame isolée (~70% de réduction).
2. **INTER-images (temporelle) :** ne code que les variations et déplacements entre images successives.

**Structure du GOP (Group of Pictures) :**
- ==I-Frame (Intra) : image clé complète encodée seule (indispensable pour le *seek*).==
- ==P-Frame (Prédictive) : prédiction vers l'avant à partir de l'image précédente ($t-1$).==
- ==B-Frame (Bidirectionnelle) : interpolation à partir de l'image passée ET future ($t-1$ et $t+1$), taux de compression maximal mais nécessite un buffer.==

<!-- DIAGRAM:gopStructure -->

**Estimation de Mouvement & SAD :**
- Découpage en macroblocs $16 \\times 16$, recherche dans une fenêtre $\\pm 8\\text{ px}$.
- Vecteur de mouvement : $MV = (dx, dy)$.
- ==Critère mathématique : SAD (Somme des Différences Absolues) : recherche du MINIMUM de SAD== $= \\sum |I_{\\text{courant}}(i, j) - I_{\\text{réf}}(i, j)|$.
- ==Résidu = Bloc réel - Bloc prédit (déplacé)==.
- Décodage : Décodage CABAC $\\rightarrow$ Déquantification & IDCT $\\rightarrow$ Compensation de mouvement inverse $\\rightarrow$ Upsampling YCbCr 4:2:0 vers RVB $\\rightarrow$ Lissage et synchro PTS/DTS.

<!-- VIDEO:J_7_mnjeeww|How Video Compression Works: Motion Estimation, SAD & GOP|Leo Isikdogan|Décomposition de la compression spatiale (Intra) vs temporelle (Inter), estimation de mouvement par macroblocs avec critère SAD, et trames I/P/B. -->`
          },
          {
            heading: "5. L'Haptique : Norme IEEE 1918.1.1 & Contrôle Temps Réel",
            content: `<!-- IMAGE:haptic_glove.jpg|Gant haptique haute précision : retour d'effort kinesthésique et retour tactile cutané -->

L'haptique est une donnée bidirectionnelle (l'utilisateur agit ET ressent).
==Norme IEEE 1918.1.1-2024 : premier standard pour le Tactile Internet== (Prof. E. Steinbach).

**2 Canaux Fondamentaux :**
1. **Kinesthésique (Retour de force) :** forces, résistances musculaires, poids, articulations. ==Loi de Hooke : $F = k \\cdot x$==. Actionneurs puissants, exosquelettes.
2. **Tactile (Cutané) :** peau, textures, température, vibrations (200-300 Hz). Actionneurs ERM (cheap, lents) ou LRA (rapides, précis).

<!-- DIAGRAM:hapticLoop -->

**Boucle Haptique Temps Réel (1000 Hz) :**
- Capteur $\\rightarrow$ Moteur physique (modélisation de collision, impédance $F = K x + B v$ ou admittance) $\\rightarrow$ Actionneur.
- ==Doit tourner à 1000 Hz minimum (latence locale < 1 ms)==.

**Lois et Critères Clés :**
- ==Critère de passivité (Stabilité) : partie réelle de l'impédance $\\text{Re}(Z(s)) \\ge 0$ (système dissipatif stable)==.
- **Z-width :** plage dynamique d'impédance stable rendable (du plus mou au plus dur).
- **Bande passante :** 0 à 500 Hz (la main perçoit jusqu'à 500 Hz, donc ==$F_e = 1000\\text{ Hz}$ selon Shannon==).
- ==Compression Deadband (JND de Weber) : seuil différentiel de 7 à 10%== (aucun paquet émis en dessous).

<!-- PDF:chapitre1_multimedia_officiel.pdf|Polycopié Officiel Chapitre 1 : Nature & Représentation des Données Multimédia|26 Pages (USTO-MB)|Support de cours officiel du Pr. Abdelkrim Mebarki contenant toutes les définitions, formules audio, compression JPEG, vidéo et haptique. -->`
          }
        ],
        keyPoints: [
          "Shannon : Fe >= 2 Fmax (Téléphone 8kHz, CD 44.1kHz).",
          "Audio : Débit PCM = Fe x B x C (CD = 1.41 Mbps).",
          "Image : YCbCr 4:2:0 gagne 50% de taille.",
          "JPEG : DCT 8x8 -> Quantification (perte) -> Zigzag -> Huffman.",
          "Vidéo : GOP avec I-frame (seek), P-frame (avant), B-frame (bidirectionnelle avec buffer).",
          "Critère SAD = Somme des Différences Absolues (cherche le minimum).",
          "Haptique : Boucle à 1000 Hz (<1ms), IEEE 1918.1.1, Passivité Re(Z) >= 0, Deadband JND 7-10%."
        ]
      },
      {
        id: "cama_c2",
        title: "Chapitre 2 : Animations & Interactivité",
        tag: "Animation & Mouvement",
        summary: "Définition de l'animation, types d'animations, tableau d'implémentation de mouvements.",
        sections: [
          {
            heading: "1. Pourquoi animer ? Définition",
            content: `Le monde physique est par nature dynamique (fonction du temps).
**Définition d'une Animation Informatique :**
> *« Tout rendu (sur écran par exemple) procurant chez l'utilisateur l'illusion de mouvement. »*`
          },
          {
            heading: "2. Types d'Animations",
            content: `- Temps réel (jeux vidéo, simulateurs) vs Image par image (cinéma).
- Automatisée (lois physiques, IA) vs Manuelle (*keyframing*).`
          }
        ],
        keyPoints: [
          "Animation = illusion de mouvement procurée par un rendu dynamique.",
          "Temps réel vs Différé (image par image)."
        ]
      },
      {
        id: "cama_c3",
        title: "Chapitre 3 : Principes, Contraintes & Ergonomie",
        tag: "Architecture & IHM",
        summary: "Architecture système, les 4 ergonomies, scénario de communication vs de contenu.",
        sections: [
          {
            heading: "1. Les 4 Niveaux d'Ergonomie",
            content: `1. **Ergonomie Physique :** posture, disposition des périphériques, acuité, fatigue visuelle/auditive.
2. **Ergonomie de l'Information :** exploitation des stéréotypes de comportement (codes couleur, automatismes).
3. **Ergonomie des Systèmes :** intégration globale Homme-Machine dans la chaîne de travail.
4. **Ergonomie Cognitive :** charge mentale, mémorisation, aide à la décision, réduction de l'anxiété.`
          },
          {
            heading: "2. Composants Structurels d'une Application Multimédia (TD1)",
            content: `1. **Virtual Identity :** profil, identifiants, historique, niveau d'avancement.
2. **Database :** référentiel de cours, exercices, corrigés.
3. **Interface de Communication :** API et gestion des requêtes.
4. **Evaluation Module :** vérification des droits, calcul des notes, validation de niveau.
5. **Course Displayer :** moteur de rendu (non-linéaire pour cours, linéaire pour exercices).`
          }
        ],
        keyPoints: [
          "4 Ergonomies : Physique, Information, Systèmes, Cognitive.",
          "Scénario IHM = communication temporelle ; Scénario de Contenu = logique de fond."
        ]
      }
    ]
  },

  // ==========================================
  // 1.B VIDÉOTHÈQUE PÉDAGOGIQUE (NOTIONS CLÉS)
  // ==========================================
  videos: [
    {
      id: "vid_audio_shannon",
      module: "cama",
      tag: "Audio & Shannon",
      youtubeId: "pWjdWCePgvA",
      title: "D/A & A/D | Digital Show and Tell (Shannon-Nyquist sur Oscilloscope)",
      channel: "Xiph.Org (Monty Montgomery)",
      duration: "24 min",
      badge: "Incontournable",
      keyTakeaways: [
        "Visualisation directe sur oscilloscope analogique du théorème d'échantillonnage de Nyquist-Shannon.",
        "Démonstration physique : l'audio numérique n'a PAS de « marches d'escalier », le signal reconstruit est une sinusoïde parfaitement lisse.",
        "Compréhension visuelle du repliement de spectre (aliasing) quand Fe < 2 Fmax et du rôle du filtre anti-repliement."
      ]
    },
    {
      id: "vid_jpeg_reducible",
      module: "cama",
      tag: "Compression JPEG",
      youtubeId: "CPT4FSkFUgs",
      title: "The Unreasonable Effectiveness of JPEG (DCT 8×8 & Quantification)",
      channel: "Reducible",
      duration: "18 min",
      badge: "Animation 3D",
      keyTakeaways: [
        "Décomposition visuelle étape par étape d'une image en blocs 8×8 pixels.",
        "Visualisation 3D de la transformée en cosinus discrète (DCT) : coefficient DC et 63 harmoniques AC.",
        "Pourquoi la table de quantification supprime les hautes fréquences imperceptibles pour l'œil humain.",
        "Le balayage en zigzag pour compacter les zéros consécutifs avant l'encodage entropique de Huffman."
      ]
    },
    {
      id: "vid_jpeg_branch",
      module: "cama",
      tag: "Couleur & Sous-échantillonnage",
      youtubeId: "Kv1Hiv3ox8I",
      title: "How are Images Compressed? [46MB ↘ 4.07MB] JPEG In Depth",
      channel: "Branch Education",
      duration: "17 min",
      badge: "Modélisation 3D",
      keyTakeaways: [
        "Conversion de l'espace couleur RGB vers YCbCr (Luminance Y vs Chrominance Cb, Cr).",
        "Mécanisme du sous-échantillonnage chroma 4:2:0 réduisant les données couleur de 50% sans dégradation visible.",
        "Codage RLE (Run-Length Encoding) et arbres de Huffman pour la compression entropique finale."
      ]
    },
    {
      id: "vid_video_isikdogan",
      module: "cama",
      tag: "Vidéo & Estimation de Mouvement",
      youtubeId: "J_7_mnjeeww",
      title: "How Video Compression Works: Intra/Inter Frames, Macroblocs & SAD",
      channel: "Leo Isikdogan",
      duration: "12 min",
      badge: "Formule SAD",
      keyTakeaways: [
        "Différence fondamentale entre compression spatiale (Intra) et temporelle (Inter).",
        "Structure du GOP (Group of Pictures) : trames I (clé pour seek), P (prédiction avant) et B (bidirectionnelle avec buffer).",
        "Algorithme d'estimation de mouvement par macroblocs et minimisation du critère SAD (Somme des Différences Absolues)."
      ]
    },
    {
      id: "vid_digital_twin",
      module: "amrv",
      tag: "Modèle vs Simulation",
      youtubeId: "cfbKR48nSyQ",
      title: "What is a Digital Twin? Modèle Statique vs Simulation Dynamique",
      channel: "IBM Technology",
      duration: "6 min",
      badge: "Question TD1",
      keyTakeaways: [
        "Définition d'un jumeau numérique : modèle virtuel reproduisant le comportement d'un système physique.",
        "Distinction clé : le modèle fournit la description statique lisible par la machine, la simulation en assure l'exécution dans le temps.",
        "Le pipeline : Comprendre -> Modéliser -> Implémenter -> Simuler."
      ]
    }
  ],

  // ==========================================
  // 1.C DOCUMENTS & PDF OFFICIELS
  // ==========================================
  documents: [
    {
      id: "doc_cama_p1",
      module: "cama",
      badge: "Polycopié Officiel",
      title: "Chapitre 1 : Rappels sur la Représentation et la Nature des Données Multimédia",
      author: "Pr. Abdelkrim Mebarki • USTO-MB",
      pages: "26 pages",
      size: "4.3 Mo",
      file: "chapitre1_multimedia_officiel.pdf",
      type: "pdf",
      desc: "Document officiel complet support du test de demain : facteurs de complexité, médias continus vs discrets, physique du son, formules audio (Shannon, PCM), chaîne JPEG intégrale, vidéo (GOP, SAD) et norme Haptique IEEE 1918.1.1."
    },
    {
      id: "doc_amrv_td1",
      module: "amrv",
      badge: "Note Manuscrite TD",
      title: "TD AMRV • Question Fondamentale : Modèle vs Simulation",
      author: "Enseignant TD • USTO-MB",
      pages: "1 planche",
      size: "620 Ko",
      file: "td_amrv_handwritten_note.jpg",
      type: "image",
      desc: "Note originale manuscrite synthétisant la comparaison formelle exigée à l'examen : Définition, But, Focus (statique vs dynamique), Sortie (modèle vs exécution) et Relation mutuelle."
    },
    {
      id: "doc_ieee_haptic",
      module: "cama",
      badge: "Standard International",
      title: "Norme IEEE 1918.1.1-2024 : Haptic Codecs for the Tactile Internet",
      author: "Prof. Eckehard Steinbach & IEEE Working Group",
      pages: "Synthèse Référence",
      size: "Fiche Norme",
      file: "chapitre1_multimedia_officiel.pdf",
      type: "pdf",
      desc: "Spécification clé du Tactile Internet : boucle fermée à 1000 Hz (<1ms), stabilité via critère de passivité Re(Z(s)) ≥ 0, et compression par seuil mort (Deadband de Weber à 7-10%)."
    },
    {
      id: "doc_vrml97_spec",
      module: "amrv",
      badge: "Spécification 3D",
      title: "Guide de Modélisation VRML97 / X3D & Graphes de Scène",
      author: "Web3D Consortium / ISO/IEC 14772-1",
      pages: "Mémento Syntaxe",
      size: "Fiche Technique",
      file: "chapitre1_multimedia_officiel.pdf",
      type: "pdf",
      desc: "Nœuds de base (Transform, Shape, IndexedFaceSet), hiérarchie children, gestion des collisions et débogage des erreurs classiques d'examen (sensibilité à la casse, accolades fermantes)."
    },
    {
      id: "doc_formulas_summary",
      module: "all",
      badge: "Aide-Mémoire Examen",
      title: "Formulaire Mathématique Intégral AMRV & CAMA",
      author: "Master AIA • Révision Express",
      pages: "Formules Clés",
      size: "Synthèse",
      file: "chapitre1_multimedia_officiel.pdf",
      type: "pdf",
      desc: "Toutes les formules à connaître par cœur pour demain : Fe ≥ 2 Fmax, Débit PCM = Fe × B × C, SNR = 6.02B + 1.25 dB, YCbCr BT.601, Bézier cubique B(t), SAD vidéo, Loi de Hooke F = k·x et impédance haptique."
    }
  ],

  // ==========================================
  // 2. FLASHCARDS INTERACTIVES
  // ==========================================
  flashcards: [
    // AMRV TD Q1 - Note manuscrite
    {
      id: "fc_td_q1",
      module: "amrv",
      category: "TD AMRV Q1",
      front: "Quelle est la différence fondamentale entre Modèle et Simulation (TD AMRV Q1) ?",
      back: "• Modèle : Entité lisible par l'ordinateur, description STATIQUE, pour traiter les problèmes.\n• Simulation : Passage du monde physique au virtuel, DYNAMIQUE (évolution dans le temps), expérience par analogie.\n• Relation : Le modèle est la base de la simulation ; la simulation est l'exécution du modèle !",
      hint: "Statique vs Dynamique, entité vs exécution."
    },
    {
      id: "fc_a1",
      module: "amrv",
      category: "Concepts",
      front: "Quelle est la définition exacte de la Réalité Virtuelle selon l'examen officiel ?",
      back: "« Une translation dynamique de l'utilisateur dans le monde numérique » (A dynamic translation of the user in the digital world).",
      hint: "Pense au mouvement de l'utilisateur vers le virtuel."
    },
    {
      id: "fc_a2",
      module: "amrv",
      category: "Concepts",
      front: "Quelles sont les 3 étapes résumées du pipeline de simulation informatique (QCM officiel) ?",
      back: "Comprendre, Modéliser et Implémenter (Understand, model and implement).",
      hint: "Trois verbes d'action méthodologique."
    },
    {
      id: "fc_a4",
      module: "amrv",
      category: "Modélisation",
      front: "À quelle couche de modélisation appartient un « graphe d'adjacence » (voisinage / incidence) ?",
      back: "À la Modélisation Topologique (Topological model). Elle structure les relations spatiales et la connectivité.",
      hint: "Relations spatiales, pas formes géométriques."
    },
    {
      id: "fc_a7",
      module: "amrv",
      category: "Matériel",
      front: "Que signifie la séparation stéréoscopique « au niveau de l'écran » ?",
      back: "Cela implique que les deux images (gauche et droite) sont affichées simultanément à l'écran (ex: polarisation ou barrière de parallaxe).",
      hint: "Simultané vs alterné."
    },
    {
      id: "fc_a8",
      module: "amrv",
      category: "Matériel",
      front: "Comment fonctionne la séparation stéréoscopique par lunettes actives ?",
      back: "Elle utilise un dispositif mécanique / électro-optique télécommandé (obturateurs LCD alternant à haute fréquence).",
      hint: "Obturateurs à cristaux liquides."
    },
    {
      id: "fc_a12",
      module: "amrv",
      category: "TD / Immersion",
      front: "Quels sont les scores d'immersion (P, C, E, I) du Visiocasque et de la Salle de projection 3D ?",
      back: "Visiocasque : PAEU (4+3+3+1 = 11)\nSalle de projection 3D : PALU (4+3+4+1 = 12).",
      hint: "La salle libère le corps (L=4) par rapport au casque (E=3)."
    },

    // CAMA Chapitre 1 NOUVEAU
    {
      id: "fc_c_shannon",
      module: "cama",
      category: "Audio / Shannon",
      front: "Quelle est la condition de Shannon-Nyquist pour l'échantillonnage et que se passe-t-il si elle est violée ?",
      back: "Fe >= 2 x Fmax. Si elle n'est pas respectée, il y a repliement de spectre (aliasing) et le son devient faux/inaudible.",
      hint: "Fréquence d'échantillonnage minimale..."
    },
    {
      id: "fc_c_itd_ild",
      module: "cama",
      category: "Audio / Localisation",
      front: "Quelle est la différence entre ITD et ILD pour la localisation auditive ?",
      back: "• ITD (Interaural Time Difference) : retard temporel entre les 2 oreilles (~0.6 ms), efficace pour les GRAVES (< 1500 Hz).\n• ILD (Interaural Level Difference) : différence d'intensité due à l'ombre de la tête, efficace pour les AIGUS (> 3000 Hz).",
      hint: "Temps pour les graves, intensité/ombre pour les aigus."
    },
    {
      id: "fc_c_pcm",
      module: "cama",
      category: "Formules Audio",
      front: "Quelle est la formule du débit binaire PCM et le débit d'un CD audio stéréo ?",
      back: "Débit = Fe x Bits x Canaux.\nPour un CD (44.1 kHz, 16 bits, stéréo 2 canaux) :\nDébit = 44100 x 16 x 2 = 1 411 200 bit/s = 1.41 Mbit/s (10.5 Mo par minute).",
      hint: "44100 x 16 x 2."
    },
    {
      id: "fc_c_bezier",
      module: "cama",
      category: "Image Vectorielle",
      front: "Combien de points de contrôle possède une courbe de Bézier cubique ?",
      back: "4 points de contrôle : P0, P1, P2, P3. Formule : B(t) = (1-t)³P0 + 3(1-t)²t P1 + 3(1-t)t² P2 + t³P3 avec t dans [0, 1].",
      hint: "P0, P1, P2, P3."
    },
    {
      id: "fc_c_jpeg",
      module: "cama",
      category: "Compression Image",
      front: "Quelles sont les 5 étapes de la chaîne de compression JPEG ?",
      back: "1. RGB -> YCbCr et sous-échantillonnage 4:2:0\n2. Découpage en blocs 8x8 pixels\n3. DCT (Transformée en Cosinus Discrète : 1 DC + 63 AC)\n4. Quantification (division par la table Q : étape irréversible avec perte)\n5. Codage entropique : Zigzag + RLE (AC) + Différentiel (DC) + Huffman.",
      hint: "Couleur, blocs 8x8, fréquences DCT, table Q, zigzag/Huffman."
    },
    {
      id: "fc_c_gop",
      module: "cama",
      category: "Compression Vidéo",
      front: "Quel est le rôle de la I-Frame et pourquoi les B-Frames créent-elles de la latence ?",
      back: "• I-Frame : image clé autonome complète, permet la navigation instantanée (Seek). Sans elle, impossible de démarrer au milieu.\n• B-Frame : dépend de l'image passée (t-1) ET future (t+1), ce qui oblige le décodeur à bufferiser et attendre l'image future avant de décoder le présent (délai).",
      hint: "Indépendance pour I-frame, attente du futur pour B-frame."
    },
    {
      id: "fc_c_sad",
      module: "cama",
      category: "Vidéo / Mouvement",
      front: "Qu'est-ce que le critère SAD dans l'estimation de mouvement vidéo ?",
      back: "SAD = Somme des Différences Absolues (Sum of Absolute Differences) entre le bloc courant et le bloc de référence. L'encodeur cherche le MINIMUM de SAD dans la fenêtre de recherche pour trouver le meilleur vecteur de mouvement.",
      hint: "Différence en valeur absolue pixel par pixel..."
    },
    {
      id: "fc_c_haptique_norme",
      module: "cama",
      category: "Haptique",
      front: "Quelle est la norme internationale pour le Tactile Internet et quelle est la fréquence minimale de la boucle haptique ?",
      back: "Norme IEEE 1918.1.1-2024 (dirigée par Prof. Steinbach). La boucle haptique doit tourner à 1000 Hz minimum (latence locale < 1 ms) pour éviter l'instabilité.",
      hint: "IEEE 1918.1.1 et 1000 Hz."
    },
    {
      id: "fc_c_passivite",
      module: "cama",
      category: "Haptique",
      front: "Qu'est-ce que le critère de passivité en haptique et sa condition mathématique ?",
      back: "Le système ne doit jamais générer d'énergie (il doit être purement dissipatif), sinon il devient instable et peut blesser l'utilisateur. Condition mathématique : Re(Z(s)) >= 0.",
      hint: "Partie réelle de l'impédance >= 0."
    },
    {
      id: "fc_c_deadband",
      module: "cama",
      category: "Haptique",
      front: "Quel est le principe de la compression haptique par Deadband (seuil de Weber) ?",
      back: "Basé sur la JND (Just Noticeable Difference) de Weber de 7 à 10%. Si la variation de force est inférieure à ce seuil (ex: < 7%), aucune donnée n'est envoyée sur le réseau, car l'humain ne sent pas la différence.",
      hint: "Seuil en dessous duquel on ne transmet rien."
    }
  ],

  // ==========================================
  // 3. EXERCICES TYPES TD & TESTS CORRIGÉS
  // ==========================================
  tdExercises: [
    {
      id: "td_amrv_handwritten",
      module: "amrv",
      title: "TD AMRV • Question 1 : Modélisation vs Simulation (Fiche Manuscrite)",
      badge: "Note Officielle de TD",
      description: "Différencier formellement le modèle et la simulation selon les critères du TD.",
      interactiveType: "handwritten_notes",
      statement: `À partir de la séance de TD d'AMRV, comparer formellement la modélisation et la simulation selon :
1. Leurs définitions respectives
2. Leurs buts
3. Leurs objets de concentration (statique vs dynamique)
4. Leurs sorties respectives
5. La relation qui les unit.`,
      solution: `**Synthèse exacte du TD :**
1. **Définitions :**
   - **Modèle :** Entité lisible par l'ordinateur (machine).
   - **Simulation :** Tout passage du monde physique au monde virtuel.
2. **Buts :**
   - **But du modèle :** Pour pouvoir traiter les problèmes par la machine.
   - **But de la simulation :** Expérience par analogie.
3. **Concentration :**
   - **Modélisation :** Se concentre sur la **description statique**.
   - **Simulation :** Se concentre sur **l'évolution dans le temps (dynamique)**, l'exécution.
4. **Sorties :**
   - **Sortie du modèle :** Le modèle.
   - **Sortie de la simulation :** L'exécution.
5. **Relation mutuelle :**
   - **Modèle :** La base de la simulation.
   - **Simulation :** L'exécution du modèle.`
    },

    {
      id: "td_pdf_ex1",
      module: "cama",
      title: "Exercice d'Application 1 (PDF Chapitre 1) : Calcul de Taille Audio CD",
      badge: "Exercice du Cours",
      description: "Calcul de taille d'un son CD 44.1 kHz, 16 bits, stéréo de 3 minutes avant et après compression.",
      interactiveType: "calc_exercise_1",
      statement: `Un son de 3 minutes est enregistré en qualité CD : Sample Rate 44,1 kHz, Bit Depth 16 bits, Stéréo (2 canaux).
1. Quelle est la taille du son brut non compressé ?
2. Quelle est sa taille après compression MP3 à 128 kbps et FLAC (50%) ?`,
      solution: `**1. Débit binaire brut PCM :**
$$\\text{Débit} = F_e \\times B \\times C = 44100 \\times 16 \\times 2 = 1\\,411\\,200\\text{ bit/s} = 1.4112\\text{ Mbit/s}$$
Durée en secondes : $3\\text{ min} = 180\\text{ s}$.

**Taille brute non compressée :**
$$\\text{Taille} = \\frac{1\\,411\\,200 \\times 180}{8} = 31\\,752\\,000\\text{ octets} \\approx 31.75\\text{ Mo (ou } 30.28\\text{ Mio)}$$

**2. Après compression :**
- **En FLAC (Lossless ~50%) :**
  $$\\text{Taille FLAC} \\approx 31.75 \\times 0.50 = 15.87\\text{ Mo}$$
- **En MP3 à 128 kbit/s :**
  $$\\text{Taille MP3} = \\frac{128\\,000 \\times 180}{8} = 2\\,880\\,000\\text{ octets} \\approx 2.88\\text{ Mo}$$
  (Gain d'environ 91% d'espace !)`
    },

    {
      id: "td_pdf_ex2",
      module: "cama",
      title: "Exercice d'Application 2 (PDF Chapitre 1) : Poids Image & JPEG",
      badge: "Exercice du Cours",
      description: "Calcul de la taille d'une image Full HD 1920x1080 True Color 24 bits et compression à 10%.",
      interactiveType: "calc_exercise_2",
      statement: `Une image fait 1920x1080 pixels en True Color 24 bits (3 octets/pixel).
a) Calculer sa taille non compressée en Mo.
b) Si on la compresse en JPEG à un taux de 10% (qualité préservée), quelle est la nouvelle taille ?`,
      solution: `**a) Taille brute non compressée :**
$$\\text{Nombre de pixels} = 1920 \\times 1080 = 2\\,073\\,600\\text{ pixels}$$
$$\\text{Taille} = 2\\,073\\,600 \\times 3\\text{ octets} = 6\\,220\\,800\\text{ octets} \\approx 6.22\\text{ Mo (ou } 5.93\\text{ Mio)}$$

**b) Taille compressée en JPEG (10% de la taille d'origine) :**
$$\\text{Taille JPEG} = 6.22\\text{ Mo} \\times 0.10 \\approx 622\\text{ Ko (ou } 0.62\\text{ Mo)}$$
(L'image passe de plus de 6 Mo à environ 600 Ko sans dégradation visible à l'œil nu grâce au sous-échantillonnage 4:2:0 et à la DCT !)`
    },

    {
      id: "td_pdf_ex3",
      module: "cama",
      title: "Exercice d'Application 3 (PDF Chapitre 1) : Codage RLE sur Image 8x8",
      badge: "Exercice du Cours",
      description: "Compression RLE d'une séquence de pixels binaire 0 0 0 0 1 1 0 0.",
      interactiveType: "calc_exercise_3",
      statement: `On considère une image numérique en noir et blanc (1 bit par pixel : 0 pour blanc, 1 pour noir) de dimensions 8 × 8 pixels.
La première ligne présente la séquence : \`0 0 0 0 1 1 0 0\`.
1. Calculer le poids (en bits) d’une seule ligne de 8 pixels sans compression.
2. Calculer le poids total de l’image de 8 lignes sans compression (en bits et en octets).
3. Appliquer une compression de type RLE sur la séquence de cette première ligne.
4. Calculer le nombre d’éléments du flux compressé et commenter l’efficacité.`,
      solution: `**1. Poids d'une seule ligne sans compression :**
8 pixels $\\times 1\\text{ bit} = \\mathbf{8\\text{ bits}}$ (soit 1 octet).

**2. Poids total de l'image 8 × 8 pixels :**
$$8 \\times 8 = 64\\text{ bits} = \\frac{64}{8} = \\mathbf{8\\text{ octets}}.$$

**3. Application de la compression RLE sur la première ligne \`0 0 0 0 1 1 0 0\` :**
On compte les répétitions de symboles identiques :
- Quatre '0' $\\rightarrow$ \`(4, 0)\`
- Deux '1' $\\rightarrow$ \`(2, 1)\`
- Deux '0' $\\rightarrow$ \`(2, 0)\`
Le flux compressé RLE est : **(4, 0), (2, 1), (2, 0)**.

**4. Efficacité :**
- Nombre d'éléments : **3 paires** (longueur, valeur).
- Si chaque paire nécessite par exemple 4 bits (3 bits pour le compteur 0-7 et 1 bit pour la valeur), la ligne compressée fait $3 \\times 4 = 12\\text{ bits}$, ce qui est **supérieur** aux 8 bits initiaux !
- **Commentaire :** Sur des séquences très courtes avec des alternances fréquentes, le RLE produit une **expansion** au lieu d'une compression. Le RLE n'est rentable que sur de longues plages homogènes (comme après le balayage en zigzag des coefficients AC d'une DCT JPEG où de longues séries de zéros se suivent).`
    },

    {
      id: "td_amrv_1",
      module: "amrv",
      title: "TD1 / Exercice 1 : Calcul Empirique du Score d'Immersion",
      badge: "Incontournable",
      description: "Grille d'évaluation Présence-Contrôle-Ergonomie-Interactivité (Pr. Mebarki).",
      interactiveType: "calculator",
      statement: `Soit la grille de notation officielle :
- **Présence (P) :** Absence=0, Témoin=1, Envisageable=2, Imprégnant=3, Pénétrant=4.
- **Contrôle (C) :** Nul=0, Externe=1, Associé=2, Conjoint=3, Maîtrisant=4.
- **Ergonomie (E) :** Non Déterminé=0, Orienté=1, Contraint=2, Encombré=3, Libéré=4.
- **Interactivité (I) :** Absente=0, Unidirectionnelle=1, Bidirectionnelle=2.`,
      solution: `**Scores types officiels :**
- Visiocasque (HMD) : \`PAEU\` = 4 + 3 + 3 + 1 = **11**
- Salle de projection 3D (CAVE) : \`PALU\` = 4 + 3 + 4 + 1 = **12**
- Gants de données : \`TMEB\` = 1 + 4 + 3 + 2 = **10**
- Manette avec retour d'effort : \`TMCB\` = 1 + 4 + 2 + 2 = **9**
- Manette classique sans RE : \`AMCU\` = 0 + 4 + 2 + 1 = **7**
- Oreillettes Binaural : \`PNEA\` = 4 + 0 + 3 + 0 = **7**
- Écran tactile : \`ECOU\` = 2 + 2 + 1 + 1 = **6**
- Souris : \`AEOU\` = 0 + 1 + 1 + 1 = **3**`
    },

    {
      id: "td_amrv_2",
      module: "amrv",
      title: "Test Continu 2024-2025 : Appariement des 4 Couches de Modélisation",
      badge: "Sujet Récent",
      description: "Apparier les 10 actions développeur/utilisateur avec la bonne couche de modélisation.",
      interactiveType: "matching_mod",
      items: [
        { id: 1, action: "Coordonnées des primitives de l'objet", correct: "geometric", explain: "Définit la position des sommets/points de base de la géométrie." },
        { id: 2, action: "Modification des coordonnées des primitives au cours du temps", correct: "kinematic", explain: "Le changement dynamique de coordonnées définit un mouvement." },
        { id: 3, action: "Regroupement d'objets avec une distance fixe entre eux", correct: "topological", explain: "Structure la relation spatiale et l'association entre entités." },
        { id: 4, action: "Arrêter le déplacement d'un objet lorsqu'il approche d'un autre", correct: "semantic", explain: "Règle logique de collision et de comportement." },
        { id: 5, action: "Faire vibrer le monde entier lorsqu'un objet atteint une distance minimale", correct: "semantic", explain: "Déclencheur d'événement et rétroaction haptique comportementale." },
        { id: 6, action: "Changer la lumière ambiante lorsqu'un objet quitte la scène", correct: "semantic", explain: "Gestion d'événement contextuel basé sur une règle." },
        { id: 7, action: "Fixer les coordonnées d'un objet à une valeur minimale", correct: "kinematic", explain: "Contrainte de bornage sur le déplacement / la trajectoire." },
        { id: 8, action: "Fixer les coordonnées d'un objet à une valeur maximale", correct: "kinematic", explain: "Contrainte de bornage sur le déplacement / la trajectoire." },
        { id: 9, action: "Fixer la largeur d'un objet au double de la hauteur d'un objet donné", correct: "geometric", explain: "Dimensionnement relatif et proportions géométriques." },
        { id: 10, action: "Définir les attributs de l'objet (couleurs, dimensions, textures...)", correct: "geometric", explain: "Attributs intrinsèques de l'apparence de la forme." }
      ]
    },

    {
      id: "td_amrv_4",
      module: "amrv",
      title: "Examen 2023-2024 : Analyse & Débogage de Code VRML / X3D",
      badge: "Exercice Examen",
      description: "Détecter les erreurs de syntaxe, corriger le code et calculer le nombre d'objets visibles.",
      interactiveType: "vrml_debug",
      codeSnippet: `01. #VRML V2.0 utf8 
02. WorldInfo { 
03.     titles "Recognize objects" } 
04. DEF FBOX Shape { 
05.     appearance Appearance { 
06.         material Material {} } 
07.     geometry Box { 
08.         size 1.5 1.5 1.5 } } 
09. Transform { 
10.     translation 2 2 -2 
11.     Children Shape { 
12.         appearance Appearance { 
13.             material Material {} } 
14.         geometry Cylinder { 
15.             bottom TRUE 
16.             height 1.5 
17.             radius 1 
18.             side TRUE 
19.             top TRUE } } 
20. Transform { 
21.     translation 2 2 -2 
22.     children Shape { 
23.         appearance Appearance { 
24.             material Material {} } 
25.         geometry Cone { 
26.             bottomRadius 1.5 
27.             height 1.5 
28.             side TRUE 
29.             bottom TRUE } } } 
30. Transform { 
31.     translation 2 5 7 
32.     children Shape { 
33.         appearance Appearance { 
34.             material Material {} } 
35.         geometry Sphere { 
36.             radius 1.5 } } 
37. Transform { 
38.     translation 9 8 -5 
39.     children Shape { 
40.         appearance Appearance { 
41.             material Material {} } 
42.         geometry Cylinder { 
43.             bottom FALSE 
44.             height 2.5 
45.             radius 2 
46.             side FALSE 
47.             top FALSE } } }`,
      questions: [
        {
          q: "1. Quels sont les bugs de syntaxe ?",
          a: `• **Ligne 03 :** \`titles\` est faux -> remplacer par \`title\`\n• **Ligne 11 :** \`Children\` avec majuscule est faux -> remplacer par \`children\`\n• **Ligne 19 :** accolade fermante manquante pour fermer \`Transform\` -> ajouter \`}\`\n• **Ligne 36 :** accolades fermantes manquantes -> ajouter \`}}}\``
        },
        {
          q: "2. Combien d'objets sont effectivement visibles à l'écran ?",
          a: `**Réponse : 3 objets.**\n- Box (ligne 04) : visible\n- Cylinder (ligne 09) : visible\n- Cone (ligne 20) : masqué à l'intérieur du cylindre (même translation 2 2 -2)\n- Sphere (ligne 30) : visible\n- Cylinder (ligne 37) : invisible (bottom, top et side tous à FALSE)`
        }
      ]
    }
  ],

  // ==========================================
  // 4. BANQUE DE QUESTIONS QCM OFFICIELLES
  // ==========================================
  qcmQuestions: [
    {
      id: "q_td_q1",
      module: "amrv",
      examOrigin: "TD AMRV Officiel (Fiche Manuscrite Q1)",
      question: "Quelle est la relation fondamentale entre modèle et simulation ?",
      options: [
        "La simulation est la base du modèle",
        "Le modèle est la base de la simulation et la simulation est l'exécution du modèle",
        "Le modèle et la simulation sont deux étapes totalement indépendantes",
        "La modélisation est dynamique alors que la simulation est statique"
      ],
      correct: 1,
      explain: "Note manuscrite officielle du TD AMRV : 'Le modèle est la base de la simulation ; la simulation est l'exécution du modèle'. La modélisation se concentre sur la description statique et la simulation sur l'évolution dynamique dans le temps."
    },
    {
      id: "q1",
      module: "amrv",
      examOrigin: "Examen AMRV 2023-2024 (Session 1)",
      question: "La simulation informatique est un pipeline qui consiste à :",
      options: [
        "Comprendre, simuler et exécuter",
        "Spécifier, concevoir et coder",
        "Comprendre, modéliser et implémenter",
        "Comprendre, coder et tester"
      ],
      correct: 2,
      explain: "Option officielle de l'examen : 'Understand, model and implement'."
    },
    {
      id: "q2",
      module: "amrv",
      examOrigin: "Examen AMRV 2023-2024 (Session 1)",
      question: "La Réalité Virtuelle est (cocher la définition complète) :",
      options: [
        "Une simulation informatique incluant toutes les dimensions",
        "Une réalisation informatique immersive incluant toutes les dimensions",
        "Une translation dynamique de l'utilisateur dans le monde numérique",
        "Une application multimédia"
      ],
      correct: 2,
      explain: "Définition exacte du Pr. Mebarki : 'A dynamic translation of the user in the digital world'."
    },
    {
      id: "q3",
      module: "amrv",
      examOrigin: "Examen AMRV 2023-2024 (Session 1)",
      question: "La nature d'une interférence de contradiction est :",
      options: [
        "Une perception du monde réel",
        "Une perception du monde virtuel",
        "Une perception partielle du monde réel",
        "Une perception partielle du monde virtuel"
      ],
      correct: 2,
      explain: "C'est une 'perception partielle du monde réel' parasitant l'immersion."
    },
    {
      id: "q5",
      module: "amrv",
      examOrigin: "Examen AMRV 2023-2024 (Session 1)",
      question: "Un graphe d'adjacence (incidence et voisinage) dans un monde virtuel peut servir de :",
      options: [
        "Modèle cinématique",
        "Modèle topologique",
        "Modèle sémantique",
        "Modèle analytique associé au MV"
      ],
      correct: 1,
      explain: "Il structure les relations spatiales et de voisinage -> Modèle topologique."
    },
    {
      id: "q6",
      module: "amrv",
      examOrigin: "Examen AMRV 2023-2024 (Session 1)",
      question: "La modélisation de la fumée et de l'eau concerne :",
      options: [
        "Des solides indéformables",
        "Des solides déformables",
        "Des non-solides",
        "Des solides"
      ],
      correct: 2,
      explain: "L'eau et la fumée sont classées comme des 'non-solides' (Non-solids)."
    },
    {
      id: "q12",
      module: "amrv",
      examOrigin: "Examen AMRV 2023-2024 (Session 1)",
      question: "La séparation de l'image stéréoscopique au niveau de l'écran implique que :",
      options: [
        "L'une des images masque l'autre",
        "L'une des images est chiffrée et l'autre non",
        "Les deux images sont affichées simultanément",
        "Aucune des trois réponses précédentes"
      ],
      correct: 2,
      explain: "Au niveau de l'écran, les deux perspectives sont diffusées simultanément."
    },
    {
      id: "q13",
      module: "amrv",
      examOrigin: "Examen AMRV 2023-2024 (Session 1)",
      question: "La séparation par lunettes actives est une séparation :",
      options: [
        "Au niveau de l'écran",
        "Nécessitant des filtres unicolores",
        "Nécessitant un affichage sur les verres",
        "Qui utilise un dispositif mécanique/électro-optique télécommandé"
      ],
      correct: 3,
      explain: "Les verres obturateurs LCD sont synchronisés à distance avec l'écran."
    },
    {
      id: "q_shannon",
      module: "cama",
      examOrigin: "Chapitre 1 Multimédia (PDF Officiel)",
      question: "Pour un CD audio dont la fréquence maximale audible est de 20 kHz, quelle doit être au minimum la fréquence d'échantillonnage Fe selon Shannon ?",
      options: [
        "20 kHz",
        "22.05 kHz",
        "40 kHz (en pratique 44.1 kHz)",
        "96 kHz"
      ],
      correct: 2,
      explain: "D'après Shannon-Nyquist, $F_e \\ge 2 \\times F_{max} = 2 \\times 20 = 40\\text{ kHz}$. En pratique, le CD utilise 44.1 kHz pour laisser une marge de filtrage anti-repliement."
    },
    {
      id: "q_itd_ild",
      module: "cama",
      examOrigin: "Chapitre 1 Multimédia (PDF Officiel)",
      question: "Quel indice psychoacoustique de localisation spatiale est efficace pour les sons graves (< 1500 Hz) ?",
      options: [
        "ILD (Interaural Level Difference)",
        "ITD (Interaural Time Difference)",
        "HRTF uniquement",
        "L'enveloppe ADSR"
      ],
      correct: 1,
      explain: "L'ITD (différence de temps d'arrivée inter-aurale ~0.6 ms) est exploitée par le cerveau pour les basses fréquences (< 1500 Hz), tandis que l'ILD (ombre de la tête) agit sur les aigus (> 3000 Hz)."
    },
    {
      id: "q_jpeg_dct",
      module: "cama",
      examOrigin: "Chapitre 1 Multimédia (PDF Officiel)",
      question: "Dans la compression JPEG, quelle étape est IRREVERSIBLE et entraîne la perte de données ?",
      options: [
        "La conversion RGB vers YCbCr",
        "La Transformée en Cosinus Discrète (DCT)",
        "La quantification (division par la table Q)",
        "Le parcours en Zigzag"
      ],
      correct: 2,
      explain: "La DCT est parfaitement réversible par IDCT. C'est l'étape de quantification (division par les pas de la matrice Q et arrondissement) qui écrase définitivement les hautes fréquences à 0."
    },
    {
      id: "q_video_gop",
      module: "cama",
      examOrigin: "Chapitre 1 Multimédia (PDF Officiel)",
      question: "Pourquoi les applications de visioconférence temps réel (Zoom, Teams) limitent-elles l'usage des B-Frames ?",
      options: [
        "Parce que les B-Frames compressent moins que les P-Frames",
        "Parce que les B-Frames nécessitent de recevoir l'image future (t+1) pour décoder le présent (t), créant ainsi une latence",
        "Parce que les B-Frames ne supportent pas l'audio",
        "Parce que les B-Frames ne fonctionnent qu'en 4K"
      ],
      correct: 1,
      explain: "Les B-Frames (bidirectionnelles) dépendent de l'image passée ET de l'image future. Le décodeur doit garder en mémoire t+1 avant d'afficher t, ce qui engendre un délai incompatible avec l'interactivité temps réel."
    },
    {
      id: "q_video_sad",
      module: "cama",
      examOrigin: "Chapitre 1 Multimédia (PDF Officiel)",
      question: "Dans l'estimation de mouvement vidéo (MPEG / H.264), quel critère mathématique détermine le meilleur vecteur de mouvement ?",
      options: [
        "Le maximum du SAD (Somme des Différences Absolues)",
        "Le minimum du SAD (Somme des Différences Absolues)",
        "L'égalité parfaite des pixels",
        "Le calcul du SNR"
      ],
      correct: 1,
      explain: "L'encodeur recherche dans la fenêtre de recherche le bloc minimisant le SAD = somme(|I_courant - I_ref|). Plus le SAD est bas, plus la ressemblance est forte."
    },
    {
      id: "q_haptique_ieee",
      module: "cama",
      examOrigin: "Chapitre 1 Multimédia (PDF Officiel)",
      question: "Quelle est la condition de stabilité fondamentale (critère de passivité) imposée à une interface haptique ?",
      options: [
        "La vitesse de déplacement doit être constante",
        "Le système ne doit pas générer d'énergie (système purement dissipatif avec Re(Z(s)) >= 0)",
        "La fréquence doit être de 24 fps",
        "Le facteur de qualité doit être supérieur à 40 dB"
      ],
      correct: 1,
      explain: "Un gant haptique ne doit jamais injecter d'énergie dans la main de l'utilisateur, sinon il s'emballe et devient dangereux. Il doit toujours être dissipatif (Re(Z(s)) >= 0)."
    },
    {
      id: "q_haptique_deadband",
      module: "cama",
      examOrigin: "Chapitre 1 Multimédia (PDF Officiel)",
      question: "Sur quel principe psychophysique repose la compression haptique par 'Deadband' (IEEE 1918.1.1) ?",
      options: [
        "La loi de Moore",
        "La loi de Weber et le seuil JND (Just Noticeable Difference de 7-10%)",
        "L'algorithme de Dijkstra",
        "Le théorème de Shannon"
      ],
      correct: 1,
      explain: "D'après la loi de Weber, l'être humain ne ressent une variation de force que si elle dépasse 7 à 10%. En dessous de ce seuil mort (deadband), on ne transmet rien sur le réseau."
    }
  ]
};

window.REVISION_DATA = REVISION_DATA;
