/* ===== HOME PAGE - COMPLETE STANDALONE JAVASCRIPT ===== */
/* This file contains ALL JavaScript needed for home-standalone.html */

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    adjustHeroSpacing();
    setActiveNavByUrl();
    attachNavLinkHandlers();
    initInfoManager();
});

window.addEventListener('load', () => {
    adjustHeroSpacing();
    setTimeout(adjustHeroSpacing, 250);
});

window.addEventListener('resize', () => {
    adjustHeroSpacing();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Adjust hero spacing to sit directly under the fixed navbar
function adjustHeroSpacing() {
    const nav = document.getElementById('mainNav');
    const hero = document.getElementById('home');
    if (!nav) return;
    const navHeight = Math.ceil(nav.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--nav-height', navHeight + 'px');

    if (hero) {
        hero.style.paddingTop = '0px';
    }
}

// Helper: mark active nav link based on current URL
function setActiveNavByUrl() {
    const current = (location.pathname || '').split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.classList.remove('active');
        try {
            const linkFile = new URL(link.href, location.href).pathname.split('/').pop();
            if (linkFile === current) {
                link.classList.add('active');
            }
        } catch (e) {}
    });
}

// Collapse mobile navbar when any nav link is clicked
function attachNavLinkHandlers() {
    const navCollapse = document.getElementById('navbarNav');
    if (!navCollapse) return;
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                try { new bootstrap.Collapse(navCollapse).hide(); } catch (e) {}
            }
        });
    });
}

/* ===== Info Manager (under #info-box) ===== */
function getInfos() {
    try {
        const raw = sessionStorage.getItem('userInfos');
        if (!raw) return [];
        return JSON.parse(raw);
    } catch (e) {
        console.warn('Could not read userInfos from sessionStorage', e);
        return [];
    }
}

function saveInfos(infos) {
    try {
        sessionStorage.setItem('userInfos', JSON.stringify(infos));
    } catch (e) {
        console.warn('Could not save userInfos to sessionStorage', e);
    }
}

function renderInfos() {
    const container = document.getElementById('infoEntriesContainer');
    if (!container) return;

    const infos = getInfos();
    if (!infos || infos.length === 0) {
        container.innerHTML = '<div class="col-12 text-muted">No entries yet. Use "Manage Infos" to add one.</div>';
        return;
    }

    container.innerHTML = infos.map((info, idx) => `
        <div class="col-md-4">
            <div class="card info-entry-card h-100 shadow-sm border-0">
                ${info.imageUrl ? `<img src="${info.imageUrl}" class="card-img-top info-entry-img" alt="${escapeHtml(info.title)}">` : ''}
                <div class="card-body">
                    <h6 class="card-title mb-1">${escapeHtml(info.title)}</h6>
                    ${info.address ? `<div class="small text-muted mb-2">${escapeHtml(info.address)}</div>` : ''}
                    <p class="card-text small text-secondary mb-3">${escapeHtml(info.description || '')}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">${new Date(info.createdAt).toLocaleString()}</small>
                        <button class="btn btn-sm btn-outline-danger" data-remove-index="${idx}">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // attach remove handlers
    container.querySelectorAll('[data-remove-index]').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = Number(this.dataset.removeIndex);
            const infos = getInfos();
            if (isNaN(idx) || idx < 0 || idx >= infos.length) return;
            infos.splice(idx, 1);
            saveInfos(infos);
            renderInfos();
        });
    });
}

function addInfoFromForm() {
    const titleEl = document.getElementById('infoTitle');
    const addressEl = document.getElementById('infoAddress');
    const imageUrlEl = document.getElementById('infoImageUrl');
    const descEl = document.getElementById('infoDescription');

    if (!titleEl) return;
    const title = titleEl.value.trim();
    const address = addressEl ? addressEl.value.trim() : '';
    const imageUrl = imageUrlEl ? imageUrlEl.value.trim() : '';
    const description = descEl ? descEl.value.trim() : '';

    if (!title) {
        titleEl.classList.add('is-invalid');
        setTimeout(() => titleEl.classList.remove('is-invalid'), 1500);
        return;
    }

    const infos = getInfos();
    infos.unshift({ title, address, imageUrl, description, createdAt: Date.now() });
    saveInfos(infos);
    renderInfos();

    titleEl.value = '';
    if (addressEl) addressEl.value = '';
    if (imageUrlEl) imageUrlEl.value = '';
    if (descEl) descEl.value = '';
}

function clearAllInfos() {
    if (!confirm('Clear all info entries? This cannot be undone.')) return;
    saveInfos([]);
    renderInfos();
}

function toggleInfoManager() {
    const manager = document.getElementById('infoManager');
    const toggleBtn = document.getElementById('toggleInfoManager');
    if (!manager || !toggleBtn) return;
    if (manager.style.display === 'none' || manager.style.display === '') {
        manager.style.display = 'block';
        toggleBtn.textContent = 'Close Manager';
    } else {
        manager.style.display = 'none';
        toggleBtn.textContent = 'Manage Infos';
    }
}

function initInfoManager() {
    const toggleBtn = document.getElementById('toggleInfoManager');
    const addBtn = document.getElementById('addInfoBtn');
    const clearBtn = document.getElementById('clearInfosBtn');

    if (toggleBtn) toggleBtn.addEventListener('click', toggleInfoManager);
    if (addBtn) addBtn.addEventListener('click', function (e) { e.preventDefault(); addInfoFromForm(); });
    if (clearBtn) clearBtn.addEventListener('click', function (e) { e.preventDefault(); clearAllInfos(); });

    renderInfos();
}

// small helper to escape HTML used when rendering user-provided strings
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Hover effect for cards
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect for blobs
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.5;
        blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
 
