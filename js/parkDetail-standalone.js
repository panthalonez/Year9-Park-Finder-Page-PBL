/* ===== PARKDETAIL PAGE - COMPLETE STANDALONE JAVASCRIPT ===== */

// ===== Parks Data (full data needed) =====
const parksData = [
  {
        id: 1,
        name: "Bandula Park (Maha Bandula Park)",
        description: "Central Yangon park featuring the Independence Monument, colonial architecture views, and shaded lawns perfect for relaxing.",
        image: "IMG/Mahar_bandula.jfif",
        images: ["IMG/Bandula_park(1_better_resolute).jfif", "IMG/Bandula_park(2_better_resolute).jfif", "IMG/Bandula_park(3_better_resolute).jfif"],
        features: ["lawns", "monument", "city-view"],
        difficulty: "easy",
        activities: ["walking", "people-watching", "tai-chi"],
        rating: null,
        reviews: null,
        location: "Downtown Yangon (near Sule Pagoda)",
        size: "moderate",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Bandula+Park+Maha+Bandula+Park+Downtown+Yangon+near+Sule+Pagoda"
    },
    {
        id: 2,
        name: "General Aung San Park",
        description: "Peaceful green park featuring the statue of General Aung San, quiet paths, and clean lawns.",
        image: "IMG/General_aungsan_park.jfif",
            images: ["IMG/Bogyoke_aungsan_park(1_better_resolute).jfif", "IMG/bogyoke_aungsan_park(2_better_resolute).jpg", "IMG/bogyoke_aungsan_park(3_better_resolute).jpg"],
        features: ["statue", "lawns", "shaded-paths"],
        difficulty: "easy",
        activities: ["walking", "photography", "relaxation"],
        rating: null,
        reviews: null,
        location: "Downtown Yangon (near Pyay Road)",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=General+Aung+San+Park+Downtown+Yangon+near+Pyay+Road"
    },
    {
        id: 3,
        name: "Hlawga National Park",
        description: "Large nature reserve with forest trails, wildlife, a small zoo, and a scenic lake.",
        image: "IMG/Hlawgs_park.jfif",
        images: ["IMG/hlawga_national_park(1_better_resolute).jfif", "IMG/hlawga_national_park(2_better_resolute).jfif", "IMG/hlawga_national_park(3_better_resolute).jfif"],
        features: ["forest", "wildlife", "lake", "trails"],
        difficulty: "easy",
        activities: ["hiking", "wildlife", "family-trips", "birdwatching"],
        rating: null,
        reviews: null,
        location: "Yangon outskirts (near Insein)",
        size: "big",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Hlawga+National+Park+Yangon+outskirts+near+Insein"
    },
    {
        id: 4,
        name: "Inya Park / Inya Lake",
        description: "Popular scenic lake with walking paths, jogging routes, and beautiful sunset spots.",
        image: "IMG/Inya_park.jfif",
        images: ["IMG/inya_lale_park(1_better_resolute).jpg", "IMG/inya_lake_park(2_better_resolute).jfif", "IMG/inya_lake_park(3_better_resolute).jfif"],
        features: ["lake", "paths", "sunset"],
        difficulty: "easy",
        activities: ["jogging", "walking", "picnic", "photography"],
        rating: null,
        reviews: null,
        location: "North Yangon",
        size: "big",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Inya+Park+Inya+Lake+North+Yangon"
    },
    {
        id: 5,
        name: "Insein Park",
        description: "Quiet local park with flower beds, shaded benches, and peaceful walking routes.",
        image: "IMG/insane_park.jfif",
        images: ["IMG/insein_park(1_better_resolute).jfif", "IMG/insein_park(2_better_resolute).jfif", "IMG/insein_park(3_better_resolute)"],
        features: ["flowers", "benches", "lawns"],
        difficulty: "easy",
        activities: ["walking", "reading", "relaxation"],
        rating: null,
        reviews: null,
        location: "Insein Township",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Insein+Park+Insein+Township"
    },
    {
        id: 6,
        name: "Kan Taw Mingalar Park",
        description: "Small community park with shaded trees and open lawns, ideal for casual visits.",
        image: "IMG/Kandaw_mingalar_park.jfif",
        images: ["IMG/kan_taw_mingalar_park(1_better_resolute).jfif", "IMG/kan_taw_mingalar_park(2_better_resolute).jfif", "IMG/kan_taw_mingalar_park(3_better_resolute).jpg"],
        features: ["trees", "lawns", "benches"],
        difficulty: "easy",
        activities: ["walking", "family-time", "meetups"],
        rating: null,
        reviews: null,
        location: "Kan Taw area",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Kan+Taw+Mingalar+Park+Kan+Taw+area"
    },
    {
        id: 7,
        name: "Kandawgyi Lake Park",
        description: "Scenic lake park featuring Karaweik Palace, wooden boardwalks, and great photography spots.",
        image: "IMG/Kandawgyi_park.jfif",
        images: ["IMG/kandawgyi_park(1_better_resolute).jfif", "IMG/kandawgyi_park(2_better_resolute).jpg", "IMG/kandawgyi_park(3_better_resolute).jfif"],
        features: ["lake", "boardwalk", "palace"],
        difficulty: "easy",
        activities: ["walking", "photography", "dining"],
        rating: null,
        reviews: null,
        location: "Central Yangon",
        size: "big",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Kandawgyi+Lake+Park+Central+Yangon"
    },
    {
        id: 8,
        name: "Okkala Thiri Park",
        description: "Local community green area with benches and grassy spaces for relaxation.",
        image: "IMG/Okkala_thiri_park.webp",
        images: ["IMG/okkala_thiri_park(1_better_resolute).webp", "IMG/okkala_thiri_park(2_better_resolute).webp", "IMG/okkala_thiri_park(3_better_resolute).webp"],
        features: ["lawns", "benches"],
        difficulty: "easy",
        activities: ["jogging", "relaxation", "quiet-meetups"],
        rating: null,
        reviews: null,
        location: "Okkala Township",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Okkala+Thiri+Park+Okkala+Township"
    },
    {
        id: 9,
        name: "Pazundaung Park",
        description: "Small peaceful park with shaded trees and simple walking paths.",
        image: "IMG/pazungdaung_park.webp",
        images: ["", "", ""],
        features: ["trees", "lawns"],
        difficulty: "easy",
        activities: ["walking", "socializing", "photography"],
        rating: null,
        reviews: null,
        location: "Pazundaung Township",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Pazundaung+Park+Pazundaung+Township"
    },
    {
        id: 10,
        name: "Sayar San Park",
        description: "Simple community park with shaded benches and quiet walking areas.",
        image: "IMG/Sayar_san_park.webp",
        images: ["IMG/sayar_san_park(1_better_resolute).webp", "IMG/sayar_san_park(2_better_resolute).webp", "IMG/sayar_san_park(3_better_resolute).webp"],
        features: ["benches", "shade"],
        difficulty: "easy",
        activities: ["walking", "reading", "socializing"],
        rating: null,
        reviews: null,
        location: "Hlaing Township",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Sayar+San+Park+Hlaing+Township"
    },
    {
        id: 11,
        name: "Shwe Pauk Kan Park",
        description: "Small peaceful local park perfect for quiet walks and relaxation.",
        image: "IMG/SHwe_paukkan_park.webp",
        images: ["", "IMG/shwe_pauk_kan_park(3_better_resolute_ig).webp", "IMG/shwe_pauk_kan_park(3_better_and_best_one_with_better_resolute).webp"],
        features: ["lawns", "benches"],
        difficulty: "easy",
        activities: ["walking", "relaxation"],
        rating: null,
        reviews: null,
        location: "Shwe Pauk Kan Township",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Shwe+Pauk+Kan+Park+Shwe+Pauk+Kan+Township"
    },
    {
        id: 12,
        name: "South Dagon Park",
        description: "Community park with jogging paths and small playground areas.",
        image: "IMG/South_dagon_park.jpg",
        images: ["", "", ""],
        features: ["jogging-path", "playground"],
        difficulty: "easy",
        activities: ["jogging", "family-walks", "meetups"],
        rating: null,
        reviews: null,
        location: "South Dagon Township",
        size: "moderate",
        googleMap: "https://www.google.com/maps/search/?api=1&query=South+Dagon+Park+South+Dagon+Township"
    },
    {
        id: 13,
        name: "Thakhin Mya Park",
        description: "Quiet park featuring the statue of Thakhin Mya and open walking paths.",
        image: "IMG/Thakin_mya_park.jfif",
        images: ["IMG/thakinmya_park(1_better_resolute)", "IMG/thakinmya_park(2_better_resolute).webp", "IMG/thakinmya_park(3_better_resolute).webp"],
        features: ["statue", "lawns"],
        difficulty: "easy",
        activities: ["walking", "relaxation", "photography"],
        rating: null,
        reviews: null,
        location: "Central Yangon",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Thakhin+Mya+Park+Central+Yangon"
    },
    {
        id: 14,
        name: "Theingottara Park",
        description: "Calm park with a pond, shaded paths, and a peaceful atmosphere.",
        image: "IMG/Theingottara_park.webp",
        images: ["IMG/Theingottara_park(1_better_resolute).webp", "IMG/Theingottara_park(2_better_resolute).webp", "IMG/Theingottara_park(3_better_resolute).webp"],
        features: ["pond", "shaded-paths"],
        difficulty: "easy",
        activities: ["walking", "meditation", "photography"],
        rating: null,
        reviews: null,
        location: "Theingottara Township",
        size: "moderate",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Theingottara+Park+Theingottara+Township"
    },
    {
        id: 15,
        name: "Thuwanna Park",
        description: "Local community park with green lawns and shady trees.",
        image: "IMG/Thuwunna_park.jpg",
        images: ["", "", ""],
        features: ["lawns", "trees"],
        difficulty: "easy",
        activities: ["walking", "jogging", "community-gatherings"],
        rating: null,
        reviews: null,
        location: "Thuwanna Township",
        size: "moderate",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Thuwanna+Park+Thuwanna+Township"
    },
    {
        id: 16,
        name: "Thu Mingalar Park",
        description: "Quiet community green space with benches and open lawns.",
        image: "IMG/Thu_mingalar_park.webp",
        images: ["IMG/thu_mingalar_park(1_better_resolute)", "IMG/thu_mingalar_park(2_better_resolute).webp", "IMG/thu_mingalar_park(3_better_resolute).webp"],
        features: ["benches", "lawns"],
        difficulty: "easy",
        activities: ["walking", "reading", "meetups"],
        rating: null,
        reviews: null,
        location: "North Yangon",
        size: "small",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Thu+Mingalar+Park+North+Yangon"
    },
    {
        id: 17,
        name: "Tine Yin Thar Kyay Ywar",
        description: "Small shaded park ideal for peaceful walks and socializing.",
        image: "IMG/National_Races_Village_Park.webp",
        images: ["IMG/National_Races_Village_Park.webp", "IMG/national_race_village(2_better_resolute).webp", "IMG/national_race_village(3_better_resolute).jfif"],
        features: ["trees", "shade"],
        difficulty: "easy",
        activities: ["walking", "relaxation", "local-gatherings"],
        rating: null,
        reviews: null,
        location: "Outer Yangon",
        size: "moderate",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Tine+Yin+Thar+Kyay+Ywar+Outer+Yangon"
    },
    {
        id: 18,
        name: "Yankin Park",
        description: "Well-known community park with flower beds, playgrounds, and jogging paths.",
        image: "IMG/Yankin_park.webp",
        images: ["IMG/Yankin_park(1_better_resolute).webp", "IMG/Yankin_park(2_better_resolute).webp", "IMG/Yankin_park(3_better_resolute).webp"],
        features: ["flowers", "playground", "jogging-path"],
        difficulty: "easy",
        activities: ["jogging", "family-outings", "photography"],
        rating: null,
        reviews: null,
        location: "Yankin Township",
        size: "moderate",
        googleMap: "https://www.google.com/maps/search/?api=1&query=Yankin+Park+Yankin+Township"
    }
];

// expose parksData for other scripts (favorites renderer)
try { window.parksData = parksData; } catch (e) {}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavByUrl();
    attachNavLinkHandlers();
    renderParkDetail();
});

// (Image editor removed) In-page image editor and sessionStorage helpers removed per user request.

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

// Helper: mark active nav link
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

// Collapse mobile navbar
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

// Render park detail
function renderParkDetail() {
    const detailContent = document.getElementById('parkDetailContent');
    if (!detailContent) return;

    let parkId = null;
    try {
        parkId = sessionStorage.getItem('parkDetailId');
        if (parkId) sessionStorage.removeItem('parkDetailId');
    } catch (e) {
        console.warn('Could not read parkDetailId from sessionStorage', e);
    }

    if (!parkId) {
        const params = new URLSearchParams(window.location.search);
        if (params.has('id')) parkId = params.get('id');
    }

    if (!parkId) {
        detailContent.innerHTML = '<div class="glass-card p-4"><h2>Park not found</h2><p class="text-secondary">Please select a park from the Parks page.</p><a class="btn btn-glass" href="parks-standalone.html">Back to Parks</a></div>';
        return;
    }

    const park = parksData.find(p => p.id === Number(parkId));
    if (!park) {
        detailContent.innerHTML = '<div class="glass-card p-4"><h2>Park not found</h2><p class="text-secondary">Please select a park from the Parks page.</p><a class="btn btn-glass" href="parks-standalone.html">Back to Parks</a></div>';
        return;
    }

    // Build a directions URL: prefer explicit googleMap, fallback to Google Maps search
    const directionsUrl = (park.googleMap && park.googleMap.trim())
        ? park.googleMap
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(park.name + ' ' + park.location)}`;
    // Build a simple embeddable map src (uses Google Maps public embed via q param)
    const embedMapSrc = `https://www.google.com/maps?q=${encodeURIComponent(park.name + ' ' + park.location)}&output=embed`;
    // Prepare images array (support old `image` field)
    let images = (Array.isArray(park.images) && park.images.length) ? park.images.slice() : (park.image ? [park.image] : []);
    // Filter out empty/falsy entries so blanks don't render as broken images
    images = images.filter(src => typeof src === 'string' && src.trim());
    // If still none, fall back to the single `image` field if present
    if (images.length === 0 && park.image) images = [park.image];

    // Carousel markup if multiple images, otherwise a single hero image
    let mediaHtml = '';
    if (images.length > 1) {
        const indicators = images.map((_, i) => `
            <button type="button" data-bs-target="#parkCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i+1}"></button>
        `).join('');

        const items = images.map((img, i) => `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="${img}" class="d-block w-100 park-hero-img" alt="${park.name} image ${i+1}">
            </div>
        `).join('');

        mediaHtml = `
        <div id="parkCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
            <div class="carousel-indicators">
                ${indicators}
            </div>
            <div class="carousel-inner">
                ${items}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#parkCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#parkCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div class="position-absolute bottom-0 start-0 w-100 p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);">
                <h1 class="text-white mb-2">${park.name}</h1>
                <div class="d-flex gap-3 text-white">
                    <span><i class="bi bi-star-fill text-warning me-1"></i>${park.rating} (${park.reviews} reviews)</span>
                    <span><i class="bi bi-geo-alt me-1"></i>${park.location}</span>
                </div>
            </div>
        </div>
        `;
    } else if (images.length === 1) {
        mediaHtml = `
        <div class="position-relative mb-4">
            <img src="${images[0]}" alt="${park.name}" class="park-hero-img">
            <div class="position-absolute bottom-0 start-0 w-100 p-4" style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                <h1 class="text-white mb-2">${park.name}</h1>
                <div class="d-flex gap-3 text-white">
                    <span><i class="bi bi-star-fill text-warning me-1"></i>${park.rating} (${park.reviews} reviews)</span>
                    <span><i class="bi bi-geo-alt me-1"></i>${park.location}</span>
                </div>
            </div>
        </div>
        `;
    }

    detailContent.innerHTML = `
        <div class="pd-detail-wrapper">
        <div class="mb-4">
            <a class="btn btn-glass" href="parks-standalone.html">
                <i class="bi bi-arrow-left me-2"></i> Back to Parks
            </a>
        </div>
        ${mediaHtml}
        
        <div class="glass-card mb-4 pd-embed-map">
            <h3 class="h5 mb-3">Location</h3>
            <div class="pd-map-wrap position-relative">
                <iframe id="pd-embed-map-iframe" src="${embedMapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" aria-label="Map showing ${park.name}"></iframe>
                <!-- Our own overlay link so we can style the "View larger map" control outside the cross-origin iframe -->
                <div class="pd-map-overlay">
                    <a class="pd-map-link" href="${directionsUrl}" target="_blank" rel="noopener">View larger map</a>
                </div>
            </div>
            <div class="small text-secondary mt-2"><a href="${directionsUrl}" target="_blank" rel="noopener">Open in Google Maps</a></div>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-8">
                <div class="glass-card mb-4">
                    <h2 class="h4 mb-3">About this park</h2>
                    <p class="text-secondary mb-4">${park.description}</p>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-badge bg-gradient-custom">
                                    <i class="bi bi-tree"></i>
                                </div>
                                <div>
                                    <div class="small text-secondary">Size</div>
                                    <div class="fw-semibold">${park.size}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex align-items-center gap-3">
                                <div class="icon-badge bg-gradient-custom">
                                    <i class="bi bi-clock"></i>
                                </div>
                                <div>
                                    <div class="small text-secondary">Difficulty</div>
                                    <div class="fw-semibold text-capitalize">${park.difficulty}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="glass-card">
                    <h3 class="h5 mb-3">Activities & Features</h3>
                    <div class="mb-3">
                        <div class="small text-secondary mb-2">Popular Activities</div>
                        <div class="d-flex flex-wrap gap-2">
                            ${park.activities.map(a => `
                                <span class="badge" style="background: linear-gradient(135deg, var(--emerald-500), var(--teal-500)); color: white;">${a}</span>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <div class="small text-secondary mb-2">Available Features</div>
                        <div class="d-flex flex-wrap gap-2">
                            ${park.features.map(f => `
                                <span class="badge bg-light text-dark">${f}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-4">
                <div class="glass-card sticky-top" style="top: 100px;">
                    <h3 class="h5 mb-3">Plan Your Visit</h3>
                    <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn btn-gradient d-block w-100 mb-2">
                        <i class="bi bi-geo-alt me-2"></i> Get Directions
                    </a>
                    <div class="mb-3">
                        <div class="small text-secondary mb-1">Location</div>
                        <div class="fw-semibold">${park.location}</div>
                    </div>
                    <button id="detailFavBtn" class="btn btn-glass w-100 mb-4" data-id="${park.id}" title="Save to My Parks">
                        <i class="bi bi-heart me-2"></i> Save to My Parks
                    </button>
                    <hr class="my-3">
                    <div class="mb-3">
                        <div class="small text-secondary mb-1">Best time to visit</div>
                        <div>Early morning or late afternoon</div>
                    </div>
                    <div class="mb-3">
                        <div class="small text-secondary mb-1">Parking</div>
                        <div>Free parking available</div>
                    </div>
                    <div>
                        <div class="small text-secondary mb-1">Admission</div>
                        <div>Free entry</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `;
    // Apply size class based on `park.size` (small / moderate / large)
    (function applySizeFromPark() {
        function getSizeFromPark(p) {
            if (!p || !p.size) return 'medium';
            const s = ('' + p.size).toLowerCase();
            if (s.includes('small')) return 'small';
            if (s.includes('moderate') || s.includes('medium')) return 'medium';
            if (s.includes('large') || s.includes('big') || s.includes('huge')) return 'large';
            return 'medium';
        }

        function applySizeClass(size) {
            const wrapper = document.querySelector('.pd-detail-wrapper');
            if (!wrapper) return;
            wrapper.classList.remove('pd-size-small', 'pd-size-medium', 'pd-size-large');
            wrapper.classList.add('pd-size-' + size);
        }

        const size = getSizeFromPark(park);
        applySizeClass(size);
    })();

    // (Image editor handlers removed)
}

/* Favorites helpers for Park Detail page (local copy uses same key `pf_favorites`) */
function getFavoritesLocal() {
    try { const raw = localStorage.getItem('pf_favorites'); return raw ? JSON.parse(raw) : []; } catch (e) { return []; }
}
function saveFavoritesLocal(arr) { try { localStorage.setItem('pf_favorites', JSON.stringify(arr)); } catch (e) {} }
function isFavoriteLocal(id) { return getFavoritesLocal().includes(id); }
function toggleFavoriteLocal(id) {
    const favs = getFavoritesLocal();
    const idx = favs.indexOf(id);
    if (idx === -1) {
        if (favs.length >= 4) {
            try { alert('You already have 4 favorited in the highlights, Please unfavorite something to add more'); } catch (e) {}
            return false;
        }
        favs.unshift(id);
    } else {
        favs.splice(idx,1);
    }
    saveFavoritesLocal(favs);
    if (window.renderSiteFavorites) window.renderSiteFavorites();
    return true;
}

function renderFavoritesFooterLocal() {
    const container = document.getElementById('favoritesRow');
    if (!container) return;
    const favs = getFavoritesLocal().slice(0,4);
    container.innerHTML = favs.map(id => {
        const park = parksData.find(p => p.id === id);
        if (!park) return '';
        return `
            <a class="footer-thumb" href="parkDetail-standalone.html?id=${park.id}">
                <div class="info-card glow-card footer-fav">
                    <div class="caption-top">${park.name.split(' ')[0]}</div>
                    <img src="${park.image}" alt="${park.name}">
                </div>
            </a>
        `;
    }).join('');
}

// Wire up the Save button after rendering the detail (poll until the button exists)
(function initDetailFav(){
    const btn = document.getElementById('detailFavBtn');
    if (!btn) {
        setTimeout(initDetailFav, 80);
        return;
    }

    const parkId = Number(btn.getAttribute('data-id'));
    function updateBtnUI() {
        if (isFavoriteLocal(parkId)) {
            btn.innerHTML = `<i class="bi bi-heart-fill text-danger me-2"></i> Saved`;
        } else {
            btn.innerHTML = `<i class="bi bi-heart me-2"></i> Save to My Parks`;
        }
    }

    // initial state
    updateBtnUI();
    if (window.renderSiteFavorites) window.renderSiteFavorites();

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const changed = toggleFavoriteLocal(parkId);
        if (changed) {
            updateBtnUI();
            if (window.renderSiteFavorites) window.renderSiteFavorites();
        }
        // if not changed (limit reached), toggleFavoriteLocal already alerted the user
    });
})();


// Hover effect
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
