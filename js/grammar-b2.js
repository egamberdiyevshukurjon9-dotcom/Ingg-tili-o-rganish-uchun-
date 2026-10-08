// B2 darajadagi grammatika darslari. Tartib English Grammar in Use (Murphy) unitlariga mos.
// Matnlar original: kitoblardan ko'chirilmagan, faqat mavzular tartibi olingan.
// Savol turlari: {q, o:[variantlar], a:to'g'ri indeks, e:izoh} yoki {q, w:[to'g'ri javoblar], e:izoh} (yozma javob).

window.GRAMMAR.push(...[
  {
    id: "b2-third-mixed-conditionals",
    level: "B2",
    murphy: "English Grammar in Use, Unit 38–40",
    book: "Basic IELTS Speaking, Cambridge IELTS 19",
    title: "Third conditional va mixed conditionals",
    intro: "<b>Third conditional</b> o'tmishda bo'lmagan, endi o'zgartirib bo'lmaydigan voqea haqida gapiradi: <b>If + had + V3, would have + V3</b>. O'zbekchadagi “...ganimda, ...gan bo'lardim” ga mos. <b>Mixed conditional</b> esa o'tmish va hozirni aralashtiradi.",
    table: [
      ["Third", "If I had studied,", "I would have passed."],
      ["Mixed (o'tmish → hozir)", "If I had taken the job,", "I would be rich now."],
      ["Mixed (hozir → o'tmish)", "If I were braver,", "I would have spoken to her."]
    ],
    tableHead: ["Turi", "If qismi", "Natija qismi"],
    rules: [
      "Third conditional: <b>If + had + V3</b>, natijada <b>would have + V3</b>: <i>If she had left earlier, she would have caught the train.</i>",
      "<b>would</b> o'rniga <b>could have / might have</b> ham bo'ladi: <i>If we had known, we could have helped.</i>",
      "If qismida <b>would</b> ishlatilmaydi: <i>If I had seen</i> (to'g'ri), <i>If I would have seen</i> (xato).",
      "Mixed: o'tmishdagi sabab → hozirgi natija: <i>If I hadn't missed the flight, I would be in London now.</i>",
      "Mixed: hozirgi doimiy holat → o'tmishdagi natija: <i>If he weren't so shy, he would have asked her out.</i>",
      "Rasmiy uslubda <b>if</b> tushib, inversiya qilinadi: <i>Had I known, I would have called.</i>"
    ],
    examples: [
      ["If I had known about the exam, I would have prepared.", "Imtihon haqida bilganimda, tayyorlangan bo'lardim."],
      ["If she hadn't helped me, I wouldn't have finished.", "U yordam bermaganida, men tugatmagan bo'lardim."],
      ["If I had learned English as a child, I would be fluent now.", "Bolaligimda ingliz tilini o'rganganimda, hozir ravon gapirgan bo'lardim."],
      ["Had we left on time, we wouldn't have missed the start.", "Vaqtida chiqqanimizda, boshlanishini o'tkazib yubormagan bo'lardik."]
    ],
    quiz: [
      { q: "If I ___ harder, I would have passed the test.", o: ["studied", "had studied", "would study"], a: 1, e: "Third conditional: If + <b>had + V3</b>." },
      { q: "If they had invited me, I ___ to the party.", o: ["would go", "would have gone", "had gone"], a: 1, e: "Natija o'tmishda: <b>would have gone</b>." },
      { q: "If I had saved money last year, I ___ a car now.", o: ["would have", "would have had", "had"], a: 0, e: "Mixed: o'tmish sabab, hozirgi natija (<i>now</i>) → <b>would have</b>." },
      { q: "If he ___ so lazy, he would have finished the project.", o: ["isn't", "weren't", "wouldn't be"], a: 1, e: "Hozirgi doimiy xususiyat → o'tmishdagi natija: <b>weren't</b>." },
      { q: "___ I known, I would have called you.", o: ["If", "Had", "Have"], a: 1, e: "Inversiya: <b>Had I known</b> = If I had known." },
      { q: "If we had taken a taxi, we ___ arrived on time. (balki)", o: ["might have", "might", "had"], a: 0, e: "Ehtimollik: <b>might have + V3</b>." },
      { q: "To'ldiring: If you had told me, I ___ ___ you. (help)", w: ["would have helped", "could have helped"], e: "<b>would have helped</b>." },
      { q: "To'ldiring: If she ___ ___ the bus, she wouldn't have been late. (not miss)", w: ["hadn't missed", "had not missed"], e: "If + <b>hadn't missed</b>." },
      { q: "Tarjima: “Bilganimda, kelgan bo'lardim.” (know, come)", w: ["if i had known, i would have come", "if i had known i would have come", "had i known, i would have come", "if i'd known, i would have come", "if i'd known, i'd have come"], e: "<b>If I had known, I would have come.</b>" }
    ],
    speak: ["If I had known, I would have helped you.", "If she hadn't missed the bus, she wouldn't have been late.", "If I had studied medicine, I would be a doctor now.", "Had we left earlier, we would have caught the train."]
  },
  {
    id: "b2-wish-if-only",
    level: "B2",
    murphy: "English Grammar in Use, Unit 39, 41, 61",
    book: "Basic IELTS Speaking, Multilevel Master",
    title: "wish / if only / I'd rather",
    intro: "<b>wish</b> va <b>if only</b> afsus va orzuni bildiradi. Muhim qoida: fe'l bir zamon “orqaga” suriladi. Hozir haqida afsus → Past Simple, o'tmish haqida afsus → Past Perfect. <b>I'd rather</b> esa “...ni afzal ko'raman” degani.",
    table: [
      ["Hozir haqida", "wish + Past Simple", "I wish I had more time."],
      ["O'tmish haqida", "wish + Past Perfect", "I wish I had listened."],
      ["Boshqaning harakatidan norozilik", "wish + would", "I wish you would stop talking."],
      ["Afzallik", "I'd rather + V1 / + sb + Past", "I'd rather stay. / I'd rather you stayed."]
    ],
    tableHead: ["Vaziyat", "Tuzilma", "Misol"],
    rules: [
      "Hozirgi holatdan afsus: <b>wish + Past Simple</b>: <i>I wish I lived near the sea.</i> (aslida yaqin yashamayman)",
      "<b>be</b> bilan rasmiy uslubda hamma shaxsda <b>were</b>: <i>I wish I were taller.</i>",
      "O'tmishdan afsus: <b>wish + had + V3</b>: <i>I wish I hadn't said that.</i>",
      "<b>wish + would</b> boshqa odamning harakatidan norozilikni bildiradi: <i>I wish it would stop raining.</i> O'zing haqida <i>I wish I would</i> deyilmaydi.",
      "<b>If only</b> = wish, lekin kuchliroq: <i>If only I had more money!</i>",
      "<b>I'd rather + V1</b> (o'zim haqimda), <b>I'd rather + kimdir + Past Simple</b> (boshqa odam haqida): <i>I'd rather you didn't smoke here.</i>"
    ],
    examples: [
      ["I wish I spoke English fluently.", "Qani endi ingliz tilida ravon gapirsam."],
      ["I wish I hadn't eaten so much.", "Shuncha ko'p yemaganimda edi."],
      ["If only I had listened to my teacher!", "Qani endi ustozimni tinglaganimda!"],
      ["I'd rather you didn't tell anyone.", "Hech kimga aytmasangiz yaxshi bo'lardi."]
    ],
    quiz: [
      { q: "I wish I ___ a car. Walking to work is tiring.", o: ["have", "had", "would have"], a: 1, e: "Hozir haqida afsus → <b>had</b> (Past Simple)." },
      { q: "I wish I ___ to the party yesterday. Everyone says it was great.", o: ["went", "had gone", "would go"], a: 1, e: "O'tmish → <b>had gone</b>." },
      { q: "I wish my neighbours ___ so much noise.", o: ["wouldn't make", "don't make", "hadn't make"], a: 0, e: "Boshqaning odatidan norozilik → <b>wouldn't make</b>." },
      { q: "If only I ___ taller!", o: ["am", "were", "will be"], a: 1, e: "<b>were</b> — hozirgi holat, barcha shaxslar uchun." },
      { q: "I'd rather ___ at home tonight.", o: ["stay", "to stay", "stayed"], a: 0, e: "O'zim haqimda: I'd rather + <b>V1</b>." },
      { q: "I'd rather you ___ me the truth.", o: ["tell", "told", "will tell"], a: 1, e: "Boshqa odam haqida: I'd rather + you + <b>Past Simple</b>." },
      { q: "To'ldiring: I wish I ___ ___ that. It was rude. (not say)", w: ["hadn't said", "had not said"], e: "O'tmishdagi afsus: <b>hadn't said</b>." },
      { q: "To'ldiring: I wish I ___ how to swim. (know)", w: ["knew"], e: "Hozirgi holat → <b>knew</b>." },
      { q: "Tarjima: “Qani endi ko'proq vaqtim bo'lsa.” (I wish)", w: ["i wish i had more time"], e: "<b>I wish I had more time.</b>" }
    ],
    speak: ["I wish I had more free time.", "If only I had listened to you!", "I wish it would stop raining.", "I'd rather you didn't call me so late."]
  },
  {
    id: "b2-future-perfect",
    level: "B2",
    murphy: "English Grammar in Use, Unit 23–24",
    book: "Basic IELTS Writing, IELTS Vocabulary",
    title: "Future Perfect va Future Perfect Continuous",
    intro: "Kelajakdagi ma'lum bir paytga qarab orqaga nazar tashlaymiz. <b>Future Perfect</b> (will have + V3) — o'sha paytgacha ish tugagan bo'ladi. <b>Future Perfect Continuous</b> (will have been + V-ing) — o'sha paytgacha qancha vaqt davom etgan bo'ladi.",
    table: [
      ["Future Perfect", "will have + V3", "By 2030, I will have graduated."],
      ["Future Perfect Continuous", "will have been + V-ing", "Next month I'll have been working here for a year."],
      ["Inkor", "won't have + V3", "They won't have arrived by 6."]
    ],
    tableHead: ["Zamon", "Tuzilma", "Misol"],
    rules: [
      "Ko'pincha <b>by</b> (…gacha) bilan keladi: <i>by Friday, by the end of the year, by the time you arrive</i>.",
      "Future Perfect natijaga e'tibor beradi: <i>I will have read the book by Monday.</i>",
      "Future Perfect Continuous davomiylikka e'tibor beradi va odatda <b>for</b> bilan keladi: <i>By June, she will have been teaching for ten years.</i>",
      "<b>by the time</b> dan keyin Present Simple: <i>By the time you get home, I'll have cooked dinner.</i> (<i>will get</i> emas)",
      "Holat fe'llari (know, own, believe) Continuous shaklda kelmaydi: <i>I'll have known him for 5 years.</i>",
      "IELTS Writing (Task 1) prognoz grafiklarida qulay: <i>By 2040, the population will have doubled.</i>"
    ],
    examples: [
      ["By the end of this course, you will have learned 2,000 new words.", "Bu kurs oxirigacha siz 2000 ta yangi so'z o'rgangan bo'lasiz."],
      ["Don't call at 8. We won't have finished dinner.", "Soat 8 da qo'ng'iroq qilma. Biz kechki ovqatni tugatmagan bo'lamiz."],
      ["In May, I'll have been living in Tashkent for three years.", "May oyida Toshkentda yashayotganimga uch yil bo'ladi."],
      ["By 2050, sales are expected to have tripled.", "2050-yilgacha savdo uch barobar oshgan bo'lishi kutilmoqda."]
    ],
    quiz: [
      { q: "By next Friday, I ___ the report.", o: ["will finish", "will have finished", "have finished"], a: 1, e: "“by next Friday” — o'sha paytgacha tugagan bo'ladi: <b>will have finished</b>." },
      { q: "By December, he ___ here for twenty years.", o: ["will have been working", "will work", "is working"], a: 0, e: "Davomiylik + for → <b>will have been working</b>." },
      { q: "By the time you ___, the film will have started.", o: ["will arrive", "arrive", "will have arrived"], a: 1, e: "<b>by the time</b> dan keyin Present Simple: <b>arrive</b>." },
      { q: "In 2027, they ___ each other for ten years.", o: ["will have been knowing", "will have known", "will know"], a: 1, e: "<b>know</b> holat fe'li — Continuous bo'lmaydi: <b>will have known</b>." },
      { q: "Don't worry, I ___ the dishes before your parents come.", o: ["will have washed", "have washed", "washed"], a: 0, e: "Kelajakdagi paytgacha → <b>will have washed</b>." },
      { q: "By 2035, the city's population ___ by 30%.", o: ["will have grown", "will have been grown", "has grown"], a: 0, e: "Natija: <b>will have grown</b>." },
      { q: "To'ldiring: By 10 pm, I ___ ___ ___ for eight hours. (study, continuous)", w: ["will have been studying", "'ll have been studying"], e: "<b>will have been studying</b>." },
      { q: "To'ldiring: They ___ ___ ___ by 6, so don't wait. (not arrive)", w: ["won't have arrived", "will not have arrived"], e: "<b>won't have arrived</b>." }
    ],
    speak: ["By the end of the year, I will have passed my exam.", "Next month, I'll have been learning English for two years.", "By the time you arrive, we'll have finished dinner.", "By 2040, the number of cars will have doubled."]
  },
  {
    id: "b2-advanced-passive",
    level: "B2",
    murphy: "English Grammar in Use, Unit 42–46",
    book: "Basic IELTS Writing, Longman Essay Activator",
    title: "Murakkab passiv: It is said that..., have something done",
    intro: "Akademik yozuvda kimning fikri ekanini aytmasdan umumiy fikrni berish uchun <b>It is said / believed / thought that...</b> va <b>He is said to...</b> tuzilmalari ishlatiladi. <b>have / get something done</b> esa ishni boshqa odamga qildirishni bildiradi.",
    table: [
      ["It + passiv + that", "It is believed that the drug is safe.", "Dori xavfsiz deb hisoblanadi."],
      ["Ega + passiv + to V1", "The drug is believed to be safe.", "(xuddi shu ma'no)"],
      ["Ega + passiv + to have V3", "He is said to have left the country.", "U mamlakatni tark etgan deyishadi."],
      ["have + narsa + V3", "I had my hair cut.", "Sochimni oldirdim."]
    ],
    tableHead: ["Tuzilma", "Misol", "Tarjima"],
    rules: [
      "<b>It is said / thought / reported / expected / believed + that</b> + to'liq gap.",
      "Egani boshiga olib chiqish: <b>Ega + is said + to V1</b> (hozirgi holat) yoki <b>to have + V3</b> (o'tmishdagi voqea).",
      "Davom etayotgan holat uchun: <b>to be + V-ing</b>: <i>The company is reported to be losing money.</i>",
      "<b>have something done</b>: ishni usta, xizmat ko'rsatuvchi qiladi: <i>We're having our kitchen painted.</i>",
      "<b>get something done</b> — xuddi shunday, so'zlashuvda ko'proq: <i>I need to get my phone repaired.</i>",
      "Yoqimsiz voqea uchun ham: <i>She had her bag stolen.</i> (Sumkasi o'g'irlandi.)"
    ],
    examples: [
      ["It is widely believed that exercise reduces stress.", "Jismoniy mashq stressni kamaytiradi, deb keng hisoblanadi."],
      ["The president is expected to arrive tomorrow.", "Prezident ertaga kelishi kutilmoqda."],
      ["The bridge is thought to have been built in 1800.", "Ko'prik 1800-yilda qurilgan deb taxmin qilinadi."],
      ["I'm going to have my eyes tested next week.", "Kelasi hafta ko'zimni tekshirtirmoqchiman."]
    ],
    quiz: [
      { q: "It ___ that the new law will reduce crime.", o: ["is hoped", "hopes", "is hoping"], a: 0, e: "It + passiv: <b>is hoped</b>." },
      { q: "The singer is said ___ in a small village.", o: ["live", "to live", "living"], a: 1, e: "Ega + is said + <b>to V1</b>." },
      { q: "The thief is believed ___ the country last night.", o: ["to leave", "to have left", "leaving"], a: 1, e: "O'tmishdagi voqea → <b>to have left</b>." },
      { q: "I ___ my car washed yesterday.", o: ["had", "did", "made"], a: 0, e: "<b>had</b> my car washed." },
      { q: "We need to get the roof ___.", o: ["repair", "repairing", "repaired"], a: 2, e: "get + narsa + <b>V3</b>." },
      { q: "The company is reported ___ a new phone at the moment.", o: ["to develop", "to be developing", "to have developed"], a: 1, e: "Hozir davom etayotgan ish → <b>to be developing</b>." },
      { q: "To'ldiring: She had her passport ___. (steal)", w: ["stolen"], e: "have + narsa + V3: <b>stolen</b>." },
      { q: "Qayta yozing: People say that he is very rich. → He ___ ___ ___ ___ very rich.", w: ["is said to be"], e: "<b>He is said to be very rich.</b>" },
      { q: "Tarjima: “Men sochimni oldirdim.” (have, cut)", w: ["i had my hair cut", "i got my hair cut"], e: "<b>I had my hair cut.</b>" }
    ],
    speak: ["It is widely believed that technology improves our lives.", "The museum is said to be the oldest in the city.", "I need to have my laptop repaired.", "She had her phone stolen on the bus."]
  },
  {
    id: "b2-past-modals",
    level: "B2",
    murphy: "English Grammar in Use, Unit 27–28, 30, 33",
    book: "Basic IELTS Speaking, Multilevel Master",
    title: "O'tmishdagi modal fe'llar: should have, could have, must have",
    intro: "Modal fe'l + <b>have + V3</b> o'tmish haqida taxmin, tanqid yoki afsusni bildiradi. Bu tuzilma IELTS Speaking'da tajriba haqida gapirganda juda foydali.",
    table: [
      ["must have + V3", "aniq taxmin (ijobiy)", "He must have forgotten."],
      ["can't / couldn't have + V3", "aniq taxmin (inkor)", "She can't have seen us."],
      ["may / might / could have + V3", "ehtimol", "They might have got lost."],
      ["should have + V3", "tanqid, afsus", "You should have asked."],
      ["could have + V3", "imkoniyat bor edi, lekin bo'lmadi", "I could have won."],
      ["needn't have + V3", "keraksiz ish qilindi", "You needn't have bought it."]
    ],
    tableHead: ["Tuzilma", "Ma'nosi", "Misol"],
    rules: [
      "<b>must have + V3</b> — dalilga asoslangan ishonchli xulosa: <i>The ground is wet. It must have rained.</i>",
      "<b>must have</b> ning inkori <b>can't have / couldn't have</b>, <i>mustn't have</i> emas.",
      "<b>should have + V3</b> — qilish kerak edi, lekin qilinmadi; <b>shouldn't have</b> — qilinmasligi kerak edi, lekin qilindi.",
      "<b>could have + V3</b> — imkoniyat bor edi, ishlatilmadi: <i>You could have told me!</i>",
      "<b>might/may have + V3</b> — aniq bilmaymiz: <i>She might have missed the train.</i>",
      "<b>needn't have + V3</b> — qilingan, lekin kerak emas edi. <b>didn't need to</b> — kerak bo'lmagan (odatda qilinmagan ham)."
    ],
    examples: [
      ["You look tired. You must have worked late.", "Charchagan ko'rinasan. Kech ishlagan bo'lsang kerak."],
      ["I should have studied more for the exam.", "Imtihonga ko'proq tayyorlanishim kerak edi."],
      ["He can't have stolen it. He was with me all day.", "U o'g'irlagan bo'lishi mumkin emas. Kun bo'yi men bilan edi."],
      ["We could have taken a taxi, but we walked.", "Taksiga o'tirsak bo'lardi, lekin piyoda yurdik."]
    ],
    quiz: [
      { q: "The lights are off. They ___ to bed.", o: ["must have gone", "should have gone", "must go"], a: 0, e: "Dalilga asoslangan xulosa: <b>must have gone</b>." },
      { q: "She ___ the email. She hasn't opened her laptop all day.", o: ["mustn't have read", "can't have read", "shouldn't have read"], a: 1, e: "Inkor taxmin: <b>can't have read</b>." },
      { q: "I failed the test. I ___ harder.", o: ["should have studied", "must have studied", "could study"], a: 0, e: "Afsus: <b>should have studied</b>." },
      { q: "You ___ me! I would have helped you.", o: ["could have told", "must have told", "can tell"], a: 0, e: "Imkoniyat bor edi: <b>could have told</b>." },
      { q: "I'm not sure where Ali is. He ___ the bus.", o: ["might have missed", "must miss", "should have missed"], a: 0, e: "Noaniq taxmin: <b>might have missed</b>." },
      { q: "You ___ so much food. Only three guests came.", o: ["needn't have cooked", "mustn't have cooked", "couldn't cook"], a: 0, e: "Pishirilgan, lekin kerak emas edi: <b>needn't have cooked</b>." },
      { q: "To'ldiring: You ___ ___ ___ so fast. It was dangerous. (not drive)", w: ["shouldn't have driven", "should not have driven"], e: "<b>shouldn't have driven</b>." },
      { q: "To'ldiring: The door is open. Somebody ___ ___ ___ it. (must, open)", w: ["must have opened"], e: "<b>must have opened</b>." },
      { q: "Tarjima: “Men senga qo'ng'iroq qilishim kerak edi.” (should)", w: ["i should have called you", "i should have phoned you", "i should've called you"], e: "<b>I should have called you.</b>" }
    ],
    speak: ["I should have started learning English earlier.", "She must have forgotten about the meeting.", "They can't have finished already.", "We could have won if we had trained harder."]
  },
  {
    id: "b2-reporting-verbs",
    level: "B2",
    murphy: "English Grammar in Use, Unit 47–48, 53–56",
    book: "Longman Essay Activator, Basic IELTS Writing",
    title: "Reporting verbs: suggest, deny, admit, accuse...",
    intro: "<b>said</b> o'rniga aniqroq fe'llar ishlatish nutqni boyitadi. Har bir fe'lning o'z tuzilmasi bor — ularni so'z bilan birga yodlash kerak.",
    table: [
      ["+ V-ing", "suggest, deny, admit, recommend", "He denied taking the money."],
      ["+ to V1", "agree, refuse, promise, offer, threaten", "She refused to help."],
      ["+ kimdir + to V1", "advise, warn, persuade, remind, encourage", "I advised him to rest."],
      ["+ predlog + V-ing", "accuse sb of, blame sb for, apologise for, insist on", "They accused me of lying."],
      ["+ that", "suggest, explain, admit, claim", "She suggested that we leave early."]
    ],
    tableHead: ["Tuzilma", "Fe'llar", "Misol"],
    rules: [
      "<b>suggest</b> dan keyin <i>to V1</i> kelmaydi: <i>He suggested going</i> yoki <i>He suggested that we (should) go</i>. (<i>suggested me to go</i> — xato)",
      "<b>deny / admit + V-ing</b>: <i>She admitted making a mistake.</i> O'tmishni ta'kidlash uchun <i>having + V3</i> ham bo'ladi.",
      "<b>accuse sb OF</b>, <b>blame sb FOR</b>, <b>apologise FOR</b>, <b>congratulate sb ON</b>, <b>insist ON</b> + V-ing.",
      "<b>advise, warn, remind, persuade</b> + kimdir + <b>to V1</b>; inkor: <i>warned me not to touch it</i>.",
      "<b>offer, refuse, promise, threaten, agree</b> + <b>to V1</b>: <i>He offered to drive me home.</i>",
      "<b>explain</b> dan keyin kimga deyilsa <b>to</b> kerak: <i>explain to me</i> (<i>explain me</i> — xato)."
    ],
    examples: [
      ["“I didn't break it.” → He denied breaking it.", "“Men sindirmadim.” → U sindirganini inkor qildi."],
      ["“Let's take a break.” → She suggested taking a break.", "“Dam olaylik.” → U dam olishni taklif qildi."],
      ["“You cheated!” → They accused him of cheating.", "“Sen aldading!” → Ular uni aldashda aybladi."],
      ["“Don't forget your keys.” → Mum reminded me to take my keys.", "“Kalitlaringni unutma.” → Onam kalitlarni olishni eslatdi."]
    ],
    quiz: [
      { q: "My teacher suggested ___ more English films.", o: ["to watch", "watching", "me to watch"], a: 1, e: "suggest + <b>V-ing</b>." },
      { q: "He denied ___ the window.", o: ["to break", "breaking", "that break"], a: 1, e: "deny + <b>V-ing</b>." },
      { q: "She accused me ___ her phone.", o: ["of taking", "for taking", "to take"], a: 0, e: "accuse sb <b>of</b> + V-ing." },
      { q: "The doctor advised me ___ sugar.", o: ["avoiding", "to avoid", "avoid"], a: 1, e: "advise + kimdir + <b>to V1</b>." },
      { q: "He refused ___ the question.", o: ["answering", "to answer", "for answering"], a: 1, e: "refuse + <b>to V1</b>." },
      { q: "They blamed the driver ___ the accident.", o: ["of", "for", "on"], a: 1, e: "blame sb <b>for</b>." },
      { q: "To'ldiring: She apologised ___ ___ late. (for, be)", w: ["for being"], e: "apologise <b>for being</b> late." },
      { q: "To'ldiring: He warned us ___ ___ swim there. (inkor)", w: ["not to"], e: "warn sb <b>not to</b> + V1." },
      { q: "Qayta yozing: “I took the money,” he said. → He admitted ___ the money.", w: ["taking", "having taken"], e: "admit + <b>taking</b> (yoki <i>having taken</i>)." }
    ],
    speak: ["She suggested meeting after work.", "He denied taking the money.", "They accused the manager of lying.", "My friend persuaded me to join the course."]
  },
  {
    id: "b2-relative-clauses",
    level: "B2",
    murphy: "English Grammar in Use, Unit 92–97",
    book: "Basic IELTS Writing, Longman Essay Activator",
    title: "Defining va non-defining relative clauses, qisqartirilgan shakllar",
    intro: "<b>Defining</b> (aniqlovchi) ergash gap qaysi odam yoki narsa haqida gapirayotganimizni aniqlaydi — usiz ma'no to'liq emas. <b>Non-defining</b> qo'shimcha ma'lumot beradi, vergul bilan ajratiladi va <b>that</b> ishlatilmaydi.",
    table: [
      ["Defining", "vergulsiz, that mumkin", "The man who/that lives next door is a pilot."],
      ["Non-defining", "vergul bilan, that mumkin emas", "My father, who is 60, still works."],
      ["Butun gapga ishora", ", which", "He passed the exam, which surprised everyone."],
      ["Qisqartirilgan (aktiv)", "V-ing", "People living here are friendly."],
      ["Qisqartirilgan (passiv)", "V3", "The car parked outside is mine."]
    ],
    tableHead: ["Turi", "Xususiyati", "Misol"],
    rules: [
      "Odam uchun <b>who</b>, narsa uchun <b>which</b>, egalik uchun <b>whose</b>, joy uchun <b>where</b>, vaqt uchun <b>when</b>.",
      "Defining gapda relative so'z <b>to'ldiruvchi</b> bo'lsa, tushirib qoldirish mumkin: <i>The book (that) I bought is great.</i>",
      "Non-defining gapda <b>that</b> ishlatilmaydi va relative so'z tushib qolmaydi: <i>Tashkent, which is the capital, is huge.</i>",
      "<b>, which</b> butun oldingi gapga ishora qilishi mumkin: <i>She didn't call, which was strange.</i>",
      "Rasmiy uslubda predlog oldinga chiqadi: <i>the person to whom I spoke</i>; miqdor bilan: <i>some of whom, most of which</i>.",
      "Qisqartirish: <i>who is waiting → waiting</i>, <i>which was built → built</i>: <i>The girl sitting there is my sister.</i>"
    ],
    examples: [
      ["The teacher who taught me English now works in London.", "Menga ingliz tilini o'rgatgan ustoz hozir Londonda ishlaydi."],
      ["Samarkand, which is over 2,500 years old, attracts many tourists.", "2500 yildan ortiq tarixga ega Samarqand ko'plab sayyohlarni jalb qiladi."],
      ["That's the woman whose son won the competition.", "Bu o'g'li musobaqada g'olib bo'lgan ayol."],
      ["Students taking the exam must bring their ID.", "Imtihon topshirayotgan talabalar shaxsiy guvohnomasini olib kelishi kerak."],
      ["Most of the houses built in the 1960s need repair.", "1960-yillarda qurilgan uylarning aksariyati ta'mirtalab."]
    ],
    quiz: [
      { q: "My brother, ___ lives in Seoul, is visiting us.", o: ["that", "who", "which"], a: 1, e: "Non-defining, odam → <b>who</b> (that mumkin emas)." },
      { q: "This is the hotel ___ we stayed last summer.", o: ["which", "where", "who"], a: 1, e: "Joy → <b>where</b>." },
      { q: "I met a man ___ car had broken down.", o: ["who", "whose", "which"], a: 1, e: "Egalik → <b>whose</b>." },
      { q: "He arrived two hours late, ___ annoyed everyone.", o: ["that", "what", "which"], a: 2, e: "Butun gapga ishora → <b>, which</b>." },
      { q: "Qaysi gapda relative so'zni tushirib qoldirish MUMKIN?", o: ["The man who called you is here.", "The film that we watched was boring.", "My mother, who is a doctor, is busy."], a: 1, e: "<b>that</b> to'ldiruvchi vazifasida: <i>The film we watched...</i>" },
      { q: "The people ___ in this building are very friendly.", o: ["live", "living", "lived"], a: 1, e: "who live → <b>living</b>." },
      { q: "To'ldiring: The bridge ___ in 1990 is now closed. (build, qisqa shakl)", w: ["built"], e: "which was built → <b>built</b>." },
      { q: "To'ldiring: I have two sisters, both of ___ are teachers.", w: ["whom"], e: "Predlogdan keyin odam uchun <b>whom</b>." },
      { q: "Tarjima: “Men bilgan qiz.” (the girl ... know, relative so'zsiz)", w: ["the girl i know", "the girl that i know", "the girl who i know", "the girl whom i know"], e: "<b>the girl I know</b>" }
    ],
    speak: ["The teacher who helped me most was very patient.", "Bukhara, which I visited last year, is beautiful.", "The man sitting next to me was reading a newspaper.", "That's the house where I grew up."]
  },
  {
    id: "b2-articles-quantifiers",
    level: "B2",
    murphy: "English Grammar in Use, Unit 72–79, 87–91",
    book: "IELTS Vocabulary, Ideas for IELTS Essay Topics (IELTS Liz)",
    title: "Murakkab artikl va miqdor so'zlari: the + sifat, few/a few, each/every, either/neither",
    intro: "B2 darajada artikl va miqdor so'zlarining nozik farqlari muhim: <b>the poor</b> (kambag'allar), <b>few</b> va <b>a few</b> orasidagi ma'no farqi, <b>each</b> va <b>every</b>, <b>either</b> va <b>neither</b>.",
    table: [
      ["the + sifat", "odamlar guruhi (ko'plik)", "the rich, the elderly, the unemployed"],
      ["a few / a little", "oz, lekin yetarli (ijobiy)", "I have a few friends here."],
      ["few / little", "juda oz, yetarli emas (salbiy)", "Few people understand it."],
      ["each", "har biri alohida (2 va undan ortiq)", "Each student has a book."],
      ["every", "hammasi birga (3 va undan ortiq)", "Every room has a TV."],
      ["either / neither", "ikkitadan biri / hech biri", "Neither answer is correct."]
    ],
    tableHead: ["Tuzilma", "Ma'nosi", "Misol"],
    rules: [
      "<b>the + sifat</b> odamlar guruhini bildiradi va ko'plikdagi fe'l oladi: <i>The elderly need more support.</i> (<i>the elderlies</i> — xato)",
      "<b>few / a few</b> sanaladigan otlar bilan, <b>little / a little</b> sanalmaydigan otlar bilan. Artiklsiz shakl “deyarli yo'q” degan salbiy ma'no beradi.",
      "<b>each</b> va <b>every</b> birlikdagi ot va birlikdagi fe'l bilan: <i>Every child needs love.</i> Ikki narsa uchun faqat <b>each</b>: <i>She had a ring on each hand.</i>",
      "<b>each of / either of / neither of + the/my + ko'plik ot</b>: <i>Each of the students...</i> <i>every of</i> deyilmaydi — <b>every one of</b> deyiladi.",
      "<b>either ... or</b> (yo ... yo), <b>neither ... nor</b> (na ... na): <i>Neither my brother nor my sister lives here.</i> Fe'l yaqinroq egaga moslashadi.",
      "Umumiy ma'noda artikl yo'q: <i>Education is important.</i> Aniq narsa haqida <b>the</b>: <i>The education I received was excellent.</i>"
    ],
    examples: [
      ["The government should do more to help the homeless.", "Hukumat uysizlarga yordam berish uchun ko'proq ish qilishi kerak."],
      ["Few people realise how serious the problem is.", "Muammo qanchalik jiddiy ekanini kam odam tushunadi."],
      ["I have a little money left, so we can get a coffee.", "Ozgina pulim qoldi, qahva olsak bo'ladi."],
      ["Each of the candidates has five minutes to speak.", "Har bir nomzodga gapirish uchun besh daqiqa beriladi."],
      ["You can pay either in cash or by card.", "Naqd yoki karta bilan to'lashingiz mumkin."]
    ],
    quiz: [
      { q: "___ young often use social media more than older people.", o: ["A", "The", "—"], a: 1, e: "Guruh: <b>the young</b>." },
      { q: "The unemployed ___ help to find new jobs.", o: ["needs", "need", "is needing"], a: 1, e: "the + sifat → ko'plik: <b>need</b>." },
      { q: "Don't worry, we still have ___ time before the train leaves.", o: ["a little", "little", "a few"], a: 0, e: "Sanalmaydigan, ijobiy ma'no → <b>a little</b>." },
      { q: "The lecture was so boring that ___ students stayed until the end.", o: ["a few", "few", "little"], a: 1, e: "Salbiy ma'no, sanaladigan → <b>few</b>." },
      { q: "He had a bag in ___ hand.", o: ["every", "each", "all"], a: 1, e: "Ikki qo'l → faqat <b>each</b>." },
      { q: "___ of my parents speaks English. They only speak Uzbek.", o: ["Either", "Neither", "Both"], a: 1, e: "Hech biri → <b>Neither</b>." },
      { q: "Qaysi gap TO'G'RI?", o: ["Every of the rooms has a view.", "Every one of the rooms has a view.", "Every rooms have a view."], a: 1, e: "<b>every one of</b> + ko'plik ot." },
      { q: "To'ldiring: You can ___ stay here or come with us.", w: ["either"], e: "<b>either ... or</b>." },
      { q: "To'ldiring: Neither Ali ___ Vali was at school today.", w: ["nor"], e: "<b>neither ... nor</b>." }
    ],
    speak: ["The government should provide more support for the elderly.", "Few people know the answer.", "Each of the students received a certificate.", "Neither option is perfect, but we have to choose."]
  },
  {
    id: "b2-linking-contrast",
    level: "B2",
    murphy: "English Grammar in Use, Unit 112–113",
    book: "Longman Essay Activator, Basic IELTS Writing, Ideas for IELTS Essay Topics (IELTS Liz)",
    title: "Bog'lovchilar: although, despite, whereas, however, nevertheless",
    intro: "IELTS Writing'da “Coherence and Cohesion” mezoni uchun qarama-qarshilik bildiruvchi so'zlarni to'g'ri ishlatish juda muhim. Asosiy farq — ulardan keyin <b>gap</b> keladimi yoki <b>ot / V-ing</b>.",
    table: [
      ["although / though / even though", "+ to'liq gap", "Although it was cold, we went out."],
      ["despite / in spite of", "+ ot yoki V-ing", "Despite the cold, we went out."],
      ["despite the fact that", "+ to'liq gap", "Despite the fact that it was cold, ..."],
      ["whereas / while", "+ gap (ikki narsani solishtirish)", "Cities are noisy, whereas villages are quiet."],
      ["However, / Nevertheless,", "yangi gap boshida, vergul bilan", "It was cold. However, we went out."]
    ],
    tableHead: ["So'z", "Keyin nima keladi", "Misol"],
    rules: [
      "<b>although</b> + ega + fe'l: <i>Although he was tired, he kept working.</i>",
      "<b>despite / in spite of</b> + ot yoki V-ing: <i>Despite being tired, he kept working.</i> (<i>despite of</i> — xato; <i>in spite</i> dan keyin <b>of</b> shart)",
      "<b>whereas / while</b> ikki faktni solishtiradi: <i>Some people prefer cities, whereas others prefer the countryside.</i>",
      "<b>However</b> va <b>Nevertheless</b> — gap ravishlari: odatda nuqta yoki nuqtali verguldan keyin, vergul bilan: <i>...; however, ...</i>",
      "<b>Nevertheless / Nonetheless</b> = shunga qaramay (kutilmagan natija): <i>The plan was risky. Nevertheless, it worked.</i>",
      "<b>On the other hand</b> — boshqa tomonni ko'rsatadi; <b>In contrast</b> — keskin farqni ko'rsatadi."
    ],
    examples: [
      ["Although technology has many benefits, it can also be harmful.", "Texnologiyaning ko'p foydasi bo'lsa-da, u zararli ham bo'lishi mumkin."],
      ["Despite the high cost, many families choose private schools.", "Narx yuqoriligiga qaramay, ko'p oilalar xususiy maktablarni tanlaydi."],
      ["Men spent more on sport, whereas women spent more on clothes.", "Erkaklar sportga ko'proq sarfladi, ayollar esa kiyimga."],
      ["Online learning is flexible. However, it requires strong self-discipline.", "Onlayn ta'lim moslashuvchan. Biroq u kuchli o'z-o'zini nazorat qilishni talab qiladi."]
    ],
    quiz: [
      { q: "___ the rain, the match continued.", o: ["Although", "Despite", "However"], a: 1, e: "Ot (the rain) → <b>Despite</b>." },
      { q: "___ she was ill, she went to work.", o: ["Despite", "In spite of", "Although"], a: 2, e: "To'liq gap → <b>Although</b>." },
      { q: "In spite ___ his age, he runs every day.", o: ["of", "—", "that"], a: 0, e: "<b>in spite of</b>." },
      { q: "Petrol prices rose, ___ electricity prices fell.", o: ["whereas", "despite", "however"], a: 0, e: "Ikki faktni solishtirish → <b>whereas</b>." },
      { q: "The hotel was expensive. ___, it was worth it.", o: ["Although", "Nevertheless", "Despite"], a: 1, e: "Yangi gap boshida → <b>Nevertheless</b>." },
      { q: "Despite ___ hard, he failed the test.", o: ["he studied", "studying", "to study"], a: 1, e: "despite + <b>V-ing</b>." },
      { q: "Qaysi gap TO'G'RI?", o: ["Despite of the noise, I slept.", "Although the noise, I slept.", "Despite the fact that it was noisy, I slept."], a: 2, e: "<b>despite the fact that</b> + gap." },
      { q: "To'ldiring: ___ ___ it was late, we continued talking. (even)", w: ["even though"], e: "<b>Even though</b> + gap." },
      { q: "Qayta yozing: Although he is rich, he is unhappy. → Despite ___ rich, he is unhappy.", w: ["being"], e: "Despite <b>being</b> rich." }
    ],
    speak: ["Although technology has many advantages, it also has drawbacks.", "Despite the high cost, many students study abroad.", "Some people prefer cities, whereas others prefer the countryside.", "The task was difficult. Nevertheless, we finished it on time."]
  },
  {
    id: "b2-participle-clauses",
    level: "B2",
    murphy: "English Grammar in Use, Unit 68, 97",
    book: "Basic IELTS Writing, Longman Essay Activator",
    title: "Sifatdosh oborotlari: Having finished..., Not knowing...",
    intro: "Sifatdosh oborotlari ikki gapni qisqa va ixcham birlashtiradi. Ular yozma nutqda, ayniqsa hikoya va esseda, ko'p ishlatiladi. Muhim qoida: oborot va asosiy gapning <b>egasi bir xil</b> bo'lishi kerak.",
    table: [
      ["V-ing", "bir vaqtda / sabab", "Feeling tired, I went to bed."],
      ["Having + V3", "oldin tugagan ish", "Having finished work, she went home."],
      ["Not + V-ing", "inkor sabab", "Not knowing the way, we asked for help."],
      ["V3 (passiv)", "passiv ma'no", "Built in 1900, the house needs repair."]
    ],
    tableHead: ["Shakl", "Ma'nosi", "Misol"],
    rules: [
      "Oborotning egasi asosiy gap egasi bilan bir xil bo'lishi shart. <i>Walking home, the rain started.</i> — xato (yomg'ir yurmaydi). To'g'ri: <i>Walking home, I got caught in the rain.</i>",
      "<b>Having + V3</b> — bir ish ikkinchisidan oldin tugaganini ko'rsatadi: <i>Having lost my keys, I couldn't get in.</i>",
      "Inkorda <b>not</b> oborot boshida turadi: <i>Not having enough money, he couldn't buy it.</i>",
      "Passiv ma'noda <b>V3</b>: <i>Written in simple English, the book is easy to read.</i> Oldin tugagan passiv: <b>Having been + V3</b>.",
      "Vaqt bog'lovchilari bilan ham: <b>after / before / while / since + V-ing</b>: <i>After graduating, she moved to Seoul.</i>",
      "Ma'nosi kontekstdan aniqlanadi: sabab (because), vaqt (when/after) yoki shart."
    ],
    examples: [
      ["Having read the instructions, I started the test.", "Ko'rsatmalarni o'qib bo'lgach, testni boshladim."],
      ["Not wanting to wake the baby, she spoke quietly.", "Chaqaloqni uyg'otmaslik uchun u sekin gapirdi."],
      ["Opened in 2015, the library is the largest in the region.", "2015-yilda ochilgan kutubxona viloyatdagi eng kattasi."],
      ["While waiting for the bus, I practised new words.", "Avtobusni kutayotib, yangi so'zlarni takrorladim."]
    ],
    quiz: [
      { q: "___ my homework, I went out with friends.", o: ["Having finished", "Finished", "Have finished"], a: 0, e: "Oldin tugagan ish → <b>Having finished</b>." },
      { q: "___ what to say, he stayed silent.", o: ["Not knowing", "Knowing not", "Didn't know"], a: 0, e: "Inkor: <b>Not knowing</b>." },
      { q: "___ in 1889, the Eiffel Tower is a symbol of Paris.", o: ["Building", "Built", "Having built"], a: 1, e: "Passiv ma'no → <b>Built</b>." },
      { q: "Qaysi gap TO'G'RI?", o: ["Driving to work, a dog ran across the road.", "Driving to work, I saw a dog run across the road.", "Driven to work, I saw a dog."], a: 1, e: "Ega bir xil bo'lishi kerak: <b>I</b> haydayapti." },
      { q: "___ the news, she started crying.", o: ["Heard", "Hearing", "To hear"], a: 1, e: "Bir vaqtda / sabab → <b>Hearing</b>." },
      { q: "After ___ university, he got a job in a bank.", o: ["leave", "leaving", "left"], a: 1, e: "after + <b>V-ing</b>." },
      { q: "To'ldiring: ___ ___ the film before, I knew the ending. (see)", w: ["having seen"], e: "<b>Having seen</b>." },
      { q: "Qisqartiring: Because I felt ill, I stayed at home. → ___ ill, I stayed at home.", w: ["feeling"], e: "<b>Feeling</b> ill, ..." }
    ],
    speak: ["Having finished my work, I went for a walk.", "Not knowing the answer, she asked her teacher.", "Built in the fifteenth century, the madrasah is very famous.", "While travelling around Uzbekistan, I met many interesting people."]
  },
  {
    id: "b2-causatives-verb-patterns",
    level: "B2",
    murphy: "English Grammar in Use, Unit 53–66",
    book: "Multilevel Master, Basic IELTS Speaking",
    title: "Causative va fe'l tuzilmalari: make / let / get someone do",
    intro: "Kimnidir biror ish qilishga majburlash, ruxsat berish yoki ko'ndirishda turli fe'llar turli tuzilma talab qiladi. Ayniqsa <b>make</b> va <b>let</b> dan keyin <b>to</b> ishlatilmaydi.",
    table: [
      ["make + kimdir + V1", "majburlash", "My boss made me work late."],
      ["let + kimdir + V1", "ruxsat berish", "Dad let me use his car."],
      ["have + kimdir + V1", "topshiriq berish", "I'll have my assistant call you."],
      ["get + kimdir + to V1", "ko'ndirish", "I got my friend to help me."],
      ["help + kimdir + (to) V1", "yordam berish", "She helped me (to) move."]
    ],
    tableHead: ["Tuzilma", "Ma'nosi", "Misol"],
    rules: [
      "<b>make / let + kimdir + V1</b> (to'siz): <i>They let us leave early.</i> (<i>let us to leave</i> — xato)",
      "Passivda <b>make</b> dan keyin <b>to</b> paydo bo'ladi: <i>We were made to wait.</i> <b>let</b> passivda ishlatilmaydi — <b>be allowed to</b> ishlatiladi.",
      "<b>get + kimdir + to V1</b> — ko'ndirish: <i>I finally got him to apologise.</i>",
      "<b>have + kimdir + V1</b> — xizmat yoki topshiriq: <i>I had the mechanic check the brakes.</i>",
      "Ma'no o'zgaradigan fe'llar: <b>remember / forget / stop / try + to V1 yoki V-ing</b>: <i>I stopped to buy coffee</i> (kofe olish uchun to'xtadim) / <i>I stopped buying coffee</i> (kofe olishni tashladim).",
      "<b>try to V1</b> — harakat qilmoq; <b>try V-ing</b> — sinab ko'rmoq: <i>Try drinking water if you have a headache.</i>"
    ],
    examples: [
      ["My parents made me study every evening.", "Ota-onam meni har kech o'qishga majbur qilardi."],
      ["The teacher let us use dictionaries in the test.", "O'qituvchi testda lug'atdan foydalanishga ruxsat berdi."],
      ["I couldn't get the printer to work.", "Printerni ishlata olmadim."],
      ["I remember visiting Khiva as a child.", "Bolaligimda Xivaga borganim esimda."],
      ["Remember to lock the door.", "Eshikni qulflashni unutmang."]
    ],
    quiz: [
      { q: "The film made me ___.", o: ["cry", "to cry", "crying"], a: 0, e: "make + kimdir + <b>V1</b>." },
      { q: "My parents don't let me ___ out after 10 pm.", o: ["to go", "go", "going"], a: 1, e: "let + kimdir + <b>V1</b>." },
      { q: "I finally got my brother ___ his room.", o: ["clean", "to clean", "cleaning"], a: 1, e: "get + kimdir + <b>to V1</b>." },
      { q: "We were made ___ for two hours.", o: ["wait", "to wait", "waiting"], a: 1, e: "Passivda make + <b>to V1</b>." },
      { q: "Students ___ use phones in class.", o: ["aren't let", "aren't allowed to", "don't let to"], a: 1, e: "let passivda yo'q → <b>aren't allowed to</b>." },
      { q: "I'll never forget ___ the Registan for the first time.", o: ["to see", "seeing", "see"], a: 1, e: "O'tmishdagi xotira → <b>forget + V-ing</b>." },
      { q: "On the way home, I stopped ___ some bread.", o: ["buying", "to buy", "buy"], a: 1, e: "Maqsad: to'xtadim, non olish uchun → <b>to buy</b>." },
      { q: "To'ldiring: He gave up sugar. He stopped ___ it. (eat)", w: ["eating"], e: "Odatni tashlash → <b>stopped eating</b>." },
      { q: "Tarjima: “U meni kutishga majbur qildi.” (make, wait)", w: ["he made me wait", "she made me wait"], e: "<b>He made me wait.</b>" }
    ],
    speak: ["My teacher made me rewrite the essay.", "My parents let me choose my own university.", "I finally got my friend to come with me.", "I'll never forget visiting Samarkand for the first time."]
  },
  {
    id: "b2-advanced-comparatives",
    level: "B2",
    murphy: "English Grammar in Use, Unit 104–108",
    book: "Basic IELTS Writing, Cambridge IELTS 19",
    title: "Murakkab qiyosiy daraja: the more... the more, far/much/slightly + comparative",
    intro: "Farq qanchalik katta yoki kichik ekanini aniq aytish IELTS Writing Task 1 uchun juda muhim. Shuningdek, <b>the + comparative, the + comparative</b> tuzilmasi ikki narsaning birga o'zgarishini bildiradi.",
    table: [
      ["Katta farq", "much / far / a lot / considerably", "far more expensive"],
      ["Kichik farq", "slightly / a bit / a little", "slightly higher"],
      ["Parallel o'zgarish", "the + comp., the + comp.", "The older I get, the wiser I become."],
      ["Ortib boruvchi", "comp. and comp.", "more and more popular"],
      ["Tenglik", "(not) as ... as / twice as ... as", "twice as big as"]
    ],
    tableHead: ["Ma'no", "Tuzilma", "Misol"],
    rules: [
      "Qiyosiy darajani kuchaytirish uchun <b>much, far, a lot, considerably, significantly</b>; <i>very</i> ishlatilmaydi: <i>much better</i> (<i>very better</i> — xato).",
      "Kichik farq uchun <b>slightly, a little, a bit, marginally</b>: <i>Sales were slightly lower in May.</i>",
      "<b>The + comparative ..., the + comparative ...</b>: <i>The more you practise, the more fluent you become.</i> Qisqa shakl: <i>The sooner, the better.</i>",
      "Doimiy o'zgarish: <b>-er and -er</b> yoki <b>more and more + sifat</b>: <i>It's getting colder and colder. English is becoming more and more important.</i>",
      "Martalab solishtirish: <b>twice / three times as + sifat + as</b> yoki <b>three times more + sifat + than</b>.",
      "Eng yuqori darajani kuchaytirish: <b>by far the best, easily the biggest</b>."
    ],
    examples: [
      ["The more books you read, the richer your vocabulary becomes.", "Qancha ko'p kitob o'qisang, so'z boyliging shuncha boyiydi."],
      ["Living in Tashkent is far more expensive than living in a village.", "Toshkentda yashash qishloqda yashashdan ancha qimmat."],
      ["The number of tourists was slightly higher in 2023 than in 2022.", "2023-yilda sayyohlar soni 2022-yilga qaraganda biroz ko'proq edi."],
      ["Online shopping is becoming more and more popular.", "Onlayn xarid tobora ommalashib bormoqda."],
      ["This phone is twice as fast as my old one.", "Bu telefon eskisidan ikki baravar tez."]
    ],
    quiz: [
      { q: "This exam was ___ harder than the last one.", o: ["very", "much", "more"], a: 1, e: "Kuchaytirish → <b>much</b> harder (very emas)." },
      { q: "The ___ you practise, the better you speak.", o: ["much", "more", "most"], a: 1, e: "<b>The more ..., the better ...</b>" },
      { q: "The price of rice was ___ higher in March than in February (only 1%).", o: ["far", "slightly", "much"], a: 1, e: "Kichik farq → <b>slightly</b>." },
      { q: "The weather is getting ___.", o: ["hot and hot", "hotter and hotter", "more hot and more hot"], a: 1, e: "<b>hotter and hotter</b>." },
      { q: "My new flat is twice ___ big ___ my old one.", o: ["as / as", "more / than", "so / that"], a: 0, e: "<b>twice as big as</b>." },
      { q: "She is ___ the best student in the class.", o: ["by far", "very", "much more"], a: 0, e: "Eng yuqori darajani kuchaytirish → <b>by far</b>." },
      { q: "To'ldiring: The sooner we leave, the ___ . (good)", w: ["better"], e: "<b>The sooner, the better.</b>" },
      { q: "To'ldiring: English is becoming ___ ___ ___ important. (more)", w: ["more and more"], e: "<b>more and more</b> important." },
      { q: "Tarjima: “Qancha ko'p ishlasang, shuncha ko'p topasan.” (work, earn)", w: ["the more you work, the more you earn", "the more you work the more you earn"], e: "<b>The more you work, the more you earn.</b>" }
    ],
    speak: ["The more you read, the more you learn.", "Life in the city is far more stressful than life in the countryside.", "The percentage of students rose slightly in 2020.", "Learning English is becoming more and more important."]
  }
]);
