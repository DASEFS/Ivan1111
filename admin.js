/* ============================================
   Sean's STORE — Admin Panel Logic
   Auth · CRUD · Settings · Backup
   ============================================ */

// ============ Default Data (same as frontend) ============
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

// ============ State ============
let cmsData = null;
const ADMIN_PASSWORD_KEY = 'seans_admin_password';
const DEFAULT_PASSWORD = 'admin123';

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

function getPassword() {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
}

// ============ Auth ============
function checkAuth() {
  return sessionStorage.getItem('seans_admin_auth') === 'true';
}

function doLogin() {
  const input = document.getElementById('loginPassword').value;
  const error = document.getElementById('loginError');
  if (input === getPassword()) {
    sessionStorage.setItem('seans_admin_auth', 'true');
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminLayout').style.display = 'flex';
    loadData();
    renderDashboard();
    renderArticles();
    renderProducts();
    renderSettings();
  } else {
    error.style.display = 'block';
    document.getElementById('loginPassword').value = '';
    setTimeout(() => { error.style.display = 'none'; }, 3000);
  }
}

function doLogout() {
  sessionStorage.removeItem('seans_admin_auth');
  location.reload();
}

// ============ Tab Switching ============
function switchTab(tab) {
  document.querySelectorAll('[id^="panel-"]').forEach(p => p.style.display = 'none');
  document.getElementById('panel-' + tab).style.display = 'block';
  document.querySelectorAll('.admin-nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  const titles = {
    dashboard: 'Dashboard',
    articles: 'Articles Management',
    products: 'Products Management',
    settings: 'Settings',
    backup: 'Backup & Restore'
  };
  document.getElementById('pageTitle').textContent = titles[tab] || 'Admin';
}

// ============ Dashboard ============
function renderDashboard() {
  document.getElementById('dashArticleCount').textContent = cmsData.articles.length;
  document.getElementById('dashProductCount').textContent = cmsData.products.length;
  const latest = cmsData.articles.sort((a,b) => new Date(b.date) - new Date(a.date))[0];
  document.getElementById('dashLatestDate').textContent = latest ? latest.date.slice(0,7) : '—';

  const tbody = document.getElementById('dashRecentArticles');
  const recent = [...cmsData.articles].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,5);
  tbody.innerHTML = recent.map(a => `
    <tr>
      <td>${a.title.en}</td>
      <td><span style="background:var(--ivory);padding:4px 10px;border-radius:100px;font-size:0.72rem;">${a.category}</span></td>
      <td>${a.date}</td>
      <td>
        <div class="table-actions">
          <button class="btn btn-sm btn-secondary" onclick="switchTab('articles');editArticle(${a.id})">Edit</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ============ Articles CRUD ============
function renderArticles() {
  const tbody = document.getElementById('articleTableBody');
  tbody.innerHTML = cmsData.articles.map(a => `
    <tr>
      <td><strong>${a.title.en}</strong><br><span style="color:var(--text-muted);font-size:0.78rem;">${a.title.zh || ''}</span></td>
      <td><span style="background:var(--ivory);padding:4px 10px;border-radius:100px;font-size:0.72rem;">${a.category}</span></td>
      <td>${a.size}</td>
      <td>${a.date}</td>
      <td>
        <div class="table-actions">
          <button class="btn btn-sm btn-secondary" onclick="editArticle(${a.id})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-sm btn-danger" onclick="deleteArticle(${a.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openArticleEditor() {
  document.getElementById('editorTitle').textContent = 'New Article';
  document.getElementById('editArticleId').value = '';
  document.getElementById('editTitleEn').value = '';
  document.getElementById('editTitleZh').value = '';
  document.getElementById('editExcerptEn').value = '';
  document.getElementById('editExcerptZh').value = '';
  document.getElementById('editContentEn').value = '';
  document.getElementById('editContentZh').value = '';
  document.getElementById('editCategory').value = 'editorial';
  document.getElementById('editSize').value = 'medium';
  document.getElementById('editDate').value = new Date().toISOString().slice(0,10);
  document.getElementById('editCover').value = '';
  document.getElementById('editorModal').classList.add('open');
}

function editArticle(id) {
  const a = cmsData.articles.find(x => x.id === id);
  if (!a) return;
  document.getElementById('editorTitle').textContent = 'Edit Article';
  document.getElementById('editArticleId').value = a.id;
  document.getElementById('editTitleEn').value = a.title.en || '';
  document.getElementById('editTitleZh').value = a.title.zh || '';
  document.getElementById('editExcerptEn').value = a.excerpt.en || '';
  document.getElementById('editExcerptZh').value = a.excerpt.zh || '';
  document.getElementById('editContentEn').value = a.content.en || '';
  document.getElementById('editContentZh').value = a.content.zh || '';
  document.getElementById('editCategory').value = a.category;
  document.getElementById('editSize').value = a.size;
  document.getElementById('editDate').value = a.date;
  document.getElementById('editCover').value = a.cover || '';
  document.getElementById('editorModal').classList.add('open');
}

function closeArticleEditor() {
  document.getElementById('editorModal').classList.remove('open');
}

function closeEditorOnOverlay(e) {
  if (e.target.id === 'editorModal') closeArticleEditor();
}

function saveArticle() {
  const id = document.getElementById('editArticleId').value;
  const titleEn = document.getElementById('editTitleEn').value.trim();
  if (!titleEn) { showToast('English title is required', 'error'); return; }

  const articleData = {
    title: { en: titleEn, zh: document.getElementById('editTitleZh').value.trim() },
    excerpt: { en: document.getElementById('editExcerptEn').value.trim(), zh: document.getElementById('editExcerptZh').value.trim() },
    content: { en: document.getElementById('editContentEn').value.trim(), zh: document.getElementById('editContentZh').value.trim() },
    category: document.getElementById('editCategory').value,
    size: document.getElementById('editSize').value,
    date: document.getElementById('editDate').value,
    cover: document.getElementById('editCover').value.trim()
  };

  if (id) {
    const idx = cmsData.articles.findIndex(a => a.id === parseInt(id));
    if (idx > -1) cmsData.articles[idx] = { ...cmsData.articles[idx], ...articleData };
    showToast('Article updated successfully', 'success');
  } else {
    const newId = Math.max(0, ...cmsData.articles.map(a => a.id)) + 1;
    cmsData.articles.push({ id: newId, ...articleData });
    showToast('Article created successfully', 'success');
  }

  saveData();
  renderArticles();
  renderDashboard();
  closeArticleEditor();
}

function deleteArticle(id) {
  if (!confirm('Are you sure you want to delete this article?')) return;
  cmsData.articles = cmsData.articles.filter(a => a.id !== id);
  saveData();
  renderArticles();
  renderDashboard();
  showToast('Article deleted', 'success');
}

// ============ Products CRUD ============
function renderProducts() {
  const tbody = document.getElementById('productTableBody');
  tbody.innerHTML = cmsData.products.map(p => `
    <tr>
      <td><strong>${p.name.en}</strong><br><span style="color:var(--text-muted);font-size:0.78rem;">${p.name.zh || ''}</span></td>
      <td>${p.category.en}</td>
      <td>${p.price}</td>
      <td>${p.tag ? '<span style="background:var(--gold);color:var(--navy);padding:3px 10px;border-radius:100px;font-size:0.7rem;">' + p.tag + '</span>' : '—'}</td>
      <td>
        <div class="table-actions">
          <button class="btn btn-sm btn-secondary" onclick="editProduct(${p.id})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openProductEditor() {
  document.getElementById('productEditorTitle').textContent = 'New Product';
  document.getElementById('editProductId').value = '';
  document.getElementById('prodNameEn').value = '';
  document.getElementById('prodNameZh').value = '';
  document.getElementById('prodCatEn').value = '';
  document.getElementById('prodCatZh').value = '';
  document.getElementById('prodPrice').value = '';
  document.getElementById('prodOldPrice').value = '';
  document.getElementById('prodTag').value = '';
  document.getElementById('prodCover').value = '';
  document.getElementById('productModal').classList.add('open');
}

function editProduct(id) {
  const p = cmsData.products.find(x => x.id === id);
  if (!p) return;
  document.getElementById('productEditorTitle').textContent = 'Edit Product';
  document.getElementById('editProductId').value = p.id;
  document.getElementById('prodNameEn').value = p.name.en || '';
  document.getElementById('prodNameZh').value = p.name.zh || '';
  document.getElementById('prodCatEn').value = p.category.en || '';
  document.getElementById('prodCatZh').value = p.category.zh || '';
  document.getElementById('prodPrice').value = p.price || '';
  document.getElementById('prodOldPrice').value = p.oldPrice || '';
  document.getElementById('prodTag').value = p.tag || '';
  document.getElementById('prodCover').value = p.cover || '';
  document.getElementById('productModal').classList.add('open');
}

function closeProductEditor() {
  document.getElementById('productModal').classList.remove('open');
}

function closeProductEditorOnOverlay(e) {
  if (e.target.id === 'productModal') closeProductEditor();
}

function saveProduct() {
  const id = document.getElementById('editProductId').value;
  const nameEn = document.getElementById('prodNameEn').value.trim();
  if (!nameEn) { showToast('English name is required', 'error'); return; }

  const productData = {
    name: { en: nameEn, zh: document.getElementById('prodNameZh').value.trim() },
    category: { en: document.getElementById('prodCatEn').value.trim(), zh: document.getElementById('prodCatZh').value.trim() },
    price: document.getElementById('prodPrice').value.trim(),
    oldPrice: document.getElementById('prodOldPrice').value.trim(),
    tag: document.getElementById('prodTag').value.trim(),
    cover: document.getElementById('prodCover').value.trim()
  };

  if (id) {
    const idx = cmsData.products.findIndex(p => p.id === parseInt(id));
    if (idx > -1) cmsData.products[idx] = { ...cmsData.products[idx], ...productData };
    showToast('Product updated successfully', 'success');
  } else {
    const newId = Math.max(0, ...cmsData.products.map(p => p.id)) + 1;
    cmsData.products.push({ id: newId, ...productData });
    showToast('Product created successfully', 'success');
  }

  saveData();
  renderProducts();
  renderDashboard();
  closeProductEditor();
}

function deleteProduct(id) {
  if (!confirm('Are you sure you want to delete this product?')) return;
  cmsData.products = cmsData.products.filter(p => p.id !== id);
  saveData();
  renderProducts();
  renderDashboard();
  showToast('Product deleted', 'success');
}

// ============ Settings ============
function renderSettings() {
  document.getElementById('setWhatsapp').value = cmsData.settings.whatsapp;
  document.getElementById('setEmail').value = cmsData.settings.email;
  document.getElementById('setReplyHours').value = cmsData.settings.replyHours;
  document.getElementById('setHours').value = cmsData.settings.hours;
  document.getElementById('setMapEmbed').value = cmsData.settings.mapEmbed || '';
}

function saveSettings() {
  cmsData.settings.whatsapp = document.getElementById('setWhatsapp').value.trim();
  cmsData.settings.email = document.getElementById('setEmail').value.trim();
  cmsData.settings.replyHours = document.getElementById('setReplyHours').value.trim();
  cmsData.settings.hours = document.getElementById('setHours').value.trim();
  cmsData.settings.mapEmbed = document.getElementById('setMapEmbed').value.trim();
  saveData();
  showToast('Settings saved successfully', 'success');
}

function changePassword() {
  const newPwd = document.getElementById('newPassword').value;
  const confirmPwd = document.getElementById('confirmPassword').value;
  if (!newPwd || newPwd.length < 4) { showToast('Password must be at least 4 characters', 'error'); return; }
  if (newPwd !== confirmPwd) { showToast('Passwords do not match', 'error'); return; }
  localStorage.setItem(ADMIN_PASSWORD_KEY, newPwd);
  document.getElementById('newPassword').value = '';
  document.getElementById('confirmPassword').value = '';
  showToast('Password changed successfully', 'success');
}

// ============ Backup / Import / Export ============
function exportData() {
  const dataStr = JSON.stringify(cmsData, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `seans-store-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported successfully', 'success');
}

function importData() {
  const fileInput = document.getElementById('importFile');
  if (!fileInput.files.length) { showToast('Please select a JSON file', 'error'); return; }
  if (!confirm('This will overwrite ALL current data. Continue?')) return;

  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (!imported.articles || !imported.products || !imported.settings) {
        showToast('Invalid backup file format', 'error');
        return;
      }
      cmsData = imported;
      saveData();
      renderDashboard();
      renderArticles();
      renderProducts();
      renderSettings();
      showToast('Data imported successfully', 'success');
    } catch(err) {
      showToast('Failed to parse JSON file', 'error');
    }
  };
  reader.readAsText(file);
}

function resetAllData() {
  if (!confirm('Are you sure? This will reset ALL data to defaults and cannot be undone.')) return;
  if (!confirm('Really reset everything? This is your last chance.')) return;
  cmsData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  saveData();
  renderDashboard();
  renderArticles();
  renderProducts();
  renderSettings();
  showToast('All data reset to defaults', 'success');
}

// ============ Toast ============
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast ' + type + ' show';
  setTimeout(() => { toast.classList.remove('show'); }, 3000);
}

// ============ Init ============
document.addEventListener('DOMContentLoaded', () => {
  if (checkAuth()) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminLayout').style.display = 'flex';
    loadData();
    renderDashboard();
    renderArticles();
    renderProducts();
    renderSettings();
  }
  // Enter key on password field
  document.getElementById('loginPassword').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doLogin();
  });
  // ESC closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeArticleEditor();
      closeProductEditor();
    }
  });
});
