(() => {
  "use strict";

  const base = "assets/test-1/";
  const byId = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const inline = text => escape(text)
    .replace(/==(?:\w+:)?(.+?)==/g, "<mark>$1</mark>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/&lt;code&gt;(.+?)&lt;\/code&gt;/g, "<code>$1</code>");

  function prose(text, icons) {
    const lines = text.trim().split("\n");
    const html = [];
    let step = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      if (line.startsWith("|")) {
        const cells = row => row.trim().slice(1, -1).split("|");
        const header = cells(line);
        i += 2;
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(cells(lines[i++]));
        i--;
        if (icons) {
          html.push(`<div class="solution-steps">${rows.map(([title, ...values]) =>
            solutionNote(title, icons[step++], `<dl>${values.map((value, index) =>
              `<div><dt>${inline(header[index + 1].trim())}</dt><dd>${inline(value.trim())}</dd></div>`
            ).join("")}</dl>`)
          ).join("")}</div>`);
          continue;
        }
        html.push(`<div class="table-scroll" tabindex="0" aria-label="Tableau à faire défiler"><table><thead><tr>${header.map(v => `<th scope="col">${inline(v)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${row.map((v, i) => `<td data-label="${escape(header[i].trim())}">${inline(v)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      } else {
        const numbered = icons && line.match(/^(\d+\. \*\*[^*]+\*\*)\s+(.+)$/);
        html.push(numbered
          ? solutionNote(numbered[1], icons[step++], `<p>${inline(numbered[2])}</p>`)
          : `<p>${inline(line)}</p>`);
      }
    }
    return html.join("");
  }

  function solutionNote(title, icon, content) {
    return `<section class="solution-note">
      <div class="solution-doodle" aria-hidden="true">${window.ATELIER_SKETCH.illustration(icon)}</div>
      <div class="solution-note-text"><h4>${inline(title.trim())}</h4>${content}</div>
    </section>`;
  }

  const tdRefs = {
    amvr: [[[0, 1]], [[0, 1]], [[0, 2], [1, 1], [1, 2], [1, 3]]],
    cama: [[[0, 2], [0, 3], [0, 4], [0, 5]], [[0, 1], [0, 3]], [[0, 1], [0, 3]]]
  };

  const archiveTopics = {
    "MAVR_2024_2025_Session_0_001.pdf": [
      ["Modélisation", "Classer une coordonnée, un mouvement, une relation spatiale ou une règle.", [[0, 4]], 0],
      ["Sens haptiques", "Identifier le sens sollicité, puis distinguer perception et retour mécanique.", [[1, 2]], 1]
    ],
    "MAVR_2023_2024_Session_0_Test3_Statement.pdf": [
      ["Barrière de parallaxe", "Repérer le masque. Il bloque certains rayons pour séparer les vues.", [[0, 5]], 0],
      ["Réseau lenticulaire", "Repérer les lentilles. Elles redirigent les rayons vers l’œil visé.", [[0, 5]], 1]
    ],
    "MAVR_2024_2025_Session_0_5.pdf": [
      ["Q1 à Q4 · Immersion et géométrie", "Perception du réel, degrés d’immersion, résolution et accès à la structure géométrique.", [[0, 1], [1, 4]], 0],
      ["Q5 à Q10 · Dispositifs et modèles", "Séparer affichage, pression haptique, restitution du son et structure de voisinage.", [[2, 1], [3, 2], [4, 1], [1, 4]], 0]
    ],
    "MAVR_2024_2025_Exam_001.pdf": [
      ["Ex. 1 · QCM", "Revoir le transfert perceptif, les interfaces et leurs modalités.", [[0, 1], [1, 2]], 0],
      ["Ex. 2 · Objet vibrant", "Tracer la boucle stimulus → perception → réponse → évaluation.", [[1, 2], [0, 3]], 1],
      ["Ex. 3 · Code VRML", "Relire la syntaxe et le rôle des nœuds avant de séparer les objets qui se masquent.", [[2, 1]], 2]
    ],
    "AMAD_2024_2025_Session_0_001.pdf": [
      ["Préproduction · Lignes 1 à 7", "Synopsis et séquencier concernent le projet. Planches, vues et synchronisation labiale s’appliquent à des personnages ou plans.", [[0, 2]], 0],
      ["Production et montage · Lignes 8 à 14", "Distinguer les tâches de création, les tâches assistées et les opérations demandant du matériel.", [[0, 2], [0, 3]], 0]
    ],
    "AMAD_2024_2025_Session_0_2nd.pdf": [
      ["Calcul · Variante 1", "Distinguer les opérandes de la décision de validation. Associer texte, parole et illustration à leurs supports.", [[0, 1], [0, 5], [1, 1]], 0],
      ["Langue · Variante 2", "Suivre l’image et le nom depuis la banque, puis le texte de l’enfant jusqu’à la décision et au retour.", [[0, 1], [0, 5], [1, 1]], 1]
    ],
    "AMAD_2024_2025_Session_0_5.pdf": [
      ["Q1 à Q3 et Q10 · Modalités", "Relier le rôle perceptif à la manière dont les entités et les canaux sont organisés.", [[0, 1]], 0],
      ["Q4 à Q9 · Animation", "Relier tâches de production, codage des couleurs, animation automatique et expressions faciales.", [[1, 2], [2, 1]], 0]
    ],
    "AMAD_2024_2025_Exam_001.pdf": [
      ["Ex. 1 · QCM", "Relier les choix au processus de communication, à la structure des scènes et aux techniques d’animation.", [[0, 1], [0, 5], [1, 2], [2, 1]], 0],
      ["Ex. 2 Q1 · Dialogue", "Représenter une décision, son retour visuel et la boucle du jeu.", [[0, 1], [0, 5]], 2],
      ["Ex. 2 Q2 · Matrice", "Distinguer l’objet animé, l’attribut modifié, la transformation et le déclencheur.", [[0, 5], [1, 2]], 3]
    ]
  };

  const qcmPositions = {
    "AMAD_2024_2025_Session_0_5.pdf": [115,183,250,317,384,451,519,586,653,720],
    "MAVR_2024_2025_Session_0_5.pdf": [115,181,248,315,383,450,522,589,656,724],
    "AMAD_2024_2025_Exam_001.pdf": [148,221,293,366,439,514,588,662,737,37,111,182,252,323,395,466,537,606,676,747],
    "MAVR_2024_2025_Exam_001.pdf": [120,187,255,323,393,462,531,601,670,740,37,105,174,243,318,388,457,526,596,665]
  };

  function extractParts(course) {
    const parts = [];
    let part;
    if (course.title === "Visual Modality") {
      const sections = course.body.split(/(?=^Part (?:One|Two|Three)\b)/m);
      if (sections.length > 1) return sections.slice(1).map((section, index) => {
        const [title, ...lines] = section.split("\n");
        return { num: index + 1, title, body: lines.join("\n") };
      });
    }
    for (const line of course.body.split("\n")) {
      const match = line.match(/^\s*(?:\p{Extended_Pictographic}\s*)?(\d+)\.\s+([^\s].*)$/u);
      if (match && match[2].length <= 135 && +match[1] === parts.length + 1 && !match[2].startsWith("Mediated (")) {
        part = { num: +match[1], title: match[2].trim(), body: "" };
        parts.push(part);
      } else if (part) {
        part.body += line + "\n";
      }
    }
    if (!parts.length) return [{ num: 1, title: course.title, body: course.body }];
    return parts;
  }

  const catalogue = {};
  for (const [module, td] of Object.entries(window.TEST_ONE)) {
    catalogue[module] = [{
      title: td.title,
      short: module === "amvr" ? "Grue et réalité virtuelle" : "Médias et communication",
      meta: module === "amvr" ? "Fiche 1 · 2026–2027" : "Fiche 1 · Scan du Drive 2025–2026",
      file: td.td,
      courses: td.courses,
      lesson: td.lesson,
      questions: td.questions.map(([title, prompt, body], i) => ({ title, prompt, body, refs: tdRefs[module][i], study: window.ATELIER_TD1[td.td][i], page: 0 }))
    }, ...window.TEST_ONE_ARCHIVE[module].map(archive => {
      const parts = archive.correction.trim().split(/\n\s*\n/);
      const topics = archiveTopics[archive.file];
      const courses = archive.courses.slice();
      if (archive.file === "MAVR_2024_2025_Exam_001.pdf") courses.push(
        ["Modélisation du monde virtuel", "1XhY9s24RP0ZVGPsaczfs1durjcHt0cfq"],
        ["Vision", "1caPLcO6Hb4w0PQICmanBBDIMtfCTrB1L"],
        ["Son", "1CmByNiB6J7vd-VLHoJHFcQDDIo6F1wSx"]
      );
      if (archive.file === "AMAD_2024_2025_Exam_001.pdf") courses.push(
        ["Modalité visuelle", "1_yNth1ynLynXkjvN4oe2uUl43zIfpjyz"],
        ["Au-delà de la vision", "1NdIrrz6IDqwr9biz9Przp-hrCG-dxTos"],
        ["Techniques d’animation", "1n_zftXTNMijTt_m72GWpmMQ7tktH25n0"]
      );
      if (archive.file === "AMAD_2024_2025_Session_0_5.pdf") courses.push(
        ["Communication and Multimedia", "15DOxfUM9LANVWhvbHWZUBpb0e5av-WMe"]
      );
      const qcm = window.ATELIER_QCM[archive.file];
      const exam = archive.file.includes("_Exam_");
      const secondPageAt = module === "cama" ? 9 : 10;
      const questions = qcm ? qcm.map(([title, key, explanation, refs], i) => ({
        title: "Q" + (i + 1) + " · " + title,
        prompt: "",
        key, body: explanation,
        refs,
        page: exam && i >= secondPageAt ? 1 : 0, offset: (qcmPositions[archive.file][i] - 20) / 842
      })) : [];
      if (!qcm || exam) {
        topics.forEach(([title, text, refs, page], i) => {
          if (qcm && i === 0) return;
          const sameCount = topics.length === parts.length;
          const body = sameCount ? parts[i] : exam && module === "cama" ? parts[1] : archive.correction;
          questions.push({ title, prompt: "", text, refs, page, body, diagram: window.ATELIER_ANNAL_SOLUTIONS[archive.file]?.[qcm ? i - 1 : i] });
        });
      }
      return { ...archive, courses, short: archive.title, questions };
    })];
  }

  const courseMap = Object.fromEntries(Object.entries(window.ATELIER_COURS).map(([id, course]) => [id, { ...course, parts: extractParts(course) }]));
  function readStorage() {
    try { return JSON.parse(localStorage.getItem("atelier-test-1-v1")) || {}; }
    catch { return {}; }
  }
  const saved = readStorage();
  const hash = location.hash.slice(1);
  let module = Object.hasOwn(catalogue, hash) ? hash : Object.hasOwn(catalogue, saved.module) ? saved.module : "amvr";
  let docIndex = Math.max(0, catalogue[module].findIndex(doc => doc.file === saved.file));
  let questionIndex = 0;
  let courseIndex = 0;
  let mode = "solution";
  let view = "subject";
  let page = 0;
  let zoom = 100;
  let split = Math.min(70, Math.max(30, Number(saved.split) || 47));
  let mobile = "notes";
  const done = new Set(Array.isArray(saved.done) ? saved.done : []);
  const notebook = byId("notebook");
  const notes = byId("notes");
  const spine = byId("spine");
  const viewer = byId("viewer");
  const scan = byId("scan");

  const documentData = () => catalogue[module][docIndex];
  const taskId = (doc, index) => `${doc.file}:question:${index}`;
  const courseId = (id, num) => `${id}:part:${num}`;
  const save = () => {
    try { localStorage.setItem("atelier-test-1-v1", JSON.stringify({ module, file: documentData().file, split, done: [...done] })); }
    catch { /* The current session still works when storage is unavailable. */ }
  };

  function readinessTasks() {
    const td = catalogue[module][0];
    return [
      ...td.courses.flatMap(([, id], c) => courseMap[id].parts.map(part => ({
        id: courseId(id, part.num), mode: "course", c, num: part.num, label: part.title
      }))),
      ...td.questions.map((question, q) => ({ id: taskId(td, q), mode: "solution", q, label: question.title }))
    ];
  }

  function updateProgress() {
    const tasks = readinessTasks();
    const count = tasks.filter(task => done.has(task.id)).length;
    const score = Math.round(count / tasks.length * 100);
    byId("progress").value = score;
    byId("progress-label").textContent = "Préparation " + module.toUpperCase();
    byId("progress-number").textContent = score + " %";
    byId("progress-detail").textContent = `${count}/${tasks.length} étapes du parcours Fiche 1`;
    const next = tasks.find(task => !done.has(task.id));
    byId("progress-next").textContent = next ? "À suivre · " + next.label : "Parcours terminé";
    byId("next-task").innerHTML = (count === tasks.length ? "Revoir le parcours" : "Prochaine étape") + ' <span aria-hidden="true">↗</span>';
  }

  function pressed(attribute, value) {
    document.querySelectorAll(`button[data-${attribute}]`).forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset[attribute] === value));
    });
  }

  function renderLibrary() {
    const list = catalogue[module];
    byId("library").innerHTML = list.map((doc, i) => {
      const completed = doc.questions.filter((_, q) => done.has(taskId(doc, q))).length;
      const label = i === 0 ? doc.meta : doc.meta.split(" · ").slice(0, 2).join(" · ");
      const group = i === 0 ? "<h2>Fiche 1 · Priorité dimanche</h2>" : i === 1 ? "<h2>Annales · Entraînement</h2>" : "";
      return `${group}<button type="button" data-doc="${i}" aria-current="${i === docIndex}">${escape(doc.short)}<small>${escape(label)} · ${completed}/${doc.questions.length} faits</small></button>`;
    }).join("");
  }

  function check(id, label) {
    return `<label class="checkline"><input type="checkbox" data-check="${escape(id)}" ${done.has(id) ? "checked" : ""}> <span>${escape(label)}</span></label>`;
  }

  function renderNotes() {
    const doc = documentData();
    const question = doc.questions[questionIndex];
    pressed("mode", mode);
    if (mode === "course") {
      const [label, id] = doc.courses[courseIndex];
      const course = courseMap[id];
      notes.innerHTML = `
        <div class="question-picker" role="group" aria-label="Chapitres">${doc.courses.map(([name], i) => `<button type="button" data-course="${i}" aria-pressed="${i === courseIndex}">${escape(name.split(" · ")[0])}</button>`).join("")}</div>
        <h2>${escape(label.split(" · ")[0])}</h2>
        <p class="prompt">Support d’Abdelkrim Mebarki · Texte du cours en anglais.</p>
        <details class="source-preview" data-course-pdf="${escape(id)}">
          <summary>Voir le support PDF dans le cahier</summary>
          <p><a href="${base}cours/${escape(id)}.pdf" target="_blank" rel="noopener">Ouvrir le PDF complet dans un onglet ↗</a></p>
          <div class="course-embed"></div>
        </details>
        ${prose(doc.lesson)}
        ${course.parts.map(part => {
          const applies = q => q.refs.some(([c, num]) => c === courseIndex && num === part.num);
          const related = applies(question) ? questionIndex : doc.questions.findIndex(applies);
          return `<details class="course-part" id="course-part-${part.num}">
          <summary>${part.num}. ${escape(part.title)}<span class="course-done">${done.has(courseId(id, part.num)) ? "✓" : ""}</span></summary>
          ${related < 0 ? "" : window.ATELIER_SKETCH.render(doc.file, related, escape, false, true)}
          <div class="source-prose">${escape(part.body.trim())}</div>
          ${check(courseId(id, part.num), "Cette section est comprise")}
        </details>`;
        }).join("")}`;
    } else {
      const context = mode === "context";
      const study = question.study;
      const diagram = study?.diagram || question.diagram;
      notes.innerHTML = `
        <div class="question-picker" role="group" aria-label="Questions">${doc.questions.length > 5 ? `
          <button type="button" data-shift="-1" aria-label="Question précédente" ${questionIndex === 0 ? "disabled" : ""}>←</button>
          <select id="question-list" aria-label="Choisir une question">${doc.questions.map((q, i) => `<option value="${i}" ${i === questionIndex ? "selected" : ""}>${escape(q.title)}${done.has(taskId(doc, i)) ? " ✓" : ""}</option>`).join("")}</select>
          <button type="button" data-shift="1" aria-label="Question suivante" ${questionIndex === doc.questions.length - 1 ? "disabled" : ""}>→</button>` :
          doc.questions.map((q, i) => {
            const name = docIndex === 0 ? (module === "cama" ? "Ex. " : "Q") + (i + 1) : q.title;
            return `<button type="button" data-question="${i}" aria-pressed="${i === questionIndex}">${escape(name)}${done.has(taskId(doc, i)) ? ' <span aria-label="fait">✓</span>' : ""}</button>`;
          }).join("")}</div>
        <h2>${escape(question.title)}</h2>
        ${question.prompt ? `<p class="prompt">${escape(question.prompt)}</p>` : ""}
        ${context ? `
          ${study ? `
            <section class="topic-lesson">
              <h3 class="study-answer-heading">La notion dans un autre exemple</h3>
              ${window.ATELIER_SKETCH.draw(study.courseDiagram, escape, true)}
              ${study.course.map(([title, detail]) => `<section><h4>${escape(title)}</h4><p>${escape(detail)}</p></section>`).join("")}
              <details class="course-practice">
                <summary>À toi de jouer</summary>
                <p>${escape(study.practice[0])}</p>
                <details><summary>Vérifier mon raisonnement</summary><p>${escape(study.practice[1])}</p></details>
              </details>
            </section>`
            : window.ATELIER_SKETCH.render(doc.file, questionIndex, escape, true)}
          ${question.text ? `<h3 class="study-answer-heading">Comprendre la notion</h3>${prose(question.text)}` : ""}
          <div class="context-links">Passages à lire${question.refs.map(([c, num]) => {
            const [label, id] = doc.courses[c];
            const part = courseMap[id].parts.find(item => item.num === num);
            return `<button type="button" data-jump="${c},${num}">${escape(label.split(" · ")[0])}${part ? " · § " + num + " " + escape(part.title) : ""}</button>`;
          }).join("")}</div>` : `
          <h3 class="study-answer-heading">Corrigé détaillé</h3>
          <div class="worked-solution">
            ${diagram ? window.ATELIER_SKETCH.draw(diagram, escape, true, "Dessin du corrigé", study?.scene) : ""}
            ${question.key ? `<div class="answer-stamp"><span>Réponse</span><strong>${escape(question.key)}</strong></div>` : ""}
            ${prose(question.body, study?.icons)}
          </div>
          ${check(taskId(doc, questionIndex), "Je sais refaire cette question")}
          <div class="context-links"><button type="button" data-open-context>Revoir le cours de cette question →</button></div>
        `}`;
    }
    notes.scrollTop = 0;
  }

  function renderPage(reset = true) {
    const doc = documentData();
    const files = window.ATELIER_DOCUMENTS[doc.file];
    const pages = files?.[view] || [doc.file];
    page = Math.max(0, Math.min(page, pages.length - 1));
    const source = base + pages[page];
    if (scan.getAttribute("src") !== source) scan.src = source;
    scan.alt = `${doc.short} · ${view === "answer" ? files.answerType : "Sujet"} · Page ${page + 1}`;
    byId("page-count").textContent = `${page + 1} / ${pages.length}${view === "answer" ? " · " + files.answerType : ""}`;
    byId("prev-page").disabled = page === 0;
    byId("next-page").disabled = page >= pages.length - 1;
    const toggle = document.querySelector('[data-view="answer"]');
    toggle.disabled = !files?.answer.length;
    toggle.title = toggle.disabled ? "Pour cette fiche, le corrigé est expliqué dans la page de gauche." : "";
    byId("original").href = base + (view === "answer" ? files.answerFile || pages[page] : files?.original || doc.file);
    byId("original").textContent = view === "subject" ? "Original ↗" : files.answerFile ? "Corrigé PDF ↗" : "Image ↗";
    pressed("view", view);
    if (reset) {
      viewer.scrollTop = 0;
      viewer.scrollLeft = 0;
      const offsets = module === "amvr" ? [0, .242, .779] : [0, .357, .603];
      const question = doc.questions[questionIndex];
      const offset = docIndex === 0 ? offsets[questionIndex] : question.page === page ? question.offset || 0 : 0;
      if (offset > 0) {
        const reveal = () => { viewer.scrollTop = scan.offsetHeight * offset; };
        if (scan.complete) reveal();
        else scan.addEventListener("load", reveal, { once: true });
      }
    }
  }

  function render() {
    const doc = documentData();
    document.body.dataset.module = module;
    pressed("module", module);
    pressed("mobile", mobile);
    byId("document-title").textContent = doc.title;
    byId("document-meta").textContent = doc.meta;
    updateProgress();
    renderLibrary();
    renderNotes();
    renderPage();
  }

  function selectDoc(index) {
    docIndex = index;
    questionIndex = 0;
    courseIndex = 0;
    mode = "solution";
    view = "subject";
    page = 0;
    render();
    save();
  }

  function setMobile(value) {
    mobile = value;
    notebook.dataset.mobilePage = mobile;
    pressed("mobile", mobile);
  }

  function openCourse(index, number) {
    mode = "course";
    courseIndex = index;
    setMobile("notes");
    renderNotes();
    const part = byId("course-part-" + number);
    if (part) {
      part.open = true;
      notes.scrollTop = part.offsetTop - notes.offsetTop;
      part.querySelector("summary").focus({ preventScroll: true });
    }
  }

  function setZoom(value) {
    const previous = zoom;
    const centerX = viewer.scrollLeft + viewer.clientWidth / 2;
    const centerY = viewer.scrollTop + viewer.clientHeight / 2;
    zoom = Math.max(75, Math.min(260, value));
    viewer.style.setProperty("--zoom", zoom + "%");
    byId("zoom-reset").textContent = zoom + " %";
    byId("zoom-out").disabled = zoom <= 75;
    byId("zoom-in").disabled = zoom >= 260;
    viewer.scrollLeft = centerX * zoom / previous - viewer.clientWidth / 2;
    viewer.scrollTop = centerY * zoom / previous - viewer.clientHeight / 2;
  }

  function setSplit(value) {
    split = Math.round(Math.max(30, Math.min(70, value)));
    notebook.style.setProperty("--left", split + "%");
    spine.setAttribute("aria-valuenow", split);
  }

  document.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button || button.disabled) return;
    const data = button.dataset;
    if (data.module && data.module !== module) {
      module = data.module;
      history.replaceState(null, "", "#" + module);
      setMobile("notes");
      selectDoc(0);
    } else if (data.doc !== undefined) {
      selectDoc(+data.doc);
      byId("library").querySelector(`[data-doc="${data.doc}"]`).focus({ preventScroll: true });
    } else if (data.mode) {
      mode = data.mode;
      renderNotes();
    } else if (data.question !== undefined) {
      selectQuestion(+data.question, `[data-question="${data.question}"]`);
    } else if (data.shift !== undefined) {
      selectQuestion(questionIndex + +data.shift, "#question-list");
    } else if (data.openContext !== undefined) {
      mode = "context";
      renderNotes();
      document.querySelector('[data-mode="context"]').focus();
    } else if (data.course !== undefined) {
      courseIndex = +data.course;
      renderNotes();
      notes.querySelector(`[data-course="${data.course}"]`).focus({ preventScroll: true });
    } else if (data.jump) {
      openCourse(...data.jump.split(",").map(Number));
    } else if (data.view) {
      view = data.view;
      if (view === "answer" && page === 0) page = documentData().questions[questionIndex].page;
      renderPage();
    } else if (data.mobile) {
      setMobile(data.mobile);
    }
  });

  function selectQuestion(index, focus) {
    questionIndex = index;
    page = documentData().questions[index].page;
    renderNotes();
    renderPage();
    notes.querySelector(focus)?.focus({ preventScroll: true });
  }

  notes.addEventListener("toggle", event => {
    const panel = event.target;
    if (!panel.open || !panel.dataset.coursePdf || panel.querySelector("iframe")) return;
    const frame = document.createElement("iframe");
    frame.src = base + "cours/" + panel.dataset.coursePdf + ".pdf#view=FitH";
    frame.title = "Support original du cours";
    panel.querySelector(".course-embed").append(frame);
  }, true);

  notes.addEventListener("change", event => {
    if (event.target.id === "question-list") {
      selectQuestion(+event.target.value, "#question-list");
      return;
    }
    const input = event.target.closest("input[data-check]");
    if (!input) return;
    if (input.checked) done.add(input.dataset.check);
    else done.delete(input.dataset.check);
    save();
    updateProgress();
    renderLibrary();
    const active = notes.querySelector(`[data-question="${questionIndex}"]`);
    if (active) {
      active.querySelector("span")?.remove();
      if (input.checked) active.insertAdjacentHTML("beforeend", ' <span aria-label="fait">✓</span>');
    }
    const option = byId("question-list")?.selectedOptions[0];
    if (option) option.textContent = documentData().questions[questionIndex].title + (input.checked ? " ✓" : "");
    const partMark = input.closest(".course-part")?.querySelector(".course-done");
    if (partMark) partMark.textContent = input.checked ? "✓" : "";
    byId("study-status").textContent = "Progression " + byId("progress-number").textContent;
  });

  byId("next-task").addEventListener("click", () => {
    const tasks = readinessTasks();
    const task = tasks.find(item => !done.has(item.id)) || tasks[0];
    selectDoc(0);
    setMobile("notes");
    if (task.mode === "course") openCourse(task.c, task.num);
    else { questionIndex = task.q; renderNotes(); notes.querySelector("h2").scrollIntoView({ block: "nearest" }); }
  });

  byId("zoom-out").addEventListener("click", () => setZoom(zoom - 25));
  byId("zoom-in").addEventListener("click", () => setZoom(zoom + 25));
  byId("zoom-reset").addEventListener("click", () => setZoom(100));
  byId("prev-page").addEventListener("click", () => { page--; renderPage(); });
  byId("next-page").addEventListener("click", () => { page++; renderPage(); });

  let pan;
  viewer.addEventListener("pointerdown", event => {
    if (event.pointerType === "touch" || event.button !== 0 || event.target !== scan) return;
    viewer.setPointerCapture(event.pointerId);
    pan = { x: event.clientX, y: event.clientY, left: viewer.scrollLeft, top: viewer.scrollTop };
    viewer.classList.add("dragging");
  });
  viewer.addEventListener("pointermove", event => {
    if (!pan) return;
    viewer.scrollLeft = pan.left + pan.x - event.clientX;
    viewer.scrollTop = pan.top + pan.y - event.clientY;
  });
  viewer.addEventListener("lostpointercapture", () => { pan = undefined; viewer.classList.remove("dragging"); });

  spine.addEventListener("pointerdown", event => {
    if (event.button !== 0) return;
    spine.setPointerCapture(event.pointerId);
  });
  spine.addEventListener("pointermove", event => {
    if (!spine.hasPointerCapture(event.pointerId)) return;
    const rect = notebook.getBoundingClientRect();
    setSplit((event.clientX - rect.left) / rect.width * 100);
  });
  spine.addEventListener("lostpointercapture", save);
  spine.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    setSplit(split + (event.key === "ArrowRight" ? 3 : -3));
    save();
  });

  byId("focus-layout").addEventListener("click", event => {
    const button = event.currentTarget;
    const focus = button.getAttribute("aria-pressed") !== "true";
    button.setAttribute("aria-pressed", String(focus));
    document.querySelector(".atelier-grid").dataset.focus = String(focus);
    button.textContent = focus ? "Afficher la bibliothèque" : "Agrandir le cahier";
  });

  setSplit(split);
  render();
})();
