(function () {
  "use strict";

  // ---------- Saqlash (localStorage) ----------
  const KEY = "english-start-v1";
  const blank = () => ({ quiz: {}, read: {}, said: 0, topics: {}, words: {}, days: [], voice: "", rate: 0.9 });
  let S = blank();
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { /* bo'sh holat */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* xotira yopiq */ } };

  const today = () => new Date().toISOString().slice(0, 10);
  function markActive() {
    const d = today();
    if (!S.days.includes(d)) { S.days.push(d); S.days = S.days.slice(-400); save(); }
    renderStreak();
  }
  function streak() {
    const set = new Set(S.days);
    let n = 0;
    const d = new Date();
    if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
    while (set.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function renderStreak() {
    const n = streak();
    document.getElementById("streak").textContent = n ? "🔥 " + n + " kun" : "";
  }

  // ---------- Yordamchilar ----------
  const app = document.getElementById("app");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const html = (s) => { app.innerHTML = s; app.focus({ preventScroll: true }); window.scrollTo(0, 0); };
  const norm = (s) => s.toLowerCase().replace(/[’`]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
  const words = (s) => norm(s).split(" ").filter(Boolean);
  // Yozma javobni chiroyli ko'rsatish: "i am tired" → "I am tired."
  const pretty = (s) => (s.includes(" ") ? s.replace(/\bi\b/g, "I").replace(/^./, (c) => c.toUpperCase()) + "." : s);
  let toastTimer = null;
  function toast(msg) {
    let t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (t.hidden = true), 5000);
  }
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  // ---------- Ovoz: gapirish (TTS) ----------
  const synth = window.speechSynthesis;
  let voices = [];
  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices().filter((v) => /^en[-_]/i.test(v.lang));
  }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }
  function pickVoice() {
    if (!voices.length) return null;
    return voices.find((v) => v.name === S.voice) ||
      voices.find((v) => /en[-_]GB/i.test(v.lang)) ||
      voices.find((v) => /en[-_]US/i.test(v.lang)) || voices[0];
  }
  // Android ilovasida (APK) brauzer ovoz API'lari o'rniga telefonning o'z xizmatlari ishlatiladi
  const NATIVE = window.AndroidBridge || null;
  window.__androidToast = (m) => toast(m);
  function speak(text, rate) {
    if (NATIVE) { NATIVE.speak(text, rate || S.rate || 0.9); return; }
    if (!synth) { toast("Bu brauzerda ovozli o'qish ishlamaydi. Chrome brauzerini sinab ko'ring."); return; }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
    u.rate = rate || S.rate || 0.9;
    synth.speak(u);
  }

  // ---------- Ovoz: tinglash (Speech Recognition) ----------
  const WebSR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const SR = NATIVE ? true : WebSR;
  function listenNative({ onText, onEnd, continuous }) {
    let finalText = "", stopped = false;
    window.__androidSR = {
      partial: (t) => onText((finalText + " " + t).trim()),
      result: (t) => { finalText = (finalText + " " + t).trim(); onText(finalText); },
      end: (why) => {
        // Uzun javobda telefon jimlikdan keyin to'xtaydi: foydalanuvchi to'xtatmaguncha qayta tinglaymiz
        if (continuous && !stopped && (why === "" || /^error-(6|7)$/.test(why))) { NATIVE.startListening(); return; }
        window.__androidSR = null;
        onEnd(finalText);
      }
    };
    NATIVE.startListening();
    return { stop() { stopped = true; NATIVE.stopListening(); } };
  }
  function listen(opts) {
    if (NATIVE) return listenNative(opts);
    const { onText, onEnd, continuous } = opts;
    const r = new WebSR();
    r.lang = "en-US";
    r.interimResults = true;
    r.continuous = !!continuous;
    r.maxAlternatives = 1;
    let finalText = "";
    r.onresult = (e) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalText += e.results[i][0].transcript + " ";
        else interim += e.results[i][0].transcript;
      }
      onText((finalText + interim).trim());
    };
    r.onerror = (e) => {
      if (e.error === "not-allowed" || e.error === "service-not-allowed") {
        toast("Mikrofonga ruxsat berilmadi. Brauzer sozlamalarida (manzil satridagi 🔒 belgisi) bu sayt uchun mikrofonni yoqing.");
      }
    };
    r.onend = () => onEnd(finalText.trim());
    try { r.start(); } catch (e) { toast("Mikrofonni ishga tushirib bo'lmadi. Sahifani yangilab, qayta urinib ko'ring."); setTimeout(() => onEnd(""), 0); }
    return r;
  }
  const noMic = '<div class="notice">Bu brauzer ovozni tanimaydi. Telefonda <b>Chrome</b> (Android) yoki <b>Safari</b> (iPhone), kompyuterda <b>Chrome</b> yoki <b>Edge</b> ishlating. Hozircha gapni ovoz chiqarib ayting va namunani tinglab o\'zingizni solishtiring.</div>';

  // Talaffuzni baholash: maqsad gapdagi so'zlar tartibi bo'yicha qancha so'z to'g'ri eshitildi (LCS)
  function compare(target, said) {
    const t = words(target), s = words(said);
    const dp = Array.from({ length: t.length + 1 }, () => new Array(s.length + 1).fill(0));
    for (let i = t.length - 1; i >= 0; i--)
      for (let j = s.length - 1; j >= 0; j--)
        dp[i][j] = t[i] === s[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hit = new Array(t.length).fill(false);
    let i = 0, j = 0;
    while (i < t.length && j < s.length) {
      if (t[i] === s[j]) { hit[i] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else j++;
    }
    const score = pct(hit.filter(Boolean).length, t.length);
    const marked = t.map((w, k) => '<span class="' + (hit[k] ? "w-ok" : "w-miss") + '">' + esc(w) + "</span>").join(" ");
    return { score, marked };
  }

  // "Tinglang va qaytaring" bloki: data-say atributli tugmalar uchun
  function sayBlock(text, id) {
    return '<div class="card" data-drill="' + id + '">' +
      '<div class="row"><div class="grow say-target">' + esc(text) + "</div>" +
      '<button class="icon-btn" data-speak="' + esc(text) + '" aria-label="Tinglash">🔊</button>' +
      (SR ? '<button class="icon-btn" data-repeat="' + id + '" aria-label="Aytish">🎤</button>' : "") +
      '</div><div class="transcript muted" id="tr-' + id + '"></div></div>';
  }
  const drillTexts = {};
  function bindDrills(list, prefix) {
    list.forEach((t, k) => (drillTexts[prefix + k] = t));
  }

  // Umumiy tugma tinglovchisi
  let activeRec = null;
  document.addEventListener("click", (e) => {
    const sp = e.target.closest("[data-speak]");
    if (sp) { speak(sp.getAttribute("data-speak")); return; }
    const rp = e.target.closest("[data-repeat]");
    if (rp) {
      const id = rp.getAttribute("data-repeat");
      const target = drillTexts[id];
      const out = document.getElementById("tr-" + id);
      if (activeRec) { activeRec.stop(); return; }
      rp.textContent = "⏹";
      out.innerHTML = "Gapiring...";
      activeRec = listen({
        onText: (t) => (out.textContent = "Eshitildi: " + t),
        onEnd: (t) => {
          activeRec = null;
          rp.textContent = "🎤";
          if (!t) { out.innerHTML = "Ovoz eshitilmadi. Yana urinib ko'ring."; return; }
          const r = compare(target, t);
          S.said++; save(); markActive();
          const msg = r.score >= 90 ? "Zo'r! 👏" : r.score >= 60 ? "Yaxshi, qizil so'zlarni yana bir bor ayting." : "Avval 🔊 tinglang, keyin sekinroq ayting.";
          out.innerHTML = '<span class="score">' + r.score + "%</span> — " + msg + "<br>" + r.marked +
            '<br><span class="muted">Siz aytdingiz: “' + esc(t) + "”</span>";
        }
      });
    }
  });

  // ---------- Darajalar ----------
  const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const LEVEL_NAME = { A1: "Beginner", A2: "Elementary", B1: "Intermediate", B2: "Upper-Intermediate", C1: "Advanced", C2: "Proficiency" };
  const LEVEL_IELTS = { A1: "IELTS 2–3", A2: "IELTS 3–4", B1: "IELTS 4–5", B2: "IELTS 5.5–6.5", C1: "IELTS 7–8", C2: "IELTS 8.5–9" };
  // Eski (A1–A2) darslarda daraja yozilmagan: birinchi 9 tasi A1, qolgani A2
  GRAMMAR.forEach((l, i) => {
    if (!l.level) l.level = i < 9 ? "A1" : "A2";
    if (!/Grammar in Use/.test(l.murphy)) l.murphy = "Essential Grammar in Use, " + l.murphy;
  });
  VOCAB.forEach((t) => { if (!t.level) t.level = "A2"; });
  SPEAKING.forEach((t) => { if (!t.level) t.level = "A2"; });
  const myLevel = () => S.level || "A1";
  const byLevel = (list, lv) => list.filter((x) => x.level === lv);
  function levelTabs(base, active) {
    return '<div class="chips" role="tablist">' + LEVELS.map((lv) =>
      '<a class="chip' + (lv === active ? " on" : "") + '" href="#/' + base + "/" + lv + '">' + lv + "</a>").join("") + "</div>";
  }

  // ---------- Sahifalar ----------
  function nextLesson() {
    const from = LEVELS.indexOf(myLevel());
    return GRAMMAR.find((l) => LEVELS.indexOf(l.level) >= from && !(S.quiz[l.id] >= 70)) || GRAMMAR[GRAMMAR.length - 1];
  }
  function grammarDone() { return GRAMMAR.filter((l) => S.quiz[l.id] >= 70).length; }
  function knownWords() { return Object.values(S.words).filter((v) => v >= 2).length; }
  function totalWords() { return VOCAB.reduce((n, t) => n + t.words.length, 0); }

  function viewHome() {
    const lv = myLevel();
    const nl = nextLesson();
    const done = grammarDone();
    const lvIdx = LEVELS.indexOf(lv);
    const near = (list) => list.filter((t) => Math.abs(LEVELS.indexOf(t.level) - lvIdx) <= 1);
    const topics = near(SPEAKING);
    const topic = topics.find((t) => !S.topics[t.id]) || topics[Math.floor(Math.random() * topics.length)] || SPEAKING[0];
    const vts = near(VOCAB);
    const vt = vts.find((t) => t.words.some((w) => !(S.words[w[0]] >= 2))) || vts[0] || VOCAB[0];
    const lvLessons = byLevel(GRAMMAR, lv);
    const lvDone = lvLessons.filter((l) => S.quiz[l.id] >= 70).length;
    html(
      "<h1>Salom! 👋</h1>" +
      '<div class="card"><div class="row"><div class="grow"><div class="muted">Hozirgi darajangiz</div><h3 style="font-size:1.3rem">' + lv + " · " + LEVEL_NAME[lv] + ' <span class="badge">' + LEVEL_IELTS[lv] + "</span></h3>" +
      '<div class="progress" aria-label="Daraja jarayoni"><div style="width:' + pct(lvDone, lvLessons.length) + '%"></div></div>' +
      '<div class="muted">' + lv + " darslari: " + lvDone + "/" + lvLessons.length + (lvDone === lvLessons.length && lvIdx < 5 ? ". Keyingi darajaga o'tishingiz mumkin!" : "") + "</div></div></div>" +
      '<div class="btns"><a class="btn ghost small" href="#/test">🎯 Daraja testi</a>' +
      '<select id="lvl" aria-label="Darajani tanlash">' + LEVELS.map((x) => '<option value="' + x + '"' + (x === lv ? " selected" : "") + ">" + x + " · " + LEVEL_NAME[x] + "</option>").join("") + "</select></div></div>" +
      '<div class="card stats">' +
        '<div class="stat"><b>' + done + "/" + GRAMMAR.length + '</b><span class="muted">dars</span></div>' +
        '<div class="stat"><b>' + S.said + '</b><span class="muted">aytilgan gap</span></div>' +
        '<div class="stat"><b>' + knownWords() + "/" + totalWords() + '</b><span class="muted">so\'z</span></div>' +
      "</div>" +
      "<h2>Bugungi reja</h2>" +
      '<a class="card link" href="#/grammar/' + nl.id + '"><div class="row"><div class="num">1</div><div class="grow"><h3>📘 ' + esc(nl.title) + ' <span class="badge">' + nl.level + '</span></h3><div class="muted">Darsni o\'qing, misollarni tinglang, testdan 70%+ oling. 📖 ' + esc(nl.murphy) + "</div></div></div></a>" +
      '<a class="card link" href="#/speaking/' + topic.id + '"><div class="row"><div class="num">2</div><div class="grow"><h3>🎤 ' + esc(topic.title) + ' <span class="badge">' + topic.level + '</span></h3><div class="muted">Savollarni tinglab, har biriga ' + (lvIdx >= 3 ? "1–2 daqiqa" : "20–30 soniya") + " javob bering.</div></div></div></a>" +
      '<a class="card link" href="#/vocab/' + vt.id + '"><div class="row"><div class="num">3</div><div class="grow"><h3>🗂️ ' + esc(vt.title) + ' <span class="badge">' + vt.level + '</span></h3><div class="muted">Kartochkalar: so\'zni tinglang, ma\'nosini eslang, ovoz chiqarib ayting.</div></div></div></a>' +
      "<h2>Tez o'rganish sirlari</h2>" +
      '<div class="card"><ul class="rules">' +
        "<li><b>Har kuni oz-ozdan:</b> 30–60 daqiqa har kuni haftada bir marta 5 soatdan ancha samarali.</li>" +
        "<li><b>Ovoz chiqarib:</b> har bir misolni 🔊 tinglang va 🎤 bilan 2–3 marta qaytaring. Speaking shunday tez o'sadi.</li>" +
        "<li><b>Xatolar ustida ishlang:</b> testdagi xatolarni qayta o'qing, testni 90%+ bo'lguncha takrorlang.</li>" +
        "<li><b>Kitob bilan birga:</b> har darsda ko'rsatilgan kitob unitidagi mashqlarni daftarga ishlang.</li>" +
        "<li><b>Yozib oling:</b> speaking javobingizni telefonga yozib, namuna javob bilan solishtiring.</li>" +
      "</ul></div>" +
      settingsCard()
    );
    document.getElementById("lvl").onchange = (e) => { S.level = e.target.value; save(); viewHome(); toast("Daraja: " + S.level); };
    bindSettings();
  }

  function settingsCard() {
    const opts = voices.map((v) => '<option value="' + esc(v.name) + '"' + (pickVoice() === v ? " selected" : "") + ">" + esc(v.name + " (" + v.lang + ")") + "</option>").join("");
    return '<h2>Sozlamalar</h2><div class="card settings">' +
      (NATIVE ? "" : opts ? '<label>Ovoz <select id="voice">' + opts + "</select></label>" : '<p class="muted">Inglizcha ovoz topilmadi. Telefon sozlamalarida “Text-to-speech” uchun ingliz tilini o\'rnating.</p>') +
      '<label>Tezlik <select id="rate">' +
        [0.7, 0.8, 0.9, 1].map((r) => '<option value="' + r + '"' + (Number(S.rate) === r ? " selected" : "") + ">" + (r === 1 ? "Oddiy" : r === 0.7 ? "Juda sekin" : r === 0.8 ? "Sekin" : "Biroz sekin") + "</option>").join("") +
      "</select></label>" +
      '<div class="btns"><button class="btn ghost small" data-speak="Hello! Let\'s learn English together.">🔊 Ovozni sinash</button>' +
      '<button class="btn ghost small" id="reset">Jarayonni tozalash</button></div></div>';
  }
  function bindSettings() {
    const v = document.getElementById("voice");
    if (v) v.onchange = () => { S.voice = v.value; save(); };
    document.getElementById("rate").onchange = (e) => { S.rate = Number(e.target.value); save(); };
    const rs = document.getElementById("reset");
    rs.onclick = () => {
      if (rs.dataset.sure) { S = blank(); save(); renderStreak(); viewHome(); toast("Natijalar tozalandi."); return; }
      rs.dataset.sure = "1";
      rs.textContent = "Ishonchingiz komilmi? Yana bosing";
      setTimeout(() => { if (rs.isConnected) { delete rs.dataset.sure; rs.textContent = "Jarayonni tozalash"; } }, 4000);
    };
  }

  function viewGrammarList(lv) {
    lv = LEVELS.includes(lv) ? lv : myLevel();
    const list = byLevel(GRAMMAR, lv);
    const doneN = list.filter((l) => S.quiz[l.id] >= 70).length;
    html(
      "<h1>📘 Grammatika</h1>" +
      '<p class="muted">A1 dan C2 gacha ' + GRAMMAR.length + " ta dars. A1–A2: <b>Essential Grammar in Use</b>, B1–B2: <b>English Grammar in Use</b>, C1–C2: <b>Advanced Grammar in Use</b> tartibida. Testdan 70%+ olsangiz, dars o'tilgan hisoblanadi.</p>" +
      levelTabs("grammar", lv) +
      '<p class="muted">' + lv + " · " + LEVEL_NAME[lv] + " · " + LEVEL_IELTS[lv] + " · o'tildi: " + doneN + "/" + list.length + "</p>" +
      '<div class="list">' +
      list.map((l) => {
        const i = GRAMMAR.indexOf(l);
        const sc = S.quiz[l.id];
        const ok = sc >= 70;
        return '<a class="card link" href="#/grammar/' + l.id + '"><div class="row">' +
          '<div class="num' + (ok ? " done" : "") + '">' + (ok ? "✓" : i + 1) + "</div>" +
          '<div class="grow"><h3>' + esc(l.title) + '</h3><div class="muted">' + esc(l.murphy) + "</div></div>" +
          (sc != null ? '<span class="badge' + (ok ? " ok" : "") + '">' + sc + "%</span>" : "") +
          "</div></a>";
      }).join("") +
      "</div>"
    );
  }

  function viewLesson(id) {
    const l = GRAMMAR.find((x) => x.id === id);
    if (!l) return viewGrammarList();
    const idx = GRAMMAR.indexOf(l);
    S.read[id] = true; save(); markActive();
    bindDrills(l.speak, "g-" + id + "-");
    bindDrills(l.examples.map((e) => e[0]), "ge-" + id + "-");
    html(
      '<a class="back" href="#/grammar/' + l.level + '">← ' + l.level + " darslari</a>" +
      "<h1>" + (idx + 1) + ". " + esc(l.title) + ' <span class="badge">' + l.level + "</span></h1>" +
      '<p class="muted">📖 ' + esc(l.murphy) + " · Qo'shimcha: " + esc(l.book) + "</p>" +
      '<div class="card"><p>' + l.intro + "</p>" +
      '<div class="table-wrap"><table><thead><tr>' + l.tableHead.map((h) => "<th>" + esc(h) + "</th>").join("") + "</tr></thead><tbody>" +
      l.table.map((r) => "<tr>" + r.map((c) => "<td>" + esc(c) + "</td>").join("") + "</tr>").join("") +
      "</tbody></table></div></div>" +
      "<h2>Qoidalar</h2><div class=\"card\"><ul class=\"rules\">" + l.rules.map((r) => "<li>" + r + "</li>").join("") + "</ul></div>" +
      "<h2>Misollar</h2><div class=\"card\">" +
      l.examples.map((e, k) =>
        '<div class="example"><div class="grow"><div class="en">' + esc(e[0]) + '</div><div class="uz">' + esc(e[1]) + "</div>" +
        '<div class="transcript muted" id="tr-ge-' + id + "-" + k + '"></div></div>' +
        '<button class="icon-btn" data-speak="' + esc(e[0]) + '" aria-label="Tinglash">🔊</button>' +
        (SR ? '<button class="icon-btn" data-repeat="ge-' + id + "-" + k + '" aria-label="Aytish">🎤</button>' : "") +
        "</div>").join("") +
      "</div>" +
      "<h2>🎤 Tinglang va qaytaring</h2>" + (SR ? '<p class="muted">🔊 bosib tinglang, keyin 🎤 bosib ayting. Ilova qaysi so\'zlar to\'g\'ri eshitilganini ko\'rsatadi.</p>' : noMic) +
      l.speak.map((t, k) => sayBlock(t, "g-" + id + "-" + k)).join("") +
      '<div class="btns"><a class="btn" href="#/quiz/' + id + '">✏️ Testni boshlash (' + l.quiz.length + " savol)</a>" +
      (GRAMMAR[idx + 1] ? '<a class="btn ghost" href="#/grammar/' + GRAMMAR[idx + 1].id + '">Keyingi dars →</a>' : "") + "</div>"
    );
  }

  function viewQuiz(id) {
    const l = GRAMMAR.find((x) => x.id === id);
    if (!l) return viewGrammarList();
    const qs = l.quiz.slice().sort(() => Math.random() - 0.5);
    let i = 0, right = 0;
    const mistakes = [];

    function show() {
      if (i >= qs.length) return finish();
      const q = qs[i];
      html(
        '<a class="back" href="#/grammar/' + id + '">← Darsga qaytish</a>' +
        '<p class="muted">' + esc(l.title) + " · " + (i + 1) + "/" + qs.length + "</p>" +
        '<div class="progress"><div style="width:' + pct(i, qs.length) + '%"></div></div><br>' +
        '<div class="card"><div class="q">' + esc(q.q) + "</div>" +
        (q.o
          ? '<div class="options">' + q.o.map((o, k) => '<button class="opt" data-k="' + k + '">' + esc(o) + "</button>").join("") + "</div>"
          : '<form id="wf"><input class="answer" id="wa" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Javobni yozing"><div class="btns"><button class="btn">Tekshirish</button></div></form>') +
        '<div id="fb"></div></div>'
      );
      if (q.o) {
        app.querySelectorAll(".opt").forEach((b) => (b.onclick = () => answer(Number(b.dataset.k) === q.a, b)));
      } else {
        const inp = document.getElementById("wa");
        inp.focus();
        document.getElementById("wf").onsubmit = (e) => {
          e.preventDefault();
          if (!inp.value.trim()) return;
          const ok = q.w.some((w) => norm(w) === norm(inp.value));
          answer(ok, null, inp);
        };
      }
    }
    function answer(ok, btn, inp) {
      const q = qs[i];
      if (q.o) {
        app.querySelectorAll(".opt").forEach((b) => {
          b.disabled = true;
          if (Number(b.dataset.k) === q.a) b.classList.add("correct");
        });
        if (!ok) btn.classList.add("wrong");
      } else {
        inp.disabled = true;
        inp.parentNode.querySelector(".btn").remove();
      }
      if (ok) right++; else mistakes.push(q);
      const correct = q.o ? q.o[q.a] : pretty(q.w[0]);
      document.getElementById("fb").innerHTML =
        '<div class="feedback ' + (ok ? "ok" : "bad") + '">' + (ok ? "✅ To'g'ri! " : "❌ To'g'ri javob: <b>" + esc(correct) + "</b>. ") + q.e + "</div>" +
        '<div class="btns"><button class="btn" id="next">' + (i + 1 < qs.length ? "Keyingisi →" : "Natija") + "</button></div>";
      document.getElementById("next").onclick = () => { i++; show(); };
      document.getElementById("next").focus();
    }
    function finish() {
      const score = pct(right, qs.length);
      S.quiz[id] = Math.max(S.quiz[id] || 0, score); save(); markActive();
      const idx = GRAMMAR.indexOf(l);
      html(
        "<h1>" + (score >= 70 ? "🎉 Ajoyib!" : "💪 Yana bir urinish") + "</h1>" +
        '<div class="card"><p>Natija: <b>' + right + "/" + qs.length + " (" + score + "%)</b></p>" +
        (score >= 70 ? "<p>Dars o'tildi. Endi Murphy kitobidagi " + esc(l.murphy) + " mashqlarini ishlang.</p>" : "<p>Qoidalarni qayta o'qing va testni yana bir bor ishlang. 70% kerak.</p>") +
        "</div>" +
        (mistakes.length ? "<h2>Xatolar ustida ishlash</h2>" + mistakes.map((q) =>
          '<div class="card"><b>' + esc(q.q) + '</b><div class="muted">To\'g\'ri: ' + esc(q.o ? q.o[q.a] : pretty(q.w[0])) + " — " + q.e + "</div></div>").join("") : "") +
        '<div class="btns"><a class="btn ghost" href="#/quiz/' + id + '" id="again">🔁 Qayta ishlash</a>' +
        (GRAMMAR[idx + 1] && score >= 70 ? '<a class="btn" href="#/grammar/' + GRAMMAR[idx + 1].id + '">Keyingi dars →</a>' : '<a class="btn" href="#/grammar/' + id + '">Darsni qayta o\'qish</a>') +
        "</div>"
      );
      document.getElementById("again").onclick = (e) => { e.preventDefault(); viewQuiz(id); };
    }
    show();
  }

  function viewSpeakingList(lv) {
    lv = LEVELS.includes(lv) ? lv : myLevel();
    bindDrills(PHRASES.map((p) => p.en), "p-");
    const list = byLevel(SPEAKING, lv);
    const tip = { A1: "har bir javobda 2–3 gap", A2: "2–3 gap, “because” va “for example” bilan", B1: "3–4 gap: javob + sabab + misol", B2: "Part 2 da 1–2 daqiqa, Part 3 da fikr + sabab + misol + qarama-qarshi fikr", C1: "aniq pozitsiya, ehtiyotkor iboralar (it could be argued...) va chuqur tahlil", C2: "nozik fikrlar, idiomalar va turli nuqtai nazarlarni solishtirish" }[lv];
    html(
      "<h1>🎤 Speaking</h1>" +
      (SR ? "" : noMic) +
      '<p class="muted">Savolni tinglang, keyin mikrofonga javob bering. Javobingiz matnga aylanadi, so\'zlar soni va vaqt ko\'rsatiladi. ' + lv + " maqsadi: <b>" + tip + "</b>.</p>" +
      levelTabs("speaking", lv) +
      '<div class="list">' +
      (list.length ? list.map((t) =>
        '<a class="card link" href="#/speaking/' + t.id + '"><div class="row"><div class="num' + (S.topics[t.id] ? " done" : "") + '">' + (S.topics[t.id] ? "✓" : SPEAKING.indexOf(t) + 1) + '</div><div class="grow"><h3>' + esc(t.title) + '</h3><div class="muted">' + (t.part ? "IELTS " + esc(t.part) + " · " : "") + t.questions.length + " savol</div></div>" +
        '<span class="badge">' + t.level + "</span></div></a>").join("") : '<p class="muted">Bu darajada hali mavzu yo\'q.</p>') +
      "</div>" +
      "<h2>Suhbat uchun tayyor iboralar</h2>" +
      PHRASES.map((p, k) =>
        '<div class="card"><div class="row"><div class="grow"><div class="say-target">' + esc(p.en) + '</div><div class="muted">' + esc(p.uz) + '</div><div class="transcript muted" id="tr-p-' + k + '"></div></div>' +
        '<button class="icon-btn" data-speak="' + esc(p.en) + '" aria-label="Tinglash">🔊</button>' +
        (SR ? '<button class="icon-btn" data-repeat="p-' + k + '" aria-label="Aytish">🎤</button>' : "") +
        "</div></div>").join("")
    );
  }

  function viewTopic(id) {
    const t = SPEAKING.find((x) => x.id === id);
    if (!t) return viewSpeakingList();
    html(
      '<a class="back" href="#/speaking/' + t.level + '">← ' + t.level + " mavzulari</a>" +
      "<h1>" + esc(t.title) + ' <span class="badge">' + t.level + "</span></h1>" +
      (t.part ? '<p class="muted">IELTS Speaking ' + esc(t.part) + (t.part === "Part 2" ? ": 1 daqiqa tayyorlaning, 1–2 daqiqa to'xtovsiz gapiring." : t.part === "Part 3" ? ": fikringizni sabab va misol bilan asoslang." : "") + "</p>" : "") +
      (SR ? "" : noMic) +
      '<div class="card"><h3>Foydali iboralar</h3><ul class="rules">' + t.phrases.map((p) => "<li>" + esc(p) + "</li>").join("") + "</ul></div>" +
      t.questions.map((q, k) =>
        '<div class="card"><div class="row"><div class="grow say-target">' + (k + 1) + ". " + esc(q) + "</div>" +
        '<button class="icon-btn" data-speak="' + esc(q) + '" aria-label="Savolni tinglash">🔊</button></div>' +
        (SR ? '<div class="btns"><button class="btn rec small" data-answer="' + k + '">🎤 Javob berish</button> <span class="timer" id="tm-' + k + '"></span></div>' : "") +
        '<div class="transcript" id="ans-' + k + '"></div></div>').join("") +
      '<details class="card"><summary>Namuna javob (avval o\'zingiz javob bering)</summary><p style="margin-top:10px">' + esc(t.sample) + "</p>" +
      '<button class="btn ghost small" data-speak="' + esc(t.sample) + '">🔊 Tinglash</button></details>' +
      '<div class="btns"><button class="btn" id="done">✓ Mavzu bajarildi</button></div>'
    );
    document.getElementById("done").onclick = () => { S.topics[id] = true; save(); markActive(); location.hash = "#/speaking/" + t.level; };

    let rec = null, timer = null;
    app.querySelectorAll("[data-answer]").forEach((b) => (b.onclick = () => {
      const k = b.dataset.answer;
      const out = document.getElementById("ans-" + k);
      const tm = document.getElementById("tm-" + k);
      if (rec) { rec.stop(); return; }
      let sec = 0;
      tm.textContent = "0:00";
      timer = setInterval(() => { sec++; tm.textContent = Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0"); }, 1000);
      b.textContent = "⏹ To'xtatish";
      out.innerHTML = '<span class="muted">Gapiring...</span>';
      rec = listen({
        continuous: true,
        onText: (txt) => (out.textContent = txt),
        onEnd: (txt) => {
          clearInterval(timer);
          rec = null;
          b.textContent = "🎤 Qayta javob berish";
          if (!txt) { out.innerHTML = '<span class="muted">Ovoz eshitilmadi.</span>'; return; }
          S.said++; save(); markActive();
          const w = words(txt);
          const tips = [];
          const minW = { A1: 10, A2: 15, B1: 25, B2: 40, C1: 50, C2: 60 }[t.level] || 15;
          if (w.length < minW) tips.push(t.level + " uchun javob qisqa (" + minW + "+ so'z kerak). Sabab va misol qo'shing.");
          if (!/\b(because|so|but|and)\b/.test(norm(txt))) tips.push("Bog'lovchi ishlating: <b>and, but, because, so</b>.");
          if (!/\bfor example\b/.test(norm(txt)) && w.length >= 15) tips.push("Misol keltiring: <b>For example, ...</b>");
          out.innerHTML = "“" + esc(txt) + "”<div class=\"muted\" style=\"margin-top:6px\">" + w.length + " so'z, " + sec + " soniya. " +
            (tips.length ? tips.join(" ") : "Yaxshi javob! 👍") + "</div>";
        }
      });
    }));
  }

  function viewVocabList(lv) {
    lv = LEVELS.includes(lv) ? lv : myLevel();
    const list = byLevel(VOCAB, lv === "A1" ? "A2" : lv);
    html(
      "<h1>🗂️ Lug'at</h1>" +
      '<p class="muted">Kartochkani bosib ma\'nosini ko\'ring, keyin “Bilaman” yoki “Takrorlash” ni tanlang. 2 marta “Bilaman” desangiz, so\'z o\'zlashtirilgan hisoblanadi. Jami: ' + totalWords() + " so'z.</p>" +
      levelTabs("vocab", lv) +
      (lv === "A1" ? '<p class="muted">A1 va A2 so\'zlari birga berilgan.</p>' : "") +
      '<div class="list">' +
      list.map((t) => {
        const k = t.words.filter((w) => S.words[w[0]] >= 2).length;
        return '<a class="card link" href="#/vocab/' + t.id + '"><div class="row"><div class="grow"><h3>' + esc(t.title) + '</h3><div class="progress"><div style="width:' + pct(k, t.words.length) + '%"></div></div></div>' +
          '<span class="badge' + (k === t.words.length ? " ok" : "") + '">' + k + "/" + t.words.length + "</span></div></a>";
      }).join("") +
      "</div>"
    );
  }

  function viewCards(id) {
    const t = VOCAB.find((x) => x.id === id);
    if (!t) return viewVocabList();
    // Hali o'zlashtirilmagan so'zlar oldinda
    let deck = t.words.slice().sort((a, b) => (S.words[a[0]] || 0) - (S.words[b[0]] || 0));
    let i = 0, flipped = false;
    function show() {
      if (i >= deck.length) {
        markActive();
        html('<a class="back" href="#/vocab/' + t.level + '">← Mavzular</a><h1>✅ Tugadi</h1><div class="card"><p>O\'zlashtirilgan: <b>' +
          t.words.filter((w) => S.words[w[0]] >= 2).length + "/" + t.words.length + '</b></p></div><div class="btns"><a class="btn ghost" href="#/vocab/' + id + '" id="again">🔁 Yana</a><a class="btn" href="#/vocab">Boshqa mavzu</a></div>');
        document.getElementById("again").onclick = (e) => { e.preventDefault(); viewCards(id); };
        return;
      }
      const w = deck[i];
      flipped = false;
      drillTexts["v-" + id] = w[0].split(" – ")[0];
      html(
        '<a class="back" href="#/vocab/' + t.level + '">← Mavzular</a>' +
        '<p class="muted">' + esc(t.title) + " · " + (i + 1) + "/" + deck.length + "</p>" +
        '<div class="card flash" id="fc">' + esc(w[0]) + "<small>Bosing: ma'nosi</small></div>" +
        '<div class="card" style="display:flex;gap:8px;align-items:center"><div class="grow transcript muted" id="tr-v-' + id + '">So\'zni tinglang va ovoz chiqarib ayting.</div>' +
        '<button class="icon-btn" data-speak="' + esc(w[0].replace(/ – /g, ", ")) + '">🔊</button>' +
        (SR ? '<button class="icon-btn" data-repeat="v-' + id + '">🎤</button>' : "") + "</div>" +
        '<div class="btns"><button class="btn ghost" id="again">🔁 Takrorlash</button><button class="btn" id="know">✓ Bilaman</button></div>'
      );
      const fc = document.getElementById("fc");
      fc.onclick = () => {
        flipped = !flipped;
        fc.innerHTML = flipped
          ? esc(w[1]) + "<small>" + esc(w[2]) + "</small>"
          : esc(w[0]) + "<small>Bosing: ma'nosi</small>";
        if (flipped) speak(w[2]);
      };
      document.getElementById("know").onclick = () => { S.words[w[0]] = (S.words[w[0]] || 0) + 1; save(); i++; show(); };
      document.getElementById("again").onclick = () => { S.words[w[0]] = 0; save(); deck.push(w); i++; show(); };
    }
    show();
  }

  function viewBooks() {
    html(
      "<h1>📚 Kitoblaringiz va manbalar</h1>" +
      '<p class="muted">Ilova kitoblaringiz bilan birga ishlatish uchun tuzilgan. Kitob matnlari ko\'chirilmagan: darslar mavzu tartibi bo\'yicha moslangan, mashqlar yangidan yozilgan.</p>' +
      "<h2>Kitoblar: qachon va qanday</h2>" +
      RESOURCES.books.map((b) => '<div class="card"><h3>' + esc(b.name) + '</h3><div class="muted">' + esc(b.use) + "</div></div>").join("") +
      "<h2>Bepul onlayn manbalar</h2>" +
      RESOURCES.online.map((r) => '<a class="card link" href="' + esc(r.url) + '" target="_blank" rel="noopener"><h3>' + esc(r.name) + ' ↗</h3><div class="muted">' + esc(r.use) + "</div></a>").join("") +
      "<h2>A1 dan C2 gacha yo'l xaritasi</h2>" +
      '<div class="card"><ul class="rules">' +
        "<li><b>A1–A2 (1–2 oy):</b> ilovadagi 20 ta dars + Essential Grammar in Use, New Inside Out Elementary, Gateway A2. Speaking: o'zingiz, oila, kundalik hayot.</li>" +
        "<li><b>B1 (2–3 oy):</b> 12 dars + New Inside Out Pre-Intermediate Workbook. Speaking: IELTS Part 1 va oddiy Part 2. Basic IELTS kitoblarini boshlang.</li>" +
        "<li><b>B2 (3–4 oy):</b> 12 dars + English Grammar in Use (ko'k Murphy). Speaking: Part 2 va Part 3. IELTS Vocabulary, Multilevel Master, haftada 3 ta essay.</li>" +
        "<li><b>C1 (4–6 oy):</b> 9 dars + Advanced Grammar in Use. Longman Essay Activator va IELTS Liz g'oyalari bilan har kuni essay. Cambridge IELTS 19 testlari.</li>" +
        "<li><b>C2 (6+ oy):</b> 5 dars, ingliz tilidagi kitob, podkast va maqolalar (BBC, The Guardian), har kuni 10–15 daqiqa erkin gapirish.</li>" +
        "<li>Har bir daraja oxirida <b>🎯 Daraja testi</b>ni ishlang. Har bir darajadan 80%+ olsangiz, keyingisiga o'ting.</li>" +
      "</ul></div>"
    );
  }

  // Daraja testi: har darajadan 4 ta savol, darajalar ketma-ket tekshiriladi
  function viewTest() {
    const pick = (lv) => {
      const pool = [];
      byLevel(GRAMMAR, lv).forEach((l) => l.quiz.forEach((q) => { if (q.o) pool.push(q); }));
      return pool.sort(() => Math.random() - 0.5).slice(0, 4).map((q) => Object.assign({ lv }, q));
    };
    const qs = [].concat(...LEVELS.map(pick));
    const right = {};
    let i = 0;
    function show() {
      if (i >= qs.length) return finish();
      const q = qs[i];
      html(
        "<h1>🎯 Daraja testi</h1>" +
        '<p class="muted">' + (i + 1) + "/" + qs.length + ". Bilmasangiz, taxmin qilmang: “Bilmayman” ni bosing.</p>" +
        '<div class="progress"><div style="width:' + pct(i, qs.length) + '%"></div></div><br>' +
        '<div class="card"><div class="q">' + esc(q.q) + '</div><div class="options">' +
        q.o.map((o, k) => '<button class="opt" data-k="' + k + '">' + esc(o) + "</button>").join("") +
        '<button class="opt" data-k="-1">🤷 Bilmayman</button></div></div>'
      );
      app.querySelectorAll(".opt").forEach((b) => (b.onclick = () => {
        if (Number(b.dataset.k) === q.a) right[q.lv] = (right[q.lv] || 0) + 1;
        i++; show();
      }));
    }
    function finish() {
      let level = "A1";
      for (const lv of LEVELS) { if ((right[lv] || 0) >= 3) level = lv; else break; }
      S.level = level; save(); markActive();
      html(
        "<h1>🎯 Natija: " + level + " · " + LEVEL_NAME[level] + "</h1>" +
        '<div class="card"><table><thead><tr><th>Daraja</th><th>To\'g\'ri</th></tr></thead><tbody>' +
        LEVELS.map((lv) => "<tr><td>" + lv + "</td><td>" + (right[lv] || 0) + "/4</td></tr>").join("") +
        "</tbody></table><p style=\"margin-top:10px\">Taxminiy IELTS: <b>" + LEVEL_IELTS[level] + "</b>. Bugungi reja shu darajadan boshlanadi. Pastki darajalardagi tushunmagan mavzularni ham takrorlab turing.</p></div>" +
        '<div class="btns"><a class="btn" href="#/grammar/' + level + '">' + level + " darslariga o'tish</a><a class=\"btn ghost\" href=\"#/\">Bosh sahifa</a></div>"
      );
    }
    show();
  }

  // ---------- Marshrutlash ----------
  function route() {
    if (NATIVE) NATIVE.stopSpeaking(); else if (synth) synth.cancel();
    if (activeRec) { try { activeRec.stop(); } catch (e) { /* allaqachon to'xtagan */ } activeRec = null; }
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    const [sec, id] = parts;
    document.querySelectorAll(".tabbar a").forEach((a) => {
      const tab = a.dataset.tab;
      a.classList.toggle("active", tab === (sec === "quiz" ? "grammar" : sec || "home"));
    });
    const isLv = LEVELS.includes(id);
    if (sec === "grammar") id && !isLv ? viewLesson(id) : viewGrammarList(id);
    else if (sec === "quiz") viewQuiz(id);
    else if (sec === "test") viewTest();
    else if (sec === "speaking") id && !isLv ? viewTopic(id) : viewSpeakingList(id);
    else if (sec === "vocab") id && !isLv ? viewCards(id) : viewVocabList(id);
    else if (sec === "books") viewBooks();
    else viewHome();
  }
  window.addEventListener("hashchange", route);
  // Telefon/kompyuterga ilova sifatida o'rnatish tugmasi (Chrome, Edge)
  let installEvt = null;
  const installBtn = document.getElementById("install");
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEvt = e; installBtn.classList.add("show"); });
  installBtn.onclick = async () => {
    if (!installEvt) return;
    installEvt.prompt();
    await installEvt.userChoice.catch(() => null);
    installEvt = null;
    installBtn.classList.remove("show");
  };
  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => { /* oflayn rejim ixtiyoriy */ });
  }
  renderStreak();
  route();
  // Ovozlar kechroq yuklansa, sozlamalarni yangilash
  if (synth) synth.addEventListener && synth.addEventListener("voiceschanged", () => { if (!location.hash || location.hash === "#/") viewHome(); });
})();
