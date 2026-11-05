(() => {
  "use strict";

  const glyphs = {
    crane: "M17 48h62m-50-2V10m-7 5h59L29 7m0 10 11 8-11 7 11 7-11 8m11-31v32m30-31v18m-4-1h9v9h-9zM48 16l6 6h8v-6",
    plan: "M24 6l44 1 1 40-43 1zM31 14h30m-30 7h23m-24 17V26h29v12m-19-12v12m14-8h5m-28 12h29",
    graph: "M24 7v39h50m-48-19h45m-43 3q4-18 8-16t8 17 9-7 8 3 9-1",
    target: "M69 29c-1 13-12 19-24 19-13 0-23-8-22-21 0-11 11-21 22-21s25 10 24 23zm-8-1c0 8-7 14-15 13-8 0-15-6-15-13 0-8 7-15 15-15 9 0 15 7 15 15zm-10 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-5 0 28-19m-8 1 9-2-3 8",
    code: "M36 13 22 25l14 11m25-23 13 12-13 11m-8-28L43 45M21 47h54",
    play: "M24 10l48-1 1 36-49 1zM44 19l14 9-14 9z",
    loop: "M67 20c-7-18-34-18-42 1m-4-8 3 9 10-2m-7 14c10 18 34 19 42-1m-8 2 9-5 5 9",
    game: "M29 17c-7 0-9 9-10 17-1 6 5 8 9 4l7-6h25l7 7c4 4 10 1 9-5-1-8-5-17-11-17zm1 8h12m-6-5v11m24-7h1m7 4h1",
    cube: "M28 16 48 6l21 10 1 22-22 11-20-10zm0 0 21 11 20-11M48 49l1-22m-4-16 22 11",
    headset: "M24 15q21-9 46 0l4 21q-8 9-21 0H43q-14 10-21 0zm1 4 11 1m23 0 11-1m-48 6-8 1v8l8 1m52-10 7 1v8l-7 1",
    eye: "M16 28q31-34 61 0-31 31-61 0zm41 0a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-9-4v7m-16-24-3-5m35 5 3-5",
    eyes: "M13 29q13-17 28 0-15 14-28 0zm42 0q14-17 28 0-14 14-28 0zm-27-4v6m42-6v6m-35-17-5-5m37 6 5-5",
    text: "M28 6l30 1 12 12-1 29-41-1zm30 1v12h12M35 20h17m-17 8h27m-27 8h23",
    screen: "M18 8l60 1-1 32-59-1zm22 34-1 7m18-7 1 7m-29 0h39m-42-16 9-12 11 10 8-8 14 10m-3-15h1",
    bird: "M27 41q20-7 20-22 1-10 10-10l9 5 9 2-10 4q-4 16-27 19zm13-14 13 1-9 6m16-18h1m-30 21-10 3m15 2-4 6m7-6 2 6M75 9l7-3m-6 16 9 1",
    spectrum: "M22 9v36h55m-49-7 7-3 8 1 7-8 6 1 8-9 9-2m-41 8 9-3 5 2 7-9 7 1 9-7m-36 32 9-2 8 1 7-7 12-2",
    bubble: "M19 10q29-6 58 0v26q-12 5-32 3l-13 9 2-10q-8 0-15-3zm12 11h30m-30 8h38",
    wave: "M13 27h13l5-9 6 21 7-33 8 42 8-32 6 11h17m-69 13h8m54-25h8",
    hand: "M31 39q-7-10-3-14 4-3 10 7l2-20q1-5 5-4l1 20 4-23q4-4 6 1l-3 22 6-17q4-3 6 1l-4 19 6-12q4-2 5 2l-4 17q-3 12-16 12-11 0-21-11z",
    person: "M54 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm-7 8-3 14 12 17m-12-17L30 47m16-23-13 5-8-6m21 0 13 4 9-9",
    balance: "M47 8v37m-15 2h29M24 17l47-2m-45 2-9 18h18zm44-2-8 18h17z",
    spring: "M12 28h13l5-11 8 22 9-22 10 22 9-22 7 11h10m-64-9v18m59-19v20",
    network: "M24 14l24 13m0 0 22-16m-22 16 20 16m-20-16L24 43m1-29a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm28 13a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm22-16a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-2 32a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-46 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0z",
    arrow: "M21 30q25-19 50-6m-13-11 15 11-16 12",
    barrier: "M17 9h64m-58 17h12m9 0h10m9 0h14M26 9l16 35m15-35L42 44M39 9l21 35m16-35L60 44m-24 3h12m7 0h12",
    lens: "M17 9h64M22 24q7 13 14 0 7 13 14 0 7 13 14 0 7 13 14 0M27 10l14 17 4 17m30-34L59 27l-4 17m-16 3h12m1 0h12",
    film: "M18 9h60v36H18zm0 8h60m-60 20h60m-39-20v20m19-20v20M27 9v8m13-8v8m15-8v8m13-8v8M27 37v8m13-8v8m15-8v8m13-8v8",
    speaker: "M19 20h14l15-12v40L33 36H19zm37-2q15 9 0 19m6-27q25 16 0 35",
    keyboard: "M19 16h56l6 24H13zm7 7h4m6 0h4m6 0h4m6 0h4m6 0h4m-46 7h4m7 0h4m6 0h4m6 0h4m7 0h4M34 35h29",
    grid: "M27 7h42v42H27zm14 0v42m14-42v42M27 21h42M27 35h42m-40-13 11 11m1-13-10 12m25 4 10 11m-9 0 11-10",
    ear: "M35 40c0 6 12 10 16 2 3-6 1-8 8-15 11-13 0-25-12-22-9 2-12 7-12 14m6-1c0-7 11-9 14-3 4 7-9 12-10 17m-16-15q-8 7 0 13m-6-17q-15 13 0 22",
    pencil: "M23 39l43-33 9 11-42 33-12 1zm6-5 8 10m23-33 9 11M21 51l6-9",
    wheel: "M69 27a22 22 0 1 1-44 0 22 22 0 0 1 44 0zm-8 0a14 14 0 1 1-28 0 14 14 0 0 1 28 0zM47 13v28M33 27h28M37 17l20 20m0-20L37 37"
  };

  function illustration(icon) {
    const path = glyphs[icon];
    return `<svg viewBox="0 0 96 56" aria-hidden="true" focusable="false"><path class="pencil-echo" d="${path}" transform="translate(0.8 0.9)"/><path class="pencil-line" d="${path}"/></svg>`;
  }

  const workedScenes = {
    craneWall: `<svg class="worked-scene" viewBox="0 0 330 145" role="img" aria-label="Grue, deux positions de la charge et distance minimale jusqu’au mur">
      <g class="scene-pencil">
        <path d="M15 124Q164 121 316 124M38 123V23l17-13 174 15-191-2m16-11v111m-15-89 14 11-14 12 14 12-14 12 14 12-14 13 14 14"/>
        <path d="M148 25v58m-9 0h18v16h-18zM296 33v90m-2-89h13v89m-12-76 11-9m-11 24 11-9m-11 24 11-9m-11 24 11-9m-11 24 11-9"/>
        <path class="scene-dash" d="M148 25l77 47m-77 28q48 12 78-19"/>
        <path d="M218 69h19v16h-19zM237 97h57m-57 0 6-4m-6 4 6 4m51-4-6-4m6 4-6 4"/>
      </g>
      <g class="scene-label"><text x="86" y="109">charge au départ</text><text x="216" y="61">au plus près</text><text x="278" y="24">mur</text><text x="243" y="114">distance min.</text></g>
    </svg>`,
    birdSignal: `<svg class="worked-scene" viewBox="0 0 330 135" role="img" aria-label="Spectrogramme schématique d’un chant, avec le temps horizontal et la fréquence verticale">
      <g class="scene-pencil">
        <path d="M59 18v88h244m-244-88-4 7m4-7 4 7m240 81-8-4m8 4-8 4"/>
        <path class="scene-dash" d="M60 58h231m-194 47V76m86 29V50m47 55V55"/>
        <path class="scene-trace" d="M97 80q16-14 24-29m-23 38q18-11 27-30m55 22q13-31 34-41m-29 49q14-30 36-39m12 18q12 10 30 10"/>
        <path d="M98 116h46m39 0h80"/>
      </g>
      <g class="scene-label"><text x="4" y="13">fréquence</text><text x="269" y="126">temps</text><text x="100" y="133">note 1</text><text x="199" y="133">note 2</text></g>
    </svg>`
  };


  function draw(entry, escape, compact = false, label = "Croquis de cours", scene) {
    const [title, diagram, rule, apply] = entry.split("~");
    const tokens = diagram.split(/\s+([>|])\s+/);
    const icons = tokens.filter((_, i) => i % 2 === 0).map(token => {
      const separator = token.indexOf(":");
      return [token.slice(0, separator), token.slice(separator + 1)];
    });
    const flow = !tokens.includes("|");
    const cols = icons.length === 4 ? 2 : Math.min(icons.length, 3);
    return `<figure class="study-sketch${compact ? " study-sketch-small" : ""}">
      <figcaption><span class="sketch-eyebrow">${escape(label)}</span><strong>${escape(title)}</strong></figcaption>
      ${workedScenes[scene] || `<ol class="sketch-nodes ${flow ? "sketch-flow" : "sketch-compare"}" data-cols="${cols}" style="--sketch-cols:${cols}">
        ${icons.map(([icon,label], i) => `<li>${flow ? `<span class="sketch-step" aria-hidden="true">${i + 1}</span>` : ""}${illustration(icon)}<span class="sketch-label">${escape(label)}</span>${tokens[2 * i + 1] === ">" ? '<span class="sketch-arrow" aria-hidden="true">→</span>' : ""}</li>`).join("")}
      </ol>`}
      <p class="sketch-rule"><mark>${escape(rule)}</mark></p>
      ${apply ? `<p class="sketch-practice"><b>Pour refaire la question</b> ${escape(apply)}</p>` : ""}
    </figure>`;
  }

  function render(file, index, escape, context, compact = false) {
    const primary = window.ATELIER_SKETCHES[file]?.[index];
    const extra = window.ATELIER_EXTRA_SKETCHES[file]?.[index] || [];
    if (!primary) return "";
    return draw(primary, escape, compact) + (extra.length && context ? `
      <details class="sketch-examples"><summary>${extra.length === 1 ? "Voir un autre exemple dessiné" : "Voir deux autres exemples dessinés"}</summary>
      ${extra.map(entry => draw(entry, escape, true)).join("")}</details>` : "");
  }

  window.ATELIER_SKETCH = { render, draw, illustration, glyphs: Object.keys(glyphs) };
})();
