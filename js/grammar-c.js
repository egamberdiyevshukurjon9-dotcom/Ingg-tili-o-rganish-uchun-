// C1–C2 darajadagi grammatika darslari. Mavzular tartibi Advanced Grammar in Use (Hewings) ga tayanadi.
// Matnlar original: kitoblardan ko'chirilmagan, faqat mavzular tartibi olingan.
// Savol turlari: {q, o:[variantlar], a:to'g'ri indeks, e:izoh} yoki {q, w:[to'g'ri javoblar], e:izoh} (yozma javob).

window.GRAMMAR.push(...[
  {
    id: "c1-inversion",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 99–100",
    book: "Longman Essay Activator, Cambridge IELTS 19",
    title: "Inversiya: Never have I..., Not only..., Hardly...when",
    intro: "Rasmiy va ta'sirli nutqda gap boshiga <b>inkor yoki cheklovchi ravish</b> chiqarilsa, undan keyin so'roq gapdagidek tartib keladi: <b>yordamchi fe'l + ega + asosiy fe'l</b>. Bu IELTS Writing va rasmiy nutqda yuqori darajani ko'rsatadi.",
    table: [
      ["Never / Rarely / Seldom", "Never have I seen such a crowd.", "Hech qachon bunday olomonni ko'rmaganman."],
      ["Not only ... but (also)", "Not only did she win, but she also broke the record.", "U nafaqat g'olib bo'ldi, balki rekordni ham yangiladi."],
      ["Hardly / Scarcely ... when", "Hardly had we sat down when the lights went out.", "O'tirishimiz bilan chiroq o'chdi."],
      ["No sooner ... than", "No sooner had he left than it started to rain.", "U ketishi bilanoq yomg'ir boshlandi."],
      ["Under no circumstances", "Under no circumstances should you share your password.", "Hech qanday holatda parolni bermang."],
      ["Only then / Only after", "Only after the test did I understand the rule.", "Faqat testdan keyingina qoidani tushundim."]
    ],
    tableHead: ["Boshlovchi ibora", "Misol", "Tarjima"],
    rules: [
      "Tartib: <b>inkor ibora + yordamchi fe'l + ega + fe'l</b>. Yordamchi fe'l bo'lmasa (Present/Past Simple), <b>do / does / did</b> qo'shiladi: <i>Rarely does he complain.</i>",
      "<b>Hardly / Scarcely</b> bilan <b>when</b>, <b>No sooner</b> bilan esa <b>than</b> ishlatiladi. Ikkalasida ham odatda Past Perfect: <i>Hardly had I arrived when...</i>",
      "<b>Not until</b> va <b>Only + vaqt/shart</b> iboralarida inversiya bosh gapda bo'ladi: <i>Not until I read the letter did I realise the truth.</i>",
      "<b>Little</b> “umuman bilmaslik” ma'nosida: <i>Little did they know that...</i> = Ular umuman bilmas edilar...",
      "Inversiya rasmiy uslub belgisi. Oddiy suhbatda ortiqcha ishlatilsa, sun'iy eshitiladi; Writing Task 2 da esa 1–2 marta ishlatish yetarli."
    ],
    examples: [
      ["Seldom do we see such dedication in young athletes.", "Yosh sportchilarda bunday fidoyilikni kamdan-kam ko'ramiz."],
      ["Not only does pollution harm wildlife, but it also damages public health.", "Ifloslanish nafaqat yovvoyi tabiatga zarar yetkazadi, balki jamoat salomatligiga ham ziyon qiladi."],
      ["Little did I know that this decision would change my life.", "Bu qaror hayotimni o'zgartirishini umuman bilmagan edim."],
      ["Only by investing in education can a country develop.", "Faqat ta'limga sarmoya kiritish orqaligina mamlakat rivojlana oladi."]
    ],
    quiz: [
      { q: "Never ___ such a beautiful sunset.", o: ["I have seen", "have I seen", "I saw"], a: 1, e: "Never gap boshida → inversiya: <b>have I seen</b>." },
      { q: "Hardly had the film started ___ the phone rang.", o: ["than", "when", "then"], a: 1, e: "Hardly ... <b>when</b>." },
      { q: "No sooner had I paid ___ I noticed the mistake.", o: ["than", "when", "that"], a: 0, e: "No sooner ... <b>than</b>." },
      { q: "Rarely ___ late for meetings.", o: ["she is", "is she", "does she"], a: 1, e: "be fe'li o'zi yordamchi vazifasida: <b>is she</b>." },
      { q: "Not only ___ the exam, but he also got the highest score.", o: ["he passed", "did he pass", "passed he"], a: 1, e: "Past Simple → <b>did</b> + ega + fe'l: <b>did he pass</b>." },
      { q: "Under no circumstances ___ leave the building during the test.", o: ["candidates should", "should candidates", "candidates must to"], a: 1, e: "Inversiya: <b>should candidates</b>." },
      { q: "Yordamchi so'zni yozing: “Little ___ they know what was waiting for them.”", w: ["did"], e: "Past Simple inversiyasi → <b>did</b>." },
      { q: "Yordamchi so'zni yozing: “Seldom ___ he eat breakfast.” (Present Simple)", w: ["does"], e: "he + Present Simple → <b>does</b>." },
      { q: "Yozing: “Only after the meeting ___ I realise my error.”", w: ["did"], e: "Only after... bosh gapda inversiya → <b>did</b> I realise." }
    ],
    speak: ["Never have I felt so proud of my team.", "Not only is it cheaper, but it is also faster.", "Hardly had I arrived when the meeting began.", "Under no circumstances should you give up."]
  },
  {
    id: "c1-cleft",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 96–97",
    book: "Longman Essay Activator, IELTS Vocabulary",
    title: "Cleft gaplar: What I need is..., It was John who...",
    intro: "<b>Cleft</b> (bo'lingan) gaplar bir gapni ikki qismga ajratib, <b>bir qismini alohida ta'kidlash</b> uchun ishlatiladi. O'zbekchadagi “-ku, aynan, ...gan narsa” ma'nolariga yaqin. Speaking'da fikrni aniq va ishonchli yetkazadi.",
    table: [
      ["It-cleft", "It was Aziz who fixed the car.", "Mashinani aynan Aziz tuzatdi."],
      ["It-cleft (vaqt/joy)", "It was in 2019 that we moved here.", "Biz bu yerga aynan 2019-yilda ko'chdik."],
      ["Wh-cleft", "What I need is a long holiday.", "Menga kerak narsa — uzoq ta'til."],
      ["Wh-cleft (fe'l)", "What she did was call the police.", "U qilgan ish — politsiyaga qo'ng'iroq qilish bo'ldi."],
      ["All-cleft", "All I want is some peace and quiet.", "Men xohlagan yagona narsa — tinchlik."],
      ["Teskari wh-cleft", "A good teacher is what this school needs.", "Bu maktabga kerak narsa — yaxshi o'qituvchi."]
    ],
    tableHead: ["Tur", "Misol", "Tarjima"],
    rules: [
      "It-cleft: <b>It + be + ta'kidlanuvchi qism + who/that + qolgan qism</b>. Shaxs uchun <i>who</i> yoki <i>that</i>, boshqa hollarda <i>that</i>.",
      "Wh-cleft: <b>What + ega + fe'l + be + ta'kidlanuvchi qism</b>. Fe'l zamonini qolgan gapga moslang: <i>What surprised me was...</i>",
      "Harakatni ta'kidlashda <b>What ... do/did is/was + (to) fe'l</b>: <i>What you should do is (to) apologise.</i> <i>to</i> ixtiyoriy.",
      "<b>All</b> “faqat” ma'nosida: <i>All I said was hello.</i> = Men faqat salom dedim.",
      "Ko'plikdagi ot bilan wh-cleft ko'pincha birlikda qoladi: <i>What we need is more teachers.</i> (rasmiy uslubda <i>are</i> ham uchraydi)."
    ],
    examples: [
      ["It was my grandmother who taught me to read.", "Menga o'qishni aynan buvim o'rgatgan."],
      ["What worries me most is the cost of housing.", "Meni eng ko'p xavotirga soladigan narsa — uy-joy narxi."],
      ["It's not the money that matters, it's the experience.", "Gap pulda emas, tajribada."],
      ["What I'd like to do is travel around Asia.", "Men qilmoqchi bo'lgan ish — Osiyo bo'ylab sayohat qilish."]
    ],
    quiz: [
      { q: "It was Dilnoza ___ won the prize.", o: ["which", "who", "what"], a: 1, e: "Shaxs → <b>who</b> (yoki that)." },
      { q: "___ I need now is a cup of coffee.", o: ["That", "Which", "What"], a: 2, e: "Wh-cleft → <b>What</b>." },
      { q: "It was in Bukhara ___ they first met.", o: ["where", "that", "which"], a: 1, e: "It-cleftda joy/vaqt ta'kidlanganda <b>that</b> ishlatiladi." },
      { q: "What he did ___ leave without saying goodbye.", o: ["was", "did", "has"], a: 0, e: "What ... did <b>was</b> + fe'l." },
      { q: "___ I said was that I was tired.", o: ["All", "Every", "Only"], a: 0, e: "All-cleft: <b>All</b> I said was..." },
      { q: "Qaysi biri “aynan narx meni to'xtatdi” ma'nosini beradi?", o: ["The price stopped me.", "It was the price that stopped me.", "The price was stopping me."], a: 1, e: "Ta'kid uchun it-cleft: <b>It was the price that stopped me.</b>" },
      { q: "Yozing: “What surprised me ___ his calm reaction.” (o'tgan zamon)", w: ["was"], e: "Wh-cleft o'tgan zamonda → <b>was</b>." },
      { q: "Yozing: “It ___ my brother who called, not me.” (o'tgan zamon)", w: ["was"], e: "It-cleft: It <b>was</b> my brother who..." }
    ],
    speak: ["What I really enjoy is reading in the evening.", "It was my teacher who inspired me.", "All I want is a quiet weekend.", "What we need is a long-term solution."]
  },
  {
    id: "c1-conditionals",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 83–88",
    book: "Cambridge IELTS 19, Ideas for IELTS Essay Topics (IELTS Liz)",
    title: "Murakkab shart gaplar: were to, should you, but for, otherwise, provided that",
    intro: "C1 darajada shart gaplar faqat <b>if</b> bilan cheklanmaydi. Rasmiy uslubda <b>if</b> tushirib, inversiya ishlatiladi; <b>provided that, unless, but for, otherwise</b> kabi bog'lovchilar shartni aniqroq ifodalaydi.",
    table: [
      ["were to + fe'l", "If the government were to ban cars, cities would be quieter.", "Xayoliy/kam ehtimolli kelajak"],
      ["Should + ega", "Should you need help, call me.", "= If you should need help (rasmiy)"],
      ["Had + ega + V3", "Had I known, I would have come.", "= If I had known"],
      ["Were + ega", "Were I in your position, I would accept.", "= If I were"],
      ["But for / Without", "But for your help, I would have failed.", "Agar sening yordaming bo'lmaganda"],
      ["provided / providing (that), as long as", "You can go provided that you finish first.", "...sharti bilan"],
      ["otherwise", "Hurry up, otherwise we'll miss the train.", "aks holda"]
    ],
    tableHead: ["Shakl", "Misol", "Izoh"],
    rules: [
      "<b>were to</b> kelajakdagi kam ehtimolli yoki faraziy vaziyatni bildiradi va rasmiy eshitiladi: <i>If prices were to rise, demand would fall.</i>",
      "Inversiyali shart: <b>Should / Were / Had</b> gap boshiga chiqadi, <b>if</b> tushib qoladi. Inkorda qisqartma ishlatilmaydi: <i>Had it not been for...</i> (Hadn't it been emas).",
      "<b>But for + ot</b> = “agar ... bo'lmaganda”: <i>But for the rain, we would have won.</i> Fe'l emas, ot yoki ot iborasi keladi.",
      "<b>provided (that) / providing / as long as / on condition that</b> — shart qat'iy bo'lganda. Undan keyin kelasi zamon uchun ham Present Simple: <i>provided you pay</i>.",
      "<b>Mixed conditional</b>: o'tgan shart + hozirgi natija: <i>If I had studied medicine, I would be a doctor now.</i>",
      "<b>otherwise</b> = if not; alohida gap boshida yoki vergul/nuqta-vergul bilan keladi."
    ],
    examples: [
      ["Were the city to invest in public transport, traffic would improve.", "Agar shahar jamoat transportiga sarmoya kiritsa, tirbandlik kamayardi."],
      ["Should you have any questions, please contact the office.", "Savollaringiz bo'lsa, ofisga murojaat qiling."],
      ["Had it not been for my coach, I would never have succeeded.", "Murabbiyim bo'lmaganda, hech qachon muvaffaqiyatga erishmas edim."],
      ["If I had taken that job, I would be living in London now.", "O'sha ishni olganimda, hozir Londonda yashayotgan bo'lardim."]
    ],
    quiz: [
      { q: "___ you need any further information, do not hesitate to contact us.", o: ["Should", "Would", "Were"], a: 0, e: "Rasmiy shart: <b>Should</b> you need..." },
      { q: "___ I known about the problem, I would have helped.", o: ["If", "Had", "Have"], a: 1, e: "If I had known = <b>Had</b> I known." },
      { q: "___ your advice, I would have made a terrible mistake.", o: ["But for", "Unless", "Provided"], a: 0, e: "<b>But for</b> + ot = agar ... bo'lmaganda." },
      { q: "You can borrow my car ___ you drive carefully.", o: ["unless", "provided that", "otherwise"], a: 1, e: "Shart → <b>provided that</b>." },
      { q: "If I had saved money last year, I ___ a car now.", o: ["would have", "would have had", "will have"], a: 0, e: "Mixed conditional: hozirgi natija → <b>would have</b> (= ega bo'lardim)." },
      { q: "Write it down, ___ you'll forget.", o: ["unless", "otherwise", "provided"], a: 1, e: "aks holda → <b>otherwise</b>." },
      { q: "Qaysi biri to'g'ri?", o: ["Hadn't it been for the storm, we would have arrived.", "Had it not been for the storm, we would have arrived.", "Had not it been for the storm, we would have arrived."], a: 1, e: "Inversiyali shartda inkor: <b>Had it not been</b>." },
      { q: "Yozing: “If the company ___ to close, hundreds would lose their jobs.” (were to)", w: ["were"], e: "Faraziy kelajak: <b>were</b> to close." },
      { q: "Yozing: “___ I in your shoes, I would apologise.” (If I were o'rnida)", w: ["were"], e: "Inversiya: <b>Were</b> I in your shoes..." }
    ],
    speak: ["Should you need any help, just let me know.", "Had I known earlier, I would have called you.", "But for my parents, I wouldn't be here today.", "You can join us provided that you arrive on time."]
  },
  {
    id: "c1-subjunctive",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 30–31",
    book: "Longman Essay Activator, Cambridge IELTS 19",
    title: "Subjunktiv va rasmiy tuzilmalar: I suggest that he be..., It's essential that...",
    intro: "<b>Subjunktiv</b> — talab, taklif, zarurat ifodalovchi rasmiy tuzilma. Unda fe'l <b>har doim asosiy shaklda</b> (to siz infinitiv) keladi: <i>-s</i> qo'shilmaydi, zamon o'zgarmaydi. Rasmiy xatlar va IELTS Writing uchun juda foydali.",
    table: [
      ["suggest, recommend, propose", "I suggest that he see a doctor.", "U shifokorga ko'rinishini taklif qilaman."],
      ["insist, demand, request", "They insisted that she be present.", "Ular uning ishtirok etishini talab qilishdi."],
      ["It is essential / vital / crucial that", "It is vital that every child have access to education.", "Har bir bolaning ta'limga ega bo'lishi juda muhim."],
      ["It is important / necessary that", "It is necessary that the form be signed.", "Shakl imzolanishi shart."],
      ["Inkor: not + fe'l", "We recommend that he not travel alone.", "Uning yolg'iz sayohat qilmasligini tavsiya qilamiz."]
    ],
    tableHead: ["Tuzilma", "Misol", "Tarjima"],
    rules: [
      "Fe'l asosiy shaklda: <i>he <b>be</b>, she <b>go</b>, it <b>remain</b></i>. Hatto o'tgan zamonda ham: <i>They demanded that he <b>leave</b>.</i>",
      "Inkor <b>not + fe'l</b> bilan, <i>do</i> siz: <i>I suggest that she <b>not</b> sign the contract.</i>",
      "Britaniya inglizchasida <b>should + fe'l</b> ham keng tarqalgan: <i>I suggest that he should see a doctor.</i> Ikkalasi ham to'g'ri.",
      "<b>suggest</b> dan keyin <i>to</i> + fe'l ishlatilmaydi: <i>I suggest to go</i> xato. To'g'risi: <i>I suggest going / I suggest that we go.</i>",
      "Qotib qolgan iboralar ham subjunktiv: <i>God save the King, be that as it may, come what may, if need be.</i>"
    ],
    examples: [
      ["The doctor recommended that she rest for a week.", "Shifokor unga bir hafta dam olishni tavsiya qildi."],
      ["It is essential that the report be finished by Friday.", "Hisobot juma kunigacha tugatilishi juda muhim."],
      ["The committee proposed that the fee be reduced.", "Qo'mita to'lovni kamaytirishni taklif qildi."],
      ["Come what may, I will finish this course.", "Nima bo'lsa ham, bu kursni tugataman."]
    ],
    quiz: [
      { q: "I suggest that he ___ more carefully.", o: ["drives", "drive", "drove"], a: 1, e: "Subjunktiv: asosiy shakl → <b>drive</b>." },
      { q: "It is essential that every student ___ on time.", o: ["is", "be", "was"], a: 1, e: "It is essential that + <b>be</b>." },
      { q: "They demanded that the manager ___ immediately.", o: ["resign", "resigned", "resigns"], a: 0, e: "O'tgan zamonda ham asosiy shakl: <b>resign</b>." },
      { q: "We recommend that she ___ the medicine on an empty stomach.", o: ["doesn't take", "not take", "not takes"], a: 1, e: "Inkor: <b>not take</b>." },
      { q: "Qaysi biri xato?", o: ["I suggest going home.", "I suggest that we go home.", "I suggest to go home."], a: 2, e: "<b>suggest to go</b> — xato." },
      { q: "The law requires that all drivers ___ insured.", o: ["are being", "be", "been"], a: 1, e: "require that + <b>be</b>." },
      { q: "Yozing: “It is vital that he ___ (know) the truth.”", w: ["know"], e: "Subjunktiv: <b>know</b> (knows emas)." },
      { q: "Yozing: “The teacher insisted that Ali ___ (stay) after class.”", w: ["stay", "should stay"], e: "<b>stay</b> (yoki should stay)." }
    ],
    speak: ["I suggest that we start the meeting earlier.", "It is essential that everyone be informed.", "The doctor recommended that he rest.", "Come what may, I'll keep going."]
  },
  {
    id: "c1-nominalisation",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 47–50",
    book: "Ideas for IELTS Essay Topics (IELTS Liz), Longman Essay Activator, IELTS Vocabulary",
    title: "Nominalizatsiya va akademik uslub (IELTS Writing Task 2)",
    intro: "<b>Nominalizatsiya</b> — fe'l yoki sifatni otga aylantirish: <i>decide → decision, grow → growth, important → importance</i>. Akademik matnda harakat emas, <b>tushuncha</b> markazga qo'yiladi. Natijada gap qisqaroq, ob'ektivroq va rasmiyroq bo'ladi.",
    table: [
      ["Prices rose sharply.", "There was a sharp rise in prices.", "Narxlarning keskin o'sishi"],
      ["People use the internet more.", "Increased internet use...", "Internetdan ko'proq foydalanish"],
      ["The government decided to...", "The government's decision to...", "Hukumat qarori"],
      ["Because cities are growing fast...", "Due to rapid urban growth...", "Shaharlarning tez o'sishi tufayli"],
      ["If we reduce waste...", "The reduction of waste...", "Chiqindilarni kamaytirish"]
    ],
    tableHead: ["Og'zaki uslub", "Akademik uslub", "Ma'no"],
    rules: [
      "Fe'l → ot qo'shimchalari: <b>-tion</b> (pollute → pollution), <b>-ment</b> (develop → development), <b>-ance/-ence</b> (rely → reliance), <b>-al</b> (approve → approval), <b>-ure</b> (fail → failure).",
      "Ravish sifatga aylanadi: <i>rose <b>sharply</b> → a <b>sharp</b> rise</i>; <i>grew <b>rapidly</b> → <b>rapid</b> growth</i>.",
      "<b>because + gap</b> o'rniga <b>due to / owing to / as a result of + ot</b>: <i>Due to the increase in traffic...</i>",
      "Shaxsiy olmoshlarni kamaytiring: <i>I think</i> o'rniga <i>It is widely believed that...</i>; <i>you</i> o'rniga <i>individuals, people, citizens</i>.",
      "Haddan oshirmang: bir gapda 3–4 nominalizatsiya matnni og'irlashtiradi. Maqsad — aniqlik, chalkashlik emas.",
      "IELTS'da foydali juftliklar: <i>access, impact, expansion, decline, consumption, awareness, investment</i>."
    ],
    examples: [
      ["The rapid expansion of cities has led to a decline in green spaces.", "Shaharlarning tez kengayishi yashil hududlarning qisqarishiga olib keldi."],
      ["Greater investment in education would result in a reduction in crime.", "Ta'limga ko'proq sarmoya jinoyatchilikning kamayishiga olib kelardi."],
      ["Public awareness of climate change has increased considerably.", "Iqlim o'zgarishi haqidagi jamoatchilik xabardorligi sezilarli oshdi."],
      ["The failure of the project was due to poor planning.", "Loyihaning muvaffaqiyatsizligi yomon rejalashtirish tufayli edi."]
    ],
    quiz: [
      { q: "decide → ___", o: ["decidement", "decision", "decidance"], a: 1, e: "<b>decision</b>." },
      { q: "“Unemployment fell slightly.” → “There was a ___ fall in unemployment.”", o: ["slightly", "slight", "slighter"], a: 1, e: "Ot oldida sifat: <b>slight</b>." },
      { q: "___ the increase in tourism, prices have gone up.", o: ["Because", "Due to", "Although"], a: 1, e: "Ot iborasidan oldin <b>Due to</b>." },
      { q: "Qaysi gap akademik uslubda?", o: ["We use too much plastic and it's bad.", "Excessive plastic consumption is harmful to the environment.", "People use plastic a lot, you know."], a: 1, e: "Nominalizatsiya + rasmiy lug'at: <b>Excessive plastic consumption...</b>" },
      { q: "rely → ___", o: ["reliance", "reliment", "reliation"], a: 0, e: "<b>reliance</b> (on)." },
      { q: "“People are more aware.” → “There is greater public ___.”", o: ["aware", "awareness", "awarement"], a: 1, e: "<b>awareness</b>." },
      { q: "Yozing: grow → ___ (ot)", w: ["growth"], e: "<b>growth</b>." },
      { q: "Yozing: pollute → ___ (ot)", w: ["pollution"], e: "<b>pollution</b>." },
      { q: "Yozing: develop → ___ (ot)", w: ["development"], e: "<b>development</b>." }
    ],
    speak: ["The rapid growth of cities is a serious concern.", "There has been a sharp rise in living costs.", "Investment in education leads to economic development.", "Public awareness of the issue has increased."]
  },
  {
    id: "c1-hedging",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 21–22, 57",
    book: "Ideas for IELTS Essay Topics (IELTS Liz), Longman Essay Activator",
    title: "Hedging va fikr bildirish: tend to, appear to, it could be argued that",
    intro: "<b>Hedging</b> — fikrni ehtiyotkorlik bilan, haddan tashqari qat'iy qilmasdan aytish. Akademik matnda “hamma”, “har doim”, “aniq” kabi mutlaq so'zlar zaif ko'rinadi. <b>Stance</b> esa muallifning o'z pozitsiyasini aniq, lekin muloyim ko'rsatishi.",
    table: [
      ["Fe'llar", "tend to, appear to, seem to, suggest, indicate", "Young people tend to spend more online."],
      ["Modal fe'llar", "may, might, could", "This could lead to further problems."],
      ["Ravishlar", "arguably, possibly, generally, largely, to some extent", "This is arguably the biggest issue."],
      ["Shaxssiz tuzilmalar", "It could be argued that..., It is widely believed that...", "It could be argued that tests are unfair."],
      ["Miqdor cheklovi", "many, some, a majority of, in most cases", "Many experts agree that..."],
      ["Pozitsiya (stance)", "I would argue that..., It seems to me that..., Admittedly,...", "Admittedly, there are some drawbacks."]
    ],
    tableHead: ["Vosita", "Iboralar", "Misol"],
    rules: [
      "<b>tend to + fe'l</b> = odatda shunday bo'ladi: <i>Older people tend to prefer newspapers.</i> “All old people prefer” deyishdan ko'ra xavfsizroq.",
      "<b>appear / seem to + fe'l</b>; o'tgan harakat uchun <b>to have + V3</b>: <i>The policy appears to have failed.</i>",
      "<b>It + passive + that</b>: <i>It is often said / It is generally accepted / It could be argued that...</i> — fikrni umumlashtiradi.",
      "Mutlaq so'zlarni yumshating: <i>always → often, all → most, prove → suggest, will → is likely to</i>.",
      "<b>be likely / unlikely to</b> ehtimolni bildiradi: <i>Prices are likely to rise.</i>",
      "Haddan tashqari hedging ham yomon: har bir gapda <i>might possibly perhaps</i> bo'lsa, fikringiz yo'qdek ko'rinadi."
    ],
    examples: [
      ["It could be argued that social media does more harm than good.", "Ijtimoiy tarmoqlar foydadan ko'ra ko'proq zarar keltiradi, deb ta'kidlash mumkin."],
      ["Students who read regularly tend to write more accurately.", "Muntazam o'qiydigan talabalar odatda aniqroq yozishadi."],
      ["The evidence appears to support this view.", "Dalillar bu fikrni qo'llab-quvvatlayotganga o'xshaydi."],
      ["This is, to some extent, a matter of personal choice.", "Bu ma'lum darajada shaxsiy tanlov masalasi."]
    ],
    quiz: [
      { q: "Qaysi gap eng akademik va ehtiyotkor?", o: ["All teenagers are addicted to phones.", "Teenagers tend to spend a lot of time on their phones.", "Teenagers always use phones."], a: 1, e: "<b>tend to</b> — mutlaq bo'lmagan umumlashma." },
      { q: "The experiment appears ___ successful last year.", o: ["to be", "to have been", "being"], a: 1, e: "O'tgan voqea → <b>to have been</b>." },
      { q: "It ___ argued that technology isolates people.", o: ["could be", "can to be", "is arguing"], a: 0, e: "<b>It could be argued that</b>." },
      { q: "“This proves that diet affects mood.” — yumshoqroq varianti:", o: ["This shows clearly that...", "This suggests that...", "This is certain that..."], a: 1, e: "prove → <b>suggest</b>." },
      { q: "Prices are ___ to rise next year.", o: ["likely", "probably", "possible"], a: 0, e: "<b>be likely to</b> + fe'l." },
      { q: "___, there are some disadvantages to this approach.", o: ["Admittedly", "Admitted", "Admit"], a: 0, e: "Pozitsiya ravishi: <b>Admittedly</b>." },
      { q: "Yozing: “People ___ to trust information from friends.” (odatda)", w: ["tend"], e: "<b>tend</b> to." },
      { q: "Yozing: “It is widely ___ that exercise improves mood.” (believe)", w: ["believed"], e: "It is widely <b>believed</b> that..." }
    ],
    speak: ["It could be argued that exams are not the best way to measure ability.", "Young people tend to adapt to change more quickly.", "The new policy appears to have worked.", "To some extent, I agree with this view."]
  },
  {
    id: "c1-ellipsis",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 90–94",
    book: "Cambridge IELTS 19, IELTS Vocabulary",
    title: "Ellipsis va almashtirish: so / not, do so, one / ones",
    intro: "Takrorlashdan qochish uchun ingliz tili so'zlarni <b>tushirib qoldiradi (ellipsis)</b> yoki <b>qisqa so'z bilan almashtiradi (substitution)</b>. Bu nutqni tabiiy va ravon qiladi — Speaking'da fluency balini oshiradi.",
    table: [
      ["so / not (gap o'rnida)", "Is it going to rain? — I think so. / I hope not.", "Shunday deb o'ylayman / Umid qilamanki, yo'q."],
      ["do so (fe'l iborasi o'rnida)", "He promised to call, but he didn't do so.", "Qo'ng'iroq qilishni va'da qildi, lekin qilmadi."],
      ["one / ones (sanaladigan ot)", "I don't like this shirt. I prefer the blue one.", "Ko'k rangdagisini afzal ko'raman."],
      ["Yordamchi fe'l bilan ellipsis", "She can swim, but I can't.", "U suza oladi, men esa yo'q."],
      ["to bilan ellipsis", "I didn't want to go, but I had to.", "Borishni istamadim, lekin majbur bo'ldim."],
      ["neither / so + yordamchi", "I'm tired. — So am I.", "Men ham."]
    ],
    tableHead: ["Usul", "Misol", "Tarjima"],
    rules: [
      "<b>think, hope, expect, suppose, believe, I'm afraid</b> dan keyin <b>so</b> (ijobiy) yoki <b>not</b> (inkor): <i>I hope so. I'm afraid not.</i>",
      "<i>think / believe / expect</i> bilan inkor ko'pincha <b>I don't think so</b> shaklida; <i>hope</i> va <i>be afraid</i> bilan faqat <b>I hope not, I'm afraid not</b>.",
      "<b>one / ones</b> faqat sanaladigan otlar o'rnida: <i>the red one, the new ones</i>. Sanalmaydigan ot uchun ishlatilmaydi: <i>I prefer white bread</i> (white one emas).",
      "<b>do so</b> rasmiyroq; ko'pincha harakat fe'llari bilan: <i>Applicants must register online. Those who fail to do so...</i>",
      "Ikkinchi qismda fe'l iborasi tushib qoladi, faqat yordamchi qoladi: <i>I haven't finished, but Ali has.</i>"
    ],
    examples: [
      ["Will the shop be open tomorrow? — I expect so.", "Do'kon ertaga ochiq bo'ladimi? — Shunday deb o'ylayman."],
      ["Are we late? — I hope not.", "Kechikdikmi? — Umid qilamanki, yo'q."],
      ["Students may leave early, but only if they have permission to do so.", "Talabalar erta ketishlari mumkin, faqat bunga ruxsatlari bo'lsa."],
      ["These shoes are too small. Have you got any bigger ones?", "Bu poyabzallar juda kichik. Kattaroqlari bormi?"]
    ],
    quiz: [
      { q: "Will it be sunny tomorrow? — I hope ___.", o: ["it", "so", "yes"], a: 1, e: "<b>I hope so.</b>" },
      { q: "Is the museum closed today? — I'm afraid ___.", o: ["not", "no", "don't"], a: 0, e: "Inkor: <b>I'm afraid not.</b>" },
      { q: "Is he coming? — I don't think ___.", o: ["not", "it", "so"], a: 2, e: "<b>I don't think so.</b>" },
      { q: "I'd like a coffee. A large ___, please.", o: ["one", "ones", "it"], a: 0, e: "Birlik, sanaladigan → <b>one</b>." },
      { q: "I lost my gloves, so I bought some new ___.", o: ["one", "ones", "them"], a: 1, e: "Ko'plik → <b>ones</b>." },
      { q: "She said she would apologise, and she did ___.", o: ["it so", "so", "one"], a: 1, e: "<b>did so</b> = apologised." },
      { q: "Yozing: “I wanted to help, but I wasn't able ___.”", w: ["to"], e: "To bilan ellipsis: wasn't able <b>to</b>." },
      { q: "Yozing: “I haven't seen the film, but my sister ___.”", w: ["has"], e: "Faqat yordamchi qoladi: <b>has</b>." }
    ],
    speak: ["Is it going to be busy? I expect so.", "I'm afraid not, the tickets are sold out.", "I don't like the red one. I prefer the green one.", "I wanted to call you, but I didn't have time to."]
  },
  {
    id: "c1-modals",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 17–26",
    book: "Cambridge IELTS 19, Longman Essay Activator",
    title: "Murakkab modal fe'llar: needn't have vs didn't need to, be bound to, be supposed to",
    intro: "C1 darajada modal fe'llar nozik ma'no farqlarini beradi. Masalan, <b>needn't have done</b> va <b>didn't need to do</b> o'zbekchaga bir xil tarjima qilinishi mumkin, lekin inglizchada ma'nosi boshqa.",
    table: [
      ["needn't have + V3", "Ish qilingan, lekin keraksiz bo'lgan", "I needn't have cooked — they'd already eaten."],
      ["didn't need to + fe'l", "Kerak emas edi (odatda qilinmagan)", "I didn't need to cook, so I relaxed."],
      ["be bound to", "Albatta shunday bo'ladi (aminlik)", "She's bound to pass — she's brilliant."],
      ["be supposed to", "Kutilgan/qoida bo'yicha (lekin ko'pincha bajarilmaydi)", "You're supposed to wear a helmet."],
      ["must have / can't have + V3", "O'tmish haqida mantiqiy xulosa", "He can't have left — his coat is here."],
      ["should have + V3", "O'tmishdagi afsus/tanqid", "You should have told me."]
    ],
    tableHead: ["Shakl", "Ma'no", "Misol"],
    rules: [
      "<b>needn't have + V3</b>: harakat bajarilgan, lekin keyin keraksiz ekani ma'lum bo'lgan: <i>I needn't have taken an umbrella. (Oldim, lekin yomg'ir yog'madi.)</i>",
      "<b>didn't need to + fe'l</b>: kerak emas edi; odatda harakat qilinmagan (agar qilingan bo'lsa, kontekstdan bilinadi): <i>I didn't need to take an umbrella.</i>",
      "<b>be bound to</b> = katta ishonch bilan bashorat: <i>It's bound to rain at the weekend.</i> Ma'nosi: albatta, muqarrar.",
      "<b>be supposed to</b>: qoida, kelishuv yoki umumiy fikr; o'tgan zamonda ko'pincha bajarilmagan ishni bildiradi: <i>I was supposed to call her, but I forgot.</i>",
      "Mantiqiy xulosa: <b>must have</b> (aniq shunday), <b>can't / couldn't have</b> (aniq unday emas), <b>may / might have</b> (balki).",
      "<b>be to + fe'l</b> rasmiy reja yoki buyruq: <i>The president is to visit Samarkand next month.</i>"
    ],
    examples: [
      ["We needn't have hurried — the train was delayed.", "Shoshilishimiz shart emas ekan — poyezd kechikdi."],
      ["I didn't need to buy a ticket because my friend gave me one.", "Chipta olishim shart emasdi, chunki do'stim bittasini berdi."],
      ["Don't worry, someone is bound to know the answer.", "Xavotir olma, kimdir albatta javobni biladi."],
      ["This restaurant is supposed to be the best in town.", "Bu restoran shahardagi eng yaxshisi deyishadi."]
    ],
    quiz: [
      { q: "I washed the car, but it rained an hour later. I ___ it.", o: ["didn't need to wash", "needn't have washed", "mustn't have washed"], a: 1, e: "Qilingan, lekin keraksiz → <b>needn't have washed</b>." },
      { q: "The hotel offered free breakfast, so we ___ buy food. (va olmadik)", o: ["didn't need to", "needn't have", "weren't bound to"], a: 0, e: "Kerak bo'lmadi, qilinmadi → <b>didn't need to</b>." },
      { q: "With all that traffic, they ___ be late.", o: ["are bound to", "are supposed to", "needn't"], a: 0, e: "Ishonchli bashorat → <b>are bound to</b>." },
      { q: "You ___ park here — it's a no-parking zone.", o: ["aren't bound to", "aren't supposed to", "needn't have"], a: 1, e: "Qoida → <b>aren't supposed to</b>." },
      { q: "His car isn't outside. He ___ gone home already.", o: ["must have", "can't have", "needn't have"], a: 0, e: "Mantiqiy xulosa → <b>must have</b>." },
      { q: "She ___ stolen the money — she was abroad at the time.", o: ["must have", "can't have", "should have"], a: 1, e: "Imkonsiz → <b>can't have</b>." },
      { q: "The minister ___ to open the new hospital tomorrow.", o: ["is", "has", "does"], a: 0, e: "Rasmiy reja → <b>is to</b>." },
      { q: "Yozing: “I was ___ to meet him at six, but I forgot.” (suppose)", w: ["supposed"], e: "<b>was supposed to</b>." },
      { q: "Yozing: “You ___ have told me earlier! Now it's too late.” (tanqid)", w: ["should"], e: "O'tmishdagi tanqid → <b>should</b> have." }
    ],
    speak: ["I needn't have worried — everything went perfectly.", "She's bound to get the job.", "We were supposed to meet at six.", "He can't have forgotten our meeting."]
  },
  {
    id: "c1-emphasis",
    level: "C1",
    murphy: "Advanced Grammar in Use, Unit 98–100",
    book: "Longman Essay Activator, IELTS Vocabulary",
    title: "Fronting va ta'kid: do / did, Such was..., So + sifat + that",
    intro: "Gapning odatiy tartibini o'zgartirib (<b>fronting</b>) yoki yordamchi fe'l qo'shib, biror qismni alohida ta'kidlash mumkin. Bu nutqqa his-tuyg'u va kuch beradi.",
    table: [
      ["do / does / did + fe'l", "I do like your new haircut!", "Yangi soch turmagingiz rostdan ham yoqdi!"],
      ["So + sifat + be + ega + that", "So strong was the wind that trees fell.", "Shamol shunchalik kuchli ediki, daraxtlar qulab tushdi."],
      ["Such + be + ot + that", "Such was the demand that tickets sold out in minutes.", "Talab shunchalik katta ediki, chiptalar daqiqalarda tugadi."],
      ["To'ldiruvchini oldinga chiqarish", "That film I will never forget.", "O'sha filmni hech qachon unutmayman."],
      ["Joy ravishi + fe'l + ega", "Into the room walked a tall man.", "Xonaga baland bo'yli bir kishi kirib keldi."]
    ],
    tableHead: ["Usul", "Misol", "Tarjima"],
    rules: [
      "Tasdiq gapda <b>do / does / did + asosiy fe'l</b> ta'kid beradi; talaffuzda <i>do</i> urg'u oladi: <i>She <b>does</b> work hard.</i> Fe'l asosiy shaklda qoladi.",
      "Qarama-qarshilik yoki tuzatish uchun ham: <i>I didn't call, but I <b>did</b> send a message.</i>",
      "<b>So + sifat/ravish</b> gap boshida → inversiya: <i>So tired was I that I fell asleep.</i>",
      "<b>Such + be + ot</b> gap boshida → inversiya: <i>Such was his anger that nobody spoke.</i>",
      "Joy/harakat yo'nalishi ravishlaridan keyin (here, there, down, into...) ega ot bo'lsa, fe'l oldin keladi: <i>Here comes the bus.</i> Olmosh bo'lsa — yo'q: <i>Here it comes.</i>"
    ],
    examples: [
      ["I do understand your concerns, but we have no choice.", "Xavotirlaringizni chindan tushunaman, lekin boshqa iloj yo'q."],
      ["So popular was the course that a second group was opened.", "Kurs shunchalik mashhur ediki, ikkinchi guruh ochildi."],
      ["Such was the noise that we couldn't hear each other.", "Shovqin shunchalik katta ediki, bir-birimizni eshitolmadik."],
      ["Here comes the teacher!", "Mana, o'qituvchi kelyapti!"]
    ],
    quiz: [
      { q: "I ___ want to help you, but I'm really busy.", o: ["do", "am", "does"], a: 0, e: "I + ta'kid → <b>do</b> want." },
      { q: "He didn't finish the report, but he ___ start it.", o: ["did", "does", "was"], a: 0, e: "O'tgan zamonda ta'kid → <b>did</b> start." },
      { q: "She ___ look tired today.", o: ["do", "does", "is"], a: 1, e: "she → <b>does</b> look." },
      { q: "So difficult ___ that most students failed.", o: ["the exam was", "was the exam", "the exam is"], a: 1, e: "So + sifat → inversiya: <b>was the exam</b>." },
      { q: "___ was her talent that she won a scholarship at 15.", o: ["So", "Such", "Too"], a: 1, e: "Such + be + ot: <b>Such</b> was her talent..." },
      { q: "Qaysi biri to'g'ri?", o: ["Here the bus comes.", "Here comes the bus.", "Here comes it."], a: 1, e: "Ega ot → <b>Here comes the bus.</b>" },
      { q: "Yozing: “I didn't win, but I ___ try my best.” (ta'kid, o'tgan zamon)", w: ["did"], e: "O'tgan zamonda ta'kid → <b>did</b> try." },
      { q: "Yozing: “___ angry was he that he left the room.” (So/Such)", w: ["so"], e: "Sifat (angry) oldidan <b>So</b>." }
    ],
    speak: ["I do appreciate your help.", "So beautiful was the view that we stopped the car.", "Such was the heat that nobody went outside.", "Here comes the train!"]
  },
  {
    id: "c2-noun-phrases",
    level: "C2",
    murphy: "Advanced Grammar in Use, Unit 66–72",
    book: "IELTS Vocabulary, Ideas for IELTS Essay Topics (IELTS Liz)",
    title: "Murakkab ot iboralari va oldindan aniqlovchilar (premodification)",
    intro: "C2 darajadagi matnlarda ma'lumot <b>ot iboralariga zich joylanadi</b>: oldidan aniqlovchilar (sifat, ot, sifatdosh) va keyinidan aniqlovchilar (predlogli ibora, qisqartirilgan nisbiy gap). Bu fikrni qisqa va aniq ifodalash imkonini beradi.",
    table: [
      ["Ot + ot", "a government housing policy", "hukumatning uy-joy siyosati"],
      ["Murakkab sifat (defis)", "a well-written, three-page report", "yaxshi yozilgan, uch sahifali hisobot"],
      ["Sifatdosh oldindan", "a rapidly growing population", "tez o'sayotgan aholi"],
      ["Keyindan: -ing / V3", "students living abroad / the methods used", "chet elda yashayotgan talabalar / ishlatilgan usullar"],
      ["Keyindan: predlogli ibora", "a solution to the problem of waste", "chiqindi muammosiga yechim"],
      ["Keyindan: to-infinitiv", "the first person to arrive", "birinchi kelgan odam"]
    ],
    tableHead: ["Tuzilma", "Misol", "Tarjima"],
    rules: [
      "Ot + ot birikmasida birinchi ot odatda <b>birlikda</b>: <i>a five-year plan, a ten-minute walk</i> (years/minutes emas).",
      "Oldindan murakkab sifat <b>defis</b> bilan yoziladi: <i>a well-known writer</i>, lekin keyin kelganda defissiz: <i>the writer is well known</i>.",
      "Qisqartirilgan nisbiy gap: <i>people who live in cities → people <b>living</b> in cities</i>; <i>the data which were collected → the data <b>collected</b></i>.",
      "Sifatlar tartibi: <b>fikr – o'lcham – yosh – shakl – rang – kelib chiqish – material – maqsad</b>: <i>a lovely small old wooden box</i>.",
      "Uzun ot iboralarida egani topish muhim: <i>The <b>number</b> of students applying to universities abroad <b>has</b> increased.</i> (fe'l birlikda, chunki ega — number).",
      "Haddan tashqari uzun ot zanjiri (5+ ot) tushunarsiz bo'ladi; kerak bo'lsa <i>of</i> yoki nisbiy gapga ajrating."
    ],
    examples: [
      ["The rapidly rising cost of private healthcare is a growing concern.", "Xususiy tibbiyotning tez o'sib borayotgan narxi tobora jiddiy muammoga aylanmoqda."],
      ["Children raised in bilingual families often develop strong language skills.", "Ikki tilli oilalarda tarbiyalangan bolalar ko'pincha kuchli til ko'nikmalariga ega bo'ladi."],
      ["She gave a thought-provoking twenty-minute talk on urban design.", "U shahar dizayni haqida o'ylantiruvchi yigirma daqiqalik ma'ruza qildi."],
      ["The number of people working from home has doubled.", "Uydan ishlaydigan odamlar soni ikki baravar oshdi."]
    ],
    quiz: [
      { q: "We went on a ___ trip.", o: ["three-days", "three-day", "three days'"], a: 1, e: "Oldindan aniqlovchida birlik: <b>three-day</b>." },
      { q: "The number of tourists visiting Khiva ___ every year.", o: ["grow", "grows", "are growing"], a: 1, e: "Ega — <b>number</b> (birlik) → <b>grows</b>." },
      { q: "“people who work night shifts” = people ___ night shifts", o: ["worked", "working", "to work"], a: 1, e: "Faol ma'no → <b>working</b>." },
      { q: "“the results which were published last week” = the results ___ last week", o: ["publishing", "published", "to publish"], a: 1, e: "Majhul ma'no → <b>published</b>." },
      { q: "Qaysi biri to'g'ri tartibda?", o: ["a wooden beautiful old table", "a beautiful old wooden table", "an old wooden beautiful table"], a: 1, e: "Fikr – yosh – material: <b>a beautiful old wooden table</b>." },
      { q: "She was the first woman ___ the race.", o: ["winning", "to win", "won"], a: 1, e: "the first / last / only + ot + <b>to-infinitiv</b>: the first woman <b>to win</b>." },
      { q: "Yozing: “a writer who is well known” → “a ___ writer”", w: ["well-known", "well known"], e: "Oldindan: <b>well-known</b>." },
      { q: "Yozing: “a walk that takes ten minutes” → “a ten-___ walk”", w: ["minute"], e: "<b>ten-minute</b> walk (birlik)." }
    ],
    speak: ["The rapidly growing population needs better public services.", "Students studying abroad often feel homesick.", "It was a well-organised, two-day conference.", "The number of people cycling to work has increased."]
  },
  {
    id: "c2-discourse",
    level: "C2",
    murphy: "Advanced Grammar in Use, Unit 109–112",
    book: "Longman Essay Activator, Ideas for IELTS Essay Topics (IELTS Liz)",
    title: "Diskurs belgilari va bog'lanish (C2): that said, by the same token, be that as it may",
    intro: "C2 darajada matnni bog'lash uchun oddiy <i>however, moreover</i> yetarli emas. Nozik ma'noli <b>diskurs belgilari</b> fikrlar orasidagi munosabatni aniq ko'rsatadi: cheklash, o'xshashlik, e'tiroz, xulosa.",
    table: [
      ["that said / having said that", "Cheklash: oldingi fikrni qisman yumshatish", "The plan is expensive. That said, it may save money long-term."],
      ["by the same token", "O'xshashlik: xuddi shu mantiq bo'yicha", "Parents must respect teachers; by the same token, teachers must listen to parents."],
      ["be that as it may", "E'tirozni tan olib, davom etish", "The law is unpopular. Be that as it may, it must be obeyed."],
      ["even so / nonetheless", "Kutilmagan natija", "It was raining. Even so, the match went ahead."],
      ["in other words / that is to say", "Qayta ifodalash", "Costs rose by 50% — in other words, by half."],
      ["all things considered / on balance", "Yakuniy baho", "On balance, the benefits outweigh the risks."]
    ],
    tableHead: ["Ibora", "Vazifa", "Misol"],
    rules: [
      "<b>That said,</b> — oldingi gapdagi kuchli fikrni cheklaydi; odatda yangi gap boshida, verguldan oldin.",
      "<b>By the same token</b> — ikki holat bir xil sababga ega ekanini ko'rsatadi; oddiy <i>also</i> dan kuchliroq mantiqiy bog'lanish.",
      "<b>Be that as it may</b> — “shunday bo'lsa ham”: suhbatdoshning fikrini tan olib, o'z pozitsiyangizda qolasiz. Juda rasmiy.",
      "<b>Nonetheless / nevertheless</b> gap boshida yoki oxirida keladi; <i>although</i> kabi ikki gapni birlashtirmaydi.",
      "Bog'lanish (cohesion) faqat bog'lovchilar emas: <i>this, such, the former / the latter</i> kabi so'zlar ham oldingi fikrga ishora qiladi: <i>This trend...</i>",
      "Ortiqcha ishlatmang: har bir gap boshida diskurs belgisi bo'lsa, matn mexanik eshitiladi. IELTS'da “overuse of linking devices” ballni tushiradi."
    ],
    examples: [
      ["Online learning is flexible. That said, it requires a lot of self-discipline.", "Onlayn ta'lim moslashuvchan. Shunday bo'lsa-da, u kuchli o'z-o'zini nazorat qilishni talab qiladi."],
      ["If we expect honesty from politicians, by the same token we should expect it from journalists.", "Agar siyosatchilardan halollik kutsak, xuddi shu mantiq bilan jurnalistlardan ham kutishimiz kerak."],
      ["The decision may seem harsh. Be that as it may, it was necessary.", "Qaror qattiq tuyulishi mumkin. Shunday bo'lsa ham, u zarur edi."],
      ["On balance, I believe the advantages are more significant.", "Hamma narsani hisobga olib, afzalliklar muhimroq deb hisoblayman."]
    ],
    quiz: [
      { q: "The hotel was expensive. ___, the service was excellent.", o: ["That said", "By the same token", "In other words"], a: 0, e: "Qisman yumshatish → <b>That said</b>." },
      { q: "Employees should be punctual; ___, managers should not keep them late.", o: ["be that as it may", "by the same token", "even so"], a: 1, e: "Bir xil mantiq → <b>by the same token</b>." },
      { q: "“You may disagree with the rule.” — “___, it is still the rule.”", o: ["Be that as it may", "In other words", "On balance"], a: 0, e: "E'tirozni tan olish → <b>Be that as it may</b>." },
      { q: "The population doubled — ___, it grew by 100%.", o: ["nonetheless", "in other words", "that said"], a: 1, e: "Qayta ifodalash → <b>in other words</b>." },
      { q: "Qaysi gap grammatik jihatdan to'g'ri?", o: ["Nevertheless it was cold, we swam.", "It was cold. Nevertheless, we swam.", "Nevertheless of the cold, we swam."], a: 1, e: "Nevertheless ikki gapni birlashtirmaydi: <b>It was cold. Nevertheless, we swam.</b>" },
      { q: "___, I think the government made the right choice. (yakuniy baho)", o: ["All things considered", "By the same token", "That is to say"], a: 0, e: "Yakun → <b>All things considered</b>." },
      { q: "Yozing: “It was raining heavily. Even ___, they continued the hike.”", w: ["so"], e: "<b>Even so</b>." },
      { q: "Yozing: “Cats and dogs are popular pets. The ___ are more independent.” (birinchisi)", w: ["former"], e: "Birinchisi → <b>the former</b>, ikkinchisi → the latter." }
    ],
    speak: ["That said, there are some clear disadvantages.", "By the same token, students should respect their teachers.", "Be that as it may, the decision is final.", "On balance, I think the benefits outweigh the costs."]
  },
  {
    id: "c2-idiomatic",
    level: "C2",
    murphy: "Advanced Grammar in Use, Unit 32, 99, 115",
    book: "IELTS Vocabulary, Longman Essay Activator",
    title: "Kollokatsiya va idiomatik grammatika: it's high time, as it were, no sooner",
    intro: "Ba'zi grammatik tuzilmalar qoidadan ko'ra <b>qotib qolgan ibora</b> sifatida ishlaydi. Ularni bir butun holda yodlash kerak: <i>It's high time we left. As it were. No sooner had... than.</i> C2 da bunday iboralar nutqni tabiiy qiladi.",
    table: [
      ["It's (high / about) time + Past Simple", "It's high time you got a job.", "Ishga kirish vaqting allaqachon keldi."],
      ["would rather + ega + Past Simple", "I'd rather you didn't smoke here.", "Bu yerda chekmasangiz yaxshi bo'lardi."],
      ["as it were", "He is, as it were, the heart of the team.", "U, ta'bir joiz bo'lsa, jamoaning yuragi."],
      ["No sooner ... than", "No sooner had I sat down than the phone rang.", "O'tirishim bilan telefon jiringladi."],
      ["the + qiyosiy, the + qiyosiy", "The more you practise, the easier it gets.", "Qancha ko'p mashq qilsang, shuncha osonlashadi."],
      ["Fe'l + predlog kollokatsiyasi", "account for, comply with, refrain from", "tushuntirmoq, rioya qilmoq, o'zini tiymoq"]
    ],
    tableHead: ["Tuzilma", "Misol", "Tarjima"],
    rules: [
      "<b>It's time / It's high time / It's about time + ega + Past Simple</b> — hozirgi yoki kelajak ma'nosida, lekin o'tgan zamon shakli: <i>It's time we went home.</i> Umumiy ma'noda <i>It's time to go</i> ham bo'ladi.",
      "<b>would rather + boshqa ega + Past Simple</b>: <i>I'd rather you stayed.</i> O'zing haqida: <i>I'd rather stay</i> (to siz).",
      "<b>as it were</b> — “go'yo, ta'bir joiz bo'lsa”: ko'chma ma'nodagi so'zni yumshatadi.",
      "<b>The + comparative ..., the + comparative ...</b>: ikkala qism ham <i>the</i> bilan boshlanadi.",
      "Kollokatsiyalar: <i>make a decision, do research, pay attention, take into account, draw a conclusion, raise awareness</i>. <i>do a decision</i> yoki <i>make research</i> — xato."
    ],
    examples: [
      ["It's about time the city repaired these roads.", "Shahar bu yo'llarni ta'mirlash vaqti allaqachon kelgan."],
      ["I'd rather you told me the truth.", "Menga rostini aytganing ma'qulroq."],
      ["The older you get, the wiser you become.", "Yosh o'tgan sari donoroq bo'lasan."],
      ["We need to take all the factors into account before drawing a conclusion.", "Xulosa chiqarishdan oldin barcha omillarni hisobga olishimiz kerak."]
    ],
    quiz: [
      { q: "It's high time you ___ to bed. It's midnight!", o: ["go", "went", "will go"], a: 1, e: "It's high time + Past Simple → <b>went</b>." },
      { q: "I'd rather you ___ this to anyone.", o: ["don't mention", "didn't mention", "not mention"], a: 1, e: "would rather + boshqa ega + Past Simple → <b>didn't mention</b>." },
      { q: "No sooner had we arrived ___ it started to snow.", o: ["when", "than", "then"], a: 1, e: "No sooner ... <b>than</b>." },
      { q: "The harder you work, ___ results you get.", o: ["better", "the better", "the best"], a: 1, e: "<b>the</b> + qiyosiy: <b>the better</b>." },
      { q: "Scientists need to ___ more research into this disease.", o: ["make", "do", "take"], a: 1, e: "Kollokatsiya: <b>do research</b>." },
      { q: "Visitors are asked to ___ from using their phones.", o: ["refrain", "avoid", "stop"], a: 0, e: "<b>refrain from</b> + -ing." },
      { q: "Yozing: “He became, as it ___, a stranger in his own home.”", w: ["were"], e: "Qotgan ibora: <b>as it were</b>." },
      { q: "Yozing: “It's about time the government ___ action.” (take)", w: ["took"], e: "Past Simple → <b>took</b>." },
      { q: "Yozing: “We must ___ into account the needs of older people.” (kollokatsiya)", w: ["take"], e: "<b>take into account</b>." }
    ],
    speak: ["It's high time we made a decision.", "I'd rather you didn't tell anyone.", "The more you read, the more you learn.", "He was, as it were, a bridge between two cultures."]
  },
  {
    id: "c2-register",
    level: "C2",
    murphy: "Advanced Grammar in Use, Unit 47, 103–104",
    book: "Longman Essay Activator, IELTS Vocabulary, Cambridge IELTS 19",
    title: "Uslubni almashtirish: rasmiy va norasmiy, phrasal verb va lotincha fe'llar",
    intro: "C2 darajadagi foydalanuvchi bir fikrni <b>vaziyatga qarab turli uslubda</b> ifoda eta oladi. Norasmiy nutqda <b>phrasal verb</b>lar tabiiy; akademik va rasmiy yozuvda esa ko'pincha lotin tilidan kelgan bir so'zli fe'llar afzal.",
    table: [
      ["find out", "discover / ascertain", "aniqlamoq"],
      ["put off", "postpone", "keyinga qoldirmoq"],
      ["look into", "investigate / examine", "tekshirmoq"],
      ["cut down on", "reduce", "kamaytirmoq"],
      ["get rid of", "eliminate / dispose of", "yo'q qilmoq"],
      ["go up / go down", "increase / decrease", "oshmoq / kamaymoq"],
      ["set up", "establish", "tashkil etmoq"]
    ],
    tableHead: ["Norasmiy (phrasal verb)", "Rasmiy (lotincha)", "Ma'no"],
    rules: [
      "Rasmiy uslub belgilari: majhul nisbat, nominalizatsiya, to'liq shakllar (<i>do not</i>, <i>don't</i> emas), shaxssiz tuzilmalar: <i>It is recommended that...</i>",
      "Norasmiy uslub belgilari: qisqartmalar, phrasal verblar, <i>you</i> bilan umumlashtirish, savol bilan boshlanish, ellipsis: <i>Sounds good!</i>",
      "Rasmiy uslubda predlog nisbiy olmoshdan oldin keladi: <i>the person <b>to whom</b> I spoke</i>; norasmiyda oxirida: <i>the person I spoke <b>to</b></i>.",
      "Har bir phrasal verbning aniq rasmiy muqobili bo'lmasligi mumkin; ba'zi phrasal verblar (<i>carry out, point out, set out</i>) akademik matnda ham to'liq qabul qilinadi.",
      "IELTS Writing'da <i>a lot of, stuff, things, kids, get</i> kabi so'zlarni <i>a considerable number of, aspects, children, obtain/become</i> bilan almashtiring.",
      "Rasmiy xat: <i>I am writing to enquire about...</i>; norasmiy: <i>Just wanted to ask about...</i>"
    ],
    examples: [
      ["Informal: We need to look into the problem. → Formal: The problem requires investigation.", "Muammoni tekshirishimiz kerak → Muammo tekshiruvni talab qiladi."],
      ["Informal: They put off the meeting. → Formal: The meeting was postponed.", "Uchrashuvni keyinga qoldirishdi → Uchrashuv keyinga qoldirildi."],
      ["Informal: Kids get loads of stuff from ads. → Formal: Children acquire a great deal of information from advertising.", "Bolalar reklamadan ko'p narsa oladi."],
      ["Formal: The individual to whom the letter was addressed has left.", "Xat yo'llangan shaxs ketib qolgan."]
    ],
    quiz: [
      { q: "Rasmiy muqobil: “put off”", o: ["postpone", "cancel out", "put away"], a: 0, e: "<b>postpone</b>." },
      { q: "Rasmiy muqobil: “find out”", o: ["ascertain", "find in", "look out"], a: 0, e: "<b>ascertain / discover</b>." },
      { q: "Rasmiy muqobil: “cut down on”", o: ["reduce", "cut off", "shorten up"], a: 0, e: "<b>reduce</b>." },
      { q: "Qaysi gap eng rasmiy?", o: ["We're gonna sort out the issue soon.", "The issue will be resolved shortly.", "We'll fix the problem real soon."], a: 1, e: "Majhul nisbat + lotincha fe'l: <b>The issue will be resolved shortly.</b>" },
      { q: "Rasmiy: “the company ___ he works”", o: ["for which", "which for", "that for"], a: 0, e: "Rasmiy uslubda predlog oldinda: <b>for which</b>." },
      { q: "IELTS Writing uchun qaysi biri mos?", o: ["Lots of kids play video games.", "A large proportion of children play video games.", "Loads of children play games and stuff."], a: 1, e: "<b>A large proportion of children...</b>" },
      { q: "Yozing (bitta so'z): “set up a company” → “___ a company”", w: ["establish", "found"], e: "<b>establish</b> (yoki found)." },
      { q: "Yozing (bitta so'z): “prices went up” → “prices ___”", w: ["increased", "rose"], e: "<b>increased</b> (yoki rose)." }
    ],
    speak: ["I am writing to enquire about the position advertised.", "The meeting has been postponed until further notice.", "The matter is currently being investigated.", "Just wanted to check if you're free tomorrow."]
  },
  {
    id: "c2-tense-aspect",
    level: "C2",
    murphy: "Advanced Grammar in Use, Unit 1–4, 12–15",
    book: "Cambridge IELTS 19, Longman Essay Activator",
    title: "Zamon va aspektning nozik tanlovi: jadval uchun Present, muloyimlik uchun Past, holat fe'llari",
    intro: "C2 darajada zamon faqat vaqtni emas, <b>munosabat va ma'noni</b> ham bildiradi. Hozirgi zamon kelajakni, o'tgan zamon esa hozirgi muloyimlikni ifodalashi mumkin. Holat fe'llari (stative verbs) davomiy shaklda <b>ma'nosini o'zgartiradi</b>.",
    table: [
      ["Present Simple → kelajak (jadval)", "The train leaves at 7:15 tomorrow.", "Poyezd ertaga 7:15 da jo'naydi."],
      ["Present Continuous → kelajak (reja)", "I'm meeting the director on Monday.", "Dushanba kuni direktor bilan uchrashaman."],
      ["Past → muloyimlik/masofa", "I was wondering if you could help me.", "Menga yordam bera olarmikansiz, deb o'ylagandim."],
      ["think (fikr) / thinking (o'ylash)", "I think it's true. / I'm thinking about moving.", "Menimcha, bu rost. / Ko'chish haqida o'ylayapman."],
      ["have (egalik) / having (harakat)", "She has a car. / She's having lunch.", "Uning mashinasi bor. / U tushlik qilyapti."],
      ["be (doimiy) / being (vaqtinchalik xulq)", "He is rude. / He is being rude.", "U qo'pol odam. / U hozir qo'pollik qilyapti."]
    ],
    tableHead: ["Hodisa", "Misol", "Tarjima"],
    rules: [
      "<b>Present Simple</b> rasmiy jadval va dasturlar uchun kelajak ma'nosida: <i>The conference starts on 3 May.</i>",
      "<b>Present Continuous</b> shaxsiy, kelishilgan rejalar uchun: <i>We're flying to Istanbul next week.</i>",
      "<b>Past Simple / Past Continuous</b> hozirgi so'rovni yumshatadi: <i>I wanted to ask..., I was hoping you could...</i> Ma'no hozirgi, lekin shakl o'tgan — bu masofa yaratadi.",
      "Holat fe'llari (<i>see, taste, think, have, be, appear, weigh</i>) davomiy shaklda harakatga aylanadi: <i>I'm seeing the doctor</i> = uchrashaman; <i>She's tasting the soup</i> = tatib ko'ryapti.",
      "<b>be being + sifat</b> — vaqtinchalik, ataylab qilingan xulq: <i>You're being silly.</i>",
      "Present Perfect Continuous natijaning “izi”ni ko'rsatadi: <i>Your eyes are red — have you been crying?</i>"
    ],
    examples: [
      ["The exam begins at nine sharp, so don't be late.", "Imtihon roppa-rosa to'qqizda boshlanadi, kechikma."],
      ["I was hoping you might give me some advice.", "Menga maslahat berarsiz, deb umid qilgandim."],
      ["We're seeing some friends for dinner tonight.", "Bugun kechqurun do'stlar bilan kechki ovqatda uchrashamiz."],
      ["Why are you being so quiet today?", "Nega bugun bunchalik jimsan?"]
    ],
    quiz: [
      { q: "According to the timetable, the bus ___ at 6:40.", o: ["leaves", "will be leaving", "is leaving"], a: 0, e: "Rasmiy jadval → <b>leaves</b>." },
      { q: "I can't come on Friday — I ___ my cousin at the airport. (kelishilgan reja)", o: ["meet", "am meeting", "met"], a: 1, e: "Shaxsiy reja → <b>am meeting</b>." },
      { q: "Eng muloyim so'rov qaysi?", o: ["I want to ask you something.", "I was wondering if I could ask you something.", "I will ask you something."], a: 1, e: "O'tgan zamon masofa beradi: <b>I was wondering if...</b>" },
      { q: "This soup ___ delicious.", o: ["is tasting", "tastes", "tasting"], a: 1, e: "Holat (ta'mi) → <b>tastes</b>." },
      { q: "The chef ___ the sauce to check the salt.", o: ["tastes", "is tasting", "taste"], a: 1, e: "Harakat (tatib ko'ryapti) → <b>is tasting</b>." },
      { q: "He's usually polite, but today he ___ very rude.", o: ["is", "is being", "has"], a: 1, e: "Vaqtinchalik xulq → <b>is being</b>." },
      { q: "I ___ about changing my job. (hozir o'ylab yuribman)", o: ["think", "am thinking", "thought"], a: 1, e: "Jarayon → <b>am thinking</b>." },
      { q: "Yozing: “I ___ hoping you could lend me your notes.” (muloyim, o'tgan zamon)", w: ["was"], e: "<b>I was hoping...</b>" },
      { q: "Yozing: “She ___ three children.” (egalik, have)", w: ["has"], e: "Egalik — holat → <b>has</b>." }
    ],
    speak: ["The flight departs at half past eight tomorrow.", "I was wondering if you could help me.", "We're having dinner with my parents tonight.", "You're being very patient today."]
  }
]);
