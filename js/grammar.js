// Grammatika darslari. Tartib Essential Grammar in Use (Murphy) unitlari ketma-ketligiga mos.
// Matnlar original: kitobdan ko'chirilmagan, faqat mavzular tartibi olingan.
// Savol turlari: {q, o:[variantlar], a:to'g'ri indeks, e:izoh} yoki {q, w:[to'g'ri javoblar], e:izoh} (yozma javob).

window.GRAMMAR = [
  {
    id: "be-present",
    murphy: "Unit 1–2",
    book: "Inside Out Elementary, Gateway A2 (1-unit)",
    title: "am / is / are",
    intro: "Ingliz tilida “-man, -san, -dir” qo'shimchalari yo'q. Ularning o'rnida <b>to be</b> fe'li ishlatiladi: <b>am, is, are</b>. Gapda boshqa fe'l bo'lmasa, deyarli har doim shu kerak bo'ladi.",
    table: [
      ["I", "am", "I'm"],
      ["he / she / it", "is", "he's / she's / it's"],
      ["we / you / they", "are", "we're / you're / they're"]
    ],
    tableHead: ["Kim", "Fe'l", "Qisqa shakl"],
    rules: [
      "Inkor: fe'ldan keyin <b>not</b> qo'shiladi: <i>I am not tired. She isn't at home. They aren't students.</i>",
      "Savol: fe'l oldinga chiqadi: <i>Are you a student? Is he your brother?</i>",
      "Qisqa javob: <i>Yes, I am. / No, she isn't.</i> (Ijobiy qisqa javobda <i>Yes, I'm</i> deyilmaydi.)",
      "O'zbekcha “Men talabaman” = <i>I am a student</i>. “Talaba” oldidan <b>a</b> unutilmasin."
    ],
    examples: [
      ["I'm from Uzbekistan.", "Men O'zbekistondanman."],
      ["My sister is a teacher.", "Opam o'qituvchi."],
      ["We aren't hungry.", "Biz och emasmiz."],
      ["Is it cold today?", "Bugun sovuqmi?"]
    ],
    quiz: [
      { q: "My name ___ Shukurjon.", o: ["am", "is", "are"], a: 1, e: "“My name” = it, shuning uchun <b>is</b>." },
      { q: "We ___ from Tashkent.", o: ["am", "is", "are"], a: 2, e: "we → <b>are</b>." },
      { q: "I ___ 20 years old.", o: ["am", "is", "are"], a: 0, e: "Yoshni aytishda ham <b>to be</b>: I am 20." },
      { q: "___ your parents at home?", o: ["Is", "Are", "Am"], a: 1, e: "parents = they → <b>Are</b>." },
      { q: "She ___ a doctor. She is a nurse.", o: ["is", "isn't", "aren't"], a: 1, e: "Inkor, she → <b>isn't</b>." },
      { q: "Qisqa shaklini yozing: they are → ___", w: ["they're"], e: "they are = <b>they're</b>." },
      { q: "“Is he a student?” — “Yes, he ___.”", w: ["is"], e: "Qisqa javob: Yes, he <b>is</b>." },
      { q: "Tarjima qiling: “Men charchaganman.” (tired)", w: ["i am tired", "i'm tired"], e: "<b>I'm tired.</b>" }
    ],
    speak: ["I'm a student.", "My brother is twenty-five years old.", "Are you from Samarkand?", "We aren't late."]
  },
  {
    id: "present-continuous",
    murphy: "Unit 3–4",
    book: "Inside Out Elementary, Gateway A2",
    title: "Present Continuous (I am doing)",
    intro: "Hozir, shu daqiqada bo'layotgan ish uchun: <b>am/is/are + fe'l-ing</b>. O'zbekchadagi “-yapman, -yapti” ga to'g'ri keladi.",
    table: [
      ["I", "am", "working"],
      ["he / she / it", "is", "reading"],
      ["we / you / they", "are", "playing"]
    ],
    tableHead: ["Kim", "be", "fe'l + ing"],
    rules: [
      "-e bilan tugasa, e tushadi: <i>make → making, write → writing</i>.",
      "Qisqa so'z undosh-unli-undosh bilan tugasa, oxirgi harf ikkilanadi: <i>sit → sitting, run → running, swim → swimming</i>.",
      "Inkor: <i>I'm not watching TV. He isn't sleeping.</i>",
      "Savol: <i>Are you listening? What is she doing?</i>",
      "Ko'pincha <b>now, right now, at the moment, today, look!, listen!</b> so'zlari bilan keladi."
    ],
    examples: [
      ["I'm learning English now.", "Men hozir ingliz tilini o'rganyapman."],
      ["Look! It's raining.", "Qara! Yomg'ir yog'yapti."],
      ["What are you doing?", "Nima qilyapsan?"],
      ["She isn't working today.", "U bugun ishlamayapti."]
    ],
    quiz: [
      { q: "Listen! The baby ___.", o: ["cry", "is crying", "cries"], a: 1, e: "“Listen!” hozirni bildiradi → <b>is crying</b>." },
      { q: "I ___ dinner at the moment.", o: ["am cooking", "cooking", "is cooking"], a: 0, e: "I → <b>am</b> + cooking." },
      { q: "run + ing = ___", w: ["running"], e: "Oxirgi undosh ikkilanadi: <b>running</b>." },
      { q: "write + ing = ___", w: ["writing"], e: "-e tushadi: <b>writing</b>." },
      { q: "___ they playing football now?", o: ["Is", "Do", "Are"], a: 2, e: "they → <b>Are</b>." },
      { q: "He ___ TV. He's reading a book.", o: ["isn't watching", "doesn't watching", "not watching"], a: 0, e: "Inkor: <b>isn't watching</b>." },
      { q: "What ___ you ___? (do)", o: ["are / do", "are / doing", "do / doing"], a: 1, e: "<b>What are you doing?</b>" },
      { q: "Tarjima: “Biz kutyapmiz.” (wait)", w: ["we are waiting", "we're waiting"], e: "<b>We're waiting.</b>" }
    ],
    speak: ["I'm learning English right now.", "What are you doing at the moment?", "She's sitting next to the window.", "They aren't listening to me."]
  },
  {
    id: "present-simple",
    murphy: "Unit 5–7",
    book: "Inside Out Elementary, Gateway A2",
    title: "Present Simple (I do / I don't / Do you?)",
    intro: "Har doim, odatda, muntazam bo'ladigan ishlar va umumiy haqiqatlar uchun. <b>he / she / it</b> bilan fe'lga <b>-s</b> qo'shiladi.",
    table: [
      ["I / we / you / they", "work", "don't work", "Do you work?"],
      ["he / she / it", "works", "doesn't work", "Does she work?"]
    ],
    tableHead: ["Kim", "Ijobiy", "Inkor", "Savol"],
    rules: [
      "-s, -sh, -ch, -x, -o bilan tugasa <b>-es</b>: <i>watches, goes, does, washes</i>.",
      "Undosh + y bo'lsa <b>-ies</b>: <i>study → studies, fly → flies</i>. (Lekin <i>play → plays</i>.)",
      "<b>have → has</b> (he/she/it).",
      "<b>doesn't</b> va <b>does</b> dan keyin fe'l -s siz bo'ladi: <i>She doesn't like</i> (likes emas!).",
      "Chastota so'zlari fe'ldan oldin: <b>always, usually, often, sometimes, never</b>. <i>I always get up at 7.</i>"
    ],
    examples: [
      ["I get up at seven every day.", "Men har kuni soat yettida turaman."],
      ["My father works in a bank.", "Otam bankda ishlaydi."],
      ["She doesn't eat meat.", "U go'sht yemaydi."],
      ["Do you speak English?", "Inglizcha gapirasizmi?"]
    ],
    quiz: [
      { q: "My brother ___ in Tashkent.", o: ["live", "lives", "living"], a: 1, e: "he → <b>lives</b>." },
      { q: "We ___ to school by bus.", o: ["go", "goes", "are go"], a: 0, e: "we → <b>go</b> (-s siz)." },
      { q: "She ___ like coffee.", o: ["don't", "doesn't", "isn't"], a: 1, e: "she → <b>doesn't</b>." },
      { q: "___ your sister study English?", o: ["Do", "Is", "Does"], a: 2, e: "sister = she → <b>Does</b>." },
      { q: "study → he ___", w: ["studies"], e: "Undosh + y → <b>studies</b>." },
      { q: "watch → she ___", w: ["watches"], e: "-ch → <b>watches</b>." },
      { q: "He doesn't ___ football.", o: ["plays", "play", "playing"], a: 1, e: "doesn't dan keyin -s yo'q: <b>play</b>." },
      { q: "To'g'ri tartib: I / late / never / am", o: ["I never am late.", "I am never late.", "Never I am late."], a: 1, e: "<b>be</b> fe'lidan keyin: <i>I am never late.</i>" },
      { q: "Tarjima: “U (qiz) har kuni kitob o'qiydi.”", w: ["she reads books every day", "she reads a book every day", "she reads every day"], e: "<b>She reads books every day.</b>" }
    ],
    speak: ["I usually get up at seven o'clock.", "My mother works in a hospital.", "Do you like music?", "He doesn't drink tea in the evening."]
  },
  {
    id: "simple-vs-continuous",
    murphy: "Unit 8",
    book: "Inside Out Elementary",
    title: "I am doing yoki I do?",
    intro: "Ikkala zamonni farqlash juda muhim. <b>Present Continuous</b> = hozir, vaqtincha. <b>Present Simple</b> = doim, odatda.",
    table: [
      ["Hozir / shu payt", "I'm drinking tea now.", "now, at the moment, look!"],
      ["Odatda / doim", "I drink tea every morning.", "every day, usually, often"]
    ],
    tableHead: ["Ma'no", "Misol", "Belgi so'zlar"],
    rules: [
      "Ba'zi fe'llar odatda <b>-ing</b> olmaydi: <b>like, love, want, know, understand, need, believe</b>. <i>I want water</i> (I'm wanting emas).",
      "Savol: <i>What do you do?</i> = Kasbing nima? <i>What are you doing?</i> = Hozir nima qilyapsan?"
    ],
    examples: [
      ["He plays football on Sundays, but today he is studying.", "U yakshanbalari futbol o'ynaydi, lekin bugun dars qilyapti."],
      ["I don't understand this word.", "Men bu so'zni tushunmayapman."]
    ],
    quiz: [
      { q: "Water ___ at 100 degrees.", o: ["boils", "is boiling"], a: 0, e: "Umumiy haqiqat → <b>boils</b>." },
      { q: "Be quiet! I ___ .", o: ["study", "am studying"], a: 1, e: "Hozir → <b>am studying</b>." },
      { q: "I ___ what you mean.", o: ["know", "am knowing"], a: 0, e: "<b>know</b> -ing olmaydi." },
      { q: "She usually ___ to work, but today she ___ a taxi.", o: ["walks / is taking", "is walking / takes", "walk / take"], a: 0, e: "usually → simple; today → continuous." },
      { q: "“What ___ you ___?” — “I'm a teacher.”", o: ["are / doing", "do / do"], a: 1, e: "Kasb so'raladi → <b>What do you do?</b>" },
      { q: "Look! Those people ___ .", o: ["dance", "are dancing"], a: 1, e: "Look! → <b>are dancing</b>." },
      { q: "I ___ a new phone. (want)", w: ["want"], e: "<b>want</b> -ing olmaydi." }
    ],
    speak: ["I usually walk to work, but today I'm taking a bus.", "What do you do?", "I don't understand this question."]
  },
  {
    id: "have-got",
    murphy: "Unit 9",
    book: "Gateway A2",
    title: "have / have got",
    intro: "“Menda ... bor” degani ingliz tilida <b>I have ...</b> yoki <b>I have got ...</b>. O'zbekchadagi “bor” uchun “there is” emas, <b>have</b> ishlatiladi!",
    table: [
      ["I / we / you / they", "have (got)", "don't have / haven't got"],
      ["he / she / it", "has (got)", "doesn't have / hasn't got"]
    ],
    tableHead: ["Kim", "Ijobiy", "Inkor"],
    rules: [
      "Savol: <i>Do you have a car?</i> yoki <i>Have you got a car?</i>",
      "Ovqat, dush va h.k. uchun faqat <b>have</b>: <i>have breakfast, have a shower, have a good time</i> (have got emas)."
    ],
    examples: [
      ["I have two brothers.", "Mening ikkita akam bor."],
      ["She's got blue eyes.", "Uning ko'zlari ko'k."],
      ["We don't have a car.", "Bizning mashinamiz yo'q."]
    ],
    quiz: [
      { q: "My friend ___ a new laptop.", o: ["have", "has", "is"], a: 1, e: "he/she → <b>has</b>." },
      { q: "___ you have any brothers?", o: ["Have", "Do", "Are"], a: 1, e: "<b>Do you have</b> ...?" },
      { q: "They ___ got a garden.", o: ["haven't", "don't", "hasn't"], a: 0, e: "they → <b>haven't got</b>." },
      { q: "I usually ___ breakfast at 8.", o: ["have got", "have", "has"], a: 1, e: "Ovqat → faqat <b>have</b>." },
      { q: "Tarjima: “Mening mushugim bor.” (cat)", w: ["i have a cat", "i've got a cat", "i have got a cat"], e: "<b>I have a cat.</b>" },
      { q: "She doesn't ___ a job.", o: ["has", "have", "having"], a: 1, e: "doesn't + <b>have</b>." }
    ],
    speak: ["I have got two sisters.", "Do you have any pets?", "She has long dark hair."]
  },
  {
    id: "was-were",
    murphy: "Unit 10",
    book: "Inside Out Elementary",
    title: "was / were",
    intro: "<b>am / is</b> ning o'tgan zamoni → <b>was</b>; <b>are</b> ning o'tgan zamoni → <b>were</b>.",
    table: [
      ["I / he / she / it", "was", "wasn't"],
      ["we / you / they", "were", "weren't"]
    ],
    tableHead: ["Kim", "Ijobiy", "Inkor"],
    rules: [
      "Savol: <i>Were you at home yesterday? Where was she?</i>",
      "Vaqt so'zlari: <b>yesterday, last night, last week, two days ago, in 2020</b>."
    ],
    examples: [
      ["I was tired yesterday.", "Kecha charchagan edim."],
      ["They were at the cinema.", "Ular kinoteatrda edi."],
      ["Was the test difficult?", "Test qiyin edimi?"]
    ],
    quiz: [
      { q: "I ___ at school yesterday.", o: ["was", "were", "am"], a: 0, e: "I + yesterday → <b>was</b>." },
      { q: "Where ___ you last night?", o: ["was", "were", "are"], a: 1, e: "you → <b>were</b>." },
      { q: "The weather ___ good last week. It rained every day.", o: ["was", "wasn't", "weren't"], a: 1, e: "Inkor, it → <b>wasn't</b>." },
      { q: "My parents ___ in Bukhara in 2019.", o: ["was", "were"], a: 1, e: "parents = they → <b>were</b>." },
      { q: "“Was it expensive?” — “No, it ___.”", w: ["wasn't", "was not"], e: "<b>No, it wasn't.</b>" },
      { q: "Tarjima: “Biz kech qoldik edi” → We ___ late.", w: ["were"], e: "<b>We were late.</b>" }
    ],
    speak: ["I was at home last night.", "Where were you yesterday?", "The film wasn't very interesting."]
  },
  {
    id: "past-simple",
    murphy: "Unit 11–12",
    book: "Inside Out Elementary, Gateway A2",
    title: "Past Simple (I worked / I didn't work)",
    intro: "O'tgan zamonda tugagan ish uchun. To'g'ri fe'llarga <b>-ed</b> qo'shiladi; noto'g'ri fe'llar (irregular) yodlanadi.",
    table: [
      ["Ijobiy", "I worked. She went.", "har kim uchun bir xil"],
      ["Inkor", "I didn't work. She didn't go.", "didn't + asosiy fe'l"],
      ["Savol", "Did you work? Did she go?", "Did + kim + asosiy fe'l"]
    ],
    tableHead: ["Shakl", "Misol", "Qoida"],
    rules: [
      "To'g'ri fe'llar: <i>play → played, study → studied, stop → stopped, live → lived</i>.",
      "Eng ko'p ishlatiladigan noto'g'ri fe'llar: <b>go → went, have → had, do → did, see → saw, eat → ate, get → got, buy → bought, make → made, come → came, take → took, say → said, write → wrote</b>.",
      "<b>didn't / did</b> dan keyin fe'l asosiy shaklda: <i>I didn't go</i> (went emas!)."
    ],
    examples: [
      ["I watched a film last night.", "Kecha kechqurun film ko'rdim."],
      ["We went to the market on Sunday.", "Yakshanba kuni bozorga bordik."],
      ["She didn't call me.", "U menga qo'ng'iroq qilmadi."],
      ["What did you eat for breakfast?", "Nonushtaga nima yeding?"]
    ],
    quiz: [
      { q: "go → ___", w: ["went"], e: "<b>went</b> (noto'g'ri fe'l)." },
      { q: "buy → ___", w: ["bought"], e: "<b>bought</b>." },
      { q: "study → ___", w: ["studied"], e: "<b>studied</b>." },
      { q: "I ___ my homework yesterday.", o: ["do", "did", "done"], a: 1, e: "do → <b>did</b>." },
      { q: "We didn't ___ to the party.", o: ["went", "go", "goes"], a: 1, e: "didn't + <b>go</b>." },
      { q: "___ you see Ali yesterday?", o: ["Do", "Were", "Did"], a: 2, e: "<b>Did</b> you see ...?" },
      { q: "She ___ a letter to her friend last week.", o: ["writes", "wrote", "written"], a: 1, e: "write → <b>wrote</b>." },
      { q: "Tarjima: “Men kecha non sotib oldim.”", w: ["i bought bread yesterday", "yesterday i bought bread", "i bought some bread yesterday"], e: "<b>I bought bread yesterday.</b>" }
    ],
    speak: ["I went to the market yesterday.", "What did you do last weekend?", "We didn't have time.", "She bought a new dress."]
  },
  {
    id: "past-continuous",
    murphy: "Unit 13–14",
    book: "New Inside Out Pre-Intermediate Workbook",
    title: "Past Continuous (I was doing)",
    intro: "O'tmishdagi ma'lum bir paytda davom etayotgan ish: <b>was/were + -ing</b>. O'zbekchada “...yotgan edim”.",
    table: [
      ["I / he / she / it", "was working", "wasn't working"],
      ["we / you / they", "were working", "weren't working"]
    ],
    tableHead: ["Kim", "Ijobiy", "Inkor"],
    rules: [
      "Ko'pincha Past Simple bilan birga: uzun ish (was doing) + qisqa voqea (did). <i>I was sleeping when the phone rang.</i>",
      "<b>while</b> + uzun ish: <i>While I was cooking, he was watching TV.</i>"
    ],
    examples: [
      ["At 8 o'clock I was having dinner.", "Soat 8 da kechki ovqat yeyayotgan edim."],
      ["It was raining when we left.", "Biz chiqqanimizda yomg'ir yog'ayotgan edi."]
    ],
    quiz: [
      { q: "At 10 pm yesterday I ___ a film.", o: ["watched", "was watching", "were watching"], a: 1, e: "Aniq paytda davom etgan → <b>was watching</b>." },
      { q: "They ___ football when it started to rain.", o: ["were playing", "was playing", "played"], a: 0, e: "they → <b>were playing</b>." },
      { q: "I was walking home when I ___ my teacher.", o: ["was seeing", "saw", "see"], a: 1, e: "Qisqa voqea → <b>saw</b>." },
      { q: "What ___ you doing at 7 this morning?", o: ["was", "were", "did"], a: 1, e: "you → <b>were</b>." },
      { q: "While she ___, I was washing the dishes. (cook)", w: ["was cooking"], e: "<b>was cooking</b>." }
    ],
    speak: ["I was sleeping when you called.", "What were you doing at eight o'clock?", "It was raining all day."]
  },
  {
    id: "present-perfect",
    murphy: "Unit 15–19",
    book: "New Inside Out Pre-Intermediate Workbook",
    title: "Present Perfect (I have done)",
    intro: "O'tmishda bo'lgan, lekin natijasi hozir muhim bo'lgan ish yoki hayotiy tajriba: <b>have/has + 3-shakl (V3)</b>. Aniq vaqt aytilmaydi.",
    table: [
      ["I / we / you / they", "have finished", "haven't finished"],
      ["he / she / it", "has finished", "hasn't finished"]
    ],
    tableHead: ["Kim", "Ijobiy", "Inkor"],
    rules: [
      "Tajriba: <i>Have you ever been to London? I've never eaten sushi.</i>",
      "Hozirgacha: <b>already, yet, just</b>. <i>I've just arrived. Have you finished yet? She's already left.</i>",
      "Davomiylik: <b>for</b> (muddat) / <b>since</b> (boshlanish nuqtasi). <i>I've lived here for five years / since 2021.</i>",
      "Aniq o'tgan vaqt bo'lsa (yesterday, last year, in 2020) — <b>Past Simple</b>: <i>I saw him yesterday</i> (I have seen him yesterday emas).",
      "Muhim V3 lar: <b>been, done, seen, eaten, gone, had, made, written, taken, bought, read, met</b>."
    ],
    examples: [
      ["I've lost my keys.", "Kalitlarimni yo'qotib qo'ydim (hali topilmadi)."],
      ["Have you ever been to Khiva?", "Hech Xivada bo'lganmisiz?"],
      ["She has worked here since 2022.", "U 2022-yildan beri shu yerda ishlaydi."]
    ],
    quiz: [
      { q: "I ___ my homework. Can I go out now?", o: ["have finished", "finished yesterday", "has finished"], a: 0, e: "Natija hozir muhim → <b>have finished</b>." },
      { q: "___ you ever ___ to Turkey?", o: ["Did / go", "Have / been", "Has / been"], a: 1, e: "Tajriba → <b>Have you ever been</b>." },
      { q: "She ___ just ___ home.", o: ["has / come", "have / come", "has / came"], a: 0, e: "she → has + V3 <b>come</b>." },
      { q: "We've lived in this flat ___ ten years.", o: ["since", "for", "ago"], a: 1, e: "Muddat → <b>for</b>." },
      { q: "I've known him ___ 2018.", o: ["since", "for"], a: 0, e: "Boshlanish nuqtasi → <b>since</b>." },
      { q: "I ___ that film last week.", o: ["have seen", "saw"], a: 1, e: "last week aniq vaqt → <b>saw</b>." },
      { q: "eat → V3 = ___", w: ["eaten"], e: "eat – ate – <b>eaten</b>." },
      { q: "Have you finished ___? (hali)", o: ["already", "yet", "just"], a: 1, e: "Savolda “hali” → <b>yet</b>." }
    ],
    speak: ["Have you ever been to London?", "I've never tried Japanese food.", "She has lived here since twenty twenty-two.", "I haven't finished yet."]
  },
  {
    id: "future",
    murphy: "Unit 26–29",
    book: "Inside Out Elementary, Gateway A2",
    title: "Kelasi zamon: going to / will / present continuous",
    intro: "Kelajak uchun bir nechta shakl bor, ma'nosi biroz farq qiladi.",
    table: [
      ["Reja, niyat", "I'm going to study tonight.", "be going to + fe'l"],
      ["Kelishib qo'yilgan uchrashuv", "I'm meeting Aziz tomorrow.", "Present Continuous"],
      ["Shu zahoti qaror, va'da, taxmin", "I'll help you. It will be cold.", "will + fe'l"]
    ],
    tableHead: ["Ma'no", "Misol", "Shakl"],
    rules: [
      "<b>will</b> ning inkori: <b>won't</b> (= will not). <i>I won't tell anyone.</i>",
      "Taxmin bilan: <i>I think it will rain. I don't think she'll come.</i>",
      "Ko'rinib turgan dalil bo'lsa → going to: <i>Look at the clouds! It's going to rain.</i>"
    ],
    examples: [
      ["I'm going to buy a new phone next month.", "Kelasi oy yangi telefon olmoqchiman."],
      ["The phone is ringing. — I'll answer it!", "Telefon jiringlayapti. — Men olaman!"],
      ["We're flying to Istanbul on Friday.", "Juma kuni Istanbulga uchamiz."]
    ],
    quiz: [
      { q: "“I'm thirsty.” — “OK, I ___ you some water.”", o: ["'ll get", "'m going to get", "get"], a: 0, e: "Shu zahoti qaror → <b>will</b>." },
      { q: "Look at that black sky! It ___ rain.", o: ["will", "is going to", "rains"], a: 1, e: "Ko'rinib turgan dalil → <b>is going to</b>." },
      { q: "I ___ my grandmother this weekend. I bought the tickets.", o: ["visit", "am visiting", "visited"], a: 1, e: "Rejalashtirilgan uchrashuv → <b>am visiting</b>." },
      { q: "I don't think she ___ come to the party.", o: ["will", "is", "does"], a: 0, e: "Taxmin → <b>will</b>." },
      { q: "will not → qisqa shakl: ___", w: ["won't"], e: "<b>won't</b>." },
      { q: "Tarjima: “Men ingliz tilini o'rganmoqchiman.” (going to)", w: ["i am going to learn english", "i'm going to learn english", "i am going to study english", "i'm going to study english"], e: "<b>I'm going to learn English.</b>" }
    ],
    speak: ["I'm going to study English every day.", "I think it will be sunny tomorrow.", "Don't worry, I'll help you.", "What are you doing this weekend?"]
  },
  {
    id: "can-could",
    murphy: "Unit 30",
    book: "Gateway A2",
    title: "can / can't / could",
    intro: "<b>can</b> = qila olaman (qobiliyat, imkoniyat, ruxsat). Undan keyin fe'l <b>to</b> siz, -s siz keladi.",
    table: [
      ["Hozir", "I can swim.", "I can't (cannot) drive."],
      ["O'tmish", "I could read at five.", "I couldn't sleep last night."]
    ],
    tableHead: ["Zamon", "Ijobiy", "Inkor"],
    rules: [
      "Savol: <i>Can you help me? Could you open the window, please?</i> (<b>could</b> — xushmuomalaroq so'rov).",
      "Xato: <i>She cans</i>, <i>I can to swim</i> — bunday bo'lmaydi."
    ],
    examples: [
      ["I can speak Uzbek and Russian.", "Men o'zbek va rus tilida gapira olaman."],
      ["Can I ask a question?", "Savol bersam bo'ladimi?"],
      ["Could you repeat that, please?", "Iltimos, qaytarib yubora olasizmi?"]
    ],
    quiz: [
      { q: "My sister ___ play the piano.", o: ["cans", "can", "can to"], a: 1, e: "Har doim <b>can</b>." },
      { q: "I'm sorry, I ___ come tomorrow.", o: ["can't", "don't can", "not can"], a: 0, e: "Inkor → <b>can't</b>." },
      { q: "When I was a child I ___ climb trees.", o: ["can", "could", "can to"], a: 1, e: "O'tmish → <b>could</b>." },
      { q: "___ you speak more slowly, please?", o: ["Could", "Do", "Are"], a: 0, e: "Xushmuomala so'rov → <b>Could</b>." },
      { q: "Tarjima: “Men suzolmayman.” (swim)", w: ["i can't swim", "i cannot swim", "i can not swim"], e: "<b>I can't swim.</b>" }
    ],
    speak: ["Could you repeat that, please?", "I can speak three languages.", "Can I ask you a question?"]
  },
  {
    id: "must-should",
    murphy: "Unit 31–34",
    book: "New Inside Out Pre-Intermediate Workbook",
    title: "must / have to / should",
    intro: "Majburiyat va maslahat.",
    table: [
      ["must / have to", "kerak, shart", "I have to work on Saturday."],
      ["mustn't", "mumkin emas, taqiqlangan", "You mustn't smoke here."],
      ["don't have to", "shart emas", "You don't have to come."],
      ["should / shouldn't", "maslahat: kerak / kerak emas", "You should sleep more."]
    ],
    tableHead: ["So'z", "Ma'no", "Misol"],
    rules: [
      "<b>mustn't</b> va <b>don't have to</b> farqi katta: birinchisi taqiq, ikkinchisi — ixtiyoriy.",
      "O'tmishda <b>must</b> yo'q, <b>had to</b> ishlatiladi: <i>I had to wait for an hour.</i>",
      "he/she bilan: <b>has to</b>, <b>doesn't have to</b>."
    ],
    examples: [
      ["You should drink more water.", "Ko'proq suv ichishingiz kerak (maslahat)."],
      ["Students must wear a uniform.", "O'quvchilar forma kiyishi shart."],
      ["Tomorrow is Sunday, I don't have to get up early.", "Ertaga yakshanba, erta turishim shart emas."]
    ],
    quiz: [
      { q: "You look tired. You ___ go to bed.", o: ["should", "mustn't", "don't have to"], a: 0, e: "Maslahat → <b>should</b>." },
      { q: "You ___ use your phone in the exam. It's not allowed.", o: ["don't have to", "mustn't", "should"], a: 1, e: "Taqiq → <b>mustn't</b>." },
      { q: "It's free. You ___ pay.", o: ["mustn't", "don't have to", "have to"], a: 1, e: "Shart emas → <b>don't have to</b>." },
      { q: "She ___ work late yesterday.", o: ["must", "had to", "has to"], a: 1, e: "O'tmish → <b>had to</b>." },
      { q: "My brother ___ to wear a suit at work.", o: ["have", "has", "must"], a: 1, e: "he → <b>has to</b>." }
    ],
    speak: ["You should practise every day.", "I have to get up early tomorrow.", "You mustn't be late for the exam."]
  },
  {
    id: "there-is",
    murphy: "Unit 37–38",
    book: "Inside Out Elementary",
    title: "there is / there are / there was",
    intro: "Biror joyda nimadir <b>bor</b> ekanini aytish uchun (joy haqida). Shaxsga tegishli “bor” uchun esa <b>have</b>.",
    table: [
      ["Birlik", "There is a bank near here.", "There isn't a lift."],
      ["Ko'plik", "There are two parks.", "There aren't any shops."],
      ["O'tmish", "There was a problem.", "There were many people."]
    ],
    tableHead: ["Son", "Ijobiy", "Inkor"],
    rules: [
      "Savol: <i>Is there a café near here? Are there any questions?</i>",
      "Qancha? → <i>How many students are there in your class?</i>"
    ],
    examples: [
      ["There's a big market in my town.", "Shahrimda katta bozor bor."],
      ["There are 30 days in June.", "Iyunda 30 kun bor."],
      ["Is there a pharmacy near here?", "Yaqin atrofda dorixona bormi?"]
    ],
    quiz: [
      { q: "___ a supermarket in my street.", o: ["There is", "There are", "It has"], a: 0, e: "Birlik → <b>There is</b>." },
      { q: "___ many people at the concert last night.", o: ["There was", "There were", "There are"], a: 1, e: "Ko'plik + o'tmish → <b>There were</b>." },
      { q: "___ any eggs in the fridge?", o: ["Is there", "Are there", "Have"], a: 1, e: "eggs ko'plik → <b>Are there</b>." },
      { q: "Tarjima: “Mening xonamda kompyuter bor.”", w: ["there is a computer in my room", "there's a computer in my room"], e: "<b>There's a computer in my room.</b> (yoki <i>I have a computer in my room.</i>)" },
      { q: "There ___ any milk. (inkor)", w: ["isn't", "is not"], e: "milk sanalmaydi → <b>isn't</b>." }
    ],
    speak: ["There is a big park near my house.", "Are there any good restaurants here?", "There were a lot of people at the wedding."]
  },
  {
    id: "articles",
    murphy: "Unit 65–75",
    book: "Inside Out Elementary, Gateway A2",
    title: "a / an / the",
    intro: "O'zbek tilida artikl yo'q, shuning uchun bu mavzu ko'p xato qilinadi. <b>a/an</b> = bitta, qaysi biri muhim emas. <b>the</b> = aniq, ikkalamiz biladigan.",
    table: [
      ["a", "undosh tovush oldidan", "a book, a university, a car"],
      ["an", "unli tovush oldidan", "an apple, an hour, an egg"],
      ["the", "aniq narsa / yagona narsa", "the sun, the door, the book I bought"]
    ],
    tableHead: ["Artikl", "Qachon", "Misol"],
    rules: [
      "Kasb bilan doim <b>a/an</b>: <i>She is a doctor. I'm an engineer.</i>",
      "Birinchi marta aytilsa <b>a</b>, keyin <b>the</b>: <i>I saw a cat. The cat was black.</i>",
      "Umumiy ma'noda ko'plik va sanalmaydigan so'zlar artiklsiz: <i>I like music. Dogs are friendly.</i>",
      "Artiklsiz: <i>at home, at work, go to bed, by bus, breakfast, Uzbekistan, Tashkent</i>.",
      "<b>the</b> bilan: <i>the USA, the UK, the Amu Darya, the internet, play the piano</i>."
    ],
    examples: [
      ["I have a sister and a brother.", "Bitta opam va bitta akam bor."],
      ["Can you close the window?", "Derazani (shu derazani) yopa olasizmi?"],
      ["She is an English teacher.", "U ingliz tili o'qituvchisi."]
    ],
    quiz: [
      { q: "I'm ___ student.", o: ["a", "an", "the", "—"], a: 0, e: "Kasb/maqom, undosh → <b>a</b>." },
      { q: "She eats ___ apple every day.", o: ["a", "an", "the"], a: 1, e: "unli tovush → <b>an</b>." },
      { q: "We waited for ___ hour.", o: ["a", "an"], a: 1, e: "<i>hour</i> “aur” deb o'qiladi (h eshitilmaydi) → <b>an</b>." },
      { q: "Look at ___ moon!", o: ["a", "the", "—"], a: 1, e: "Yagona narsa → <b>the</b>." },
      { q: "I love ___ music.", o: ["the", "a", "—"], a: 2, e: "Umumiy ma'no → artiklsiz." },
      { q: "I bought a shirt and a jacket. ___ jacket was expensive.", o: ["A", "The"], a: 1, e: "Ikkinchi marta → <b>The</b>." },
      { q: "He goes to work by ___ bus.", o: ["a", "the", "—"], a: 2, e: "<b>by bus</b> — artiklsiz." },
      { q: "She can play ___ guitar.", o: ["a", "the", "—"], a: 1, e: "Musiqa asbobi → <b>the</b>." }
    ],
    speak: ["I'm an engineer.", "I saw a dog in the street. The dog was very big.", "Could you open the door, please?"]
  },
  {
    id: "countable",
    murphy: "Unit 67–69, 85–89",
    book: "Gateway A2",
    title: "Sanaladigan / sanalmaydigan: some, any, much, many",
    intro: "Ba'zi otlarni sanash mumkin (an apple, two apples), ba'zilarini yo'q (water, money, information, advice, bread).",
    table: [
      ["some", "ijobiy gap", "I have some money. There are some eggs."],
      ["any", "inkor va savol", "I don't have any money. Are there any eggs?"],
      ["many", "sanaladigan, ko'p", "How many books? not many friends"],
      ["much", "sanalmaydigan, ko'p", "How much water? not much time"],
      ["a lot of", "ikkalasi, ijobiy gapda", "a lot of people, a lot of time"]
    ],
    tableHead: ["So'z", "Qayerda", "Misol"],
    rules: [
      "Sanalmaydigan so'zlar ko'plik olmaydi: <i>informations, advices, furnitures</i> — xato!",
      "Taklif va so'rovda <b>some</b>: <i>Would you like some tea? Can I have some water?</i>",
      "Kam: <b>a few</b> (sanaladigan), <b>a little</b> (sanalmaydigan)."
    ],
    examples: [
      ["How much does it cost?", "Bu qancha turadi?"],
      ["There aren't many cars today.", "Bugun mashinalar ko'p emas."],
      ["Can you give me some advice?", "Menga maslahat bera olasizmi?"]
    ],
    quiz: [
      { q: "How ___ sugar do you want?", o: ["many", "much"], a: 1, e: "sugar sanalmaydi → <b>much</b>." },
      { q: "How ___ brothers do you have?", o: ["many", "much"], a: 0, e: "sanaladi → <b>many</b>." },
      { q: "I don't have ___ questions.", o: ["some", "any"], a: 1, e: "Inkor → <b>any</b>." },
      { q: "Would you like ___ coffee?", o: ["any", "some"], a: 1, e: "Taklif → <b>some</b>." },
      { q: "Qaysi biri to'g'ri?", o: ["She gave me good advices.", "She gave me some good advice."], a: 1, e: "<i>advice</i> ko'plik olmaydi." },
      { q: "I have ___ friends in London. (bir nechta)", o: ["a few", "a little"], a: 0, e: "sanaladigan → <b>a few</b>." }
    ],
    speak: ["How much is this?", "Would you like some tea?", "I don't have much free time."]
  },
  {
    id: "pronouns",
    murphy: "Unit 60–64",
    book: "Inside Out Elementary",
    title: "I / me / my / mine",
    intro: "Olmoshlarning to'rt shakli: kim (ega), kimni (to'ldiruvchi), kimning (+ ot), kimniki (yolg'iz).",
    table: [
      ["I", "me", "my", "mine"],
      ["you", "you", "your", "yours"],
      ["he", "him", "his", "his"],
      ["she", "her", "her", "hers"],
      ["we", "us", "our", "ours"],
      ["they", "them", "their", "theirs"]
    ],
    tableHead: ["Ega", "Kimni", "Kimning", "Kimniki"],
    rules: [
      "Fe'l va predlogdan keyin: <b>me, him, her, us, them</b>. <i>Call me. Come with us.</i>",
      "Egalik: <i>Ali's car</i> (Alining mashinasi), <i>my parents' house</i> (ota-onamning uyi)."
    ],
    examples: [
      ["This is my book. It's mine.", "Bu mening kitobim. U meniki."],
      ["I know her, but she doesn't know me.", "Men uni taniyman, lekin u meni tanimaydi."]
    ],
    quiz: [
      { q: "Can you help ___?", o: ["I", "me", "my"], a: 1, e: "Fe'ldan keyin → <b>me</b>." },
      { q: "This isn't your phone. It's ___.", o: ["my", "me", "mine"], a: 2, e: "Yolg'iz → <b>mine</b>." },
      { q: "They live with ___ parents.", o: ["their", "them", "theirs"], a: 0, e: "+ ot → <b>their</b>." },
      { q: "I don't like ___. He is rude.", o: ["he", "him", "his"], a: 1, e: "<b>him</b>." },
      { q: "Tarjima: “Akamning mashinasi” → my ___ car", w: ["brother's"], e: "<b>my brother's car</b>." }
    ],
    speak: ["This bag is mine.", "Can you call me tomorrow?", "Their house is next to ours."]
  },
  {
    id: "comparatives",
    murphy: "Unit 104–108",
    book: "Inside Out Elementary, Gateway A2",
    title: "Taqqoslash: bigger, more expensive, the best",
    intro: "Ikki narsani solishtirish (qiyosiy) va eng ... (orttirma daraja).",
    table: [
      ["Qisqa so'z", "cheap → cheaper (than)", "the cheapest"],
      ["-y bilan", "easy → easier", "the easiest"],
      ["Uzun so'z", "expensive → more expensive", "the most expensive"],
      ["Noto'g'ri", "good → better / bad → worse", "the best / the worst"]
    ],
    tableHead: ["Turi", "Qiyosiy", "Orttirma"],
    rules: [
      "Undosh ikkilanadi: <i>big → bigger, hot → hotter</i>.",
      "“...dan” = <b>than</b>: <i>Tashkent is bigger than Samarkand.</i>",
      "Teng: <b>as ... as</b>: <i>He is as tall as his father. It isn't as cold as yesterday.</i>",
      "<i>far → further/farther, the furthest</i>."
    ],
    examples: [
      ["English is easier than Chinese.", "Ingliz tili xitoy tilidan osonroq."],
      ["This is the best day of my life.", "Bu hayotimdagi eng yaxshi kun."],
      ["My phone is more expensive than yours.", "Mening telefonim siznikidan qimmatroq."]
    ],
    quiz: [
      { q: "big → ___", w: ["bigger"], e: "<b>bigger</b>." },
      { q: "Today is ___ than yesterday. (hot)", w: ["hotter"], e: "<b>hotter</b>." },
      { q: "This book is ___ than that one.", o: ["more interesting", "interestinger", "most interesting"], a: 0, e: "Uzun so'z → <b>more interesting</b>." },
      { q: "She is ___ student in the class.", o: ["the better", "the best", "best"], a: 1, e: "Orttirma → <b>the best</b>." },
      { q: "My English is ___ than last year.", o: ["gooder", "better", "more good"], a: 1, e: "good → <b>better</b>." },
      { q: "Ali is as tall ___ his brother.", o: ["than", "as", "like"], a: 1, e: "<b>as ... as</b>." },
      { q: "It's ___ city in the world.", o: ["the most beautiful", "the beautifulest", "more beautiful"], a: 0, e: "<b>the most beautiful</b>." }
    ],
    speak: ["My city is smaller than Tashkent.", "Summer is the best season.", "English is easier than I thought."]
  },
  {
    id: "prepositions",
    murphy: "Unit 103, 110–117",
    book: "Gateway A2",
    title: "Vaqt va joy predloglari: at / on / in",
    intro: "Uchta eng muhim predlog. Vaqt va joyda qoidalari bor.",
    table: [
      ["at", "at 7 o'clock, at night, at the weekend", "at home, at work, at the bus stop"],
      ["on", "on Monday, on 5 May, on my birthday", "on the table, on the wall, on the 2nd floor"],
      ["in", "in May, in 2025, in summer, in the morning", "in Tashkent, in the room, in a car"]
    ],
    tableHead: ["Predlog", "Vaqt", "Joy"],
    rules: [
      "Kichik, aniq nuqta → <b>at</b>; sirt, kun → <b>on</b>; ichida, katta davr → <b>in</b>.",
      "<i>next, last, this, every</i> oldidan predlog qo'yilmaydi: <i>I'll see you next week</i> (in next week emas)."
    ],
    examples: [
      ["I was born in 2004, on 12 March.", "Men 2004-yil 12-martda tug'ilganman."],
      ["The meeting is at 3 pm on Friday.", "Yig'ilish juma kuni soat 15 da."],
      ["My keys are on the table.", "Kalitlarim stol ustida."]
    ],
    quiz: [
      { q: "I get up ___ 6:30.", o: ["in", "on", "at"], a: 2, e: "Soat → <b>at</b>." },
      { q: "My birthday is ___ June.", o: ["in", "on", "at"], a: 0, e: "Oy → <b>in</b>." },
      { q: "See you ___ Monday!", o: ["in", "on", "at"], a: 1, e: "Kun → <b>on</b>." },
      { q: "She lives ___ Namangan.", o: ["in", "on", "at"], a: 0, e: "Shahar → <b>in</b>." },
      { q: "I study ___ night.", o: ["in", "on", "at"], a: 2, e: "<b>at night</b> (lekin <i>in the morning</i>)." },
      { q: "The picture is ___ the wall.", o: ["in", "on", "at"], a: 1, e: "Sirt → <b>on</b>." },
      { q: "I'm going to Moscow ___ next month.", o: ["in", "on", "—"], a: 2, e: "<i>next</i> oldidan predlog yo'q." }
    ],
    speak: ["I usually get up at seven in the morning.", "My birthday is on the twelfth of March.", "I live in a small flat in Tashkent."]
  },
  {
    id: "questions",
    murphy: "Unit 45–50",
    book: "Inside Out Elementary, Smart Topics",
    title: "Savol tuzish: who, what, where, how...",
    intro: "Speaking uchun eng kerakli mavzu: savol berish. Tartib: <b>So'roq so'z + yordamchi fe'l + kim + asosiy fe'l</b>.",
    table: [
      ["be", "Where are you from?", "Where is she?"],
      ["Present Simple", "What do you do?", "Where does he live?"],
      ["Past Simple", "When did you arrive?", "What did she say?"],
      ["can / will", "How can I help you?", "When will you come?"]
    ],
    tableHead: ["Zamon", "Misol 1", "Misol 2"],
    rules: [
      "So'roq so'zlar: <b>what</b> (nima), <b>where</b> (qayerda), <b>when</b> (qachon), <b>who</b> (kim), <b>why</b> (nega), <b>how</b> (qanday), <b>how much / how many</b> (qancha), <b>how often</b> (qanchalik tez-tez), <b>which</b> (qaysi), <b>whose</b> (kimning).",
      "<b>who</b> ega bo'lsa, yordamchi fe'l kerak emas: <i>Who lives here?</i> (Who does live emas)."
    ],
    examples: [
      ["How long have you been learning English?", "Ingliz tilini qancha vaqtdan beri o'rganyapsiz?"],
      ["Why are you laughing?", "Nega kulyapsan?"],
      ["How often do you go to the gym?", "Sport zaliga qanchalik tez-tez borasiz?"]
    ],
    quiz: [
      { q: "Where ___ you live?", o: ["are", "do", "does"], a: 1, e: "Present Simple, you → <b>do</b>." },
      { q: "What time ___ the film start?", o: ["do", "does", "is"], a: 1, e: "film = it → <b>does</b>." },
      { q: "___ did you go yesterday? — To the park.", o: ["Where", "Who", "Why"], a: 0, e: "Joy → <b>Where</b>." },
      { q: "___ is your favourite singer?", o: ["Who", "What", "Whose"], a: 0, e: "Shaxs → <b>Who</b>." },
      { q: "Qaysi biri to'g'ri?", o: ["Where you are from?", "Where are you from?", "Where do you are from?"], a: 1, e: "<b>Where are you from?</b>" },
      { q: "___ often do you read books?", w: ["how"], e: "<b>How often</b>." },
      { q: "Who ___ this cake? (make, o'tgan zamon)", o: ["did make", "made", "make"], a: 1, e: "who ega → <b>made</b>." }
    ],
    speak: ["Where are you from?", "What do you do in your free time?", "How long have you been learning English?", "Why did you choose this job?"]
  },
  {
    id: "linking",
    murphy: "Unit 113–118 (and, but, so, because, when, if)",
    book: "Smart Topics, Basic IELTS Speaking",
    title: "Gaplarni bog'lash: and, but, because, so, if, when",
    intro: "Speaking'da qisqa gaplar o'rniga bog'langan gaplar ishlatish javobingizni ancha yaxshilaydi.",
    table: [
      ["and", "va", "I like tea and I drink it every day."],
      ["but", "lekin", "It's small but very cosy."],
      ["because", "chunki", "I study English because I want to work abroad."],
      ["so", "shuning uchun", "I was tired, so I went to bed."],
      ["when", "...ganda", "When I was a child, I lived in a village."],
      ["if", "agar", "If it rains, we'll stay at home."]
    ],
    tableHead: ["So'z", "Ma'no", "Misol"],
    rules: [
      "<b>if</b> va <b>when</b> dan keyin kelasi zamon uchun ham Present Simple: <i>If it rains</i> (If it will rain emas).",
      "Speaking'da javobni kengaytirish formulasi: <b>Javob + sabab (because) + misol (for example)</b>."
    ],
    examples: [
      ["I like my job because my colleagues are friendly.", "Ishimni yoqtiraman, chunki hamkasblarim samimiy."],
      ["If I have time, I'll call you.", "Vaqtim bo'lsa, qo'ng'iroq qilaman."]
    ],
    quiz: [
      { q: "I was hungry, ___ I made a sandwich.", o: ["because", "so", "but"], a: 1, e: "Natija → <b>so</b>." },
      { q: "I'm learning English ___ I want to study abroad.", o: ["so", "because", "if"], a: 1, e: "Sabab → <b>because</b>." },
      { q: "The hotel was nice, ___ it was expensive.", o: ["and", "but", "so"], a: 1, e: "Qarama-qarshi → <b>but</b>." },
      { q: "If it ___ tomorrow, we'll go to the mountains.", o: ["will be sunny", "is sunny", "sunny"], a: 1, e: "if + Present Simple → <b>is sunny</b>." },
      { q: "___ I was young, I played football every day.", o: ["When", "If", "So"], a: 0, e: "Vaqt → <b>When</b>." }
    ],
    speak: ["I'm learning English because I want to study abroad.", "I was tired, so I stayed at home.", "If I have time, I'll call you.", "My flat is small, but it's very comfortable."]
  }
];
