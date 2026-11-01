(function () {
  "use strict";

  // ---------- Saqlash (localStorage) ----------
  const KEY = "english-start-v1";
  const blank = () => ({ quiz: {}, read: {}, said: 0, topics: {}, words: {}, days: [], voice: "", rate: 0.9, drafts: {}, essays: [], checks: {}, xp: 0, xpDays: {}, srs: {}, colloc: {}, idq: {}, mist: [], strat: {} });
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
    document.getElementById("streak").textContent = (n ? "🔥 " + n + " kun  " : "") + "⭐ " + (S.xp || 0);
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

  // ---------- XP, kunlik maqsad va nishonlar (gamifikatsiya) ----------
  const DAILY_GOAL = 50;
  const RANKS = [[0, "Yangi boshlovchi"], [200, "Izlanuvchi"], [600, "Faol o'quvchi"], [1500, "Mohir"], [3500, "Ustoz"], [7000, "Ekspert"], [12000, "Proficiency ustasi"]];
  const todayXP = () => (S.xpDays || {})[today()] || 0;
  function rank(xp) {
    let r = 0;
    RANKS.forEach((x, k) => { if (xp >= x[0]) r = k; });
    const next = RANKS[r + 1];
    return { name: RANKS[r][1], from: RANKS[r][0], to: next ? next[0] : null };
  }
  function addXP(n) {
    if (!n) return;
    const before = todayXP();
    S.xp = (S.xp || 0) + n;
    S.xpDays = S.xpDays || {};
    S.xpDays[today()] = before + n;
    const keys = Object.keys(S.xpDays).sort();
    if (keys.length > 120) keys.slice(0, keys.length - 120).forEach((k) => delete S.xpDays[k]);
    save();
    if (before < DAILY_GOAL && before + n >= DAILY_GOAL) toast("🎯 Kunlik maqsad bajarildi: " + DAILY_GOAL + " XP! Zo'r ish.");
    renderStreak();
  }

  // ---------- Takrorlash tizimi (spaced repetition, Leitner qutilari) ----------
  // Har "Bilaman" so'zni keyingi qutiga o'tkazadi: 1, 3, 7, 16, 35 kundan keyin yana so'raladi.
  const SRS_DAYS = [0, 1, 3, 7, 16, 35];
  const addDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); };
  function srsGrade(key, ok) {
    const c = S.srs[key] || { b: 0 };
    c.b = ok ? Math.min(c.b + 1, SRS_DAYS.length - 1) : 0;
    c.due = addDays(ok ? SRS_DAYS[c.b] : 0);
    S.srs[key] = c;
    if (key.indexOf("i:") !== 0) S.words[key] = ok ? (S.words[key] || 0) + 1 : 0;
    save();
  }
  const isDue = (key) => S.srs[key] && S.srs[key].due <= today();
  function allCards() {
    const out = [];
    VOCAB.forEach((t) => t.words.forEach((w) => out.push({ key: w[0], front: w[0], back: w[1], ex: w[2], col: w[3], say: w[0].replace(/ – /g, ", "), from: t.title })));
    (window.IDIOMS || []).forEach((g) => g.items.forEach((x) => out.push({ key: "i:" + x.en, front: x.en, back: x.uz, ex: x.ex, col: x.def, say: x.en, from: "Idioma · " + g.title })));
    return out;
  }
  const dueCards = () => allCards().filter((c) => isDue(c.key));
  // Eski versiyada o'rganilgan so'zlar takrorlash tizimiga o'tkaziladi
  Object.keys(S.words).forEach((k) => {
    if (!S.srs[k] && S.words[k] > 0) { const b = Math.min(S.words[k], 3); S.srs[k] = { b, due: addDays(SRS_DAYS[b]) }; }
  });

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
          S.said++; save(); markActive(); addXP(r.score >= 60 ? 2 : 1);
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
    if (!l.level) {
      l.level = i < 9 ? "A1" : "A2";
      if (!/Grammar in Use/.test(l.murphy)) l.murphy = "Essential Grammar in Use, " + l.murphy;
    }
  });
  // Qo'shimcha fayllardagi darslar ham o'z darajasi ichida turishi uchun (tartib barqaror saralanadi)
  const LV_ORDER = ["A1", "A2", "B1", "B2", "C1", "C2"];
  GRAMMAR.sort((a, b) => LV_ORDER.indexOf(a.level) - LV_ORDER.indexOf(b.level));
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
      xpCard() +
      '<div class="card stats">' +
        '<div class="stat"><b>' + done + "/" + GRAMMAR.length + '</b><span class="muted">dars</span></div>' +
        '<div class="stat"><b>' + S.said + '</b><span class="muted">aytilgan gap</span></div>' +
        '<div class="stat"><b>' + knownWords() + "/" + totalWords() + '</b><span class="muted">so\'z</span></div>' +
      "</div>" +
      "<h2>Bugungi reja</h2>" +
      '<a class="card link" href="#/grammar/' + nl.id + '"><div class="row"><div class="num">1</div><div class="grow"><h3>📘 ' + esc(nl.title) + ' <span class="badge">' + nl.level + '</span></h3><div class="muted">Darsni o\'qing, misollarni tinglang, testdan 70%+ oling. 📖 ' + esc(nl.murphy) + "</div></div></div></a>" +
      '<a class="card link" href="#/speaking/' + topic.id + '"><div class="row"><div class="num">2</div><div class="grow"><h3>🎤 ' + esc(topic.title) + ' <span class="badge">' + topic.level + '</span></h3><div class="muted">Savollarni tinglab, har biriga ' + (lvIdx >= 3 ? "1–2 daqiqa" : "20–30 soniya") + " javob bering.</div></div></div></a>" +
      '<a class="card link" href="#/vocab/' + vt.id + '"><div class="row"><div class="num">3</div><div class="grow"><h3>🗂️ ' + esc(vt.title) + ' <span class="badge">' + vt.level + '</span></h3><div class="muted">Kartochkalar: so\'zni tinglang, ma\'nosini eslang, ovoz chiqarib ayting.</div></div></div></a>' +
      (lvIdx >= 2 && window.WRITING && WRITING.task2 ? '<a class="card link" href="#/writing/t2-' + WRITING.task2[(S.essays || []).length % WRITING.task2.length].id + '"><div class="row"><div class="num">4</div><div class="grow"><h3>✍️ IELTS Writing <span class="badge">Band 7</span></h3><div class="muted">Bugun: ' + esc(WRITING.task2[(S.essays || []).length % WRITING.task2.length].title) + ". Rejani o'qing, 40 daqiqada yozing, tekshiring.</div></div></div></a>" : "") +
      (dueCards().length ? '<a class="card link" href="#/review"><div class="row"><div class="num">🔁</div><div class="grow"><h3>Takrorlash: ' + dueCards().length + " ta so'z</h3><div class=\"muted\">Vaqti kelgan so'z va idiomalar. Avval shularni takrorlang: 5 daqiqa yetadi.</div></div></div></a>" : "") +
      (lvIdx >= 3 && IDS().length ? (() => { const g = IDS().find((x) => !(S.idq[x.id] >= 80)) || IDS()[0]; return '<a class="card link" href="#/idiom/' + g.id + '"><div class="row"><div class="num">💬</div><div class="grow"><h3>Idiomalar: ' + esc(g.title) + ' <span class="badge">' + g.level + '</span></h3><div class="muted">10 ta idioma, kartochka va test. 2 tasini speaking javobingizda ishlating.</div></div></div></a>'; })() : "") +
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
      '<p class="muted">A1 dan C2 gacha ' + GRAMMAR.length + " ta dars. A1–A2: <b>Essential Grammar in Use</b>, B1–B2: <b>English Grammar in Use</b>, C1–C2: <b>Advanced Grammar in Use</b> tartibida; o'zbekcha grammatika kitoblaridagi (G'apporov–Qosimova, Bo'ronov va boshq.) qo'shimcha mavzular ham bor. Testdan 70%+ olsangiz, dars o'tilgan hisoblanadi.</p>" +
      (window.IRREGULAR ? '<a class="card link" href="#/irregular"><div class="row"><div style="font-size:1.5rem">📋</div><div class="grow"><h3>Noto\'g\'ri fe\'llar jadvali</h3><div class="muted">' + IRREGULAR.length + " ta fe'l, qidiruv, tinglash va test</div></div></div></a>" : "") +
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
    if (!S.read[id]) addXP(5);
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

  // Umumiy test: grammatika, kollokatsiya, idioma va xatolar daftari shu funksiyadan foydalanadi
  function runQuiz(o) {
    const qs = o.qs.slice().sort(() => Math.random() - 0.5);
    let i = 0, right = 0;
    const mistakes = [];
    function show() {
      if (i >= qs.length) return finish();
      const q = qs[i];
      html(
        '<a class="back" href="' + o.back + '">' + o.backText + "</a>" +
        '<p class="muted">' + esc(o.title) + " · " + (i + 1) + "/" + qs.length + "</p>" +
        '<div class="progress"><div style="width:' + pct(i, qs.length) + '%"></div></div><br>' +
        '<div class="card"><div class="q">' + esc(q.q) + "</div>" +
        (q.o
          ? '<div class="options">' + q.o.map((x, k) => '<button class="opt" data-k="' + k + '">' + esc(x) + "</button>").join("") + "</div>"
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
          answer(q.w.some((w) => norm(w) === norm(inp.value)), null, inp);
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
      const correct = q.o ? q.o[q.a] : pretty(q.w[0]);
      if (ok) {
        right++;
        // Xatolar daftaridagi savolga to'g'ri javob berilsa, u daftardan o'chadi
        S.mist = (S.mist || []).filter((m) => m.q !== q.q);
      } else {
        mistakes.push(q);
        S.mist = (S.mist || []).filter((m) => m.q !== q.q).concat([{ q: q.q, o: q.o, a: q.a, w: q.w, e: q.e || "", from: o.title }]).slice(-80);
      }
      save();
      document.getElementById("fb").innerHTML =
        '<div class="feedback ' + (ok ? "ok" : "bad") + '">' + (ok ? "✅ To'g'ri! " : "❌ To'g'ri javob: <b>" + esc(correct) + "</b>. ") + (q.e || "") + "</div>" +
        '<div class="btns"><button class="btn" id="next">' + (i + 1 < qs.length ? "Keyingisi →" : "Natija") + "</button></div>";
      document.getElementById("next").onclick = () => { i++; show(); };
      document.getElementById("next").focus();
    }
    function finish() {
      const score = pct(right, qs.length);
      markActive(); addXP(right * 2 + (score >= 90 ? 10 : 0));
      const extra = o.onFinish ? o.onFinish(score) : {};
      html(
        "<h1>" + (score >= 70 ? "🎉 Ajoyib!" : "💪 Yana bir urinish") + "</h1>" +
        '<div class="card"><p>Natija: <b>' + right + "/" + qs.length + " (" + score + "%)</b> · +" + (right * 2 + (score >= 90 ? 10 : 0)) + " XP</p>" + (extra.note || "") + "</div>" +
        (mistakes.length ? "<h2>Xatolar ustida ishlash</h2>" + mistakes.map((q) =>
          '<div class="card"><b>' + esc(q.q) + '</b><div class="muted">To\'g\'ri: ' + esc(q.o ? q.o[q.a] : pretty(q.w[0])) + " — " + (q.e || "") + "</div></div>").join("") +
          '<p class="muted">Bu savollar 📒 Xatolar daftariga yozildi (Natijalarim sahifasi).</p>' : "") +
        '<div class="btns"><a class="btn ghost" href="#" id="again">🔁 Qayta ishlash</a>' + (extra.next || "") + "</div>"
      );
      document.getElementById("again").onclick = (e) => { e.preventDefault(); runQuiz(o); };
    }
    show();
  }

  function viewQuiz(id) {
    const l = GRAMMAR.find((x) => x.id === id);
    if (!l) return viewGrammarList();
    const idx = GRAMMAR.indexOf(l);
    runQuiz({
      title: l.title, qs: l.quiz, back: "#/grammar/" + id, backText: "← Darsga qaytish",
      onFinish: (score) => {
        S.quiz[id] = Math.max(S.quiz[id] || 0, score); save();
        return {
          note: score >= 70 ? "<p>Dars o'tildi. Endi kitobdagi mashqlarni ishlang: " + esc(l.murphy) + ".</p>" : "<p>Qoidalarni qayta o'qing va testni yana bir bor ishlang. 70% kerak.</p>",
          next: GRAMMAR[idx + 1] && score >= 70 ? '<a class="btn" href="#/grammar/' + GRAMMAR[idx + 1].id + '">Keyingi dars →</a>' : '<a class="btn" href="#/grammar/' + id + '">Darsni qayta o\'qish</a>'
        };
      }
    });
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
      (window.SPEAKING_GUIDE ? '<a class="card link" href="#/speaking/guide"><h3>🎯 IELTS 7 uchun strategiyalar</h3><div class="muted">Part 1, 2, 3 ni qanday kengaytirish, 4 baholash mezoni, kuchsiz va kuchli javob solishtirmasi.</div></a>' : "") +
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

  // ---------- IELTS tahlil yordamchilari ----------
  const LINKERS = ["however", "although", "whereas", "while", "moreover", "furthermore", "in addition", "additionally", "therefore", "consequently", "as a result", "for instance", "for example", "such as", "on the other hand", "in contrast", "nevertheless", "despite", "in spite of", "because", "since", "due to", "so that", "in my opinion", "in my view", "i believe", "overall", "in conclusion", "to conclude", "firstly", "secondly", "finally", "what is more", "not only", "that said", "admittedly", "even though", "unless", "provided that", "in other words", "this means that", "which means", "as well as", "similarly", "likewise", "by contrast", "meanwhile", "subsequently", "to sum up", "on balance"];
  const STOP = new Set("the a an and or but of to in on at for with by from is are was were be been being it its this that these those i you he she we they my your his her our their me him them us as so if not no do does did have has had can could will would should may might must there here than then very also just more most much many some any all about into over after before up out what which who whom whose when where why how one two".split(" "));
  function linkersIn(text) { const t = " " + norm(text) + " "; return LINKERS.filter((l) => t.includes(" " + l + " ")); }
  function repeatedWords(text, limit) {
    const c = {};
    words(text).forEach((w) => { if (w.length > 3 && !STOP.has(w)) c[w] = (c[w] || 0) + 1; });
    return Object.entries(c).filter(([, n]) => n >= limit).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }
  function speechReport(txt, sec, level) {
    const w = words(txt);
    const tips = [];
    const minW = { A1: 10, A2: 15, B1: 25, B2: 40, C1: 50, C2: 60 }[level] || 15;
    if (w.length < minW) tips.push(level + " uchun javob qisqa (" + minW + "+ so'z kerak). Sabab va misol qo'shing.");
    const links = linkersIn(txt);
    if (!/\b(because|so|but|and)\b/.test(norm(txt)) && !links.length) tips.push("Bog'lovchi ishlating: <b>because, so, but, however</b>.");
    if (!/\b(for example|for instance|such as)\b/.test(norm(txt)) && w.length >= 15) tips.push("Misol keltiring: <b>For example, ...</b>");
    const fill = (norm(txt).match(/\b(um+|uh+|er+|erm)\b/g) || []).length;
    if (fill > 3) tips.push("“um/uh” ko'p (" + fill + "). O'rniga: <b>Well, let me think...</b>");
    const rep = repeatedWords(txt, 4);
    if (rep.length) tips.push("Ko'p takrorlangan: <b>" + rep.map(([x, n]) => x + " ×" + n).join(", ") + "</b>. Sinonim toping.");
    const wpm = sec > 5 ? Math.round(w.length / (sec / 60)) : 0;
    const variety = w.length ? Math.round(new Set(w).size / w.length * 100) : 0;
    const stats = w.length + " so'z · " + sec + " soniya" + (wpm ? " · " + wpm + " so'z/daqiqa" : "") + " · so'z xilma-xilligi " + variety + "%" +
      (links.length ? " · bog'lovchilar: " + esc(links.join(", ")) : "");
    if (wpm && w.length > 30 && wpm < 90) tips.push("Juda sekin (" + wpm + " so'z/daqiqa). Band 7 uchun taxminan 110–150 tabiiy tezlik.");
    return '“' + esc(txt) + '”<div class="muted" style="margin-top:6px">' + stats + "</div>" +
      '<div style="margin-top:6px">' + (tips.length ? tips.map((x) => "• " + x).join("<br>") : "Yaxshi javob! 👍") + "</div>";
  }
  const fmt = (sec) => Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");

  function viewTopic(id) {
    const t = SPEAKING.find((x) => x.id === id);
    if (!t) return viewSpeakingList();
    const isP2 = t.part === "Part 2";
    html(
      '<a class="back" href="#/speaking/' + t.level + '">← ' + t.level + " mavzulari</a>" +
      "<h1>" + esc(t.title) + ' <span class="badge">' + t.level + "</span></h1>" +
      (t.part ? '<p class="muted">IELTS Speaking ' + esc(t.part) + (isP2 ? ": 1 daqiqa tayyorlaning, 1–2 daqiqa to'xtovsiz gapiring." : t.part === "Part 3" ? ": fikringizni sabab, misol va oqibat bilan asoslang." : ": 2–4 gap: javob + sabab + misol.") + ' <a href="#/speaking/guide">Band 7 strategiyalari →</a></p>' : "") +
      (SR ? "" : noMic) +
      (isP2 && SR ? '<div class="card"><h3>⏱ Imtihon rejimi</h3><p class="muted">Haqiqiy imtihondagidek: 1 daqiqa tayyorgarlik (qisqa yozuvlar), keyin 2 daqiqa gapirasiz. 2:00 da yozish o\'zi to\'xtaydi.</p>' +
        '<div class="btns"><button class="btn" id="exam">▶️ Boshlash</button> <span class="timer" id="exam-tm"></span></div>' +
        '<textarea id="exam-notes" class="notes" rows="4" placeholder="Tayyorgarlik yozuvlari: kalit so\'zlar, reja..." hidden></textarea>' +
        '<div class="transcript" id="exam-out"></div></div>' : "") +
      '<div class="card"><h3>Foydali iboralar</h3><ul class="rules">' + t.phrases.map((p) => "<li>" + esc(p) + "</li>").join("") + "</ul></div>" +
      t.questions.map((q, k) =>
        '<div class="card"><div class="row"><div class="grow say-target">' + (isP2 && k ? "• " : (k + 1) + ". ") + esc(q) + "</div>" +
        '<button class="icon-btn" data-speak="' + esc(q) + '" aria-label="Savolni tinglash">🔊</button></div>' +
        (SR && !(isP2 && k) ? '<div class="btns"><button class="btn rec small" data-answer="' + k + '">🎤 Javob berish</button> <span class="timer" id="tm-' + k + '"></span></div>' : "") +
        '<div class="transcript" id="ans-' + k + '"></div></div>').join("") +
      '<details class="card"><summary>Namuna javob (avval o\'zingiz javob bering)</summary><p style="margin-top:10px;white-space:pre-line">' + esc(t.sample) + "</p>" +
      '<button class="btn ghost small" data-speak="' + esc(t.sample) + '">🔊 Tinglash</button></details>' +
      '<div class="btns"><button class="btn" id="done">✓ Mavzu bajarildi</button></div>'
    );
    document.getElementById("done").onclick = () => { if (!S.topics[id]) addXP(15); S.topics[id] = true; save(); markActive(); location.hash = "#/speaking/" + t.level; };

    let rec = null, timer = null;
    const stopAll = () => { if (rec) rec.stop(); };
    app.querySelectorAll("[data-answer]").forEach((b) => (b.onclick = () => {
      const k = b.dataset.answer;
      const out = document.getElementById("ans-" + k);
      const tm = document.getElementById("tm-" + k);
      if (rec) { stopAll(); return; }
      let sec = 0;
      tm.textContent = "0:00";
      timer = setInterval(() => { sec++; tm.textContent = fmt(sec); }, 1000);
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
          S.said++; save(); markActive(); addXP(3);
          out.innerHTML = speechReport(txt, sec, t.level);
        }
      });
    }));

    const ex = document.getElementById("exam");
    if (ex) ex.onclick = () => {
      const tm = document.getElementById("exam-tm"), notes = document.getElementById("exam-notes"), out = document.getElementById("exam-out");
      if (rec) { stopAll(); return; }
      if (timer) { clearInterval(timer); timer = null; ex.textContent = "▶️ Boshlash"; tm.textContent = ""; return; }
      speak(t.questions[0]);
      notes.hidden = false; notes.value = ""; notes.focus();
      out.innerHTML = "";
      let left = 60;
      ex.textContent = "⏭ Tayyorman, gapirishni boshlash";
      tm.textContent = "Tayyorgarlik " + fmt(left);
      const startTalk = () => {
        clearInterval(timer); timer = null;
        let sec = 0;
        ex.textContent = "⏹ To'xtatish";
        tm.textContent = "Gapiring 0:00 / 2:00";
        out.innerHTML = '<span class="muted">Gapiring...</span>';
        timer = setInterval(() => { sec++; tm.textContent = "Gapiring " + fmt(sec) + " / 2:00"; if (sec >= 120) stopAll(); }, 1000);
        rec = listen({
          continuous: true,
          onText: (txt) => (out.textContent = txt),
          onEnd: (txt) => {
            clearInterval(timer); timer = null; rec = null;
            ex.textContent = "🔁 Yana boshlash";
            tm.textContent = fmt(sec);
            if (!txt) { out.innerHTML = '<span class="muted">Ovoz eshitilmadi.</span>'; return; }
            S.said++; save(); markActive(); addXP(3);
            out.innerHTML = (sec < 90 ? '<div class="feedback bad">Atigi ' + fmt(sec) + " gapirdingiz. Band 7 uchun 1:45–2:00 gapiring: har bir bandni kengaytiring, misol va his-tuyg'u qo'shing.</div>" : '<div class="feedback ok">Vaqt yaxshi: ' + fmt(sec) + "</div>") + speechReport(txt, sec, t.level);
          }
        });
      };
      timer = setInterval(() => { left--; tm.textContent = "Tayyorgarlik " + fmt(left); if (left <= 0) startTalk(); }, 1000);
      ex.onclick = () => {
        if (rec) { stopAll(); return; }
        if (timer && left > 0 && !rec && ex.textContent.startsWith("⏭")) { startTalk(); return; }
        viewTopic(id);
      };
    };
  }

  function viewGuide(gid) {
    const G = window.SPEAKING_GUIDE;
    if (!G) return viewSpeakingList();
    const g = G.strategies.find((x) => x.id === gid);
    if (!g) {
      html('<a class="back" href="#/speaking">← Speaking</a><h1>🎯 Speaking: Band 7 strategiyalari</h1>' +
        '<p class="muted">IELTS Speaking 4 mezon bo\'yicha baholanadi. Har biri balning 25%.</p>' +
        G.criteria.map((c) => '<details class="card"><summary>' + esc(c.uz) + " (" + esc(c.name) + ")</summary>" +
          '<p style="margin-top:8px"><b>Band 6:</b> ' + esc(c.band6) + "</p><p><b>Band 7:</b> " + esc(c.band7) + '</p><ul class="rules">' + c.tips.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></details>").join("") +
        "<h2>Strategiyalar</h2><div class=\"list\">" +
        G.strategies.map((x, i) => '<a class="card link" href="#/speaking/guide/' + x.id + '"><div class="row"><div class="num">' + (i + 1) + '</div><div class="grow"><h3>' + esc(x.title) + '</h3><div class="muted">' + esc(x.part) + "</div></div></div></a>").join("") + "</div>");
      return;
    }
    bindDrills(g.phrases.map((p) => p[0]), "sg-" + gid + "-");
    html('<a class="back" href="#/speaking/guide">← Strategiyalar</a><h1>' + esc(g.title) + ' <span class="badge">' + esc(g.part) + "</span></h1>" +
      '<div class="card"><p>' + g.intro + '</p><ol class="rules">' + g.steps.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ol></div>" +
      "<h2>Iboralar</h2>" + g.phrases.map((p, k) =>
        '<div class="card"><div class="row"><div class="grow"><div class="say-target">' + esc(p[0]) + '</div><div class="muted">' + esc(p[1]) + '</div><div class="transcript muted" id="tr-sg-' + gid + "-" + k + '"></div></div>' +
        '<button class="icon-btn" data-speak="' + esc(p[0]) + '" aria-label="Tinglash">🔊</button>' +
        (SR ? '<button class="icon-btn" data-repeat="sg-' + gid + "-" + k + '" aria-label="Aytish">🎤</button>' : "") + "</div></div>").join("") +
      "<h2>Solishtiring</h2><div class=\"card\"><p><b>Savol:</b> " + esc(g.example.q) + "</p>" +
      '<div class="feedback bad"><b>Band 5–6:</b> ' + esc(g.example.weak) + ' <button class="btn ghost small" data-speak="' + esc(g.example.weak) + '">🔊</button></div>' +
      '<div class="feedback ok"><b>Band 7–8:</b> ' + esc(g.example.strong) + ' <button class="btn ghost small" data-speak="' + esc(g.example.strong) + '">🔊</button></div>' +
      '<p style="margin-top:10px">' + esc(g.example.why) + "</p></div>");
  }

  function vocabTabs(active) {
    const due = dueCards().length;
    const tabs = [["#/vocab", "words", "🗂️ So'zlar"], ["#/vocab/idioms", "idioms", "💬 Idiomalar"], ["#/vocab/colloc", "colloc", "🧩 Kollokatsiyalar"], ["#/review", "review", "🔁 Takrorlash" + (due ? " (" + due + ")" : "")]];
    return '<div class="chips">' + tabs.map((t) => '<a class="chip' + (t[1] === active ? " on" : "") + '" href="' + t[0] + '">' + t[2] + "</a>").join("") + "</div>";
  }

  function viewVocabList(lv) {
    lv = LEVELS.includes(lv) ? lv : myLevel();
    const list = byLevel(VOCAB, lv === "A1" ? "A2" : lv);
    html(
      "<h1>🗂️ Lug'at</h1>" + vocabTabs("words") +
      '<p class="muted">Kartochkani bosib ma\'nosini ko\'ring, keyin “Bilaman” yoki “Takrorlash” ni tanlang. Bilgan so\'zingiz 1, 3, 7, 16 va 35 kundan keyin 🔁 Takrorlash bo\'limida qayta so\'raladi: shunda so\'z uzoq xotiraga o\'tadi. Jami: ' + totalWords() + " so'z.</p>" +
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

  // Kartochkalar: so'zlar, idiomalar va takrorlash uchun bitta umumiy oyna
  function runDeck(o) {
    let deck = o.cards.slice();
    const failed = new Set();
    let i = 0, flipped = false, knew = 0;
    function show() {
      if (i >= deck.length) {
        markActive();
        html('<a class="back" href="' + o.back + '">' + o.backText + '</a><h1>✅ Tugadi</h1><div class="card"><p>Bilganlaringiz: <b>' + knew + "/" + o.cards.length + "</b></p>" +
          '<p class="muted">Keyingi takrorlash: 🔁 Takrorlash bo\'limida. Bugun qayta so\'raladigan so\'zlar: ' + dueCards().length + ".</p></div>" +
          '<div class="btns"><a class="btn ghost" href="#" id="again">🔁 Yana</a><a class="btn" href="' + o.back + '">' + (o.doneText || "Boshqa mavzu") + "</a></div>");
        document.getElementById("again").onclick = (e) => { e.preventDefault(); o.again ? o.again() : runDeck(o); };
        return;
      }
      const c = deck[i];
      flipped = false;
      drillTexts["card"] = c.say.split(", ")[0];
      const box = (S.srs[c.key] || {}).b || 0;
      html(
        '<a class="back" href="' + o.back + '">' + o.backText + "</a>" +
        '<p class="muted">' + esc(o.title) + " · " + (i + 1) + "/" + deck.length + (c.from && o.showFrom ? " · " + esc(c.from) : "") + ' · <span class="badge">' + (box ? "📦 " + box + "-quti" : "yangi") + "</span></p>" +
        '<div class="progress"><div style="width:' + pct(i, deck.length) + '%"></div></div><br>' +
        '<div class="card flash" id="fc">' + esc(c.front) + "<small>Bosing: ma'nosi</small></div>" +
        '<div class="card" style="display:flex;gap:8px;align-items:center"><div class="grow transcript muted" id="tr-card">Tinglang va ovoz chiqarib ayting.</div>' +
        '<button class="icon-btn" data-speak="' + esc(c.say) + '" aria-label="Tinglash">🔊</button>' +
        (SR ? '<button class="icon-btn" data-repeat="card" aria-label="Aytish">🎤</button>' : "") + "</div>" +
        '<div class="btns"><button class="btn ghost" id="again">🔁 Takrorlash</button><button class="btn" id="know">✓ Bilaman</button></div>'
      );
      const fc = document.getElementById("fc");
      fc.onclick = () => {
        flipped = !flipped;
        fc.innerHTML = flipped
          ? esc(c.back) + "<small>" + esc(c.ex) + (c.col ? "<br><i>" + esc(c.col) + "</i>" : "") + "</small>"
          : esc(c.front) + "<small>Bosing: ma'nosi</small>";
        if (flipped) speak(c.ex);
      };
      document.getElementById("know").onclick = () => {
        if (!failed.has(c.key)) { srsGrade(c.key, true); knew++; addXP(1); }
        i++; show();
      };
      document.getElementById("again").onclick = () => {
        srsGrade(c.key, false);
        if (!failed.has(c.key)) { failed.add(c.key); deck.push(c); }
        i++; show();
      };
    }
    show();
  }
  // Avval vaqti kelgan, keyin yangi, keyin eng past qutidagi so'zlar
  function orderCards(cards) {
    const rankOf = (c) => (isDue(c.key) ? 0 : !S.srs[c.key] ? 1 : 2 + S.srs[c.key].b);
    return cards.slice().sort((a, b) => rankOf(a) - rankOf(b));
  }

  function viewCards(id) {
    const t = VOCAB.find((x) => x.id === id);
    if (!t) return viewVocabList();
    const cards = allCards().filter((c) => t.words.some((w) => w[0] === c.key));
    runDeck({ title: t.title, cards: orderCards(cards), back: "#/vocab/" + t.level, backText: "← Mavzular", again: () => viewCards(id) });
  }

  function viewReview() {
    const due = dueCards();
    const learned = Object.keys(S.srs).length;
    if (!due.length) {
      const next = Object.values(S.srs).map((c) => c.due).sort()[0];
      html("<h1>🔁 Takrorlash</h1>" + vocabTabs("review") +
        '<div class="card"><h3>Bugun takrorlanadigan so\'z yo\'q 🎉</h3><p class="muted">' +
        (learned ? "Xotirangizda " + learned + " ta so'z va idioma bor. Keyingi takrorlash: " + esc(next || "") + "." : "Avval Lug'at yoki Idiomalar kartochkalarini ishlang: “Bilaman” degan so'zlaringiz shu yerga vaqti kelganda qaytadi.") +
        "</p></div>" +
        '<div class="card"><h3>Nega takrorlash kerak?</h3><p class="muted">Tadqiqotlar (spaced repetition, retrieval practice) ko\'rsatadiki, so\'zni bir kunda 10 marta o\'qigandan ko\'ra, oraliq bilan 4–5 marta <b>eslab ko\'rish</b> ancha samarali. Ilova har so\'zni 1, 3, 7, 16, 35 kundan keyin qayta so\'raydi. Xato qilsangiz, so\'z boshiga qaytadi.</p></div>' +
        '<div class="btns"><a class="btn" href="#/vocab">🗂️ Yangi so\'zlar</a><a class="btn ghost" href="#/vocab/idioms">💬 Idiomalar</a></div>');
      return;
    }
    runDeck({ title: "Takrorlash", cards: due.slice(0, 40), back: "#/review", backText: "← Takrorlash", doneText: "Davom etish", showFrom: true, again: viewReview });
  }

  // ---------- Noto'g'ri fe'llar ----------
  function viewIrregular() {
    const list = window.IRREGULAR || [];
    html('<a class="back" href="#/grammar">← Grammatika</a><h1>📋 Noto\'g\'ri fe\'llar</h1>' +
      '<p class="muted">' + list.length + " ta fe'l: 1-shakl (hozirgi), 2-shakl (Past Simple), 3-shakl (Present Perfect, Passive). Avval o'z darajangizdagilarni yodlang.</p>" +
      '<div class="btns" style="margin-bottom:10px"><a class="btn" href="#/irregular/quiz">📝 Test (20 ta)</a></div>' +
      '<input class="answer" id="iq" placeholder="Qidirish: go, yozmoq..." autocomplete="off" autocapitalize="off" spellcheck="false">' +
      '<div class="chips" id="ilv" style="margin-top:10px">' + ["Hammasi"].concat(LEVELS).map((x, k) => '<button class="chip' + (k ? "" : " on") + '" data-lv="' + x + '" type="button">' + x + "</button>").join("") + "</div>" +
      '<div class="card table-wrap"><table><thead><tr><th>1</th><th>2</th><th>3</th><th>Ma\'nosi</th><th></th></tr></thead><tbody id="itb"></tbody></table></div>');
    let lv = "Hammasi";
    const q = document.getElementById("iq");
    function draw() {
      const t = norm(q.value || "");
      const rows = list.filter((v) => (lv === "Hammasi" || v[4] === lv) && (!t || norm(v.slice(0, 4).join(" ")).includes(t)));
      document.getElementById("itb").innerHTML = rows.map((v) => "<tr><td><b>" + esc(v[0]) + "</b></td><td>" + esc(v[1]) + "</td><td>" + esc(v[2]) + '</td><td class="muted">' + esc(v[3]) + '</td><td><button class="icon-btn" data-speak="' + esc(v[0] + ", " + v[1].split(" / ")[0] + ", " + v[2].split(" / ")[0]) + '" aria-label="Tinglash">🔊</button></td></tr>').join("") ||
        '<tr><td colspan="5" class="muted">Topilmadi.</td></tr>';
    }
    q.oninput = draw;
    app.querySelectorAll("#ilv .chip").forEach((b) => (b.onclick = () => {
      lv = b.dataset.lv;
      app.querySelectorAll("#ilv .chip").forEach((x) => x.classList.toggle("on", x === b));
      draw();
    }));
    draw();
  }
  function viewIrregularQuiz() {
    const lvIdx = LEVELS.indexOf(myLevel());
    let pool = (window.IRREGULAR || []).filter((v) => LEVELS.indexOf(v[4]) <= Math.max(lvIdx, 1));
    if (pool.length < 20) pool = window.IRREGULAR || [];
    const forms = (x) => x.split(" / ").map((f) => f.replace(/\s*\(.*\)$/, ""));
    const qs = shuffle(pool).slice(0, 20).map((v, k) => k % 2
      ? { q: v[0] + " (" + v[3] + ") — 3-shakli (V3)?", w: forms(v[2]), e: "<b>" + esc(v[0] + " – " + v[1] + " – " + v[2]) + "</b>" }
      : { q: v[0] + " (" + v[3] + ") — 2-shakli (Past Simple)?", w: forms(v[1]), e: "<b>" + esc(v[0] + " – " + v[1] + " – " + v[2]) + "</b>" });
    runQuiz({ title: "Noto'g'ri fe'llar", qs, back: "#/irregular", backText: "← Jadval",
      onFinish: () => ({ next: '<a class="btn" href="#/irregular">Jadval</a>' }) });
  }

  // ---------- Idiomalar ----------
  const IDS = () => window.IDIOMS || [];
  function viewIdiomList() {
    html("<h1>💬 Idiomalar</h1>" + vocabTabs("idioms") +
      '<p class="muted">Idioma: so\'zma-so\'z tarjima qilib bo\'lmaydigan turg\'un ibora. IELTS Speaking\'da tabiiy ishlatilgan 2–3 ta idioma Lexical Resource balini oshiradi. Writing (esse) da ko\'pchiligi juda norasmiy: har idiomadagi belgiga qarang. Tushuntirish va misollar ilova uchun yangidan yozilgan, mavzular English Idioms in Use Advanced tartibiga mos.</p>' +
      '<div class="list">' + IDS().map((g) => {
        const k = g.items.filter((x) => ((S.srs["i:" + x.en] || {}).b || 0) >= 2).length;
        return '<a class="card link" href="#/idiom/' + g.id + '"><div class="row"><div class="grow"><h3>' + esc(g.title) + ' <span class="badge">' + g.level + '</span></h3><div class="progress"><div style="width:' + pct(k, g.items.length) + '%"></div></div><div class="muted">Test: ' + (S.idq[g.id] != null ? S.idq[g.id] + "%" : "—") + "</div></div>" +
          '<span class="badge' + (k === g.items.length ? " ok" : "") + '">' + k + "/" + g.items.length + "</span></div></a>";
      }).join("") + "</div>");
  }
  const REG = { informal: "norasmiy", neutral: "neytral", formal: "rasmiy" };
  function viewIdiomGroup(id) {
    const g = IDS().find((x) => x.id === id);
    if (!g) return viewIdiomList();
    html('<a class="back" href="#/vocab/idioms">← Idiomalar</a><h1>' + esc(g.title) + ' <span class="badge">' + g.level + "</span></h1>" +
      '<p class="muted">' + esc(g.intro || "") + "</p>" +
      '<div class="btns" style="margin-bottom:12px"><a class="btn" href="#/idiomcards/' + g.id + '">🗂️ Kartochkalar</a><a class="btn ghost" href="#/idiomquiz/' + g.id + '">📝 Test</a></div>' +
      g.items.map((x) => '<div class="card"><div class="row"><div class="grow"><h3>' + esc(x.en) + ' <span class="badge">' + esc(REG[x.reg] || x.reg || "") + "</span></h3>" +
        "<div>" + esc(x.uz) + '</div><div class="muted"><i>' + esc(x.def) + "</i></div></div>" +
        '<button class="icon-btn" data-speak="' + esc(x.en) + '" aria-label="Tinglash">🔊</button></div>' +
        '<div class="example"><div class="grow en">' + esc(x.ex) + '</div><button class="icon-btn" data-speak="' + esc(x.ex) + '" aria-label="Misolni tinglash">🔊</button></div>' +
        (x.tip ? '<div class="muted">💡 ' + esc(x.tip) + "</div>" : "") + "</div>").join(""));
  }
  function viewIdiomCards(id) {
    const g = IDS().find((x) => x.id === id);
    if (!g) return viewIdiomList();
    const cards = allCards().filter((c) => g.items.some((x) => "i:" + x.en === c.key));
    runDeck({ title: g.title, cards: orderCards(cards), back: "#/idiom/" + id, backText: "← " + g.title, doneText: "Idiomalar ro'yxati", again: () => viewIdiomCards(id) });
  }
  const shuffle = (a) => a.slice().sort(() => Math.random() - 0.5);
  function idiomQuestions(g) {
    // Har idioma uchun: ta'rifdan idiomani topish yoki o'zbekcha ma'nodan topish
    return g.items.map((x, k) => {
      const others = shuffle(g.items.filter((y) => y !== x)).slice(0, 3).map((y) => y.en);
      const o = shuffle(others.concat([x.en]));
      const byDef = k % 2 === 0;
      return { q: (byDef ? "Qaysi idioma shu ma'noni beradi: “" + x.def + "”?" : "Qaysi idioma: “" + x.uz + "”?"), o, a: o.indexOf(x.en), e: "Misol: <i>" + esc(x.ex) + "</i>" };
    });
  }
  function viewIdiomQuiz(id) {
    const g = IDS().find((x) => x.id === id);
    if (!g) return viewIdiomList();
    runQuiz({
      title: "Idiomalar · " + g.title, qs: idiomQuestions(g), back: "#/idiom/" + id, backText: "← " + g.title,
      onFinish: (score) => {
        S.idq[id] = Math.max(S.idq[id] || 0, score); save();
        const idx = IDS().indexOf(g), nx = IDS()[idx + 1];
        return { note: score >= 80 ? "<p>Endi bu idiomalardan 2 tasini bugungi speaking javobingizda ishlating.</p>" : "<p>Kartochkalarni yana bir bor ishlab, testni qaytaring.</p>",
          next: nx ? '<a class="btn" href="#/idiom/' + nx.id + '">Keyingi: ' + esc(nx.title) + "</a>" : "" };
      }
    });
  }

  // ---------- Kollokatsiyalar ----------
  const COLS = () => window.COLLOCATIONS || [];
  function viewCollocList() {
    html("<h1>🧩 Kollokatsiyalar</h1>" + vocabTabs("colloc") +
      '<p class="muted">Kollokatsiya: ona tilida so\'zlashuvchilar odatda birga ishlatadigan so\'zlar (<b>make</b> a decision, <b>heavy</b> rain, <b>highly</b> likely). Ular katta matn korpuslari (BNC, COCA) tahlilidan aniqlanadi. To\'g\'ri kollokatsiya IELTS Lexical Resource mezonida band 7 belgisi.</p>' +
      '<div class="list">' + COLS().map((c) => '<a class="card link" href="#/colloc/' + c.id + '"><div class="row"><div class="grow"><h3>' + esc(c.title) + ' <span class="badge">' + c.level + '</span></h3><div class="muted">' + c.pairs.length + " ta birikma · test: " + (S.colloc[c.id] != null ? S.colloc[c.id] + "%" : "—") + "</div></div>" +
        (S.colloc[c.id] >= 80 ? '<span class="badge ok">✓</span>' : "") + "</div></a>").join("") + "</div>" +
      '<div class="card"><h3>Korpusdan o\'zingiz qidiring</h3><p class="muted">So\'z bilan qaysi so\'zlar ko\'p ishlatilishini bilish uchun: <a href="https://www.english-corpora.org/coca/" target="_blank" rel="noopener">COCA ↗</a>, <a href="https://youglish.com" target="_blank" rel="noopener">YouGlish ↗</a>, <a href="https://www.freecollocation.com" target="_blank" rel="noopener">Online Collocation Dictionary ↗</a>. Masalan, “problem” so\'zidan oldin qaysi fe\'llar kelishini qidiring: solve, tackle, address, pose.</p></div>');
  }
  function viewColloc(id) {
    const c = COLS().find((x) => x.id === id);
    if (!c) return viewCollocList();
    html('<a class="back" href="#/vocab/colloc">← Kollokatsiyalar</a><h1>' + esc(c.title) + ' <span class="badge">' + c.level + "</span></h1>" +
      '<div class="notice">' + esc(c.intro || "") + "</div>" +
      '<div class="btns" style="margin-bottom:12px"><a class="btn" href="#/cquiz/' + c.id + '">📝 Test (' + c.quiz.length + ")</a></div>" +
      '<div class="card">' + c.pairs.map((p) => '<div class="example"><div class="grow"><div class="en">' + esc(p[0]) + '</div><div class="uz">' + esc(p[1]) + '</div><div class="muted"><i>' + esc(p[2] || "") + "</i></div></div>" +
        '<button class="icon-btn" data-speak="' + esc(p[2] || p[0]) + '" aria-label="Tinglash">🔊</button></div>').join("") + "</div>");
  }
  function viewCollocQuiz(id) {
    const c = COLS().find((x) => x.id === id);
    if (!c) return viewCollocList();
    runQuiz({
      title: "Kollokatsiya · " + c.title, qs: c.quiz.map((q) => { const o = shuffle(q.o); return Object.assign({}, q, { o, a: o.indexOf(q.o[q.a]) }); }), back: "#/colloc/" + id, backText: "← " + c.title,
      onFinish: (score) => {
        S.colloc[id] = Math.max(S.colloc[id] || 0, score); save();
        const nx = COLS()[COLS().indexOf(c) + 1];
        return { note: "<p>Har birikmani o'zingiz haqingizda bitta gapda ishlating va ovoz chiqarib ayting.</p>", next: nx ? '<a class="btn" href="#/colloc/' + nx.id + '">Keyingi: ' + esc(nx.title) + "</a>" : "" };
      }
    });
  }

  // ---------- Natijalarim: XP, nishonlar, statistika, xatolar daftari ----------
  function badges() {
    const st = streak(), known = knownWords(), ess = (S.essays || []).length;
    const lvDone = (lv) => byLevel(GRAMMAR, lv).every((l) => S.quiz[l.id] >= 70);
    const idiomsKnown = Object.keys(S.srs).filter((k) => k.indexOf("i:") === 0 && S.srs[k].b >= 2).length;
    const colDone = Object.values(S.colloc).filter((v) => v >= 80).length;
    return [
      ["🌱", "Birinchi qadam", "Birinchi grammatika darsini o'qing", Object.keys(S.read).length >= 1],
      ["🔥", "Bir hafta", "7 kun ketma-ket o'qing", st >= 7],
      ["🏅", "Bir oy", "30 kun ketma-ket o'qing", st >= 30],
      ["🗣️", "Gapiruvchi", "100 ta gapni ovoz chiqarib ayting", S.said >= 100],
      ["🎙️", "Notiq", "500 ta gapni ayting", S.said >= 500],
      ["📗", "100 so'z", "100 so'zni o'zlashtiring", known >= 100],
      ["📚", "500 so'z", "500 so'zni o'zlashtiring", known >= 500],
      ["💬", "Idioma ustasi", "50 ta idiomani o'zlashtiring", idiomsKnown >= 50],
      ["🧩", "Kollokator", "5 ta kollokatsiya testidan 80%+", colDone >= 5],
      ["✍️", "Yozuvchi", "10 ta esse yozing", ess >= 10],
      ["🅰️", "A daraja", "A1–A2 darslarining hammasi", lvDone("A1") && lvDone("A2")],
      ["🅱️", "B daraja", "B1–B2 darslarining hammasi", lvDone("B1") && lvDone("B2")],
      ["🏆", "C daraja", "C1–C2 darslarining hammasi", lvDone("C1") && lvDone("C2")],
      ["⭐", "1000 XP", "Jami 1000 XP to'plang", (S.xp || 0) >= 1000]
    ];
  }
  function xpCard() {
    const xp = S.xp || 0, r = rank(xp), t = todayXP();
    return '<a class="card link" href="#/progress"><div class="row"><div class="grow"><div class="muted">⭐ ' + xp + " XP · " + esc(r.name) + "</div>" +
      '<div class="progress" style="margin:6px 0"><div style="width:' + Math.min(100, pct(t, DAILY_GOAL)) + '%;background:var(--ok)"></div></div>' +
      '<div class="muted">Bugun: ' + t + "/" + DAILY_GOAL + " XP" + (t >= DAILY_GOAL ? " ✅" : "") + "</div></div>" +
      '<span class="badge">Natijalarim →</span></div></a>';
  }
  function viewProgress() {
    const xp = S.xp || 0, r = rank(xp);
    const days = [];
    for (let k = 13; k >= 0; k--) { const d = new Date(); d.setDate(d.getDate() - k); const key = d.toISOString().slice(0, 10); days.push([key, (S.xpDays || {})[key] || 0]); }
    const max = Math.max(DAILY_GOAL, ...days.map((d) => d[1]));
    const bs = badges();
    const strat = (window.RESEARCH && RESEARCH.strategies) || [];
    const wk = (() => { const d = new Date(); const y = d.getFullYear(); const start = new Date(y, 0, 1); return y + "-w" + Math.ceil(((d - start) / 864e5 + start.getDay() + 1) / 7); })();
    S.strat = S.strat || {};
    const mine = S.strat[wk] || {};
    html("<h1>📈 Natijalarim</h1>" +
      '<div class="card"><div class="row"><div class="grow"><h3 style="font-size:1.3rem">⭐ ' + xp + " XP · " + esc(r.name) + "</h3>" +
      (r.to ? '<div class="progress"><div style="width:' + pct(xp - r.from, r.to - r.from) + '%"></div></div><div class="muted">Keyingi unvongacha: ' + (r.to - xp) + " XP</div>" : '<div class="muted">Eng yuqori unvon!</div>') +
      '</div></div><p class="muted" style="margin-top:8px">XP: dars o\'qish +5, test har to\'g\'ri javob +2, gapni aytish +1–3, speaking mavzu +15, esse +10–25, kartochka +1. Kunlik maqsad: ' + DAILY_GOAL + " XP.</p></div>" +
      "<h2>So'nggi 14 kun</h2>" +
      '<div class="card"><div style="display:flex;align-items:flex-end;gap:4px;height:120px" aria-label="Kunlik XP">' +
      days.map((d) => '<div title="' + d[0] + ": " + d[1] + ' XP" style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;height:100%"><div style="height:' + Math.max(2, pct(d[1], max)) + '%;background:' + (d[1] >= DAILY_GOAL ? "var(--ok)" : "var(--primary)") + ';border-radius:4px 4px 0 0"></div></div>').join("") +
      '</div><div class="row muted" style="justify-content:space-between;font-size:.75rem"><span>' + days[0][0].slice(5) + "</span><span>bugun</span></div></div>" +
      "<h2>Darajalar bo'yicha</h2>" +
      '<div class="card table-wrap"><table><thead><tr><th>Daraja</th><th>Grammatika</th><th>So\'zlar</th><th>Speaking</th></tr></thead><tbody>' +
      LEVELS.map((lv) => {
        const gl = byLevel(GRAMMAR, lv), vl = byLevel(VOCAB, lv), sl = byLevel(SPEAKING, lv);
        const vw = vl.reduce((n, t) => n + t.words.length, 0), vk = vl.reduce((n, t) => n + t.words.filter((w) => S.words[w[0]] >= 2).length, 0);
        return "<tr><td><b>" + lv + "</b></td><td>" + gl.filter((l) => S.quiz[l.id] >= 70).length + "/" + gl.length + "</td><td>" + (vw ? vk + "/" + vw : "—") + "</td><td>" + (sl.length ? sl.filter((t) => S.topics[t.id]).length + "/" + sl.length : "—") + "</td></tr>";
      }).join("") +
      "</tbody></table><p class=\"muted\" style=\"margin-top:8px\">Idiomalar: " + Object.keys(S.srs).filter((k) => k.indexOf("i:") === 0 && S.srs[k].b >= 2).length + " · Kollokatsiya testlari: " + Object.keys(S.colloc).length + "/" + COLS().length + " · Esselar: " + (S.essays || []).length + " · Aytilgan gaplar: " + S.said + "</p></div>" +
      "<h2>Nishonlar</h2>" +
      '<div class="list">' + bs.map((b) => '<div class="card" style="' + (b[3] ? "" : "opacity:.55") + '"><div class="row"><div style="font-size:1.8rem">' + (b[3] ? b[0] : "🔒") + '</div><div class="grow"><h3>' + esc(b[1]) + '</h3><div class="muted">' + esc(b[2]) + "</div></div>" + (b[3] ? '<span class="badge ok">✓</span>' : "") + "</div></div>").join("") + "</div>" +
      "<h2>📒 Xatolar daftari</h2>" +
      ((S.mist || []).length
        ? '<div class="card"><p>Testlarda xato qilgan <b>' + S.mist.length + "</b> ta savolingiz saqlangan. To'g'ri javob bersangiz, daftardan o'chadi.</p>" +
          '<div class="btns"><a class="btn" href="#/mistakes">📝 Xatolarni qayta ishlash</a></div></div>'
        : '<div class="card muted">Hozircha xato yo\'q. Testlarda xato qilsangiz, savol shu yerga tushadi.</div>') +
      (strat.length ? "<h2>🧠 O'rganish strategiyalari: bu hafta</h2>" +
        '<p class="muted">Tadqiqotlar (Oxford, 1990; self-regulated learning) ko\'rsatadiki, ongli strategiya ishlatgan o\'quvchilar tezroq o\'sadi. Bu hafta qilganlaringizni belgilang.</p>' +
        strat.map((g, gi) => '<div class="card"><h3>' + esc(g.group) + "</h3>" + g.items.map((it, ii) => {
          const key = gi + "-" + ii;
          return '<label class="check"><input type="checkbox" data-strat="' + key + '"' + (mine[key] ? " checked" : "") + "><span>" + esc(it) + "</span></label>";
        }).join("") + "</div>").join("") : "") +
      '<div class="btns"><a class="btn ghost" href="#/research">🔬 Ilmiy manbalar</a></div>');
    app.querySelectorAll("[data-strat]").forEach((cb) => (cb.onchange = () => {
      S.strat[wk] = S.strat[wk] || {};
      if (cb.checked) { S.strat[wk][cb.dataset.strat] = 1; addXP(2); } else delete S.strat[wk][cb.dataset.strat];
      const ks = Object.keys(S.strat).sort(); if (ks.length > 12) delete S.strat[ks[0]];
      save();
    }));
  }
  function viewMistakes() {
    const m = (S.mist || []).filter((q) => (q.o && q.o.length) || (q.w && q.w.length));
    if (!m.length) { location.hash = "#/progress"; return; }
    runQuiz({ title: "Xatolar daftari", qs: m.slice(-15), back: "#/progress", backText: "← Natijalarim",
      onFinish: () => ({ note: "<p>Qolgan xatolar: " + (S.mist || []).length + ".</p>", next: '<a class="btn" href="#/progress">Natijalarim</a>' }) });
  }

  // ---------- Ilmiy manbalar ----------
  function viewResearch() {
    const R = window.RESEARCH;
    if (!R) return viewBooks();
    html('<a class="back" href="#/books">← Manbalar</a><h1>🔬 Ilmiy manbalar</h1>' +
      '<p class="muted">' + esc(R.intro || "") + "</p>" +
      "<h2>Scopus jurnallari (ELT)</h2>" +
      '<div class="list">' + (R.journals || []).map((j) => '<a class="card link" href="' + esc(j.url) + '" target="_blank" rel="noopener"><h3>' + esc(j.name) + ' ↗</h3><div class="muted">' + esc(j.publisher || "") + (j.quartile ? " · " + esc(j.quartile) : "") + "</div><div>" + esc(j.focus || "") + "</div></a>").join("") + "</div>" +
      "<h2>Tadqiqot yo'nalishlari va ilovada qo'llanishi</h2>" +
      (R.trends || []).map((t) => '<div class="card"><h3>' + esc(t.title) + ' <span class="badge">' + esc(t.en || "") + "</span></h3><p>" + esc(t.what || "") + '</p><p class="muted">👉 ' + esc(t.how || "") + "</p>" +
        (t.tryIt ? '<a class="btn small ghost" href="' + esc(t.tryIt) + '">Sinab ko\'rish →</a>' : "") + "</div>").join("") +
      "<h2>O'rganish strategiyalari (LLS)</h2>" +
      (R.strategies || []).map((g) => '<div class="card"><h3>' + esc(g.group) + '</h3><ul class="rules">' + g.items.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>").join("") +
      "<h2>Scopus maqolasi tuzilishi (IMRAD)</h2>" +
      (R.imrad || []).map((p) => '<details class="card"><summary>' + esc(p.part) + '</summary><p style="margin-top:8px">' + esc(p.uz || "") + "</p>" +
        (p.phrases || []).map((x) => '<div class="example"><div class="grow en">' + esc(x) + '</div><button class="icon-btn" data-speak="' + esc(x) + '" aria-label="Tinglash">🔊</button></div>').join("") + "</details>").join("") +
      ((R.tips || []).length ? "<h2>Maslahatlar</h2>" + '<div class="card"><ul class="rules">' + R.tips.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" : ""));
  }

  function viewBooks() {
    html(
      "<h1>📚 Kitoblaringiz va manbalar</h1>" +
      '<a class="card link" href="#/research"><div class="row"><div style="font-size:1.6rem">🔬</div><div class="grow"><h3>Ilmiy manbalar</h3><div class="muted">Scopus ELT jurnallari, tadqiqot yo\'nalishlari, o\'rganish strategiyalari va IMRAD maqola tuzilishi</div></div></div></a>' +
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

  // ---------- Writing (IELTS) ----------
  const W = () => window.WRITING || {};
  function wItem(key) {
    const [kind, id] = [key.slice(0, 2), key.slice(3)];
    if (kind === "t2") return (W().task2 || []).find((x) => x.id === id);
    if (kind === "t1") return (W().task1 || []).find((x) => x.id === id);
    return null;
  }
  function paras(text) { return esc(text).split(/\n\s*\n/).map((p) => "<p>" + p + "</p>").join(""); }

  function viewWriting() {
    const w = W();
    const essays = S.essays || [];
    html(
      "<h1>✍️ IELTS Writing</h1>" +
      '<p class="muted">Band 7 uchun: savol turini taniy olish, aniq reja, har paragrafda bitta fikr + izoh + misol, akademik so\'zlar va xatosiz murakkab gaplar. Har kuni bitta Task 2 yoki Task 1 yozing.</p>' +
      '<a class="card link" href="#/write/free"><h3>✍️ Yozish mashqi</h3><div class="muted">Taymer, so\'z hisobi, avtomatik tekshiruv va band 7 checklist. Qoralama saqlanib qoladi.</div></a>' +
      "<h2>Task 2: esse turlari</h2><div class=\"list\">" +
      (w.task2 || []).map((t, i) => '<a class="card link" href="#/writing/t2-' + t.id + '"><div class="row"><div class="num">' + (i + 1) + '</div><div class="grow"><h3>' + esc(t.title) + '</h3><div class="muted">' + esc(t.type) + "</div></div></div></a>").join("") + "</div>" +
      "<h2>Task 1 (Academic)</h2><div class=\"list\">" +
      (w.task1 || []).map((t, i) => '<a class="card link" href="#/writing/t1-' + t.id + '"><div class="row"><div class="num">' + (i + 1) + '</div><div class="grow"><h3>' + esc(t.title) + '</h3><div class="muted">' + esc(t.type) + "</div></div></div></a>").join("") + "</div>" +
      "<h2>Tayyorgarlik</h2><div class=\"list\">" +
      '<a class="card link" href="#/writing/topics"><h3>💡 G\'oyalar banki</h3><div class="muted">' + (w.topics || []).length + " mavzu: tarafdor/qarshi fikrlar, yechimlar, mavzu so'zlari</div></a>" +
      '<a class="card link" href="#/writing/phrases"><h3>🔗 Esse iboralari</h3><div class="muted">Fikr bildirish, qarama-qarshilik, sabab-oqibat, xulosa...</div></a>' +
      '<a class="card link" href="#/writing/criteria"><h3>📏 Baholash mezonlari</h3><div class="muted">Band 6 va band 7 farqi, 4 mezon</div></a>' +
      "</div>" +
      (essays.length ? "<h2>Mening yozganlarim</h2>" + essays.slice().reverse().slice(0, 10).map((e, i) =>
        '<details class="card"><summary>' + esc(e.date) + " · " + esc(e.title) + " · " + e.words + " so'z</summary><div style=\"margin-top:8px\">" + paras(e.text) + "</div></details>").join("") : "")
    );
  }

  function viewWritingItem(key) {
    const t = wItem(key);
    if (!t) return viewWriting();
    const isT1 = key.startsWith("t1");
    html(
      '<a class="back" href="#/writing">← Writing</a>' +
      "<h1>" + esc(t.title) + '</h1><p class="muted">' + esc(t.type) + "</p>" +
      (t.recognise ? '<div class="card"><h3>Qanday taniladi</h3><p>' + esc(t.recognise) + "</p></div>" : "") +
      (t.overview ? '<div class="card"><h3>Overview (umumiy xulosa)</h3><p>' + esc(t.overview) + "</p></div>" : "") +
      '<div class="card"><h3>Reja</h3><div class="table-wrap"><table><tbody>' + t.plan.map((r) => "<tr><td><b>" + esc(r[0]) + "</b></td><td>" + esc(r[1]) + "</td></tr>").join("") + "</tbody></table></div></div>" +
      (t.tips ? '<div class="card"><h3>Band 7 maslahatlari</h3><ul class="rules">' + t.tips.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>" : "") +
      (t.language ? '<div class="card"><h3>Kerakli iboralar</h3>' + t.language.map((p) => '<div class="example"><div class="grow"><div class="en">' + esc(p[0]) + '</div><div class="uz">' + esc(p[1]) + '</div></div><button class="icon-btn" data-speak="' + esc(p[0]) + '">🔊</button></div>').join("") + "</div>" : "") +
      '<div class="card"><h3>Savol</h3><p><b>' + esc(t.question) + "</b></p>" +
      (t.data ? '<div class="table-wrap"><table><thead><tr>' + t.data.head.map((h) => "<th>" + esc(h) + "</th>").join("") + "</tr></thead><tbody>" + t.data.rows.map((r) => "<tr>" + r.map((c) => "<td>" + esc(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>" : "") +
      '<div class="btns"><a class="btn" href="#/write/' + key + '">✍️ Shu savolga yozish (' + (isT1 ? "20" : "40") + " daqiqa)</a></div></div>" +
      '<details class="card"><summary>Band 7.5+ namuna (avval o\'zingiz yozing)</summary><div style="margin-top:10px">' + paras(t.model) + "</div>" +
      '<p class="muted">' + words(t.model).length + " so'z</p>" +
      (t.notes ? '<h3>Nega bu band 7+?</h3><ul class="rules">' + t.notes.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul>" : "") + "</details>"
    );
  }

  function viewTopics(id) {
    const list = W().topics || [];
    const t = list.find((x) => x.id === id);
    if (!t) {
      html('<a class="back" href="#/writing">← Writing</a><h1>💡 G\'oyalar banki</h1><p class="muted">Imtihonda eng ko\'p qiyinchilik “nima yozishni bilmaslik”. Har mavzu uchun tayyor fikrlar va so\'zlarni o\'qing, keyin o\'z so\'zlaringiz bilan ishlating.</p><div class="list">' +
        list.map((x) => '<a class="card link" href="#/writing/topic-' + x.id + '"><h3>' + esc(x.title) + '</h3><div class="muted">' + esc(x.en) + " · " + x.points.length + " fikr · " + x.vocab.length + " so'z</div></a>").join("") + "</div>");
      return;
    }
    const side = { for: "✅ Tarafdor / afzallik", against: "⚠️ Qarshi / kamchilik", solution: "🛠 Yechim" };
    html('<a class="back" href="#/writing/topics">← Mavzular</a><h1>' + esc(t.title) + '</h1><p class="muted">' + esc(t.en) + "</p>" +
      "<h2>Namuna savollar</h2>" + t.questions.map((q, k) => {
        return '<div class="card"><p>' + esc(q) + '</p><a class="btn ghost small" href="#/write/q-' + t.id + "-" + k + '">✍️ Yozish</a></div>';
      }).join("") +
      Object.keys(side).map((sd) => {
        const pts = t.points.filter((p) => p.side === sd);
        return pts.length ? "<h2>" + side[sd] + "</h2>" + pts.map((p) => '<div class="card"><div class="row"><div class="grow"><div>' + esc(p.en) + '</div><div class="muted">' + esc(p.uz) + '</div></div><button class="icon-btn" data-speak="' + esc(p.en) + '">🔊</button></div></div>').join("") : "";
      }).join("") +
      "<h2>Mavzu so'zlari</h2><div class=\"card\">" + t.vocab.map((v) => '<div class="example"><div class="grow"><div class="en">' + esc(v[0]) + '</div><div class="uz">' + esc(v[1]) + '</div></div><button class="icon-btn" data-speak="' + esc(v[0]) + '">🔊</button></div>').join("") + "</div>");
  }

  function viewPhrases() {
    html('<a class="back" href="#/writing">← Writing</a><h1>🔗 Esse iboralari</h1><p class="muted">Bir xil iborani takrorlamang: har guruhdan 2–3 tasini o\'zlashtiring va mazmunga mos ishlating. Yodlangan “shablon” gaplar band 7 ga xalaqit beradi.</p>' +
      (W().phrases || []).map((g) => '<details class="card"><summary>' + esc(g.group) + " (" + g.items.length + ")</summary>" +
        g.items.map((p) => '<div class="example"><div class="grow"><div class="en">' + esc(p[0]) + '</div><div class="uz">' + esc(p[1]) + '</div></div><button class="icon-btn" data-speak="' + esc(p[0]) + '">🔊</button></div>').join("") + "</details>").join(""));
  }

  function viewCriteria() {
    html('<a class="back" href="#/writing">← Writing</a><h1>📏 Writing baholash mezonlari</h1><p class="muted">Har bir mezon balning 25%. Task 2 bali Task 1 dan ikki baravar og\'ir.</p>' +
      (W().criteria || []).map((c) => '<div class="card"><h3>' + esc(c.uz) + ' <span class="badge">' + esc(c.name) + "</span></h3>" +
        "<p><b>Band 6:</b> " + esc(c.band6) + "</p><p><b>Band 7:</b> " + esc(c.band7) + '</p><ul class="rules">' + c.tips.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ul></div>").join(""));
  }

  const CHECKLIST = {
    t2: ["Savolning hamma qismiga javob berdim", "Pozitsiyam kirish va xulosada aniq va bir xil", "Har bir body paragrafda bitta asosiy fikr + izoh + misol", "Paragraflar mantiqan bog'langan, bog'lovchilar xilma-xil", "Mavzuga oid aniq so'zlar ishlatdim, takrorlamadim", "Murakkab gaplar bor (although, which, if...) va ular xatosiz", "Imlo va artikllarni (a/an/the) tekshirdim", "250+ so'z, 40 daqiqada"],
    t1: ["Savolni o'z so'zlarim bilan qayta yozdim", "Overview bor: eng muhim 2 ta tendensiya/farq", "Muhim raqamlarni to'g'ri keltirdim", "Ma'lumotlarni solishtirdim (compared to, while...)", "Shaxsiy fikr yozmadim", "Zamonlar to'g'ri (o'tgan yil → Past Simple)", "150+ so'z, 20 daqiqada"]
  };

  function viewWrite(key) {
    const isQ = key.startsWith("q-");
    let title, question, kind;
    if (key === "free") { kind = "t2"; title = "Erkin mashq"; question = ""; }
    else if (isQ) {
      const [, tid, k] = key.match(/^q-(.+)-(\d+)$/) || [];
      const tp = (W().topics || []).find((x) => x.id === tid);
      if (!tp) return viewWriting();
      kind = "t2"; title = tp.title; question = tp.questions[Number(k)];
    } else {
      const t = wItem(key);
      if (!t) return viewWriting();
      kind = key.slice(0, 2); title = t.title; question = t.question;
    }
    const minWords = kind === "t1" ? 150 : 250;
    const minutes = kind === "t1" ? 20 : 40;
    const draft = S.drafts[key] || "";
    const checks = S.checks[key] || {};
    html(
      '<a class="back" href="' + (key === "free" || isQ ? "#/writing" : "#/writing/" + key) + '">← Orqaga</a>' +
      "<h1>✍️ " + esc(title) + "</h1>" +
      (question ? '<div class="card"><b>' + esc(question) + '</b><div class="muted">Kamida ' + minWords + " so'z · " + minutes + " daqiqa</div></div>" :
        '<div class="card"><label class="muted" for="fq">Savolni kiriting (Cambridge IELTS 19 yoki IELTS Liz kitobidan)</label><textarea id="fq" class="notes" rows="2"></textarea>' +
        '<div class="btns"><label class="muted"><input type="radio" name="kind" value="t2" checked> Task 2</label><label class="muted"><input type="radio" name="kind" value="t1"> Task 1</label></div></div>') +
      '<div class="card wbar"><span class="timer" id="wt">' + minutes + ':00</span><button class="btn small ghost" id="wstart">▶️ Taymer</button><span class="grow"></span><b id="wc">0</b>&nbsp;so\'z</div>' +
      '<textarea id="essay" class="essay" rows="16" spellcheck="false" placeholder="Shu yerga yozing. Paragraflar orasida bo\'sh qator qoldiring.">' + esc(draft) + "</textarea>" +
      '<div class="btns"><button class="btn" id="check">🔍 Tekshirish</button><button class="btn ghost" id="savee">💾 Saqlash</button></div>' +
      '<div id="report"></div>' +
      '<h2>Band 7 checklist</h2><div class="card" id="cl">' + CHECKLIST[kind].map((c, i) =>
        '<label class="check"><input type="checkbox" data-i="' + i + '"' + (checks[i] ? " checked" : "") + "> " + esc(c) + "</label>").join("") + "</div>"
    );
    const ta = document.getElementById("essay"), wc = document.getElementById("wc");
    const fq = document.getElementById("fq");
    if (fq) { fq.value = S.drafts[key + ":q"] || ""; fq.oninput = () => { S.drafts[key + ":q"] = fq.value; save(); }; }
    const curKind = () => { const r = app.querySelector('input[name="kind"]:checked'); return r ? r.value : kind; };
    const count = () => { const n = words(ta.value).length; wc.textContent = n; wc.style.color = n >= (curKind() === "t1" ? 150 : 250) ? "var(--ok)" : ""; };
    count();
    let tmr = null, saveT = null;
    ta.oninput = () => { count(); clearTimeout(saveT); saveT = setTimeout(() => { S.drafts[key] = ta.value; save(); }, 600); };
    document.getElementById("wstart").onclick = (e) => {
      if (tmr) { clearInterval(tmr); tmr = null; e.target.textContent = "▶️ Davom"; return; }
      let left = (S.drafts[key + ":left"]) || minutes * 60;
      e.target.textContent = "⏸ Pauza";
      tmr = setInterval(() => {
        if (!document.body.contains(ta)) { clearInterval(tmr); return; }
        left--; S.drafts[key + ":left"] = left;
        const el = document.getElementById("wt");
        el.textContent = (left < 0 ? "-" : "") + fmt(Math.abs(left));
        if (left === 0) toast("Vaqt tugadi! Imtihonda shu yerda to'xtaysiz.");
      }, 1000);
    };
    app.querySelectorAll("#cl input").forEach((c) => (c.onchange = () => { S.checks[key] = S.checks[key] || {}; S.checks[key][c.dataset.i] = c.checked; save(); }));
    document.getElementById("savee").onclick = () => {
      const n = words(ta.value).length;
      if (n < 20) { toast("Saqlash uchun matn juda qisqa."); return; }
      S.essays = (S.essays || []).concat([{ key, title: question ? question.slice(0, 60) : (fq && fq.value.slice(0, 60)) || title, date: today(), words: n, text: ta.value }]).slice(-30);
      S.drafts[key] = ""; delete S.drafts[key + ":left"]; save(); markActive(); addXP(n >= 150 ? 25 : 10);
      toast("Saqlandi: Writing → Mening yozganlarim");
    };
    document.getElementById("check").onclick = () => {
      const text = ta.value, k = curKind();
      const n = words(text).length;
      const ps = text.split(/\n\s*\n/).filter((p) => words(p).length > 3);
      const sents = text.split(/[.!?]+\s/).filter((x) => words(x).length > 2);
      const avg = sents.length ? Math.round(n / sents.length) : 0;
      const links = linkersIn(text);
      const rep = repeatedWords(text, k === "t1" ? 5 : 4);
      const contr = (text.match(/\b\w+'(t|re|ll|ve|d|m)\b/gi) || []);
      const informal = (norm(text).match(/\b(a lot of|lots of|stuff|things|kids|gonna|wanna|okay|ok|really|very very|nowadays people|get|got)\b/g) || []);
      const longS = sents.filter((x) => words(x).length > 40).length;
      const lower = norm(text);
      const rows = [];
      const add = (ok, msg) => rows.push('<li class="' + (ok ? "w-ok" : "w-miss") + '">' + (ok ? "✓ " : "✗ ") + msg + "</li>");
      add(n >= (k === "t1" ? 150 : 250), "So'zlar: " + n + " (kerak: " + (k === "t1" ? 150 : 250) + "+)");
      add(ps.length >= (k === "t1" ? 3 : 4), "Paragraflar: " + ps.length + (k === "t1" ? " (kirish, overview, 1–2 body)" : " (kirish, 2–3 body, xulosa)"));
      add(avg >= 12 && avg <= 28, "O'rtacha gap uzunligi: " + avg + " so'z (12–28 yaxshi)");
      add(links.length >= 5, "Bog'lovchilar (" + links.length + " xil): " + (links.length ? esc(links.join(", ")) : "yo'q") + ". Band 7 uchun 5+ xil, lekin har gapda emas");
      add(!rep.length, rep.length ? "Ko'p takrorlangan so'zlar: " + rep.map(([x, c]) => esc(x) + " ×" + c).join(", ") + ". Sinonim yoki olmosh ishlating" : "Keraksiz takrorlash yo'q");
      add(!contr.length, contr.length ? "Qisqartmalar (akademik emas): " + esc(contr.slice(0, 5).join(", ")) + ". To'liq yozing: do not, it is" : "Qisqartmalar yo'q");
      add(informal.length <= 1, informal.length ? "Norasmiy so'zlar: " + esc([...new Set(informal)].join(", ")) + ". Masalan: a lot of → a significant number of, kids → children" : "Uslub rasmiy");
      add(!longS, longS ? longS + " ta juda uzun gap (40+ so'z). Ikkiga bo'ling" : "Gaplar haddan tashqari uzun emas");
      if (k === "t1") {
        add(/\b(overall|in general|it is clear that|it is evident)\b/.test(lower), "Overview (Overall, ...) " + (/\b(overall|in general|it is clear|it is evident)\b/.test(lower) ? "bor" : "topilmadi: band 7 uchun shart"));
        add(!/\b(i think|i believe|in my opinion|i feel)\b/.test(lower), "Task 1 da shaxsiy fikr bo'lmasligi kerak");
      } else {
        add(/\b(i believe|in my (view|opinion)|i (strongly )?(agree|disagree)|i would argue|from my perspective|i am convinced)\b/.test(lower), "Pozitsiya (fikringiz) aniq yozilgan");
        add(/\b(in conclusion|to conclude|to sum up|overall|on balance|all things considered)\b/.test(lower), "Xulosa paragrafi bor");
        add(/\b(for example|for instance|such as|a case in point|to illustrate)\b/.test(lower), "Misollar bor");
      }
      const ok = rows.filter((r) => r.includes("w-ok")).length;
      document.getElementById("report").innerHTML = '<div class="card"><h3>Avtomatik tekshiruv: ' + ok + "/" + rows.length + '</h3><ul class="rules plain">' + rows.join("") + '</ul><p class="muted">Bu tekshiruv faqat shakl va uslubni ko\'radi. Mazmun, grammatika va bandni aniq baholash uchun eseni men (Claude) ga yuboring.</p></div>';
      markActive();
    };
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
      const TAB = { quiz: "grammar", write: "writing", review: "vocab", idiom: "vocab", idiomcards: "vocab", idiomquiz: "vocab", colloc: "vocab", cquiz: "vocab", research: "books", irregular: "grammar", progress: "home", mistakes: "home" };
      a.classList.toggle("active", tab === (TAB[sec] || sec || "home"));
    });
    const isLv = LEVELS.includes(id);
    if (sec === "grammar") id && !isLv ? viewLesson(id) : viewGrammarList(id);
    else if (sec === "quiz") viewQuiz(id);
    else if (sec === "test") viewTest();
    else if (sec === "writing") {
      if (!id) viewWriting();
      else if (id === "topics") viewTopics();
      else if (id.startsWith("topic-")) viewTopics(id.slice(6));
      else if (id === "phrases") viewPhrases();
      else if (id === "criteria") viewCriteria();
      else viewWritingItem(id);
    }
    else if (sec === "write") viewWrite(id || "free");
    else if (sec === "speaking" && id === "guide") viewGuide(parts[2]);
    else if (sec === "speaking") id && !isLv ? viewTopic(id) : viewSpeakingList(id);
    else if (sec === "vocab" && id === "idioms") viewIdiomList();
    else if (sec === "vocab" && id === "colloc") viewCollocList();
    else if (sec === "vocab") id && !isLv ? viewCards(id) : viewVocabList(id);
    else if (sec === "review") viewReview();
    else if (sec === "idiom") viewIdiomGroup(id);
    else if (sec === "idiomcards") viewIdiomCards(id);
    else if (sec === "idiomquiz") viewIdiomQuiz(id);
    else if (sec === "colloc") viewColloc(id);
    else if (sec === "cquiz") viewCollocQuiz(id);
    else if (sec === "progress") viewProgress();
    else if (sec === "mistakes") viewMistakes();
    else if (sec === "research") viewResearch();
    else if (sec === "irregular") id === "quiz" ? viewIrregularQuiz() : viewIrregular();
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
