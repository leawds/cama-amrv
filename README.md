# 🎓 Plateforme de Révision CAMA & AMRV (USTHB)

> Plateforme interactive d'apprentissage et de révision pour les modules **CAMA** (Création et Analyse de Multimédia Avancé) et **AMRV** (Applications Médicales et Réalité Virtuelle / Architectures & Modèles de Réalité Virtuelle).

🌐 **Déploiement en ligne :** [cama-amrv.netlify.app](https://cama-amrv.netlify.app)

---

## 📚 Modules & Matières

### 1. CAMA — Création et Analyse de Multimédia Avancé
* **Audio & Psychoacoustique :** Débits PCM, calcul de taille CD, théorème de Shannon-Nyquist, quantification, masquage fréquentiel et temporel, compression MP3 / FLAC.
* **Traitement d'Image & Espaces de Couleur :** Espaces RVB, YUV, YCbCr 4:4:4 / 4:2:2 / 4:2:0, transformation DCT, quantification et codage entropique JPEG (RLE + Huffman).
* **Compression Vidéo :** Images I, P, B, compensation et estimation de mouvement, macroblocs, codecs MPEG, H.264, H.265.
* **Systèmes Haptiques :** Retour tactile vs kinesthésique, capteurs, effecteurs, boucle haptique à 1000 Hz, Internet Tactile.

### 2. AMRV — Réalité Virtuelle & Environnements Immersifs
* **Matériels Immersifs :** Visiocasques (HMD), CAVE, systèmes de tracking 6-DOF, latence motion-to-photon.
* **Modélisation 3D :** Les 4 couches (Géométrique, Cinématique, Topologique, Sémantique).
* **Score d'Immersion :** Grille officielle **P-C-E-I** (Présence, Contrôle, Ergonomie, Interactivité).
* **Développement & Formats :** VRML / X3D, scènes 3D interactives, capteurs et nœuds d'interpolation.

---

## ✨ Fonctionnalités Clés

* 📖 **Fiches de Cours Style Cahier d'Étudiant :** Textes manuscrits, surlignage couleur, bordures bristol, diagrammes animés et schémas interactifs.
* 🎴 **Flashcards Actives :** Système de révision espacée avec compteurs de cartes maîtrisées et à revoir.
* 📝 **QCM & Annales d'Examens :** Questions issues des examens officiels avec calcul de score instantané, option pénalité et explications méthodologiques.
* 🧮 **Simulateurs & Exercices TD :** 
  * Calculateur de taille et de débit audio / vidéo non compressé et compressé.
  * Simulateur interactif de score d'immersion P-C-E-I avec presets matériels.
  * Test d'appariement interactif des 4 couches de modélisation.
  * Débogage de code VRML / X3D.
* 📚 **Glossaire & Mémento :** Définitions clés avec recherche rapide par mots-clés.
* 🎥 **Vidéothèque & Documents Officiels :** Sélection de vidéos explicatives intégrées et support de cours PDF officiel consultable en visionneuse intégrée.

---

## 🚀 Utilisation en Local

Aucun bundler ni installation complexe n'est requis. Le projet est développé en Vanilla HTML5, CSS3 moderne et JavaScript (ES6+).

1. **Cloner le projet :**
   `ash
   git clone https://github.com/leawds/cama-amrv.git
   cd cama-amrv
   `

2. **Lancer un serveur local :**
   `ash
   # Avec Python :
   python -m http.server 8080

   # Ou avec Node.js (npx serve) :
   npx serve .
   `

3. **Ouvrir dans le navigateur :**
   Accédez à http://localhost:8080

---

## 📂 Structure du Projet

`	ext
cama-amrv/
├── index.html         # Structure HTML principale & Hero section
├── style.css          # Thème académique, fiches bristol, variables & responsive
├── app.js             # Logique applicative, filtres, quiz, calculateurs & parseur
├── data.js            # Base de connaissances (cours, TD, flashcards, QCM, glossaire)
├── diagrams.js        # Schémas et diagrammes SVG / CSS interactifs
└── assets/            # Illustrations, diagrammes pédagogiques et PDF officiel
`

---

## 👨‍🎓 Auteurs & Références
* Cours officiels des enseignants de l'**USTHB** (Faculté d'Informatique).
* Plateforme conçue pour faciliter les révisions des examens de Master.