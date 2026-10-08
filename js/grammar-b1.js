// B1 (Intermediate) grammatika darslari. Tartib English Grammar in Use (Murphy, intermediate) unitlariga mos.
// Matnlar original: kitoblardan ko'chirilmagan, faqat mavzular tartibi olingan.
// Savol turlari: {q, o:[variantlar], a:to'g'ri indeks, e:izoh} yoki {q, w:[to'g'ri javoblar], e:izoh} (yozma javob).

window.GRAMMAR.push(...[
  {
    id: "b1-present-perfect-continuous",
    level: "B1",
    murphy: "English Grammar in Use, Unit 9–10",
    book: "New Inside Out Pre-Intermediate Workbook, Basic IELTS Speaking",
    title: "Present Perfect Continuous (I have been doing)",
    intro: "O'tmishda boshlanib, hozirgacha davom etayotgan (yoki hozirgina tugagan) <b>jarayon</b> uchun: <b>have/has been + fe'l-ing</b>. O'zbekchadagi “...dan beri ...yapman” ga yaqin: <i>I've been waiting for an hour</i> — “Bir soatdan beri kutyapman”.",
    table: [
      ["I / you / we / they", "have been", "working"],
      ["he / she / it", "has been", "studying"],
      ["Savol", "Have you been", "waiting long?"]
    ],
    tableHead: ["Kim", "have/has been", "fe'l + ing"],
    rules: [
      "Davomiylikni ko'rsatish uchun <b>for</b> (muddat: for two hours) va <b>since</b> (boshlanish nuqtasi: since 9 o'clock) ishlatiladi.",
      "<b>How long</b> savoli bilan juda ko'p keladi: <i>How long have you been learning English?</i>",
      "Hozir ko'rinib turgan natijani tushuntiradi: <i>Her eyes are red. She's been crying.</i>",
      "Holat fe'llari (know, like, want, believe, own) odatda continuous bo'lmaydi: <i>I've known him for years</i> (I've been knowing emas).",
      "Farq: <i>I've been reading a book</i> — jarayon (tugamagan bo'lishi mumkin); <i>I've read the book</i> — natija (tugagan)."
    ],
    examples: [
      ["I've been studying English for two years.", "Ikki yildan beri ingliz tilini o'rganyapman."],
      ["It has been raining since morning.", "Ertalabdan beri yomg'ir yog'yapti."],
      ["Why are you so tired? — I've been running.", "Nega bunchalik charchading? — Yugurgan edim (hozirgina yugurdim)."],
      ["How long have you been living in Tashkent?", "Toshkentda qancha vaqtdan beri yashayapsan?"]
    ],
    quiz: [
      { q: "She ___ for the bus for twenty minutes.", o: ["is waiting", "has been waiting", "waited"], a: 1, e: "20 daqiqadan beri davom etayapti → <b>has been waiting</b>." },
      { q: "How long ___ you been working here?", o: ["do", "are", "have"], a: 2, e: "Present perfect continuous savoli: <b>have</b> you been ..." },
      { q: "I've been learning French ___ 2023.", o: ["for", "since", "during"], a: 1, e: "Boshlanish nuqtasi (yil) → <b>since</b>." },
      { q: "We've been talking ___ three hours.", o: ["since", "for", "from"], a: 1, e: "Muddat → <b>for</b>." },
      { q: "I ___ him since we were children.", o: ["have known", "have been knowing", "am knowing"], a: 0, e: "know — holat fe'li, continuous bo'lmaydi → <b>have known</b>." },
      { q: "Your hands are dirty. What ___?", o: ["have you done", "have you been doing", "are you doing"], a: 1, e: "Hozirgi natijaga sabab bo'lgan jarayon → <b>have you been doing</b>." },
      { q: "To'ldiring: He has ___ (play) tennis all morning.", w: ["been playing"], e: "has + <b>been playing</b>." },
      { q: "Tarjima: “Men bir soatdan beri kutyapman.” (wait)", w: ["i have been waiting for an hour", "i've been waiting for an hour", "i have been waiting for one hour", "i've been waiting for one hour"], e: "<b>I've been waiting for an hour.</b>" },
      { q: "Qisqa shakl: she has been → ___ been", w: ["she's"], e: "she has = <b>she's</b>." }
    ],
    speak: ["I've been learning English for two years.", "How long have you been waiting?", "It's been raining since this morning.", "She's been working really hard lately."]
  },
  {
    id: "b1-perfect-vs-past",
    level: "B1",
    murphy: "English Grammar in Use, Unit 7–8, 11–14",
    book: "New Inside Out Pre-Intermediate Workbook, Basic IELTS Speaking",
    title: "Present Perfect vs Past Simple (for, since, ever, recently)",
    intro: "<b>Present perfect</b> (have done) o'tmishni hozirga bog'laydi — vaqt aytilmaydi yoki hali tugamagan. <b>Past simple</b> (did) esa tugagan, aniq vaqtdagi voqea uchun: <i>yesterday, in 2020, last week, two days ago</i>.",
    table: [
      ["Present perfect", "vaqt noaniq / hali tugamagan", "I've lost my keys. I've been here since May."],
      ["Past simple", "aniq, tugagan vaqt", "I lost my keys yesterday. I came here in May."],
      ["Savol so'zi", "When...? → doim past simple", "When did you arrive?"]
    ],
    tableHead: ["Zamon", "Qachon", "Misol"],
    rules: [
      "<b>ever / never</b> — hayot tajribasi: <i>Have you ever eaten plov in Samarkand?</i>",
      "<b>recently, lately, just, already, yet</b> — odatda present perfect bilan: <i>Have you seen any good films recently?</i>",
      "<b>yesterday, last..., ago, in 2019, when</b> — faqat past simple: <i>I saw him two days ago</i> (I have seen him two days ago — xato).",
      "<b>for</b> + muddat, <b>since</b> + boshlanish nuqtasi: <i>for ten years / since 2015</i>. Hali davom etsa — present perfect; tugagan bo'lsa — past simple: <i>I lived in Bukhara for ten years</i> (endi u yerda yashamayman).",
      "Suhbat ko'pincha present perfect bilan boshlanib, tafsilotlar past simple bilan davom etadi: <i>I've been to Istanbul. — When did you go?</i>",
      "<i>today, this week, this year</i> hali tugamagan bo'lsa — present perfect: <i>I've drunk three cups of tea today.</i>"
    ],
    examples: [
      ["Have you ever been to Khiva?", "Hech Xivada bo'lganmisiz?"],
      ["I went there last summer.", "Men u yerga o'tgan yozda borganman."],
      ["She has worked here since 2021.", "U 2021-yildan beri shu yerda ishlaydi."],
      ["My grandfather worked as a teacher for forty years.", "Bobom qirq yil o'qituvchi bo'lib ishlagan (endi ishlamaydi)."],
      ["I haven't seen him recently.", "Yaqinda uni ko'rmadim."]
    ],
    quiz: [
      { q: "I ___ my phone. I can't find it anywhere.", o: ["lost", "have lost", "was losing"], a: 1, e: "Natija hozir ham bor, vaqt aytilmagan → <b>have lost</b>." },
      { q: "We ___ to Bukhara last month.", o: ["have gone", "went", "have been going"], a: 1, e: "“last month” — aniq vaqt → <b>went</b>." },
      { q: "When ___ you start this job?", o: ["have", "did", "do"], a: 1, e: "When...? → past simple: <b>did</b>." },
      { q: "___ you ever tried skiing?", o: ["Did", "Have", "Are"], a: 1, e: "ever — tajriba → <b>Have</b>." },
      { q: "He has lived in London ___ ten years.", o: ["since", "for", "ago"], a: 1, e: "Muddat → <b>for</b>." },
      { q: "I saw that film three weeks ___.", o: ["ago", "before", "since"], a: 0, e: "Hozirdan orqaga hisoblash → <b>ago</b>." },
      { q: "To'ldiring: She ___ (not / call) me recently.", w: ["hasn't called", "has not called"], e: "recently → present perfect: <b>hasn't called</b>." },
      { q: "Tarjima: “Men uni kecha ko'rdim.” (see, him)", w: ["i saw him yesterday", "yesterday i saw him"], e: "yesterday → past simple: <b>I saw him yesterday.</b>" },
      { q: "To'ldiring: My parents have been married ___ 1998.", w: ["since"], e: "Boshlanish nuqtasi → <b>since</b>." }
    ],
    speak: ["Have you ever been to Khiva?", "I went there with my family last summer.", "I haven't seen him recently.", "She's worked here since twenty twenty-one."]
  },
  {
    id: "b1-past-perfect",
    level: "B1",
    murphy: "English Grammar in Use, Unit 15–16",
    book: "New Inside Out Pre-Intermediate Workbook, Smart Topics in English",
    title: "Past Perfect (I had done)",
    intro: "O'tmishdagi bir voqeadan <b>oldinroq</b> sodir bo'lgan voqea uchun: <b>had + fe'lning 3-shakli</b>. Ikki o'tmish voqeasidan qaysi biri avval bo'lganini aniq ko'rsatadi.",
    table: [
      ["Barcha shaxslar", "had", "finished / gone / seen"],
      ["Inkor", "hadn't (had not)", "eaten"],
      ["Savol", "Had you", "met him before?"]
    ],
    tableHead: ["Kim", "had", "3-shakl (V3)"],
    rules: [
      "Ikki o'tmish voqeasi: avvalgisi — past perfect, keyingisi — past simple: <i>When I arrived, the film had started.</i>",
      "Farqga e'tibor bering: <i>When I arrived, the film started</i> — men kelganimda boshlandi; <i>...had started</i> — men kelishimdan oldin boshlangan edi.",
      "Ko'pincha <b>already, just, never ... before, by the time</b> bilan keladi: <i>By the time we got there, everyone had left.</i>",
      "Qisqa shakl: <i>I'd, she'd, they'd</i> = I had... (I would bilan adashtirmang, kontekstdan bilinadi).",
      "Agar voqealar ketma-ket aytilsa, past simple yetarli: <i>I opened the door and went in.</i>"
    ],
    examples: [
      ["When we got to the station, the train had already left.", "Biz vokzalga yetib borganimizda, poyezd allaqachon jo'nab ketgan edi."],
      ["I had never seen the sea before that trip.", "O'sha safardan oldin men hech qachon dengizni ko'rmagan edim."],
      ["She was hungry because she hadn't eaten all day.", "U och edi, chunki kun bo'yi hech narsa yemagan edi."],
      ["Had you met Aziz before the party?", "Ziyofatdan oldin Aziz bilan tanishganmiding?"]
    ],
    quiz: [
      { q: "When I got home, my brother ___ to bed.", o: ["has gone", "had gone", "goes"], a: 1, e: "Men kelishimdan oldin → <b>had gone</b>." },
      { q: "I didn't recognise her. She ___ a lot.", o: ["had changed", "has changed", "changes"], a: 0, e: "Tanimaslikdan oldin o'zgargan → <b>had changed</b>." },
      { q: "By the time the police arrived, the thief ___.", o: ["escaped", "had escaped", "has escaped"], a: 1, e: "by the time + o'tmish → <b>had escaped</b>." },
      { q: "I ___ that book before, so I knew the ending.", o: ["had read", "have read", "was reading"], a: 0, e: "Bilishdan oldin o'qigan → <b>had read</b>." },
      { q: "They were tired because they ___ all night.", o: ["hadn't slept", "didn't sleep yet", "haven't slept"], a: 0, e: "Charchoqdan oldingi sabab → <b>hadn't slept</b>." },
      { q: "___ you finished the report when the boss called?", o: ["Have", "Did", "Had"], a: 2, e: "Past perfect savoli: <b>Had</b> you finished..." },
      { q: "To'ldiring: The shop ___ (close) when we got there.", w: ["had closed", "had already closed"], e: "Biz yetib borishimizdan oldin → <b>had closed</b>." },
      { q: "Tarjima: “U hech qachon samolyotda uchmagan edi.” (fly, she, before)", w: ["she had never flown before", "she'd never flown before", "she had never flown on a plane before", "she'd never flown on a plane before"], e: "<b>She had never flown before.</b> (fly – flew – flown)" }
    ],
    speak: ["When we arrived, the film had already started.", "I had never seen the sea before.", "She was tired because she hadn't slept.", "By the time I called, he'd left."]
  },
  {
    id: "b1-used-to-would",
    level: "B1",
    murphy: "English Grammar in Use, Unit 18",
    book: "Smart Topics in English, Basic IELTS Speaking",
    title: "used to / would (o'tmishdagi odatlar)",
    intro: "O'tmishda muntazam bo'lgan, lekin <b>endi bo'lmaydigan</b> odat va holatlar uchun <b>used to + fe'l</b> ishlatiladi: <i>I used to play football every day</i> — “Har kuni futbol o'ynardim”. <b>would</b> ham takroriy harakatlar uchun ishlatiladi, lekin holatlar uchun emas.",
    table: [
      ["Tasdiq", "used to + V1", "I used to live in Fergana."],
      ["Inkor", "didn't use to + V1", "I didn't use to like coffee."],
      ["Savol", "Did ... use to + V1?", "Did you use to walk to school?"]
    ],
    tableHead: ["Shakl", "Tuzilishi", "Misol"],
    rules: [
      "Inkor va savolda <b>use to</b> (d siz) yoziladi, chunki <b>did</b> o'zi o'tgan zamonni bildiradi.",
      "<b>would</b> faqat takroriy <b>harakatlar</b> uchun: <i>Every summer we would go to the mountains.</i> Holat (be, have, live, like, know) uchun faqat used to: <i>I used to have long hair</i> (I would have long hair — xato).",
      "Bir martalik voqea uchun used to ishlatilmaydi: <i>I went to Paris in 2019</i> (I used to go to Paris in 2019 — xato).",
      "Hozirgi odat uchun used to yo'q — present simple ishlatiladi: <i>I usually get up at 7.</i>",
      "Adashtirmang: <b>be/get used to + -ing</b> — “ko'nikkan bo'lmoq”: <i>I'm used to getting up early.</i>"
    ],
    examples: [
      ["I used to live in a small village.", "Men ilgari kichik qishloqda yashardim."],
      ["My grandmother would tell us stories every evening.", "Buvim har kech bizga ertak aytib berardi."],
      ["He didn't use to wear glasses.", "U ilgari ko'zoynak taqmasdi."],
      ["Did you use to play any sports at school?", "Maktabda biror sport bilan shug'ullanarmidingiz?"]
    ],
    quiz: [
      { q: "I ___ have a bicycle when I was a child.", o: ["would", "used to", "was used to"], a: 1, e: "have — holat, would bo'lmaydi → <b>used to</b>." },
      { q: "Did you ___ go fishing with your father?", o: ["used to", "use to", "using to"], a: 1, e: "did bilan → <b>use to</b>." },
      { q: "When we were kids, we ___ play in the street until dark.", o: ["would", "are used to", "use"], a: 0, e: "Takroriy harakat → <b>would</b> (used to ham to'g'ri bo'lardi)." },
      { q: "She ___ like vegetables, but now she loves them.", o: ["didn't use to", "didn't used to", "wouldn't"], a: 0, e: "Inkor → <b>didn't use to</b>; like — holat, wouldn't mos emas." },
      { q: "I ___ to Samarkand last year.", o: ["used to go", "went", "would go"], a: 1, e: "Bir martalik voqea → <b>went</b>." },
      { q: "I've lived here for years, so I'm used to ___ the noise.", o: ["hear", "hearing", "heard"], a: 1, e: "be used to + <b>-ing</b>: hearing." },
      { q: "To'ldiring: There ___ to be a cinema here, but they closed it.", w: ["used"], e: "<b>There used to be</b> — ilgari bor edi." },
      { q: "Tarjima: “Men ilgari choy ichmasdim.” (drink tea)", w: ["i didn't use to drink tea", "i did not use to drink tea"], e: "<b>I didn't use to drink tea.</b>" }
    ],
    speak: ["I used to live in a small village.", "My grandmother would tell us stories every evening.", "Did you use to play football at school?", "There used to be a cinema here."]
  },
  {
    id: "b1-future-forms",
    level: "B1",
    murphy: "English Grammar in Use, Unit 19–24",
    book: "New Inside Out Pre-Intermediate Workbook, Basic IELTS Speaking",
    title: "Kelasi zamon shakllari: will, going to, Present Continuous, Future Continuous",
    intro: "Ingliz tilida kelajak uchun bitta zamon yo'q — ma'noga qarab shakl tanlanadi: <b>will</b> (hozir qaror, bashorat, va'da), <b>going to</b> (oldindan reja, belgiga asoslangan bashorat), <b>Present Continuous</b> (kelishilgan uchrashuv), <b>will be + -ing</b> (kelajakda ma'lum paytda davom etayotgan ish).",
    table: [
      ["will + V1", "shu zahoti qaror, va'da, fikr", "I'll help you. I think it will rain."],
      ["be going to + V1", "oldindan reja; aniq belgi", "I'm going to buy a car. Look, it's going to fall!"],
      ["am/is/are + -ing", "kelishilgan reja (vaqt, joy bor)", "I'm meeting Dilnoza at six."],
      ["will be + -ing", "kelajakdagi aniq paytda jarayon", "This time tomorrow I'll be flying to Dubai."]
    ],
    tableHead: ["Shakl", "Qachon", "Misol"],
    rules: [
      "Gapirayotgan paytda qabul qilingan qaror → <b>will</b>: <i>The phone's ringing. — I'll answer it.</i>",
      "Avval o'ylab qo'yilgan niyat → <b>going to</b>: <i>I'm going to study medicine next year.</i>",
      "Hozirgi dalilga asoslangan bashorat → <b>going to</b>: <i>Look at those clouds. It's going to rain.</i>",
      "<b>Future continuous</b>: <i>At 10 tomorrow I'll be sitting my exam</i> — o'sha paytda jarayon davom etadi. Muloyim so'rash uchun ham: <i>Will you be using the car tonight?</i>",
      "Jadval bo'yicha (poyezd, dars) → present simple: <i>The train leaves at 8:15.</i>",
      "<b>when, if, as soon as, before, after</b> dan keyin kelajak ma'nosida present simple: <i>I'll call you when I arrive</i> (when I will arrive — xato)."
    ],
    examples: [
      ["I'm going to visit my grandparents this weekend.", "Bu dam olish kunlari bobom-buvimnikiga bormoqchiman."],
      ["Don't worry, I'll carry your bag.", "Xavotir olma, sumkangni men ko'taraman."],
      ["We're having dinner with friends on Friday.", "Juma kuni do'stlar bilan kechki ovqatlanamiz (kelishilgan)."],
      ["Don't call at nine — I'll be watching the match.", "Soat to'qqizda qo'ng'iroq qilma — o'yinni ko'rayotgan bo'laman."]
    ],
    quiz: [
      { q: "“It's cold in here.” — “OK, I ___ the window.”", o: ["'m going to close", "'ll close", "close"], a: 1, e: "Shu zahoti qaror → <b>will</b>." },
      { q: "Look at that car! It ___ crash!", o: ["will", "is going to", "is crashing"], a: 1, e: "Ko'rinib turgan belgi → <b>is going to</b>." },
      { q: "I've decided. I ___ learn to drive this summer.", o: ["am going to", "will", "would"], a: 0, e: "Oldindan qilingan qaror (I've decided) → <b>am going to</b>." },
      { q: "What ___ on Saturday evening? Are you free?", o: ["will you do", "are you doing", "do you do"], a: 1, e: "Kelishilgan rejalar haqida so'rash → <b>are you doing</b>." },
      { q: "This time next week I ___ on a beach.", o: ["will lie", "will be lying", "am lie"], a: 1, e: "Kelajakdagi aniq paytda jarayon → <b>will be lying</b>." },
      { q: "I'll phone you as soon as I ___ home.", o: ["will get", "get", "am going to get"], a: 1, e: "as soon as dan keyin present simple → <b>get</b>." },
      { q: "To'ldiring: The film ___ (start) at 7:30 tonight, according to the programme.", w: ["starts"], e: "Jadval → present simple: <b>starts</b>." },
      { q: "Tarjima: “Ertaga soat beshda men ishlayotgan bo'laman.” (work, at five)", w: ["i will be working at five tomorrow", "i'll be working at five tomorrow", "tomorrow at five i will be working", "tomorrow at five i'll be working", "i'll be working tomorrow at five", "i will be working tomorrow at five"], e: "<b>I'll be working at five tomorrow.</b>" }
    ],
    speak: ["I'm going to visit my grandparents this weekend.", "Don't worry, I'll help you.", "We're meeting at the cafe at six.", "This time tomorrow I'll be flying to Istanbul."]
  },
  {
    id: "b1-conditionals",
    level: "B1",
    murphy: "English Grammar in Use, Unit 25, 38–39",
    book: "Longman Essay Activator, Basic IELTS Writing",
    title: "First & Second Conditional (if I go / if I went)",
    intro: "<b>First conditional</b> — real, kelajakda bo'lishi mumkin bo'lgan holat: <i>If it rains, I'll stay home.</i> <b>Second conditional</b> — hozirgi yoki kelajakdagi xayoliy, real bo'lmagan holat: <i>If I had a million dollars, I would travel the world.</i>",
    table: [
      ["1-shart (real)", "If + present simple", "will + V1"],
      ["2-shart (xayoliy)", "If + past simple", "would + V1"],
      ["Misol 1", "If you study,", "you'll pass."],
      ["Misol 2", "If I were you,", "I'd study more."]
    ],
    tableHead: ["Tur", "If qismi", "Natija qismi"],
    rules: [
      "If-qismida <b>will / would</b> ishlatilmaydi: <i>If I see him, I'll tell him</i> (If I will see — xato).",
      "Second conditionalda past simple <b>o'tmishni emas</b>, xayoliylikni bildiradi: <i>If I lived near the sea, I'd swim every day</i> (lekin men dengiz yonida yashamayman).",
      "<b>If I were you</b> — maslahat berishning odatiy usuli. Rasmiy uslubda barcha shaxslar bilan <b>were</b>: <i>If she were here...</i>",
      "<b>unless</b> = if ... not: <i>You won't pass unless you study</i> = <i>...if you don't study.</i>",
      "Gap if bilan boshlansa, o'rtada vergul qo'yiladi; natija bilan boshlansa — vergul shart emas: <i>I'll come if I can.</i>",
      "would o'rniga <b>could / might</b> ham mumkin: <i>If I had more time, I could learn Chinese.</i>"
    ],
    examples: [
      ["If you heat ice, it melts.", "Muzni qizdirsang, eriydi (umumiy haqiqat — zero conditional)."],
      ["If we leave now, we'll catch the bus.", "Hozir chiqsak, avtobusga ulguramiz."],
      ["If I were you, I'd apologise.", "Sening o'rningda bo'lsam, kechirim so'rardim."],
      ["What would you do if you lost your passport?", "Pasportingni yo'qotib qo'ysang, nima qilarding?"]
    ],
    quiz: [
      { q: "If it ___ tomorrow, we'll cancel the picnic.", o: ["will rain", "rains", "rained"], a: 1, e: "1-shart: If + present simple → <b>rains</b>." },
      { q: "If I ___ rich, I would buy a big house.", o: ["am", "will be", "were"], a: 2, e: "2-shart, xayoliy → <b>were</b>." },
      { q: "If you don't hurry, you ___ late.", o: ["will be", "would be", "are"], a: 0, e: "Real holat → <b>will be</b>." },
      { q: "If I were you, I ___ that job.", o: ["will take", "would take", "take"], a: 1, e: "Maslahat, 2-shart → <b>would take</b>." },
      { q: "You won't get better ___ you take your medicine.", o: ["if", "unless", "when"], a: 1, e: "if ... not = <b>unless</b>." },
      { q: "What would you do if you ___ a snake in your room?", o: ["see", "will see", "saw"], a: 2, e: "2-shart, if-qismi past simple → <b>saw</b>." },
      { q: "To'ldiring: If she ___ (have) more time, she would read more books.", w: ["had"], e: "2-shart → <b>had</b>." },
      { q: "To'ldiring: If you ___ (call) me tonight, I'll explain everything.", w: ["call"], e: "1-shart → <b>call</b>." },
      { q: "Tarjima: “Sening o'rningda bo'lsam, ko'proq uxlardim.” (sleep more)", w: ["if i were you, i would sleep more", "if i were you i would sleep more", "if i were you, i'd sleep more", "if i were you i'd sleep more", "if i was you, i would sleep more", "if i was you i'd sleep more"], e: "<b>If I were you, I'd sleep more.</b>" }
    ],
    speak: ["If it rains tomorrow, we'll stay at home.", "If I were you, I'd apologise.", "What would you do if you won the lottery?", "You won't pass unless you study."]
  },
  {
    id: "b1-passive",
    level: "B1",
    murphy: "English Grammar in Use, Unit 42–44",
    book: "Basic IELTS Writing, IELTS Vocabulary",
    title: "Passive Voice (is done / was done / has been done)",
    intro: "Majhul nisbat: harakatni <b>kim</b> qilgani emas, harakatning <b>o'zi</b> yoki natijasi muhim bo'lganda ishlatiladi. Tuzilishi: <b>be + fe'lning 3-shakli (V3)</b>. O'zbekchadagi “-ildi, -inadi” ga mos: <i>The bridge was built in 1960</i> — “Ko'prik 1960-yilda qurilgan”.",
    table: [
      ["Present simple", "am/is/are + V3", "English is spoken here."],
      ["Past simple", "was/were + V3", "The letter was sent yesterday."],
      ["Present perfect", "has/have been + V3", "My car has been repaired."],
      ["Modal / future", "will be / can be + V3", "The results will be announced soon."]
    ],
    tableHead: ["Zamon", "Tuzilishi", "Misol"],
    rules: [
      "Bajaruvchini ko'rsatish kerak bo'lsa — <b>by</b>: <i>The novel was written by Abdulla Qodiriy.</i> Muhim bo'lmasa, by umuman qo'shilmaydi.",
      "Faqat to'ldiruvchisi bor (o'timli) fe'llar majhul bo'ladi: <i>happen, arrive, die</i> — majhul bo'lmaydi.",
      "Inkor va savol: <i>The room wasn't cleaned. Was the window broken?</i>",
      "IELTS Writing (jarayon, xarita) da juda ko'p ishlatiladi: <i>The leaves are picked, dried and packed.</i>",
      "Continuous majhul: <b>being</b> qo'shiladi: <i>The road is being repaired</i> — “Yo'l ta'mirlanyapti”."
    ],
    examples: [
      ["Cotton is grown in many regions of Uzbekistan.", "O'zbekistonning ko'p hududlarida paxta yetishtiriladi."],
      ["The museum was opened in 1997.", "Muzey 1997-yilda ochilgan."],
      ["Has the parcel been delivered yet?", "Posilka yetkazib berildimi?"],
      ["The meeting will be held next Monday.", "Majlis keyingi dushanba kuni o'tkaziladi."]
    ],
    quiz: [
      { q: "This bread ___ fresh every morning.", o: ["bakes", "is baked", "was baking"], a: 1, e: "Present simple majhul → <b>is baked</b>." },
      { q: "The Registan ___ many centuries ago.", o: ["was built", "is built", "built"], a: 0, e: "O'tmish, majhul → <b>was built</b>." },
      { q: "My bike ___. I can't find it anywhere!", o: ["has stolen", "has been stolen", "is stealing"], a: 1, e: "Present perfect majhul → <b>has been stolen</b>." },
      { q: "The pyramids were built ___ ancient Egyptians.", o: ["from", "with", "by"], a: 2, e: "Bajaruvchi → <b>by</b>." },
      { q: "The results ___ tomorrow.", o: ["will announce", "will be announced", "are announcing"], a: 1, e: "Kelasi zamon majhul → <b>will be announced</b>." },
      { q: "Qaysi gap XATO?", o: ["The accident happened at night.", "The accident was happened at night.", "The car was damaged."], a: 1, e: "happen o'timsiz fe'l — majhul bo'lmaydi." },
      { q: "To'ldiring: These cars ___ (make) in Asaka.", w: ["are made"], e: "Present simple majhul, ko'plik → <b>are made</b>." },
      { q: "To'ldiring: The house is ___ painted at the moment.", w: ["being"], e: "Continuous majhul → is <b>being</b> painted." },
      { q: "Tarjima: “Xat kecha yuborildi.” (the letter, send)", w: ["the letter was sent yesterday", "yesterday the letter was sent"], e: "<b>The letter was sent yesterday.</b>" }
    ],
    speak: ["English is spoken all over the world.", "The museum was opened in nineteen ninety-seven.", "My car has been repaired.", "The results will be announced next week."]
  },
  {
    id: "b1-reported-speech",
    level: "B1",
    murphy: "English Grammar in Use, Unit 47–48, 50",
    book: "Smart Topics in English, Basic IELTS Speaking",
    title: "Reported Speech (o'zlashtirma gap: statements & questions)",
    intro: "Birovning so'zini qayta aytganda (<i>He said that...</i>), odatda zamon bir qadam <b>orqaga</b> suriladi va olmoshlar, vaqt so'zlari o'zgaradi. <i>“I'm tired,” she said</i> → <i>She said (that) she was tired.</i>",
    table: [
      ["am / is / are", "→", "was / were"],
      ["present simple (work)", "→", "past simple (worked)"],
      ["past simple / present perfect", "→", "past perfect (had worked)"],
      ["will / can", "→", "would / could"],
      ["today / tomorrow / here", "→", "that day / the next day / there"]
    ],
    tableHead: ["To'g'ri gap", "", "O'zlashtirma gap"],
    rules: [
      "<b>say</b> va <b>tell</b>: <i>He said (that)...</i>, lekin <i>He told <b>me</b> (that)...</i> — tell dan keyin kimga aytilgani kerak.",
      "Gap hali ham to'g'ri bo'lsa, zamonni o'zgartirmasa ham bo'ladi: <i>She said she lives in Tashkent.</i>",
      "Savol (so'roq so'zli): so'z tartibi oddiy gapdek bo'ladi, do/does/did tushadi: <i>“Where do you live?”</i> → <i>He asked me where I lived.</i>",
      "Ha/yo'q savollari: <b>if / whether</b>: <i>“Are you ready?”</i> → <i>She asked if I was ready.</i>",
      "Buyruq va iltimos: <b>tell/ask + sb + to + V1</b>: <i>“Sit down.”</i> → <i>The teacher told us to sit down.</i>",
      "Olmoshlarni ham o'zgartiring: <i>“I like your idea,” Ali said to me</i> → <i>Ali said he liked my idea.</i>"
    ],
    examples: [
      ["“I'm busy,” he said. → He said he was busy.", "“Bandman”, dedi u. → U band ekanini aytdi."],
      ["She told me she had lost her keys.", "U menga kalitlarini yo'qotib qo'yganini aytdi."],
      ["He asked me where I worked.", "U mendan qayerda ishlashimni so'radi."],
      ["My mother asked if I would be home for dinner.", "Onam kechki ovqatga uyda bo'lish-bo'lmasligimni so'radi."]
    ],
    quiz: [
      { q: "“I am hungry.” → He said he ___ hungry.", o: ["is", "was", "has been"], a: 1, e: "am → <b>was</b>." },
      { q: "She ___ me that she was leaving.", o: ["said", "told", "asked"], a: 1, e: "Kimgadir (me) → <b>told</b>." },
      { q: "“I will call you.” → He said he ___ call me.", o: ["will", "would", "can"], a: 1, e: "will → <b>would</b>." },
      { q: "“Where do you live?” → She asked me where ___.", o: ["do I live", "I lived", "did I live"], a: 1, e: "So'z tartibi oddiy gapdek, zamon orqaga → <b>I lived</b>." },
      { q: "“Do you like tea?” → He asked me ___ I liked tea.", o: ["that", "if", "what"], a: 1, e: "Ha/yo'q savoli → <b>if</b> (whether)." },
      { q: "“Close the door.” → She told me ___ the door.", o: ["close", "closing", "to close"], a: 2, e: "Buyruq → tell + sb + <b>to</b> + V1." },
      { q: "To'ldiring: “I have finished.” → She said she ___ finished.", w: ["had"], e: "present perfect → past perfect: <b>had</b> finished." },
      { q: "To'ldiring: “I can swim.” → He said he ___ swim.", w: ["could"], e: "can → <b>could</b>." },
      { q: "Tarjima: “U mendan necha yoshdaligimni so'radi.” (she, ask, how old)", w: ["she asked me how old i was", "she asked how old i was"], e: "<b>She asked me how old I was.</b> (was I emas)" }
    ],
    speak: ["She said she was tired.", "He told me he had lost his phone.", "They asked me where I lived.", "The teacher told us to open our books."]
  },
  {
    id: "b1-relative-clauses",
    level: "B1",
    murphy: "English Grammar in Use, Unit 92–96",
    book: "Longman Essay Activator, IELTS Vocabulary",
    title: "Relative Clauses (who / which / that / whose / where)",
    intro: "Nisbiy ergash gap otni aniqlab, u haqida qo'shimcha ma'lumot beradi. O'zbekchada “-gan” sifatdoshiga to'g'ri keladi: <i>the man <b>who lives</b> next door</i> — “qo'shnida <b>yashaydigan</b> odam”.",
    table: [
      ["who", "odamlar", "The woman who called you is my aunt."],
      ["which", "narsa, hayvon", "The phone which I bought is broken."],
      ["that", "odam yoki narsa (norasmiy)", "The film that we watched was boring."],
      ["whose", "egalik (kimning)", "That's the boy whose father is a pilot."],
      ["where", "joy", "This is the house where I was born."]
    ],
    tableHead: ["So'z", "Nima uchun", "Misol"],
    rules: [
      "Agar who/which/that ergash gapning <b>to'ldiruvchisi</b> bo'lsa, tushib qolishi mumkin: <i>The book (that) I'm reading is great.</i> Ega bo'lsa — tushmaydi: <i>The man who lives here...</i>",
      "Olmoshni takrorlamang: <i>The car which I bought <s>it</s> is red</i> — “it” ortiqcha.",
      "Qo'shimcha (vergulli) ergash gapda <b>that</b> ishlatilmaydi va so'z tushmaydi: <i>My brother, who lives in Seoul, is an engineer.</i>",
      "<b>whose</b> + ot: <i>a student whose essay won the prize</i>.",
      "<b>where</b> = in/at which: <i>the city where I grew up = the city which I grew up in.</i>"
    ],
    examples: [
      ["The teacher who helped me most was Mr Karimov.", "Menga eng ko'p yordam bergan o'qituvchi Karimov domla edi."],
      ["Is this the bag which you lost?", "Bu sen yo'qotgan sumkami?"],
      ["I have a friend whose sister is a famous singer.", "Opasi mashhur qo'shiqchi bo'lgan do'stim bor."],
      ["Samarkand, which is over 2,500 years old, is a beautiful city.", "2500 yildan ortiq tarixga ega Samarqand go'zal shahar."]
    ],
    quiz: [
      { q: "The man ___ fixed my car was very friendly.", o: ["which", "who", "whose"], a: 1, e: "Odam → <b>who</b>." },
      { q: "I lost the watch ___ my father gave me.", o: ["who", "where", "which"], a: 2, e: "Narsa → <b>which</b> (that ham mumkin)." },
      { q: "That's the restaurant ___ we had our first date.", o: ["which", "where", "who"], a: 1, e: "Joy → <b>where</b>." },
      { q: "She's the writer ___ books are popular with teenagers.", o: ["who", "whose", "which"], a: 1, e: "Egalik → <b>whose</b>." },
      { q: "Qaysi gap TO'G'RI?", o: ["The film which I saw it was great.", "The film I saw was great.", "The film who I saw was great."], a: 1, e: "To'ldiruvchi bo'lgani uchun which tushib qolishi mumkin; “it” ortiqcha; film uchun who emas." },
      { q: "My mother, ___ is a doctor, works at night.", o: ["that", "who", "—"], a: 1, e: "Vergulli ergash gapda that bo'lmaydi va so'z tushmaydi → <b>who</b>." },
      { q: "To'ldiring: A dictionary is a book ___ explains the meaning of words.", w: ["which", "that"], e: "Narsa, ega → <b>which / that</b>." },
      { q: "Tarjima: “Bu men tug'ilgan shahar.” (this is the city, born)", w: ["this is the city where i was born", "this is the city i was born in", "this is the city that i was born in", "this is the city which i was born in"], e: "<b>This is the city where I was born.</b>" }
    ],
    speak: ["The teacher who helped me most was Mr Karimov.", "This is the house where I was born.", "I have a friend whose sister is a singer.", "The book I'm reading is really interesting."]
  },
  {
    id: "b1-gerund-infinitive",
    level: "B1",
    murphy: "English Grammar in Use, Unit 53–58",
    book: "New Inside Out Pre-Intermediate Workbook, IELTS Vocabulary",
    title: "Gerund vs Infinitive (enjoy doing / want to do)",
    intro: "Ba'zi fe'llardan keyin <b>-ing</b> shakli (gerund), boshqalaridan keyin <b>to + V1</b> (infinitive) keladi. Buni qoida bilan emas, ko'proq <b>yodlab</b> o'rganish kerak.",
    table: [
      ["+ -ing", "enjoy, finish, mind, avoid, suggest, keep, give up, can't stand", "I enjoy reading."],
      ["+ to V1", "want, decide, hope, plan, agree, refuse, promise, learn, need", "I decided to stay."],
      ["ikkalasi (ma'no deyarli bir xil)", "like, love, hate, start, begin, prefer", "I like swimming / to swim."],
      ["ikkalasi (ma'no farq qiladi)", "stop, remember, forget, try", "I stopped smoking ≠ I stopped to smoke."]
    ],
    tableHead: ["Turi", "Fe'llar", "Misol"],
    rules: [
      "Predlogdan keyin har doim <b>-ing</b>: <i>I'm interested in learning Korean. Thank you for helping me.</i>",
      "Gerund ega bo'lishi mumkin: <i>Swimming is good for your health.</i>",
      "<b>stop doing</b> — to'xtatmoq; <b>stop to do</b> — biror ishni qilish uchun to'xtamoq: <i>He stopped to buy water.</i>",
      "<b>remember doing</b> — o'tmishdagini eslamoq; <b>remember to do</b> — qilishni unutmaslik: <i>Remember to lock the door!</i>",
      "<b>would like / would love</b> → doim <b>to V1</b>: <i>I'd like to order now.</i>",
      "Sifatdan keyin odatda to V1: <i>It's easy to learn. I'm happy to help.</i>"
    ],
    examples: [
      ["I really enjoy cooking for my family.", "Oilam uchun ovqat pishirishni juda yaxshi ko'raman."],
      ["She decided to study abroad.", "U chet elda o'qishga qaror qildi."],
      ["Do you mind opening the window?", "Derazani ochib yuborsangiz qarshi emasmisiz?"],
      ["Don't forget to send me the photos.", "Rasmlarni yuborishni unutma."]
    ],
    quiz: [
      { q: "I enjoy ___ to music in the evening.", o: ["to listen", "listening", "listen"], a: 1, e: "enjoy + <b>-ing</b>." },
      { q: "We hope ___ you again soon.", o: ["seeing", "to see", "see"], a: 1, e: "hope + <b>to V1</b>." },
      { q: "He gave up ___ last year.", o: ["to smoke", "smoking", "smoke"], a: 1, e: "give up + <b>-ing</b>." },
      { q: "I'm thinking about ___ a new laptop.", o: ["buying", "to buy", "buy"], a: 0, e: "Predlog (about) + <b>-ing</b>." },
      { q: "They refused ___ the documents.", o: ["signing", "to sign", "sign"], a: 1, e: "refuse + <b>to V1</b>." },
      { q: "On the way home, I stopped ___ some bread.", o: ["buying", "to buy", "buy"], a: 1, e: "Non olish <b>uchun</b> to'xtadim → stop <b>to buy</b>." },
      { q: "To'ldiring: Would you like ___ (come) with us?", w: ["to come"], e: "would like + <b>to come</b>." },
      { q: "To'ldiring: Have you finished ___ (write) your essay?", w: ["writing"], e: "finish + <b>writing</b>." },
      { q: "Tarjima: “Men ingliz tilini o'rganishni yaxshi ko'raman.” (enjoy, learn)", w: ["i enjoy learning english"], e: "<b>I enjoy learning English.</b>" }
    ],
    speak: ["I really enjoy cooking for my family.", "She decided to study abroad.", "Do you mind opening the window?", "Don't forget to call me tonight."]
  },
  {
    id: "b1-modals-deduction",
    level: "B1",
    murphy: "English Grammar in Use, Unit 27–29",
    book: "Smart Topics in English, Cambridge IELTS 19",
    title: "Modals of deduction (must / might / can't be)",
    intro: "Biror narsa haqida <b>taxmin</b> yoki <b>xulosa</b> qilganda modal fe'llar ishonch darajasini ko'rsatadi: <b>must</b> — “aniq shunday bo'lsa kerak”, <b>might / may / could</b> — “balki”, <b>can't</b> — “bo'lishi mumkin emas”.",
    table: [
      ["must + V1", "~95% ishonch (ha)", "He must be tired — he worked all night."],
      ["might / may / could + V1", "~50% (balki)", "She might be at the library."],
      ["can't + V1", "~95% ishonch (yo'q)", "That can't be Aziz — he's in London."],
      ["must / might / can't + have + V3", "o'tmish haqida taxmin", "They must have left early."]
    ],
    tableHead: ["Shakl", "Ishonch", "Misol"],
    rules: [
      "Taxminda <b>must</b>ning inkori <b>can't</b> bo'ladi (mustn't emas): <i>It can't be true!</i>",
      "Hozir davom etayotgan ish haqida: <b>must/might be + -ing</b>: <i>She isn't answering. She might be driving.</i>",
      "O'tmish haqida: <b>modal + have + V3</b>: <i>I can't find my keys. I must have left them at work.</i>",
      "<b>might not / may not</b> = balki ... emas: <i>He might not come today.</i>",
      "Modal fe'ldan keyin <b>to</b> qo'yilmaydi va -s qo'shilmaydi: <i>It must be</i> (It must to be / It musts — xato)."
    ],
    examples: [
      ["You've been travelling all day. You must be exhausted.", "Kun bo'yi yo'lda bo'lding. Juda charchagan bo'lsang kerak."],
      ["I'm not sure where Lola is. She might be at work.", "Lola qayerdaligini bilmayman. Balki ishdadir."],
      ["That can't be the right answer. It's too easy.", "Bu to'g'ri javob bo'lishi mumkin emas. Juda oson."],
      ["The ground is wet. It must have rained last night.", "Yer ho'l. Kecha kechasi yomg'ir yoqqan bo'lsa kerak."]
    ],
    quiz: [
      { q: "He's got a Ferrari and a yacht. He ___ be very rich.", o: ["must", "can't", "might not"], a: 0, e: "Kuchli dalil → <b>must</b>." },
      { q: "She's only 15. She ___ be a university professor!", o: ["must", "can't", "may"], a: 1, e: "Bo'lishi mumkin emas → <b>can't</b>." },
      { q: "I don't know where Jasur is. He ___ be in the gym.", o: ["might", "must", "can't"], a: 0, e: "Ishonch yo'q, balki → <b>might</b>." },
      { q: "Taxminda “must”ning inkori qaysi?", o: ["mustn't", "can't", "don't must"], a: 1, e: "Taxminda inkor → <b>can't</b>." },
      { q: "The lights are off. They ___ gone to bed.", o: ["must have", "must", "can't have"], a: 0, e: "O'tmish haqida xulosa → <b>must have</b> + V3." },
      { q: "Don't call him now — he ___ sleeping.", o: ["might be", "might", "might to be"], a: 0, e: "Davom etayotgan ish → <b>might be</b> + -ing." },
      { q: "To'ldiring: It ___ be true — I saw it with my own eyes! (ishonch: ha)", w: ["must"], e: "Kuchli ishonch → <b>must</b>." },
      { q: "To'ldiring: She passed the exam easily. She ___ have studied hard. (ishonch: ha)", w: ["must"], e: "<b>must</b> have studied." },
      { q: "Tarjima: “U uyda bo'lishi mumkin emas.” (he, at home)", w: ["he can't be at home", "he cannot be at home", "he can not be at home"], e: "<b>He can't be at home.</b>" }
    ],
    speak: ["You must be very tired.", "She might be at the library.", "That can't be true!", "They must have left early."]
  },
  {
    id: "b1-phrasal-too-enough",
    level: "B1",
    murphy: "English Grammar in Use, Unit 100, 136–145",
    book: "IELTS Vocabulary, New Inside Out Pre-Intermediate Workbook",
    title: "Phrasal verbs (asoslar) + too / enough",
    intro: "<b>Phrasal verb</b> — fe'l + kichik so'z (up, down, on, off, out, back...): ma'nosi ko'pincha butunlay yangi bo'ladi: <i>give up</i> — “tashlamoq, voz kechmoq”, <i>look after</i> — “qaramoq, g'amxo'rlik qilmoq”. <b>too</b> — “haddan tashqari”, <b>enough</b> — “yetarli”.",
    table: [
      ["get up / wake up", "turmoq / uyg'onmoq", "I wake up at 6 but get up at 6:30."],
      ["turn on / turn off", "yoqmoq / o'chirmoq", "Turn off the lights, please."],
      ["look for / look after", "qidirmoq / qaramoq", "I'm looking for my glasses."],
      ["find out / give up", "bilib olmoq / tashlamoq", "Don't give up!"],
      ["too + sifat / sifat + enough", "haddan ortiq / yetarli", "too hot / warm enough"]
    ],
    tableHead: ["Ibora", "Ma'nosi", "Misol"],
    rules: [
      "Ko'p phrasal verblarda to'ldiruvchi o'rtaga yoki oxirga qo'yiladi: <i>Turn off the TV / Turn the TV off.</i> Olmosh bo'lsa — faqat o'rtaga: <i>Turn it off</i> (Turn off it — xato).",
      "Ba'zilari ajralmaydi: <i>look after the baby, look for my keys</i> (look the baby after — xato).",
      "<b>too</b> sifat/ravishdan <b>oldin</b>: <i>too expensive, too quickly</i>. Ko'pincha salbiy ma'noda.",
      "<b>enough</b> sifatdan <b>keyin</b>, otdan <b>oldin</b>: <i>old enough</i>, lekin <i>enough money</i>.",
      "Ikkalasi ham <b>to + V1</b> yoki <b>for + sb</b> bilan keladi: <i>It's too cold to swim. This box is light enough for a child to carry.</i>",
      "<b>too</b> ≠ <b>very</b>: <i>It's very hot, but we can go</i>; <i>It's too hot — we can't go.</i>"
    ],
    examples: [
      ["Could you look after my cat while I'm away?", "Men yo'qligimda mushugimga qarab turolasanmi?"],
      ["I need to find out what time the train leaves.", "Poyezd soat nechada jo'nashini bilib olishim kerak."],
      ["This coffee is too hot to drink.", "Bu qahva ichish uchun juda issiq."],
      ["He isn't tall enough to play basketball.", "U basketbol o'ynash uchun yetarlicha baland emas."],
      ["We don't have enough time.", "Bizda yetarli vaqt yo'q."]
    ],
    quiz: [
      { q: "Please ___ your phone during the exam.", o: ["turn off", "turn up", "give up"], a: 0, e: "O'chirmoq → <b>turn off</b>." },
      { q: "Who will ___ your children when you're at work?", o: ["look for", "look after", "look up"], a: 1, e: "G'amxo'rlik qilmoq → <b>look after</b>." },
      { q: "The radio is loud. Can you turn ___?", o: ["off it", "it off", "it of"], a: 1, e: "Olmosh o'rtaga → turn <b>it off</b>." },
      { q: "This suitcase is ___ heavy. I can't lift it.", o: ["too", "enough", "very enough"], a: 0, e: "Haddan ortiq, salbiy natija → <b>too</b>." },
      { q: "Is she ___ to drive a car?", o: ["enough old", "old enough", "too old enough"], a: 1, e: "enough sifatdan keyin → <b>old enough</b>." },
      { q: "We didn't have ___ to buy the tickets.", o: ["money enough", "enough money", "too money"], a: 1, e: "enough otdan oldin → <b>enough money</b>." },
      { q: "To'ldiring: I tried to learn the guitar, but I gave ___ after a month.", w: ["up"], e: "give <b>up</b> — tashlamoq." },
      { q: "To'ldiring: It's ___ cold to go swimming today. (haddan tashqari)", w: ["too"], e: "<b>too</b> cold to go swimming." },
      { q: "Tarjima: “Men kalitlarimni qidiryapman.” (look for, keys)", w: ["i am looking for my keys", "i'm looking for my keys"], e: "<b>I'm looking for my keys.</b>" }
    ],
    speak: ["Could you turn off the lights, please?", "I'm looking for my keys.", "This coffee is too hot to drink.", "He isn't old enough to drive."]
  }
]);
