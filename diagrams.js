// Vector Infographics & Diagrams Generator for AMRV & CAMA

const DIAGRAMS = {
  // 1. Schéma Modèle vs Simulation
  modelSimulation: `
    <div class="infographic-container">
      <div class="infographic-title">📊 Modélisation (Statique) vs Simulation (Dynamique)</div>
      <svg viewBox="0 0 760 220" class="diagram-svg">
        <defs>
          <linearGradient id="gradModel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
          <linearGradient id="gradSim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0369a1"/>
            <stop offset="100%" stop-color="#0c4a6e"/>
          </linearGradient>
          <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <polygon points="0 1, 8 4, 0 7" fill="#38bdf8"/>
          </marker>
          <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <polygon points="0 1, 8 4, 0 7" fill="#34d399"/>
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Box 1: Monde Réel -->
        <rect x="20" y="40" width="160" height="130" rx="12" fill="url(#gradModel)" stroke="#64748b" stroke-width="2"/>
        <text x="100" y="70" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="700">POINT DE DÉPART</text>
        <text x="100" y="98" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="800">Monde Physique</text>
        <text x="100" y="125" text-anchor="middle" fill="#94a3b8" font-size="11">Système réel, objet</text>
        <text x="100" y="142" text-anchor="middle" fill="#94a3b8" font-size="11">Phénomène physique</text>

        <!-- Arrow 1: Modélisation -->
        <path d="M 185 105 L 255 105" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrowBlue)" stroke-dasharray="4"/>
        <text x="220" y="90" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">1. Abstraction</text>

        <!-- Box 2: Modèle -->
        <rect x="260" y="30" width="200" height="150" rx="12" fill="url(#gradModel)" stroke="#38bdf8" stroke-width="2.5"/>
        <rect x="275" y="45" width="80" height="20" rx="4" fill="rgba(56,189,248,0.15)"/>
        <text x="315" y="59" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="700">STATIQUE</text>
        <text x="360" y="95" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="800">Le MODÈLE</text>
        <text x="360" y="120" text-anchor="middle" fill="#cbd5e1" font-size="12">Entité lisible par la machine</text>
        <text x="360" y="140" text-anchor="middle" fill="#94a3b8" font-size="11">Structures de données, équations</text>
        <text x="360" y="160" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="600">Sortie : Le Modèle</text>

        <!-- Arrow 2: Exécution -->
        <path d="M 465 105 L 535 105" stroke="#34d399" stroke-width="3" marker-end="url(#arrowGreen)" stroke-dasharray="4"/>
        <text x="500" y="90" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">2. Exécution</text>

        <!-- Box 3: Simulation -->
        <rect x="540" y="30" width="200" height="150" rx="12" fill="url(#gradSim)" stroke="#34d399" stroke-width="2.5"/>
        <rect x="555" y="45" width="85" height="20" rx="4" fill="rgba(52,211,153,0.2)"/>
        <text x="597" y="59" text-anchor="middle" fill="#34d399" font-size="10" font-weight="700">DYNAMIQUE</text>
        <text x="640" y="95" text-anchor="middle" fill="#34d399" font-size="18" font-weight="800">La SIMULATION</text>
        <text x="640" y="120" text-anchor="middle" fill="#ecfdf5" font-size="12">Évolution dans le Temps</text>
        <text x="640" y="140" text-anchor="middle" fill="#a7f3d0" font-size="11">Expérience par analogie</text>
        <text x="640" y="160" text-anchor="middle" fill="#34d399" font-size="11" font-weight="600">Sortie : L'Exécution</text>
      </svg>
      <div class="infographic-caption">
        <strong>Relation fondamentale du TD :</strong> Le modèle est la <em>base</em> de la simulation ; la simulation est <em>l'exécution dynamique</em> du modèle au cours du temps.
      </div>
    </div>
  `,

  // 2. Enveloppe ADSR Son
  adsr: `
    <div class="infographic-container">
      <div class="infographic-title">🎵 L'Enveloppe ADSR d'un Signal Audio Naturel</div>
      <svg viewBox="0 0 720 230" class="diagram-svg">
        <defs>
          <linearGradient id="adsrFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgba(56,189,248,0.3)"/>
            <stop offset="100%" stop-color="rgba(56,189,248,0.0)"/>
          </linearGradient>
        </defs>

        <!-- Axes -->
        <line x1="60" y1="180" x2="680" y2="180" stroke="#475569" stroke-width="2"/>
        <line x1="60" y1="20" x2="60" y2="180" stroke="#475569" stroke-width="2"/>
        <text x="50" y="25" text-anchor="end" fill="#94a3b8" font-size="11">Amplitude (V)</text>
        <text x="680" y="200" text-anchor="end" fill="#94a3b8" font-size="11">Temps (t)</text>

        <!-- ADSR Curve Points: (60,180) -> Attack(140, 40) -> Decay(240, 90) -> Sustain(480, 90) -> Release(640, 180) -->
        <polygon points="60,180 140,40 240,90 480,90 640,180" fill="url(#adsrFill)"/>
        <polyline points="60,180 140,40 240,90 480,90 640,180" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>

        <!-- Phase Separators -->
        <line x1="140" y1="40" x2="140" y2="180" stroke="#64748b" stroke-dasharray="3"/>
        <line x1="240" y1="90" x2="240" y2="180" stroke="#64748b" stroke-dasharray="3"/>
        <line x1="480" y1="90" x2="480" y2="180" stroke="#64748b" stroke-dasharray="3"/>

        <!-- Labels -->
        <text x="100" y="110" text-anchor="middle" fill="#38bdf8" font-weight="700" font-size="13">Attack (A)</text>
        <text x="100" y="128" text-anchor="middle" fill="#94a3b8" font-size="10">Attaque rapide</text>

        <text x="190" y="110" text-anchor="middle" fill="#38bdf8" font-weight="700" font-size="13">Decay (D)</text>
        <text x="190" y="128" text-anchor="middle" fill="#94a3b8" font-size="10">Chute initiale</text>

        <text x="360" y="80" text-anchor="middle" fill="#34d399" font-weight="700" font-size="13">Sustain (S)</text>
        <text x="360" y="115" text-anchor="middle" fill="#94a3b8" font-size="10">Tenue de la note</text>

        <text x="560" y="130" text-anchor="middle" fill="#f43f5e" font-weight="700" font-size="13">Release (R)</text>
        <text x="560" y="148" text-anchor="middle" fill="#94a3b8" font-size="10">Extinction sonore</text>

        <!-- Peak marker -->
        <circle cx="140" cy="40" r="5" fill="#f43f5e"/>
        <text x="140" y="25" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="700">Pic max</text>
      </svg>
      <div class="infographic-caption">
        Caractérise tout instrument acoustique. Permet aux synthétiseurs et aux algorithmes de compression de modéliser le profil temporel du son.
      </div>
    </div>
  `,

  // 3. Échantillonnage & Shannon
  shannon: `
    <div class="infographic-container">
      <div class="infographic-title">⚡ Échantillonnage Audio & Théorème de Shannon-Nyquist</div>
      <svg viewBox="0 0 740 220" class="diagram-svg">
        <!-- Axes -->
        <line x1="50" y1="110" x2="700" y2="110" stroke="#334155" stroke-width="1.5"/>
        <line x1="50" y1="20" x2="50" y2="200" stroke="#475569" stroke-width="2"/>

        <!-- Continuous Wave -->
        <path d="M 50 110 Q 100 20, 150 110 T 250 110 T 350 110 T 450 110 T 550 110 T 650 110" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4"/>

        <!-- Sample Stems & Points (Fe >= 2 Fmax) -->
        <!-- Samples every 33px -->
        <g stroke="#38bdf8" stroke-width="2">
          <line x1="83" y1="110" x2="83" y2="55"/> <circle cx="83" cy="55" r="4.5" fill="#38bdf8"/>
          <line x1="116" y1="110" x2="116" y2="55"/> <circle cx="116" cy="55" r="4.5" fill="#38bdf8"/>
          <line x1="150" y1="110" x2="150" y2="110"/> <circle cx="150" cy="110" r="4.5" fill="#38bdf8"/>
          <line x1="183" y1="110" x2="183" y2="165"/> <circle cx="183" cy="165" r="4.5" fill="#38bdf8"/>
          <line x1="216" y1="110" x2="216" y2="165"/> <circle cx="216" cy="165" r="4.5" fill="#38bdf8"/>
          <line x1="250" y1="110" x2="250" y2="110"/> <circle cx="250" cy="110" r="4.5" fill="#38bdf8"/>
          <line x1="283" y1="110" x2="283" y2="55"/> <circle cx="283" cy="55" r="4.5" fill="#38bdf8"/>
          <line x1="316" y1="110" x2="316" y2="55"/> <circle cx="316" cy="55" r="4.5" fill="#38bdf8"/>
          <line x1="350" y1="110" x2="350" y2="110"/> <circle cx="350" cy="110" r="4.5" fill="#38bdf8"/>
          <line x1="383" y1="110" x2="383" y2="165"/> <circle cx="383" cy="165" r="4.5" fill="#38bdf8"/>
          <line x1="416" y1="110" x2="416" y2="165"/> <circle cx="416" cy="165" r="4.5" fill="#38bdf8"/>
          <line x1="450" y1="110" x2="450" y2="110"/> <circle cx="450" cy="110" r="4.5" fill="#38bdf8"/>
        </g>

        <!-- Interval Te marker -->
        <line x1="283" y1="30" x2="316" y2="30" stroke="#34d399" stroke-width="2"/>
        <text x="300" y="22" text-anchor="middle" fill="#34d399" font-size="11" font-weight="700">Te = 1/Fe</text>

        <!-- Callout Box -->
        <rect x="490" y="25" width="230" height="110" rx="8" fill="rgba(15,23,42,0.85)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="505" y="50" fill="#38bdf8" font-size="12" font-weight="700">Condition de Shannon-Nyquist :</text>
        <text x="505" y="75" fill="#f8fafc" font-size="16" font-weight="800">Fe ≥ 2 × Fmax</text>
        <text x="505" y="98" fill="#94a3b8" font-size="11">• Téléphone : Fmax=3.4 kHz → Fe=8 kHz</text>
        <text x="505" y="118" fill="#94a3b8" font-size="11">• CD Audio : Fmax=20 kHz → Fe=44.1 kHz</text>
      </svg>
      <div class="infographic-caption">
        Si la fréquence d'échantillonnage $F_e < 2 F_{max}$, un phénomène irréversible de <strong>repliement de spectre (aliasing)</strong> détruit le signal.
      </div>
    </div>
  `,

  // 4. Sous-échantillonnage Chroma 4:2:0
  chromaSubsampling: `
    <div class="infographic-container">
      <div class="infographic-title">🎨 Sous-échantillonnage Chromatique (Chroma Subsampling) 4:4:4 vs 4:2:0</div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 10px;">
        <!-- 4:4:4 -->
        <div style="background: rgba(15,23,42,0.6); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); text-align: center;">
          <h5 style="color: #94a3b8; margin-bottom: 8px;">Format 4:4:4 (Pleine Résolution - 100% Taille)</h5>
          <svg viewBox="0 0 200 120" style="max-width: 180px; margin: 0 auto; display: block;">
            <!-- 4x2 grid for Y -->
            <g fill="#38bdf8" stroke="#0f172a" stroke-width="2">
              <rect x="10" y="10" width="40" height="40"/><rect x="55" y="10" width="40" height="40"/><rect x="100" y="10" width="40" height="40"/><rect x="145" y="10" width="40" height="40"/>
              <rect x="10" y="55" width="40" height="40"/><rect x="55" y="55" width="40" height="40"/><rect x="100" y="55" width="40" height="40"/><rect x="145" y="55" width="40" height="40"/>
            </g>
            <!-- dots inside showing Cb/Cr present for every pixel -->
            <g fill="#f43f5e">
              <circle cx="30" cy="30" r="6"/><circle cx="75" cy="30" r="6"/><circle cx="120" cy="30" r="6"/><circle cx="165" cy="30" r="6"/>
              <circle cx="30" cy="75" r="6"/><circle cx="75" cy="75" r="6"/><circle cx="120" cy="75" r="6"/><circle cx="165" cy="75" r="6"/>
            </g>
          </svg>
          <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 8px;">Chaque pixel a son Y, son Cb et son Cr. Zéro compression chromatique.</p>
        </div>

        <!-- 4:2:0 -->
        <div style="background: rgba(15,23,42,0.6); padding: 16px; border-radius: 8px; border: 1px solid #34d399; text-align: center;">
          <h5 style="color: #34d399; margin-bottom: 8px;">Format 4:2:0 (Standard JPEG & Vidéo - 50% de Gain)</h5>
          <svg viewBox="0 0 200 120" style="max-width: 180px; margin: 0 auto; display: block;">
            <!-- 4x2 grid for Y (full) -->
            <g fill="#38bdf8" stroke="#0f172a" stroke-width="2">
              <rect x="10" y="10" width="40" height="40"/><rect x="55" y="10" width="40" height="40"/><rect x="100" y="10" width="40" height="40"/><rect x="145" y="10" width="40" height="40"/>
              <rect x="10" y="55" width="40" height="40"/><rect x="55" y="55" width="40" height="40"/><rect x="100" y="55" width="40" height="40"/><rect x="145" y="55" width="40" height="40"/>
            </g>
            <!-- Only 2 chroma samples for 8 pixels! -->
            <g fill="#f43f5e">
              <rect x="10" y="10" width="85" height="85" fill="none" stroke="#34d399" stroke-width="3" stroke-dasharray="4"/>
              <circle cx="52" cy="52" r="10"/>
              <rect x="100" y="10" width="85" height="85" fill="none" stroke="#34d399" stroke-width="3" stroke-dasharray="4"/>
              <circle cx="142" cy="52" r="10"/>
            </g>
          </svg>
          <p style="font-size: 0.8rem; color: #a7f3d0; margin-top: 8px;">1 échantillon de couleur Cb/Cr partagé pour un bloc de 4 pixels (2x2). C'est transparent pour l'œil humain !</p>
        </div>
      </div>
    </div>
  `,

  // 5. Structure GOP Vidéo (I, P, B)
  gopStructure: `
    <div class="infographic-container">
      <div class="infographic-title">🎬 Structure d'un GOP Vidéo (Group of Pictures) & Types de Trames</div>
      <svg viewBox="0 0 740 200" class="diagram-svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
          </marker>
          <marker id="arrowGreen" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
          </marker>
        </defs>

        <!-- Frames in GOP: I0, B1, B2, P3, B4, B5, I6 -->
        <!-- I-Frame 0 -->
        <g transform="translate(40, 70)">
          <rect width="65" height="85" rx="8" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
          <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">I</text>
          <text x="32" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Intra</text>
          <text x="32" y="74" text-anchor="middle" fill="#ffe4e6" font-size="9">Photo clé</text>
        </g>

        <!-- B-Frame 1 -->
        <g transform="translate(140, 70)">
          <rect width="65" height="85" rx="8" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
          <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">B</text>
          <text x="32" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Bidir</text>
          <text x="32" y="74" text-anchor="middle" fill="#dbeafe" font-size="9">Buffer t+1</text>
        </g>

        <!-- B-Frame 2 -->
        <g transform="translate(240, 70)">
          <rect width="65" height="85" rx="8" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
          <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">B</text>
          <text x="32" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Bidir</text>
          <text x="32" y="74" text-anchor="middle" fill="#dbeafe" font-size="9">Buffer t+1</text>
        </g>

        <!-- P-Frame 3 -->
        <g transform="translate(340, 70)">
          <rect width="65" height="85" rx="8" fill="#10b981" stroke="#fff" stroke-width="1.5"/>
          <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">P</text>
          <text x="32" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Prédictive</text>
          <text x="32" y="74" text-anchor="middle" fill="#d1fae5" font-size="9">Réf. avant</text>
        </g>

        <!-- B-Frame 4 -->
        <g transform="translate(440, 70)">
          <rect width="65" height="85" rx="8" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
          <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">B</text>
          <text x="32" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Bidir</text>
        </g>

        <!-- B-Frame 5 -->
        <g transform="translate(540, 70)">
          <rect width="65" height="85" rx="8" fill="#3b82f6" stroke="#fff" stroke-width="1.5"/>
          <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">B</text>
          <text x="32" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Bidir</text>
        </g>

        <!-- I-Frame 6 (Next GOP) -->
        <g transform="translate(640, 70)">
          <rect width="65" height="85" rx="8" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
          <text x="32" y="38" text-anchor="middle" fill="#fff" font-size="20" font-weight="800">I</text>
          <text x="32" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="700">Intra</text>
        </g>

        <!-- Prediction Curved Arrows -->
        <!-- I0 -> P3 -->
        <path d="M 72 65 Q 220 15, 370 65" fill="none" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrowGreen)"/>
        <!-- P3 -> B1 and B2 -->
        <path d="M 370 70 Q 240 40, 175 68" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3"/>
        <path d="M 370 70 Q 300 45, 275 68" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3"/>
      </svg>
      <div class="infographic-caption">
        • <strong>I-Frame :</strong> image indépendante indispensable pour le saut temporel (Seek).<br>
        • <strong>B-Frame :</strong> nécessite l'image du futur pour décoder le présent $\rightarrow$ induit une latence (évitée sur Zoom).
      </div>
    </div>
  `,

  // 6. Boucle Haptique Temps Réel
  hapticLoop: `
    <div class="infographic-container">
      <div class="infographic-title">✋ Boucle Haptique Fermée Temps Réel à 1000 Hz (Norme IEEE 1918.1.1)</div>
      <svg viewBox="0 0 740 210" class="diagram-svg">
        <defs>
          <linearGradient id="hapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>

        <!-- Node 1: Capteur -->
        <rect x="40" y="45" width="180" height="110" rx="10" fill="url(#hapGrad)" stroke="#38bdf8" stroke-width="2"/>
        <text x="130" y="75" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="800">1. CAPTEURS</text>
        <text x="130" y="100" text-anchor="middle" fill="#cbd5e1" font-size="11">Position (x) & Vitesse (v)</text>
        <text x="130" y="120" text-anchor="middle" fill="#94a3b8" font-size="10">Doigt / Main / Articulations</text>

        <!-- Forward Arrow to Physics Engine -->
        <path d="M 225 100 L 275 100" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)"/>

        <!-- Node 2: Moteur Physique -->
        <rect x="280" y="30" width="200" height="140" rx="10" fill="url(#hapGrad)" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="380" y="60" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="800">2. MOTEUR PHYSIQUE</text>
        <text x="380" y="85" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">Loi de Hooke : F = k · x</text>
        <text x="380" y="108" text-anchor="middle" fill="#cbd5e1" font-size="11">Impédance : F = K·x + B·v</text>
        <text x="380" y="128" text-anchor="middle" fill="#a7f3d0" font-size="10" font-weight="700">Passivité : Re(Z(s)) ≥ 0</text>
        <text x="380" y="148" text-anchor="middle" fill="#94a3b8" font-size="10">Collision Mur Virtuel</text>

        <!-- Forward Arrow to Actuator -->
        <path d="M 485 100 L 535 100" stroke="#34d399" stroke-width="3"/>

        <!-- Node 3: Actionneur -->
        <rect x="540" y="45" width="180" height="110" rx="10" fill="url(#hapGrad)" stroke="#34d399" stroke-width="2"/>
        <text x="630" y="75" text-anchor="middle" fill="#34d399" font-size="15" font-weight="800">3. ACTIONNEURS</text>
        <text x="630" y="100" text-anchor="middle" fill="#cbd5e1" font-size="11">Restitution de Force / Vibration</text>
        <text x="630" y="120" text-anchor="middle" fill="#94a3b8" font-size="10">Moteurs ERM, LRA, Exosquelettes</text>

        <!-- Loop Arrow Back -->
        <path d="M 630 160 C 630 200, 130 200, 130 160" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4"/>
        <text x="380" y="195" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700">Boucle fermée à 1000 Hz minimum (latence &lt; 1 ms)</text>
      </svg>
      <div class="infographic-caption">
        <strong>Critères essentiels d'examen :</strong> Stabilité dissipative (le système ne donne pas d'énergie, $\text{Re}(Z) \ge 0$), bande passante de 0 à 500 Hz perçue par la main ($F_e = 1000\text{ Hz}$), compression Deadband JND de 7 à 10%.
      </div>
    </div>
  `
};

window.DIAGRAMS = DIAGRAMS;
