/**
 * slide-quiz.js — widget tương tác NHỎ nhúng thẳng vào slide bài giảng reveal.js
 * (KHÁC quiz-loader.js / tsa-quiz-loader.js: không fetch file .md, không chấm cả bài,
 *  không lưu điểm — chỉ là ô luyện nhanh trong 1 slide, chạy được cả khi mở file:// offline.)
 *
 * Cách dùng: thêm <script src="../assets/js/slide-quiz.js"></script> cuối trang,
 * rồi đánh dấu HTML — engine tự dò và dựng giao diện, không cần gọi hàm.
 *
 * 1) ĐIỀN ĐÁP ÁN (kiểu HSA):
 *    <span class="sq-sa" data-ans="64" data-hint="tính lại đỉnh parabol nhé!"></span>
 *    - data-ans  : các đáp án chấp nhận, cách nhau "|" (số thì so theo GIÁ TRỊ, phẩy = chấm);
 *    - data-hint : gợi ý hiện kèm khi sai (tuỳ chọn);  data-width: độ rộng ô (mặc định 3.5em).
 *
 * 2) KÉO THẢ (kiểu TSA):
 *    <div class="sq-dd" data-mode="all" data-cham="Chấm all-or-nothing">
 *      ... lời giải khoét trống: <span class="sq-slot" data-ans="16-x"></span> ...
 *      Kho thẻ: <span class="sq-chip" data-val="16-x">16 − x</span> ... (thêm thẻ nhiễu tuỳ ý)
 *      <div class="sq-nut"></div>   <!-- chỗ đặt hàng nút; tự tạo nếu thiếu -->
 *    </div>
 *    - data-mode : "all" = all-or-nothing (TSA) | "each" = chấm xanh/đỏ từng ô;
 *    - data-cham : nhãn nút chấm (mặc định "Chấm điểm");
 *    - slot khớp chip khi data-ans === data-val; phần HIỂN THỊ lấy theo nội dung thẻ.
 *    Thao tác: kéo bằng chuột/cảm ứng, hoặc chạm thẻ rồi chạm ô; chạm ô đã điền để xoá.
 */
(function () {
  'use strict';

  var CSS = [
    '.sq-chip{display:inline-block;background:var(--maunhat,#e8f2fa);border:1.5px solid var(--mauchinh,#005493);',
    '  border-radius:.35em;padding:0 .45em;margin:.08em .1em;font-weight:bold;font-style:italic;',
    '  color:var(--mauchinh,#005493);cursor:grab;user-select:none;-webkit-user-select:none;',
    '  touch-action:none;box-shadow:0 1px 3px rgba(0,0,0,.18);transition:transform .12s}',
    '.sq-chip:hover{transform:translateY(-2px)}',
    '.sq-chon{outline:3px solid var(--maucam,#c85000);transform:translateY(-2px)}',
    '.sq-slot{display:inline-block;min-width:4.6em;border:2px dashed var(--maucam,#c85000);',
    '  border-radius:.3em;padding:0 .4em;text-align:center;font-weight:bold;font-style:italic;',
    '  color:var(--mauchinh,#005493);cursor:pointer;transition:background .12s}',
    '.sq-hover{background:var(--maucamnhat,#fdf2e9)}',
    '.sq-filled{border-style:solid;background:#fff}',
    '.sq-dung{border-color:#008040!important;background:#e6f4ec!important;color:#008040!important}',
    '.sq-sai{border-color:#c00000!important;background:#fdecea!important;color:#c00000!important}',
    '.sq-nut{margin-top:.4em}',
    '.sq-btn{background:var(--mauchinh,#005493);color:#fff;border:none;border-radius:.4em;',
    '  padding:.14em .7em;margin:.1em .35em .1em 0;font-size:.75em;font-weight:bold;cursor:pointer;',
    '  box-shadow:0 1px 2px rgba(0,0,0,.25)}',
    '.sq-btn:hover{filter:brightness(1.18)}',
    '.sq-phu{background:var(--mauxam,#5a5a5a)}',
    '.sq-fb{font-weight:bold;margin-left:.25em}',
    '.sq-sa-in{text-align:center;font-weight:bold;font-size:1em;color:var(--maucam,#c85000);',
    '  border:2px dashed var(--maucam,#c85000);border-radius:.3em;background:#fff;margin:0 .2em}',
    '.sq-in-dung{border:2px solid #008040;color:#008040}',
    '.sq-in-sai{border:2px solid #c00000;color:#c00000}',
    '.sq-clone{position:fixed;z-index:9999;pointer-events:none;opacity:.92;margin:0;',
    '  display:flex;align-items:center;justify-content:center}'
  ].join('\n');

  function injectCSS() {
    if (document.getElementById('sq-style')) return;
    var st = document.createElement('style');
    st.id = 'sq-style';
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  /* ── 1) Ô điền đáp án ─────────────────────────────────────────────── */
  function num(s) {
    if (!/^[-+]?[0-9]+([.,][0-9]+)?$/.test(s)) return null;
    return parseFloat(s.replace(',', '.'));
  }
  function buildSA(el) {
    var cands = (el.dataset.ans || '').split('|').map(function (s) { return s.trim(); }).filter(Boolean);
    var inp = document.createElement('input');
    inp.type = 'text'; inp.className = 'sq-sa-in'; inp.autocomplete = 'off';
    inp.setAttribute('inputmode', 'decimal');
    inp.style.width = el.dataset.width || '3.5em';
    var bt = document.createElement('button');
    bt.type = 'button'; bt.className = 'sq-btn'; bt.textContent = 'Kiểm tra';
    var fb = document.createElement('span'); fb.className = 'sq-fb';
    function check() {
      var v = inp.value.trim();
      if (!v) { fb.textContent = '← nhập đáp án đã!'; fb.style.color = '#c85000'; return; }
      var ok = cands.some(function (a) {
        var na = num(a), nv = num(v);
        if (na !== null && nv !== null) return Math.abs(na - nv) < 1e-9;
        return a.replace(/\s+/g, '').toLowerCase() === v.replace(/\s+/g, '').toLowerCase();
      });
      inp.classList.toggle('sq-in-dung', ok);
      inp.classList.toggle('sq-in-sai', !ok);
      if (ok) { fb.textContent = '✔ Chính xác!'; fb.style.color = '#008040'; }
      else {
        fb.textContent = '✘ Chưa đúng' + (el.dataset.hint ? ' — ' + el.dataset.hint : '');
        fb.style.color = '#c85000';
      }
    }
    inp.addEventListener('keydown', function (e) {   // đừng để reveal.js "nuốt" phím
      e.stopPropagation();
      if (e.key === 'Enter') check();
    });
    inp.addEventListener('input', function () {
      fb.textContent = ''; inp.classList.remove('sq-in-dung', 'sq-in-sai');
    });
    bt.addEventListener('click', check);
    el.appendChild(inp); el.appendChild(bt); el.appendChild(fb);
  }

  /* ── 2) Kéo thả ───────────────────────────────────────────────────── */
  function slotTai(dd, x, y) {              // slot (của dd) đang nằm dưới toạ độ màn hình
    var el = document.elementFromPoint(x, y);
    var s = el && el.closest ? el.closest('.sq-slot') : null;
    return (s && dd.contains(s)) ? s : null;
  }
  function enableDrag(dd, chip, place, toggleSelect) {
    chip.addEventListener('pointerdown', function (e) {
      if (e.button) return;                 // chỉ chuột trái / chạm
      e.preventDefault(); e.stopPropagation();   // chặn reveal.js hiểu nhầm là vuốt chuyển slide
      var x0 = e.clientX, y0 = e.clientY;
      var rect = chip.getBoundingClientRect();
      var clone = null;
      function move(ev) {
        if (!clone && Math.hypot(ev.clientX - x0, ev.clientY - y0) > 6) {
          clone = chip.cloneNode(true);
          clone.classList.add('sq-clone');
          clone.style.width = rect.width + 'px';
          clone.style.height = rect.height + 'px';
          clone.style.fontSize = (rect.height * 0.58) + 'px';
          clone.style.padding = '0';
          document.body.appendChild(clone);
        }
        if (clone) {
          clone.style.left = (ev.clientX - rect.width / 2) + 'px';
          clone.style.top = (ev.clientY - rect.height / 2) + 'px';
          var s = slotTai(dd, ev.clientX, ev.clientY);
          dd.querySelectorAll('.sq-slot').forEach(function (t) {
            t.classList.toggle('sq-hover', t === s);
          });
        }
      }
      function up(ev) {
        document.removeEventListener('pointermove', move);
        document.removeEventListener('pointerup', up);
        document.removeEventListener('pointercancel', up);
        if (clone) {
          var s = slotTai(dd, ev.clientX, ev.clientY);
          clone.remove();
          dd.querySelectorAll('.sq-slot').forEach(function (t) { t.classList.remove('sq-hover'); });
          if (s) place(s, chip);
        } else {
          toggleSelect(chip);               // chạm nhanh = chọn thẻ (dùng cho cảm ứng)
        }
      }
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up);
      document.addEventListener('pointercancel', up);
    });
  }
  function buildDD(dd) {
    var slots = Array.prototype.slice.call(dd.querySelectorAll('.sq-slot'));
    var chips = Array.prototype.slice.call(dd.querySelectorAll('.sq-chip'));
    var mode = dd.dataset.mode || 'all';
    var nut = dd.querySelector('.sq-nut');
    if (!nut) { nut = document.createElement('div'); nut.className = 'sq-nut'; dd.appendChild(nut); }
    var fb = document.createElement('span'); fb.className = 'sq-fb';
    var sel = null;
    function clearMarks() {
      slots.forEach(function (s) { s.classList.remove('sq-dung', 'sq-sai'); });
      fb.textContent = '';
    }
    function place(slot, chip) {
      slot.dataset.val = chip ? (chip.dataset.val || '') : '';
      slot.innerHTML = chip ? chip.innerHTML : '&nbsp;';
      slot.classList.toggle('sq-filled', !!chip);
      clearMarks();
    }
    function toggleSelect(chip) {
      if (sel === chip) { chip.classList.remove('sq-chon'); sel = null; return; }
      chips.forEach(function (c) { c.classList.remove('sq-chon'); });
      chip.classList.add('sq-chon'); sel = chip;
    }
    function themNut(txt, phu, fn) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'sq-btn' + (phu ? ' sq-phu' : ''); b.textContent = txt;
      b.addEventListener('click', fn);
      nut.appendChild(b);
    }
    slots.forEach(function (slot) {
      slot.innerHTML = '&nbsp;';
      slot.addEventListener('click', function () {
        if (sel) { place(slot, sel); sel.classList.remove('sq-chon'); sel = null; }
        else if (slot.dataset.val) { place(slot, null); }
      });
    });
    chips.forEach(function (chip) { enableDrag(dd, chip, place, toggleSelect); });
    themNut(dd.dataset.cham || 'Chấm điểm', false, function () {
      var ok = 0;
      slots.forEach(function (s) {
        var d = (s.dataset.val || '') === (s.dataset.ans || '');
        if (d) ok++;
        if (mode === 'each') s.classList.add(d ? 'sq-dung' : 'sq-sai');
      });
      if (mode === 'all') {
        if (ok === slots.length) { fb.textContent = '✔ ' + ok + '/' + slots.length + ' ô đúng — trọn điểm!'; fb.style.color = '#008040'; }
        else { fb.textContent = '✘ đúng ' + ok + '/' + slots.length + ' ô → 0 điểm (all-or-nothing!)'; fb.style.color = '#c85000'; }
      } else {
        fb.textContent = 'Đúng ' + ok + '/' + slots.length + ' ô';
        fb.style.color = (ok === slots.length) ? '#008040' : '#c85000';
      }
    });
    themNut('Làm lại', true, function () { slots.forEach(function (s) { place(s, null); }); });
    themNut('Đáp án', true, function () {
      slots.forEach(function (s) {
        var c = null;
        chips.some(function (x) { if (x.dataset.val === s.dataset.ans) { c = x; return true; } return false; });
        if (c) place(s, c);
        else { s.dataset.val = s.dataset.ans || ''; s.textContent = s.dataset.ans || ''; s.classList.add('sq-filled'); }
      });
      fb.textContent = '(đáp án mẫu)'; fb.style.color = '#005493';
    });
    nut.appendChild(fb);
  }

  function init() {
    injectCSS();
    document.querySelectorAll('.sq-sa').forEach(buildSA);
    document.querySelectorAll('.sq-dd').forEach(buildDD);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
