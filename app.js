/* ============================================
   Sean's STORE — Frontend Logic
   i18n · CMS Data · Article Modal · Cookie
   ============================================ */

// ============ Default CMS Data ============
const DEFAULT_DATA = {
  articles: [
    {
      id: 1,
      title: { en: "The Art of Timeless Elegance", zh: "永恒优雅的艺术" },
      excerpt: {
        en: "Exploring how minimalist design and quality craftsmanship define modern luxury.",
        zh: "探索极简设计与精湛工艺如何定义现代奢华。"
      },
      content: {
        en: "<p>In a world driven by fast fashion and fleeting trends, the concept of timeless elegance stands as a beacon of intentional living. True luxury is not about logos or seasonal hype — it is about pieces that transcend time, crafted with materials that age gracefully and designs that remain relevant decade after decade.</p><p>The modern connoisseur understands that quality is an investment. Each garment tells a story of its maker, of the hands that shaped it, of the traditions passed down through generations. This is the philosophy that guides every curation decision at Sean's STORE.</p><p>We believe in fewer, better things. In a wardrobe built on foundations rather than fads. In the quiet confidence that comes from wearing something truly exceptional. This is sustainable fashion in its purest form — pieces designed to be loved, repaired, and passed on.</p>",
        zh: "<p>在一个被快时尚和短暂趋势驱动的世界里，永恒优雅的概念是一种有意图生活的灯塔。真正的奢华不在于标志或季节性炒作，而在于那些超越时间的作品，用优雅老化的材料和数十年后仍然相关的设计精心制作。</p><p>现代鉴赏家明白，品质是一种投资。每一件服装都讲述着它的制造者、塑造它的双手、代代相传的传统的故事。这就是指导Sean's STORE每一次策展决策的理念。</p><p>我们相信少而精的东西。相信建立在基础而非时尚之上的衣橱。相信穿着真正卓越的东西所带来的安静自信。这是最纯粹形式的可持续时尚——设计为被爱、被修复、被传承的作品。</p>"
      },
      category: "editorial",
      size: "large",
      date: "2026-08-15",
      cover: ""
    },
    {
      id: 2,
      title: { en: "Korean Minimalism Meets Western Tailoring", zh: "韩式极简与西方剪裁的相遇" },
      excerpt: {
        en: "A cross-cultural dialogue in contemporary fashion design.",
        zh: "当代时尚设计中的跨文化对话。"
      },
      content: {
        en: "<p>The fusion of Korean minimalist aesthetics with Western tailoring traditions has produced some of the most exciting silhouettes in contemporary fashion. Korean design brings a reverence for negative space, a mastery of subtle proportion, and an almost architectural approach to garment construction.</p><p>Western tailoring contributes its centuries-old knowledge of structure, drape, and the human form. When these two traditions meet, the result is clothing that feels both effortlessly relaxed and precisely considered — relaxed yet refined, casual yet couture.</p><p>This dialogue is at the heart of modern sustainable fashion. By focusing on silhouette and material rather than decoration, designers create pieces that are inherently timeless, inherently versatile, and inherently worthy of a place in a considered wardrobe.</p>",
        zh: "<p>韩式极简美学与西方剪裁传统的融合，产生了当代时尚中一些最令人兴奋的轮廓。韩国设计带来了对负空间的崇敬、对微妙比例的掌握，以及几乎建筑式的服装构造方法。</p><p>西方剪裁贡献了其数百年的结构、垂坠和人体形态知识。当这两种传统相遇时，结果是既轻松放松又精确考量的服装——放松却精致，休闲却高级。</p><p>这种对话是现代可持续时尚的核心。通过专注于轮廓和材料而非装饰，设计师创造出本质上永恒、本质上多功能、本质上值得在深思熟虑的衣橱中占有一席之地的作品。</p>"
      },
      category: "style",
      size: "medium",
      date: "2026-08-10",
      cover: ""
    },
    {
      id: 3,
      title: { en: "Sustainable Fabrics: The New Luxury", zh: "可持续面料：新奢华" },
      excerpt: {
        en: "Organic cotton, recycled cashmere, and the future of ethical textiles.",
        zh: "有机棉、再生羊绒以及道德纺织品的未来。"
      },
      content: {
        en: "<p>The textile industry is undergoing a quiet revolution. What was once a niche concern for eco-conscious consumers has become the defining conversation of luxury fashion. Sustainable fabrics are no longer a compromise — they are the new standard of excellence.</p><p>Organic cotton, grown without synthetic pesticides and fertilizers, produces a fiber that is softer, more durable, and far gentler on the ecosystems that nurture it. Recycled cashmere, spun from pre-consumer waste and vintage garments, offers the same unparalleled warmth with a fraction of the environmental cost.</p><p>Innovative materials like mushroom leather, pineapple fiber, and lab-grown silk are pushing the boundaries of what is possible. At Sean's STORE, we celebrate these innovations not as alternatives, but as the future of luxury itself.</p>",
        zh: "<p>纺织业正在经历一场悄然的革命。曾经只是环保意识消费者小众关注的问题，已成为奢侈品时尚的决定性对话。可持续面料不再是一种妥协——它们是卓越的新标准。</p><p>有机棉在没有合成农药和化肥的情况下种植，生产出更柔软、更耐用、对培育它的生态系统更温和的纤维。再生羊绒由消费前废料和复古服装纺成，提供同样无与伦比的温暖，而环境成本只是一小部分。</p><p>蘑菇皮革、菠萝纤维和实验室培育丝绸等创新材料正在推动可能性的边界。在Sean's STORE，我们庆祝这些创新，不是作为替代品，而是作为奢侈品本身的未来。</p>"
      },
      category: "sustainability",
      size: "small",
      date: "2026-08-05",
      cover: ""
    },
    {
      id: 4,
      title: { en: "The Curated Wardrobe: Less is More", zh: "精选衣橱：少即是多" },
      excerpt: {
        en: "Building a capsule collection that works for every occasion.",
        zh: "打造适用于任何场合的胶囊系列。"
      },
      content: {
        en: "<p>The concept of the curated wardrobe has never been more relevant. In an age of overwhelming choice, the intentional act of editing — of selecting only what truly serves you — is both liberating and deeply stylish.</p><p>A well-curated wardrobe is built on foundations: the perfect white shirt, the tailored trouser, the coat that elevates everything beneath it. These are not trends; they are tools. They are the vocabulary from which endless outfits are composed.</p><p>The secret is not in having more — it is in having better. Each piece should earn its place through versatility, quality, and personal resonance. When every item in your closet is something you genuinely love, getting dressed becomes an act of creativity rather than anxiety.</p>",
        zh: "<p>精选衣橱的概念从未如此重要。在一个选择过载的时代，有意识的编辑行为——只选择真正为你服务的东西——既是解放，也是深度时尚。</p><p>一个精心策划的衣橱建立在基础之上：完美的白衬衫、剪裁考究的裤子、提升一切的外套。这些不是趋势；它们是工具。它们是构成无尽穿搭的词汇。</p><p>秘诀不在于拥有更多——而在于拥有更好。每一件都应该通过多功能性、品质和个人共鸣赢得它的位置。当你衣橱里的每一件都是你真正热爱的东西时，穿衣就变成了一种创造行为，而非焦虑。</p>"
      },
      category: "lifestyle",
      size: "small",
      date: "2026-07-28",
      cover: ""
    },
    {
      id: 5,
      title: { en: "Art in Fashion: When Clothing Becomes Canvas", zh: "时尚中的艺术：当服装成为画布" },
      excerpt: {
        en: "The intersection of visual art and haute couture.",
        zh: "视觉艺术与高级定制的交汇。"
      },
      content: {
        en: "<p>Fashion has always been a form of wearable art, but the dialogue between the gallery and the atelier has never been more vibrant. Contemporary artists collaborate with fashion houses; designers draw inspiration from painting, sculpture, and installation; and the runway has become a space for conceptual exploration as much as commercial presentation.</p><p>This intersection is where true creativity flourishes. When a garment is approached as a canvas — when color, texture, and form are composed with the intention of a painter — the result transcends mere clothing. It becomes an object of contemplation, a statement, a work of art that happens to be worn.</p><p>At Sean's STORE, we celebrate this artistic spirit. We believe that the most memorable fashion is that which dares to be art — that which challenges, provokes, and ultimately transforms the way we see ourselves and the world around us.</p>",
        zh: "<p>时尚一直是可穿戴艺术的一种形式，但画廊与工作室之间的对话从未如此充满活力。当代艺术家与时尚品牌合作；设计师从绘画、雕塑和装置中汲取灵感；T台已成为概念探索和商业展示并重的空间。</p><p>这种交汇是真正创造力蓬勃发展的地方。当一件服装被当作画布来对待——当颜色、纹理和形式以画家的意图来构图时——结果超越了单纯的服装。它成为一个沉思的对象，一个声明，一件恰好被穿着的艺术品。</p><p>在Sean's STORE，我们庆祝这种艺术精神。我们相信，最令人难忘的时尚是那些敢于成为艺术的时尚——那些挑战、激发并最终改变我们看待自己和周围世界方式的时尚。</p>"
      },
      category: "culture",
      size: "medium",
      date: "2026-07-20",
      cover: ""
    }
  ],
  products: [
    {
      id: 1,
      name: { en: "Cashmere Overcoat", zh: "羊绒大衣" },
      category: { en: "Outerwear", zh: "外套" },
      price: "$1,280",
      oldPrice: "",
      tag: "Bestseller",
      cover: ""
    },
    {
      id: 2,
      name: { en: "Silk Blend Blazer", zh: "丝绸混纺西装" },
      category: { en: "Tailoring", zh: "剪裁" },
      price: "$890",
      oldPrice: "$1,150",
      tag: "New",
      cover: ""
    },
    {
      id: 3,
      name: { en: "Organic Cotton Shirt", zh: "有机棉衬衫" },
      category: { en: "Essentials", zh: "基础款" },
      price: "$240",
      oldPrice: "",
      tag: "",
      cover: ""
    },
    {
      id: 4,
      name: { en: "Wool Wide-Leg Trousers", zh: "羊毛阔腿裤" },
      category: { en: "Bottoms", zh: "下装" },
      price: "$460",
      oldPrice: "",
      tag: "Limited",
      cover: ""
    }
  ],
  settings: {
    whatsapp: "+86 183 6388 2260",
    email: "EstheerEagler@gmail.com",
    replyHours: "12",
    hours: "Mon — Sun · 9:00 — 21:00",
    mapEmbed: ""
  }
};

// ============ i18n Translations ============
const I18N = {
  en: {
    nav: { home: "Home", editorial: "Editorial", story: "Story", collection: "Collection", contact: "Contact" },
    hero: {
      eyebrow: "Curated Luxury · Sustainable Style",
      title1: "Where Taste Meets",
      title2: "Timeless Elegance",
      subtitle: "A curated destination for the modern connoisseur — sustainable fashion, editorial aesthetics, and pieces that tell a story.",
      cta: "Explore the Collection"
    },
    marquee: ["Sustainable Fashion", "Editorial Curation", "Timeless Design", "Artistic Aesthetics", "Luxury Lifestyle"],
    editorial: { label: "Featured Editorial", title: "Stories That", titleEm: "Inspire", desc: "Thoughtful essays on style, culture, and the art of living well." },
    story: { label: "Our Story", title: "A Vision of", titleEm: "Intentional Luxury", p1: "Sean's STORE was born from a simple belief: that true luxury is found not in excess, but in curation. In a world of overwhelming choice, we select only the exceptional — pieces that combine artistry, sustainability, and timeless design.", p2: "Every item in our collection is chosen with intention. We work with artisans who honor tradition, designers who push boundaries, and materials that respect our planet. This is fashion with a conscience, style with substance.", f1t: "Curated Excellence", f1d: "Every piece hand-selected for quality and character.", f2t: "Sustainable First", f2d: "Ethical materials and responsible production always.", f3t: "Timeless Design", f3d: "Pieces that transcend seasons and trends.", badge: "Est. 2024" },
    collection: { label: "The Collection", title: "Pieces That", titleEm: "Define You", desc: "A carefully edited selection of garments and accessories." },
    stats: { s1n: "500+", s1l: "Curated Pieces", s2n: "50+", s2l: "Artisan Partners", s3n: "100%", s3l: "Sustainable", s4n: "12h", s4l: "Response Time" },
    testimonial: { quote: "Sean's STORE has redefined what sustainable luxury means to me. Every piece feels like a discovery — intentional, beautiful, and made to last.", name: "Isabella Chen", role: "Fashion Editor, VOGUE" },
    contact: { label: "Get in Touch", title: "Let's Start a", titleEm: "Conversation", desc: "Whether you have a question about a piece, need styling advice, or want to discuss a collaboration — we're here.", c1t: "WhatsApp", c2t: "Email", c3t: "Store Hours", promiseT: "12-Hour Response Promise", promiseD: "We reply to every message within 12 hours. Your questions matter to us." },
    privacy: { title: "Privacy Policy", updated: "Last updated: August 2026" },
    footer: { about: "A curated destination for sustainable luxury fashion. Timeless pieces, ethical craftsmanship, and editorial storytelling.", nav: "Navigation", contact: "Contact", follow: "Follow Us", rights: "© 2026 Sean's STORE. All rights reserved.", privacy: "Privacy Policy" },
    cookie: { title: "We Value Your Privacy", text: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept\", you consent to our use of cookies.", accept: "Accept All", decline: "Decline" },
    article: { readMore: "Read More", back: "Back to Articles" }
  },
  zh: {
    nav: { home: "首页", editorial: "编辑精选", story: "品牌故事", collection: "精选系列", contact: "联系我们" },
    hero: {
      eyebrow: "精选奢华 · 可持续风格",
      title1: "品味与",
      title2: "永恒优雅的交汇",
      subtitle: "为现代鉴赏家打造的精选目的地——可持续时尚、编辑美学，以及有故事的作品。",
      cta: "探索精选系列"
    },
    marquee: ["可持续时尚", "编辑策展", "永恒设计", "艺术美学", "奢华生活"],
    editorial: { label: "精选文章", title: "激发灵感的", titleEm: "故事", desc: "关于风格、文化和精致生活艺术的深度文章。" },
    story: { label: "品牌故事", title: "有意图的", titleEm: "奢华愿景", p1: "Sean's STORE 源于一个简单的信念：真正的奢华不在于过剩，而在于精选。在一个选择过载的世界里，我们只挑选卓越之作——结合艺术性、可持续性和永恒设计的作品。", p2: "我们系列中的每一件都是有意选择的。我们与尊重传统的工匠、突破边界的设计师以及尊重地球的材料合作。这是有良知的时尚，有内涵的风格。", f1t: "精选卓越", f1d: "每一件都经过手工挑选，追求品质与个性。", f2t: "可持续优先", f2d: "始终使用道德材料和负责任的生产。", f3t: "永恒设计", f3d: "超越季节和潮流的作品。", badge: "创立于 2024" },
    collection: { label: "精选系列", title: "定义你的", titleEm: "作品", desc: "精心编辑的服装与配饰精选。" },
    stats: { s1n: "500+", s1l: "精选作品", s2n: "50+", s2l: "工匠合作伙伴", s3n: "100%", s3l: "可持续", s4n: "12小时", s4l: "响应时间" },
    testimonial: { quote: "Sean's STORE 重新定义了可持续奢华对我的意义。每一件作品都像一次发现——有意图、美丽、经久耐用。", name: "陈伊莎贝拉", role: "VOGUE 时尚编辑" },
    contact: { label: "联系我们", title: "让我们开始", titleEm: "对话", desc: "无论您对某件作品有疑问、需要造型建议，还是想讨论合作——我们都在这里。", c1t: "WhatsApp", c2t: "电子邮箱", c3t: "营业时间", promiseT: "12小时回复承诺", promiseD: "我们在12小时内回复每一条消息。您的问题对我们很重要。" },
    privacy: { title: "隐私政策", updated: "最后更新：2026年8月" },
    footer: { about: "可持续奢华时尚的精选目的地。永恒作品、道德工艺和编辑式叙事。", nav: "导航", contact: "联系方式", follow: "关注我们", rights: "© 2026 Sean's STORE 版权所有", privacy: "隐私政策" },
    cookie: { title: "我们重视您的隐私", text: "我们使用 Cookie 来增强您的浏览体验、提供个性化内容并分析流量。点击\"接受\"即表示您同意我们使用 Cookie。", accept: "全部接受", decline: "拒绝" },
    article: { readMore: "阅读全文", back: "返回文章列表" }
  }
};

// ============ State ============
let currentLang = localStorage.getItem('seans_lang') || 'en';
let cmsData = null;

// ============ Data Management ============
function loadData() {
  const saved = localStorage.getItem('seans_cms_data');
  if (saved) {
    try { cmsData = JSON.parse(saved); } catch(e) { cmsData = JSON.parse(JSON.stringify(DEFAULT_DATA)); }
  } else {
    cmsData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function saveData() {
  localStorage.setItem('seans_cms_data', JSON.stringify(cmsData));
}

function t(key) {
  const keys = key.split('.');
  let val = I18N[currentLang];
  for (const k of keys) { val = val ? val[k] : undefined; }
  return val || key;
}

function getArticleField(article, field) {
  return article[field] && article[field][currentLang] ? article[field][currentLang] : article[field].en;
}

function getProductField(product, field) {
  return product[field] && product[field][currentLang] ? product[field][currentLang] : product[field].en;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (currentLang === 'zh') {
    return `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`;
  }
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ============ Language Switching ============
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('seans_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  renderAll();
  const btn = document.querySelector('.lang-btn');
  if (btn) btn.textContent = lang === 'en' ? '中文 / EN' : 'EN / 中文';
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'zh' : 'en');
}

// ============ Render Functions ============
function renderNav() {
  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;
  const n = t('nav');
  navLinks.innerHTML = `
    <li><a href="#home" class="active">${n.home}</a></li>
    <li><a href="#editorial">${n.editorial}</a></li>
    <li><a href="#story">${n.story}</a></li>
    <li><a href="#collection">${n.collection}</a></li>
    <li><a href="#contact">${n.contact}</a></li>
  `;
  // mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.innerHTML = `
      <button class="mobile-close" onclick="closeMobileMenu()"><i class="fas fa-times"></i></button>
      <a href="#home" onclick="closeMobileMenu()">${n.home}</a>
      <a href="#editorial" onclick="closeMobileMenu()">${n.editorial}</a>
      <a href="#story" onclick="closeMobileMenu()">${n.story}</a>
      <a href="#collection" onclick="closeMobileMenu()">${n.collection}</a>
      <a href="#contact" onclick="closeMobileMenu()">${n.contact}</a>
    `;
  }
}

function renderHero() {
  const h = t('hero');
  document.getElementById('heroEyebrow').textContent = h.eyebrow;
  document.getElementById('heroTitle1').textContent = h.title1;
  document.getElementById('heroTitle2').innerHTML = `<em>${h.title2}</em>`;
  document.getElementById('heroSubtitle').textContent = h.subtitle;
  document.getElementById('heroCta').innerHTML = `${h.cta} <i class="fas fa-arrow-right"></i>`;
}

function renderMarquee() {
  const items = t('marquee');
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  let html = '';
  // duplicate for seamless loop
  for (let i = 0; i < 2; i++) {
    items.forEach(item => { html += `<span class="marquee-item">${item}</span>`; });
  }
  track.innerHTML = html;
}

function renderEditorial() {
  const e = t('editorial');
  document.getElementById('editorialLabel').textContent = e.label;
  document.getElementById('editorialTitle').innerHTML = `${e.title} <em>${e.titleEm}</em>`;
  document.getElementById('editorialDesc').textContent = e.desc;

  const grid = document.getElementById('editorialGrid');
  if (!grid) return;
  let html = '';
  cmsData.articles.forEach(article => {
    const sizeClass = article.size || 'medium';
    const title = getArticleField(article, 'title');
    const excerpt = getArticleField(article, 'excerpt');
    const catLabel = article.category.charAt(0).toUpperCase() + article.category.slice(1);
    const coverImg = article.cover
      ? `<img src="${article.cover}" alt="${title}" onerror="this.style.display='none'">`
      : '';
    html += `
      <article class="editorial-card ${sizeClass} reveal" onclick="openArticle(${article.id})">
        <div class="editorial-card-img">${coverImg}</div>
        <div class="editorial-card-overlay">
          <span class="editorial-card-cat">${catLabel}</span>
          <h3 class="editorial-card-title">${title}</h3>
          <p class="editorial-card-excerpt">${excerpt}</p>
          <div class="editorial-card-meta"><span>${formatDate(article.date)}</span></div>
        </div>
        <div class="editorial-card-arrow"><i class="fas fa-arrow-right"></i></div>
      </article>
    `;
  });
  grid.innerHTML = html;
  initReveal();
}

function renderStory() {
  const s = t('story');
  document.getElementById('storyLabel').textContent = s.label;
  document.getElementById('storyTitle').innerHTML = `${s.title} <em>${s.titleEm}</em>`;
  document.getElementById('storyP1').textContent = s.p1;
  document.getElementById('storyP2').textContent = s.p2;
  document.getElementById('storyF1t').textContent = s.f1t;
  document.getElementById('storyF1d').textContent = s.f1d;
  document.getElementById('storyF2t').textContent = s.f2t;
  document.getElementById('storyF2d').textContent = s.f2d;
  document.getElementById('storyF3t').textContent = s.f3t;
  document.getElementById('storyF3d').textContent = s.f3d;
  document.getElementById('storyBadge').textContent = s.badge;
}

function renderCollection() {
  const c = t('collection');
  document.getElementById('collectionLabel').textContent = c.label;
  document.getElementById('collectionTitle').innerHTML = `${c.title} <em>${c.titleEm}</em>`;
  document.getElementById('collectionDesc').textContent = c.desc;

  const grid = document.getElementById('collectionGrid');
  if (!grid) return;
  let html = '';
  cmsData.products.forEach(product => {
    const name = getProductField(product, 'name');
    const cat = getProductField(product, 'category');
    const tagHtml = product.tag ? `<span class="product-tag">${product.tag}</span>` : '';
    const oldPriceHtml = product.oldPrice ? `<span>${product.oldPrice}</span>` : '';
    const coverImg = product.cover
      ? `<img src="${product.cover}" alt="${name}" onerror="this.style.display='none'">`
      : '';
    html += `
      <div class="product-card reveal">
        <div class="product-img">
          ${tagHtml}
          ${coverImg}
        </div>
        <div class="product-info">
          <div class="product-cat">${cat}</div>
          <h3 class="product-name">${name}</h3>
          <div class="product-price">${oldPriceHtml}${product.price}</div>
        </div>
      </div>
    `;
  });
  grid.innerHTML = html;
  initReveal();
}

function renderStats() {
  const s = t('stats');
  document.getElementById('stat1n').textContent = s.s1n;
  document.getElementById('stat1l').textContent = s.s1l;
  document.getElementById('stat2n').textContent = s.s2n;
  document.getElementById('stat2l').textContent = s.s2l;
  document.getElementById('stat3n').textContent = s.s3n;
  document.getElementById('stat3l').textContent = s.s3l;
  document.getElementById('stat4n').textContent = s.s4n;
  document.getElementById('stat4l').textContent = s.s4l;
}

function renderTestimonial() {
  const tm = t('testimonial');
  document.getElementById('testimonialQuote').textContent = tm.quote;
  document.getElementById('testimonialName').textContent = tm.name;
  document.getElementById('testimonialRole').textContent = tm.role;
}

function renderContact() {
  const c = t('contact');
  const settings = cmsData.settings;
  document.getElementById('contactLabel').textContent = c.label;
  document.getElementById('contactTitle').innerHTML = `${c.title} <em>${c.titleEm}</em>`;
  document.getElementById('contactDesc').textContent = c.desc;
  document.getElementById('contactWhatsapp').innerHTML = `<a href="https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}" target="_blank">${settings.whatsapp}</a>`;
  document.getElementById('contactEmail').innerHTML = `<a href="mailto:${settings.email}">${settings.email}</a>`;
  document.getElementById('contactHours').textContent = settings.hours;
  document.getElementById('contactC1t').textContent = c.c1t;
  document.getElementById('contactC2t').textContent = c.c2t;
  document.getElementById('contactC3t').textContent = c.c3t;
  document.getElementById('promiseT').textContent = `${settings.replyHours}-Hour Response Promise`;
  document.getElementById('promiseD').textContent = c.promiseD;

  // Map
  const mapContainer = document.getElementById('contactMap');
  if (mapContainer) {
    if (settings.mapEmbed) {
      mapContainer.innerHTML = `<iframe src="${settings.mapEmbed}" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    } else {
      mapContainer.innerHTML = `
        <div class="map-placeholder">
          <div>
            <i class="fas fa-map-marker-alt"></i>
            <p style="color:rgba(255,255,255,0.4);font-size:0.85rem;">Google Map — configure in admin panel</p>
          </div>
        </div>
      `;
    }
  }
}

function renderFooter() {
  const f = t('footer');
  const settings = cmsData.settings;
  document.getElementById('footerAbout').textContent = f.about;
  document.getElementById('footerNavTitle').textContent = f.nav;
  document.getElementById('footerContactTitle').textContent = f.contact;
  document.getElementById('footerFollowTitle').textContent = f.follow;
  document.getElementById('footerRights').textContent = f.rights;
  document.getElementById('footerPrivacyLink').textContent = f.privacy;
  const n = t('nav');
  document.getElementById('footerNav').innerHTML = `
    <li><a href="#home">${n.home}</a></li>
    <li><a href="#editorial">${n.editorial}</a></li>
    <li><a href="#story">${n.story}</a></li>
    <li><a href="#collection">${n.collection}</a></li>
    <li><a href="#contact">${n.contact}</a></li>
  `;
  document.getElementById('footerContactInfo').innerHTML = `
    <li><a href="https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}" target="_blank"><i class="fab fa-whatsapp"></i> ${settings.whatsapp}</a></li>
    <li><a href="mailto:${settings.email}"><i class="fas fa-envelope"></i> ${settings.email}</a></li>
  `;
}

function renderCookie() {
  const c = t('cookie');
  document.getElementById('cookieTitle').textContent = c.title;
  document.getElementById('cookieText').innerHTML = `${c.text} <a href="#privacy">${t('footer.privacy')}</a>`;
  document.getElementById('cookieAccept').textContent = c.accept;
  document.getElementById('cookieDecline').textContent = c.decline;
}

function renderAll() {
  renderNav();
  renderHero();
  renderMarquee();
  renderEditorial();
  renderStory();
  renderCollection();
  renderStats();
  renderTestimonial();
  renderContact();
  renderFooter();
  renderCookie();
  updateMetaTags();
}

function updateMetaTags() {
  const lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.lang = lang;
  const title = currentLang === 'zh'
    ? "Sean's STORE — 可持续奢华时尚杂志 | Sustainable Fashion Magazine"
    : "Sean's STORE — Sustainable Luxury Fashion Magazine";
  document.title = title;
}

// ============ Article Modal ============
function openArticle(id) {
  const article = cmsData.articles.find(a => a.id === id);
  if (!article) return;
  const title = getArticleField(article, 'title');
  const content = getArticleField(article, 'content');
  const catLabel = article.category.charAt(0).toUpperCase() + article.category.slice(1);
  const coverImg = article.cover
    ? `<img src="${article.cover}" alt="${title}" onerror="this.parentElement.style.background='linear-gradient(135deg,#1b263b,#0d1b2a)'">`
    : '';

  document.getElementById('modalCover').innerHTML = coverImg;
  document.getElementById('modalCat').textContent = catLabel;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDate').textContent = formatDate(article.date);
  document.getElementById('modalContent').innerHTML = content;
  document.getElementById('articleModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  document.getElementById('articleModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ============ Mobile Menu ============
function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// ============ Cookie Consent ============
function showCookieBanner() {
  const consent = localStorage.getItem('seans_cookie_consent');
  if (!consent) {
    setTimeout(() => {
      document.getElementById('cookieBanner').classList.add('show');
    }, 1500);
  }
}
function acceptCookies() {
  localStorage.setItem('seans_cookie_consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('show');
}
function declineCookies() {
  localStorage.setItem('seans_cookie_consent', 'declined');
  document.getElementById('cookieBanner').classList.remove('show');
}

// ============ Scroll Reveal ============
function initReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// ============ Navbar Scroll ============
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  });
}

// ============ Smooth Scroll ============
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  setLanguage(currentLang);
  initNavbarScroll();
  initSmoothScroll();
  initReveal();
  showCookieBanner();

  // ESC closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArticle();
      closeMobileMenu();
    }
  });

  // Click outside modal closes it
  document.getElementById('articleModal').addEventListener('click', (e) => {
    if (e.target.id === 'articleModal') closeArticle();
  });
});
