// UZBEK SEED DECK
// Extracted from: Colloquial Uzbek (Öztopçu, UC Berkeley), 
// Peace Corps Uzbek Language Competencies, 
// Uzbek 200-Hour Familiarization Course (JBLM)
// Schema: { id, nodeId, type, front (EN), frontRu (RU), back (UZ Latin), backCyr (UZ Cyrillic), notes }

const SEED_DECK = [

  // ============================================================
  // NODE 1 — SOUNDS & SCRIPT
  // Pronunciation reference cards (not in daily review queue)
  // ============================================================
  { id:"s1_001", nodeId:1, type:"pronunciation", front:"The letter Q", frontRu:"Буква Q", back:"q", backCyr:"қ", notes:"Uvular voiceless stop — no English equivalent. Like 'k' but from the back of the throat. Example: qancha (how much), qiz (girl)" },
  { id:"s1_002", nodeId:1, type:"pronunciation", front:"The letter GH", frontRu:"Буква GH", back:"gh", backCyr:"ғ", notes:"Velar voiced spirant — no English equivalent. A soft gargling sound. Example: oghil (son), bágh (garden)" },
  { id:"s1_003", nodeId:1, type:"pronunciation", front:"The letter KH", frontRu:"Буква KH", back:"kh", backCyr:"х", notes:"Like Scottish 'loch' or Russian х. Example: khánim (Mrs.), khona (room)" },
  { id:"s1_004", nodeId:1, type:"pronunciation", front:"The letter SH", frontRu:"Буква SH", back:"sh", backCyr:"ш", notes:"Like English 'sheep'. Example: básh (head), shahar (city)" },
  { id:"s1_005", nodeId:1, type:"pronunciation", front:"The letter CH", frontRu:"Буква CH", back:"ch", backCyr:"ч", notes:"Like English 'chair'. Example: chap (left), chay (tea)" },
  { id:"s1_006", nodeId:1, type:"pronunciation", front:"The letter Á", frontRu:"Буква Á", back:"á", backCyr:"а́", notes:"Like 'a' in 'qualm' — open, back vowel. Example: áta (father), bála (child)" },
  { id:"s1_007", nodeId:1, type:"pronunciation", front:"Uzbek word order", frontRu:"Порядок слов в узбекском", back:"Subject — Object — Verb (SOV)", backCyr:"Подлежащее — Дополнение — Сказуемое", notes:"Uzbek is SOV. 'Men kitob o'qiyman' = I book read (I read a book). The verb always comes last." },
  { id:"s1_008", nodeId:1, type:"pronunciation", front:"Uzbek has NO gender", frontRu:"В узбекском нет рода", back:"u = he, she, it (all the same)", backCyr:"у = он, она, оно", notes:"Unlike Russian, Uzbek uses one pronoun 'u' for he/she/it. No masculine/feminine noun classes." },
  { id:"s1_009", nodeId:1, type:"pronunciation", front:"Uzbek has NO definite article", frontRu:"В узбекском нет определённого артикля", back:"kitob = a book OR the book", backCyr:"китоб = книга (без артикля)", notes:"Context determines definiteness. No 'the' or 'a' equivalent." },
  { id:"s1_010", nodeId:1, type:"pronunciation", front:"Uzbek uses postpositions, not prepositions", frontRu:"Узбекский использует послелоги", back:"Suffixes come AFTER the word: -da (at), -ga (to), -dan (from)", backCyr:"Суффиксы после слова: -да, -га, -дан", notes:"Where Russian/English put prepositions before (in, to, from), Uzbek adds suffixes after the noun." },

  // ============================================================
  // NODE 2 — SURVIVAL CORE
  // ~60 highest-priority items. Real-world utility from day 1.
  // ============================================================

  // Greetings
  { id:"s2_001", nodeId:2, type:"phrase", front:"Hello (formal Islamic greeting)", frontRu:"Здравствуйте (исламское приветствие)", back:"Assalomu alaykum", backCyr:"Ассалому алайкум", notes:"Standard formal greeting. Response: Vaalaykum assalam" },
  { id:"s2_002", nodeId:2, type:"phrase", front:"Response to Assalomu alaykum", frontRu:"Ответ на приветствие", back:"Vaalaykum assalam", backCyr:"Ваалайкум ассалам", notes:"Always respond with this when greeted formally" },
  { id:"s2_003", nodeId:2, type:"phrase", front:"Hi / Hello (casual)", frontRu:"Привет", back:"Salom", backCyr:"Салом", notes:"Everyday casual greeting, also the response to itself" },
  { id:"s2_004", nodeId:2, type:"phrase", front:"Good morning", frontRu:"Доброе утро", back:"Salom (khayrli erta)", backCyr:"Салом (хайрли эрта)", notes:"Lit: Greetings (blessed morning)" },
  { id:"s2_005", nodeId:2, type:"phrase", front:"Good day / Good afternoon", frontRu:"Добрый день", back:"Salom (khayrli kun)", backCyr:"Салом (хайрли кун)", notes:"Used for both midday and afternoon" },
  { id:"s2_006", nodeId:2, type:"phrase", front:"Good evening", frontRu:"Добрый вечер", back:"Salom (khayrli aqsham)", backCyr:"Салом (хайрли оқшом)", notes:"" },
  { id:"s2_007", nodeId:2, type:"phrase", front:"Good night", frontRu:"Спокойной ночи", back:"Khayrli tun", backCyr:"Хайрли тун", notes:"Said before sleeping" },
  { id:"s2_008", nodeId:2, type:"phrase", front:"How are you? (formal)", frontRu:"Как вы поживаете?", back:"Qalaysiz? / Yakhshimisiz?", backCyr:"Қалайсиз? / Яхшимисиз?", notes:"Lit: How are you? / Are you well? Use siz form with strangers/elders" },
  { id:"s2_009", nodeId:2, type:"phrase", front:"Fine, thank you", frontRu:"Хорошо, спасибо", back:"Rahmat, yakhshiman", backCyr:"Раҳмат, яхшиман", notes:"Standard positive response to 'how are you'" },
  { id:"s2_010", nodeId:2, type:"phrase", front:"Goodbye", frontRu:"До свидания", back:"Khayr", backCyr:"Хайр", notes:"Also used: Xayr xo'sh" },
  { id:"s2_011", nodeId:2, type:"phrase", front:"See you later", frontRu:"До встречи", back:"(Yana) ko'rishguncha", backCyr:"(Яна) кўришгунча", notes:"Lit: Until we see each other again" },
  { id:"s2_012", nodeId:2, type:"phrase", front:"Goodbye (go well)", frontRu:"Счастливо (уходящему)", back:"Yakhshi boring", backCyr:"Яхши боринг", notes:"Said to the person who is leaving" },
  { id:"s2_013", nodeId:2, type:"phrase", front:"Welcome", frontRu:"Добро пожаловать", back:"Khush kelibsiz", backCyr:"Хуш келибсиз", notes:"Response: Khushwaqt boling" },

  // Essential vocabulary
  { id:"s2_014", nodeId:2, type:"vocabulary", front:"Yes", frontRu:"Да", back:"Ha", backCyr:"Ҳа", notes:"" },
  { id:"s2_015", nodeId:2, type:"vocabulary", front:"No", frontRu:"Нет", back:"Yoq", backCyr:"Йўқ", notes:"" },
  { id:"s2_016", nodeId:2, type:"vocabulary", front:"Thank you", frontRu:"Спасибо", back:"Rahmat", backCyr:"Раҳмат", notes:"" },
  { id:"s2_017", nodeId:2, type:"vocabulary", front:"Thank you very much", frontRu:"Большое спасибо", back:"Katta rahmat", backCyr:"Катта раҳмат", notes:"Lit: Big thank you" },
  { id:"s2_018", nodeId:2, type:"vocabulary", front:"You're welcome / Don't mention it", frontRu:"Пожалуйста / Не за что", back:"Arzimaydi", backCyr:"Арзимайди", notes:"Lit: It's not worth it" },
  { id:"s2_019", nodeId:2, type:"vocabulary", front:"Please", frontRu:"Пожалуйста", back:"Marhamat (qilib)", backCyr:"Марҳамат (қилиб)", notes:"" },
  { id:"s2_020", nodeId:2, type:"vocabulary", front:"Excuse me / Sorry", frontRu:"Извините", back:"Kechirasiz", backCyr:"Кечирасиз", notes:"For interrupting or apologising" },
  { id:"s2_021", nodeId:2, type:"vocabulary", front:"Good", frontRu:"Хорошо / Хороший", back:"Yakhshi", backCyr:"Яхши", notes:"" },
  { id:"s2_022", nodeId:2, type:"vocabulary", front:"Bad", frontRu:"Плохо / Плохой", back:"Yomon", backCyr:"Ёмон", notes:"" },
  { id:"s2_023", nodeId:2, type:"vocabulary", front:"OK / Fine", frontRu:"Нормально / Ладно", back:"Bopti / Khop", backCyr:"Бопти / Хоп", notes:"Informal acceptance" },
  { id:"s2_024", nodeId:2, type:"vocabulary", front:"Possible / May I?", frontRu:"Можно?", back:"Mumkin", backCyr:"Мумкин", notes:"Very useful: Mumkin? = May I? / Is it possible?" },
  { id:"s2_025", nodeId:2, type:"vocabulary", front:"I know", frontRu:"Я знаю", back:"Bilaman", backCyr:"Биламан", notes:"" },
  { id:"s2_026", nodeId:2, type:"vocabulary", front:"I don't know", frontRu:"Я не знаю", back:"Bilmayman", backCyr:"Билмайман", notes:"" },
  { id:"s2_027", nodeId:2, type:"vocabulary", front:"I understand", frontRu:"Я понимаю", back:"Tushunaman", backCyr:"Тушунаман", notes:"" },
  { id:"s2_028", nodeId:2, type:"vocabulary", front:"I don't understand", frontRu:"Я не понимаю", back:"Tushunmayman", backCyr:"Тушунмайман", notes:"Essential survival phrase" },
  { id:"s2_029", nodeId:2, type:"phrase", front:"Please repeat", frontRu:"Повторите, пожалуйста", back:"Marhamat qilib takrorlang", backCyr:"Марҳамат қилиб такрорланг", notes:"" },
  { id:"s2_030", nodeId:2, type:"phrase", front:"Please speak slowly", frontRu:"Говорите медленнее, пожалуйста", back:"Marhamat qilib sekinroq so'zlang", backCyr:"Марҳамат қилиб секинроқ сўзланг", notes:"Extremely useful for learners" },
  { id:"s2_031", nodeId:2, type:"phrase", front:"What is your name?", frontRu:"Как вас зовут?", back:"Ismingiz nima?", backCyr:"Исмингиз нима?", notes:"Formal. Lit: Your name what-is?" },
  { id:"s2_032", nodeId:2, type:"phrase", front:"My name is...", frontRu:"Меня зовут...", back:"Ismim...", backCyr:"Исмим...", notes:"Lit: My name [is]... No verb needed." },
  { id:"s2_033", nodeId:2, type:"phrase", front:"I'm pleased to meet you", frontRu:"Приятно познакомиться", back:"Siz bilan tanishganimdan xursandman", backCyr:"Сиз билан танишганимдан хурсандман", notes:"" },
  { id:"s2_034", nodeId:2, type:"phrase", front:"How much is it?", frontRu:"Сколько стоит?", back:"Bu necha pul turadi?", backCyr:"Бу неча пул туради?", notes:"Essential shopping phrase" },
  { id:"s2_035", nodeId:2, type:"phrase", front:"Where is...?", frontRu:"Где находится...?", back:"...qayerda?", backCyr:"...қаерда?", notes:"Add place before qayerda: Mehmonkhona qayerda? = Where is the hotel?" },
  { id:"s2_036", nodeId:2, type:"phrase", front:"I need...", frontRu:"Мне нужно...", back:"Menga...kerak", backCyr:"Менга...керак", notes:"Put the thing between menga and kerak: Menga taksi kerak = I need a taxi" },
  { id:"s2_037", nodeId:2, type:"phrase", front:"I want...", frontRu:"Я хочу...", back:"Men...xohlayman", backCyr:"Мен...хоҳлайман", notes:"" },
  { id:"s2_038", nodeId:2, type:"phrase", front:"I don't want...", frontRu:"Я не хочу...", back:"Men...xohlamayman", backCyr:"Мен...хоҳламайман", notes:"Note the -may- infix for negation" },
  { id:"s2_039", nodeId:2, type:"phrase", front:"I am sick", frontRu:"Я болен/больна", back:"Men kasal man", backCyr:"Мен касалман", notes:"Emergency health phrase" },
  { id:"s2_040", nodeId:2, type:"phrase", front:"Call a doctor!", frontRu:"Вызовите врача!", back:"Doktor chaqiring!", backCyr:"Доктор чақиринг!", notes:"Emergency" },
  { id:"s2_041", nodeId:2, type:"phrase", front:"Help!", frontRu:"Помогите!", back:"Yordam bering!", backCyr:"Ёрдам беринг!", notes:"Emergency" },
  { id:"s2_042", nodeId:2, type:"vocabulary", front:"Mr. / Sir", frontRu:"Господин", back:"Janob", backCyr:"Жаноб", notes:"Used with first name: Janob Erkin" },
  { id:"s2_043", nodeId:2, type:"vocabulary", front:"Mrs. / Ms.", frontRu:"Госпожа", back:"Xonim", backCyr:"Хоним", notes:"Used with first name: Nodira xonim" },

  // ============================================================
  // NODE 3 — GRAMMAR FOUNDATIONS
  // ============================================================

  // Pronouns
  { id:"s3_001", nodeId:3, type:"grammar", front:"I", frontRu:"Я", back:"men", backCyr:"мен", notes:"" },
  { id:"s3_002", nodeId:3, type:"grammar", front:"You (informal, to friends/children)", frontRu:"Ты", back:"sen", backCyr:"сен", notes:"Use with close friends, children. Never with elders or strangers." },
  { id:"s3_003", nodeId:3, type:"grammar", front:"He / She / It (all the same!)", frontRu:"Он / Она / Оно", back:"u", backCyr:"у", notes:"Uzbek has NO gender distinction. One word for all three." },
  { id:"s3_004", nodeId:3, type:"grammar", front:"We", frontRu:"Мы", back:"biz", backCyr:"биз", notes:"" },
  { id:"s3_005", nodeId:3, type:"grammar", front:"You (formal/polite, also plural)", frontRu:"Вы", back:"siz", backCyr:"сиз", notes:"Default 'you' for strangers, elders, formal situations. Always use this until invited to use sen." },
  { id:"s3_006", nodeId:3, type:"grammar", front:"They", frontRu:"Они", back:"ular", backCyr:"улар", notes:"" },

  // To be (verb suffix as identity)
  { id:"s3_007", nodeId:3, type:"grammar", front:"I am... (suffix)", frontRu:"Я ... (суффикс)", back:"-man", backCyr:"-ман", notes:"Men doktorman = I am a doctor. Attach directly to the noun: men + doktor + man" },
  { id:"s3_008", nodeId:3, type:"grammar", front:"You are... (informal suffix)", frontRu:"Ты ... (суффикс)", back:"-san", backCyr:"-сан", notes:"Sen doktorsan = You are a doctor" },
  { id:"s3_009", nodeId:3, type:"grammar", front:"He/She is... (suffix)", frontRu:"Он/она ... (суффикс)", back:"no suffix needed (or -dir formal)", backCyr:"без суффикса (или -дир)", notes:"U doktor = He/she is a doctor. No copula needed in present tense!" },
  { id:"s3_010", nodeId:3, type:"grammar", front:"We are... (suffix)", frontRu:"Мы ... (суффикс)", back:"-miz", backCyr:"-миз", notes:"Biz doktormiz = We are doctors" },
  { id:"s3_011", nodeId:3, type:"grammar", front:"You are... (formal suffix)", frontRu:"Вы ... (суффикс)", back:"-siz", backCyr:"-сиз", notes:"Siz doktorsiz = You are a doctor (formal)" },
  { id:"s3_012", nodeId:3, type:"grammar", front:"They are... (suffix)", frontRu:"Они ... (суффикс)", back:"-lar + (dir)", backCyr:"-лар + (дир)", notes:"Ular doktorlar = They are doctors" },

  // Negation
  { id:"s3_013", nodeId:3, type:"grammar", front:"Negation suffix: I don't...", frontRu:"Отрицание: Я не...", back:"-mayman", backCyr:"-майман", notes:"Insert -may- before personal suffix: bilmayman (I don't know), tushunmayman (I don't understand)" },
  { id:"s3_014", nodeId:3, type:"grammar", front:"Negation: not / isn't", frontRu:"Не / нет (отрицание)", back:"emas", backCyr:"эмас", notes:"Yakhshi emas = Not good. U doktor emas = He is not a doctor" },

  // Postpositions (critical for Uzbek)
  { id:"s3_015", nodeId:3, type:"grammar", front:"Location: at / in (postposition)", frontRu:"В / на (местонахождение)", back:"-da", backCyr:"-да", notes:"Uyda = at home. Toshkentda = in Tashkent. Attach to noun." },
  { id:"s3_016", nodeId:3, type:"grammar", front:"Direction: to (postposition)", frontRu:"В / на (направление)", back:"-ga", backCyr:"-га", notes:"Uyga = to home (going home). Toshkentga = to Tashkent" },
  { id:"s3_017", nodeId:3, type:"grammar", front:"From (postposition)", frontRu:"Из / от", back:"-dan", backCyr:"-дан", notes:"Uydan = from home. Toshkentdan = from Tashkent" },
  { id:"s3_018", nodeId:3, type:"grammar", front:"With (postposition)", frontRu:"С (вместе)", back:"bilan", backCyr:"билан", notes:"Dost bilan = with a friend. Separate word, not suffix." },
  { id:"s3_019", nodeId:3, type:"grammar", front:"For (postposition)", frontRu:"Для / за", back:"uchun", backCyr:"учун", notes:"Men uchun = for me. Separate word." },
  { id:"s3_020", nodeId:3, type:"grammar", front:"Up to / until (postposition)", frontRu:"До (предел)", back:"-gacha", backCyr:"-гача", notes:"Toshkentgacha = up to Tashkent. Soat beshshacha = until 5 o'clock" },

  // Question words
  { id:"s3_021", nodeId:3, type:"grammar", front:"What?", frontRu:"Что? / Какой?", back:"nima?", backCyr:"нима?", notes:"Nima bu? = What is this?" },
  { id:"s3_022", nodeId:3, type:"grammar", front:"Who?", frontRu:"Кто?", back:"kim?", backCyr:"ким?", notes:"Bu kim? = Who is this?" },
  { id:"s3_023", nodeId:3, type:"grammar", front:"Where?", frontRu:"Где?", back:"qayerda?", backCyr:"қаерда?", notes:"Question form of -da location" },
  { id:"s3_024", nodeId:3, type:"grammar", front:"Where to?", frontRu:"Куда?", back:"qayerga?", backCyr:"қаерга?", notes:"Question form of -ga direction" },
  { id:"s3_025", nodeId:3, type:"grammar", front:"When?", frontRu:"Когда?", back:"qachon?", backCyr:"қачон?", notes:"" },
  { id:"s3_026", nodeId:3, type:"grammar", front:"How much? / How many?", frontRu:"Сколько?", back:"qancha? / nechta?", backCyr:"қанча? / нечта?", notes:"qancha = how much (amount/price). nechta = how many (countable)" },
  { id:"s3_027", nodeId:3, type:"grammar", front:"How? / What kind?", frontRu:"Как? / Какой?", back:"qanday?", backCyr:"қандай?", notes:"Qanday odam? = What kind of person?" },
  { id:"s3_028", nodeId:3, type:"grammar", front:"Why?", frontRu:"Почему?", back:"nima uchun?", backCyr:"нима учун?", notes:"Lit: for what" },

  // Verb: to know
  { id:"s3_029", nodeId:3, type:"grammar", front:"I know (verb conjugation example)", frontRu:"Я знаю (пример спряжения)", back:"men bilaman", backCyr:"мен биламан", notes:"Verb stem: bil-. Present tense: bil + a + personal suffix" },
  { id:"s3_030", nodeId:3, type:"grammar", front:"He/she knows", frontRu:"Он/она знает", back:"u biladi", backCyr:"у билади", notes:"" },
  { id:"s3_031", nodeId:3, type:"grammar", front:"We know", frontRu:"Мы знаем", back:"biz bilamiz", backCyr:"биз биламиз", notes:"" },
  { id:"s3_032", nodeId:3, type:"grammar", front:"You know (formal)", frontRu:"Вы знаете", back:"siz bilasiz", backCyr:"сиз биласиз", notes:"" },

  // Infinitive marker
  { id:"s3_033", nodeId:3, type:"grammar", front:"Infinitive suffix (to do)", frontRu:"Суффикс инфинитива", back:"-moq", backCyr:"-моқ", notes:"bormoq = to go. kelmoq = to come. The dash in dictionaries shows the verb stem." },

  // ============================================================
  // NODE 4 — EVERYDAY VOCABULARY
  // ============================================================

  // NUMBERS
  { id:"s4_001", nodeId:4, type:"vocabulary", front:"1", frontRu:"1 (один)", back:"bir", backCyr:"бир", notes:"" },
  { id:"s4_002", nodeId:4, type:"vocabulary", front:"2", frontRu:"2 (два)", back:"ikki", backCyr:"икки", notes:"" },
  { id:"s4_003", nodeId:4, type:"vocabulary", front:"3", frontRu:"3 (три)", back:"uch", backCyr:"уч", notes:"" },
  { id:"s4_004", nodeId:4, type:"vocabulary", front:"4", frontRu:"4 (четыре)", back:"to'rt", backCyr:"тўрт", notes:"" },
  { id:"s4_005", nodeId:4, type:"vocabulary", front:"5", frontRu:"5 (пять)", back:"besh", backCyr:"беш", notes:"" },
  { id:"s4_006", nodeId:4, type:"vocabulary", front:"6", frontRu:"6 (шесть)", back:"olti", backCyr:"олти", notes:"" },
  { id:"s4_007", nodeId:4, type:"vocabulary", front:"7", frontRu:"7 (семь)", back:"yetti", backCyr:"етти", notes:"" },
  { id:"s4_008", nodeId:4, type:"vocabulary", front:"8", frontRu:"8 (восемь)", back:"sakkiz", backCyr:"саккиз", notes:"" },
  { id:"s4_009", nodeId:4, type:"vocabulary", front:"9", frontRu:"9 (девять)", back:"to'qqiz", backCyr:"тўққиз", notes:"" },
  { id:"s4_010", nodeId:4, type:"vocabulary", front:"10", frontRu:"10 (десять)", back:"o'n", backCyr:"ўн", notes:"" },
  { id:"s4_011", nodeId:4, type:"vocabulary", front:"11", frontRu:"11 (одиннадцать)", back:"o'n bir", backCyr:"ўн бир", notes:"Pattern: ten + unit" },
  { id:"s4_012", nodeId:4, type:"vocabulary", front:"12", frontRu:"12 (двенадцать)", back:"o'n ikki", backCyr:"ўн икки", notes:"" },
  { id:"s4_013", nodeId:4, type:"vocabulary", front:"20", frontRu:"20 (двадцать)", back:"yigirma", backCyr:"йигирма", notes:"" },
  { id:"s4_014", nodeId:4, type:"vocabulary", front:"30", frontRu:"30 (тридцать)", back:"o'ttiz", backCyr:"ўттиз", notes:"" },
  { id:"s4_015", nodeId:4, type:"vocabulary", front:"40", frontRu:"40 (сорок)", back:"qirq", backCyr:"қирқ", notes:"" },
  { id:"s4_016", nodeId:4, type:"vocabulary", front:"50", frontRu:"50 (пятьдесят)", back:"ellik", backCyr:"эллик", notes:"" },
  { id:"s4_017", nodeId:4, type:"vocabulary", front:"60", frontRu:"60 (шестьдесят)", back:"oltmish", backCyr:"олтмиш", notes:"" },
  { id:"s4_018", nodeId:4, type:"vocabulary", front:"70", frontRu:"70 (семьдесят)", back:"yetmish", backCyr:"етмиш", notes:"" },
  { id:"s4_019", nodeId:4, type:"vocabulary", front:"80", frontRu:"80 (восемьдесят)", back:"sakson", backCyr:"саксон", notes:"" },
  { id:"s4_020", nodeId:4, type:"vocabulary", front:"90", frontRu:"90 (девяносто)", back:"to'qson", backCyr:"тўқсон", notes:"" },
  { id:"s4_021", nodeId:4, type:"vocabulary", front:"100", frontRu:"100 (сто)", back:"bir yuz", backCyr:"бир юз", notes:"" },
  { id:"s4_022", nodeId:4, type:"vocabulary", front:"1000", frontRu:"1000 (тысяча)", back:"bir ming", backCyr:"бир минг", notes:"" },

  // TIME
  { id:"s4_023", nodeId:4, type:"vocabulary", front:"hour / clock / time", frontRu:"час / часы / время", back:"soat", backCyr:"соат", notes:"Russian loanword. Soat necha? = What time is it?" },
  { id:"s4_024", nodeId:4, type:"vocabulary", front:"minute", frontRu:"минута", back:"daqiqa", backCyr:"дақиқа", notes:"" },
  { id:"s4_025", nodeId:4, type:"vocabulary", front:"second", frontRu:"секунда", back:"soniya", backCyr:"сония", notes:"" },
  { id:"s4_026", nodeId:4, type:"vocabulary", front:"today", frontRu:"сегодня", back:"bugun", backCyr:"бугун", notes:"" },
  { id:"s4_027", nodeId:4, type:"vocabulary", front:"tomorrow", frontRu:"завтра", back:"ertaga", backCyr:"эртага", notes:"" },
  { id:"s4_028", nodeId:4, type:"vocabulary", front:"yesterday", frontRu:"вчера", back:"kecha", backCyr:"кеча", notes:"" },
  { id:"s4_029", nodeId:4, type:"vocabulary", front:"now", frontRu:"сейчас", back:"hozir", backCyr:"ҳозир", notes:"" },
  { id:"s4_030", nodeId:4, type:"vocabulary", front:"morning", frontRu:"утро", back:"ertalab", backCyr:"эрталаб", notes:"" },
  { id:"s4_031", nodeId:4, type:"vocabulary", front:"evening", frontRu:"вечер", back:"kechqurun", backCyr:"кечқурун", notes:"" },
  { id:"s4_032", nodeId:4, type:"vocabulary", front:"night", frontRu:"ночь", back:"tun / kecha", backCyr:"тун / кеча", notes:"tun = night (darkness). kecha = last night / yesterday" },
  { id:"s4_033", nodeId:4, type:"vocabulary", front:"week", frontRu:"неделя", back:"hafta", backCyr:"ҳафта", notes:"" },
  { id:"s4_034", nodeId:4, type:"vocabulary", front:"month", frontRu:"месяц", back:"oy", backCyr:"ой", notes:"Also means 'moon'" },
  { id:"s4_035", nodeId:4, type:"vocabulary", front:"year", frontRu:"год", back:"yil", backCyr:"йил", notes:"" },
  { id:"s4_036", nodeId:4, type:"phrase", front:"What time is it?", frontRu:"Который час?", back:"Soat necha?", backCyr:"Соат неча?", notes:"Lit: Clock how-much?" },
  { id:"s4_037", nodeId:4, type:"phrase", front:"It is 2 o'clock", frontRu:"Два часа", back:"Soat ikki", backCyr:"Соат икки", notes:"Pattern: soat + number" },

  // DAYS OF THE WEEK
  { id:"s4_038", nodeId:4, type:"vocabulary", front:"Monday", frontRu:"Понедельник", back:"dushanba", backCyr:"душанба", notes:"Lit: second day" },
  { id:"s4_039", nodeId:4, type:"vocabulary", front:"Tuesday", frontRu:"Вторник", back:"seshanba", backCyr:"сешанба", notes:"Lit: third day" },
  { id:"s4_040", nodeId:4, type:"vocabulary", front:"Wednesday", frontRu:"Среда", back:"chorshanba", backCyr:"чоршанба", notes:"Lit: fourth day" },
  { id:"s4_041", nodeId:4, type:"vocabulary", front:"Thursday", frontRu:"Четверг", back:"payshanba", backCyr:"пайшанба", notes:"Lit: fifth day" },
  { id:"s4_042", nodeId:4, type:"vocabulary", front:"Friday", frontRu:"Пятница", back:"juma", backCyr:"жума", notes:"Islamic holy day — from Arabic" },
  { id:"s4_043", nodeId:4, type:"vocabulary", front:"Saturday", frontRu:"Суббота", back:"shanba", backCyr:"шанба", notes:"" },
  { id:"s4_044", nodeId:4, type:"vocabulary", front:"Sunday", frontRu:"Воскресенье", back:"yakshanba", backCyr:"якшанба", notes:"Lit: one day" },

  // MONTHS
  { id:"s4_045", nodeId:4, type:"vocabulary", front:"January", frontRu:"Январь", back:"yanvar", backCyr:"январь", notes:"Russian loanword" },
  { id:"s4_046", nodeId:4, type:"vocabulary", front:"February", frontRu:"Февраль", back:"fevral", backCyr:"феврал", notes:"Russian loanword" },
  { id:"s4_047", nodeId:4, type:"vocabulary", front:"March", frontRu:"Март", back:"mart", backCyr:"март", notes:"Russian loanword" },
  { id:"s4_048", nodeId:4, type:"vocabulary", front:"April", frontRu:"Апрель", back:"aprel", backCyr:"апрел", notes:"Russian loanword" },
  { id:"s4_049", nodeId:4, type:"vocabulary", front:"May", frontRu:"Май", back:"may", backCyr:"май", notes:"Russian loanword" },
  { id:"s4_050", nodeId:4, type:"vocabulary", front:"June", frontRu:"Июнь", back:"iyun", backCyr:"июн", notes:"Russian loanword" },
  { id:"s4_051", nodeId:4, type:"vocabulary", front:"July", frontRu:"Июль", back:"iyul", backCyr:"июл", notes:"Russian loanword" },
  { id:"s4_052", nodeId:4, type:"vocabulary", front:"August", frontRu:"Август", back:"avgust", backCyr:"август", notes:"Russian loanword" },
  { id:"s4_053", nodeId:4, type:"vocabulary", front:"September", frontRu:"Сентябрь", back:"sentabr", backCyr:"сентябр", notes:"Russian loanword" },
  { id:"s4_054", nodeId:4, type:"vocabulary", front:"October", frontRu:"Октябрь", back:"oktabr", backCyr:"октябр", notes:"Russian loanword" },
  { id:"s4_055", nodeId:4, type:"vocabulary", front:"November", frontRu:"Ноябрь", back:"noyabr", backCyr:"ноябр", notes:"Russian loanword" },
  { id:"s4_056", nodeId:4, type:"vocabulary", front:"December", frontRu:"Декабрь", back:"dekabr", backCyr:"декабр", notes:"Russian loanword" },

  // PEOPLE & FAMILY
  { id:"s4_057", nodeId:4, type:"vocabulary", front:"man / person", frontRu:"мужчина / человек", back:"erkak / odam", backCyr:"эркак / одам", notes:"" },
  { id:"s4_058", nodeId:4, type:"vocabulary", front:"woman", frontRu:"женщина", back:"ayol", backCyr:"аёл", notes:"" },
  { id:"s4_059", nodeId:4, type:"vocabulary", front:"boy / son", frontRu:"мальчик / сын", back:"bola / o'g'il", backCyr:"бола / ўғил", notes:"bola = child/boy. o'g'il = son specifically" },
  { id:"s4_060", nodeId:4, type:"vocabulary", front:"girl / daughter", frontRu:"девочка / дочь", back:"qiz", backCyr:"қиз", notes:"qiz = girl AND daughter AND unmarried woman" },
  { id:"s4_061", nodeId:4, type:"vocabulary", front:"father", frontRu:"отец", back:"ota", backCyr:"ота", notes:"Also: dadam = my dad (affectionate)" },
  { id:"s4_062", nodeId:4, type:"vocabulary", front:"mother", frontRu:"мать", back:"ona", backCyr:"она", notes:"Also: onam = my mum (affectionate)" },
  { id:"s4_063", nodeId:4, type:"vocabulary", front:"older brother (used as address)", frontRu:"старший брат (обращение)", back:"aka", backCyr:"ака", notes:"Use 'aka' to respectfully address any older male: Erkin aka" },
  { id:"s4_064", nodeId:4, type:"vocabulary", front:"older sister (used as address)", frontRu:"старшая сестра (обращение)", back:"opa", backCyr:"опа", notes:"Use 'opa' to respectfully address any older woman: Nodira opa" },
  { id:"s4_065", nodeId:4, type:"vocabulary", front:"younger brother/sister", frontRu:"младший брат / младшая сестра", back:"uka (m) / singil (f)", backCyr:"ука / сингил", notes:"" },
  { id:"s4_066", nodeId:4, type:"vocabulary", front:"husband", frontRu:"муж", back:"er", backCyr:"эр", notes:"" },
  { id:"s4_067", nodeId:4, type:"vocabulary", front:"wife", frontRu:"жена", back:"xotin", backCyr:"хотин", notes:"Also: turmush o'rtog'im = my spouse (gender neutral, more formal)" },
  { id:"s4_068", nodeId:4, type:"vocabulary", front:"children", frontRu:"дети", back:"bolalar", backCyr:"болалар", notes:"" },
  { id:"s4_069", nodeId:4, type:"vocabulary", front:"family", frontRu:"семья", back:"oila", backCyr:"оила", notes:"" },
  { id:"s4_070", nodeId:4, type:"vocabulary", front:"friend", frontRu:"друг/подруга", back:"do'st", backCyr:"дўст", notes:"" },
  { id:"s4_071", nodeId:4, type:"vocabulary", front:"name", frontRu:"имя", back:"ism", backCyr:"исм", notes:"" },
  { id:"s4_072", nodeId:4, type:"vocabulary", front:"age", frontRu:"возраст", back:"yosh", backCyr:"ёш", notes:"Yoshingiz necha? = How old are you?" },

  // BODY
  { id:"s4_073", nodeId:4, type:"vocabulary", front:"head", frontRu:"голова", back:"bosh", backCyr:"бош", notes:"" },
  { id:"s4_074", nodeId:4, type:"vocabulary", front:"eye", frontRu:"глаз", back:"ko'z", backCyr:"кўз", notes:"" },
  { id:"s4_075", nodeId:4, type:"vocabulary", front:"ear", frontRu:"ухо", back:"quloq", backCyr:"қулоқ", notes:"" },
  { id:"s4_076", nodeId:4, type:"vocabulary", front:"nose", frontRu:"нос", back:"burun", backCyr:"бурун", notes:"" },
  { id:"s4_077", nodeId:4, type:"vocabulary", front:"mouth", frontRu:"рот", back:"og'iz", backCyr:"оғиз", notes:"" },
  { id:"s4_078", nodeId:4, type:"vocabulary", front:"tooth / teeth", frontRu:"зуб / зубы", back:"tish", backCyr:"тиш", notes:"Tishim og'riyapti = My tooth hurts" },
  { id:"s4_079", nodeId:4, type:"vocabulary", front:"hand / arm", frontRu:"рука", back:"qo'l", backCyr:"қўл", notes:"Same word for hand and arm" },
  { id:"s4_080", nodeId:4, type:"vocabulary", front:"foot / leg", frontRu:"нога", back:"oyoq", backCyr:"оёқ", notes:"Same word for foot and leg" },
  { id:"s4_081", nodeId:4, type:"vocabulary", front:"back", frontRu:"спина", back:"orqa", backCyr:"орқа", notes:"" },
  { id:"s4_082", nodeId:4, type:"vocabulary", front:"stomach", frontRu:"живот", back:"qorin", backCyr:"қорин", notes:"" },
  { id:"s4_083", nodeId:4, type:"vocabulary", front:"heart", frontRu:"сердце", back:"yurak", backCyr:"юрак", notes:"" },
  { id:"s4_084", nodeId:4, type:"vocabulary", front:"throat", frontRu:"горло", back:"tomoq", backCyr:"томоқ", notes:"Tomoqim og'riyapti = I have a sore throat" },
  { id:"s4_085", nodeId:4, type:"phrase", front:"It hurts / My [X] hurts", frontRu:"Болит / У меня болит [X]", back:"og'riyapti", backCyr:"оғрияпти", notes:"Pattern: Mening [body part]im og'riyapti. Boshim og'riyapti = My head hurts" },

  // FOOD & DRINK
  { id:"s4_086", nodeId:4, type:"vocabulary", front:"food", frontRu:"еда / пища", back:"taom / ovqat", backCyr:"таом / овқат", notes:"ovqat = food/meal (more common in speech)" },
  { id:"s4_087", nodeId:4, type:"vocabulary", front:"bread", frontRu:"хлеб", back:"non", backCyr:"нон", notes:"Central to Uzbek culture — round flatbread (lepyoshka)" },
  { id:"s4_088", nodeId:4, type:"vocabulary", front:"water", frontRu:"вода", back:"suv", backCyr:"сув", notes:"" },
  { id:"s4_089", nodeId:4, type:"vocabulary", front:"tea", frontRu:"чай", back:"choy", backCyr:"чой", notes:"Green tea (ko'k choy) is the staple. Always offered to guests." },
  { id:"s4_090", nodeId:4, type:"vocabulary", front:"milk", frontRu:"молоко", back:"sut", backCyr:"сут", notes:"" },
  { id:"s4_091", nodeId:4, type:"vocabulary", front:"meat", frontRu:"мясо", back:"go'sht", backCyr:"гўшт", notes:"" },
  { id:"s4_092", nodeId:4, type:"vocabulary", front:"rice (cooked)", frontRu:"рис / плов", back:"palov", backCyr:"палов", notes:"Palov (plov) is the national dish: rice with meat and carrots" },
  { id:"s4_093", nodeId:4, type:"vocabulary", front:"egg", frontRu:"яйцо", back:"tuxum", backCyr:"тухум", notes:"" },
  { id:"s4_094", nodeId:4, type:"vocabulary", front:"vegetable", frontRu:"овощ", back:"sabzavot", backCyr:"сабзавот", notes:"" },
  { id:"s4_095", nodeId:4, type:"vocabulary", front:"fruit", frontRu:"фрукт", back:"meva", backCyr:"мева", notes:"Uzbekistan is famous for its melons (qovun) and grapes (uzum)" },
  { id:"s4_096", nodeId:4, type:"vocabulary", front:"salt", frontRu:"соль", back:"tuz", backCyr:"туз", notes:"" },
  { id:"s4_097", nodeId:4, type:"vocabulary", front:"restaurant", frontRu:"ресторан", back:"restoran", backCyr:"ресторан", notes:"Russian loanword" },
  { id:"s4_098", nodeId:4, type:"vocabulary", front:"I'm hungry", frontRu:"Я голоден/голодна", back:"Qornim och", backCyr:"Қорним оч", notes:"Lit: My stomach is empty" },
  { id:"s4_099", nodeId:4, type:"vocabulary", front:"I'm thirsty", frontRu:"Я хочу пить", back:"Chanqadim", backCyr:"Чанқадим", notes:"" },
  { id:"s4_100", nodeId:4, type:"vocabulary", front:"Delicious!", frontRu:"Вкусно!", back:"Juda mazali!", backCyr:"Жуда мазали!", notes:"" },

  // PLACES & DIRECTIONS
  { id:"s4_101", nodeId:4, type:"vocabulary", front:"left", frontRu:"левый / налево", back:"chap", backCyr:"чап", notes:"Chapga buring = Turn left" },
  { id:"s4_102", nodeId:4, type:"vocabulary", front:"right", frontRu:"правый / направо", back:"o'ng", backCyr:"ўнг", notes:"O'ngga buring = Turn right" },
  { id:"s4_103", nodeId:4, type:"vocabulary", front:"straight ahead", frontRu:"прямо", back:"to'g'ri", backCyr:"тўғри", notes:"To'g'ri boring = Go straight" },
  { id:"s4_104", nodeId:4, type:"vocabulary", front:"near / close", frontRu:"близко / рядом", back:"yaqin", backCyr:"яқин", notes:"" },
  { id:"s4_105", nodeId:4, type:"vocabulary", front:"far", frontRu:"далеко", back:"uzoq", backCyr:"узоқ", notes:"" },
  { id:"s4_106", nodeId:4, type:"vocabulary", front:"street / road", frontRu:"улица / дорога", back:"ko'cha / yo'l", backCyr:"кўча / йўл", notes:"ko'cha = street. yo'l = road/way" },
  { id:"s4_107", nodeId:4, type:"vocabulary", front:"city", frontRu:"город", back:"shahar", backCyr:"шаҳар", notes:"" },
  { id:"s4_108", nodeId:4, type:"vocabulary", front:"house / home", frontRu:"дом", back:"uy", backCyr:"уй", notes:"Uyga boramiz = We're going home" },
  { id:"s4_109", nodeId:4, type:"vocabulary", front:"hotel", frontRu:"гостиница", back:"mehmonxona", backCyr:"меҳмонхона", notes:"Lit: guest-house" },
  { id:"s4_110", nodeId:4, type:"vocabulary", front:"hospital", frontRu:"больница", back:"kasalxona", backCyr:"касалхона", notes:"Lit: sick-house" },
  { id:"s4_111", nodeId:4, type:"vocabulary", front:"pharmacy", frontRu:"аптека", back:"dorixona", backCyr:"дорихона", notes:"Lit: medicine-house" },
  { id:"s4_112", nodeId:4, type:"vocabulary", front:"market / bazaar", frontRu:"рынок / базар", back:"bozor", backCyr:"бозор", notes:"" },
  { id:"s4_113", nodeId:4, type:"vocabulary", front:"bank", frontRu:"банк", back:"bank", backCyr:"банк", notes:"Russian loanword" },
  { id:"s4_114", nodeId:4, type:"vocabulary", front:"airport", frontRu:"аэропорт", back:"aeroport", backCyr:"аэропорт", notes:"Russian loanword" },
  { id:"s4_115", nodeId:4, type:"vocabulary", front:"train station", frontRu:"вокзал", back:"vokzal", backCyr:"вокзал", notes:"Russian loanword" },
  { id:"s4_116", nodeId:4, type:"vocabulary", front:"mosque", frontRu:"мечеть", back:"masjid", backCyr:"масжид", notes:"Important landmark — Uzbekistan is predominantly Muslim" },

  // TRANSPORT
  { id:"s4_117", nodeId:4, type:"vocabulary", front:"car", frontRu:"машина", back:"mashina", backCyr:"машина", notes:"Russian loanword" },
  { id:"s4_118", nodeId:4, type:"vocabulary", front:"bus", frontRu:"автобус", back:"avtobus", backCyr:"автобус", notes:"Russian loanword" },
  { id:"s4_119", nodeId:4, type:"vocabulary", front:"taxi", frontRu:"такси", back:"taksi", backCyr:"такси", notes:"Russian loanword" },
  { id:"s4_120", nodeId:4, type:"vocabulary", front:"train", frontRu:"поезд", back:"poyezd", backCyr:"поезд", notes:"Russian loanword" },
  { id:"s4_121", nodeId:4, type:"vocabulary", front:"plane", frontRu:"самолёт", back:"samolyot", backCyr:"самолёт", notes:"Russian loanword" },
  { id:"s4_122", nodeId:4, type:"phrase", front:"I need a taxi", frontRu:"Мне нужно такси", back:"Menga taksi kerak", backCyr:"Менга такси керак", notes:"" },

  // OCCUPATIONS
  { id:"s4_123", nodeId:4, type:"vocabulary", front:"doctor", frontRu:"врач / доктор", back:"doktor", backCyr:"доктор", notes:"Russian loanword" },
  { id:"s4_124", nodeId:4, type:"vocabulary", front:"teacher", frontRu:"учитель", back:"o'qituvchi", backCyr:"ўқитувчи", notes:"Lit: one who teaches" },
  { id:"s4_125", nodeId:4, type:"vocabulary", front:"student", frontRu:"студент / ученик", back:"talaba / o'quvchi", backCyr:"талаба / ўқувчи", notes:"talaba = university student. o'quvchi = school student" },
  { id:"s4_126", nodeId:4, type:"vocabulary", front:"engineer", frontRu:"инженер", back:"muhandis", backCyr:"муҳандис", notes:"" },
  { id:"s4_127", nodeId:4, type:"vocabulary", front:"What is your occupation?", frontRu:"Кем вы работаете?", back:"Kasbingiz nima?", backCyr:"Касбингиз нима?", notes:"Lit: Your occupation what-is?" },

  // ADJECTIVES (most common)
  { id:"s4_128", nodeId:4, type:"vocabulary", front:"big / large", frontRu:"большой", back:"katta", backCyr:"катта", notes:"" },
  { id:"s4_129", nodeId:4, type:"vocabulary", front:"small / little", frontRu:"маленький", back:"kichik", backCyr:"кичик", notes:"" },
  { id:"s4_130", nodeId:4, type:"vocabulary", front:"new", frontRu:"новый", back:"yangi", backCyr:"янги", notes:"" },
  { id:"s4_131", nodeId:4, type:"vocabulary", front:"old (thing)", frontRu:"старый (предмет)", back:"eski", backCyr:"эски", notes:"For old objects/things. Not for people." },
  { id:"s4_132", nodeId:4, type:"vocabulary", front:"old (person)", frontRu:"старый (человек)", back:"keksa / qari", backCyr:"кекса / қари", notes:"" },
  { id:"s4_133", nodeId:4, type:"vocabulary", front:"hot", frontRu:"горячий / жарко", back:"issiq", backCyr:"иссиқ", notes:"" },
  { id:"s4_134", nodeId:4, type:"vocabulary", front:"cold", frontRu:"холодный / холодно", back:"sovuq", backCyr:"совуқ", notes:"" },
  { id:"s4_135", nodeId:4, type:"vocabulary", front:"expensive", frontRu:"дорогой", back:"qimmat", backCyr:"қиммат", notes:"" },
  { id:"s4_136", nodeId:4, type:"vocabulary", front:"cheap", frontRu:"дешёвый", back:"arzon", backCyr:"арзон", notes:"" },
  { id:"s4_137", nodeId:4, type:"vocabulary", front:"beautiful / nice", frontRu:"красивый", back:"chiroyli", backCyr:"чиройли", notes:"" },
  { id:"s4_138", nodeId:4, type:"vocabulary", front:"very", frontRu:"очень", back:"juda", backCyr:"жуда", notes:"Juda yakhshi = Very good" },
  { id:"s4_139", nodeId:4, type:"vocabulary", front:"more", frontRu:"больше / ещё", back:"yana / ko'proq", backCyr:"яна / кўпроқ", notes:"Yana bir = one more" },
  { id:"s4_140", nodeId:4, type:"vocabulary", front:"a little / a bit", frontRu:"немного / чуть-чуть", back:"ozgina / biroz", backCyr:"озгина / бироз", notes:"" },

  // COMMON VERBS
  { id:"s4_141", nodeId:4, type:"vocabulary", front:"to go", frontRu:"идти / ехать", back:"bormoq", backCyr:"бормоқ", notes:"Men boraman = I'm going. U boradi = He/she is going." },
  { id:"s4_142", nodeId:4, type:"vocabulary", front:"to come", frontRu:"приходить", back:"kelmoq", backCyr:"келмоқ", notes:"U keldi = He/she came." },
  { id:"s4_143", nodeId:4, type:"vocabulary", front:"to eat", frontRu:"есть / кушать", back:"yemoq", backCyr:"емоқ", notes:"" },
  { id:"s4_144", nodeId:4, type:"vocabulary", front:"to drink", frontRu:"пить", back:"ichmoq", backCyr:"ичмоқ", notes:"" },
  { id:"s4_145", nodeId:4, type:"vocabulary", front:"to buy", frontRu:"покупать", back:"sotib olmoq", backCyr:"сотиб олмоқ", notes:"Lit: to take by selling" },
  { id:"s4_146", nodeId:4, type:"vocabulary", front:"to see", frontRu:"видеть", back:"ko'rmoq", backCyr:"кўрмоқ", notes:"" },
  { id:"s4_147", nodeId:4, type:"vocabulary", front:"to speak / to say", frontRu:"говорить", back:"gapirmoq / aytmoq", backCyr:"гапирмоқ / айтмоқ", notes:"gapirmoq = to speak (ongoing). aytmoq = to say (specific utterance)" },
  { id:"s4_148", nodeId:4, type:"vocabulary", front:"to read", frontRu:"читать", back:"o'qimoq", backCyr:"ўқимоқ", notes:"Also means to study" },
  { id:"s4_149", nodeId:4, type:"vocabulary", front:"to write", frontRu:"писать", back:"yozmoq", backCyr:"ёзмоқ", notes:"" },
  { id:"s4_150", nodeId:4, type:"vocabulary", front:"to work", frontRu:"работать", back:"ishlamo q", backCyr:"ишламоқ", notes:"" },
  { id:"s4_151", nodeId:4, type:"vocabulary", front:"to live / to reside", frontRu:"жить", back:"yashamo q", backCyr:"яшамоқ", notes:"" },
  { id:"s4_152", nodeId:4, type:"vocabulary", front:"to give", frontRu:"давать", back:"bermoq", backCyr:"бермоқ", notes:"" },
  { id:"s4_153", nodeId:4, type:"vocabulary", front:"to take", frontRu:"брать", back:"olmoq", backCyr:"олмоқ", notes:"" },
  { id:"s4_154", nodeId:4, type:"vocabulary", front:"to open", frontRu:"открывать", back:"ochmoq", backCyr:"очмоқ", notes:"" },
  { id:"s4_155", nodeId:4, type:"vocabulary", front:"to close", frontRu:"закрывать", back:"yopmoq", backCyr:"ёпмоқ", notes:"" },
  { id:"s4_156", nodeId:4, type:"vocabulary", front:"to wait", frontRu:"ждать", back:"kutmoq", backCyr:"кутмоқ", notes:"" },
  { id:"s4_157", nodeId:4, type:"vocabulary", front:"to understand", frontRu:"понимать", back:"tushunmoq", backCyr:"тушунмоқ", notes:"" },
  { id:"s4_158", nodeId:4, type:"vocabulary", front:"to know", frontRu:"знать", back:"bilmoq", backCyr:"билмоқ", notes:"" },

  // SHOPPING
  { id:"s4_159", nodeId:4, type:"vocabulary", front:"money", frontRu:"деньги", back:"pul", backCyr:"пул", notes:"" },
  { id:"s4_160", nodeId:4, type:"vocabulary", front:"price", frontRu:"цена", back:"narx / baho", backCyr:"нарх / баҳо", notes:"" },
  { id:"s4_161", nodeId:4, type:"phrase", front:"How much does this cost?", frontRu:"Сколько это стоит?", back:"Bu qancha turadi?", backCyr:"Бу қанча туради?", notes:"" },
  { id:"s4_162", nodeId:4, type:"phrase", front:"This is too expensive", frontRu:"Это слишком дорого", back:"Bu juda qimmat", backCyr:"Бу жуда қиммат", notes:"" },
  { id:"s4_163", nodeId:4, type:"phrase", front:"Can you lower the price?", frontRu:"Можно снизить цену?", back:"Narxini tushura olasizmi?", backCyr:"Нарxини тушура оласизми?", notes:"Bargaining is expected at bazaars" },

  // WEATHER
  { id:"s4_164", nodeId:4, type:"vocabulary", front:"weather", frontRu:"погода", back:"ob-havo", backCyr:"об-ҳаво", notes:"" },
  { id:"s4_165", nodeId:4, type:"vocabulary", front:"sun / sunny", frontRu:"солнце / солнечно", back:"quyosh / quyoshli", backCyr:"қуёш / қуёшли", notes:"Uzbekistan is very sunny — 300+ days/year" },
  { id:"s4_166", nodeId:4, type:"vocabulary", front:"rain", frontRu:"дождь", back:"yomg'ir", backCyr:"ёмғир", notes:"" },
  { id:"s4_167", nodeId:4, type:"vocabulary", front:"snow", frontRu:"снег", back:"qor", backCyr:"қор", notes:"" },
  { id:"s4_168", nodeId:4, type:"vocabulary", front:"wind", frontRu:"ветер", back:"shamol", backCyr:"шамол", notes:"" },
  { id:"s4_169", nodeId:4, type:"phrase", front:"What is the weather like today?", frontRu:"Какая сегодня погода?", back:"Bugun ob-havo qanday?", backCyr:"Бугун об-ҳаво қандай?", notes:"" },

  // HEALTH
  { id:"s4_170", nodeId:4, type:"vocabulary", front:"pain / it hurts", frontRu:"боль / болит", back:"og'riq / og'riyapti", backCyr:"оғриқ / оғрияпти", notes:"" },
  { id:"s4_171", nodeId:4, type:"vocabulary", front:"fever", frontRu:"температура / жар", back:"isitma", backCyr:"иситма", notes:"Isitmam bor = I have a fever" },
  { id:"s4_172", nodeId:4, type:"vocabulary", front:"medicine", frontRu:"лекарство", back:"dori", backCyr:"дори", notes:"" },
  { id:"s4_173", nodeId:4, type:"phrase", front:"Where does it hurt?", frontRu:"Где болит?", back:"Qayeringiz og'riyapti?", backCyr:"Қаеррингиз оғрияпти?", notes:"Doctor's question" },

  // ============================================================
  // NODE 5 — SENTENCE CONSTRUCTION
  // ============================================================

  { id:"s5_001", nodeId:5, type:"grammar", front:"Present tense pattern", frontRu:"Настоящее время (схема)", back:"Verb stem + -a/-y + personal suffix", backCyr:"Основа + -а/-й + личный суффикс", notes:"bormoq → bor + a + man = boraman (I go). kelmoq → kel + a + man = kelaman (I come)" },
  { id:"s5_002", nodeId:5, type:"grammar", front:"Past tense pattern", frontRu:"Прошедшее время (схема)", back:"Verb stem + -di + personal suffix", backCyr:"Основа + -ди + личный суффикс", notes:"bor + di + m = bordim (I went). kel + di + = keldi (he/she came)" },
  { id:"s5_003", nodeId:5, type:"grammar", front:"Future / intentional pattern", frontRu:"Будущее время (схема)", back:"Verb stem + -moqchi + personal suffix", backCyr:"Основа + -мoқчи + личный суффикс", notes:"Bormoqchiman = I intend to go / I'm going to go" },
  { id:"s5_004", nodeId:5, type:"grammar", front:"Can / able to", frontRu:"Мочь / уметь", back:"Verb stem + -a olmoq", backCyr:"Основа + -а олмоқ", notes:"Bora olaman = I can go. Gapira olasizmi? = Can you speak?" },
  { id:"s5_005", nodeId:5, type:"grammar", front:"Cannot / unable", frontRu:"Не мочь", back:"Verb stem + -a olmayman", backCyr:"Основа + -а олмайман", notes:"Bora olmayman = I cannot go" },
  { id:"s5_006", nodeId:5, type:"grammar", front:"Must / have to", frontRu:"Нужно / должен", back:"Verb + kerak", backCyr:"Глагол + керак", notes:"Borishim kerak = I must go. Lit: My going is necessary" },
  { id:"s5_007", nodeId:5, type:"grammar", front:"Plural suffix", frontRu:"Суффикс множественного числа", back:"-lar", backCyr:"-лар", notes:"kitob = book. kitoblar = books. dost = friend. do'stlar = friends" },
  { id:"s5_008", nodeId:5, type:"grammar", front:"Possessive: my", frontRu:"Притяжательное: мой", back:"-im (after consonant) / -m (after vowel)", backCyr:"-им / -м", notes:"kitobim = my book. uyim = my house. ismim = my name" },
  { id:"s5_009", nodeId:5, type:"grammar", front:"Possessive: your (formal)", frontRu:"Притяжательное: ваш", back:"-ingiz", backCyr:"-ингиз", notes:"kitobingiz = your book. ismingiz = your name" },
  { id:"s5_010", nodeId:5, type:"grammar", front:"There is / There are", frontRu:"Есть (наличие)", back:"bor", backCyr:"бор", notes:"Pul bor = There is money. Mehmonxona bor = There is a hotel." },
  { id:"s5_011", nodeId:5, type:"grammar", front:"There isn't / There aren't", frontRu:"Нет (отсутствие)", back:"yo'q", backCyr:"йўқ", notes:"Pul yo'q = There is no money. Note: yo'q is the same as 'no' in answers." },
  { id:"s5_012", nodeId:5, type:"phrase", front:"Do you have...?", frontRu:"У вас есть...?", back:"Sizda...bormi?", backCyr:"Сизда...борми?", notes:"Sizda xona bormi? = Do you have a room?" },
  { id:"s5_013", nodeId:5, type:"phrase", front:"I have...", frontRu:"У меня есть...", back:"Menda...bor", backCyr:"Менда...бор", notes:"Lit: At/with me ... exists" },
  { id:"s5_014", nodeId:5, type:"phrase", front:"I don't have...", frontRu:"У меня нет...", back:"Menda...yo'q", backCyr:"Менда...йўқ", notes:"" },
  { id:"s5_015", nodeId:5, type:"phrase", front:"Let's go!", frontRu:"Пойдём!", back:"Boraylik!", backCyr:"Борайлик!", notes:"Hortative: verb stem + -aylik" },

  // ============================================================
  // NODE 6 — CONVERSATIONAL PATTERNS
  // Model dialogues from Öztopçu and Peace Corps materials
  // ============================================================

  // At a hotel
  { id:"s6_001", nodeId:6, type:"dialogue", front:"Do you have a vacancy?", frontRu:"Есть ли свободные номера?", back:"Bosh xonangiz bormi?", backCyr:"Бош хонангиз борми?", notes:"Lit: Is there an empty room?" },
  { id:"s6_002", nodeId:6, type:"dialogue", front:"I need a room for one person", frontRu:"Мне нужен номер на одного человека", back:"Menga bir kishilik xona kerak", backCyr:"Менга бир кишилик хона керак", notes:"" },
  { id:"s6_003", nodeId:6, type:"dialogue", front:"How many days will you stay?", frontRu:"Сколько дней вы пробудете?", back:"Necha kun qolasiz?", backCyr:"Неча кун қоласиз?", notes:"" },
  { id:"s6_004", nodeId:6, type:"dialogue", front:"How much is the room?", frontRu:"Сколько стоит номер?", back:"Xonaning narxi qancha?", backCyr:"Хонанинг нарxi қанча?", notes:"" },
  { id:"s6_005", nodeId:6, type:"dialogue", front:"Here is your key", frontRu:"Вот ваш ключ", back:"Mana, kalitingiz", backCyr:"Мана, калитингиз", notes:"" },

  // In a taxi
  { id:"s6_006", nodeId:6, type:"dialogue", front:"I need a taxi", frontRu:"Мне нужно такси", back:"Menga taksi kerak", backCyr:"Менга такси керак", notes:"" },
  { id:"s6_007", nodeId:6, type:"dialogue", front:"Where would you like to go?", frontRu:"Куда вы хотите ехать?", back:"Qayerga bormoqchisiz?", backCyr:"Қаерга бормоқчисиз?", notes:"" },
  { id:"s6_008", nodeId:6, type:"dialogue", front:"Please stop here", frontRu:"Остановитесь здесь, пожалуйста", back:"Marhamat, bu yerda to'xtating", backCyr:"Марҳамат, бу ерда тўхтатинг", notes:"" },
  { id:"s6_009", nodeId:6, type:"dialogue", front:"How much do I owe you?", frontRu:"Сколько я вам должен?", back:"Sizga qancha to'lashim kerak?", backCyr:"Сизга қанча тўлашим керак?", notes:"" },
  { id:"s6_010", nodeId:6, type:"dialogue", front:"Please go faster / slower", frontRu:"Пожалуйста, быстрее / медленнее", back:"Marhamat, tezroq / sekinroq", backCyr:"Марҳамат, тезроқ / секинроқ", notes:"" },

  // At a restaurant
  { id:"s6_011", nodeId:6, type:"dialogue", front:"What would you like to eat?", frontRu:"Что вы будете есть?", back:"Nima yeyishni xohlaysiz?", backCyr:"Нима ейишни хоҳлайсиз?", notes:"" },
  { id:"s6_012", nodeId:6, type:"dialogue", front:"I'll have some rice (palov)", frontRu:"Я возьму плов", back:"Men palovdan olaman", backCyr:"Мен паловдан оламан", notes:"" },
  { id:"s6_013", nodeId:6, type:"dialogue", front:"The bill, please", frontRu:"Счёт, пожалуйста", back:"Hisob-kitob, iltimos", backCyr:"Ҳисоб-китоб, илтимос", notes:"iltimos = please (alternative to marhamat)" },
  { id:"s6_014", nodeId:6, type:"dialogue", front:"Bon appétit! (enjoy your meal)", frontRu:"Приятного аппетита!", back:"Oling, marhamat! / Yaxshi yeng!", backCyr:"Олинг, марҳамат! / Яхши енг!", notes:"" },

  // At the doctor
  { id:"s6_015", nodeId:6, type:"dialogue", front:"I don't feel well", frontRu:"Я плохо себя чувствую", back:"Mazam yo'q", backCyr:"Мазам йўқ", notes:"Lit: I have no taste/feeling (common idiom)" },
  { id:"s6_016", nodeId:6, type:"dialogue", front:"Where does it hurt?", frontRu:"Где болит?", back:"Qayeringiz og'riyapti?", backCyr:"Қаерингиз оғрияпти?", notes:"" },
  { id:"s6_017", nodeId:6, type:"dialogue", front:"I have a high temperature", frontRu:"У меня высокая температура", back:"Isitmam baland", backCyr:"Иситмам баланд", notes:"" },
  { id:"s6_018", nodeId:6, type:"dialogue", front:"Take this medicine three times a day", frontRu:"Принимайте это лекарство три раза в день", back:"Bu dorini kuniga uch marta iching", backCyr:"Бу дорини кунига уч марта ичинг", notes:"" },

  // Shopping
  { id:"s6_019", nodeId:6, type:"dialogue", front:"Is there a cheaper one?", frontRu:"Есть что-нибудь подешевле?", back:"Arzonrog'i bormi?", backCyr:"Арзонроғи борми?", notes:"" },
  { id:"s6_020", nodeId:6, type:"dialogue", front:"I'll take this one", frontRu:"Я возьму вот это", back:"Mana shuni olaman", backCyr:"Мана шуни оламан", notes:"" },

  // ============================================================
  // NODE 7 — EXTENDED VOCABULARY (200-Hour JBLM Course themes)
  // ============================================================

  // Daily activities
  { id:"s7_001", nodeId:7, type:"vocabulary", front:"to wake up", frontRu:"просыпаться", back:"uyg'onmoq", backCyr:"уйғонмоқ", notes:"" },
  { id:"s7_002", nodeId:7, type:"vocabulary", front:"to sleep", frontRu:"спать", back:"uxlamoq", backCyr:"ухламоқ", notes:"" },
  { id:"s7_003", nodeId:7, type:"vocabulary", front:"to get dressed", frontRu:"одеваться", back:"kiyinmoq", backCyr:"кийинмоқ", notes:"" },
  { id:"s7_004", nodeId:7, type:"vocabulary", front:"to wash (oneself)", frontRu:"умываться", back:"yuvinmoq", backCyr:"юvinмоқ", notes:"" },
  { id:"s7_005", nodeId:7, type:"vocabulary", front:"to cook", frontRu:"готовить", back:"pishirmoq", backCyr:"пиширмоқ", notes:"" },
  { id:"s7_006", nodeId:7, type:"vocabulary", front:"to rest", frontRu:"отдыхать", back:"dam olmoq", backCyr:"дам олмоқ", notes:"" },
  { id:"s7_007", nodeId:7, type:"vocabulary", front:"to call (phone)", frontRu:"звонить", back:"qo'ng'iroq qilmoq", backCyr:"қўнғироқ қилмоқ", notes:"Lit: to make a bell" },
  { id:"s7_008", nodeId:7, type:"vocabulary", front:"to meet / get acquainted", frontRu:"знакомиться", back:"tanishmoq", backCyr:"танишмоқ", notes:"" },

  // Around the house
  { id:"s7_009", nodeId:7, type:"vocabulary", front:"room", frontRu:"комната", back:"xona", backCyr:"хона", notes:"" },
  { id:"s7_010", nodeId:7, type:"vocabulary", front:"kitchen", frontRu:"кухня", back:"oshxona", backCyr:"ошхона", notes:"Lit: food-house" },
  { id:"s7_011", nodeId:7, type:"vocabulary", front:"bathroom", frontRu:"ванная", back:"hammom", backCyr:"ҳаммом", notes:"" },
  { id:"s7_012", nodeId:7, type:"vocabulary", front:"window", frontRu:"окно", back:"deraza", backCyr:"дераза", notes:"" },
  { id:"s7_013", nodeId:7, type:"vocabulary", front:"door", frontRu:"дверь", back:"eshik", backCyr:"эшик", notes:"" },
  { id:"s7_014", nodeId:7, type:"vocabulary", front:"table", frontRu:"стол", back:"stol", backCyr:"стол", notes:"Russian loanword" },
  { id:"s7_015", nodeId:7, type:"vocabulary", front:"chair", frontRu:"стул", back:"stul", backCyr:"стул", notes:"Russian loanword" },
  { id:"s7_016", nodeId:7, type:"vocabulary", front:"bed", frontRu:"кровать", back:"karavot", backCyr:"каравот", notes:"" },

  // Recreation/leisure (JBLM Lesson 16)
  { id:"s7_017", nodeId:7, type:"vocabulary", front:"to play (sport/game)", frontRu:"играть", back:"o'ynamoq", backCyr:"ўйнамоқ", notes:"" },
  { id:"s7_018", nodeId:7, type:"vocabulary", front:"to watch", frontRu:"смотреть", back:"tomosha qilmoq", backCyr:"томоша қилмоқ", notes:"Kino tomosha qilmoq = to watch a movie" },
  { id:"s7_019", nodeId:7, type:"vocabulary", front:"music", frontRu:"музыка", back:"musiqa", backCyr:"мусиқа", notes:"" },
  { id:"s7_020", nodeId:7, type:"vocabulary", front:"film / movie", frontRu:"фильм", back:"film / kino", backCyr:"фильм / кино", notes:"Russian loanwords" },
  { id:"s7_021", nodeId:7, type:"vocabulary", front:"book", frontRu:"книга", back:"kitob", backCyr:"китоб", notes:"" },
  { id:"s7_022", nodeId:7, type:"vocabulary", front:"sport", frontRu:"спорт", back:"sport", backCyr:"спорт", notes:"Russian loanword" },

  // Cultural / Uzbek-specific
  { id:"s7_023", nodeId:7, type:"vocabulary", front:"guest / visitor", frontRu:"гость", back:"mehmon", backCyr:"меҳмон", notes:"Hospitality (mehmondo'stlik) is central to Uzbek culture. Guests are always honoured." },
  { id:"s7_024", nodeId:7, type:"vocabulary", front:"tea house", frontRu:"чайхана", back:"choyxona", backCyr:"чойхона", notes:"Traditional social gathering place for men. Important cultural institution." },
  { id:"s7_025", nodeId:7, type:"vocabulary", front:"wedding", frontRu:"свадьба", back:"to'y", backCyr:"тўй", notes:"Also means any celebration/feast. Uzbek weddings are large community events." },
  { id:"s7_026", nodeId:7, type:"vocabulary", front:"Nowruz (New Year)", frontRu:"Навруз (Новый год)", back:"Navro'z", backCyr:"Наврўз", notes:"Spring equinox festival (March 21). Most important Uzbek holiday." },
  { id:"s7_027", nodeId:7, type:"vocabulary", front:"Ramadan", frontRu:"Рамадан", back:"Ramazon", backCyr:"Рамазон", notes:"Islamic fasting month. Widely observed in Uzbekistan." },

  // Political/formal (JBLM Lesson 18)
  { id:"s7_028", nodeId:7, type:"vocabulary", front:"government", frontRu:"правительство", back:"hukumat", backCyr:"ҳукумат", notes:"" },
  { id:"s7_029", nodeId:7, type:"vocabulary", front:"police", frontRu:"полиция", back:"politsiya / militsiya", backCyr:"полиция / милиция", notes:"Both terms are used" },
  { id:"s7_030", nodeId:7, type:"vocabulary", front:"passport", frontRu:"паспорт", back:"pasport", backCyr:"паспорт", notes:"Russian loanword. Always carry it — ID checks are common." },
  { id:"s7_031", nodeId:7, type:"vocabulary", front:"embassy", frontRu:"посольство", back:"elchixona", backCyr:"элчихона", notes:"" },
  { id:"s7_032", nodeId:7, type:"vocabulary", front:"problem", frontRu:"проблема", back:"muammo", backCyr:"муаммо", notes:"" },

  // Personal appearance (JBLM Lesson 12)
  { id:"s7_033", nodeId:7, type:"vocabulary", front:"clothes / clothing", frontRu:"одежда", back:"kiyim", backCyr:"кийим", notes:"" },
  { id:"s7_034", nodeId:7, type:"vocabulary", front:"shoes", frontRu:"обувь", back:"poyabzal", backCyr:"пойабзал", notes:"" },
  { id:"s7_035", nodeId:7, type:"vocabulary", front:"color", frontRu:"цвет", back:"rang", backCyr:"ранг", notes:"" },
  { id:"s7_036", nodeId:7, type:"vocabulary", front:"white", frontRu:"белый", back:"oq", backCyr:"оқ", notes:"" },
  { id:"s7_037", nodeId:7, type:"vocabulary", front:"black", frontRu:"чёрный", back:"qora", backCyr:"қора", notes:"" },
  { id:"s7_038", nodeId:7, type:"vocabulary", front:"red", frontRu:"красный", back:"qizil", backCyr:"қизил", notes:"" },
  { id:"s7_039", nodeId:7, type:"vocabulary", front:"blue", frontRu:"синий / голубой", back:"ko'k", backCyr:"кўк", notes:"Also means sky/green in some dialects" },
  { id:"s7_040", nodeId:7, type:"vocabulary", front:"green", frontRu:"зелёный", back:"yashil", backCyr:"яшил", notes:"" },
  { id:"s7_041", nodeId:7, type:"vocabulary", front:"yellow", frontRu:"жёлтый", back:"sariq", backCyr:"сариқ", notes:"" },

  // At school (JBLM Lesson 15)
  { id:"s7_042", nodeId:7, type:"vocabulary", front:"school", frontRu:"школа", back:"maktab", backCyr:"мактаб", notes:"" },
  { id:"s7_043", nodeId:7, type:"vocabulary", front:"university", frontRu:"университет", back:"universitet", backCyr:"университет", notes:"Russian loanword" },
  { id:"s7_044", nodeId:7, type:"vocabulary", front:"lesson / class", frontRu:"урок / занятие", back:"dars", backCyr:"дарс", notes:"" },
  { id:"s7_045", nodeId:7, type:"vocabulary", front:"language", frontRu:"язык", back:"til", backCyr:"тил", notes:"Also means 'tongue'. O'zbek tili = Uzbek language" },
  { id:"s7_046", nodeId:7, type:"vocabulary", front:"dictionary", frontRu:"словарь", back:"lug'at", backCyr:"луғат", notes:"" },
  { id:"s7_047", nodeId:7, type:"vocabulary", front:"to study / to learn", frontRu:"учиться / изучать", back:"o'rganmoq / o'qimoq", backCyr:"ўрганмоқ / ўқимоқ", notes:"o'rganmoq = to learn/master. o'qimoq = to read/study" },

];

// NODE DEFINITIONS
const NODES = [
  { id: 1, name: "Sounds & Script", nameRu: "Звуки и алфавит", description: "Pronunciation, key sounds, how Uzbek works structurally", icon: "🔤", unlocked: true, requiredMature: 0 },
  { id: 2, name: "Survival Core", nameRu: "Основное выживание", description: "~60 essential phrases. Real-world utility from day one", icon: "🌱", unlocked: true, requiredMature: 0 },
  { id: 3, name: "Grammar Foundations", nameRu: "Основы грамматики", description: "Pronouns, postpositions, verb suffixes, question words", icon: "🏗️", unlocked: false, requiredMature: 10 },
  { id: 4, name: "Everyday Vocabulary", nameRu: "Повседневная лексика", description: "Numbers, time, family, body, food, directions, verbs", icon: "📚", unlocked: false, requiredMature: 25 },
  { id: 5, name: "Sentence Construction", nameRu: "Построение предложений", description: "Tenses, negation, possession, can/must/have to", icon: "⚙️", unlocked: false, requiredMature: 60 },
  { id: 6, name: "Conversational Patterns", nameRu: "Разговорные шаблоны", description: "Hotel, taxi, restaurant, doctor, shopping dialogues", icon: "💬", unlocked: false, requiredMature: 100 },
  { id: 7, name: "Extended Vocabulary", nameRu: "Расширенная лексика", description: "200-Hour JBLM course material: daily life, culture, politics", icon: "🔭", unlocked: false, requiredMature: 150 },
  { id: 8, name: "Free Conversation", nameRu: "Свободный разговор", description: "AI conversation mode. No more structured cards.", icon: "🗣️", unlocked: false, requiredMature: 220 },
];