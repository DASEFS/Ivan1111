const DEFAULT_PASSWORD = 'admin123';

function getPassword() { return localStorage.getItem('ivan_admin_password') || DEFAULT_PASSWORD; }
function isLoggedIn() { return sessionStorage.getItem('ivan_admin_logged_in') === 'true'; }

function doLogin() {
    const input = document.getElementById('loginPassword').value;
    const error = document.getElementById('loginError');
    if (input === getPassword()) {
        sessionStorage.setItem('ivan_admin_logged_in', 'true');
        showAdmin();
        error.style.display = 'none';
    } else { error.style.display = 'block'; }
}

function doLogout() { sessionStorage.removeItem('ivan_admin_logged_in'); location.reload(); }

function showAdmin() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminLayout').style.display = 'flex';
    loadDashboard(); loadArticlesTable(); loadSettings(); loadSeoSettings();
}

function switchTab(tab) {
    ['dashboard', 'articles', 'settings', 'backup'].forEach(t => {
        document.getElementById('panel-' + t).style.display = 'none';
        document.getElementById('tab-' + t).classList.remove('active');
    });
    document.getElementById('panel-' + tab).style.display = 'block';
    document.getElementById('tab-' + tab).classList.add('active');
    const titles = { dashboard: 'Dashboard', articles: 'Articles', settings: 'Settings', backup: 'Backup & Restore' };
    document.getElementById('pageTitle').textContent = titles[tab] || 'Admin';
    if (tab === 'dashboard') loadDashboard();
    if (tab === 'articles') loadArticlesTable();
}

function getArticles() {
    const stored = localStorage.getItem('ivan_articles');
    if (stored) { try { return JSON.parse(stored); } catch(e) { return []; } }
    return [];
}
function saveArticles(articles) { localStorage.setItem('ivan_articles', JSON.stringify(articles)); }

function getSettings() {
    const stored = localStorage.getItem('ivan_settings');
    if (stored) { try { return JSON.parse(stored); } catch(e) {} }
    return { siteName: "Ivan.miller", whatsapp: "+8618363882260", email: "EstheerEagler@gmail.com", replyHours: "12", mapEmbed: "" };
}
function saveSettingsObj(settings) { localStorage.setItem('ivan_settings', JSON.stringify(settings)); }

function getSeoSettings() {
    const stored = localStorage.getItem('ivan_seo');
    if (stored) { try { return JSON.parse(stored); } catch(e) {} }
    return { title: "Ivan.miller | Sustainable Fashion Magazine", description: "Ivan.miller is a sustainable fashion magazine blending European editorial style with Korean minimalism.", keywords: "sustainable fashion magazine, fashion, outfits, aesthetics, Ivan.miller" };
}

function loadDashboard() {
    const articles = getArticles().sort((a,b) => new Date(b.date) - new Date(a.date));
    document.getElementById('dashArticleCount').textContent = articles.length;
    if (articles.length > 0) {
        const latest = new Date(articles[0].date);
        document.getElementById('dashLatestDate').textContent = latest.getFullYear() + '-' + String(latest.getMonth()+1).padStart(2,'0') + '-' + String(latest.getDate()).padStart(2,'0');
    } else { document.getElementById('dashLatestDate').textContent = '—'; }
    const recent = articles.slice(0, 5);
    const tbody = document.getElementById('dashRecentArticles');
    if (recent.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--text-light);padding:32px;">No articles yet.</td></tr>';
    } else {
        tbody.innerHTML = recent.map(a => '<tr>' +
            '<td>' + (a.title_en || 'Untitled') + '</td>' +
            '<td><span style="text-transform:capitalize;">' + a.category + '</span></td>' +
            '<td>' + a.date + '</td>' +
            '<td><div class="table-actions">' +
                '<button class="btn btn-secondary btn-sm" onclick="switchTab(\'articles\');editArticle(' + a.id + ')"><i class="fas fa-edit"></i></button>' +
                '<button class="btn btn-danger btn-sm" onclick="deleteArticle(' + a.id + ')"><i class="fas fa-trash"></i></button>' +
            '</div></td></tr>').join('');
    }
}

function loadArticlesTable() {
    const articles = getArticles().sort((a,b) => new Date(b.date) - new Date(a.date));
    const tbody = document.getElementById('articleTableBody');
    if (articles.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--text-light);padding:40px;">No articles yet. Click "New Article" to create one.</td></tr>';
        return;
    }
    tbody.innerHTML = articles.map(a => '<tr>' +
        '<td style="max-width:300px;">' + (a.title_en || 'Untitled') + '</td>' +
        '<td><span style="text-transform:capitalize;">' + a.category + '</span></td>' +
        '<td>' + a.date + '</td>' +
        '<td><div class="table-actions">' +
            '<button class="btn btn-secondary btn-sm" onclick="editArticle(' + a.id + ')" title="Edit"><i class="fas fa-edit"></i></button>' +
            '<button class="btn btn-danger btn-sm" onclick="deleteArticle(' + a.id + ')" title="Delete"><i class="fas fa-trash"></i></button>' +
        '</div></td></tr>').join('');
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
    document.getElementById('editDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('editCover').value = '';
    document.getElementById('editorModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function editArticle(id) {
    const articles = getArticles();
    const article = articles.find(a => a.id === id);
    if (!article) return;
    document.getElementById('editorTitle').textContent = 'Edit Article';
    document.getElementById('editArticleId').value = article.id;
    document.getElementById('editTitleEn').value = article.title_en || '';
    document.getElementById('editTitleZh').value = article.title_zh || '';
    document.getElementById('editExcerptEn').value = article.excerpt_en || '';
    document.getElementById('editExcerptZh').value = article.excerpt_zh || '';
    document.getElementById('editContentEn').value = article.content_en || '';
    document.getElementById('editContentZh').value = article.content_zh || '';
    document.getElementById('editCategory').value = article.category || 'editorial';
    document.getElementById('editDate').value = article.date || new Date().toISOString().split('T')[0];
    document.getElementById('editCover').value = article.cover || '';
    document.getElementById('editorModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeArticleEditor() {
    document.getElementById('editorModal').classList.remove('open');
    document.body.style.overflow = '';
}
function closeEditorOnOverlay(e) { if (e.target.id === 'editorModal') closeArticleEditor(); }

function saveArticle() {
    const id = document.getElementById('editArticleId').value;
    const titleEn = document.getElementById('editTitleEn').value.trim();
    const titleZh = document.getElementById('editTitleZh').value.trim();
    const excerptEn = document.getElementById('editExcerptEn').value.trim();
    const excerptZh = document.getElementById('editExcerptZh').value.trim();
    const contentEn = document.getElementById('editContentEn').value.trim();
    const contentZh = document.getElementById('editContentZh').value.trim();
    const category = document.getElementById('editCategory').value;
    const date = document.getElementById('editDate').value;
    const cover = document.getElementById('editCover').value.trim();
    if (!titleEn) { showToast('English title is required.', 'error'); return; }
    if (!contentEn) { showToast('English content is required.', 'error'); return; }
    const articles = getArticles();
    if (id) {
        const idx = articles.findIndex(a => a.id === parseInt(id));
        if (idx !== -1) {
            articles[idx] = { ...articles[idx], title_en: titleEn, title_zh: titleZh, excerpt_en: excerptEn, excerpt_zh: excerptZh, content_en: contentEn, content_zh: contentZh, category, date, cover };
        }
        showToast('Article updated successfully!', 'success');
    } else {
        const newId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) + 1 : 1;
        articles.push({ id: newId, title_en: titleEn, title_zh: titleZh, excerpt_en: excerptEn, excerpt_zh: excerptZh, content_en: contentEn, content_zh: contentZh, category, date, cover, author: "Ivan.miller Editorial" });
        showToast('Article created successfully!', 'success');
    }
    saveArticles(articles);
    closeArticleEditor();
    loadArticlesTable();
    loadDashboard();
}

function deleteArticle(id) {
    if (!confirm('Are you sure you want to delete this article? This action cannot be undone.')) return;
    let articles = getArticles();
    articles = articles.filter(a => a.id !== id);
    saveArticles(articles);
    loadArticlesTable();
    loadDashboard();
    showToast('Article deleted.', 'success');
}

function loadSettings() {
    const s = getSettings();
    document.getElementById('setWhatsapp').value = s.whatsapp || '';
    document.getElementById('setEmail').value = s.email || '';
    document.getElementById('setReplyHours').value = s.replyHours || '12';
    document.getElementById('setSiteName').value = s.siteName || 'Ivan.miller';
    document.getElementById('setMapEmbed').value = s.mapEmbed || '';
}

function saveSettings() {
    const settings = {
        siteName: document.getElementById('setSiteName').value.trim(),
        whatsapp: document.getElementById('setWhatsapp').value.trim(),
        email: document.getElementById('setEmail').value.trim(),
        replyHours: document.getElementById('setReplyHours').value.trim(),
        mapEmbed: document.getElementById('setMapEmbed').value.trim()
    };
    saveSettingsObj(settings);
    showToast('Settings saved successfully!', 'success');
}

function loadSeoSettings() {
    const s = getSeoSettings();
    document.getElementById('seoTitle').value = s.title || '';
    document.getElementById('seoDescription').value = s.description || '';
    document.getElementById('seoKeywords').value = s.keywords || '';
}

function saveSeoSettings() {
    const seo = {
        title: document.getElementById('seoTitle').value.trim(),
        description: document.getElementById('seoDescription').value.trim(),
        keywords: document.getElementById('seoKeywords').value.trim()
    };
    localStorage.setItem('ivan_seo', JSON.stringify(seo));
    showToast('SEO settings saved!', 'success');
}

function changePassword() {
    const newPwd = document.getElementById('newPassword').value;
    const confirmPwd = document.getElementById('confirmPassword').value;
    if (!newPwd || newPwd.length < 4) { showToast('Password must be at least 4 characters.', 'error'); return; }
    if (newPwd !== confirmPwd) { showToast('Passwords do not match.', 'error'); return; }
    localStorage.setItem('ivan_admin_password', newPwd);
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    showToast('Password changed successfully!', 'success');
}

function exportData() {
    const data = { version: '1.0', exportDate: new Date().toISOString(), articles: getArticles(), settings: getSettings(), seo: getSeoSettings() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ivan-miller-backup-' + new Date().toISOString().split('T')[0] + '.json';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Data exported successfully!', 'success');
}

function importData() {
    const fileInput = document.getElementById('importFile');
    if (!fileInput.files || fileInput.files.length === 0) { showToast('Please select a JSON file first.', 'error'); return; }
    if (!confirm('This will overwrite ALL current articles and settings. Continue?')) return;
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.articles) saveArticles(data.articles);
            if (data.settings) saveSettingsObj(data.settings);
            if (data.seo) localStorage.setItem('ivan_seo', JSON.stringify(data.seo));
            showToast('Data imported successfully!', 'success');
            loadDashboard(); loadArticlesTable(); loadSettings(); loadSeoSettings();
        } catch(err) { showToast('Invalid JSON file. Import failed.', 'error'); }
    };
    reader.readAsText(file);
}

function resetAllData() {
    if (!confirm('WARNING: This will delete ALL articles and restore default settings. This cannot be undone. Continue?')) return;
    if (!confirm('Are you absolutely sure?')) return;
    localStorage.removeItem('ivan_articles');
    localStorage.removeItem('ivan_settings');
    localStorage.removeItem('ivan_seo');
    localStorage.removeItem('ivan_admin_password');
    showToast('All data reset to defaults.', 'success');
    setTimeout(() => location.reload(), 1500);
}

function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show ' + (type || '');
    setTimeout(() => { toast.className = 'toast'; }, 3000);
}

document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeArticleEditor(); });

document.addEventListener('DOMContentLoaded', function() { if (isLoggedIn()) showAdmin(); });
