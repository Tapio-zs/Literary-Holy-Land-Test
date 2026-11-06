const QUESTIONS = [
  {
    question: "你理想中的周末下午是？",
    options: [
      { letter: "A", text: "窝在旧书店角落翻一本绝版诗集，闻到纸页发霉的味道才安心" },
      { letter: "B", text: "在咖啡馆靠窗位置写东西，观察路人，把他们的故事记在本子上" },
      { letter: "C", text: "去剧院看一场实验话剧，散场后和朋友争论到深夜" },
      { letter: "D", text: "独自散步，走一条没走过的路，走到哪算哪" },
      { letter: "E", text: "在家重读一本童年最爱的书，像回老家一样" }
    ]
  },
  {
    question: "下面哪句话最像你写东西时的状态？",
    options: [
      { letter: "A", text: "“我必须把那种说不清的忧伤精确地写出来，一个词都不能错。”" },
      { letter: "B", text: "“我要让读者笑完以后，突然觉得心里被扎了一下。”" },
      { letter: "C", text: "“我写的是我们这一代人怎么活、怎么爱、怎么崩溃。”" },
      { letter: "D", text: "“我只是在记录，记录那些被时代碾过去的人。”" },
      { letter: "E", text: "“我在造一个世界，那里比现实更真实。”" }
    ]
  },
  {
    question: "如果只能带一本书去荒岛，你带？",
    options: [
      { letter: "A", text: "一本薄薄的诗集，反复读，读到每个字都长进身体里" },
      { letter: "B", text: "一本讽刺小说，笑着活下去" },
      { letter: "C", text: "一本讲普通人挣扎的长篇小说，够厚，够撑" },
      { letter: "D", text: "一本游记或日记，提醒自己世界还在别处" },
      { letter: "E", text: "一本神话或奇幻，荒岛也能变成王国" }
    ]
  },
  {
    question: "你最受不了哪种“文学”？",
    options: [
      { letter: "A", text: "矫情堆砌、没有真情实感的漂亮句子" },
      { letter: "B", text: "板着脸说教、一点幽默感都没有的东西" },
      { letter: "C", text: "假装深刻、其实不敢碰真实生活的作品" },
      { letter: "D", text: "只写风花雪月、看不见人间疾苦的文字" },
      { letter: "E", text: "想象力贫乏、只会复制现实的无聊故事" }
    ]
  },
  {
    question: "你心中“朝圣”这件事，最像什么？",
    options: [
      { letter: "A", text: "去一个安静的角落，和某个死去的灵魂单独待一会儿" },
      { letter: "B", text: "去一个热闹的地方，看人，看生活，看荒诞" },
      { letter: "C", text: "去一个曾经燃烧过的地方，感受理想和幻灭" },
      { letter: "D", text: "去一个遥远的、艰苦的、真实的地方，走他们走过的路" },
      { letter: "E", text: "去一个不存在的地方——但你知道它“应该”在哪里" }
    ]
  },
  {
    question: "朋友形容你，最可能说你是？",
    options: [
      { letter: "A", text: "敏感、内敛、有点“旧时代”的人" },
      { letter: "B", text: "嘴毒心软、看透不说透的人" },
      { letter: "C", text: "热血过、失望过、还在较劲的人" },
      { letter: "D", text: "务实、能吃苦、不爱煽情的人" },
      { letter: "E", text: "脑子里住着一整个宇宙的人" }
    ]
  },
  {
    question: "你更愿意用哪种方式“抵达”一个作家？",
    options: [
      { letter: "A", text: "读他的全部作品，按写作年份一本本读" },
      { letter: "B", text: "读他的传记和书信，看他怎么活" },
      { letter: "C", text: "读他那个时代的其他作品，把他放回人群里" },
      { letter: "D", text: "去他生活过的地方走走，看看那片土地" },
      { letter: "E", text: "不抵达，只在作品里和他相遇就够了" }
    ]
  },
  {
    question: "最后一题，凭直觉选——你最想“住进”下面哪个场景？",
    options: [
      { letter: "A", text: "一间堆满书的老房子，窗外下雨，屋里只有台灯亮着" },
      { letter: "B", text: "一家深夜还开着的小酒馆，什么人都有，什么话都敢说" },
      { letter: "C", text: "一个广场，人群正在聚集，空气里有某种要发生的事" },
      { letter: "D", text: "一条黄土路，远处是山，有人背着行囊在走" },
      { letter: "E", text: "一片雾中的森林，路看不清，但你知道前面有东西" }
    ]
  }
];

const RESULTS = {
  A: {
    name: "都柏林 · 文学旧宅",
    short: "都柏林",
    tag: "敏感、内省、旧时代的诗意",
    coords: "53.3498° N · 6.2603° W",
    accent: "#8fbfa4",
    rgb: "143, 191, 164",
    deep: "#4e7a65",
    photo: {
      src: "assets/photos/dublin-1600.webp",
      srcset: "assets/photos/dublin-800.webp 800w, assets/photos/dublin-1200.webp 1200w, assets/photos/dublin-1600.webp 1600w",
      width: 1600,
      height: 1067,
      alt: "都柏林三一学院入口",
      credit: {
        author: "Stephen Bergin",
        license: "CC0",
        licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
        page: "https://commons.wikimedia.org/wiki/File:The_entrance_of_the_historic_Trinity_College_(Unsplash).jpg"
      }
    },
    paragraphs: [
      "你是那种“把一句话在心里磨三天”的人。你的朝圣不是热闹的，是安静的：一间老屋、一盏台灯、一个死去的灵魂。",
      "你适合去都柏林，在乔伊斯的旧居里坐一下午，什么都不做，只是“在”。"
    ],
    guide: {
      books: [
        {
          title: "《都柏林人》",
          meta: "詹姆斯·乔伊斯 · 1914 · 短篇集",
          note: "十五个短篇写尽城市的瘫痪与顿悟。先读最后一篇《死者》。"
        },
        {
          title: "《尤利西斯》",
          meta: "詹姆斯·乔伊斯 · 1922 · 长篇小说",
          note: "一天一夜的都柏林。读不完也没关系，先看第六章《哈得斯》。"
        },
        {
          title: "《凯尔特的薄暮》",
          meta: "W.B. 叶芝 · 1893 · 民间故事",
          note: "叶芝收集的爱尔兰传说，是这座城市另一层雾。"
        }
      ],
      place: {
        name: "詹姆斯·乔伊斯中心",
        address: "35 North Great George's St, Dublin 1",
        note: "一栋乔治亚式老宅，藏着手稿、书信和《尤利西斯》的旧物。开放时间常变，出发前查官网。"
      },
      route: {
        title: "利菲河两岸 · 半日步行",
        duration: "约 4 小时 · 3.5 km",
        stops: [
          { time: "10:00", name: "三一学院 &《凯尔经》", note: "从 Book of Kells 开始，看乔伊斯与叶芝的城市底色。" },
          { time: "11:30", name: "詹姆斯·乔伊斯中心", note: "老宅里看手稿与书信，慢慢待一会儿。" },
          { time: "13:00", name: "O'Connell 街 → 利菲河 → 圣斯蒂芬绿地", note: "过桥、吃午饭，在公园里读两页书。" },
          { time: "15:00", name: "桑迪蒙特海滨", note: "《尤利西斯》第三章的散步地，退潮时最像书里。" }
        ],
        note: "都柏林多雨，带防水外套；海滨风大，傍晚降温快。"
      }
    }
  },
  B: {
    name: "布拉格 · 荒诞酒馆",
    short: "布拉格",
    tag: "讽刺、幽默、看透荒诞",
    coords: "50.0755° N · 14.4378° E",
    accent: "#e0b25a",
    rgb: "224, 178, 90",
    deep: "#8a6a2a",
    photo: {
      src: "assets/photos/prague-1600.webp",
      srcset: "assets/photos/prague-800.webp 800w, assets/photos/prague-1200.webp 1200w, assets/photos/prague-1600.webp 1600w",
      width: 1600,
      height: 1067,
      alt: "布拉格日出时的老城与伏尔塔瓦河",
      credit: {
        author: "ALZOE",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        page: "https://commons.wikimedia.org/wiki/File:Prague_at_sunrise.jpg"
      }
    },
    paragraphs: [
      "你看得透，但你不苦大仇深。你相信笑是最好的武器。",
      "布拉格适合你——卡夫卡写荒诞，哈谢克写好兵帅克，这座城市的幽默是带刺的。你会在一家深夜酒馆里找到同类。"
    ],
    guide: {
      books: [
        {
          title: "《变形记》",
          meta: "弗朗茨·卡夫卡 · 1915 · 中篇小说",
          note: "从一只甲虫开始，理解布拉格的荒诞。"
        },
        {
          title: "《好兵帅克》",
          meta: "雅罗斯拉夫·哈谢克 · 1923 · 长篇小说",
          note: "把帝国、战争和官僚系统全部变成笑话。"
        },
        {
          title: "《城堡》",
          meta: "弗朗茨·卡夫卡 · 1926 · 长篇小说",
          note: "永远走不进去的城堡，像这座城市的雾。"
        }
      ],
      place: {
        name: "卡夫卡博物馆",
        address: "Cihelná 2b, 118 00 Malá Strana",
        note: "伏尔塔瓦河边，按卡夫卡生平与作品布展；院子里有那两个会动的雕塑。"
      },
      route: {
        title: "老城—小城 · 半日",
        duration: "约 4 小时 · 3 km",
        stops: [
          { time: "09:30", name: "老城广场", note: "从天文钟下出发，避开整点人潮。" },
          { time: "10:30", name: "查理大桥", note: "过桥时数一数三十座圣像。" },
          { time: "11:30", name: "卡夫卡博物馆", note: "看卡夫卡与布拉格的纠缠，再去河边坐一会儿。" },
          { time: "13:30", name: "黄金巷 22 号", note: "卡夫卡曾在此写作；在布拉格城堡内，需城堡门票。" },
          { time: "15:00", name: "金虎酒馆（U Zlatého tygra）", note: "哈谢克常来的老酒馆，点一杯皮尔森收尾。" }
        ],
        note: "黄金巷需购布拉格城堡套票；金虎酒馆傍晚人多，想坐吧台要早去。"
      }
    }
  },
  C: {
    name: "巴黎 · 左岸咖啡馆",
    short: "巴黎",
    tag: "热血、幻灭、时代现场",
    coords: "48.8566° N · 2.3522° E",
    accent: "#e68a72",
    rgb: "230, 138, 114",
    deep: "#8c4436",
    photo: {
      src: "assets/photos/paris-1600.webp",
      srcset: "assets/photos/paris-800.webp 800w, assets/photos/paris-1200.webp 1200w, assets/photos/paris-1600.webp 1600w",
      width: 1600,
      height: 1067,
      alt: "巴黎莎士比亚书店门面",
      credit: {
        author: "Shadowgate",
        license: "CC BY 2.0",
        licenseUrl: "https://creativecommons.org/licenses/by/2.0",
        page: "https://commons.wikimedia.org/wiki/File:Shakespeare_and_Company_bookstore,_Paris_13_August_2013.jpg"
      }
    },
    paragraphs: [
      "你热血过，也失望过，但你还在较劲。你的朝圣是“现场”：一群人、一个时代、一场争论到深夜的聚会。",
      "去巴黎左岸吧，坐在那些咖啡馆里，想象一百年前也有人在这里为理想吵得面红耳赤。"
    ],
    guide: {
      books: [
        {
          title: "《流动的盛宴》",
          meta: "欧内斯特·海明威 · 1964 · 回忆录",
          note: "1920 年代左岸的咖啡馆、书店和穷日子。"
        },
        {
          title: "《太阳照常升起》",
          meta: "欧内斯特·海明威 · 1926 · 长篇小说",
          note: "迷惘一代的巴黎与西班牙，读完会想去塞纳河边走。"
        },
        {
          title: "《了不起的盖茨比》",
          meta: "F.S. 菲茨杰拉德 · 1925 · 长篇小说",
          note: "左岸的另一位邻居，爵士时代的幻灭。"
        }
      ],
      place: {
        name: "莎士比亚书店",
        address: "37 Rue de la Bûcherie, 75005 Paris",
        note: "现址在圣母院对岸；老店原在 12 Rue de l'Odéon。二楼有阅读角，买书可盖章。"
      },
      route: {
        title: "拉丁区—圣日耳曼 · 半日",
        duration: "约 4 小时 · 4 km",
        stops: [
          { time: "10:00", name: "莎士比亚书店", note: "先逛书店，再沿塞纳河走。" },
          { time: "11:00", name: "圣母院 & 塞纳河旧书摊", note: "bouquinistes 的绿箱子，是左岸的旧书记忆。" },
          { time: "12:30", name: "拉丁区小巷", note: "找一家学生餐馆吃午饭。" },
          { time: "14:00", name: "花神咖啡馆 / 双叟咖啡馆", note: "点一杯咖啡，坐室外看人。" },
          { time: "15:30", name: "卢森堡公园", note: "海明威常去散步的地方，收尾。" }
        ],
        note: "花神与双叟价格偏高、室外座位更贵；预算有限就换街角普通咖啡馆。"
      }
    }
  },
  D: {
    name: "中国西北 · 平凡的土地",
    short: "中国西北",
    tag: "务实、苦难、真实的人间",
    coords: "36.5853° N · 109.4900° E",
    accent: "#d99a5b",
    rgb: "217, 154, 91",
    deep: "#7d5228",
    photo: {
      src: "assets/photos/xian-1600.webp",
      srcset: "assets/photos/xian-800.webp 800w, assets/photos/xian-1200.webp 1200w, assets/photos/xian-1600.webp 1600w",
      width: 1600,
      height: 1200,
      alt: "延安宝塔山",
      credit: {
        author: "H2v5o68z",
        license: "CC0",
        licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
        page: "https://commons.wikimedia.org/wiki/File:Baota_Mountain_4.jpg"
      }
    },
    paragraphs: [
      "你不爱煽情，你只认真实。你的朝圣是脚踩在土上、看见那些被时代碾过却还在走的人。",
      "去西北吧，走一走路遥写过的那些路，你会明白：最深的文学不在书里，在人间。"
    ],
    guide: {
      books: [
        {
          title: "《平凡的世界》",
          meta: "路遥 · 1986 · 长篇小说",
          note: "孙少安、孙少平兄弟，在黄土高原上挣生活。"
        },
        {
          title: "《人生》",
          meta: "路遥 · 1982 · 中篇小说",
          note: "高加林的选择，比《平凡的世界》更短、更狠。"
        },
        {
          title: "《早晨从中午开始》",
          meta: "路遥 · 1992 · 创作随笔",
          note: "看他怎么把《平凡的世界》写进自己的命里。"
        }
      ],
      place: {
        name: "延安大学路遥文学馆",
        address: "延安市宝塔区 · 延安大学",
        note: "馆内有手稿、书信与各版本作品；文汇山上有路遥墓，校园后山很安静。"
      },
      route: {
        title: "延安城内 · 半日",
        duration: "约 4 小时 · 步行 + 短途车",
        stops: [
          { time: "09:00", name: "延安大学路遥文学馆", note: "先看手稿与创作年表。" },
          { time: "10:30", name: "文汇山路遥墓", note: "带一束花，安静待一会儿。" },
          { time: "12:00", name: "延河边走走", note: "《平凡的世界》里的城市与河，今天仍在。" },
          { time: "13:30", name: "老城吃一碗羊肉面", note: "陕北的日常，比景点更接近路遥。" }
        ],
        note: "若多留一天，去延川县郭家沟村和清涧县王家堡村路遥故居；车程较远，建议包车。"
      }
    }
  },
  E: {
    name: "牛津 · 中土起点",
    short: "牛津",
    tag: "想象、造世、雾中森林",
    coords: "51.7520° N · 1.2577° W",
    accent: "#a9a0e6",
    rgb: "169, 160, 230",
    deep: "#5f5896",
    photo: {
      src: "assets/photos/oxford-1600.webp",
      srcset: "assets/photos/oxford-800.webp 800w, assets/photos/oxford-1200.webp 1200w, assets/photos/oxford-1600.webp 1600w",
      width: 1600,
      height: 1177,
      alt: "牛津大学博德利图书馆",
      credit: {
        author: "Honcques Laus",
        license: "CC0",
        licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
        page: "https://commons.wikimedia.org/wiki/File:Bibliotheca_Bodleiana.jpg"
      }
    },
    paragraphs: [
      "你脑子里住着一整个宇宙。你的朝圣地点“不存在”——但你知道它应该在哪里。",
      "去牛津吧，托尔金在那里造出了中土。你会站在某条街上突然觉得：雾后面有东西。"
    ],
    guide: {
      books: [
        {
          title: "《霍比特人》",
          meta: "J.R.R. 托尔金 · 1937 · 长篇小说",
          note: "中土的入口，从比尔博的冒险开始。"
        },
        {
          title: "《魔戒》",
          meta: "J.R.R. 托尔金 · 1954–55 · 三部曲",
          note: "读不完就先看第一部《护戒使者》。"
        },
        {
          title: "《精灵宝钻》",
          meta: "J.R.R. 托尔金 · 1977 · 神话集",
          note: "中土的神话底层，像牛津的雾一样厚。"
        }
      ],
      place: {
        name: "博德利图书馆",
        address: "Broad St, Oxford OX1 3BG",
        note: "托尔金在牛津任教时常来这里；Divinity School 的拱顶值得进去看，导览需提前预约。"
      },
      route: {
        title: "牛津大学 · 半日步行",
        duration: "约 4 小时 · 4 km",
        stops: [
          { time: "10:00", name: "博德利图书馆 & Divinity School", note: "提前预约导览，看汉弗莱公爵图书馆。" },
          { time: "11:30", name: "默顿学院", note: "托尔金在此任教；庭院安静，先查开放时间。" },
          { time: "12:30", name: "埃克塞特学院", note: "托尔金读本科的学院，门口看一眼也好。" },
          { time: "14:00", name: "基督堂草地 / 莫德林塔", note: "沿河散步，感受《魔戒》里的绿意。" },
          { time: "15:30", name: "伍尔弗科特墓园", note: "托尔金与妻子 Edith 的墓，墓碑上写着 Beren 与 Lúthien。" }
        ],
        note: "学院常因考试或活动关闭，出发前查官网；墓园在城北，步行约 25 分钟。"
      }
    }
  }
};

const DEFAULT_ACCENT = { accent: "#e2a45c", rgb: "226, 164, 92", deep: "#8a5a2a" };

const screens = {
  intro: document.getElementById("screen-intro"),
  quiz: document.getElementById("screen-quiz"),
  result: document.getElementById("screen-result")
};

const els = {
  start: document.getElementById("start"),
  resume: document.getElementById("resume"),
  back: document.getElementById("back"),
  restart: document.getElementById("restart"),
  share: document.getElementById("share"),
  qIndex: document.getElementById("qIndex"),
  qKicker: document.getElementById("qKicker"),
  ghostNum: document.getElementById("ghostNum"),
  qText: document.getElementById("qText"),
  options: document.getElementById("options"),
  progress: document.getElementById("progress"),
  resultPhoto: document.getElementById("resultPhoto"),
  resultCredit: document.getElementById("resultCredit"),
  resultLetter: document.getElementById("resultLetter"),
  resultName: document.getElementById("resultName"),
  resultTag: document.getElementById("resultTag"),
  resultCoords: document.getElementById("resultCoords"),
  resultCopy: document.getElementById("resultCopy"),
  breakdown: document.getElementById("breakdown"),
  guide: document.getElementById("guide"),
  tieNote: document.getElementById("tieNote"),
  collectionCount: document.getElementById("collectionCount"),
  collectionStamps: document.getElementById("collectionStamps"),
  collectionNote: document.getElementById("collectionNote"),
  openAtlasResult: document.getElementById("openAtlasResult"),
  atlasTrigger: document.getElementById("atlasTrigger"),
  atlasCount: document.getElementById("atlasCount"),
  atlasModal: document.getElementById("atlasModal"),
  atlasBackdrop: document.getElementById("atlasBackdrop"),
  atlasDialog: document.querySelector(".atlas-dialog"),
  atlasClose: document.getElementById("atlasClose"),
  atlasUnlocked: document.getElementById("atlasUnlocked"),
  atlasHint: document.getElementById("atlasHint"),
  atlasBar: document.getElementById("atlasBar"),
  pinsEurope: document.getElementById("pinsEurope"),
  pinsChina: document.getElementById("pinsChina"),
  atlasTimeline: document.getElementById("atlasTimeline"),
  atlasRestart: document.getElementById("atlasRestart"),
  atlasDone: document.getElementById("atlasDone"),
  poster: document.getElementById("poster"),
  posterModal: document.getElementById("posterModal"),
  posterBackdrop: document.getElementById("posterBackdrop"),
  posterDialog: document.querySelector(".poster-dialog"),
  posterImage: document.getElementById("posterImage"),
  posterDownload: document.getElementById("posterDownload"),
  posterClose: document.getElementById("posterClose"),
  posterCancel: document.getElementById("posterCancel"),
  toast: document.getElementById("toast")
};

const CHECK_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7"/></svg>';

const SITE_URL = "https://tapio-zs.github.io/Literary-Holy-Land-Test/";
const STORAGE_KEY = "lhl-progress-v1";
const COLLECTION_KEY = "lhl-collection-v1";

const MAP_PINS = {
  A: { panel: "europe", x: 37.3, y: 33.5 },
  E: { panel: "europe", x: 46.3, y: 36.4 },
  C: { panel: "europe", x: 50.0, y: 48.9 },
  B: { panel: "europe", x: 76.0, y: 44.9 },
  D: { panel: "china", x: 56.2, y: 48.4 }
};

let index = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let locked = false;
let advanceTimer = null;
let toastTimer = null;
let lastLetter = "A";
let resumeState = null;
let lastFocused = null;
let lastAtlasFocus = null;

function setAccent(theme) {
  const root = document.documentElement.style;
  root.setProperty("--accent", theme.accent);
  root.setProperty("--accent-rgb", theme.rgb);
  root.setProperty("--accent-deep", theme.deep);
}

function resetAccent() {
  setAccent(DEFAULT_ACCENT);
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle("is-active", key === name);
  });
  window.scrollTo(0, 0);
}

function renderQuestion() {
  const question = QUESTIONS[index];
  const label = String(index + 1).padStart(2, "0");

  els.qIndex.textContent = label;
  els.ghostNum.textContent = label;
  els.qKicker.textContent = `Question ${label}`;
  els.qText.textContent = question.question;

  els.options.innerHTML = "";
  question.options.forEach((option, i) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.dataset.letter = option.letter;
    button.style.setProperty("--i", String(i));

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.textContent = option.letter;

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = option.text;

    const check = document.createElement("span");
    check.className = "check";
    check.innerHTML = CHECK_ICON;

    button.append(letter, text, check);

    if (answers[index] === option.letter) {
      button.classList.add("is-selected");
    }

    button.addEventListener("click", () => choose(option.letter));
    els.options.appendChild(button);
  });

  const total = QUESTIONS.length;
  Array.from(els.progress.children).forEach((segment, i) => {
    segment.classList.toggle("is-done", i <= index);
  });
  els.progress.setAttribute("aria-valuenow", String(index + 1));
  els.progress.setAttribute("aria-valuemax", String(total));
  els.back.disabled = index === 0;

  saveProgress();
  focusHeading(els.qText);
}

function focusHeading(element) {
  try {
    element.focus({ preventScroll: true });
  } catch (error) {
    element.focus();
  }
}

function choose(letter) {
  if (locked) return;
  locked = true;

  answers[index] = letter;
  els.options.querySelectorAll(".option").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.letter === letter);
  });

  saveProgress();

  window.clearTimeout(advanceTimer);
  advanceTimer = window.setTimeout(() => {
    locked = false;
    if (index === QUESTIONS.length - 1) {
      showResult();
    } else {
      index += 1;
      renderQuestion();
    }
  }, 300);
}

function goBack() {
  if (index === 0) return;
  window.clearTimeout(advanceTimer);
  locked = false;
  index -= 1;
  renderQuestion();
}

function computeCounts() {
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  answers.forEach((letter) => {
    if (letter && Object.prototype.hasOwnProperty.call(counts, letter)) {
      counts[letter] += 1;
    }
  });
  return counts;
}

function computeResult() {
  const counts = computeCounts();
  const max = Math.max(...Object.values(counts));
  const tied = Object.keys(counts).filter((letter) => counts[letter] === max);
  const lastAnswer = answers[QUESTIONS.length - 1];

  if (tied.length > 1) {
    const letter = tied.includes(lastAnswer) ? lastAnswer : tied[0];
    return { letter, tie: true, counts };
  }

  return { letter: tied[0], tie: false, counts };
}

function renderBreakdown(counts, letter) {
  const total = QUESTIONS.length;
  const rows = [];

  els.breakdown.innerHTML = "";

  const head = document.createElement("div");
  head.className = "breakdown-head";
  const headLeft = document.createElement("span");
  headLeft.textContent = "坐标分布";
  const headRight = document.createElement("span");
  headRight.textContent = "How you scored";
  head.append(headLeft, headRight);
  els.breakdown.appendChild(head);

  ["A", "B", "C", "D", "E"].forEach((key) => {
    const count = counts[key] || 0;
    const row = document.createElement("div");
    row.className = "bd-row" + (key === letter ? " is-mine" : "");

    const letterEl = document.createElement("span");
    letterEl.className = "bd-letter";
    letterEl.textContent = key;

    const nameEl = document.createElement("span");
    nameEl.className = "bd-name";
    nameEl.textContent = RESULTS[key].short;

    const track = document.createElement("span");
    track.className = "bd-track";
    const bar = document.createElement("i");
    track.appendChild(bar);

    const countEl = document.createElement("span");
    countEl.className = "bd-count";
    countEl.textContent = String(count);

    row.append(letterEl, nameEl, track, countEl);
    els.breakdown.appendChild(row);
    rows.push({ bar, percent: (count / total) * 100 });
  });

  window.requestAnimationFrame(() => {
    rows.forEach(({ bar, percent }) => {
      bar.style.width = `${percent}%`;
    });
  });
}

const PIN_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>';

function renderGuide(guide) {
  els.guide.innerHTML = "";
  if (!guide) return;

  const head = document.createElement("header");
  head.className = "guide-head";
  const headText = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "guide-kicker";
  kicker.textContent = "Field Notes";
  const title = document.createElement("h3");
  title.className = "guide-title";
  title.textContent = "朝圣手册";
  headText.append(kicker, title);
  const meta = document.createElement("span");
  meta.className = "guide-meta";
  meta.textContent = "3 本书 · 1 个地点 · 半日路线";
  head.append(headText, meta);
  els.guide.appendChild(head);

  const books = document.createElement("div");
  books.className = "books";
  guide.books.forEach((book, i) => {
    const article = document.createElement("article");
    article.className = "book";

    const index = document.createElement("span");
    index.className = "book-index";
    index.textContent = String(i + 1).padStart(2, "0");

    const bookTitle = document.createElement("h4");
    bookTitle.className = "book-title";
    bookTitle.textContent = book.title;

    const bookMeta = document.createElement("p");
    bookMeta.className = "book-meta";
    bookMeta.textContent = book.meta;

    const bookNote = document.createElement("p");
    bookNote.className = "book-note";
    bookNote.textContent = book.note;

    article.append(index, bookTitle, bookMeta, bookNote);
    books.appendChild(article);
  });
  els.guide.appendChild(books);

  const spot = document.createElement("div");
  spot.className = "spot";
  const pin = document.createElement("span");
  pin.className = "spot-pin";
  pin.innerHTML = PIN_ICON;
  const spotBody = document.createElement("div");
  spotBody.className = "spot-body";

  const spotLabel = document.createElement("p");
  spotLabel.className = "spot-label";
  spotLabel.textContent = "具体地点";
  const spotName = document.createElement("h4");
  spotName.className = "spot-name";
  spotName.textContent = guide.place.name;
  const spotAddress = document.createElement("p");
  spotAddress.className = "spot-address";
  spotAddress.textContent = guide.place.address;
  const spotNote = document.createElement("p");
  spotNote.className = "spot-note";
  spotNote.textContent = guide.place.note;

  spotBody.append(spotLabel, spotName, spotAddress, spotNote);
  spot.append(pin, spotBody);
  els.guide.appendChild(spot);

  const route = document.createElement("div");
  route.className = "route";

  const routeHead = document.createElement("div");
  routeHead.className = "route-head";
  const routeHeadText = document.createElement("div");
  const routeKicker = document.createElement("p");
  routeKicker.className = "route-kicker";
  routeKicker.textContent = "Half-day Route";
  const routeTitle = document.createElement("h4");
  routeTitle.className = "route-title";
  routeTitle.textContent = guide.route.title;
  routeHeadText.append(routeKicker, routeTitle);

  const routeDuration = document.createElement("span");
  routeDuration.className = "route-duration";
  routeDuration.textContent = guide.route.duration;
  routeHead.append(routeHeadText, routeDuration);
  route.appendChild(routeHead);

  const stops = document.createElement("ol");
  stops.className = "stops";
  guide.route.stops.forEach((stop) => {
    const item = document.createElement("li");
    item.className = "stop";

    const dot = document.createElement("span");
    dot.className = "stop-dot";
    dot.setAttribute("aria-hidden", "true");

    const time = document.createElement("span");
    time.className = "stop-time";
    time.textContent = stop.time;

    const body = document.createElement("div");
    body.className = "stop-body";
    const stopName = document.createElement("strong");
    stopName.textContent = stop.name;
    const stopNote = document.createElement("p");
    stopNote.textContent = stop.note;
    body.append(stopName, stopNote);

    item.append(dot, time, body);
    stops.appendChild(item);
  });
  route.appendChild(stops);

  const routeNote = document.createElement("p");
  routeNote.className = "route-note";
  routeNote.textContent = guide.route.note;
  route.appendChild(routeNote);

  els.guide.appendChild(route);
}

function formatDate(timestamp) {
  if (!timestamp) return "—";
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "—";
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
    date.getDate()
  ).padStart(2, "0")}`;
}

function readCollection() {
  try {
    const raw = window.localStorage.getItem(COLLECTION_KEY);
    const data = raw ? JSON.parse(raw) : null;
    if (data && data.unlocked && typeof data.unlocked === "object") {
      return data;
    }
  } catch (error) {
    /* ignore */
  }
  return { unlocked: {} };
}

function countCollection(data) {
  return Object.keys(RESULTS).filter((key) => data.unlocked && data.unlocked[key]).length;
}

function recordUnlock(letter) {
  const data = readCollection();
  const isNew = !data.unlocked[letter];

  if (isNew) {
    data.unlocked[letter] = { firstAt: Date.now(), count: 1 };
  } else {
    data.unlocked[letter].count = (data.unlocked[letter].count || 1) + 1;
  }

  try {
    window.localStorage.setItem(COLLECTION_KEY, JSON.stringify(data));
  } catch (error) {
    /* ignore */
  }

  return { isNew, count: countCollection(data), data };
}

function updateAtlasTriggers(count) {
  const total = Object.keys(RESULTS).length;
  const unlocked = typeof count === "number" ? count : countCollection(readCollection());
  els.atlasCount.textContent = `${unlocked}/${total}`;
  els.atlasTrigger.setAttribute("aria-label", `打开朝圣地图，已解锁 ${unlocked} / ${total}`);
}

function renderCollection(info) {
  const total = Object.keys(RESULTS).length;
  const { count, data, isNew } = info;

  els.collectionCount.textContent = `${count}/${total}`;
  els.collectionStamps.innerHTML = "";

  Object.keys(RESULTS).forEach((key) => {
    const unlocked = Boolean(data.unlocked[key]);
    const stamp = document.createElement("button");
    stamp.type = "button";
    stamp.className = "mini-stamp" + (unlocked ? " is-unlocked" : "");
    stamp.dataset.letter = key;

    if (unlocked) {
      stamp.style.setProperty("--stamp", RESULTS[key].accent);
      stamp.textContent = key;
      stamp.setAttribute("aria-label", `${RESULTS[key].short}，已解锁，点击查看地图`);
    } else {
      stamp.textContent = "?";
      stamp.setAttribute("aria-label", `${RESULTS[key].short}，未解锁，点击查看地图`);
    }

    if (isNew && key === lastLetter) {
      stamp.classList.add("is-new");
    }

    stamp.addEventListener("click", () => openAtlas(key));
    els.collectionStamps.appendChild(stamp);
  });

  const remaining = total - count;
  if (count === total) {
    els.collectionNote.textContent = "5/5 全部解锁。你的文学宇宙已经完整，可以回去看看每一座圣地。";
  } else if (isNew) {
    els.collectionNote.textContent = `解锁新圣地「${RESULTS[lastLetter].short}」。已收集 ${count}/${total}，还差 ${remaining} 座。`;
  } else {
    els.collectionNote.textContent = `又回到了「${RESULTS[lastLetter].short}」。已收集 ${count}/${total}，还差 ${remaining} 座；换个选择，也许会被带去别处。`;
  }

  const restartLabel = els.restart.querySelector("span");
  if (restartLabel) {
    restartLabel.textContent = count === total ? "再走一遍" : "再测一次 · 解锁下一座";
  }

  updateAtlasTriggers(count);
}

function selectAtlasStop(letter, unlocked, notify = true) {
  els.atlasTimeline.querySelectorAll(".atlas-stop").forEach((stop) => {
    stop.classList.toggle("is-active", stop.dataset.letter === letter);
  });
  els.atlasModal.querySelectorAll(".atlas-pin").forEach((pin) => {
    pin.classList.toggle("is-active", pin.dataset.letter === letter);
  });

  if (unlocked) {
    const stop = els.atlasTimeline.querySelector(`.atlas-stop[data-letter="${letter}"]`);
    if (stop) {
      stop.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  } else if (notify) {
    showToast(`「${RESULTS[letter].short}」尚未解锁，再测一次试试`);
  }
}

function renderAtlas() {
  const data = readCollection();
  const total = Object.keys(RESULTS).length;
  const count = countCollection(data);

  els.atlasUnlocked.textContent = String(count);
  els.atlasHint.textContent =
    count === total ? "全部解锁 · 你的文学宇宙已完整" : `已解锁 ${count} / ${total} · 还差 ${total - count} 座`;

  els.atlasBar.style.width = "0%";
  window.requestAnimationFrame(() => {
    els.atlasBar.style.width = `${(count / total) * 100}%`;
  });

  els.pinsEurope.innerHTML = "";
  els.pinsChina.innerHTML = "";

  Object.keys(MAP_PINS).forEach((letter) => {
    const position = MAP_PINS[letter];
    const unlocked = Boolean(data.unlocked[letter]);
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "atlas-pin " + (unlocked ? "is-unlocked" : "is-locked");
    pin.dataset.letter = letter;
    pin.style.setProperty("--x", `${position.x}%`);
    pin.style.setProperty("--y", `${position.y}%`);
    pin.textContent = letter;
    pin.dataset.tip = unlocked
      ? `${RESULTS[letter].short} · ${formatDate(data.unlocked[letter].firstAt)}`
      : `${RESULTS[letter].short} · 未解锁`;
    pin.setAttribute(
      "aria-label",
      unlocked
        ? `${RESULTS[letter].short}，已解锁于 ${formatDate(data.unlocked[letter].firstAt)}`
        : `${RESULTS[letter].short}，未解锁`
    );
    pin.addEventListener("click", () => selectAtlasStop(letter, unlocked));
    (position.panel === "china" ? els.pinsChina : els.pinsEurope).appendChild(pin);
  });

  const entries = Object.keys(RESULTS).map((key) => ({
    key,
    unlocked: Boolean(data.unlocked[key]),
    at: data.unlocked[key] ? data.unlocked[key].firstAt || 0 : 0
  }));

  entries.sort((a, b) => {
    if (a.unlocked !== b.unlocked) return a.unlocked ? -1 : 1;
    if (a.unlocked && b.unlocked) return a.at - b.at;
    return a.key.localeCompare(b.key);
  });

  els.atlasTimeline.innerHTML = "";
  entries.forEach((entry) => {
    const info = RESULTS[entry.key];
    const item = document.createElement("li");
    item.className = "atlas-stop " + (entry.unlocked ? "is-unlocked" : "is-locked");
    item.dataset.letter = entry.key;
    item.style.setProperty("--stop", info.accent);

    const date = document.createElement("span");
    date.className = "stop-date";
    date.textContent = entry.unlocked ? formatDate(entry.at) : "未解锁";

    const mark = document.createElement("span");
    mark.className = "stop-mark";
    mark.textContent = entry.unlocked ? entry.key : "?";

    const body = document.createElement("div");
    body.className = "stop-info";
    const name = document.createElement("strong");
    name.textContent = info.name;
    const tag = document.createElement("p");
    tag.textContent = entry.unlocked ? info.tag : `提示：${info.tag}`;
    body.append(name, tag);

    item.append(date, mark, body);
    item.addEventListener("click", () => selectAtlasStop(entry.key, entry.unlocked));
    els.atlasTimeline.appendChild(item);
  });
}

function openAtlas(selected) {
  lastAtlasFocus = document.activeElement;
  renderAtlas();
  els.atlasModal.hidden = false;
  document.body.classList.add("atlas-open");
  els.atlasClose.focus();

  if (selected) {
    const data = readCollection();
    selectAtlasStop(selected, Boolean(data.unlocked[selected]), true);
  }
}

function closeAtlas() {
  els.atlasModal.hidden = true;
  document.body.classList.remove("atlas-open");
  if (lastAtlasFocus) {
    try {
      lastAtlasFocus.focus({ preventScroll: true });
    } catch (error) {
      lastAtlasFocus.focus();
    }
  }
}

function trapFocusWithin(dialog, event) {
  const focusable = Array.from(
    dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
  ).filter((element) => element.offsetParent !== null);
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function handleAtlasKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closeAtlas();
    return;
  }
  if (event.key === "Tab") {
    trapFocusWithin(els.atlasDialog, event);
  }
}

function renderPhoto(photo) {
  const img = els.resultPhoto;
  img.classList.remove("is-loaded");
  img.alt = photo.alt;
  img.width = photo.width;
  img.height = photo.height;
  img.sizes = "(max-width: 880px) 100vw, 1008px";
  img.srcset = photo.srcset;
  img.onload = () => img.classList.add("is-loaded");
  img.src = photo.src;

  const makeLink = (href, text) => {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = text;
    return link;
  };

  els.resultCredit.textContent = "";
  els.resultCredit.append(
    "Photo: ",
    makeLink(photo.credit.page, photo.credit.author),
    " · ",
    makeLink(photo.credit.licenseUrl, photo.credit.license),
    " · ",
    makeLink(photo.credit.page, "Wikimedia Commons"),
    " · 已压缩"
  );
}

function showResult(options = {}) {
  const { letter, tie, counts } = computeResult();
  const result = RESULTS[letter];
  lastLetter = letter;

  setAccent(result);
  renderPhoto(result.photo);
  const unlock = recordUnlock(letter);

  els.resultLetter.textContent = letter;
  els.resultName.textContent = result.name;
  els.resultTag.textContent = result.tag;
  els.resultCoords.textContent = result.coords;
  els.resultCopy.innerHTML = "";
  result.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    els.resultCopy.appendChild(p);
  });
  els.tieNote.hidden = !tie;

  renderBreakdown(counts, letter);
  renderGuide(result.guide);
  showScreen("result");

  if (!options.skipHash) updateHash();
  saveProgress(true);
  els.resume.hidden = true;
  renderCollection(unlock);
  updateAtlasTriggers(unlock.count);

  if (unlock.isNew) {
    showToast(`解锁新圣地 · ${result.short}`);
  }

  focusHeading(els.resultName);
}

function updateHash() {
  if (!answers.every(Boolean)) return;
  const code = answers.join("");
  try {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search + `#a=${code}`
    );
  } catch (error) {
    /* file:// 等环境可能禁止，忽略 */
  }
}

function clearHash() {
  try {
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
  } catch (error) {
    /* ignore */
  }
}

function saveProgress(done = false) {
  try {
    const answered = answers.filter(Boolean).length;
    if (answered === 0) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ answers, index, done })
    );
  } catch (error) {
    /* 隐私模式等场景忽略 */
  }
}

function readProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || !Array.isArray(data.answers)) return null;
    const valid =
      data.answers.length === QUESTIONS.length &&
      data.answers.every((letter) => letter === null || /^[A-E]$/.test(letter));
    if (!valid) return null;

    const answered = data.answers.filter(Boolean).length;
    if (answered === 0) return null;

    return {
      answers: data.answers,
      index: Number.isInteger(data.index) ? data.index : 0,
      done: Boolean(data.done),
      answered
    };
  } catch (error) {
    return null;
  }
}

function refreshResumeButton() {
  resumeState = readProgress();
  if (!resumeState) {
    els.resume.hidden = true;
    return;
  }
  els.resume.hidden = false;
  const label = els.resume.querySelector("span");
  label.textContent = resumeState.done
    ? "查看上次结果"
    : `继续上次（${resumeState.answered}/${QUESTIONS.length}）`;
}

function resumeTest() {
  if (!resumeState) return;

  answers = resumeState.answers.slice();

  if (resumeState.done) {
    index = QUESTIONS.length - 1;
    showResult();
    return;
  }

  const firstUnanswered = answers.findIndex((letter) => !letter);
  const target = firstUnanswered === -1 ? resumeState.index : firstUnanswered;
  index = Math.max(0, Math.min(target, QUESTIONS.length - 1));
  locked = false;
  showScreen("quiz");
  renderQuestion();
  showToast("已恢复上次进度");
}

function startTest() {
  window.clearTimeout(advanceTimer);
  index = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  locked = false;
  resumeState = null;
  els.resume.hidden = true;
  resetAccent();
  clearHash();
  saveProgress();
  showScreen("quiz");
  renderQuestion();
}

function restart() {
  window.clearTimeout(advanceTimer);
  index = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  locked = false;
  resumeState = null;
  els.resume.hidden = true;
  resetAccent();
  clearHash();
  saveProgress();
  showScreen("quiz");
  renderQuestion();
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 2200);
}

function copyText(text) {
  return navigator.clipboard.writeText(text).then(
    () => true,
    () => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    }
  );
}

async function shareResult() {
  const result = RESULTS[lastLetter];
  const text = `我的文学朝圣圣地是「${result.name}」——${result.tag}。#文学朝圣测试`;
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({ title: "文学圣地测试", text, url });
      return;
    } catch (error) {
      if (error && error.name === "AbortError") return;
    }
  }

  try {
    const ok = await copyText(`${text}\n${url}`);
    showToast(ok ? "结果已复制，去分享吧" : "复制失败，请手动选择文字");
  } catch (error) {
    showToast("复制失败，请手动选择文字");
  }
}

/* ---------- 结果海报 ---------- */

const POSTER_SERIF =
  '"Songti SC","STSong","Noto Serif SC","Source Han Serif SC","SimSun",Georgia,serif';
const POSTER_DISPLAY =
  '"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC",sans-serif';
const POSTER_SANS = POSTER_DISPLAY;

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const full =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16)
  };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";

  for (const char of text) {
    if (char === "\n") {
      lines.push(line);
      line = "";
      continue;
    }
    const candidate = line + char;
    if (line && ctx.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = char;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines;
}

function drawPosterStamp(ctx, cx, cy, radius, letter, accent) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate((-7 * Math.PI) / 180);

  ctx.strokeStyle = accent;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = 0.5;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, radius - 11, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  for (let i = 0; i < 24; i += 1) {
    const angle = (i / 24) * Math.PI * 2;
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * (radius + 9), Math.sin(angle) * (radius + 9));
    ctx.lineTo(Math.cos(angle) * (radius + 15), Math.sin(angle) * (radius + 15));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = accent;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `600 ${Math.round(radius * 1.15)}px ${POSTER_SERIF}`;
  ctx.fillText(letter, 0, -8);
  ctx.font = `600 15px ${POSTER_SANS}`;
  ctx.fillText("HOLY LAND", 0, radius * 0.62);

  ctx.restore();
  ctx.textBaseline = "alphabetic";
}

function drawPosterQr(ctx, url, x, y, size) {
  ctx.fillStyle = "#f4ecdf";
  drawRoundedRect(ctx, x, y, size, size, 14);
  ctx.fill();

  if (typeof qrcode !== "function") return;

  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();

  const count = qr.getModuleCount();
  const padding = 14;
  const cell = Math.floor((size - padding * 2) / count);
  const offset = x + padding + Math.floor((size - padding * 2 - cell * count) / 2);
  const offsetY = y + padding + Math.floor((size - padding * 2 - cell * count) / 2);

  ctx.fillStyle = "#0b0a09";
  for (let row = 0; row < count; row += 1) {
    for (let col = 0; col < count; col += 1) {
      if (qr.isDark(row, col)) {
        ctx.fillRect(offset + col * cell, offsetY + row * cell, cell, cell);
      }
    }
  }
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function drawImageCover(ctx, img, x, y, width, height) {
  const scale = Math.max(width / img.width, height / img.height);
  const drawWidth = img.width * scale;
  const drawHeight = img.height * scale;
  const offsetX = x + (width - drawWidth) / 2;
  const offsetY = y + (height - drawHeight) / 2;
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

async function buildPoster(letter) {
  const result = RESULTS[letter];
  const counts = computeCounts();
  const accent = result.accent;
  const width = 1080;
  const height = 1440;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#0b0a09";
  ctx.fillRect(0, 0, width, height);

  try {
    const hero = await loadImage(result.photo.src);
    drawImageCover(ctx, hero, 0, 0, width, height);
    ctx.fillStyle = "rgba(11, 10, 9, 0.62)";
    ctx.fillRect(0, 0, width, height);
    const shade = ctx.createLinearGradient(0, 0, 0, height);
    shade.addColorStop(0, "rgba(11, 10, 9, 0.18)");
    shade.addColorStop(0.5, "rgba(11, 10, 9, 0.42)");
    shade.addColorStop(1, "rgba(11, 10, 9, 0.86)");
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, width, height);
  } catch (error) {
    /* 照片加载失败时退回纯色背景 */
  }

  const addGlow = (x, y, radius, color) => {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  addGlow(880, 150, 640, rgba(accent, 0.34));
  addGlow(110, 1340, 660, "rgba(148, 52, 40, 0.32)");
  addGlow(520, 760, 520, rgba(accent, 0.1));

  ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
  for (let i = 0; i < 3200; i += 1) {
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }

  ctx.strokeStyle = rgba(accent, 0.32);
  ctx.lineWidth = 2;
  ctx.strokeRect(54, 54, width - 108, height - 108);

  ctx.textAlign = "left";
  ctx.fillStyle = accent;
  ctx.font = `600 24px ${POSTER_SANS}`;
  ctx.fillText("LITERARY PILGRIMAGE · VOL.08", 96, 132);

  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(244, 236, 223, 0.55)";
  ctx.font = `400 20px ${POSTER_SANS}`;
  ctx.fillText("2026", 984, 132);

  drawPosterStamp(ctx, width / 2, 332, 104, letter, accent);

  ctx.textAlign = "center";
  ctx.fillStyle = "#f4ecdf";
  ctx.font = `700 76px ${POSTER_DISPLAY}`;
  const nameLines = wrapCanvasText(ctx, result.name, 860);
  let y = 548;
  nameLines.forEach((line) => {
    ctx.fillText(line, width / 2, y);
    y += 92;
  });

  y += 4;
  ctx.fillStyle = accent;
  ctx.font = `500 26px ${POSTER_SANS}`;
  ctx.fillText(result.tag, width / 2, y);

  y += 46;
  ctx.fillStyle = "rgba(139, 129, 115, 1)";
  ctx.font = `400 20px ${POSTER_SANS}`;
  ctx.fillText(result.coords, width / 2, y);

  y += 48;
  ctx.strokeStyle = "rgba(244, 236, 223, 0.14)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(200, y);
  ctx.lineTo(880, y);
  ctx.stroke();

  y += 62;
  ctx.fillStyle = "rgba(216, 205, 189, 0.95)";
  ctx.font = `400 29px ${POSTER_SERIF}`;
  const paragraphLines = wrapCanvasText(ctx, result.paragraphs[0], 820);
  paragraphLines.forEach((line) => {
    ctx.fillText(line, width / 2, y);
    y += 50;
  });

  y += 40;
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(139, 129, 115, 1)";
  ctx.font = `500 18px ${POSTER_SANS}`;
  ctx.fillText("坐标分布 / HOW YOU SCORED", 130, y);

  y += 48;
  ["A", "B", "C", "D", "E"].forEach((key, i) => {
    const x = 130 + i * 172;
    const active = key === letter;
    ctx.fillStyle = active ? accent : "rgba(244, 236, 223, 0.4)";
    ctx.font = `700 34px ${POSTER_DISPLAY}`;
    ctx.fillText(key, x, y);
    ctx.fillStyle = active ? accent : "rgba(244, 236, 223, 0.45)";
    ctx.font = `400 18px ${POSTER_SANS}`;
    ctx.fillText(String(counts[key] || 0), x + 30, y);
    ctx.fillStyle = active ? accent : "rgba(244, 236, 223, 0.16)";
    ctx.fillRect(x, y + 14, 92, 2);
  });

  const qrUrl = answers.every(Boolean) ? `${SITE_URL}#a=${answers.join("")}` : SITE_URL;
  const qrSize = 168;
  drawPosterQr(ctx, qrUrl, 96, 1176, qrSize);

  ctx.textAlign = "left";
  ctx.fillStyle = "#f4ecdf";
  ctx.font = `600 24px ${POSTER_SANS}`;
  ctx.fillText("扫码测出你的文学圣地", 300, 1222);
  ctx.fillStyle = "rgba(139, 129, 115, 1)";
  ctx.font = `400 17px ${POSTER_SANS}`;
  ctx.fillText("tapio-zs.github.io/Literary-Holy-Land-Test", 300, 1262);
  ctx.fillStyle = "rgba(244, 236, 223, 0.55)";
  ctx.font = `400 17px ${POSTER_SANS}`;
  ctx.fillText("8 道题 · 约 2 分钟 · 凭直觉作答", 300, 1298);

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(244, 236, 223, 0.34)";
  ctx.font = `400 16px ${POSTER_SANS}`;
  ctx.fillText("LITERARY HOLY LAND TEST · TAPIO 2026", width / 2, 1352);

  ctx.fillStyle = "rgba(244, 236, 223, 0.28)";
  ctx.font = `400 12px ${POSTER_SANS}`;
  ctx.fillText(
    `Photo: ${result.photo.credit.author} · ${result.photo.credit.license} · Wikimedia Commons`,
    width / 2,
    1380
  );

  return canvas.toDataURL("image/png");
}

async function openPoster() {
  const result = RESULTS[lastLetter];
  const posterLabel = els.poster.querySelector("span");
  const originalLabel = posterLabel.textContent;

  els.poster.disabled = true;
  posterLabel.textContent = "生成中…";

  try {
    const dataUrl = await buildPoster(lastLetter);

    lastFocused = els.poster;
    els.posterImage.src = dataUrl;
    els.posterImage.alt = `${result.name}——${result.tag}`;
    els.posterDownload.href = dataUrl;
    els.posterDownload.download = `文学圣地-${result.short}.png`;
    els.posterModal.hidden = false;
    document.body.classList.add("poster-open");
    els.posterClose.focus();
  } finally {
    els.poster.disabled = false;
    posterLabel.textContent = originalLabel;
  }
}

function closePoster() {
  els.posterModal.hidden = true;
  document.body.classList.remove("poster-open");
  if (lastFocused) {
    try {
      lastFocused.focus({ preventScroll: true });
    } catch (error) {
      lastFocused.focus();
    }
  }
}

function handlePosterKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    closePoster();
    return;
  }
  if (event.key === "Tab") {
    trapFocusWithin(els.posterDialog, event);
  }
}

function readHash() {
  const match = window.location.hash.match(/a=([A-Ea-e]{8})/);
  if (!match) return null;
  return match[1].toUpperCase().split("");
}

function initFromLocation() {
  const hashAnswers = readHash();
  if (hashAnswers) {
    answers = hashAnswers;
    index = QUESTIONS.length - 1;
    showResult({ skipHash: true });
    return;
  }
  refreshResumeButton();
  updateAtlasTriggers();
}

window.addEventListener("hashchange", () => {
  const hashAnswers = readHash();
  if (!hashAnswers) return;
  answers = hashAnswers;
  index = QUESTIONS.length - 1;
  showResult({ skipHash: true });
});

const cursorGlow = document.getElementById("cursorGlow");
let pointerX = 0;
let pointerY = 0;
let glowFrame = null;

window.addEventListener(
  "pointermove",
  (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    cursorGlow.classList.add("is-on");
    if (glowFrame !== null) return;
    glowFrame = window.requestAnimationFrame(() => {
      const style = document.documentElement.style;
      style.setProperty("--mx", `${pointerX}px`);
      style.setProperty("--my", `${pointerY}px`);
      glowFrame = null;
    });
  },
  { passive: true }
);

els.start.addEventListener("click", startTest);
els.resume.addEventListener("click", resumeTest);
els.back.addEventListener("click", goBack);
els.restart.addEventListener("click", restart);
els.share.addEventListener("click", shareResult);

els.poster.addEventListener("click", async () => {
  try {
    await openPoster();
  } catch (error) {
    showToast("海报生成失败，请稍后再试");
  }
});

els.posterClose.addEventListener("click", closePoster);
els.posterCancel.addEventListener("click", closePoster);
els.posterBackdrop.addEventListener("click", closePoster);
els.posterModal.addEventListener("keydown", handlePosterKeydown);

els.openAtlasResult.addEventListener("click", () => openAtlas(lastLetter));
els.atlasTrigger.addEventListener("click", () => openAtlas());
els.atlasClose.addEventListener("click", closeAtlas);
els.atlasBackdrop.addEventListener("click", closeAtlas);
els.atlasDone.addEventListener("click", closeAtlas);
els.atlasRestart.addEventListener("click", () => {
  closeAtlas();
  restart();
});
els.atlasModal.addEventListener("keydown", handleAtlasKeydown);

document.addEventListener("keydown", (event) => {
  if (!screens.quiz.classList.contains("is-active")) return;

  const key = event.key.toUpperCase();
  if (["A", "B", "C", "D", "E"].includes(key)) {
    const exists = QUESTIONS[index].options.some((option) => option.letter === key);
    if (exists) {
      event.preventDefault();
      choose(key);
    }
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    goBack();
  }
});

initFromLocation();
