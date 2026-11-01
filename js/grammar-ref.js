// Qo'shimcha grammatika darslari: G'apporov, Qosimova (2010) va Bo'ronov va boshq. (1974) kitoblaridagi mavzular asosida bo'shliqlarni to'ldiradi.
// Matnlar va misollar original: kitoblardan ko'chirilmagan, faqat mavzular ro'yxati va o'zbekcha atamalar olingan.

window.GRAMMAR.push(...[
  {
    id: "ref-nouns-plural-possessive",
    level: "A2",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Otlarda son; Faqat birlikda / faqat ko'plikda ishlatiladigan otlar; Otlarda kelishik",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Ot (son va kelishik kategoriyalari)",
    title: "Otlarda ko'plik va egalik kelishigi",
    intro: "Inglizchada ko'plik asosan <b>-s / -es</b> bilan yasaladi (o'zbekchadagi <i>-lar</i>), lekin bir guruh otlar <b>noto'g'ri</b> ko'plik shakliga ega: <i>child → children</i>. Ba'zi otlar faqat birlikda (<i>news, advice</i>), ba'zilari faqat ko'plikda (<i>scissors, trousers</i>) ishlatiladi. Egalik (qaratqich) kelishigi <b>'s</b> yoki <b>of</b> bilan beriladi: <i>Anvar's phone</i> — “Anvarning telefoni”.",
    table: [
      ["-s / -es / -ies / -ves", "book → books, box → boxes, city → cities, knife → knives", "oddiy va imlo o'zgarishlari"],
      ["Noto'g'ri ko'plik", "man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice, person → people", "yodlash kerak"],
      ["Birlik = ko'plik", "sheep, fish, deer, series, species", "one sheep, ten sheep"],
      ["Faqat birlik", "news, advice, information, furniture, luggage, money, homework", "is + some / a piece of"],
      ["Faqat ko'plik", "scissors, trousers, jeans, glasses, clothes, police, goods", "are + a pair of"]
    ],
    tableHead: ["Turi", "Misollar", "Eslatma"],
    rules: [
      "Imlo: <b>-s, -ss, -sh, -ch, -x, -o</b> bilan tugasa <b>-es</b>: <i>buses, dishes, watches, potatoes</i> (lekin <i>photos, pianos</i>). Undosh + <b>y</b> → <b>-ies</b>: <i>family → families</i>; unli + y → faqat -s: <i>day → days</i>.",
      "<b>news, advice, information, furniture</b> sanalmaydi: <i>The news <b>is</b> good. She gave me some advice</i> (an advice / advices emas). Bitta bo'lagini aytish uchun: <i>a piece of advice, an item of news</i>.",
      "<b>scissors, trousers, glasses</b> doim ko'plik: <i>My glasses <b>are</b> broken.</i> Sanash uchun: <i>two pairs of jeans</i>. <b>police</b> ham ko'plik fe'l oladi: <i>The police <b>are</b> coming.</i>",
      "Egalik: shaxs va hayvonlarda <b>'s</b>: <i>my sister's room</i>; -s bilan tugagan ko'plikda faqat apostrof: <i>my parents' house</i>; noto'g'ri ko'plikda <b>'s</b>: <i>children's toys</i>.",
      "Jonsiz narsalarda odatda <b>of</b>: <i>the end of the film, the roof of the house</i>. Vaqt va masofada 's ishlaydi: <i>today's newspaper, a ten minutes' walk</i>.",
      "Ikki egada: birgalikda — oxirgisiga 's (<i>Ali and Vali's flat</i> — ikkalasiniki bitta); alohida — har biriga (<i>Ali's and Vali's cars</i>)."
    ],
    examples: [
      ["The children's books are on the shelf.", "Bolalarning kitoblari javonda."],
      ["Can you give me some advice about universities?", "Universitetlar haqida menga maslahat bera olasizmi?"],
      ["My grandparents' house is in Namangan.", "Bobom va buvimning uyi Namanganda."],
      ["I bought two pairs of trousers at the bazaar.", "Bozordan ikkita shim sotib oldim."],
      ["The news was really surprising.", "Yangilik haqiqatan ham kutilmagan bo'ldi."]
    ],
    quiz: [
      { q: "There are three ___ in the garden.", o: ["sheeps", "sheep", "sheepes"], a: 1, e: "<b>sheep</b> — birlik va ko'plik bir xil." },
      { q: "The news ___ very good today.", o: ["are", "were", "is"], a: 2, e: "<b>news</b> — sanalmaydi, birlik fe'l: <b>is</b>." },
      { q: "My jeans ___ too long.", o: ["are", "is", "was"], a: 0, e: "<b>jeans</b> — faqat ko'plik: <b>are</b>." },
      { q: "She gave me ___ useful advice.", o: ["an", "some", "many"], a: 1, e: "advice sanalmaydi → <b>some</b> advice." },
      { q: "This is my ___ room. (ikki akam bitta xonada)", o: ["brother's", "brothers's", "brothers'"], a: 2, e: "-s bilan tugagan ko'plik → faqat apostrof: <b>brothers'</b>." },
      { q: "Which is correct?", o: ["the leg of the table", "the table's leg of", "the leg's table"], a: 0, e: "Jonsiz narsa → odatda <b>of</b>: the leg of the table." },
      { q: "Ko'plik shakli: tooth → ___", w: ["teeth"], e: "tooth → <b>teeth</b>." },
      { q: "Ko'plik shakli: knife → ___", w: ["knives"], e: "-fe → <b>-ves</b>: knives." },
      { q: "Ko'plik shakli: city → ___", w: ["cities"], e: "undosh + y → <b>-ies</b>: cities." },
      { q: "Tarjima: “bolalarning o'yinchoqlari” (children, toys)", w: ["children's toys", "the children's toys"], e: "Noto'g'ri ko'plik + 's: <b>children's toys</b>." }
    ],
    speak: ["My parents' house is near the river.", "Can I give you a piece of advice?", "The police are looking for the driver.", "Women and children sat on the left."]
  },
  {
    id: "ref-numbers-dates",
    level: "A2",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Son",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Son (sanoq va tartib sonlar)",
    title: "Sonlar, sanalar va kasrlar",
    intro: "Sanoq sonlar (<b>cardinal</b>: one, two) miqdorni, tartib sonlar (<b>ordinal</b>: first, second) tartibni bildiradi — o'zbekchadagi <i>bir / birinchi</i>. Sanalar, yillar, kasrlar va foizlarni to'g'ri o'qish <b>IELTS Listening</b> (telefon raqami, sana yozish) va <b>Writing Task 1</b> (grafik tasvirlash) uchun juda muhim.",
    table: [
      ["Tartib son", "1st first, 2nd second, 3rd third, 5th fifth, 12th twelfth, 21st twenty-first", "ko'pincha -th"],
      ["Sana (UK)", "15 March 2025 → “the fifteenth of March”", "kun + oy"],
      ["Sana (US)", "March 15, 2025 → “March fifteenth”; 3/15/2025", "oy + kun"],
      ["Yil", "1999 → nineteen ninety-nine; 2008 → two thousand and eight; 2025 → twenty twenty-five", "ikkitadan o'qiladi"],
      ["Kasr / o'nli", "½ a half, ⅓ a third, ¾ three quarters, 2.5 two point five", "o'nlida nuqta = point"],
      ["Foiz", "45% forty-five per cent", "per cent (UK) / percent (US)"]
    ],
    tableHead: ["Turi", "Misol", "Eslatma"],
    rules: [
      "Katta sonlarda (UK) yuzlikdan keyin <b>and</b>: <i>365 — three hundred <b>and</b> sixty-five</i>. <b>hundred, thousand, million</b> sondan keyin -s olmaydi: <i>two thousand people</i> (two thousands emas). Lekin aniq son bo'lmasa: <i>thousands of people</i>.",
      "Sanaga predlog: <b>on</b> + kun (<i>on 9 May</i>), <b>in</b> + oy/yil (<i>in May, in 1991</i>). Yozishda “9 May”, gapirishda “the ninth of May”.",
      "Kasrda surat sanoq son, maxraj tartib son: <i>⅖ two fifths</i> (surat 1 dan katta bo'lsa maxraj -s oladi). Aralash: <i>1½ one and a half</i>.",
      "O'nli kasrda vergul emas, <b>nuqta</b> (point) ishlatiladi: <i>3.75 — three point seven five</i>. O'zbekchadagi “3,75” bilan adashtirmang! Mingliklar esa vergul bilan: <i>12,500</i>.",
      "Telefon raqamlari bittadan o'qiladi, <b>0</b> — “oh” yoki “zero”, ikki bir xil raqam — <b>double</b>: <i>90 133 44 — nine oh, one double three, double four</i>.",
      "IELTS Task 1: <i>a quarter of, nearly a third of, the majority (over 50%), a fraction of</i>; foiz ot sifatida: <i>The percentage of students rose</i>."
    ],
    examples: [
      ["Independence Day in Uzbekistan is on the first of September.", "O'zbekistonda Mustaqillik kuni 1-sentabrda."],
      ["About three quarters of the students passed the exam.", "Talabalarning qariyb to'rtdan uch qismi imtihondan o'tdi."],
      ["My number is nine nine, eight double seven, one oh four.", "Mening raqamim 99 877 104."],
      ["The price rose by 2.5 per cent in 2024.", "2024-yilda narx 2,5 foizga oshdi."],
      ["Thousands of tourists visit Bukhara every year.", "Har yili minglab sayyohlar Buxoroga keladi."]
    ],
    quiz: [
      { q: "The meeting is ___ 21 June.", o: ["in", "on", "at"], a: 1, e: "Aniq sana → <b>on</b>." },
      { q: "Over two ___ people came to the concert.", o: ["thousand", "thousands", "thousands of"], a: 0, e: "Aniq son bilan <b>thousand</b> -s olmaydi." },
      { q: "How do you say 0.6 in English?", o: ["zero comma six", "nought point six", "six zero"], a: 1, e: "O'nli kasr: <b>(nought / zero) point six</b>." },
      { q: "How do you read 2/3?", o: ["two thirds", "two three", "second third"], a: 0, e: "Surat sanoq, maxraj tartib son + s: <b>two thirds</b>." },
      { q: "How do you usually read the year 1985?", o: ["one thousand nine eighty-five", "nineteen eighty-five", "nineteen hundred eighty-five"], a: 1, e: "Yillar ikkitadan: <b>nineteen eighty-five</b>." },
      { q: "In the US, 4/7/2025 means ___.", o: ["4 July", "7 April", "both"], a: 1, e: "AQShda oy birinchi: <b>April 7</b>." },
      { q: "Tartib son: 3 → ___ (so'z bilan)", w: ["third"], e: "3rd = <b>third</b>." },
      { q: "Tartib son: 12 → ___ (so'z bilan)", w: ["twelfth"], e: "12th = <b>twelfth</b> (-ve emas, -f)." },
      { q: "So'z bilan yozing: 50% → fifty ___", w: ["per cent", "percent"], e: "<b>per cent</b> (UK) / <b>percent</b> (US)." }
    ],
    speak: ["My birthday is on the twenty-second of August.", "Nearly half of the population lives in cities.", "It costs three hundred and fifty thousand soums.", "The figure rose to seventy-five per cent in twenty twenty."]
  },
  {
    id: "ref-reflexive-other-one",
    level: "A2",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — O'zlik olmoshlari; Birgalik olmoshlari; Other olmoshi; One olmoshi",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Olmosh (o'zlik, birgalik, gumon olmoshlari)",
    title: "O'zlik va birgalik olmoshlari; one, other, another",
    intro: "<b>O'zlik olmoshlari</b> (myself, yourself...) harakat egasining o'ziga qaytganini bildiradi — o'zbekchadagi <i>o'zim, o'zing, o'zi</i>. <b>Birgalik olmoshlari</b> (each other, one another) — “bir-biri”. <b>one/ones</b> otni takrorlamaslik uchun, <b>other/another</b> esa “boshqa” ma'nosida keladi.",
    table: [
      ["I → myself", "you → yourself / yourselves", "he → himself, she → herself, it → itself"],
      ["we → ourselves", "they → themselves", "one → oneself"],
      ["each other / one another", "bir-biri", "They love each other."],
      ["another + birlik ot", "yana bitta / boshqa bitta", "another cup"],
      ["other + ko'plik ot / others", "boshqa(lar)", "other people / Some like tea, others prefer coffee."],
      ["the other / the others", "(ikkitadan) qolgan biri / qolganlari", "One is red, the other is blue."]
    ],
    tableHead: ["Shakl", "Ma'nosi", "Misol"],
    rules: [
      "Ega va to'ldiruvchi bir kishi bo'lsa — o'zlik olmoshi: <i>I cut <b>myself</b>. Enjoy <b>yourselves</b>!</i> Ta'kid uchun ham: <i>I made it <b>myself</b></i> — “O'zim yasadim”. <b>by myself</b> = yolg'iz, yordamsiz.",
      "<b>wash, shave, dress, feel, relax, concentrate</b> fe'llari bilan odatda o'zlik olmoshi kerak emas: <i>I got up and washed</i>; <i>I feel tired</i> (I feel myself emas — o'zbekchadan tarjima xatosi).",
      "<b>themselves</b> va <b>each other</b> farqi: <i>They looked at themselves</i> (har biri o'zini ko'zguda ko'rdi) — <i>They looked at each other</i> (bir-biriga qarashdi).",
      "<b>one / ones</b> otni takrorlamaslik uchun: <i>I don't like this shirt. Show me the blue <b>one</b>. These shoes are nicer than the old <b>ones</b>.</i>",
      "<b>another</b> = an + other, faqat birlik bilan (another books emas). <b>other</b> ot oldidan -s olmaydi (<i>other students</i>), ot o'rnida kelsa <b>others</b>: <i>Some students walked, others took a taxi.</i>",
      "<b>the other</b> — ikkitadan qolgan bittasi; <b>the others</b> — qolgan hammasi: <i>Two of my friends came; the others stayed at home.</i>"
    ],
    examples: [
      ["My little brother can dress himself now.", "Ukam endi o'zi kiyina oladi."],
      ["Aziza and Malika have known each other since school.", "Aziza va Malika maktabdan beri bir-birini taniydi."],
      ["Would you like another piece of non?", "Yana bir bo'lak non olasizmi?"],
      ["I have two sisters: one is a doctor, the other is a teacher.", "Ikki opam bor: biri shifokor, ikkinchisi o'qituvchi."],
      ["This melon is too small. Can I have a bigger one?", "Bu qovun juda kichik. Kattarog'ini olsam bo'ladimi?"]
    ],
    quiz: [
      { q: "Be careful! You'll hurt ___.", o: ["you", "yourself", "yours"], a: 1, e: "Ega va to'ldiruvchi bir kishi → <b>yourself</b>." },
      { q: "We enjoyed ___ at the party.", o: ["ourselves", "us", "ourself"], a: 0, e: "we → <b>ourselves</b>." },
      { q: "Ali and Laylo help ___ with homework.", o: ["themselves", "each other", "himself"], a: 1, e: "Bir-biriga yordam → <b>each other</b>." },
      { q: "I feel ___ today.", o: ["myself tired", "tired", "tired myself"], a: 1, e: "feel bilan o'zlik olmoshi kerak emas: <b>I feel tired</b>." },
      { q: "Can I have ___ cup of tea, please?", o: ["other", "another", "others"], a: 1, e: "Yana bitta (birlik) → <b>another</b>." },
      { q: "Some people like summer; ___ prefer winter.", o: ["another", "other", "others"], a: 2, e: "Ot o'rnida ko'plik → <b>others</b>." },
      { q: "I've got two bags. One is black and ___ is brown.", o: ["another", "the other", "other"], a: 1, e: "Ikkitadan qolgan biri → <b>the other</b>." },
      { q: "To'ldiring: She did the work by ___. (o'zi, yordamsiz)", w: ["herself"], e: "by <b>herself</b> — o'zi, yolg'iz." },
      { q: "To'ldiring: These apples are better than the green ___.", w: ["ones"], e: "Ko'plik otni takrorlamaslik uchun <b>ones</b>." }
    ],
    speak: ["I taught myself to play the dutar.", "We should help each other more.", "Can I try another one?", "Some students agreed, but others didn't."]
  },
  {
    id: "ref-adjective-order",
    level: "B1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Sifatlarning gapdagi o'rni; Sifatlarning otlashishi; Otlarning sifatga o'xshab ishlatilishi",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Sifat",
    title: "Sifatlar tartibi va otlashgan sifatlar",
    intro: "Bir nechta sifat ot oldida kelsa, inglizchada <b>qat'iy tartib</b> bor: avval fikr (<i>beautiful</i>), keyin o'lcham, yosh, shakl, rang, kelib chiqish, material, maqsad. O'zbekchada tartib erkinroq, shuning uchun bu ko'p xato beriladigan joy. Shuningdek, <b>the + sifat</b> butun guruhni bildiradi (<i>the rich</i> — boylar), <b>-ed / -ing</b> sifatlar esa his-tuyg'u va sababni farqlaydi.",
    table: [
      ["1 Opinion (fikr)", "lovely, nice, ugly", "a lovely..."],
      ["2 Size (o'lcham)", "big, small, tall", "...small..."],
      ["3 Age (yosh)", "old, new, young", "...old..."],
      ["4 Shape (shakl)", "round, square", "...round..."],
      ["5 Colour → 6 Origin → 7 Material", "red; Uzbek, Chinese; wooden, silk", "...red Uzbek silk..."],
      ["8 Purpose (maqsad) + OT", "dining, sleeping, running", "...dining table"]
    ],
    tableHead: ["Tartib", "Misollar", "Zanjir"],
    rules: [
      "Tartib: <b>opinion – size – age – shape – colour – origin – material – purpose + ot</b>: <i>a beautiful old Uzbek carpet; a big round wooden table</i>. Odatda ot oldida 2–3 sifatdan ko'p ishlatilmaydi.",
      "Fikr sifatlari (nice, terrible) faktlardan oldin turadi: <i>a <b>nice</b> new car</i> (a new nice car emas).",
      "<b>the + sifat</b> = shu xususiyatli odamlar guruhi, ko'plik fe'l oladi: <i>The elderly <b>need</b> support. The rich, the poor, the young, the unemployed.</i> “the poors” deyilmaydi! Bitta odam uchun: <i>a poor man</i>.",
      "Millat sifatlari ham shunday: <i>the French, the British, the Chinese</i> = o'sha xalq. Lekin <i>Uzbeks, Americans</i> oddiy ko'plik ot.",
      "<b>-ed</b> = odam nima his qiladi; <b>-ing</b> = narsa qanday ta'sir qiladi: <i>I'm <b>bored</b>. The lesson is <b>boring</b>.</i> Shuningdek: interested/interesting, tired/tiring, surprised/surprising.",
      "Ot ham sifat vazifasida keladi (birlikda): <i>a <b>bus</b> stop, a <b>ten-year-old</b> boy, a <b>five-star</b> hotel</i> (ten-years-old emas)."
    ],
    examples: [
      ["She bought a beautiful red silk scarf in Margilan.", "U Marg'ilondan chiroyli qizil ipak ro'mol sotib oldi."],
      ["The government should do more for the elderly.", "Hukumat keksalar uchun ko'proq ish qilishi kerak."],
      ["The film was so boring that I fell asleep.", "Film shunchalik zerikarli ediki, uxlab qoldim."],
      ["We had dinner at a small old family restaurant.", "Kichkina eski oilaviy restoranda kechki ovqat qildik."],
      ["My cousin is a twelve-year-old boy.", "Amakivachcham o'n ikki yoshli bola."]
    ],
    quiz: [
      { q: "Which is correct?", o: ["a wooden big old table", "a big old wooden table", "an old wooden big table"], a: 1, e: "size – age – material: <b>big old wooden</b>." },
      { q: "Which is correct?", o: ["a nice new car", "a new nice car", "a car nice new"], a: 0, e: "Fikr birinchi: <b>nice new</b>." },
      { q: "Which is correct?", o: ["a silk blue Uzbek dress", "a blue Uzbek silk dress", "an Uzbek blue silk dress"], a: 1, e: "colour – origin – material: <b>blue Uzbek silk</b>." },
      { q: "The rich ___ getting richer.", o: ["is", "are", "has"], a: 1, e: "<b>the + sifat</b> = guruh, ko'plik: <b>are</b>." },
      { q: "I was very ___ by the news.", o: ["surprising", "surprised", "surprise"], a: 1, e: "Odam his qiladi → <b>-ed</b>: surprised." },
      { q: "This book is really ___.", o: ["interested", "interest", "interesting"], a: 2, e: "Narsaning ta'siri → <b>-ing</b>." },
      { q: "We stayed in a ___ hotel.", o: ["five-stars", "five-star", "five star's"], a: 1, e: "Sifat vazifasidagi son+ot birlikda: <b>five-star</b>." },
      { q: "To'ldiring: Society should help the ___ (kambag'allar).", w: ["poor"], e: "<b>the poor</b> — -s olmaydi." },
      { q: "To'ldiring: I'm so ___ (tire) after this ___ (tire) journey. (ikki so'zni vergul bilan)", w: ["tired, tiring", "tired,tiring", "tired tiring"], e: "Men <b>tired</b>, safar <b>tiring</b>." }
    ],
    speak: ["I've got a lovely old Uzbek carpet at home.", "The young often find it hard to buy a house.", "That documentary was really fascinating.", "He's a twenty-year-old student from Fergana."]
  },
  {
    id: "ref-adverbs",
    level: "B1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Ravishlarning turlari; Ravish shakllari; Ravishlarning gapdagi o'rni",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Ravish; Sintaksis: Holning gapdagi o'rni",
    title: "Ravishlar: yasalishi va gapdagi o'rni",
    intro: "Ravish fe'lni (<i>drive <b>carefully</b></i>), sifatni (<i><b>really</b> good</i>) yoki butun gapni tasvirlaydi. Ko'pchilik ravish sifatga <b>-ly</b> qo'shib yasaladi (o'zbekchadagi <i>-cha, -ona</i> yoki “...ravishda”). Ba'zi juftlarda ma'no butunlay o'zgaradi: <b>hard</b> (qattiq) va <b>hardly</b> (deyarli ... emas). Gapdagi o'rni ham o'zbekchadan farq qiladi.",
    table: [
      ["Sifat + ly", "quick → quickly, careful → carefully, easy → easily", "happy → happily (y → i)"],
      ["Bir xil shakl", "fast, hard, late, early, high, straight", "He drives fast. (fastly emas)"],
      ["good → well", "She is a good singer. She sings well.", "well sifat bo'lsa = sog'"],
      ["hard / hardly", "work hard = qattiq ishlamoq; hardly = deyarli ... emas", "I hardly slept."],
      ["late / lately", "come late = kech kelmoq; lately = so'nggi paytda", "Have you seen him lately?"],
      ["near / nearly; high / highly", "nearly = deyarli; highly = juda (highly recommended)", ""]
    ],
    tableHead: ["Turi", "Misollar", "Eslatma"],
    rules: [
      "Fe'l bilan <b>ravish</b>, bog'lovchi fe'l (be, look, feel, seem, taste, smell) bilan <b>sifat</b>: <i>She looks <b>happy</b></i> (happily emas), lekin <i>She smiled <b>happily</b></i>.",
      "Takrorlanish ravishlari (always, usually, often, sometimes, never) — asosiy fe'ldan <b>oldin</b>, lekin <b>be</b> va yordamchi fe'ldan <b>keyin</b>: <i>I <b>often</b> drink tea. She <b>is always</b> late. I <b>have never</b> been to London.</i>",
      "Ravish fe'l va to'ldiruvchi orasiga qo'yilmaydi: <i>She speaks English <b>very well</b></i> (She speaks very well English emas — o'zbekcha tartibdan kelib chiqadigan xato).",
      "Gap oxirida tartib: <b>tarz – joy – vaqt</b> (manner – place – time): <i>He worked <b>hard</b> <b>at the office</b> <b>yesterday</b>.</i> Harakat fe'llaridan keyin joy oldin: <i>I go <b>to school</b> <b>every day</b>.</i>",
      "<b>hardly, scarcely</b> o'zi inkor ma'nosini beradi, yana not qo'shilmaydi: <i>I can <b>hardly</b> hear you</i> (can't hardly emas). <b>ever/any</b> bilan: <i>hardly ever, hardly anyone</i>.",
      "Darajalar: <i>fast – faster – the fastest; carefully – more carefully – the most carefully; well – better – best; badly – worse – worst</i>."
    ],
    examples: [
      ["My father always drinks green tea after dinner.", "Otam doim kechki ovqatdan keyin ko'k choy ichadi."],
      ["I could hardly understand the taxi driver.", "Taksi haydovchisini zo'rg'a tushundim."],
      ["Have you been to the gym lately?", "So'nggi paytda sport zaliga borganmisan?"],
      ["She speaks English fluently and confidently.", "U ingliz tilida ravon va ishonch bilan gapiradi."],
      ["We arrived at the airport late last night.", "Kecha kechqurun aeroportga kech yetib keldik."]
    ],
    quiz: [
      { q: "He worked very ___ to pass IELTS.", o: ["hardly", "hard", "hardy"], a: 1, e: "Qattiq ishlamoq → <b>hard</b>." },
      { q: "I ___ know him; we met only once.", o: ["hard", "hardly", "nearly"], a: 1, e: "Deyarli tanimayman → <b>hardly</b>." },
      { q: "This soup tastes ___.", o: ["deliciously", "delicious", "more deliciously"], a: 1, e: "taste — bog'lovchi fe'l, <b>sifat</b>." },
      { q: "Which is correct?", o: ["She is late always.", "She always is late.", "She is always late."], a: 2, e: "be dan keyin: <b>is always</b>." },
      { q: "Which is correct?", o: ["He speaks very well Russian.", "He speaks Russian very well.", "He very well speaks Russian."], a: 1, e: "Fe'l + to'ldiruvchi orasiga ravish qo'yilmaydi." },
      { q: "Which order is correct?", o: ["I'll meet you tomorrow at the station.", "I'll meet you at the station tomorrow.", "I'll meet at the station you tomorrow."], a: 1, e: "Joy → vaqt: <b>at the station tomorrow</b>." },
      { q: "I haven't seen her ___.", o: ["late", "lately", "later"], a: 1, e: "So'nggi paytda → <b>lately</b>." },
      { q: "Ravishga aylantiring: easy → ___", w: ["easily"], e: "y → i + ly: <b>easily</b>." },
      { q: "Ravishga aylantiring: good → ___", w: ["well"], e: "good ning ravishi — <b>well</b>." },
      { q: "Tartibni tuzing (usually / I / walk / to work): ___", w: ["i usually walk to work"], e: "Takrorlanish ravishi asosiy fe'ldan oldin." }
    ],
    speak: ["I usually get up early on weekdays.", "She can hardly wait for the holidays.", "He explained the rule clearly and patiently.", "I've been really busy lately."]
  },
  {
    id: "ref-some-any-no-quantity",
    level: "B1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Some va any olmoshlaridan yasalgan olmoshlar; No va none olmoshlari; Much va many; Little va few",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Gumon olmoshlari",
    title: "Some/any/no birikmalari; no va none; much/many, little/few",
    intro: "<b>some, any, no, every</b> ga <b>-body/-one, -thing, -where</b> qo'shilib gumon olmoshlari yasaladi: <i>somebody</i> (kimdir), <i>anything</i> (biror narsa), <i>nowhere</i> (hech qayerda). Muhim farq: o'zbekchada “Hech kim <b>kelmadi</b>” — ikki inkor; inglizchada faqat <b>bitta inkor</b>: <i>Nobody came</i> yoki <i>Didn't anybody come?</i>",
    table: [
      ["some-", "somebody / someone, something, somewhere", "darak gap, taklif/iltimos"],
      ["any-", "anybody, anything, anywhere", "inkor va so'roq; “istalgan” ma'nosi"],
      ["no-", "nobody / no one, nothing, nowhere", "o'zi inkor, fe'l bo'lishli"],
      ["every-", "everybody, everything, everywhere", "birlik fe'l: Everybody is here."],
      ["much / little", "sanalmaydigan: much time, a little money", "a little = ozgina (yetarli); little = juda oz"],
      ["many / few", "sanaladigan: many friends, a few books", "a few = bir nechta; few = juda kam"]
    ],
    tableHead: ["Guruh", "Shakllar", "Ishlatilishi"],
    rules: [
      "Taklif va iltimosda so'roq bo'lsa ham <b>some</b>: <i>Would you like <b>something</b> to drink? Can I have <b>some</b> water?</i> <b>any</b> darak gapda “farqi yo'q, istalgani”: <i>Call me <b>any</b> time.</i>",
      "Bitta inkor qoidasi: <i>I saw <b>nobody</b> = I did<b>n't</b> see <b>anybody</b></i>. ❌ <i>I didn't see nobody.</i>",
      "<b>no</b> ot oldidan keladi: <i>There's <b>no</b> milk.</i> <b>none</b> o'zi yolg'iz yoki <b>none of</b> + ot/olmosh: <i>“How much milk is there?” — “<b>None</b>.” <b>None of</b> my friends knows/know.</i>",
      "<b>much / many</b> asosan inkor va so'roqda; darak gapda ko'pincha <b>a lot of / lots of</b>: <i>We have a lot of time.</i> Lekin <i>too much, so many, very much</i> darakda ham normal.",
      "<b>a little / a few</b> — ijobiy (“ozgina bor, yetadi”); <b>little / few</b> — salbiy (“deyarli yo'q”): <i>I have <b>a few</b> friends here</i> (yaxshi) — <i>He has <b>few</b> friends</i> (afsus).",
      "Ega vazifasida <b>somebody/everybody/nobody</b> birlik fe'l oladi, lekin keyingi olmosh ko'pincha <b>they</b>: <i>Everybody <b>has</b> done <b>their</b> homework.</i>"
    ],
    examples: [
      ["Is there anything I can do for you?", "Siz uchun biror narsa qila olamanmi?"],
      ["Nobody in my family speaks English except me.", "Oilamda mendan boshqa hech kim ingliz tilida gapirmaydi."],
      ["I looked for my keys everywhere, but they were nowhere.", "Kalitlarimni hamma joydan qidirdim, lekin hech qayerda yo'q edi."],
      ["None of the shops were open on the holiday.", "Bayramda do'konlarning hech biri ochiq emas edi."],
      ["Add a little salt and a few onions.", "Ozgina tuz va bir nechta piyoz qo'shing."]
    ],
    quiz: [
      { q: "I didn't see ___ at the bus stop.", o: ["nobody", "anybody", "somebody"], a: 1, e: "didn't bilan → <b>anybody</b> (ikki inkor yo'q)." },
      { q: "Would you like ___ to eat?", o: ["anything", "something", "nothing"], a: 1, e: "Taklif → <b>something</b>." },
      { q: "“How many tickets are left?” — “___.”", o: ["No", "None", "Nothing"], a: 1, e: "Yolg'iz javob → <b>None</b>." },
      { q: "There is ___ sugar in the jar.", o: ["none", "no", "any"], a: 1, e: "Ot oldidan → <b>no</b>." },
      { q: "Everybody ___ ready.", o: ["are", "is", "were"], a: 1, e: "everybody — birlik fe'l: <b>is</b>." },
      { q: "Hurry up! We have very ___ time.", o: ["few", "little", "a few"], a: 1, e: "Sanalmaydi + deyarli yo'q → <b>little</b>." },
      { q: "I know ___ people in London, so I won't be lonely.", o: ["a few", "few", "a little"], a: 0, e: "Ijobiy, sanaladigan → <b>a few</b>." },
      { q: "How ___ money do you need?", o: ["many", "much", "few"], a: 1, e: "money sanalmaydi → <b>much</b>." },
      { q: "Tuzating: I don't know nothing.  → I don't know ___", w: ["anything"], e: "Bitta inkor: I don't know <b>anything</b> (yoki I know nothing)." },
      { q: "Tarjima: “Hech kim qo'ng'iroq qilmadi.” (call)", w: ["nobody called", "no one called", "no-one called"], e: "<b>Nobody called.</b> — fe'l bo'lishli." }
    ],
    speak: ["Is there anything else you need?", "Nobody told me about the meeting.", "None of us knew the answer.", "I've got a little money and a few hours free."]
  },
  {
    id: "ref-group-prepositions",
    level: "B1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Guruh predloglar; Ba'zi predloglarning ishlatilishi; Predlogning gapdagi o'rni",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Predlog",
    title: "Guruh predloglar va fe'l + predlog",
    intro: "<b>Guruh (murakkab) predloglar</b> bir necha so'zdan iborat, lekin bitta predlog vazifasini bajaradi: <i>because of</i> (... tufayli), <i>in spite of</i> (... ga qaramay), <i>according to</i> (... ga ko'ra). Ko'p fe'llar esa ma'lum predlog bilan keladi: <i>depend <b>on</b></i>. O'zbekchada bularning o'rnida ko'pincha <b>kelishik qo'shimchalari</b> turadi (<i>-ga bog'liq, -dan iborat</i>), shuning uchun predlogni fe'l bilan birga yodlash kerak.",
    table: [
      ["because of / due to / owing to", "... tufayli, sababli", "because of the rain"],
      ["in spite of / despite", "... ga qaramay", "in spite of the traffic"],
      ["according to", "... ga ko'ra", "according to the forecast"],
      ["instead of / apart from / in addition to", "o'rniga / ...dan tashqari / ... ga qo'shimcha", "instead of tea"],
      ["in front of / next to / thanks to / as for", "oldida / yonida / tufayli (yaxshi) / ...ga kelsak", "thanks to my teacher"],
      ["Fe'l + predlog", "depend on, consist of, accuse sb of, apologise for, belong to, insist on, rely on, succeed in", "It depends on you."]
    ],
    tableHead: ["Predlog", "Ma'nosi", "Misol"],
    rules: [
      "Predlogdan keyin <b>ot</b> yoki <b>-ing</b> keladi, gap (ega+kesim) emas: <i><b>because of</b> the rain</i> ↔ <i><b>because</b> it was raining</i>; <i>instead of <b>going</b> out</i>.",
      "<b>despite</b> dan keyin <b>of</b> yo'q: <i>despite the cold</i> (despite of emas); <b>in spite of</b> — of bilan. Ikkalasi -ing bilan ham keladi: <i>Despite being tired, she continued.</i>",
      "<b>apart from</b> ikki ma'noli: “...dan tashqari (qo'shib)” va “...dan boshqa (istisno)”: <i>Apart from English, he speaks Russian. Apart from Ali, everyone came.</i>",
      "Fe'l + predlogni bir butun yodlang: <i>depend <b>on</b>, consist <b>of</b>, belong <b>to</b>, listen <b>to</b>, wait <b>for</b>, look <b>for</b>, believe <b>in</b>, agree <b>with</b> sb / <b>on</b> sth, arrive <b>in</b> (shahar) / <b>at</b> (bino)</i>.",
      "Fe'l + to'ldiruvchi + predlog: <i>accuse sb <b>of</b>, blame sb <b>for</b>, congratulate sb <b>on</b>, protect sb <b>from</b>, thank sb <b>for</b>, remind sb <b>of</b>, prevent sb <b>from</b> doing</i>.",
      "So'roq va ergash gaplarda predlog oxirga o'tishi mumkin: <i>Who are you waiting <b>for</b>? This is the book I told you <b>about</b>.</i> Rasmiy uslubda: <i>For whom...?</i>"
    ],
    examples: [
      ["The flight was delayed because of the fog.", "Tuman tufayli reys kechiktirildi."],
      ["According to the teacher, the exam will be easy.", "O'qituvchining aytishicha, imtihon oson bo'ladi."],
      ["In spite of the heat, we walked around Khiva all day.", "Issiqqa qaramay, kun bo'yi Xiva bo'ylab yurdik."],
      ["A traditional Uzbek breakfast consists of non, tea and kaymak.", "An'anaviy o'zbek nonushtasi non, choy va qaymoqdan iborat."],
      ["Thanks to my brother, I found a good job.", "Akam tufayli yaxshi ish topdim."]
    ],
    quiz: [
      { q: "We stayed at home ___ the snow.", o: ["because", "because of", "despite of"], a: 1, e: "Ot oldidan → <b>because of</b>." },
      { q: "___ the rain, the match continued.", o: ["Despite of", "In spite", "Despite"], a: 2, e: "<b>Despite</b> (of siz) yoki <b>In spite of</b>." },
      { q: "Let's have juice ___ coffee.", o: ["instead of", "instead", "apart"], a: 0, e: "O'rniga → <b>instead of</b>." },
      { q: "Success depends ___ hard work.", o: ["of", "from", "on"], a: 2, e: "<b>depend on</b>." },
      { q: "The team consists ___ eleven players.", o: ["of", "from", "in"], a: 0, e: "<b>consist of</b>." },
      { q: "They accused him ___ stealing the money.", o: ["for", "of", "in"], a: 1, e: "<b>accuse sb of</b> doing." },
      { q: "This phone belongs ___ my sister.", o: ["to", "for", "at"], a: 0, e: "<b>belong to</b>." },
      { q: "To'ldiring: I apologise ___ being late.", w: ["for"], e: "<b>apologise for</b> doing." },
      { q: "To'ldiring: ___ to the news, it will rain tomorrow. (ko'ra)", w: ["according"], e: "<b>According to</b> ..." },
      { q: "To'ldiring: Who are you waiting ___?", w: ["for"], e: "<b>wait for</b> — predlog gap oxirida." }
    ],
    speak: ["According to the forecast, it'll be sunny tomorrow.", "I passed the exam thanks to my teacher.", "It depends on the price.", "Apart from English, I'm learning Korean."]
  },
  {
    id: "ref-paired-conjunctions",
    level: "B1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Teng bog'lovchilar; Undov so'zlar (The Interjection)",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Bog'lovchi; Undov",
    title: "Juft bog'lovchilar va undovlar",
    intro: "<b>Juft bog'lovchilar</b> ikki qismdan iborat va ikki teng bo'lakni bog'laydi: <i>both ... and</i> (ham ... ham), <i>either ... or</i> (yo ... yoki), <i>neither ... nor</i> (na ... na). E'tibor bering: o'zbekchada “<b>na</b> u <b>na</b> bu <b>bilmaydi</b>” — fe'l inkorda; inglizchada <i>neither ... nor</i> bilan fe'l <b>bo'lishli</b> bo'ladi. <b>Undovlar</b> (Oh, Wow, Ouch) esa his-hayajonni bildiradi.",
    table: [
      ["both ... and", "ham ... ham", "Both Ali and Vali came."],
      ["either ... or", "yo ... yoki", "You can either call or text."],
      ["neither ... nor", "na ... na", "Neither my mum nor my dad smokes."],
      ["not only ... but also", "nafaqat ... balki", "She is not only clever but also kind."],
      ["whether ... or", "...mi yoki ...mi", "I don't know whether he'll come or not."],
      ["Undovlar", "Oh! Wow! Ouch! Oops! Well... Hmm. Ugh! Hurray!", "Ouch! That hurts!"]
    ],
    tableHead: ["Bog'lovchi", "Ma'nosi", "Misol"],
    rules: [
      "Ikki qism <b>bir xil turdagi</b> bo'laklarni bog'laydi (parallellik): <i>She likes <b>both</b> reading <b>and</b> swimming</i> (both reading and to swim emas).",
      "<b>both ... and</b> bilan fe'l ko'plik: <i>Both my brother and my sister <b>are</b> students.</i>",
      "<b>either ... or / neither ... nor</b> bilan fe'l <b>yaqinroq</b> egaga moslashadi: <i>Neither the teacher nor the students <b>were</b> there. Either you or Ali <b>has</b> to go.</i>",
      "<b>neither ... nor</b> o'zi inkor, <b>not</b> qo'shilmaydi: <i>He neither drinks nor smokes</i> (doesn't drink nor emas). Gap boshida <b>Not only</b> kelsa inversiya: <i>Not only <b>did he</b> win, but he also broke the record.</i>",
      "<b>Undovlar</b>: <i>Oh</i> — hayrat/tushunish; <i>Wow</i> — zavq; <i>Ouch</i> — og'riq; <i>Oops</i> — kichik xato; <i>Ugh</i> — jirkanish; <i>Well...</i> — o'ylash, gap boshlash; <i>Hmm</i> — ikkilanish. Yozishda ketidan undov belgisi yoki vergul.",
      "Speaking (IELTS) da <i>Well, ...</i> va <i>Hmm, let me think...</i> tabiiy “to'ldiruvchi” sifatida vaqt yutishga yordam beradi, lekin <i>Wow, Ugh</i> rasmiy yozuvda ishlatilmaydi."
    ],
    examples: [
      ["Both my parents and my grandparents live in Andijan.", "Ota-onam ham, bobom-buvim ham Andijonda yashaydi."],
      ["You can pay either in cash or by card.", "Naqd yoki karta orqali to'lashingiz mumkin."],
      ["Neither Dilshod nor his brother has a driving licence.", "Na Dilshodda, na uning akasida haydovchilik guvohnomasi bor."],
      ["Samarkand is not only beautiful but also very old.", "Samarqand nafaqat go'zal, balki juda qadimiy."],
      ["Wow! Your English has improved so much!", "Voy! Ingliz tiling juda yaxshilanibdi!"]
    ],
    quiz: [
      { q: "___ Ali and Sardor passed the exam.", o: ["Either", "Both", "Neither"], a: 1, e: "Ham ... ham → <b>Both ... and</b>." },
      { q: "You can have ___ tea or coffee.", o: ["either", "neither", "both"], a: 0, e: "<b>either ... or</b>." },
      { q: "Neither my sister nor my parents ___ at home.", o: ["is", "was", "were"], a: 2, e: "Yaqin ega (parents) ko'plik → <b>were</b>." },
      { q: "Which is correct?", o: ["He doesn't neither drink nor smoke.", "He neither drinks nor smokes.", "He neither drink or smoke."], a: 1, e: "neither ... nor bilan fe'l bo'lishli." },
      { q: "She is not only smart ___ hard-working.", o: ["and also", "but also", "or also"], a: 1, e: "<b>not only ... but also</b>." },
      { q: "I'm not sure ___ she will agree or not.", o: ["whether", "either", "both"], a: 0, e: "<b>whether ... or not</b>." },
      { q: "___! I've cut my finger.", o: ["Wow", "Hurray", "Ouch"], a: 2, e: "Og'riq → <b>Ouch</b>." },
      { q: "Tarjima: “Na u, na men bilardik.” (neither ... nor, know — past)", w: ["neither he nor i knew"], e: "<b>Neither he nor I knew.</b>" },
      { q: "To'ldiring: Not only ___ he late, but he also forgot his books. (did/was)", w: ["was"], e: "Inversiya: Not only <b>was</b> he late..." }
    ],
    speak: ["I like both plov and manti.", "We can either take the metro or walk.", "Neither of us had been there before.", "Well, let me think about that for a second."]
  },
  {
    id: "ref-question-types",
    level: "B1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Umumiy so'roq gaplar; Bo'lishsiz umumiy so'roq gaplar; Tasdiq so'roq gaplari; Gapning egasiga beriladigan savollar; Muqobil so'roq gaplar",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Sintaksis: So'roq gaplarning turlari",
    title: "So'roq gaplar turlari",
    intro: "Asosiy savollardan tashqari inglizchada yana bir necha tur bor: <b>tasdiq so'roq</b> (tag question: <i>..., isn't it?</i> — o'zbekchadagi “...-ku, to'g'rimi?”), <b>bo'lishsiz so'roq</b> (<i>Don't you...?</i>), <b>muqobil so'roq</b> (<i>tea or coffee?</i>), <b>egaga savol</b> (<i>Who called?</i>) va <b>bilvosita savol</b> (<i>Could you tell me where...</i>).",
    table: [
      ["Tag question", "darak + (-) tag / inkor + (+) tag", "It's cold, isn't it? / You don't smoke, do you?"],
      ["Bo'lishsiz so'roq", "Don't / Isn't / Haven't ...?", "Don't you like it?"],
      ["Muqobil so'roq", "... or ...?", "Is he a doctor or a teacher?"],
      ["Egaga savol", "Who / What + fe'l (do yo'q)", "Who lives here? What happened?"],
      ["Bilvosita savol", "Do you know / Could you tell me + darak tartib", "Could you tell me where the bank is?"]
    ],
    tableHead: ["Tur", "Tuzilishi", "Misol"],
    rules: [
      "Tag question: gap bo'lishli bo'lsa tag inkor, gap inkor bo'lsa tag bo'lishli; yordamchi fe'l va olmosh takrorlanadi: <i>She <b>can</b> swim, <b>can't she</b>? They <b>went</b> home, <b>didn't they</b>?</i> Istisnolar: <i>I'm right, <b>aren't I</b>? Let's go, <b>shall we</b>? Open the door, <b>will you</b>?</i>",
      "Bo'lishsiz savolga javob: inglizcha javob <b>faktga</b> qaraydi, savolga emas. <i>“Don't you like plov?” — “<b>Yes</b>, I do.”</i> (yoqadi) / <i>“<b>No</b>, I don't.”</i> (yoqmaydi). O'zbekchada “Yo'q, yoqadi” deyiladi — inglizchada bunday emas!",
      "Egaga savolda <b>do/does/did</b> ishlatilmaydi, fe'l 3-shaxs birlikda: <i>Who <b>called</b> you?</i> (Who did call emas). Solishtiring: <i>Who <b>did</b> you call?</i> — to'ldiruvchiga savol.",
      "Muqobil savolda ovoz birinchi variantda ko'tarilib, oxirgisida tushadi, javob <b>Yes/No</b> bo'lmaydi: <i>“Shall we go by bus or by taxi?” — “By taxi.”</i>",
      "Bilvosita savolda <b>so'roq tartibi yo'q</b>, do/does tushib qoladi: <i>Where <b>is</b> the station? → Could you tell me where the station <b>is</b>?</i> Umumiy savol → <b>if/whether</b>: <i>Do you know <b>if</b> the shop is open?</i>",
      "Tag question ohangi: tushuvchi ohang — tasdiq kutyapman; ko'tariluvchi — haqiqatan so'rayapman. IELTS Speakingda bilvosita savollar (<i>I wonder whether...</i>) ko'proq rasmiy va muloyim."
    ],
    examples: [
      ["You're from Tashkent, aren't you?", "Siz toshkentliksiz, to'g'rimi?"],
      ["“Haven't you finished yet?” — “No, I haven't. Give me five minutes.”", "“Hali tugatmadingmi?” — “Ha, tugatmadim. Besh daqiqa ber.”"],
      ["Who took my phone charger?", "Telefonim zaryadlagichini kim oldi?"],
      ["Would you like green tea or black tea?", "Ko'k choy ichasizmi yoki qora choy?"],
      ["Could you tell me what time the train leaves?", "Poyezd soat nechada jo'nashini ayta olasizmi?"]
    ],
    quiz: [
      { q: "You live near here, ___?", o: ["don't you", "do you", "aren't you"], a: 0, e: "Bo'lishli gap, present simple → <b>don't you</b>." },
      { q: "She hasn't called yet, ___?", o: ["hasn't she", "has she", "did she"], a: 1, e: "Inkor gap → bo'lishli tag: <b>has she</b>." },
      { q: "I'm late, ___?", o: ["am not I", "aren't I", "isn't it"], a: 1, e: "Istisno: <b>aren't I</b>." },
      { q: "Let's start, ___?", o: ["shall we", "will you", "don't we"], a: 0, e: "Let's → <b>shall we</b>." },
      { q: "“Don't you speak Russian?” (Men gapiraman.) — “___”", o: ["No, I do.", "Yes, I do.", "Yes, I don't."], a: 1, e: "Faktga qarab: gapiraman → <b>Yes, I do</b>." },
      { q: "Who ___ the window?", o: ["did break", "broke", "did broke"], a: 1, e: "Egaga savol: do yo'q → <b>broke</b>." },
      { q: "Could you tell me where ___?", o: ["is the post office", "the post office is", "does the post office"], a: 1, e: "Bilvosita savol — darak tartib: <b>the post office is</b>." },
      { q: "Do you know ___ the museum is open on Mondays?", o: ["if", "that", "what"], a: 0, e: "Umumiy savol → <b>if / whether</b>." },
      { q: "Tag qo'shing: They went to Bukhara, ___?", w: ["didn't they", "did not they"], e: "Past simple bo'lishli → <b>didn't they</b>." },
      { q: "Bilvosita qiling: Where does he work? → Do you know where ___?", w: ["he works"], e: "does tushadi, fe'l -s oladi: <b>he works</b>." }
    ],
    speak: ["It's a lovely day, isn't it?", "Who wants more tea?", "Could you tell me how to get to Chorsu Bazaar?", "Would you prefer the bus or the metro?"]
  },
  {
    id: "ref-imperative-exclamation",
    level: "B1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Buyruq gaplar; Undov gaplar; Buyruq gaplarni o'zlashtirma gaplarga aylantirish",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Sintaksis: Gapning maqsadga ko'ra turlari; Ko'chirma va o'zlashtirma gap",
    title: "Buyruq va undov gaplar; o'zlashtirma buyruq",
    intro: "<b>Buyruq gap</b> fe'lning asosiy shakli bilan boshlanadi, ega odatda aytilmaydi: <i>Sit down.</i> Inkori — <b>Don't</b>: <i>Don't worry.</i> Birgalikka undash — <b>Let's</b>. <b>Undov gaplar</b> <i>What a...! / How...!</i> bilan tuziladi (“Qanday ajoyib...!”). Buyruqni o'zlashtirma gapga aylantirganda <b>told / asked + kishi + (not) to + fe'l</b> ishlatiladi.",
    table: [
      ["Buyruq", "Open the window. / Don't be late.", "fe'l asosi / Don't + fe'l"],
      ["Muloyim", "Please sit down. / Could you help me?", "please, could you"],
      ["Let's", "Let's go. / Let's not argue.", "biz uchun taklif"],
      ["What + (a) + sifat + ot", "What a beautiful city! What nice people!", "ot bilan"],
      ["How + sifat/ravish", "How beautiful! How fast he runs!", "sifat/ravish bilan"],
      ["O'zlashtirma buyruq", "“Be quiet.” → She told us to be quiet.", "told/asked + sb + (not) to do"]
    ],
    tableHead: ["Tur", "Misol", "Tuzilishi"],
    rules: [
      "Buyruqni yumshatish: <i><b>Please</b> close the door. Close the door, <b>will you</b>?</i> Ta'kid uchun <b>do</b>: <i><b>Do</b> come in!</i> (Kiring, iltimos!). Egani aytish mumkin: <i><b>You</b> stay here!</i>",
      "<b>Let's</b> inkori: <i><b>Let's not</b> waste time.</i> Boshqa shaxs uchun <b>let</b> + olmosh: <i>Let <b>me</b> help you. Let <b>him</b> try.</i>",
      "<b>What</b> ot bilan: sanaladigan birlikda <b>a/an</b> kerak — <i>What <b>a</b> nice day!</i>; ko'plik va sanalmaydiganda artiklsiz — <i>What lovely flowers! What awful weather!</i> (What a weather emas).",
      "<b>How</b> sifat/ravish bilan: <i>How kind of you! How quickly time flies!</i> Undov gapda so'z tartibi darak gapdagidek: <i>How tall <b>he is</b>!</i> (How tall is he! emas).",
      "O'zlashtirma buyruq: <i>“Wait here,” he said. → He <b>told me to wait</b> there.</i> Inkor: <i>“Don't touch it.” → She told us <b>not to touch</b> it.</i> Iltimos uchun <b>asked</b>: <i>He asked me to help him.</i>",
      "Boshqa fe'llar ham: <i>advise, warn, order, remind, beg + sb + (not) to do</i>: <i>The doctor advised me to rest.</i> Joy/vaqt so'zlari o'zgaradi: here → there, now → then."
    ],
    examples: [
      ["Take off your shoes, please. Come in and sit down.", "Iltimos, oyoq kiyimingizni yeching. Kiring, o'tiring."],
      ["Let's not talk about work at dinner.", "Kechki ovqatda ish haqida gaplashmaylik."],
      ["What a delicious plov! Who cooked it?", "Qanday mazali osh! Kim pishirdi?"],
      ["How fast your son is growing!", "O'g'lingiz qanday tez o'syapti!"],
      ["My mother told me not to come home late.", "Onam menga uyga kech kelmasligimni aytdi."]
    ],
    quiz: [
      { q: "___ late for the exam!", o: ["Not be", "Don't be", "Be not"], a: 1, e: "Inkor buyruq: <b>Don't be</b>." },
      { q: "___ go to the cinema tonight.", o: ["Let's", "Let us to", "Lets'"], a: 0, e: "<b>Let's</b> + fe'l asosi." },
      { q: "___ beautiful weather!", o: ["What a", "What", "How"], a: 1, e: "weather sanalmaydi → <b>What</b> (a siz)." },
      { q: "___ interesting book!", o: ["What a", "What an", "How"], a: 1, e: "Unli tovush oldida <b>What an</b>." },
      { q: "___ kind you are!", o: ["What", "What a", "How"], a: 2, e: "Sifat bilan → <b>How</b>." },
      { q: "“Close the door.” → He told me ___ the door.", o: ["close", "to close", "closing"], a: 1, e: "told + sb + <b>to do</b>." },
      { q: "“Don't shout!” → She told us ___.", o: ["don't shout", "not to shout", "to not shouting"], a: 1, e: "Inkor: <b>not to shout</b>." },
      { q: "O'zlashtiring: “Please help me,” she said to Ali. → She asked Ali ___ her.", w: ["to help"], e: "asked + sb + <b>to help</b>." },
      { q: "Tarjima: “Qanday chiroyli shahar!” (city)", w: ["what a beautiful city", "what a nice city", "what a lovely city"], e: "<b>What a beautiful city!</b>" }
    ],
    speak: ["Please make yourself at home.", "Let's not be late this time.", "What a wonderful idea!", "The teacher told us to read chapter five."]
  },
  {
    id: "ref-sequence-of-tenses",
    level: "B2",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — O'tgan zamondagi kelasi zamon; Darak gaplarni o'zlashtirma gaplarga aylantirish",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Sintaksis: Zamonlar moslashuvi (Sequence of Tenses)",
    title: "Zamonlar moslashuvi va o'tgan zamondagi kelasi zamon",
    intro: "Bosh gapdagi fe'l <b>o'tgan zamonda</b> bo'lsa, to'ldiruvchi ergash gapdagi fe'l ham odatda “bir pog'ona orqaga” suriladi — bu <b>zamonlar moslashuvi</b>. O'zbekchada bunday qoida yo'q: “U <i>kelaman</i> dedi” — zamon o'zgarmaydi. Inglizchada: <i>He said he <b>would</b> come.</i> <b>would / was going to</b> — <b>o'tgan zamondagi kelasi zamon</b> (Future in the Past).",
    table: [
      ["Present Simple → Past Simple", "I know → She said she knew", ""],
      ["Present Continuous → Past Continuous", "I'm working → He said he was working", ""],
      ["Present Perfect / Past Simple → Past Perfect", "I've lost / I lost → He said he had lost", ""],
      ["will → would", "I will call → She promised she would call", "Future in the Past"],
      ["am going to → was going to", "I'm going to leave → I knew he was going to leave", "reja (o'tmishda)"],
      ["can → could, may → might, must → had to / must", "I can swim → He said he could swim", ""]
    ],
    tableHead: ["Bosh gap hozirgi zamonda", "Bosh gap o'tgan zamonda", "Izoh"],
    rules: [
      "Moslashuv faqat bosh gap <b>o'tgan zamonda</b> bo'lganda: <i>He <b>says</b> he <b>is</b> tired</i> (o'zgarmaydi) — <i>He <b>said</b> he <b>was</b> tired.</i>",
      "<b>Future in the Past</b>: o'tmishdan qaraganda kelajak — <i>I <b>knew</b> you <b>would</b> pass. I <b>thought</b> it <b>would</b> rain.</i> Davomli shakl: <i>I knew she <b>would be waiting</b>.</i>",
      "<b>was / were going to</b> — o'tmishdagi reja, ko'pincha amalga oshmagan: <i>I <b>was going to</b> call you, but I forgot.</i> <b>was about to</b> — hozir qilmoqchi edim: <i>I was about to leave when he arrived.</i>",
      "Istisnolar — umumiy haqiqat va hali ham to'g'ri faktlar: <i>The teacher said that water <b>boils</b> at 100 degrees. He told me he <b>lives</b> in Chilanzar</i> (hali ham u yerda yashasa). Bu holda zamonni o'zgartirmaslik mumkin.",
      "<b>would, could, might, should, ought to, had better</b> va Past Perfect o'zgarmaydi: <i>“I could help.” → She said she could help.</i> Second/third conditional ham o'zgarmaydi.",
      "Aniq tarixiy sana bilan Past Simple qoladi: <i>He said he <b>was born</b> in 1995</i> (had been born shart emas)."
    ],
    examples: [
      ["My father said he would buy me a laptop if I passed IELTS.", "Otam IELTSdan o'tsam, menga noutbuk olib berishini aytdi."],
      ["I was going to visit my grandmother, but it snowed heavily.", "Buvimnikiga bormoqchi edim, lekin qattiq qor yog'di."],
      ["She told me she had already booked the tickets.", "U chiptalarni allaqachon bron qilganini aytdi."],
      ["Our teacher explained that the Earth goes round the Sun.", "O'qituvchimiz Yer Quyosh atrofida aylanishini tushuntirdi."],
      ["I didn't know you were working at a bank.", "Bankda ishlashingizni bilmagan ekanman."]
    ],
    quiz: [
      { q: "He said he ___ tired.", o: ["is", "was", "will be"], a: 1, e: "said → bir pog'ona orqaga: <b>was</b>." },
      { q: "I knew you ___ win the competition.", o: ["will", "would", "are going"], a: 1, e: "Future in the Past: <b>would</b>." },
      { q: "She says she ___ busy now.", o: ["is", "was", "had been"], a: 0, e: "Bosh gap hozirgi zamonda — o'zgarmaydi: <b>is</b>." },
      { q: "I ___ call you yesterday, but my phone died.", o: ["am going to", "was going to", "will"], a: 1, e: "Amalga oshmagan o'tmish rejasi: <b>was going to</b>." },
      { q: "He told me he ___ the film twice.", o: ["has seen", "had seen", "saw has"], a: 1, e: "Present Perfect → <b>Past Perfect</b>." },
      { q: "The teacher said that the sun ___ in the east.", o: ["rises", "rose", "had risen"], a: 0, e: "Umumiy haqiqat — <b>rises</b> qolishi mumkin." },
      { q: "“I can drive.” → He said he ___ drive.", o: ["can", "could", "would can"], a: 1, e: "can → <b>could</b>." },
      { q: "To'ldiring: “I will help you.” → She promised she ___ help me.", w: ["would"], e: "will → <b>would</b>." },
      { q: "To'ldiring: “I am waiting.” → He said he ___ waiting.", w: ["was"], e: "am waiting → <b>was waiting</b>." }
    ],
    speak: ["I thought you would like this present.", "I was going to tell you, but I forgot.", "She said she was learning Spanish.", "He told me he had never been abroad."]
  },
  {
    id: "ref-complex-object",
    level: "B2",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Complex object (Murakkab to'ldiruvchi); Infinitivning to yuklamasisiz ishlatilishi",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Infinitiv; Sintaksis: Murakkab to'ldiruvchi",
    title: "Murakkab to'ldiruvchi (Complex Object)",
    intro: "<b>Murakkab to'ldiruvchi</b> = fe'l + <b>ot / obyekt olmosh</b> (me, him, them) + <b>infinitiv yoki -ing</b>: <i>I want <b>him to come</b>.</i> O'zbekchada bu ergash gap yoki “-ishini” bilan beriladi: “Uning kelishini xohlayman”. ❌ <i>I want that he comes</i> — o'zbekchadan to'g'ridan tarjima xatosi!",
    table: [
      ["want, would like, expect, ask, tell, allow, advise, need", "+ sb + <b>to</b> do", "I want you to listen."],
      ["see, hear, watch, notice, feel", "+ sb + do (to siz) — butun harakat", "I saw him cross the road."],
      ["see, hear, watch, notice, feel", "+ sb + doing — jarayon", "I heard her singing."],
      ["make, let", "+ sb + do (to siz)", "She made me wait. They let us go."],
      ["consider, believe, find, know (rasmiy)", "+ sb + to be", "We consider him to be honest."]
    ],
    tableHead: ["Fe'llar", "Tuzilishi", "Misol"],
    rules: [
      "Istak va kutish fe'llaridan keyin: <i>want / would like / expect / wish + sb + <b>to</b> do</i>: <i>My parents expect me <b>to study</b> medicine.</i> Olmosh obyekt kelishigida: <i>him, her, them</i> (he, she emas).",
      "Sezgi fe'llari (see, hear, watch, notice, feel) bilan <b>to siz infinitiv</b> — harakatni boshidan oxirigacha ko'rdim: <i>I saw him <b>leave</b>.</i> <b>-ing</b> — harakatning bir qismini, jarayonni: <i>I saw him <b>leaving</b></i> (ketayotganini).",
      "<b>make</b> (majburlamoq) va <b>let</b> (ruxsat bermoq) — to siz: <i>The teacher made us <b>rewrite</b> the essay. My dad let me <b>drive</b>.</i> Lekin majhul nisbatda <b>to</b> qaytadi: <i>We <b>were made to rewrite</b> it.</i> (let ning majhuli: <i>were allowed to</i>.)",
      "Inkor: <b>not</b> infinitivdan oldin: <i>She asked me <b>not to</b> tell anyone.</i> ❌ <i>She didn't ask me to tell</i> — ma'no boshqacha!",
      "Fikr fe'llari (consider, believe, think, find, know) bilan rasmiy uslubda: <i>I believe him <b>to be</b> right.</i> Oddiy nutqda ko'pincha: <i>I believe (that) he is right.</i>",
      "<b>help</b> to bilan ham, to siz ham bo'ladi: <i>Can you help me (to) carry this?</i> <b>have sb do</b> — biror kishiga ish buyurmoq: <i>I'll have the technician check it.</i>"
    ],
    examples: [
      ["I want you to meet my family this weekend.", "Shu dam olish kunlari oilam bilan tanishishingizni xohlayman."],
      ["We watched the sun set over the Aral Sea.", "Orol dengizi ustida quyosh botishini tomosha qildik."],
      ["I heard someone knocking at the door.", "Kimdir eshik taqillatayotganini eshitdim."],
      ["My grandmother never let us eat before guests arrived.", "Buvim mehmonlar kelmasidan oldin ovqatlanishimizga hech qachon ruxsat bermasdi."],
      ["The doctor advised my father not to eat too much salt.", "Shifokor otamga ko'p tuz yemaslikni maslahat berdi."]
    ],
    quiz: [
      { q: "I want ___ the truth.", o: ["that you tell me", "you to tell me", "you tell me"], a: 1, e: "want + sb + <b>to</b> do." },
      { q: "My boss made me ___ late.", o: ["to stay", "stay", "staying"], a: 1, e: "make + sb + do (<b>to siz</b>)." },
      { q: "I saw ___ the street.", o: ["he cross", "him crossing", "his crossing to"], a: 1, e: "Obyekt olmosh + -ing: <b>him crossing</b>." },
      { q: "Her parents won't let her ___ abroad alone.", o: ["travel", "to travel", "travelling"], a: 0, e: "let + sb + do: <b>travel</b>." },
      { q: "We were made ___ the test again.", o: ["take", "to take", "taking"], a: 1, e: "Majhulda <b>to</b> qaytadi: were made <b>to take</b>." },
      { q: "She asked me ___ the window.", o: ["not open", "to not opening", "not to open"], a: 2, e: "Inkor: <b>not to</b> open." },
      { q: "I expect ___ on time.", o: ["they arrive", "them to arrive", "them arrive"], a: 1, e: "expect + sb + to do: <b>them to arrive</b>." },
      { q: "To'ldiring: I heard her ___ (sing) in the next room. (jarayon)", w: ["singing"], e: "Jarayon → <b>singing</b>." },
      { q: "Tarjima: “Ular mendan kutishimni so'rashdi.” (ask, wait)", w: ["they asked me to wait"], e: "<b>They asked me to wait.</b>" },
      { q: "Tuzating: I want that you come. → I want ___ come.", w: ["you to"], e: "<b>I want you to come.</b>" }
    ],
    speak: ["I'd like you to meet my friend Bekzod.", "My parents never let me stay out late.", "I saw them leave the building.", "The teacher made us repeat the sentence."]
  },
  {
    id: "ref-complex-subject",
    level: "B2",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Nominative with the Infinitive (Infinitivli nominativ); For + ot (obyektiv kelishikdagi olmosh) + infinitiv",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Sintaksis: Murakkab ega (Complex Subject); Infinitivli birikmalar",
    title: "Murakkab ega (Complex Subject / Infinitivli nominativ)",
    intro: "<b>Murakkab ega</b>da gapning egasi + <b>is said / seems / is likely</b> + <b>infinitiv</b> keladi: <i><b>He is said to be</b> the best doctor in town</i> — “Aytishlaricha, u shahardagi eng yaxshi shifokor”. O'zbekchadagi “...ekan, ...emish, aftidan” ma'nolarini beradi. Akademik yozuvda (IELTS Writing) fikrni ehtiyotkor ifodalash uchun juda foydali. Shuningdek <b>for + ot + infinitiv</b>: <i>It's important <b>for you to rest</b>.</i>",
    table: [
      ["Majhul fe'llar", "is said / is believed / is known / is thought / is reported / is expected / is supposed + to do", "She is said to be rich."],
      ["Aniq nisbat fe'llari", "seem / appear / happen / prove / turn out + to do", "He seems to know everything."],
      ["Sifatlar", "be likely / unlikely / sure / certain + to do", "It is likely to rain."],
      ["Perfect infinitiv", "+ to have done (o'tmishga ishora)", "He is believed to have left."],
      ["for + ot + infinitiv", "It is + sifat + for sb + to do", "It's hard for me to wake up early."]
    ],
    tableHead: ["Guruh", "Tuzilishi", "Misol"],
    rules: [
      "Ikki shakl bir xil ma'no: <i>It is said that he lives abroad</i> = <i><b>He is said to live</b> abroad.</i> Ikkinchisida ega — <b>he</b>, fe'l majhul nisbatda, keyin infinitiv.",
      "Harakat hozir bo'layotgan bo'lsa — davomli infinitiv: <i>She is thought <b>to be working</b> on a new book.</i> O'tmishda bo'lgan bo'lsa — perfect infinitiv: <i>The castle is believed <b>to have been built</b> in the 12th century.</i>",
      "<b>seem, appear, happen, turn out</b> — aniq nisbatda: <i>You <b>seem to be</b> tired. I <b>happened to meet</b> him at the bazaar</i> (tasodifan uchratib qoldim). Inkor: <i>He doesn't seem to understand</i> (yoki He seems not to...).",
      "<b>be likely / be sure / be certain</b> — ehtimol va ishonch: <i>Prices <b>are likely to</b> rise. You're <b>sure to</b> like it.</i> <b>be supposed to</b> — kutilgan/majburiyat yoki “aytishlaricha”: <i>You're supposed to wear a uniform.</i>",
      "<b>for + ot/obyekt olmosh + infinitiv</b>: <i>It's important <b>for students to</b> read every day. The box is too heavy <b>for me to</b> carry. Here's a book <b>for you to</b> read.</i> O'zbekchada “...ning ...ishi” deb tarjima qilinadi.",
      "IELTS Task 2 uchun: <i>Technology <b>is thought to</b> improve..., Remote work <b>is likely to</b> become..., It is essential <b>for governments to</b> invest...</i>"
    ],
    examples: [
      ["The Registan is said to be one of the most beautiful squares in the world.", "Registon dunyodagi eng go'zal maydonlardan biri ekan."],
      ["The president is expected to visit Nukus next week.", "Prezident kelasi hafta Nukusga tashrif buyurishi kutilmoqda."],
      ["You seem to have lost weight.", "Ozibsiz shekilli."],
      ["Prices are likely to go up after the New Year.", "Yangi yildan keyin narxlar oshishi ehtimoli bor."],
      ["It's difficult for my grandparents to use smartphones.", "Bobom va buvim uchun smartfon ishlatish qiyin."]
    ],
    quiz: [
      { q: "He is said ___ very rich.", o: ["be", "to be", "being"], a: 1, e: "is said + <b>to be</b>." },
      { q: "The thief is believed ___ the country last week.", o: ["to leave", "to have left", "leaving"], a: 1, e: "O'tmishdagi harakat → <b>to have left</b>." },
      { q: "She seems ___ a lot about history.", o: ["knowing", "to know", "know"], a: 1, e: "seem + <b>to</b> do." },
      { q: "It ___ to snow tomorrow.", o: ["is likely", "likely", "is like"], a: 0, e: "<b>be likely to</b>." },
      { q: "It's important ___ to sleep well before the exam.", o: ["that you", "for you", "of you"], a: 1, e: "<b>for</b> + sb + to do." },
      { q: "The bridge is thought ___ built in the 1900s.", o: ["to have been", "to be being", "having been"], a: 0, e: "Majhul + o'tmish: <b>to have been</b> built." },
      { q: "We ___ to finish the project by Friday, but we can't.", o: ["supposed", "are supposing", "are supposed"], a: 2, e: "<b>be supposed to</b> — kutilgan majburiyat." },
      { q: "Qayta yozing: It is known that he speaks five languages. → He is known ___ five languages.", w: ["to speak"], e: "He is known <b>to speak</b>..." },
      { q: "To'ldiring: I happened ___ (meet) my teacher at the bazaar.", w: ["to meet"], e: "happen + <b>to meet</b>." },
      { q: "To'ldiring: The text was too difficult ___ me to understand.", w: ["for"], e: "too + sifat + <b>for</b> sb + to do." }
    ],
    speak: ["He is said to be the best cook in the mahalla.", "You seem to be very tired today.", "Prices are likely to rise next year.", "It's hard for me to wake up early in winter."]
  },
  {
    id: "ref-it-there-agreement",
    level: "B2",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — It soxta egasi; It is … that … birikmasi; It soxta to'ldiruvchisi; There is birikmasida kesim; Ega bilan kesimning moslashuvi",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Sintaksis: Ega va kesim; Ega bilan kesimning moslashuvi",
    title: "It soxta ega va to'ldiruvchi; there is/are moslashuvi; ega-kesim moslashuvi",
    intro: "Inglizcha gapda <b>ega bo'lishi shart</b>. O'zbekchada “Sovuq.”, “Uzoq.” deyish mumkin, inglizchada esa <b>it</b> qo'yiladi: <i><b>It</b>'s cold. <b>It</b>'s far.</i> Bu <b>soxta ega</b>. Uzun ega ham oxirga suriladi: <i><b>It</b> is hard to learn Chinese.</i> Shuningdek <b>there is/are</b> va ega-kesim moslashuvining nozik holatlari.",
    table: [
      ["It — ob-havo, vaqt, masofa", "It's raining. It's 5 o'clock. It's 10 km to the city.", "soxta ega"],
      ["It + be + sifat + to do / that", "It is important to read. It's clear that he's wrong.", "uzun egani oxirga surish"],
      ["It takes (sb) + vaqt + to do", "It takes me an hour to get to work.", "vaqt sarflash"],
      ["find / make / think + it + sifat + to do", "I find it hard to concentrate.", "soxta to'ldiruvchi"],
      ["There is / are", "There is a pen and two books. There are two books and a pen.", "birinchi otga moslashadi"],
      ["Moslashuv", "Everyone is... / The number of cars is... / A number of people are...", "birlik yoki ko'plik"]
    ],
    tableHead: ["Tuzilish", "Misol", "Izoh"],
    rules: [
      "Ob-havo, vaqt, sana, masofa — har doim <b>it</b>: <i>It's Monday. It's getting dark. It's a long way.</i> ❌ <i>Is cold today.</i>",
      "<b>It + takes / costs</b>: <i><b>It takes</b> me 20 minutes <b>to</b> walk to school. <b>It cost</b> us a fortune to fix the car.</i>",
      "<b>Soxta to'ldiruvchi</b>: <i>find / make / consider / think + <b>it</b> + sifat/ot + to do / that</i>: <i>I find <b>it</b> difficult to speak in public. The noise made <b>it</b> impossible to sleep.</i> ❌ <i>I find difficult to...</i> — it tushib qolmasin!",
      "<b>There is / are</b> odatda <b>birinchi</b> otga moslashadi: <i>There <b>is</b> a table and four chairs. There <b>are</b> four chairs and a table.</i> Savol: <i>Is there...? How many ... are there?</i>",
      "Birlik fe'l: <i>everyone, somebody, each, every + ot, the number of</i>; ko'plik: <i>a number of (= many), both, the police</i>. <i><b>The number of</b> students <b>has</b> increased. <b>A number of</b> students <b>have</b> complained.</i>",
      "Jamlovchi otlar (family, team, government, class) — UK da birlik ham, ko'plik ham: <i>The team <b>is</b>/<b>are</b> playing well.</i> Pul, vaqt, masofa summasi birlik: <i>Ten dollars <b>is</b> enough. Five years <b>is</b> a long time.</i> <i>Physics, news, mathematics</i> — birlik."
    ],
    examples: [
      ["It takes about four hours to get from Tashkent to Samarkand by car.", "Toshkentdan Samarqandga mashinada borish taxminan to'rt soat oladi."],
      ["It's a pity that you can't come to the wedding.", "To'yga kela olmasligingiz achinarli."],
      ["I find it hard to remember English phrasal verbs.", "Inglizcha frazali fe'llarni eslab qolish menga qiyin."],
      ["There is a mosque and two schools in our mahalla.", "Mahallamizda bitta masjid va ikkita maktab bor."],
      ["The number of tourists in Uzbekistan has grown rapidly.", "O'zbekistondagi sayyohlar soni tez o'sdi."]
    ],
    quiz: [
      { q: "___ very hot in Termez in July.", o: ["Is", "It's", "There's"], a: 1, e: "Ob-havo → soxta ega <b>It's</b>." },
      { q: "___ me two hours to finish the essay.", o: ["It took", "I took", "There took"], a: 0, e: "<b>It takes</b> sb + vaqt + to do." },
      { q: "I find ___ difficult to sleep on planes.", o: ["—", "it", "that"], a: 1, e: "Soxta to'ldiruvchi: find <b>it</b> difficult." },
      { q: "There ___ a sofa and two armchairs in the room.", o: ["is", "are", "be"], a: 0, e: "Birinchi ot birlik → <b>is</b>." },
      { q: "The number of cars on the roads ___ increasing.", o: ["are", "is", "have"], a: 1, e: "<b>The number of</b> → birlik." },
      { q: "A number of students ___ absent today.", o: ["was", "is", "were"], a: 2, e: "<b>A number of</b> = many → ko'plik." },
      { q: "Everyone ___ the answer.", o: ["know", "knows", "are knowing"], a: 1, e: "everyone → birlik: <b>knows</b>." },
      { q: "Ten kilometres ___ too far to walk.", o: ["is", "are", "were"], a: 0, e: "Masofa summasi → birlik: <b>is</b>." },
      { q: "To'ldiring: ___ is important to drink enough water.", w: ["it"], e: "Soxta ega: <b>It</b> is important to..." },
      { q: "Tarjima: “Bu yerdan aeroportgacha uzoq.” (a long way)", w: ["it's a long way to the airport", "it is a long way to the airport", "it's a long way from here to the airport", "it is a long way from here to the airport"], e: "<b>It's a long way</b> (from here) to the airport." }
    ],
    speak: ["It takes me half an hour to get to work.", "I find it hard to say no to my friends.", "There's a park and two cafés near my house.", "The number of students has doubled."]
  },
  {
    id: "ref-absolute-gerund-forms",
    level: "C1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Mustaqil sifatdoshli birikmalar; Mustaqil infinitivli birikma; Oldidan ot yoki olmosh kelgan gerund; Gerundning predloglardan keyin kelishi",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Morfologiya: Fe'lning shaxsi noma'lum shakllari (sifatdosh, gerund, infinitivning murakkab shakllari)",
    title: "Mustaqil sifatdoshli birikmalar va gerundning murakkab shakllari",
    intro: "<b>Mustaqil sifatdoshli birikma</b>ning <b>o'z egasi</b> bor va u bosh gap egasidan farq qiladi: <i><b>The work done</b>, we went home</i> — “Ish tugagach, uyga ketdik”. Bu rasmiy va yozma uslub. Gerund va infinitivning ham <b>murakkab shakllari</b> bor: <i>having done, being told, to have been done</i> — ular zamon va nisbatni (aniq/majhul) ko'rsatadi.",
    table: [
      ["Mustaqil sifatdoshli birikma", "ot + -ing / -ed (ot + sifatdosh)", "The weather being fine, we went out."],
      ["Qotib qolgan iboralar", "weather permitting, all things considered, generally speaking", "Weather permitting, we'll fly."],
      ["with + ot + sifatdosh", "with + ot + -ing/-ed", "With prices rising, people save more."],
      ["Gerund: perfect / passive", "having done / being done / having been done", "I remember being told..."],
      ["Infinitiv: perfect / passive / continuous", "to have done / to be done / to have been done / to be doing", "He seems to have forgotten."],
      ["Egalik + gerund", "my / his / Ali's + -ing", "I don't mind his coming late."]
    ],
    tableHead: ["Shakl", "Tuzilishi", "Misol"],
    rules: [
      "Mustaqil birikmaning egasi alohida: <i><b>The rain having stopped</b>, the children ran outside.</i> Agar ega bir xil bo'lsa — oddiy sifatdosh oboroti (<i>Having finished, I left</i>). Egasiz qilsangiz — “osilib qolgan” xato: ❌ <i>Walking home, the rain started</i> (yomg'ir yurmaydi!).",
      "Qotib qolgan iboralar: <i>weather permitting</i> (ob-havo imkon bersa), <i>all things considered</i>, <i>other things being equal</i>, <i>time permitting</i>, <i>strictly speaking</i>. <b>with</b> + ot + sifatdosh og'zaki nutqda keng: <i>He sat <b>with his eyes closed</b>.</i>",
      "<b>Perfect gerund</b> (having done) — oldinroq bo'lgan harakat: <i>He denied <b>having taken</b> the money.</i> <b>Passive gerund</b> (being done) — harakat egaga nisbatan qilingan: <i>I hate <b>being interrupted</b>.</i> <i>She was proud of <b>having been chosen</b>.</i>",
      "<b>Perfect infinitiv</b>: <i>I'm glad <b>to have met</b> you. He is said <b>to have been</b> a pilot.</i> <b>Passive infinitiv</b>: <i>This letter needs <b>to be signed</b>. The work has <b>to be done</b> today.</i>",
      "Gerund oldida <b>egalik olmoshi / 's</b> — harakatni kim qilayotganini ko'rsatadi: <i>I don't mind <b>his</b> coming. Do you mind <b>my</b> opening the window? We were surprised at <b>Aziz's</b> winning.</i> Og'zaki nutqda obyekt olmosh ham: <i>I don't mind <b>him</b> coming</i>.",
      "<b>need / want + -ing</b> (UK) majhul ma'noda: <i>The car needs <b>washing</b></i> = needs to be washed. IELTSda bunday shakllar Grammatical Range balini oshiradi."
    ],
    examples: [
      ["The guests having left, we started washing the dishes.", "Mehmonlar ketgach, idish yuvishga tushdik."],
      ["Weather permitting, we'll climb Chimgan on Sunday.", "Ob-havo imkon bersa, yakshanba kuni Chimyonga chiqamiz."],
      ["He admitted having made a mistake in the report.", "U hisobotda xato qilganini tan oldi."],
      ["Nobody likes being criticised in public.", "Hech kim ommaviy tanqid qilinishni yoqtirmaydi."],
      ["Do you mind my sitting here?", "Shu yerga o'tirsam, qarshi emasmisiz?"]
    ],
    quiz: [
      { q: "___, the meeting was cancelled.", o: ["The director being ill", "Being ill", "The director ill being"], a: 0, e: "Alohida ega → mustaqil birikma: <b>The director being ill</b>." },
      { q: "___, we'll have the picnic outside.", o: ["Weather permitted", "Weather permitting", "Permitting weather"], a: 1, e: "Qotib qolgan ibora: <b>weather permitting</b>." },
      { q: "She denied ___ the window.", o: ["to have broken", "having broken", "have broken"], a: 1, e: "deny + gerund, oldinroq harakat → <b>having broken</b>." },
      { q: "I don't like ___ what to do.", o: ["telling", "being told", "to tell"], a: 1, e: "Majhul gerund: <b>being told</b>." },
      { q: "I'm pleased ___ you at last.", o: ["to have met", "having meet", "to having met"], a: 0, e: "Perfect infinitiv: <b>to have met</b>." },
      { q: "This form needs ___ by tomorrow.", o: ["to complete", "to be completed", "being complete"], a: 1, e: "Majhul infinitiv: <b>to be completed</b>." },
      { q: "Do you mind ___ the window?", o: ["me to open", "my opening", "I opening"], a: 1, e: "Egalik + gerund: <b>my opening</b>." },
      { q: "Which sentence is correct?", o: ["Walking home, the rain started.", "Walking home, I got caught in the rain.", "Walked home, the rain caught me."], a: 1, e: "Sifatdosh egasi bosh gap egasi bilan bir xil bo'lishi kerak." },
      { q: "To'ldiring: He was proud of ___ (choose) for the team. (majhul, perfect)", w: ["having been chosen"], e: "<b>having been chosen</b>." },
      { q: "To'ldiring: The house needs ___ (paint). (UK, gerund)", w: ["painting"], e: "need + <b>-ing</b> = majhul ma'no." }
    ],
    speak: ["All things considered, it was a good year.", "Weather permitting, we'll go to the mountains.", "I can't stand being kept waiting.", "I'm glad to have met you."]
  },
  {
    id: "ref-clauses-punctuation",
    level: "C1",
    murphy: "G'apporov, Qosimova: Ingliz tili grammatikasi — Ergash gaplarning turlari; Ega, kesim va to'ldiruvchi ergash gaplar; Hol ergash gaplar; Tinish belgilari",
    book: "Bo'ronov va boshq.: English Grammar (1974) — Sintaksis: Ergashgan qo'shma gap; Tinish belgilari",
    title: "Ergash gaplar turlari va tinish belgilari",
    intro: "Ergashgan qo'shma gapda ergash gap bosh gapning biror bo'lagi vazifasini bajaradi: <b>ega</b> (<i>What he said</i> surprised me), <b>to'ldiruvchi</b> (I know <i>that she left</i>) yoki <b>hol</b> (payt, sabab, natija, to'siqsiz, maqsad, tarz). O'zbekchada ergash gap odatda bosh gapdan <b>oldin</b> va “-gan, -sa, -guncha” qo'shimchalari bilan keladi; inglizchada esa <b>bog'lovchi so'z bilan</b> va ko'pincha bosh gapdan keyin. Tinish belgilari IELTS Writingda ham baholanadi.",
    table: [
      ["Ega / to'ldiruvchi ergash gap", "what, that, whether, how, why", "What she said was true. I wonder why he left."],
      ["Payt / o'rin", "when, while, as soon as, until, since, before / where, wherever", "I'll call you as soon as I arrive."],
      ["Sabab / natija", "because, as, since / so that, so ... that, such ... that", "It was so hot that we stayed in."],
      ["To'siqsiz / maqsad", "although, even though, while / so that, in order that", "I left early so that I could catch the bus."],
      ["Tarz", "as, as if, as though", "He talks as if he knew everything."],
      ["Tinish belgilari", ", ; : ' — ", "vergul, nuqtali vergul, ikki nuqta, apostrof"]
    ],
    tableHead: ["Tur", "Bog'lovchilar / belgilar", "Misol"],
    rules: [
      "<b>Ega ergash gap</b>: <i><b>What</b> I need is a holiday. <b>That</b> she resigned surprised everyone</i> (ko'pincha: <i>It surprised everyone that she resigned</i>). Ichida so'roq tartibi yo'q: <i>What he wants</i> (what does he want emas).",
      "Payt va shart ergash gaplarida kelasi zamon uchun <b>Present</b>: <i>When I <b>get</b> home, I'll call you</i> (When I will get emas). <b>as if / as though</b> + noreal holatda past: <i>She treats me as if I <b>were</b> a child.</i>",
      "<b>Vergul</b>: ergash gap <b>oldin</b> kelsa vergul qo'yiladi — <i>Although it was late, we continued.</i>; keyin kelsa odatda yo'q — <i>We continued although it was late.</i> Non-defining relative clause doim vergul bilan: <i>My sister, who lives in Kazan, is a nurse.</i> Defining clause — vergulsiz.",
      "<b>that</b> dan oldin vergul qo'yilmaydi (o'zbekchadagi “ki” dan farqli): <i>I think that he is right</i> (I think, that... emas). <b>Vergul bilan ikki to'liq gapni</b> ulash xato (comma splice): ❌ <i>It was late, we went home.</i> → <i>It was late, <b>so</b> we went home.</i> yoki <i>It was late<b>;</b> we went home.</i>",
      "<b>Nuqtali vergul (;)</b> — mazmunan yaqin ikki to'liq gap orasida, ayniqsa <i>however, therefore</i> oldidan: <i>Prices rose<b>;</b> however, demand stayed high.</i> <b>Ikki nuqta (:)</b> — ro'yxat yoki izohdan oldin: <i>You need three things: patience, practice and time.</i>",
      "<b>Apostrof</b>: egalik (<i>the students' essays</i>) va qisqartma (<i>it's = it is</i>). <b>its</b> (egalik) apostrofsiz! IELTS Writing: qisqartmalardan (don't, it's) qoching, ko'p xil ergash gap ishlating — Grammatical Range and Accuracy uchun."
    ],
    examples: [
      ["What surprised me most was the hospitality of the people in Khorezm.", "Meni eng ko'p hayratga solgani Xorazm odamlarining mehmondo'stligi bo'ldi."],
      ["Although the exam was difficult, most students passed it.", "Imtihon qiyin bo'lsa-da, ko'pchilik talabalar undan o'tdi."],
      ["She saved money so that she could study in Seoul.", "U Seulda o'qishi uchun pul yig'di."],
      ["He spoke as if he had lived in London for years.", "U go'yo Londonda yillar davomida yashagandek gapirdi."],
      ["The city has two problems: traffic and air pollution.", "Shaharning ikki muammosi bor: tirbandlik va havo ifloslanishi."]
    ],
    quiz: [
      { q: "___ he told us was completely false.", o: ["That", "What", "Which"], a: 1, e: "Ega ergash gap: <b>What</b> he told us..." },
      { q: "I'll text you as soon as I ___ at the station.", o: ["will arrive", "arrive", "would arrive"], a: 1, e: "Payt ergash gapida Present: <b>arrive</b>." },
      { q: "It was ___ a boring film that I fell asleep.", o: ["so", "such", "too"], a: 1, e: "such + (a) + sifat + ot + that: <b>such</b>." },
      { q: "He looks ___ he hasn't slept for days.", o: ["as if", "like as", "so that"], a: 0, e: "Tarz: <b>as if</b>." },
      { q: "Which sentence is punctuated correctly?", o: ["I think, that he is right.", "Although it rained we went out.", "Although it rained, we went out."], a: 2, e: "Ergash gap oldin → vergul; that dan oldin vergul yo'q." },
      { q: "Which sentence is correct?", o: ["It was cold, we stayed inside.", "It was cold; we stayed inside.", "It was cold we stayed, inside."], a: 1, e: "Ikki to'liq gap: <b>;</b> yoki so bilan (comma splice xato)." },
      { q: "Which sentence is correct?", o: ["My brother who lives in Fergana is a teacher. (bitta akam bor)", "My brother, who lives in Fergana, is a teacher.", "My brother, that lives in Fergana, is a teacher."], a: 1, e: "Non-defining → vergul bilan, that ishlatilmaydi." },
      { q: "The company improved ___ profits.", o: ["it's", "its", "its'"], a: 1, e: "Egalik → <b>its</b> (apostrofsiz)." },
      { q: "To'ldiring: I don't know ___ he will come or not.", w: ["whether", "if"], e: "To'ldiruvchi ergash gap: <b>whether</b> (or not)." },
      { q: "To'ldiring: She studied hard ___ that she could get a scholarship. (maqsad)", w: ["so"], e: "Maqsad: <b>so that</b>." }
    ],
    speak: ["What I enjoy most is travelling with my family.", "Although it was raining, we went to the bazaar.", "I'll call you as soon as I get home.", "He talks as if he knew everything."]
  }
]);
