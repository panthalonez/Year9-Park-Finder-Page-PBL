// Shared favorites rendering for footers on all pages
(function(){
    function getFavorites() {
        try { const raw = localStorage.getItem('pf_favorites'); return raw ? JSON.parse(raw) : []; } catch (e) { return []; }
    }
    function saveFavorites(arr) {
        try { localStorage.setItem('pf_favorites', JSON.stringify(arr)); } catch (e) {}
    }
    function removeFavorite(id) {
        const numId = Number(id);
        const arr = getFavorites().filter(x => x !== numId);
        saveFavorites(arr);
        renderFavoritesFooter();
    }
    function renderFavoritesFooter() {
        // If the parks page has placeholder highlight boxes, render favorites into those
        const highlightEls = document.querySelectorAll('.placeholder-plus');
        const parksData = window.parksData || [];
        const favs = getFavorites().slice(0,4);

        if (highlightEls && highlightEls.length >= 4) {
            // Fill each placeholder slot with the corresponding favorite (or show + if empty)
            highlightEls.forEach((el, idx) => {
                const favId = favs[idx];
                if (!favId) {
                    // restore default placeholder
                    el.innerHTML = `<div class="caption-top">${el.querySelector('.caption-top') ? el.querySelector('.caption-top').textContent : ''}</div><div class="plus-box">+</div>`;
                    return;
                }
                const park = parksData.find(p => p.id === favId);
                    if (park) {
                        el.innerHTML = `
                            <div class="highlight-inner" data-id="${park.id}">
                                <button class="fav-remove" data-id="${park.id}" aria-label="Unfavorite">&times;</button>
                                <a class="d-block" href="parkDetail-standalone.html?id=${park.id}">
                                    <div class="caption-top">${park.name.split(' ')[0]}</div>
                                    <img src="${park.image}" alt="${park.name}">
                                </a>
                            </div>
                        `;
                    } else {
                    // fallback simple box
                    el.innerHTML = `<div class="caption-top">Park ${favId}</div><div class="plus-box">+</div>`;
                }
            });
                // attach click handlers for unfavorite buttons inside highlights
                document.querySelectorAll('.placeholder-plus .fav-remove').forEach(btn => {
                    btn.addEventListener('click', function(ev){
                        ev.preventDefault();
                        ev.stopPropagation();
                        const id = this.getAttribute('data-id');
                        if (!id) return;
                        removeFavorite(id);
                    });
                });
            return;
        }

        // Otherwise render into footer favoritesRow as before
        const container = document.getElementById('favoritesRow');
        if (!container) return;
        container.innerHTML = favs.map(id => {
            const park = parksData.find(p => p.id === id);
            if (!park) {
                return `
                    <div class="footer-thumb">
                        <div class="info-card glow-card footer-fav" style="position:relative;">
                            <button class="fav-remove" data-id="${id}" aria-label="Unfavorite" style="position:absolute;top:6px;right:6px;background:rgba(255,40,40,0.95);color:#fff;border:none;width:24px;height:24px;border-radius:50%;font-weight:700;cursor:pointer;">&times;</button>
                            <a href="parkDetail-standalone.html?id=${id}">
                                <div class="caption-top">Park ${id}</div>
                                <div style="height:72px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.02);border-radius:8px;color:#9fffb1;font-weight:700;">+</div>
                            </a>
                        </div>
                    </div>
                `;
            }
            return `
                <div class="footer-thumb">
                    <div class="info-card glow-card footer-fav" style="position:relative;">
                        <button class="fav-remove" data-id="${park.id}" aria-label="Unfavorite" style="position:absolute;top:6px;right:6px;background:rgba(255,40,40,0.95);color:#fff;border:none;width:24px;height:24px;border-radius:50%;font-weight:700;cursor:pointer;">&times;</button>
                        <a href="parkDetail-standalone.html?id=${park.id}">
                            <div class="caption-top">${park.name.split(' ')[0]}</div>
                            <img src="${park.image}" alt="${park.name}">
                        </a>
                    </div>
                </div>
            `;
        }).join('');

        // attach remove handlers for footer items
        container.querySelectorAll('.fav-remove').forEach(btn => {
            btn.addEventListener('click', function(ev){
                ev.preventDefault();
                ev.stopPropagation();
                const id = this.getAttribute('data-id');
                if (!id) return;
                removeFavorite(Number(id));
            });
        });
    }

    // expose renderer so other scripts can call after toggling
    window.renderSiteFavorites = renderFavoritesFooter;

    function clearFavorites() {
        try { localStorage.removeItem('pf_favorites'); } catch (e) {}
        renderFavoritesFooter();
    }

    // Create a small "Clear Favorites" button at top-right of the page
    function ensureClearButton() {
        if (document.getElementById('clearFavoritesBtn')) return;

        // inject footer-styles once
        if (!document.getElementById('fav-global-styles')) {
            const style = document.createElement('style');
            style.id = 'fav-global-styles';
            style.textContent = `
                #clearFavoritesBtn {
                    display: inline-block;
                    padding: 8px 14px;
                    border-radius: 8px;
                    border: 1px solid rgba(255,40,40,0.15);
                    background: rgba(255,255,255,0.02);
                    color: #ff6b6b;
                    cursor: pointer;
                    font-size: 16px;
                }
                .fav-footer-wrap { display:flex; justify-content:flex-end; align-items:center; }
            `;
            document.head.appendChild(style);
        }

        // find footer container to append into
        const footerContainer = document.querySelector('.site-footer .container') || document.querySelector('.site-footer') || document.querySelector('footer');
        if (!footerContainer) {
            // fallback: append to body
            const btn = document.createElement('button');
            btn.id = 'clearFavoritesBtn';
            btn.className = 'btn';
            btn.textContent = 'Clear Favorites';
            btn.addEventListener('click', function(){
                if (confirm('Remove all favorites?')) {
                    clearFavorites();
                    try { alert('All favorites removed'); } catch(e) {}
                }
            });
            document.body.appendChild(btn);
            return;
        }

        // create wrapper so the button is right aligned in footer
        let wrap = footerContainer.querySelector('.fav-footer-wrap');
        if (!wrap) {
            wrap = document.createElement('div');
            wrap.className = 'fav-footer-wrap';
            // insert at top of footer container
            footerContainer.insertBefore(wrap, footerContainer.firstChild);
        }

        const btn = document.createElement('button');
        btn.id = 'clearFavoritesBtn';
        btn.className = 'btn';
        btn.textContent = 'Clear Favorites';
        btn.addEventListener('click', function(){
            if (confirm('Remove all favorites?')) {
                clearFavorites();
                try { alert('All favorites removed'); } catch(e) {}
            }
        });
        wrap.appendChild(btn);
    }

    document.addEventListener('DOMContentLoaded', function(){
        renderFavoritesFooter();
        ensureClearButton();
    });
})();
