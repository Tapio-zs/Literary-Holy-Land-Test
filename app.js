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
    paragraphs: [
      "你是那种“把一句话在心里磨三天”的人。你的朝圣不是热闹的，是安静的：一间老屋、一盏台灯、一个死去的灵魂。",
      "你适合去都柏林，在乔伊斯的旧居里坐一下午，什么都不做，只是“在”。"
    ]
  },
  B: {
    name: "布拉格 · 荒诞酒馆",
    short: "布拉格",
    tag: "讽刺、幽默、看透荒诞",
    coords: "50.0755° N · 14.4378° E",
    accent: "#e0b25a",
    rgb: "224, 178, 90",
    deep: "#8a6a2a",
    paragraphs: [
      "你看得透，但你不苦大仇深。你相信笑是最好的武器。",
      "布拉格适合你——卡夫卡写荒诞，哈谢克写好兵帅克，这座城市的幽默是带刺的。你会在一家深夜酒馆里找到同类。"
    ]
  },
  C: {
    name: "巴黎 · 左岸咖啡馆",
    short: "巴黎",
    tag: "热血、幻灭、时代现场",
    coords: "48.8566° N · 2.3522° E",
    accent: "#e68a72",
    rgb: "230, 138, 114",
    deep: "#8c4436",
    paragraphs: [
      "你热血过，也失望过，但你还在较劲。你的朝圣是“现场”：一群人、一个时代、一场争论到深夜的聚会。",
      "去巴黎左岸吧，坐在那些咖啡馆里，想象一百年前也有人在这里为理想吵得面红耳赤。"
    ]
  },
  D: {
    name: "中国西北 · 平凡的土地",
    short: "中国西北",
    tag: "务实、苦难、真实的人间",
    coords: "36.5853° N · 109.4900° E",
    accent: "#d99a5b",
    rgb: "217, 154, 91",
    deep: "#7d5228",
    paragraphs: [
      "你不爱煽情，你只认真实。你的朝圣是脚踩在土上、看见那些被时代碾过却还在走的人。",
      "去西北吧，走一走路遥写过的那些路，你会明白：最深的文学不在书里，在人间。"
    ]
  },
  E: {
    name: "牛津 · 中土起点",
    short: "牛津",
    tag: "想象、造世、雾中森林",
    coords: "51.7520° N · 1.2577° W",
    accent: "#a9a0e6",
    rgb: "169, 160, 230",
    deep: "#5f5896",
    paragraphs: [
      "你脑子里住着一整个宇宙。你的朝圣地点“不存在”——但你知道它应该在哪里。",
      "去牛津吧，托尔金在那里造出了中土。你会站在某条街上突然觉得：雾后面有东西。"
    ]
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
  resultLetter: document.getElementById("resultLetter"),
  resultName: document.getElementById("resultName"),
  resultTag: document.getElementById("resultTag"),
  resultCoords: document.getElementById("resultCoords"),
  resultCopy: document.getElementById("resultCopy"),
  breakdown: document.getElementById("breakdown"),
  tieNote: document.getElementById("tieNote"),
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

let index = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let locked = false;
let advanceTimer = null;
let toastTimer = null;
let lastLetter = "A";
let resumeState = null;
let lastFocused = null;

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

function showResult(options = {}) {
  const { letter, tie, counts } = computeResult();
  const result = RESULTS[letter];
  lastLetter = letter;

  setAccent(result);

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
  showScreen("result");

  if (!options.skipHash) updateHash();
  saveProgress(true);
  els.resume.hidden = true;
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

function buildPoster(letter) {
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
  ctx.fillText("LITERARY HOLY LAND TEST · TAPIO 2026", width / 2, 1370);

  return canvas.toDataURL("image/png");
}

function openPoster() {
  const result = RESULTS[lastLetter];
  const dataUrl = buildPoster(lastLetter);

  lastFocused = document.activeElement;
  els.posterImage.src = dataUrl;
  els.posterImage.alt = `${result.name}——${result.tag}`;
  els.posterDownload.href = dataUrl;
  els.posterDownload.download = `文学圣地-${result.short}.png`;
  els.posterModal.hidden = false;
  document.body.classList.add("poster-open");
  els.posterClose.focus();
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
  if (event.key !== "Tab") return;

  const focusable = Array.from(
    els.posterDialog.querySelectorAll('a[href], button:not([disabled])')
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
}

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

els.poster.addEventListener("click", () => {
  try {
    openPoster();
  } catch (error) {
    showToast("海报生成失败，请稍后再试");
  }
});

els.posterClose.addEventListener("click", closePoster);
els.posterCancel.addEventListener("click", closePoster);
els.posterBackdrop.addEventListener("click", closePoster);
els.posterModal.addEventListener("keydown", handlePosterKeydown);

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
