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
  function speak(text, rate) {
    if (!synth) { alert("Bu brauzerda ovozli o'qish ishlamaydi. Chrome brauzerini sinab ko'ring."); return; }
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
    u.rate = rate || S.rate || 0.9;
    synth.speak(u);
  }

  // ---------- Ovoz: tinglash (Speech Recognition) ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function listen({ onText, onEnd, continuous }) {
    const r = new SR();
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
        alert("Mikrofonga ruxsat berilmadi. Brauzer sozlamalarida bu sayt uchun mikrofonni yoqing.");
      }
    };
    r.onend = () => onEnd(finalText.trim());
    r.start();
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

  // ---------- Sahifalar ----------
  function nextLesson() {
    return GRAMMAR.find((l) => !(S.quiz[l.id] >= 70)) || GRAMMAR[GRAMMAR.length - 1];
  }
  function grammarDone() { return GRAMMAR.filter((l) => S.quiz[l.id] >= 70).length; }
  function knownWords() { return Object.values(S.words).filter((v) => v >= 2).length; }
  function totalWords() { return VOCAB.reduce((n, t) => n + t.words.length, 0); }

  function viewHome() {
    const nl = nextLesson();
    const done = grammarDone();
    const topic = SPEAKING.find((t) => !S.topics[t.id]) || SPEAKING[Math.floor(Math.random() * SPEAKING.length)];
    const vt = VOCAB.find((t) => t.words.some((w) => !(S.words[w[0]] >= 2))) || VOCAB[0];
    html(
      "<h1>Salom! 👋</h1>" +
      '<p class="muted">Darajangiz: <b>Beginner (A1–A2)</b>. Har kuni 3 ta qisqa vazifani bajaring: grammatika, speaking va 12 ta so\'z. Kuniga 30–45 daqiqa yetarli.</p>' +
      '<div class="card stats">' +
        '<div class="stat"><b>' + done + "/" + GRAMMAR.length + '</b><span class="muted">dars</span></div>' +
        '<div class="stat"><b>' + S.said + '</b><span class="muted">aytilgan gap</span></div>' +
        '<div class="stat"><b>' + knownWords() + "/" + totalWords() + '</b><span class="muted">so\'z</span></div>' +
      "</div>" +
      '<div class="progress" aria-label="Grammatika jarayoni"><div style="width:' + pct(done, GRAMMAR.length) + '%"></div></div>' +
      "<h2>Bugungi reja</h2>" +
      '<a class="card link" href="#/grammar/' + nl.id + '"><div class="row"><div class="num">1</div><div class="grow"><h3>📘 ' + esc(nl.title) + '</h3><div class="muted">Darsni o\'qing, misollarni tinglang, testdan 70%+ oling. Kitob: Murphy ' + esc(nl.murphy) + "</div></div></div></a>" +
      '<a class="card link" href="#/speaking/' + topic.id + '"><div class="row"><div class="num">2</div><div class="grow"><h3>🎤 ' + esc(topic.title) + '</h3><div class="muted">Savollarni tinglab, har biriga 20–30 soniya javob bering.</div></div></div></a>' +
      '<a class="card link" href="#/vocab/' + vt.id + '"><div class="row"><div class="num">3</div><div class="grow"><h3>🗂️ ' + esc(vt.title) + '</h3><div class="muted">Kartochkalar: so\'zni tinglang, ma\'nosini eslang, ovoz chiqarib ayting.</div></div></div></a>' +
      "<h2>Qanday o'qish kerak</h2>" +
      '<div class="card"><ul class="rules">' +
        "<li>Grammatika darsini ilovada o'qing, keyin <b>Essential Grammar in Use</b> dagi o'sha unit mashqlarini daftarga ishlang.</li>" +
        "<li>Har bir misolni 🔊 tinglang va 🎤 bilan kamida 2 marta qaytaring. Ovoz chiqarib gapirish speakingni eng tez oshiradi.</li>" +
        "<li>Speaking javobingizni telefonga yozib, namuna javob bilan solishtiring.</li>" +
        "<li>Barcha 20 dars tugagach, <b>New Inside Out Pre-Intermediate</b> va <b>Basic IELTS</b> kitoblariga o'ting.</li>" +
      "</ul></div>" +
      settingsCard()
    );
    bindSettings();
  }

  function settingsCard() {
    const opts = voices.map((v) => '<option value="' + esc(v.name) + '"' + (pickVoice() === v ? " selected" : "") + ">" + esc(v.name + " (" + v.lang + ")") + "</option>").join("");
    return '<h2>Sozlamalar</h2><div class="card settings">' +
      (opts ? '<label>Ovoz <select id="voice">' + opts + "</select></label>" : '<p class="muted">Inglizcha ovoz topilmadi. Telefon sozlamalarida “Text-to-speech” uchun ingliz tilini o\'rnating.</p>') +
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
    document.getElementById("reset").onclick = () => {
      if (confirm("Barcha natijalar o'chirilsinmi?")) { S = blank(); save(); renderStreak(); viewHome(); }
    };
  }

  function viewGrammarList() {
    html(
      "<h1>📘 Grammatika</h1>" +
      '<p class="muted">Darslar <b>Essential Grammar in Use</b> (Murphy) tartibida. Testdan 70% va undan ko\'p olsangiz, dars o\'tilgan hisoblanadi.</p>' +
      '<div class="list">' +
      GRAMMAR.map((l, i) => {
        const sc = S.quiz[l.id];
        const ok = sc >= 70;
        return '<a class="card link" href="#/grammar/' + l.id + '"><div class="row">' +
          '<div class="num' + (ok ? " done" : "") + '">' + (ok ? "✓" : i + 1) + "</div>" +
          '<div class="grow"><h3>' + esc(l.title) + '</h3><div class="muted">Murphy ' + esc(l.murphy) + "</div></div>" +
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
      '<a class="back" href="#/grammar">← Darslar</a>' +
      "<h1>" + (idx + 1) + ". " + esc(l.title) + "</h1>" +
      '<p class="muted">📖 Essential Grammar in Use: ' + esc(l.murphy) + " · Qo'shimcha: " + esc(l.book) + "</p>" +
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

  function viewSpeakingList() {
    bindDrills(PHRASES.map((p) => p.en), "p-");
    html(
      "<h1>🎤 Speaking</h1>" +
      (SR ? "" : noMic) +
      '<p class="muted">Har bir mavzuda savolni tinglang, keyin javob bering. Javobingiz matnga aylanadi va so\'zlar soni ko\'rsatiladi. Maqsad: har bir javobda <b>2–3 gap</b>, “because” va “for example” bilan.</p>' +
      '<div class="list">' +
      SPEAKING.map((t, i) =>
        '<a class="card link" href="#/speaking/' + t.id + '"><div class="row"><div class="num' + (S.topics[t.id] ? " done" : "") + '">' + (S.topics[t.id] ? "✓" : i + 1) + '</div><div class="grow"><h3>' + esc(t.title) + '</h3><div class="muted">' + t.questions.length + " savol</div></div>" +
        '<span class="badge">' + t.level + "</span></div></a>").join("") +
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
      '<a class="back" href="#/speaking">← Mavzular</a>' +
      "<h1>" + esc(t.title) + "</h1>" +
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
    document.getElementById("done").onclick = () => { S.topics[id] = true; save(); markActive(); location.hash = "#/speaking"; };

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
          if (w.length < 15) tips.push("Javob qisqa. Sabab qo'shing: <b>because ...</b>");
          if (!/\b(because|so|but|and)\b/.test(norm(txt))) tips.push("Bog'lovchi ishlating: <b>and, but, because, so</b>.");
          if (!/\bfor example\b/.test(norm(txt)) && w.length >= 15) tips.push("Misol keltiring: <b>For example, ...</b>");
          out.innerHTML = "“" + esc(txt) + "”<div class=\"muted\" style=\"margin-top:6px\">" + w.length + " so'z, " + sec + " soniya. " +
            (tips.length ? tips.join(" ") : "Yaxshi javob! 👍") + "</div>";
        }
      });
    }));
  }

  function viewVocabList() {
    html(
      "<h1>🗂️ Lug'at</h1>" +
      '<p class="muted">Har bir mavzuda 12 ta kerakli so\'z. Kartochkani bosib ma\'nosini ko\'ring, keyin “Bilaman” yoki “Takrorlash” ni tanlang. 2 marta “Bilaman” desangiz, so\'z o\'zlashtirilgan hisoblanadi.</p>' +
      '<div class="list">' +
      VOCAB.map((t) => {
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
        html('<a class="back" href="#/vocab">← Mavzular</a><h1>✅ Tugadi</h1><div class="card"><p>O\'zlashtirilgan: <b>' +
          t.words.filter((w) => S.words[w[0]] >= 2).length + "/" + t.words.length + '</b></p></div><div class="btns"><a class="btn ghost" href="#/vocab/' + id + '" id="again">🔁 Yana</a><a class="btn" href="#/vocab">Boshqa mavzu</a></div>');
        document.getElementById("again").onclick = (e) => { e.preventDefault(); viewCards(id); };
        return;
      }
      const w = deck[i];
      flipped = false;
      drillTexts["v-" + id] = w[0].split(" – ")[0];
      html(
        '<a class="back" href="#/vocab">← Mavzular</a>' +
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
      "<h2>Beginner uchun 8 haftalik yo'l</h2>" +
      '<div class="card"><ul class="rules">' +
        "<li><b>1–2 hafta:</b> 1–6-darslar (be, present, have, was/were). Speaking: O'zim haqimda, Oila, Uy.</li>" +
        "<li><b>3–4 hafta:</b> 7–11-darslar (past, present perfect, future, can). Speaking: Kun tartibi, Hobbilar, Ovqat.</li>" +
        "<li><b>5–6 hafta:</b> 12–17-darslar (must, there is, articles, some/any, pronouns, comparatives). Speaking: Ob-havo, Xarid, O'qish.</li>" +
        "<li><b>7–8 hafta:</b> 18–20-darslar va hamma testlarni qayta ishlash (90%+). Speaking: Sayohat, Dam olish kuni, Odamni tasvirlash.</li>" +
        "<li>Shundan keyin: IELTS rejangizdagi <b>B bosqich</b> (Basic IELTS + Pre-Intermediate Workbook).</li>" +
      "</ul></div>"
    );
  }

  // ---------- Marshrutlash ----------
  function route() {
    if (synth) synth.cancel();
    if (activeRec) { try { activeRec.stop(); } catch (e) { /* allaqachon to'xtagan */ } activeRec = null; }
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    const [sec, id] = parts;
    document.querySelectorAll(".tabbar a").forEach((a) => {
      const tab = a.dataset.tab;
      a.classList.toggle("active", tab === (sec === "quiz" ? "grammar" : sec || "home"));
    });
    if (sec === "grammar") id ? viewLesson(id) : viewGrammarList();
    else if (sec === "quiz") viewQuiz(id);
    else if (sec === "speaking") id ? viewTopic(id) : viewSpeakingList();
    else if (sec === "vocab") id ? viewCards(id) : viewVocabList();
    else if (sec === "books") viewBooks();
    else viewHome();
  }
  window.addEventListener("hashchange", route);
  renderStreak();
  route();
  // Ovozlar kechroq yuklansa, sozlamalarni yangilash
  if (synth) synth.addEventListener && synth.addEventListener("voiceschanged", () => { if (!location.hash || location.hash === "#/") viewHome(); });
})();
