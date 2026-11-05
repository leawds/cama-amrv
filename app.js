// Application Controller for Revision Platform (Taste-Skill Edition)

document.addEventListener("DOMContentLoaded", () => {
  const data = window.REVISION_DATA;
  const diagrams = window.DIAGRAMS || {};

  if (!data) {
    console.error("Revision data not loaded!");
    return;
  }

  // State
  let currentModule = "all";
  let currentTab = "courses";
  let flashcardIndex = 0;
  let flashcardsList = [];
  let masteredCards = new Set(JSON.parse(localStorage.getItem("mastered_cards") || "[]"));
  let quizAnswers = {};
  let quizPenaltyActive = true;

  // DOM Elements
  const moduleBtns = document.querySelectorAll(".module-btn");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const viewSections = document.querySelectorAll(".view-section");
  const searchInput = document.getElementById("search-input");
  const coursesContainer = document.getElementById("courses-list");
  const videosContainer = document.getElementById("videos-list");
  const documentsContainer = document.getElementById("documents-list");
  const docModal = document.getElementById("doc-modal");
  const docModalClose = document.getElementById("doc-modal-close");
  const flashcardArea = document.getElementById("flashcard-flipper");
  const fcProgressBar = document.getElementById("fc-progress-fill");
  const tdContainer = document.getElementById("td-list");
  const quizContainer = document.getElementById("quiz-list");
  const glossaryContainer = document.getElementById("glossary-list");
  const quizScoreDisplay = document.getElementById("quiz-score-val");
  const penaltyCheckbox = document.getElementById("penalty-checkbox");

  // ==========================================
  // 0. MARKDOWN & TABLE PARSER (TASTE-SKILL)
  // ==========================================
  function parseMarkdown(md) {
    if (!md) return "";

    const preservedBlocks = [];
    function stash(html) {
      const idx = preservedBlocks.length;
      preservedBlocks.push(html);
      return `\n\n%%%PRESERVED_BLOCK_${idx}%%%\n\n`;
    }

    // 1. Replace Image Placeholders
    md = md.replace(/<!-- IMAGE:([^|]+)\|([^>]+) -->/g, (match, file, caption) => {
      return stash(`
        <div class="topic-hero-image-wrap">
          <img src="assets/${file.trim()}" alt="${escapeHtml(caption.trim())}" class="topic-hero-img" loading="lazy">
          <div class="topic-image-caption">📷 ${caption.trim()}</div>
        </div>
      `);
    });

    // 1.B Replace Video Placeholders: <!-- VIDEO:id|title|author|takeaway -->
    md = md.replace(/<!-- VIDEO:([^|]+)\|([^|]+)\|([^|]+)\|([^>]+) -->/g, (match, vid, title, author, takeaway) => {
      return stash(`
        <div class="video-card">
          <div class="video-card-header">
            <span class="video-pill video-pill-cama">▶ Démonstration Vidéo</span>
            <span class="video-author-handwritten">${escapeHtml(author.trim())}</span>
          </div>
          <div class="video-iframe-wrap">
            <iframe src="https://www.youtube-nocookie.com/embed/${vid.trim()}" title="${escapeHtml(title.trim())}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
          </div>
          <div class="video-details">
            <h4 class="video-title">${escapeHtml(title.trim())}</h4>
            <div class="video-takeaway"><strong>Points clés expliqués :</strong> ${escapeHtml(takeaway.trim())}</div>
          </div>
        </div>
      `);
    });

    // 1.C Replace PDF Callouts: <!-- PDF:filename|title|pages|desc -->
    md = md.replace(/<!-- PDF:([^|]+)\|([^|]+)\|([^|]+)\|([^>]+) -->/g, (match, file, title, pages, desc) => {
      return stash(`
        <div class="pdf-callout-card">
          <div class="pdf-callout-icon">📄</div>
          <div class="pdf-callout-content">
            <div class="pdf-callout-title">${escapeHtml(title.trim())} <span class="pdf-callout-badge">${escapeHtml(pages.trim())}</span></div>
            <div class="pdf-callout-desc">${escapeHtml(desc.trim())}</div>
            <div class="pdf-callout-actions">
              <button class="pdf-btn-open btn-view-doc" data-docfile="assets/${file.trim()}" data-doctitle="${escapeHtml(title.trim())}">Consulter le document</button>
              <a href="assets/${file.trim()}" download class="pdf-btn-dl">Télécharger</a>
            </div>
          </div>
        </div>
      `);
    });

    // 2. Replace Diagram Placeholders
    md = md.replace(/\*{0,2}<!-- DIAGRAM:(\w+) -->\*{0,2}/g, (match, id) => {
      const diagramHtml = (window.DIAGRAMS && window.DIAGRAMS[id]) || "";
      return stash(diagramHtml);
    });

    // 2. Format Math Blocks ($$ ... $$) and Inline Math ($ ... $)
    md = md.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
      return stash(`<div class="math-block">${cleanMath(formula)}</div>`);
    });
    md = md.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
      return `<span class="math-inline">${cleanMath(formula)}</span>`;
    });

    // 3. Parse Markdown Tables
    const lines = md.split("\n");
    let inTable = false;
    let tableLines = [];
    let processedLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith("|") && line.endsWith("|")) {
        inTable = true;
        tableLines.push(line);
      } else {
        if (inTable) {
          processedLines.push(stash(convertTableToHTML(tableLines)));
          tableLines = [];
          inTable = false;
        }
        processedLines.push(lines[i]);
      }
    }
    if (inTable && tableLines.length > 0) {
      processedLines.push(stash(convertTableToHTML(tableLines)));
    }

    md = processedLines.join("\n");

    // 4. Code Blocks
    md = md.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      return stash(`<div class="code-container">${escapeHtml(code.trim())}</div>`);
    });

    // 5. Blockquotes
    md = md.replace(/^>\s*(.*?)$/gm, '<blockquote>$1</blockquote>');

    // 6. Highlighter Syntax: ==rose:text==, ==vert:text==, ==bleu:text==, ==orange:text==, ==text==
    md = md.replace(/==rose:(.+?)==/g, '<mark class="hl-pink">$1</mark>');
    md = md.replace(/==vert:(.+?)==/g, '<mark class="hl-green">$1</mark>');
    md = md.replace(/==bleu:(.+?)==/g, '<mark class="hl-blue">$1</mark>');
    md = md.replace(/==orange:(.+?)==/g, '<mark class="hl-orange">$1</mark>');
    md = md.replace(/==(.+?)==/g, '<mark class="hl-yellow">$1</mark>');

    // 7. Lists
    // 7.A Indented Sub-bullets:   - item or   * item
    md = md.replace(/^(\s{2,})[•\-\*]\s+(.*)$/gm, (match, spaces, text) => {
      return `<div class="notebook-sub-bullet"><span class="notebook-sub-dot">◆</span><div class="notebook-item-content">${text}</div></div>`;
    });

    // 7.B Numbered List items: 1. Item
    md = md.replace(/^\s*(\d+)\.\s+(.*)$/gm, (match, num, text) => {
      return `<div class="notebook-numbered-item"><span class="notebook-num-badge">${num}</span><div class="notebook-item-content">${text}</div></div>`;
    });

    // 7.C Regular Bullet items: - or * or •
    md = md.replace(/^\s*[•\-\*]\s+(.*)$/gm, (match, text) => {
      return `<div class="notebook-bullet-item"><span class="notebook-bullet-dot">•</span><div class="notebook-item-content">${text}</div></div>`;
    });

    // 8. Bold, Italic, Inline Code
    md = md.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    md = md.replace(/\*(.*?)\*/g, '<em>$1</em>');
    md = md.replace(/`([^`]+)`/g, '<code class="notebook-code-inline">$1</code>');

    // 9. Paragraph Spacers & Newlines
    md = md.replace(/\n\n+/g, '<div class="para-spacer"></div>');
    md = md.replace(/\n/g, '<br>');
    md = md.replace(/<\/div>\s*<br>/g, '</div>');
    md = md.replace(/<br>\s*<div/g, '<div');

    // 10. Restore Stashed Blocks
    for (let i = 0; i < preservedBlocks.length; i++) {
      md = md.replace(`%%%PRESERVED_BLOCK_${i}%%%`, () => preservedBlocks[i]);
    }

    return md;
  }

  function convertTableToHTML(tableLines) {
    if (tableLines.length < 2) return tableLines.join("\n");

    // Extract headers
    const headerLine = tableLines[0];
    const headers = headerLine
      .split("|")
      .map(h => h.trim())
      .filter((h, idx, arr) => idx > 0 && idx < arr.length - 1);

    // Skip separator line (tableLines[1])
    let tbodyHtml = "";
    for (let r = 2; r < tableLines.length; r++) {
      const cells = tableLines[r]
        .split("|")
        .map(c => c.trim())
        .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);

      if (cells.length > 0) {
        tbodyHtml += "<tr>" + cells.map(c => `<td>${formatInlineTypography(c)}</td>`).join("") + "</tr>";
      }
    }

    const theadHtml = "<thead><tr>" + headers.map(h => `<th>${formatInlineTypography(h)}</th>`).join("") + "</tr></thead>";
    return `<div style="overflow-x: auto;"><table class="markdown-table">${theadHtml}<tbody>${tbodyHtml}</tbody></table></div>`;
  }

  function formatInlineTypography(str) {
    return str
      .replace(/==rose:(.+?)==/g, '<mark class="hl-pink">$1</mark>')
      .replace(/==vert:(.+?)==/g, '<mark class="hl-green">$1</mark>')
      .replace(/==bleu:(.+?)==/g, '<mark class="hl-blue">$1</mark>')
      .replace(/==orange:(.+?)==/g, '<mark class="hl-orange">$1</mark>')
      .replace(/==(.+?)==/g, '<mark class="hl-yellow">$1</mark>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="notebook-code-inline">$1</code>')
      .replace(/\$([^\$\n]+?)\$/g, (m, f) => `<span class="math-inline">${cleanMath(f)}</span>`);
  }

  function cleanMath(latex) {
    if (!latex) return "";
    let res = latex;

    // 1. Text commands and font formatting (multiple passes for nested commands like \mathbf{\text{...}})
    for (let i = 0; i < 3; i++) {
      res = res
        .replace(/\\mathbf\{([^}]+)\}/g, '<strong>$1</strong>')
        .replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>')
        .replace(/\\mathit\{([^}]+)\}/g, '<em>$1</em>')
        .replace(/\\text\{([^}]+)\}/g, '$1')
        .replace(/\\rm\{([^}]+)\}/g, '$1');
    }

    // 2. LaTeX spacing and separators
    res = res
      .replace(/\\,/g, ' ')
      .replace(/\\;/g, ' ')
      .replace(/\\quad/g, '   ')
      .replace(/\\qquad/g, '      ');

    // 3. Mathematical operators and relations
    res = res
      .replace(/\\times/g, '×')
      .replace(/\\cdot/g, '·')
      .replace(/\\pm/g, '±')
      .replace(/\\ge/g, '≥')
      .replace(/\\le/g, '≤')
      .replace(/\\approx/g, '≈')
      .replace(/\\neq/g, '≠')
      .replace(/\\longrightarrow/g, ' ⟶ ')
      .replace(/\\rightarrow/g, ' → ')
      .replace(/\\in/g, ' ∈ ')
      .replace(/\\sum/g, '∑')
      .replace(/\\infty/g, '∞');

    // 4. Fractions, exponents and subscripts
    res = res
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
      .replace(/\^(\d+)/g, '<sup>$1</sup>')
      .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
      .replace(/_(\d+)/g, '<sub>$1</sub>')
      .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');

    // 5. Clean up any remaining unhandled LaTeX backslash words
    res = res.replace(/\\([a-zA-Z]+)/g, '$1');

    return res.trim();
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ==========================================
  // MODULE SWITCHING
  // ==========================================
  moduleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      moduleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentModule = btn.dataset.module;
      applyModuleFilter();
    });
  });

  function applyModuleFilter() {
    renderCourses();
    renderVideos();
    renderDocuments();
    initFlashcards();
    renderTD();
    renderQuiz();
    renderGlossary();
    updateBadges();
  }

  // ==========================================
  // TAB NAVIGATION
  // ==========================================
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTab = btn.dataset.tab;

      viewSections.forEach(sec => sec.classList.remove("active"));
      const activeSec = document.getElementById(`section-${currentTab}`);
      if (activeSec) activeSec.classList.add("active");
    });
  });

  // ==========================================
  // NOTEBOOK PAPER VS STUDIO DARK TOGGLE
  // ==========================================
  const btnStylePaper = document.getElementById("btn-style-paper");
  const btnStyleDark = document.getElementById("btn-style-dark");
  if (btnStylePaper && btnStyleDark) {
    btnStylePaper.addEventListener("click", () => {
      btnStylePaper.classList.add("active");
      btnStyleDark.classList.remove("active");
      coursesContainer.classList.add("notebook-theme");
    });
    btnStyleDark.addEventListener("click", () => {
      btnStyleDark.classList.add("active");
      btnStylePaper.classList.remove("active");
      coursesContainer.classList.remove("notebook-theme");
    });
  }

  // ==========================================
  // 1. RENDER COURSES (SYNTHÈSE)
  // ==========================================
  function renderCourses(filterText = "") {
    coursesContainer.innerHTML = "";
    let list = [];

    if (currentModule === "all" || currentModule === "amrv") {
      list = list.concat(data.courses.amrv.map(c => ({ ...c, mod: "amrv" })));
    }
    if (currentModule === "all" || currentModule === "cama") {
      list = list.concat(data.courses.cama.map(c => ({ ...c, mod: "cama" })));
    }

    if (filterText.trim()) {
      const q = filterText.toLowerCase();
      list = list.filter(c => 
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.keyPoints.some(kp => kp.toLowerCase().includes(q))
      );
    }

    if (list.length === 0) {
      coursesContainer.innerHTML = `<p style="color: var(--text-dim); text-align: center; padding: 40px;">Aucune fiche ne correspond à votre recherche.</p>`;
      return;
    }

    list.forEach((course, index) => {
      const card = document.createElement("div");
      card.className = `chapter-card ${index === 0 ? "open" : ""}`;
      
      const tagClass = course.mod === "amrv" ? "tag-amrv" : "tag-cama";
      const tagLabel = course.mod === "amrv" ? "AMRV" : "CAMA";

      const bannerHtml = course.image ? `
        <div class="chapter-card-banner">
          <img src="${course.image}" alt="${escapeHtml(course.imageCaption || course.title)}" class="chapter-banner-img" loading="lazy">
          ${course.imageCaption ? `<div class="chapter-banner-overlay"><span class="chapter-banner-caption">${escapeHtml(course.imageCaption)}</span></div>` : ""}
        </div>
      ` : "";

      card.innerHTML = `
        <div class="sheet-washi-tape"></div>
        <div class="binder-holes"><span></span><span></span><span></span></div>
        ${bannerHtml}
        <div class="chapter-header">
          <div class="chapter-title-wrap">
            <span class="chapter-tag ${tagClass}">${tagLabel} • ${course.tag}</span>
            <h3>${course.title}</h3>
          </div>
          <span class="chapter-toggle-icon">▼</span>
        </div>
        <div class="chapter-body">
          <div class="keypoints-box">
            <h4>⚡ Points Essentiels du Test (À Retenir)</h4>
            <ul>
              ${course.keyPoints.map(kp => `<li>${kp}</li>`).join("")}
            </ul>
          </div>
          <div class="chapter-sections-content">
            ${course.sections.map(sec => `
              <div class="course-sub-section">
                <h4>${sec.heading}</h4>
                <div class="course-body-content">${parseMarkdown(sec.content)}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `;

      card.querySelector(".chapter-header").addEventListener("click", () => {
        card.classList.toggle("open");
      });
      const bannerEl = card.querySelector(".chapter-card-banner");
      if (bannerEl) {
        bannerEl.style.cursor = "pointer";
        bannerEl.addEventListener("click", () => {
          card.classList.toggle("open");
        });
      }

      coursesContainer.appendChild(card);
    });

    // Attach document modal opener to any PDF buttons embedded in courses
    coursesContainer.querySelectorAll(".btn-view-doc").forEach(btn => {
      btn.addEventListener("click", () => {
        openDocumentModal(btn.dataset.docfile, btn.dataset.doctitle);
      });
    });
  }

  // ==========================================
  // 1.B RENDER VIDEOS (YOUTUBE EMBEDS)
  // ==========================================
  function renderVideos(filterText = "") {
    if (!videosContainer) return;
    videosContainer.innerHTML = "";
    let list = data.videos || [];

    if (currentModule !== "all") {
      list = list.filter(v => v.module === currentModule);
    }

    if (filterText.trim()) {
      const q = filterText.toLowerCase();
      list = list.filter(v => 
        v.title.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q) ||
        v.tag.toLowerCase().includes(q) ||
        v.keyTakeaways.some(kt => kt.toLowerCase().includes(q))
      );
    }

    if (list.length === 0) {
      videosContainer.innerHTML = `<p style="color: var(--text-dim); text-align: center; padding: 40px; grid-column: span 12;">Aucune vidéo ne correspond à votre filtre.</p>`;
      return;
    }

    list.forEach(vid => {
      const card = document.createElement("div");
      card.className = "video-card";
      const pillClass = vid.module === "amrv" ? "video-pill-amrv" : "video-pill-cama";
      const modLabel = vid.module.toUpperCase();

      card.innerHTML = `
        <div class="card-washi-tape"></div>
        <div class="video-card-header">
          <span class="video-pill ${pillClass}">${modLabel} • ${vid.tag}</span>
          <span class="video-badge-star">★ ${vid.badge}</span>
        </div>
        <div class="video-iframe-wrap">
          <iframe src="https://www.youtube-nocookie.com/embed/${vid.youtubeId}" title="${escapeHtml(vid.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
        <div class="video-details">
          <div>
            <h4 class="video-title">${escapeHtml(vid.title)}</h4>
            <div class="video-channel">Chaîne : ${escapeHtml(vid.channel)} (${vid.duration})</div>
          </div>
          <div class="video-takeaway">
            <strong class="video-takeaway-title">À retenir pour l'examen :</strong>
            <ul style="padding-left: 18px; margin: 0;">
              ${vid.keyTakeaways.map(kt => `<li style="margin-bottom: 4px;">${escapeHtml(kt)}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
      videosContainer.appendChild(card);
    });
  }

  // ==========================================
  // 1.C RENDER DOCUMENTS & PDF
  // ==========================================
  function renderDocuments(filterText = "") {
    if (!documentsContainer) return;
    documentsContainer.innerHTML = "";
    let list = data.documents || [];

    if (currentModule !== "all") {
      list = list.filter(d => d.module === "all" || d.module === currentModule);
    }

    if (filterText.trim()) {
      const q = filterText.toLowerCase();
      list = list.filter(d => 
        d.title.toLowerCase().includes(q) ||
        d.author.toLowerCase().includes(q) ||
        d.desc.toLowerCase().includes(q)
      );
    }

    if (list.length === 0) {
      documentsContainer.innerHTML = `<p style="color: var(--text-dim); text-align: center; padding: 40px; grid-column: span 12;">Aucun document ne correspond à votre recherche.</p>`;
      return;
    }

    list.forEach(doc => {
      const card = document.createElement("div");
      card.className = "pdf-card";

      card.innerHTML = `
        <div class="card-washi-tape"></div>
        <div>
          <div class="pdf-card-header">
            <span class="pdf-badge ${doc.badge.includes('Officiel') ? 'pdf-badge-official' : ''}">${doc.badge}</span>
            <span class="pdf-size-pill">${doc.size}</span>
          </div>
          <h3 class="pdf-title">${escapeHtml(doc.title)}</h3>
          <p class="pdf-desc">${escapeHtml(doc.desc)}</p>
          <div class="pdf-meta-row">
            <span class="pdf-meta-item">👤 ${escapeHtml(doc.author)}</span>
            <span class="pdf-meta-item">📄 ${escapeHtml(doc.pages)}</span>
          </div>
        </div>
        <div class="pdf-actions">
          <button class="pdf-btn-open btn-view-doc" data-docfile="assets/${doc.file}" data-doctitle="${escapeHtml(doc.title)}">Consulter le PDF</button>
          <a href="assets/${doc.file}" download class="pdf-btn-dl">⬇ Télécharger</a>
        </div>
      `;
      documentsContainer.appendChild(card);
    });

    // Attach click events for document viewer
    documentsContainer.querySelectorAll(".btn-view-doc").forEach(btn => {
      btn.addEventListener("click", () => {
        openDocumentModal(btn.dataset.docfile, btn.dataset.doctitle);
      });
    });
  }

  function openDocumentModal(filePath, title) {
    if (!docModal) return;
    const modalTitle = document.getElementById("doc-modal-title");
    const modalBody = document.getElementById("doc-modal-body");
    if (!modalTitle || !modalBody) return;

    modalTitle.textContent = title || "Document";
    if (filePath.toLowerCase().endsWith(".pdf")) {
      modalBody.innerHTML = `<iframe src="${filePath}" class="doc-iframe" style="width:100%; height:100%; border:none;"></iframe>`;
    } else {
      modalBody.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; height:100%; padding:20px; overflow:auto;"><img src="${filePath}" alt="${title}" style="max-width:100%; max-height:100%; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,0.5);"></div>`;
    }
    docModal.classList.add("active");
  }

  docModalClose?.addEventListener("click", () => {
    docModal?.classList.remove("active");
    const modalBody = document.getElementById("doc-modal-body");
    if (modalBody) modalBody.innerHTML = "";
  });

  docModal?.addEventListener("click", (e) => {
    if (e.target === docModal) {
      docModal.classList.remove("active");
      const modalBody = document.getElementById("doc-modal-body");
      if (modalBody) modalBody.innerHTML = "";
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && docModal?.classList.contains("active")) {
      docModal.classList.remove("active");
      const modalBody = document.getElementById("doc-modal-body");
      if (modalBody) modalBody.innerHTML = "";
    }
  });

  // ==========================================
  // 2. FLASHCARDS SYSTEM
  // ==========================================
  function initFlashcards() {
    flashcardsList = data.flashcards.filter(fc => {
      if (currentModule === "all") return true;
      return fc.module === currentModule;
    });

    flashcardIndex = 0;
    updateFlashcardDisplay();
  }

  function updateFlashcardDisplay() {
    if (flashcardsList.length === 0) {
      document.getElementById("fc-front-text").innerText = "Aucune flashcard pour ce module";
      document.getElementById("fc-back-text").innerText = "Sélectionnez un autre module ou réinitialisez le filtre";
      return;
    }

    const card = flashcardsList[flashcardIndex];
    flashcardArea.classList.remove("flipped");

    const isMastered = masteredCards.has(card.id);
    document.getElementById("fc-category").innerText = `${card.module.toUpperCase()} • ${card.category}`;
    document.getElementById("fc-front-text").innerText = card.front;
    document.getElementById("fc-back-text").innerText = card.back;
    document.getElementById("fc-hint").innerText = card.hint ? `💡 ${card.hint}` : "";
    document.getElementById("fc-counter").innerText = `Carte ${flashcardIndex + 1} / ${flashcardsList.length}`;

    const masteredBadge = document.getElementById("fc-mastered-status");
    if (masteredBadge) {
      masteredBadge.style.display = isMastered ? "inline-block" : "none";
    }

    const progress = ((flashcardIndex + 1) / flashcardsList.length) * 100;
    fcProgressBar.style.width = `${progress}%`;
  }

  flashcardArea.addEventListener("click", () => {
    flashcardArea.classList.toggle("flipped");
  });

  document.getElementById("fc-btn-next")?.addEventListener("click", () => {
    if (flashcardIndex < flashcardsList.length - 1) {
      flashcardIndex++;
    } else {
      flashcardIndex = 0;
    }
    updateFlashcardDisplay();
  });

  document.getElementById("fc-btn-prev")?.addEventListener("click", () => {
    if (flashcardIndex > 0) {
      flashcardIndex--;
    } else {
      flashcardIndex = flashcardsList.length - 1;
    }
    updateFlashcardDisplay();
  });

  document.getElementById("fc-btn-mastered")?.addEventListener("click", () => {
    const card = flashcardsList[flashcardIndex];
    masteredCards.add(card.id);
    localStorage.setItem("mastered_cards", JSON.stringify([...masteredCards]));
    if (flashcardIndex < flashcardsList.length - 1) {
      flashcardIndex++;
    }
    updateFlashcardDisplay();
  });

  document.getElementById("fc-btn-review")?.addEventListener("click", () => {
    const card = flashcardsList[flashcardIndex];
    masteredCards.delete(card.id);
    localStorage.setItem("mastered_cards", JSON.stringify([...masteredCards]));
    if (flashcardIndex < flashcardsList.length - 1) {
      flashcardIndex++;
    }
    updateFlashcardDisplay();
  });

  window.addEventListener("keydown", (e) => {
    if (currentTab !== "flashcards") return;
    if (e.code === "Space") {
      e.preventDefault();
      flashcardArea.classList.toggle("flipped");
    } else if (e.code === "ArrowRight") {
      document.getElementById("fc-btn-next")?.click();
    } else if (e.code === "ArrowLeft") {
      document.getElementById("fc-btn-prev")?.click();
    }
  });

  // ==========================================
  // 3. TD EXERCISES & SIMULATORS
  // ==========================================
  function renderTD() {
    tdContainer.innerHTML = "";
    const list = data.tdExercises.filter(td => {
      if (currentModule === "all") return true;
      return td.module === currentModule;
    });

    list.forEach(td => {
      const card = document.createElement("div");
      card.className = "td-exercise-card";

      let interactiveHTML = "";
      if (td.interactiveType === "calculator") {
        interactiveHTML = buildImmersionCalculatorHTML();
      } else if (td.interactiveType === "matching_mod") {
        interactiveHTML = buildMatchingModHTML(td.items);
      } else if (td.interactiveType === "vrml_debug") {
        interactiveHTML = buildVRMLDebugHTML(td);
      }

      card.innerHTML = `
        <div class="td-header">
          <div>
            <span class="td-badge">${td.badge}</span>
            <h3 style="margin-top: 8px; font-size: 1.3rem;">${td.title}</h3>
            <p style="color: var(--text-dim); font-size: 0.92rem; margin-top: 4px;">${td.description}</p>
          </div>
        </div>
        <div class="td-statement">${parseMarkdown(td.statement)}</div>
        ${interactiveHTML}
        <button class="toggle-solution-btn">
          <span>👁️ Afficher / Masquer la Solution Détaillée & Démarche</span>
        </button>
        <div class="td-solution-box">
          <div class="td-solution-header">
            <span class="td-solution-badge">✓ Solution Officielle</span>
            <h4>Corrigé & Démarche Méthodologique :</h4>
          </div>
          <div class="td-solution-content">${parseMarkdown(td.solution || "")}</div>
          ${td.questions ? td.questions.map(q => `
            <div class="td-subquestion-solution">
              <strong class="td-subquestion-title">${q.q}</strong>
              <div class="td-subquestion-body">${parseMarkdown(q.a)}</div>
            </div>
          `).join("") : ""}
        </div>
      `;

      card.querySelector(".toggle-solution-btn").addEventListener("click", () => {
        const box = card.querySelector(".td-solution-box");
        box.classList.toggle("visible");
      });

      tdContainer.appendChild(card);
    });

    attachCalculatorListeners();
    attachMatchingModListeners();
  }

  function buildImmersionCalculatorHTML() {
    return `
      <div class="td-interactive-widget">
        <h4 style="color: var(--amrv-color); margin-bottom: 14px;">🎛️ Simulateur Interactif : Calculateur de Score d'Immersion (P-C-E-I)</h4>
        <div style="margin-bottom: 18px;">
          <label style="font-size: 0.88rem; color: #334155; display: block; margin-bottom: 8px; font-weight: 700;">Préréglage rapide de périphérique du TD :</label>
          <select id="preset-device-select" class="calc-preset-select">
            <option value="custom">-- Choisir ou Personnaliser --</option>
            <option value="visiocasque">Visiocasque (HMD) -> PAEU (Score 11)</option>
            <option value="salle3d">Salle de projection 3D (CAVE) -> PALU (Score 12)</option>
            <option value="salle2d">Salle de projection 2D -> IALU (Score 11)</option>
            <option value="gants">Gants de données -> TMEB (Score 10)</option>
            <option value="manette_re">Manette avec Retour d'Effort -> TMCB (Score 9)</option>
            <option value="manette_simple">Manette classique sans RE -> AMCU (Score 7)</option>
            <option value="oreillettes_binaural">Oreillettes Binaural -> PNEA (Score 7)</option>
            <option value="ecran_tactile">Écran Tactile -> ECOU (Score 6)</option>
            <option value="ecran_simple">Écran classique -> ENOA (Score 3)</option>
            <option value="souris">Souris classique -> AEOU (Score 3)</option>
          </select>
        </div>
        <div class="calc-grid">
          <div class="calc-field">
            <label>1. Présence (P)</label>
            <select id="calc-p">
              <option value="0">Absence (A) = 0</option>
              <option value="1">Témoin (T) = 1</option>
              <option value="2">Envisageable (E) = 2</option>
              <option value="3">Imprégnant (I) = 3</option>
              <option value="4" selected>Pénétrant (P) = 4</option>
            </select>
          </div>
          <div class="calc-field">
            <label>2. Contrôle (C)</label>
            <select id="calc-c">
              <option value="0">Nul (N) = 0</option>
              <option value="1">Externe (E) = 1</option>
              <option value="2">Associé (A) = 2</option>
              <option value="3" selected>Conjoint (C) = 3</option>
              <option value="4">Maîtrisant (M) = 4</option>
            </select>
          </div>
          <div class="calc-field">
            <label>3. Ergonomie (E)</label>
            <select id="calc-e">
              <option value="0">Non Défini (ND) = 0</option>
              <option value="1">Orienté (O) = 1</option>
              <option value="2">Contraint (C) = 2</option>
              <option value="3" selected>Encombré (E) = 3</option>
              <option value="4">Libéré (L) = 4</option>
            </select>
          </div>
          <div class="calc-field">
            <label>4. Interactivité (I)</label>
            <select id="calc-i">
              <option value="0">Absente (A) = 0</option>
              <option value="1" selected>Unidirectionnelle (U) = 1</option>
              <option value="2">Bidirectionnelle (B) = 2</option>
            </select>
          </div>
        </div>
        <div class="calc-result-box">
          <div>
            <div style="font-size: 0.88rem; color: #166534; font-weight: 700;">Code d'évaluation généré :</div>
            <strong id="calc-code-display" style="font-size: 1.4rem; letter-spacing: 2px; color: #0284c7;">PAEU</strong>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.88rem; color: #166534; font-weight: 700;">Score Total Calculé :</div>
            <div class="calc-score" id="calc-score-display">11 / 14</div>
          </div>
        </div>
      </div>
    `;
  }

  function attachCalculatorListeners() {
    const pSel = document.getElementById("calc-p");
    const cSel = document.getElementById("calc-c");
    const eSel = document.getElementById("calc-e");
    const iSel = document.getElementById("calc-i");
    const presetSel = document.getElementById("preset-device-select");
    const codeDisp = document.getElementById("calc-code-display");
    const scoreDisp = document.getElementById("calc-score-display");

    if (!pSel || !presetSel) return;

    const pCodes = ["A", "T", "E", "I", "P"];
    const cCodes = ["N", "E", "A", "C", "M"];
    const eCodes = ["ND", "O", "C", "E", "L"];
    const iCodes = ["A", "U", "B"];

    function update() {
      const p = parseInt(pSel.value);
      const c = parseInt(cSel.value);
      const e = parseInt(eSel.value);
      const i = parseInt(iSel.value);
      const total = p + c + e + i;
      const code = `${pCodes[p]}${cCodes[c]}${eCodes[e]}${iCodes[i]}`;
      codeDisp.innerText = code;
      scoreDisp.innerText = `${total} / 14`;
    }

    [pSel, cSel, eSel, iSel].forEach(s => s.addEventListener("change", () => {
      presetSel.value = "custom";
      update();
    }));

    presetSel.addEventListener("change", () => {
      const presets = {
        visiocasque: [4, 3, 3, 1],
        salle3d: [4, 3, 4, 1],
        salle2d: [3, 3, 4, 1],
        gants: [1, 4, 3, 2],
        manette_re: [1, 4, 2, 2],
        manette_simple: [0, 4, 2, 1],
        oreillettes_binaural: [4, 0, 3, 0],
        ecran_tactile: [2, 2, 1, 1],
        ecran_simple: [2, 0, 1, 0],
        souris: [0, 1, 1, 1]
      };
      if (presets[presetSel.value]) {
        const [p, c, e, i] = presets[presetSel.value];
        pSel.value = p;
        cSel.value = c;
        eSel.value = e;
        iSel.value = i;
        update();
      }
    });

    update();
  }

  function buildMatchingModHTML(items) {
    return `
      <div class="td-interactive-widget">
        <h4 style="color: var(--amrv-color); margin-bottom: 12px;">📝 Test Interactif : Appariement avec les 4 Couches de Modélisation</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">Sélectionnez pour chaque action la modélisation correspondante, la correction est instantanée :</p>
        <div style="overflow-x: auto;">
          <table class="match-table">
            <thead>
              <tr>
                <th style="width: 45%;">Action Développeur / Utilisateur</th>
                <th style="width: 35%;">Votre Choix</th>
                <th style="width: 20%;">Statut</th>
              </tr>
            </thead>
            <tbody>
              ${items.map(it => `
                <tr data-mod-id="${it.id}">
                  <td>${it.action}</td>
                  <td>
                    <select class="match-select" data-id="${it.id}">
                      <option value="">-- Choisir la couche --</option>
                      <option value="geometric">Géométrique (Geometric)</option>
                      <option value="kinematic">Cinématique (Kinematic)</option>
                      <option value="topological">Topologique (Topological)</option>
                      <option value="semantic">Sémantique (Semantic)</option>
                    </select>
                  </td>
                  <td class="match-feedback" id="match-fb-${it.id}" style="font-weight: 600; font-size: 0.88rem;">En attente</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function attachMatchingModListeners() {
    const selects = document.querySelectorAll(".match-select");
    const testItems = data.tdExercises.find(td => td.id === "td_amrv_2")?.items || [];
    const itemMap = {};
    testItems.forEach(i => itemMap[i.id] = i);

    selects.forEach(sel => {
      sel.addEventListener("change", () => {
        const id = parseInt(sel.dataset.id);
        const item = itemMap[id];
        const fb = document.getElementById(`match-fb-${id}`);
        if (!item || !fb) return;

        if (!sel.value) {
          sel.className = "match-select";
          fb.innerText = "En attente";
          fb.style.color = "var(--text-dim)";
          return;
        }

        if (sel.value === item.correct) {
          sel.className = "match-select correct-ans";
          fb.innerText = "✅ Correct";
          fb.style.color = "#15803d";
        } else {
          sel.className = "match-select wrong-ans";
          fb.innerText = `❌ ${item.correct.toUpperCase()}`;
          fb.style.color = "#b91c1c";
        }
      });
    });
  }

  function buildVRMLDebugHTML(td) {
    return `
      <div class="td-interactive-widget">
        <h4 style="color: var(--amrv-color); margin-bottom: 12px;">💻 Code VRML / X3D de l'Examen à Déboguer :</h4>
        <div class="code-container">${td.codeSnippet}</div>
      </div>
    `;
  }

  // ==========================================
  // 4. QUIZ SYSTEM (ANNALES & OFFICIEL)
  // ==========================================
  function renderQuiz() {
    quizContainer.innerHTML = "";
    const list = data.qcmQuestions.filter(q => {
      if (currentModule === "all") return true;
      return q.module === currentModule;
    });

    list.forEach((q, qIndex) => {
      const card = document.createElement("div");
      card.className = "quiz-card";
      card.id = `quiz-card-${q.id}`;

      card.innerHTML = `
        <div class="card-washi-tape"></div>
        <div class="quiz-question-meta">
          <span class="quiz-meta-badge">Question ${qIndex + 1} / ${list.length} • ${q.module.toUpperCase()}</span>
          <span class="quiz-meta-origin">🏛️ ${q.examOrigin}</span>
        </div>
        <div class="quiz-question-title">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, optIndex) => `
            <div class="quiz-option" data-qid="${q.id}" data-opt="${optIndex}">
              <span class="quiz-opt-letter">${String.fromCharCode(65 + optIndex)}</span>
              <span class="quiz-opt-text">${opt}</span>
            </div>
          `).join("")}
        </div>
        <div class="quiz-explanation" id="explain-${q.id}">
          <strong>💡 Explication officielle :</strong>
          <p style="margin-top: 6px;">${parseMarkdown(q.explain)}</p>
        </div>
      `;

      const options = card.querySelectorAll(".quiz-option");
      options.forEach(optEl => {
        optEl.addEventListener("click", () => {
          if (quizAnswers[q.id] !== undefined) return;

          const chosen = parseInt(optEl.dataset.opt);
          quizAnswers[q.id] = chosen;

          options.forEach((el, idx) => {
            el.classList.add("locked");
            if (idx === q.correct) {
              el.classList.add("correct");
            } else if (idx === chosen) {
              el.classList.add("incorrect");
            }
          });

          card.querySelector(".quiz-explanation").classList.add("visible");
          updateQuizScore();
        });
      });

      quizContainer.appendChild(card);
    });

    updateQuizScore();
  }

  function updateQuizScore() {
    const list = data.qcmQuestions.filter(q => {
      if (currentModule === "all") return true;
      return q.module === currentModule;
    });

    let score = 0;
    let answered = 0;

    list.forEach(q => {
      if (quizAnswers[q.id] !== undefined) {
        answered++;
        if (quizAnswers[q.id] === q.correct) {
          score += 1.0;
        } else if (quizPenaltyActive) {
          score = Math.max(0, score - 0.5);
        }
      }
    });

    if (quizScoreDisplay) {
      quizScoreDisplay.innerText = `${score.toFixed(1)} / ${list.length} (${answered} répondues)`;
    }
  }

  penaltyCheckbox?.addEventListener("change", (e) => {
    quizPenaltyActive = e.target.checked;
    updateQuizScore();
  });

  document.getElementById("btn-reset-quiz")?.addEventListener("click", () => {
    quizAnswers = {};
    renderQuiz();
  });

  // ==========================================
  // 5. GLOSSARY / RÉFÉRENCES EXPRESS
  // ==========================================
  function renderGlossary(filterText = "") {
    glossaryContainer.innerHTML = "";
    
    const terms = [
      { t: "Modèle vs Simulation", d: "Le modèle est la description statique lisible par la machine pour traiter un problème. La simulation est le passage dynamique dans le temps (expérience par analogie). Le modèle est la base de la simulation ; la simulation est l'exécution du modèle.", m: "AMRV" },
      { t: "Réalité Virtuelle (VR)", d: "Translation dynamique de l'utilisateur dans le monde numérique. Simulation immersive, interactive et multimédia.", m: "AMRV" },
      { t: "Interférence de Contradiction", d: "Perception partielle du monde réel venant parasiter l'immersion sensorielle dans le monde virtuel.", m: "AMRV" },
      { t: "Modélisation Topologique", d: "Structure des relations spatiales, connectivité et voisinage (ex: graphe d'adjacence, groupement avec distance fixe).", m: "AMRV" },
      { t: "Modélisation Sémantique", d: "Règles d'interaction logique, détection des collisions, déclencheurs d'événements et feedbacks sensoriels.", m: "AMRV" },
      { t: "Modélisation Cinématique", d: "Description des mouvements, trajectoires et transformations géométriques au cours du temps.", m: "AMRV" },
      { t: "Modélisation Géométrique", d: "Noyau de base définissant les coordonnées des primitives, les formes, dimensions et apparences (textures, couleurs).", m: "AMRV" },
      { t: "Théorème de Shannon-Nyquist", d: "Fe ≥ 2 × Fmax. Pour un CD audio (Fmax = 20 kHz), Fe = 44.1 kHz. En téléphonie, Fe = 8 kHz pour 3.4 kHz. Si violé : repliement de spectre (aliasing).", m: "CAMA" },
      { t: "ITD & ILD (Localisation 3D)", d: "ITD (retard temporel ~0.6 ms) efficace pour les graves < 1500 Hz. ILD (ombre de la tête) efficace pour les aigus > 3000 Hz. HRTF lève le cône de confusion avant/arrière.", m: "CAMA" },
      { t: "Sous-échantillonnage 4:2:0", d: "Divise par 2 en largeur ET en hauteur la chrominance Cb/Cr tout en gardant la luminance Y à 100%. Réduit de 50% la taille sans perte perçue.", m: "CAMA" },
      { t: "Chaîne JPEG", d: "RGB → YCbCr 4:2:0 → Blocs 8x8 → DCT (1 DC + 63 AC) → Quantification (perte) → Zigzag → RLE + Huffman.", m: "CAMA" },
      { t: "GOP (Group of Pictures)", d: "Séquence vidéo moderne : I-Frame (clé autonome pour le Seek), P-Frame (prédiction avant), B-Frame (bidirectionnelle avec buffer et délai).", m: "CAMA" },
      { t: "Critère SAD", d: "Somme des Différences Absolues pixel par pixel lors de l'estimation de mouvement. L'encodeur sélectionne le minimum de SAD pour le vecteur MV(dx, dy).", m: "CAMA" },
      { t: "Haptique IEEE 1918.1.1-2024", d: "Norme du Tactile Internet (Prof. Steinbach). Boucle fermée à 1000 Hz (<1ms). Critère de passivité Re(Z) ≥ 0. Deadband JND de 7 à 10%.", m: "CAMA" }
    ];

    let filtered = terms;
    if (currentModule !== "all") {
      filtered = filtered.filter(item => item.m.toLowerCase() === currentModule);
    }
    if (filterText.trim()) {
      const q = filterText.toLowerCase();
      filtered = filtered.filter(item => item.t.toLowerCase().includes(q) || item.d.toLowerCase().includes(q));
    }

    filtered.forEach(item => {
      const el = document.createElement("div");
      el.className = "glossary-item";
      const modClass = item.m.toLowerCase();
      el.innerHTML = `
        <div class="glossary-term">
          <span>${item.t}</span>
          <span class="glossary-module-badge ${modClass}">${item.m}</span>
        </div>
        <div class="glossary-def">${item.d}</div>
      `;
      glossaryContainer.appendChild(el);
    });
  }

  // ==========================================
  // SEARCH HANDLER
  // ==========================================
  searchInput?.addEventListener("input", (e) => {
    const q = e.target.value;
    renderCourses(q);
    renderVideos(q);
    renderDocuments(q);
    renderGlossary(q);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // ==========================================
  // BADGES & HELPERS
  // ==========================================
  function updateBadges() {
    const coursesCount = (currentModule === "all" ? 
      (data.courses.amrv.length + data.courses.cama.length) : 
      (data.courses[currentModule]?.length || 0));
    const fcCount = data.flashcards.filter(f => currentModule === "all" || f.module === currentModule).length;
    const tdCount = data.tdExercises.filter(t => currentModule === "all" || t.module === currentModule).length;
    const qCount = data.qcmQuestions.filter(q => currentModule === "all" || q.module === currentModule).length;
    const vCount = (data.videos || []).filter(v => currentModule === "all" || v.module === currentModule).length;
    const dCount = (data.documents || []).filter(d => currentModule === "all" || d.module === "all" || d.module === currentModule).length;

    const bCourses = document.getElementById("badge-courses");
    const bVideos = document.getElementById("badge-videos");
    const bDocs = document.getElementById("badge-docs");
    const bFc = document.getElementById("badge-fc");
    const bTd = document.getElementById("badge-td");
    const bQuiz = document.getElementById("badge-quiz");

    if (bCourses) bCourses.innerText = coursesCount;
    if (bVideos) bVideos.innerText = vCount;
    if (bDocs) bDocs.innerText = dCount;
    if (bFc) bFc.innerText = fcCount;
    if (bTd) bTd.innerText = tdCount;
    if (bQuiz) bQuiz.innerText = qCount;
  }


  function openLegacyTestLink() {
    const path = location.hash.match(/^#test-1(?:-(amvr|cama))?$/);
    if (path) location.replace("atelier.html" + (path[1] ? "#" + path[1] : ""));
  }
  window.addEventListener("hashchange", openLegacyTestLink);
  openLegacyTestLink();

  // INITIAL RUN
  applyModuleFilter();
});
