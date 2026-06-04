/**
 * quiz-loader.js
 * Engine đọc file .md từ raw GitHub, parse câu hỏi, dựng giao diện trắc nghiệm.
 *
 * Cách dùng:
 *   QuizLoader.init({ mdUrl, containerId, title })
 *
 * Định dạng .md cần có:
 *   <!-- @question id=... ans=B cat=... -->
 *   **Câu N.** Nội dung câu hỏi
 *   A. Đáp án A
 *   B. Đáp án B
 *   C. Đáp án C
 *   D. Đáp án D
 *   **Lời giải.** Giải thích...
 */

(function (global) {
  'use strict';

  // ── CSS (inject một lần vào <head>) ──────────────────────────────────────────
  const STYLE = `
    .ql-wrap { max-width: 780px; margin: 0 auto; }
    .ql-header {
      background: #eff6ff; border-left: 4px solid #3b82f6;
      border-radius: 6px; padding: 14px 18px; margin-bottom: 16px;
    }
    .ql-header h2 { margin: 0 0 4px; font-size: 1.1em; color: #1e3a8a; }
    .ql-header p  { margin: 0; font-size: 0.88em; color: #475569; }
    .ql-progress  { font-size: 0.88em; color: #64748b; margin-bottom: 12px; }

    .ql-section {
      margin: 22px 0 8px; padding: 6px 12px;
      background: #f1f5f9; border-left: 3px solid #94a3b8;
      border-radius: 4px; font-size: 0.93em; color: #334155; font-weight: 600;
    }
    .ql-card {
      background: #fff; border: 1px solid #e2e8f0;
      border-radius: 8px; padding: 14px 16px; margin-bottom: 10px;
      transition: border-color .2s;
    }
    .ql-card.ql-correct { border-color: #22c55e; background: #f0fdf4; }
    .ql-card.ql-wrong   { border-color: #ef4444; background: #fef2f2; }

    .ql-num  { font-size: 0.75em; font-weight: 700; letter-spacing: .05em;
               color: #94a3b8; margin-bottom: 4px; }
    .ql-text { font-size: 0.96em; line-height: 1.65; margin-bottom: 10px; }
    .ql-opts { display: flex; flex-direction: column; gap: 6px; }

    .ql-opt {
      display: flex; align-items: flex-start; gap: 10px;
      padding: 7px 10px; border: 1px solid #e2e8f0; border-radius: 6px;
      cursor: pointer; font-size: 0.92em; line-height: 1.5;
      transition: background .15s, border-color .15s;
    }
    .ql-opt:hover { background: #f8fafc; border-color: #94a3b8; }
    .ql-opt input { margin-top: 3px; flex-shrink: 0; accent-color: #3b82f6; }
    .ql-key { font-weight: 700; min-width: 18px; color: #3b82f6; flex-shrink: 0; }

    .ql-opt.ql-opt-correct { background: #dcfce7; border-color: #22c55e; }
    .ql-opt.ql-opt-wrong   { background: #fee2e2; border-color: #ef4444; }
    .ql-opt.ql-opt-correct .ql-key { color: #15803d; }
    .ql-opt.ql-opt-wrong   .ql-key { color: #dc2626; }

    .ql-sol {
      margin-top: 10px; padding: 8px 12px;
      background: #fefce8; border-left: 3px solid #eab308;
      border-radius: 4px; font-size: 0.87em; line-height: 1.6; color: #422006;
    }
    .ql-result {
      background: #f0fdf4; border: 2px solid #22c55e; border-radius: 10px;
      padding: 18px; text-align: center; margin-bottom: 18px;
    }
    .ql-result h3 { margin: 0 0 4px; color: #15803d; }
    .ql-result p  { margin: 0; font-size: 0.88em; color: #475569; }
    .ql-score-big { font-size: 2.4em; font-weight: 800; color: #16a34a; }
    .ql-footer { text-align: center; margin: 20px 0 10px; display: flex; gap: 12px; justify-content: center; }
    .ql-btn {
      padding: 10px 30px; border: none; border-radius: 8px;
      font-size: 1em; font-weight: 600; cursor: pointer; transition: opacity .2s;
    }
    .ql-btn-submit { background: #3b82f6; color: #fff; }
    .ql-btn-submit:hover { opacity: .88; }
    .ql-btn-reset  { background: #64748b; color: #fff; }
    .ql-btn-reset:hover  { opacity: .88; }
    @media (max-width: 600px) {
      .ql-card { padding: 12px; }
      .ql-opt  { font-size: .86em; }
    }
  `;

  function injectStyle() {
    if (document.getElementById('ql-style')) return;
    const s = document.createElement('style');
    s.id = 'ql-style';
    s.textContent = STYLE;
    document.head.appendChild(s);
  }

  // ── Chuyển markdown cơ bản → HTML (không đụng nội dung trong $...$) ─────────
  function md(text) {
    // Tách phần math và phần text để tránh thay thế nhầm bên trong LaTeX
    return text.replace(/(\$[^$]*\$|\$\$[^$]*\$\$)|(\*\*([^*]+?)\*\*)/g,
      (match, math, bold, boldContent) => {
        if (math)  return math;           // giữ nguyên math
        if (bold)  return `<strong>${boldContent}</strong>`;
        return match;
      }
    );
  }

  // ── Parser: đọc raw markdown → mảng câu hỏi ─────────────────────────────────
  function parseMarkdown(rawText) {
    // 1. Thu thập tiêu đề sections (###)
    const sectionRe = /^###\s+(.+)$/gm;
    const sections  = [];
    let sm;
    while ((sm = sectionRe.exec(rawText)) !== null) {
      sections.push({ pos: sm.index, title: sm[1].trim() });
    }

    // 2. Thu thập vị trí và metadata của các <!-- @question -->
    const commentRe = /<!--\s*@question\s+([^>]*?)-->/g;
    const markers   = [];
    let cm;
    while ((cm = commentRe.exec(rawText)) !== null) {
      const ansM = cm[1].match(/\bans=([A-D])\b/);
      // section gần nhất trước câu hỏi này
      const sec  = [...sections].reverse().find(s => s.pos < cm.index);
      markers.push({
        start:   cm.index,
        end:     cm.index + cm[0].length,
        ans:     ansM ? ansM[1] : 'A',
        section: sec ? sec.title : null
      });
    }

    // 3. Parse từng block giữa hai marker liên tiếp
    const questions  = [];
    let   lastSection = null;

    for (let i = 0; i < markers.length; i++) {
      const blockStart = markers[i].end;
      const blockEnd   = i + 1 < markers.length ? markers[i + 1].start : rawText.length;
      const block      = rawText.slice(blockStart, blockEnd);
      const q          = parseBlock(block, markers[i].ans);
      if (!q) continue;

      // Gắn tên section chỉ khi section đổi (để hiển thị header 1 lần)
      q.section    = markers[i].section !== lastSection ? markers[i].section : null;
      lastSection  = markers[i].section;
      questions.push(q);
    }

    return questions;
  }

  function parseBlock(block, ansLetter) {
    const ansIdx = 'ABCD'.indexOf(ansLetter);
    if (ansIdx < 0) return null;

    const lines = block.split('\n');

    // Tìm các dòng đáp án A. B. C. D.
    const optMap = {};
    lines.forEach((line, idx) => {
      const m = line.trimStart().match(/^([A-D])\.\s+([\s\S]*)/);
      if (m) optMap[m[1]] = { idx, text: m[2].trim() };
    });
    if (Object.keys(optMap).length < 4) return null;

    const idxArr      = Object.values(optMap).map(o => o.idx);
    const firstOptIdx = Math.min(...idxArr);
    const lastOptIdx  = Math.max(...idxArr);

    // Câu hỏi: các dòng trước đáp án A đầu tiên
    const qLines = lines.slice(0, firstOptIdx).map(l => l.trim()).filter(Boolean);
    const qRaw   = qLines.join('\n').replace(/^\*\*Câu\s*\d+\.\*\*\s*/, '');
    const qHtml  = qRaw.split('\n').map(md).join('<br>');

    // Đáp án A–D
    const opts = ['A','B','C','D'].map(k => md(optMap[k]?.text || ''));

    // Lời giải: các dòng sau đáp án D
    const solLines = lines.slice(lastOptIdx + 1).map(l => l.trim()).filter(Boolean);
    const solHtml  = md(solLines.join(' ').replace(/^\*\*Lời giải\.\*\*\s*/, ''));

    return { q: qHtml, opts, ans: ansIdx, sol: solHtml };
  }

  // ── Dựng giao diện quiz ───────────────────────────────────────────────────────
  const LABELS = ['A','B','C','D'];

  function render(container, questions, title) {
    const total = questions.length;
    let html = `
      <div class="ql-wrap">
        <div class="ql-header">
          <h2>${title}</h2>
          <p>${total} câu · Chọn đáp án đúng rồi bấm <strong>Nộp bài</strong></p>
        </div>
        <div class="ql-progress">Đã trả lời: <span id="ql-answered">0</span>/${total} câu</div>
        <div class="ql-result" id="ql-result" style="display:none">
          <div class="ql-score-big" id="ql-score-big"></div>
          <h3 id="ql-score-label"></h3>
          <p  id="ql-score-detail"></p>
        </div>
        <div id="ql-body">
    `;

    questions.forEach((q, i) => {
      if (q.section) html += `<div class="ql-section">${q.section}</div>`;
      html += `
        <div class="ql-card" id="ql-card-${i}">
          <div class="ql-num">Câu ${i + 1}</div>
          <div class="ql-text">${q.q}</div>
          <div class="ql-opts">
            ${q.opts.map((opt, j) => `
              <label class="ql-opt" id="ql-lbl-${i}-${j}">
                <input type="radio" name="ql-q${i}" value="${j}">
                <span class="ql-key">${LABELS[j]}.</span>
                <span>${opt}</span>
              </label>`).join('')}
          </div>
          <div class="ql-sol" id="ql-sol-${i}" style="display:none">💡 ${q.sol}</div>
        </div>`;
    });

    html += `
        </div><!-- #ql-body -->
        <div class="ql-footer">
          <button class="ql-btn ql-btn-submit" id="ql-submit">Nộp bài</button>
          <button class="ql-btn ql-btn-reset"  id="ql-reset" style="display:none">Làm lại</button>
        </div>
      </div><!-- .ql-wrap -->
    `;

    container.innerHTML = html;

    // Gắn sự kiện
    container.querySelectorAll('input[type="radio"]').forEach(inp =>
      inp.addEventListener('change', updateProgress)
    );
    document.getElementById('ql-submit').addEventListener('click', () => submit(questions));
    document.getElementById('ql-reset' ).addEventListener('click', () => reset(questions));

    typeset(container);
  }

  // ── Đếm số câu đã trả lời ───────────────────────────────────────────────────
  function updateProgress() {
    const total = document.querySelectorAll('[id^="ql-card-"]').length;
    let count = 0;
    for (let i = 0; i < total; i++)
      if (document.querySelector(`input[name="ql-q${i}"]:checked`)) count++;
    document.getElementById('ql-answered').textContent = count;
  }

  // ── Nộp bài ─────────────────────────────────────────────────────────────────
  function submit(questions) {
    let correct = 0;
    const solEls = [];

    questions.forEach((q, i) => {
      const sel    = document.querySelector(`input[name="ql-q${i}"]:checked`);
      const chosen = sel ? parseInt(sel.value) : -1;
      const card   = document.getElementById(`ql-card-${i}`);
      const solEl  = document.getElementById(`ql-sol-${i}`);

      document.querySelectorAll(`input[name="ql-q${i}"]`).forEach(el => el.disabled = true);

      if (chosen === q.ans) {
        correct++;
        card.classList.add('ql-correct');
        document.getElementById(`ql-lbl-${i}-${q.ans}`).classList.add('ql-opt-correct');
      } else {
        card.classList.add('ql-wrong');
        if (chosen >= 0)
          document.getElementById(`ql-lbl-${i}-${chosen}`).classList.add('ql-opt-wrong');
        document.getElementById(`ql-lbl-${i}-${q.ans}`).classList.add('ql-opt-correct');
      }

      solEl.style.display = 'block';
      solEls.push(solEl);
    });

    const pct    = Math.round(correct / questions.length * 100);
    const result = document.getElementById('ql-result');
    document.getElementById('ql-score-big'   ).textContent = `${correct}/${questions.length}`;
    document.getElementById('ql-score-label' ).textContent = `Đúng ${pct}%`;
    document.getElementById('ql-score-detail').textContent =
      pct >= 80 ? '🎉 Xuất sắc! Tiếp tục phát huy.' :
      pct >= 50 ? '👍 Khá tốt! Xem lại câu sai.' :
                  '📖 Cần ôn thêm. Đọc kỹ lời giải bên dưới.';

    result.style.display = 'block';
    document.getElementById('ql-submit').style.display = 'none';
    document.getElementById('ql-reset' ).style.display = 'inline-block';

    typeset(document.getElementById('ql-body'));
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ── Làm lại ─────────────────────────────────────────────────────────────────
  function reset(questions) {
    questions.forEach((_, i) => {
      document.querySelectorAll(`input[name="ql-q${i}"]`).forEach(el => {
        el.checked = false; el.disabled = false;
      });
      const card = document.getElementById(`ql-card-${i}`);
      card.classList.remove('ql-correct', 'ql-wrong');
      LABELS.forEach((__, j) => {
        const lbl = document.getElementById(`ql-lbl-${i}-${j}`);
        if (lbl) lbl.classList.remove('ql-opt-correct', 'ql-opt-wrong');
      });
      document.getElementById(`ql-sol-${i}`).style.display = 'none';
    });

    document.getElementById('ql-result').style.display  = 'none';
    document.getElementById('ql-submit').style.display  = 'inline-block';
    document.getElementById('ql-reset' ).style.display  = 'none';
    document.getElementById('ql-answered').textContent  = '0';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Render toán học (MathJax) ────────────────────────────────────────────────
  function typeset(el) {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise([el]).catch(console.error);
    }
  }

  // ── API công khai ────────────────────────────────────────────────────────────
  /**
   * QuizLoader.init({ mdUrl, containerId, title })
   *   mdUrl       : URL raw GitHub của file .md (raw.githubusercontent.com/...)
   *   containerId : id của div chứa quiz
   *   title       : tiêu đề hiển thị
   */
  async function init({ mdUrl, containerId, title }) {
    injectStyle();
    const container = document.getElementById(containerId);
    if (!container) { console.error('QuizLoader: không tìm thấy #' + containerId); return; }
    container.innerHTML = '<p style="color:#64748b;padding:20px">⏳ Đang tải đề bài...</p>';

    try {
      const res = await fetch(mdUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status} – không tải được file markdown`);
      const text      = await res.text();
      const questions = parseMarkdown(text);
      if (!questions.length) throw new Error('Không tìm thấy câu hỏi nào (thiếu <!-- @question --> trong file)');
      render(container, questions, title || 'Bài trắc nghiệm');
    } catch (err) {
      container.innerHTML = `<p style="color:red;padding:20px">❌ Lỗi: ${err.message}</p>`;
      console.error('QuizLoader:', err);
    }
  }

  global.QuizLoader = { init };

})(window);
