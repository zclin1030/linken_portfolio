"use strict";

/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
});

/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 80 ? "add" : "remove"]("active");
});

/**
 * Element tilt effect
 */

const tiltElements = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {
  /** get tilt element center position */
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${
    tiltPosY - tiltPosY * 2
  }deg)`;
};

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

/**
 * Custom cursor
 */

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [
  ...document.querySelectorAll("button"),
  ...document.querySelectorAll("a"),
  ...document.querySelectorAll("h1"),
  ...document.querySelectorAll("img"),
  ...document.querySelectorAll(".skill-wrapper"),
];

window.addEventListener("mousemove", function (event) {
  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);
});

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});


const LANG_DATA = {
  en: {
    fontFamily: "'Inter', sans-serif",
    nav: ["Home", "Works", "About"],
    hero: {
      hi: "Hi there, this is Ken",
      he: "He",
      typing: [
        "is a designer &#x1F3A8;",
        "is a code newbie &#x1F4BB;",
        "is a team player &#x1F3C8;",
        "is a gamer &#x1F3AE;",
        "has a cat &#128572;"
      ],
      intro: "Over 10 years as a UX designer, Ken has crafted user-centered digital experiences for SaaS, retail, and gaming products, driving user's experience strategy by translating design vision into actionable alignment across teams. He currently works for Ubisoft."
    },
    resume: "My Resume",
    linkedin: "Linkedin",
    instagram: "Instagram",
    email: "Email",
    skills: [
      "UX/UI Design", "Human-Centered Design", "Design Sprint", "Design System", "User Research", "Usability Testing",
      "Prototyping", "Web Accessibility", "Information Architecture", "Figma", "Adobe Photoshop", "Adobe Illustrator",
      "HTML/CSS", "JavaScript", "Matomo", "Stable Diffusion"
    ],
    projects: {
      title: "SELECTED WORKS",
      viewMore: "View More",
      details:"Project Details",
      0: { title: "Wave: Load Testing", subtitle: "Ubisoft Internal Tool" },
      1: { title: "Wave: Dynamic CCU", subtitle: "Ubisoft Internal Tool" },
      2: { title: "Wave: Design System", subtitle: "Design Systems in Ubisoft" },
      3: { title: "Hua Cai Ren Sheng: Design System", subtitle: "Stock Trading & Investing App" },
      4: { title: "Hua Cai Ren Sheng Lite", subtitle: "股票交易理财投资 App"}
    },
    about: {
      title: "ABOUT ME",
      hello: "Hello again! 👋",
      p0: "I truly believe teamwork is critical to success. Working alongside talented people to tackle challenges? It's really rewarding. I love sharing my design ideas and past experiences – chatting with colleagues from different functions always helps me learn new things. In my view, just being busywork all day doesn't equal efficiency. That's why working smarter beats working harder.",
      p1: "Outside of work, I've got tons of hobbies. Ever since my older cousins took me to arcade when I was 3, I've been a gamer. I'm into all forms of pop culture — movies, TV series, music, books, and anime! I never knew I was a cat person until one day, a little kitten showed up at my doorstep. (cat distribution system works!) And I love traveling, with the goal to explore more cities and countries.",
      p2: "Are you looking for a designer who works smart but stays humble, and has a curious soul? If so, please get in touch!"
    },
    footer: {
      copyright: "© 2025 Lin Ken. All rights reserved.",
      backTop: "Back To Top"
    },
    links: {
      resume: "#",
      linkedin: "#",
      instagram: "#",
      email: "#",
      wlt: "https://zclin.notion.site/Wave-Load-Test-2269d1bd9f0a8150a351d8a3e426751a",
      wdc: "https://zclin.notion.site/Wave-Dynamic-CCU-2399d1bd9f0a809b9729c00e2e33ec32",
      wds: "https://zclin.notion.site/Wave-Design-System-2379d1bd9f0a80198494f80d89e58c79",
      hds: "https://zclin.notion.site/Hua-Cai-Ren-Sheng-Design-System-2359d1bd9f0a806ab525ca20166d85cc",
      hl: "https://zclin.notion.site/Hua-Cai-Ren-Sheng-Lite-2359d1bd9f0a80a3a310e708e827bb91"

    }
  },
  zh: {
    fontFamily: "'Noto Sans SC', 'Microsoft YaHei', sans-serif",
    nav: ["首页", "作品", "关于"],
    hero: {
      hi: "你好，这是 Ken",
      he: "他",
      typing: [
        "是一名设计师 &#x1F3A8;",
        "是代码新手 &#x1F4BB;",
        "是团队协作者 &#x1F3C8;",
        "是一个游戏玩家 &#x1F3AE;",
        "有一只猫 &#128572;"
      ],
      intro: "作为一名用户体验设计师的十年来，Ken 为 SaaS、零售和游戏产品打造了以用户为中心的设计体验，促成跨团队设计共识，驱动用户体验策略有效执行。目前就职于育碧。"
    },
    resume: "我的简历",
    linkedin: "领英",
    instagram: "Instagram",
    email: "邮箱",
    skills: [
      "界面与用户体验设计", "以人为中心设计", "设计冲刺", "设计系统", "用户研究", "可用性测试",
      "原型设计", "网页无障碍设计", "信息架构", "Figma", "Adobe Photoshop", "Adobe Illustrator",
      "HTML/CSS", "JavaScript", "Matomo", "Stable Diffusion"
    ],
    projects: {
      title: "作品",
      viewMore: "查看更多",
      details:"项目详情",
      0: { title: "Wave：负载测试", subtitle: "育碧内部工具" },
      1: { title: "Wave：动态 CCU", subtitle: "育碧内部工具" },
      2: { title: "Wave：设计系统", subtitle: "育碧设计系统" },
      3: { title: "华彩人生：设计系统 ", subtitle: "股票交易理财投资 App" },
      4: { title: "华彩人生 Lite", subtitle: "股票交易理财投资 App"}
    },
    about: {
      title: "关于我",
      hello: "你好！👋",
      p0: "我始终坚信团队合作是成功的关键。与优秀的人并肩作战、共同解决难题？这真的特别有成就感。我热衷于分享设计想法和过往经验——与跨职能同事交流总能让我学到新知识。在我看来，整日埋头苦干并不等于高效，因此高效工作比机械忙碌更重要。",
      p1: "工作之外，我有很多兴趣爱好。自从三岁被表哥们带去游戏厅，我就成了游戏玩家。我喜欢各种形式的流行文化作品——电影、电视剧、音乐、书籍，还有二次元！我一直不知道自己是个猫奴，直到有一天一只小猫出现在我家门口。我也喜欢旅行，目标是探索更多城市和国家。",
      p2: "您是否正在寻找这样一位设计师：工作高效却保持谦逊，并永远充满好奇？若是如此，请随时联系我！"
    },
    footer: {
      // copyright: "© 2025 林恳。保留所有权利。",
      backTop: "返回顶部"
    },
    links: {
      resume: " ",
      linkedin: " ",
      instagram: " ",
      email: " ",
      wlt: "https://zclin.notion.site/Wave-2329d1bd9f0a807f87eddaae0335cec1",
      wdc: "https://zclin.notion.site/Wave-CCU-2389d1bd9f0a80a7983dc9b4697e300b",
      wds: "https://zclin.notion.site/Wave-2379d1bd9f0a80b9b9f1e96f9ffe621d?pvs=25",
      hds: "https://zclin.notion.site/2359d1bd9f0a80cfb70bc82122dcc88a",
      hl: "https://zclin.notion.site/Lite-9eb383d6ce2c408ba2fef4beb42f5fe2?pvs=25"
      
    }
  }
};

let currentLang = 'en';
let typedInstance = null;

function switchLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  document.documentElement.setAttribute('data-lang', currentLang); 

  const lang = LANG_DATA[currentLang];

  // 字体
  document.body.style.fontFamily = lang.fontFamily;

  // 通用文本
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // 支持多级key（如 about.p0）
    const value = key.split('.').reduce((o, k) => o && o[k], lang);
    if (value) el.innerHTML = value;
  });

  // 技能
  lang.skills.forEach((txt, i) => {
    const el = document.querySelector(`[data-i18n="skills.${i}"]`);
    if (el) el.textContent = txt;
  });

  // 项目
  for (let i = 0; i < 4; i++) {
    const titleEl = document.querySelector(`[data-i18n="projects.${i}.title"]`);
    const subEl = document.querySelector(`[data-i18n="projects.${i}.subtitle"]`);
    if (titleEl) titleEl.textContent = lang.projects[i].title;
    if (subEl) subEl.textContent = lang.projects[i].subtitle;
  }

  // 链接
  document.querySelectorAll('[data-i18n-link]').forEach(el => {
    const key = el.getAttribute('data-i18n-link');
    if (lang.links[key]) el.setAttribute('href', lang.links[key]);
  });

  // Typed.js
  if (typedInstance) typedInstance.destroy();
  typedInstance = new Typed("[data-typing]", {
    strings: lang.hero.typing,
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500
  });
}

document.querySelector('.nav-language-btn').addEventListener('click', switchLang);

window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-lang', currentLang);
  typedInstance = new Typed("[data-typing]", {
    strings: LANG_DATA[currentLang].hero.typing,
    loop: true,
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500
  });
});

/** Typed.js */
// const typingText = new Typed("[data-typing]", {
//   strings: ["is a designer &#x1F3A8;", "is a code newbie &#x1F4BB;", "is a team player &#x1F3C8;","is a gamer &#x1F3AE;", "has a cat &#128572;"],
//   loop: true,
//   typeSpeed: 80,
//   backSpeed: 40,
//   backDelay: 1500
  
// });
