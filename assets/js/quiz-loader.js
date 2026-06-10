/**
 * quiz-loader.js
 * Engine đọc file .md từ raw URL, parse câu hỏi, dựng giao diện trắc nghiệm.
 *
 * Cách dùng:
 *   QuizLoader.init({ mdUrl, containerId, title })
 *
 * Định dạng .md hỗ trợ hai loại câu hỏi:
 *
 * Trắc nghiệm (MC):
 *   <!-- @question id=... type=mc ans=B cat=... -->
 *   **Câu N.** Nội dung câu hỏi
 *   A. Đáp án A
 *   B. Đáp án B
 *   C. Đáp án C
 *   D. Đáp án D
 *   **Lời giải.** Giải thích...
 *
 * Điền đáp án (SA):
 *   <!-- @question id=... type=sa ans=2 cat=... -->
 *   <!-- @question id=... type=sa ans=0,2|0.2|1/5 cat=... -->
 *   **Câu N.** Nội dung câu hỏi
 *   **Lời giải.** Giải thích... **Đáp số: 2.**
 */

(function (global) {
  'use strict';

  // ── Cấu hình lưu kết quả về Google Sheets ───────────────────────────────────
  // Bật cho từng bài bằng QuizLoader.init({ ..., saveResults: true, quizId: '...' })
  const SHEETS_CFG = {
    clientId : '863578042809-89aquohsaidajpiv7npi8l35kbcjtg82.apps.googleusercontent.com',
    webAppUrl: 'https://script.google.com/macros/s/AKfycbwinWVx3kxHEvTSChxtPe69-4s4QH1_ggbRvOZV53-kA2zfVE09GLF4AuHPVqnRH1FMXQ/exec'
  };
  let cfg  = { saveResults: false, quizId: '' };
  let auth = { token: null, name: '', email: '' };

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

    /* ── Bảng số liệu ── */
    .ql-table {
      border-collapse: collapse; margin: 10px 0; width: auto;
      font-size: 0.92em; display: block; overflow-x: auto;
    }
    .ql-table th, .ql-table td {
      border: 1px solid #cbd5e1; padding: 6px 12px;
      text-align: center; white-space: nowrap;
    }
    .ql-table thead th { background: #eff6ff; color: #1e3a8a; font-weight: 600; }
    .ql-table tbody td:first-child { background: #f8fafc; font-weight: 600; text-align: left; }

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

    /* ── SA (Short Answer / Điền đáp án) ── */
    .ql-sa-badge {
      display: inline-block; background: #dbeafe; color: #1e40af;
      font-size: 0.7em; padding: 1px 8px; border-radius: 10px;
      font-weight: 600; letter-spacing: .04em; vertical-align: middle;
      margin-left: 6px;
    }
    .ql-sa-wrap {
      display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
      margin: 6px 0 4px;
    }
    .ql-sa-label { font-size: 0.9em; color: #475569; white-space: nowrap; }
    .ql-sa-input {
      border: 1.5px solid #94a3b8; border-radius: 6px;
      padding: 6px 12px; font-size: 0.96em; outline: none;
      width: 220px; max-width: 100%;
      transition: border-color .2s, box-shadow .2s;
    }
    .ql-sa-input:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59,130,246,.15);
    }
    .ql-sa-input:disabled { background: #f1f5f9; color: #475569; cursor: default; }
    .ql-sa-result { font-size: 0.9em; font-weight: 600; }
    .ql-sa-result.ql-correct-text { color: #16a34a; }
    .ql-sa-result.ql-wrong-text   { color: #dc2626; }

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
    /* ── Đăng nhập Google & trạng thái lưu kết quả ── */
    .ql-auth {
      background: #fffbeb; border: 1px solid #fcd34d; border-radius: 8px;
      padding: 12px 16px; margin-bottom: 16px;
      display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
    }
    .ql-auth.ql-auth-done { background: #f0fdf4; border-color: #86efac; }
    .ql-auth-note { margin: 0; font-size: .88em; color: #92400e; }
    .ql-auth-ok   { margin: 0; font-size: .9em;  color: #166534; }
    .ql-save-status { margin-top: 8px !important; font-size: .88em; font-weight: 600; }
    @media (max-width: 600px) {
      .ql-card { padding: 12px; }
      .ql-opt  { font-size: .86em; }
      .ql-sa-input { width: 180px; }
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
    return text.replace(/(\$[^$]*\$|\$\$[^$]*\$\$)|(!\[([^\]]*)\]\(([^)]+)\))|(\*\*([^*]+?)\*\*)/g,
      (match, math, img, alt, src, bold, boldContent) => {
        if (math) return math;
        if (img)  return `<img src="${src}" alt="${alt}" style="max-width:100%;border-radius:4px;margin:4px 0">`;
        if (bold) return `<strong>${boldContent}</strong>`;
        return match;
      }
    );
  }

  // ── Bảng markdown (GFM) → <table> ───────────────────────────────────────────
  // Dòng phân cách kiểu | --- | :--: | ---: |
  function isTableSep(line) {
    return /^\s*\|?(?:\s*:?-+:?\s*\|)+\s*:?-*:?\s*$/.test(line) &&
           line.includes('-') && line.includes('|');
  }
  function isTableRow(line) {
    return line.includes('|');
  }
  function splitCells(row) {
    let r = row.trim();
    if (r.startsWith('|')) r = r.slice(1);
    if (r.endsWith('|'))   r = r.slice(0, -1);
    return r.split('|').map(c => md(c.trim()));
  }
  function buildTable(headerLine, bodyLines) {
    const head = splitCells(headerLine);
    let html = '<table class="ql-table"><thead><tr>';
    head.forEach(c => html += `<th>${c}</th>`);
    html += '</tr></thead><tbody>';
    bodyLines.forEach(line => {
      const cells = splitCells(line);
      html += '<tr>' + cells.map(c => `<td>${c}</td>`).join('') + '</tr>';
    });
    return html + '</tbody></table>';
  }

  // Chuyển một khối văn bản nhiều dòng → HTML, nhận diện bảng markdown.
  // Các dòng văn bản thường nối bằng <br>; bảng dựng thành <table>.
  function renderRich(raw) {
    const lines = raw.split('\n');
    const out   = [];
    let buf     = [];   // gom các dòng văn bản liên tiếp

    const flush = () => {
      if (buf.length) { out.push(buf.map(md).join('<br>')); buf = []; }
    };

    let i = 0;
    while (i < lines.length) {
      if (isTableRow(lines[i]) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
        flush();
        const header = lines[i];
        i += 2;                       // bỏ qua dòng tiêu đề + dòng phân cách
        const body = [];
        while (i < lines.length && isTableRow(lines[i]) && lines[i].trim() !== '') {
          body.push(lines[i]);
          i++;
        }
        out.push(buildTable(header, body));
      } else {
        buf.push(lines[i]);
        i++;
      }
    }
    flush();
    return out.join('');
  }

  // ── Parser: đọc raw markdown → mảng câu hỏi ─────────────────────────────────
  function parseMarkdown(rawText) {
    // 1. Thu thập tiêu đề sections (## hoặc ###)
    const sectionRe = /^#{2,4}\s+(.+)$/gm;
    const sections  = [];
    let sm;
    while ((sm = sectionRe.exec(rawText)) !== null) {
      sections.push({ pos: sm.index, title: sm[1].trim() });
    }

    // 2. Thu thập vị trí và metadata của các <!-- @question -->
    const commentRe = /<!--\s*@question\s*([\s\S]*?)-->/g;
    const markers   = [];
    let cm;
    while ((cm = commentRe.exec(rawText)) !== null) {
      const typeM  = cm[1].match(/\btype\s*=\s*(\w+)/i);
      const qType  = typeM ? typeM[1].toLowerCase() : 'mc';
      // Regex bắt ans= cho cả MC (ans=A) lẫn SA (ans=0,2|0.2|1/5)
      const ansM   = cm[1].match(/\bans\s*=\s*([^\s>]+)/);
      const ansRaw = ansM ? ansM[1].replace(/-->?$/, '').trim()
                          : (qType === 'mc' ? 'A' : '0');
      const sec    = [...sections].reverse().find(s => s.pos < cm.index);
      markers.push({
        start:   cm.index,
        end:     cm.index + cm[0].length,
        type:    qType,
        ans:     ansRaw,
        section: sec ? sec.title : null
      });
    }

    // 3. Parse từng block giữa hai marker liên tiếp
    const questions   = [];
    let   lastSection = null;

    for (let i = 0; i < markers.length; i++) {
      const blockStart = markers[i].end;
      const blockEnd   = i + 1 < markers.length ? markers[i + 1].start : rawText.length;
      const block      = rawText.slice(blockStart, blockEnd);

      const q = markers[i].type === 'sa'
        ? parseSaBlock(block, markers[i].ans)
        : parseMcBlock(block, markers[i].ans);
      if (!q) continue;

      q.section    = markers[i].section !== lastSection ? markers[i].section : null;
      lastSection  = markers[i].section;
      questions.push(q);
    }

    return questions;
  }

  // ── Parse block câu hỏi trắc nghiệm (MC) ────────────────────────────────────
  function parseMcBlock(block, ansLetter) {
    const ansIdx = 'ABCD'.indexOf(ansLetter.toUpperCase());
    if (ansIdx < 0) return null;

    const lines  = block.split('\n');
    const optRe  = /^([A-Da-d])\s*[.)]\s*([\s\S]*)/;
    const optMap = {};
    lines.forEach((line, idx) => {
      const m = line.trimStart().match(optRe);
      if (m) {
        const key = m[1].toUpperCase();
        if (!optMap[key]) optMap[key] = { idx, text: m[2].trim() };
      }
    });
    if (Object.keys(optMap).length < 4) return null;

    const idxArr      = Object.values(optMap).map(o => o.idx);
    const firstOptIdx = Math.min(...idxArr);
    const lastOptIdx  = Math.max(...idxArr);

    const qLines = lines.slice(0, firstOptIdx).map(l => l.trim()).filter(Boolean);
    const qRaw   = qLines.join('\n')
      .replace(/^\*\*\s*Câu\s*\d+\s*[.:)]\s*\*\*\s*/i, '')
      .replace(/^Câu\s*\d+\s*[.:)]\s*/i, '');
    const qHtml  = renderRich(qRaw);

    const opts = ['A','B','C','D'].map(k => md(optMap[k]?.text || ''));

    const solLines = lines.slice(lastOptIdx + 1).map(l => l.trim()).filter(Boolean);
    const solHtml  = md(
      solLines.join(' ')
        .replace(/^\*\*\s*Lời giải\s*[.:]\s*\*\*\s*/i, '')
        .replace(/^Lời giải\s*[.:]\s*/i, '')
    );

    return { q: qHtml, opts, ans: ansIdx, sol: solHtml };
  }

  // ── Parse block câu hỏi điền đáp án (SA) ────────────────────────────────────
  function parseSaBlock(block, ansRaw) {
    // ans có thể là "2", "0,2|0.2|1/5", "99,87|99.87|784/785", …
    const acceptedAnswers = ansRaw.split('|').map(a => a.trim()).filter(Boolean);
    if (!acceptedAnswers.length) return null;

    const lines = block.split('\n');

    // Tìm dòng bắt đầu lời giải: dòng bắt đầu bằng **Lời giải
    const solIdx = lines.findIndex(l => /^\s*\*\*\s*lời giải/i.test(l));
    const endIdx = solIdx >= 0 ? solIdx : lines.length;

    const qLines = lines.slice(0, endIdx).map(l => l.trim()).filter(Boolean);
    const qRaw   = qLines.join('\n')
      .replace(/^\*\*\s*Câu\s*\d+\s*[.:)]\s*\*\*\s*/i, '')
      .replace(/^Câu\s*\d+\s*[.:)]\s*/i, '');
    const qHtml  = renderRich(qRaw);

    const solLines = solIdx >= 0
      ? lines.slice(solIdx).map(l => l.trim()).filter(Boolean)
      : [];
    const solHtml  = md(
      solLines.join(' ')
        .replace(/^\*\*\s*Lời giải\s*[.:]\s*\*\*\s*/i, '')
        .replace(/^Lời giải\s*[.:]\s*/i, '')
    );

    return { type: 'sa', q: qHtml, acceptedAnswers, sol: solHtml };
  }

  // ── Kiểm tra đáp án SA (chấp nhận nhiều dạng viết) ──────────────────────────
  function checkSaAnswer(userInput, acceptedAnswers) {
    const normalize = s => s.trim()
      .replace(/\s+/g, '')
      .replace(/[≈~]/g, '')
      .replace(/%$/, '')      // bỏ dấu % ở cuối
      .toLowerCase()
      .replace(/,/g, '.');    // thống nhất dấu thập phân

    const nUser = normalize(userInput);
    if (nUser === '') return false;

    return acceptedAnswers.some(ans => {
      const nAns = normalize(ans);
      if (nUser === nAns) return true;
      // So sánh số học để chấp nhận các dạng tương đương (0.2 = 0.20)
      const uNum = parseFloat(nUser);
      const aNum = parseFloat(nAns);
      if (!isNaN(uNum) && !isNaN(aNum) && Math.abs(uNum - aNum) < 1e-9) return true;
      return false;
    });
  }

  // ── Đăng nhập Google (Google Identity Services) ─────────────────────────────
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function decodeJwtPayload(jwt) {
    try {
      const b64  = jwt.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(atob(b64).split('').map(c =>
        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
      return JSON.parse(json);
    } catch (e) { return {}; }
  }

  function setupGoogleSignIn() {
    const start = () => {
      google.accounts.id.initialize({
        client_id: SHEETS_CFG.clientId,
        callback : onGoogleSignIn
      });
      const btn = document.getElementById('ql-gsi-btn');
      if (btn) google.accounts.id.renderButton(btn, { theme: 'outline', size: 'large' });
    };

    if (window.google && google.accounts && google.accounts.id) { start(); return; }

    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.defer = true;
    s.onload  = start;
    s.onerror = () => {
      const note = document.querySelector('.ql-auth-note');
      if (note) note.textContent = '⚠ Không tải được trang đăng nhập Google. Hãy kiểm tra kết nối mạng rồi tải lại trang.';
    };
    document.head.appendChild(s);
  }

  function onGoogleSignIn(res) {
    auth.token = res.credential;
    const p    = decodeJwtPayload(res.credential);
    auth.name  = p.name  || '';
    auth.email = p.email || '';

    const authEl = document.getElementById('ql-auth');
    if (authEl) {
      authEl.classList.add('ql-auth-done');
      authEl.innerHTML =
        `<p class="ql-auth-ok">✓ Đang làm bài: <strong>${escapeHtml(auth.name)}</strong>` +
        ` (${escapeHtml(auth.email)}) — kết quả sẽ được lưu khi nộp bài.</p>`;
    }
  }

  // ── Gửi kết quả về Google Sheets qua Apps Script ────────────────────────────
  function sendResult(score, total, answers) {
    const statusEl = document.getElementById('ql-save-status');
    if (statusEl) statusEl.textContent = '💾 Đang lưu kết quả…';

    // Content-Type text/plain để tránh CORS preflight (Apps Script không trả lời OPTIONS)
    fetch(SHEETS_CFG.webAppUrl, {
      method : 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body   : JSON.stringify({
        token : auth.token,
        quizId: cfg.quizId,
        score : score,
        total : total,
        answers: answers
      })
    })
      .then(r => r.json())
      .then(d => {
        if (!statusEl) return;
        if (d.ok) {
          statusEl.textContent = `✓ Đã lưu kết quả cho ${auth.email}`;
          statusEl.style.color = '#15803d';
        } else {
          statusEl.textContent = '⚠ Không lưu được kết quả: ' + (d.error || 'lỗi không rõ');
          statusEl.style.color = '#b45309';
        }
      })
      .catch(() => {
        if (!statusEl) return;
        statusEl.textContent = '⚠ Không lưu được kết quả (lỗi mạng). Em hãy chụp màn hình điểm gửi thầy/cô.';
        statusEl.style.color = '#b45309';
      });
  }

  // ── Dựng giao diện quiz ───────────────────────────────────────────────────────
  const LABELS = ['A','B','C','D'];

  function render(container, questions, title) {
    const total   = questions.length;
    const saCount = questions.filter(q => q.type === 'sa').length;
    const mcCount = total - saCount;

    let typeDesc;
    if (mcCount && saCount)
      typeDesc = `${mcCount} trắc nghiệm · ${saCount} điền đáp án`;
    else if (saCount)
      typeDesc = 'Điền kết quả vào ô trống';
    else
      typeDesc = 'Chọn đáp án đúng';

    let html = `
      <div class="ql-wrap">
        <div class="ql-header">
          <h2>${title}</h2>
          <p>${total} câu · ${typeDesc} rồi bấm <strong>Nộp bài</strong></p>
        </div>
        ${cfg.saveResults ? `
        <div class="ql-auth" id="ql-auth">
          <div id="ql-gsi-btn"></div>
          <p class="ql-auth-note">🔒 Em hãy đăng nhập Google trước khi làm bài để kết quả được lưu lại.</p>
        </div>` : ''}
        <div class="ql-progress">Đã trả lời: <span id="ql-answered">0</span>/${total} câu</div>
        <div class="ql-result" id="ql-result" style="display:none">
          <div class="ql-score-big" id="ql-score-big"></div>
          <h3 id="ql-score-label"></h3>
          <p  id="ql-score-detail"></p>
          <p class="ql-save-status" id="ql-save-status"></p>
        </div>
        <div id="ql-body">
    `;

    questions.forEach((q, i) => {
      if (q.section) html += `<div class="ql-section">${q.section}</div>`;

      if (q.type === 'sa') {
        html += `
          <div class="ql-card" id="ql-card-${i}">
            <div class="ql-num">Câu ${i + 1}<span class="ql-sa-badge">Điền</span></div>
            <div class="ql-text">${q.q}</div>
            <div class="ql-sa-wrap">
              <span class="ql-sa-label">Đáp án:</span>
              <input type="text" class="ql-sa-input" id="ql-sa-${i}"
                     placeholder="Nhập kết quả…" autocomplete="off">
              <span class="ql-sa-result" id="ql-sa-result-${i}"></span>
            </div>
            <div class="ql-sol" id="ql-sol-${i}" style="display:none">💡 ${q.sol}</div>
          </div>`;
      } else {
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
      }
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

    // Hàm đếm số câu đã trả lời (đóng kín qua questions)
    function updateProgress() {
      let count = 0;
      questions.forEach((q, i) => {
        if (q.type === 'sa') {
          const inp = document.getElementById(`ql-sa-${i}`);
          if (inp && inp.value.trim() !== '') count++;
        } else {
          if (document.querySelector(`input[name="ql-q${i}"]:checked`)) count++;
        }
      });
      document.getElementById('ql-answered').textContent = count;
    }

    container.querySelectorAll('input[type="radio"]').forEach(inp =>
      inp.addEventListener('change', updateProgress)
    );
    container.querySelectorAll('.ql-sa-input').forEach(inp =>
      inp.addEventListener('input', updateProgress)
    );

    document.getElementById('ql-submit').addEventListener('click', () => submit(questions));
    document.getElementById('ql-reset' ).addEventListener('click', () => reset(questions));

    if (cfg.saveResults) setupGoogleSignIn();

    typeset(container);
  }

  // ── Nộp bài ─────────────────────────────────────────────────────────────────
  function submit(questions) {
    if (cfg.saveResults && !auth.token) {
      alert('Em hãy đăng nhập Google (nút ở đầu trang) trước khi nộp bài để kết quả được lưu lại nhé!');
      const authEl = document.getElementById('ql-auth');
      if (authEl) authEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    let correct = 0;
    const answers = [];

    questions.forEach((q, i) => {
      const card  = document.getElementById(`ql-card-${i}`);
      const solEl = document.getElementById(`ql-sol-${i}`);

      if (q.type === 'sa') {
        const inp       = document.getElementById(`ql-sa-${i}`);
        const userInput = inp ? inp.value.trim() : '';
        if (inp) inp.disabled = true;
        answers.push(userInput || '-');

        const isOk  = checkSaAnswer(userInput, q.acceptedAnswers);
        const resEl = document.getElementById(`ql-sa-result-${i}`);

        if (isOk) {
          correct++;
          card.classList.add('ql-correct');
          resEl.textContent = '✓ Đúng';
          resEl.className   = 'ql-sa-result ql-correct-text';
        } else {
          card.classList.add('ql-wrong');
          resEl.textContent = `✗ Sai — đáp án: ${q.acceptedAnswers[0]}`;
          resEl.className   = 'ql-sa-result ql-wrong-text';
        }
      } else {
        const sel    = document.querySelector(`input[name="ql-q${i}"]:checked`);
        const chosen = sel ? parseInt(sel.value) : -1;
        document.querySelectorAll(`input[name="ql-q${i}"]`).forEach(el => el.disabled = true);
        answers.push(chosen >= 0 ? LABELS[chosen] : '-');

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
      }

      solEl.style.display = 'block';
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

    if (cfg.saveResults) sendResult(correct, questions.length, answers);

    typeset(document.getElementById('ql-body'));
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // ── Làm lại ─────────────────────────────────────────────────────────────────
  function reset(questions) {
    questions.forEach((q, i) => {
      const card = document.getElementById(`ql-card-${i}`);
      card.classList.remove('ql-correct', 'ql-wrong');
      document.getElementById(`ql-sol-${i}`).style.display = 'none';

      if (q.type === 'sa') {
        const inp = document.getElementById(`ql-sa-${i}`);
        if (inp) { inp.value = ''; inp.disabled = false; }
        const resEl = document.getElementById(`ql-sa-result-${i}`);
        if (resEl) { resEl.textContent = ''; resEl.className = 'ql-sa-result'; }
      } else {
        document.querySelectorAll(`input[name="ql-q${i}"]`).forEach(el => {
          el.checked = false; el.disabled = false;
        });
        LABELS.forEach((__, j) => {
          const lbl = document.getElementById(`ql-lbl-${i}-${j}`);
          if (lbl) lbl.classList.remove('ql-opt-correct', 'ql-opt-wrong');
        });
      }
    });

    const saveStatus = document.getElementById('ql-save-status');
    if (saveStatus) saveStatus.textContent = '';
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
  async function init({ mdUrl, containerId, title, quizId, saveResults }) {
    cfg.saveResults = !!saveResults;
    cfg.quizId      = quizId || title || location.pathname;
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
