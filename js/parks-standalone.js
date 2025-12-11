const parksData = [
    {
        id: 1,
        name: "Bandula Park (Maha Bandula Park)",
        description: "Central Yangon park featuring the Independence Monument, colonial architecture views, and shaded lawns perfect for relaxing.",
        image: "IMG/Mahar_bandula.jfif",
        features: ["lawns", "monument", "city-view"],
        difficulty: "easy",
        activities: ["walking", "people-watching", "tai-chi"],
        rating: null,
        reviews: null,
        location: "Downtown Yangon (near Sule Pagoda)",
        size: "N/A"
    },
    {
        id: 2,
        name: "General Aung San Park",
        description: "Peaceful green park featuring the statue of General Aung San, quiet paths, and clean lawns.",
        image: "IMG/General_aungsan_park.jfif",
        features: ["statue", "lawns", "shaded-paths"],
        difficulty: "easy",
        activities: ["walking", "photography", "relaxation"],
        rating: null,
        reviews: null,
        location: "Downtown Yangon (near Pyay Road)",
        size: "N/A"
    },
    {
        id: 3,
        name: "Hlawga National Park",
        description: "Large nature reserve with forest trails, wildlife, a small zoo, and a scenic lake.",
        image: "IMG/Hlawgs_park.jfif",
        features: ["forest", "wildlife", "lake", "trails"],
        difficulty: "easy",
        activities: ["hiking", "wildlife", "family-trips", "birdwatching"],
        rating: null,
        reviews: null,
        location: "Yangon outskirts (near Insein)",
        size: "N/A"
    },
    {
        id: 4,
        name: "Inya Park / Inya Lake",
        description: "Popular scenic lake with walking paths, jogging routes, and beautiful sunset spots.",
        image: "IMG/Inya_park.jfif",
        features: ["lake", "paths", "sunset"],
        difficulty: "easy",
        activities: ["jogging", "walking", "picnic", "photography"],
        rating: null,
        reviews: null,
        location: "North Yangon",
        size: "N/A"
    },
    {
        id: 5,
        name: "Insein Park",
        description: "Quiet local park with flower beds, shaded benches, and peaceful walking routes.",
        image: "IMG/insane_park.jfif",
        features: ["flowers", "benches", "lawns"],
        difficulty: "easy",
        activities: ["walking", "reading", "relaxation"],
        rating: null,
        reviews: null,
        location: "Insein Township",
        size: "N/A"
    },
    {
        id: 6,
        name: "Kan Taw Mingalar Park",
        description: "Small community park with shaded trees and open lawns, ideal for casual visits.",
        image: "IMG/Kandaw_mingalar_park.jfif",
        features: ["trees", "lawns", "benches"],
        difficulty: "easy",
        activities: ["walking", "family-time", "meetups"],
        rating: null,
        reviews: null,
        location: "Kan Taw area",
        size: "N/A"
    },
    {
        id: 7,
        name: "Kandawgyi Lake Park",
        description: "Scenic lake park featuring Karaweik Palace, wooden boardwalks, and great photography spots.",
        image: "IMG/Kandawgyi_park.jfif",
        features: ["lake", "boardwalk", "palace"],
        difficulty: "easy",
        activities: ["walking", "photography", "dining"],
        rating: null,
        reviews: null,
        location: "Central Yangon",
        size: "N/A"
    },
    {
        id: 8,
        name: "Okkala Thiri Park",
        description: "Local community green area with benches and grassy spaces for relaxation.",
        image: "IMG/Okkala_thiri_park.webp",
        features: ["lawns", "benches"],
        difficulty: "easy",
        activities: ["jogging", "relaxation", "quiet-meetups"],
        rating: null,
        reviews: null,
        location: "Okkala Township",
        size: "N/A"
    },
    {
        id: 9,
        name: "Pazundaung Park",
        description: "Small peaceful park with shaded trees and simple walking paths.",
        image: "IMG/pazungdaung_park.webp",
        features: ["trees", "lawns"],
        difficulty: "easy",
        activities: ["walking", "socializing", "photography"],
        rating: null,
        reviews: null,
        location: "Pazundaung Township",
        size: "N/A"
    },
    {
        id: 10,
        name: "Sayar San Park",
        description: "Simple community park with shaded benches and quiet walking areas.",
        image: "IMG/Sayar_san_park.webp",
        features: ["benches", "shade"],
        difficulty: "easy",
        activities: ["walking", "reading", "socializing"],
        rating: null,
        reviews: null,
        location: "Hlaing Township",
        size: "N/A"
    },
    {
        id: 11,
        name: "Shwe Pauk Kan Park",
        description: "Small peaceful local park perfect for quiet walks and relaxation.",
        image: "IMG/SHwe_paukkan_park.webp",
        features: ["lawns", "benches"],
        difficulty: "easy",
        activities: ["walking", "relaxation"],
        rating: null,
        reviews: null,
        location: "Shwe Pauk Kan Township",
        size: "N/A"
    },
    {
        id: 12,
        name: "South Dagon Park",
        description: "Community park with jogging paths and small playground areas.",
        image: "IMG/South_dagon_park.jpg",
        features: ["jogging-path", "playground"],
        difficulty: "easy",
        activities: ["jogging", "family-walks", "meetups"],
        rating: null,
        reviews: null,
        location: "South Dagon Township",
        size: "N/A"
    },
    {
        id: 13,
        name: "Thakhin Mya Park",
        description: "Quiet park featuring the statue of Thakhin Mya and open walking paths.",
        image: "IMG/Thakin_mya_park.jfif",
        features: ["statue", "lawns"],
        difficulty: "easy",
        activities: ["walking", "relaxation", "photography"],
        rating: null,
        reviews: null,
        location: "Central Yangon",
        size: "N/A"
    },
    {
        id: 14,
        name: "Theingottara Park",
        description: "Calm park with a pond, shaded paths, and a peaceful atmosphere.",
        image: "IMG/Theingottara_park.webp",
        features: ["pond", "shaded-paths"],
        difficulty: "easy",
        activities: ["walking", "meditation", "photography"],
        rating: null,
        reviews: null,
        location: "Theingottara Township",
        size: "N/A"
    },
    {
        id: 15,
        name: "Thuwanna Park",
        description: "Local community park with green lawns and shady trees.",
        image: "IMG/Thuwunna_park.jpg",
        features: ["lawns", "trees"],
        difficulty: "easy",
        activities: ["walking", "jogging", "community-gatherings"],
        rating: null,
        reviews: null,
        location: "Thuwanna Township",
        size: "N/A"
    },
    {
        id: 16,
        name: "Thu Mingalar Park",
        description: "Quiet community green space with benches and open lawns.",
        image: "IMG/Thu_mingalar_park.webp",
        features: ["benches", "lawns"],
        difficulty: "easy",
        activities: ["walking", "reading", "meetups"],
        rating: null,
        reviews: null,
        location: "North Yangon",
        size: "N/A"
    },
    {
        id: 17,
        name: "Tine Yin Thar Kyay Ywar",
        description: "Small shaded park ideal for peaceful walks and socializing.",
        image: "IMG/National_Races_Village_Park.webp",
        features: ["trees", "shade"],
        difficulty: "easy",
        activities: ["walking", "relaxation", "local-gatherings"],
        rating: null,
        reviews: null,
        location: "Outer Yangon",
        size: "N/A"
    },
    {
        id: 18,
        name: "Yankin Park",
        description: "Well-known community park with flower beds, playgrounds, and jogging paths.",
        image: "IMG/Yankin_park.webp",
        features: ["flowers", "playground", "jogging-path"],
        difficulty: "easy",
        activities: ["jogging", "family-outings", "photography"],
        rating: null,
        reviews: null,
        location: "Yankin Township",
        size: "N/A"
    }
];

// expose parksData for other scripts (favorites renderer)
try { window.parksData = parksData; } catch (e) {}

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavByUrl();
    attachNavLinkHandlers();
    loadParks();
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

// Calculate match score for a park based on preferences
function calculateMatchScore(park, preferences) {
    if (!preferences || !preferences.activities) return 0;
    
    let score = 0;
    
    // Activity match
    const activityMatches = preferences.activities.filter(a => park.activities.includes(a)).length;
    score += activityMatches * 20;
    
    // Difficulty match
    if (park.difficulty === preferences.difficulty) {
        score += 30;
    }
    
    // Feature match (reduced weight per feature to avoid single-feature = 10%)
    const featureMatches = preferences.features.filter(f => park.features.includes(f)).length;
    score += featureMatches * 5; // each matched feature now contributes 5 points
    
    return Math.min(score, 100);
}

// Load and display parks
function loadParks(preferences = null) {
    const parksGrid = document.getElementById('parksGrid');
    if (!parksGrid) return;

    // If preferences are not provided, try to load from sessionStorage
    if (!preferences) {
        try {
            const stored = sessionStorage.getItem('quizPreferences');
            if (stored) {
                preferences = JSON.parse(stored);
                sessionStorage.removeItem('quizPreferences');
                const subtitle = document.getElementById('parksSubtitle');
                if (subtitle) subtitle.textContent = 'Parks are ranked based on how well they match your preferences';
            }
        } catch (e) {
            console.warn('Could not read quizPreferences from sessionStorage', e);
        }
    }

    // Calculate match scores and sort
    let parks = parksData.map(park => ({
        ...park,
        matchScore: calculateMatchScore(park, preferences)
    }));

    if (preferences) {
        parks.sort((a, b) => b.matchScore - a.matchScore);
    }

    parksGrid.innerHTML = parks.map((park, index) => {
        const favs = getFavorites();
        const isFav = favs.includes(park.id);
        return `
        <div class="col-md-6 col-lg-4" style="animation-delay: ${index * 0.1}s">
                    <div class="park-card" data-park-id="${park.id}">
                        <div class="position-relative">
                            <img src="${park.image}" alt="${park.name}" class="park-card-img">
                            ${preferences && park.matchScore > 0 ? `
                                <span class="badge match-badge position-absolute top-0 end-0 m-3">
                                    <i class="bi bi-graph-up-arrow me-1"></i>${park.matchScore}% Match
                                </span>
                            ` : ''}
                            <span class="badge difficulty-badge position-absolute bottom-0 start-0 m-3 text-capitalize">
                                ${park.difficulty}
                            </span>
                        </div>
                        <div class="park-card-body">
                            <h3 class="h5 mb-2"><span class="park-detail-link" data-id="${park.id}">${park.name}</span></h3>
                            <p class="text-secondary small mb-3">${park.description}</p>
                            <div class="d-flex gap-3 mb-3 small text-secondary">
                                <span><i class="bi bi-star-fill text-warning me-1"></i>${park.rating}</span>
                                <span><i class="bi bi-geo-alt me-1"></i>${park.location}</span>
                            </div>
                            <div class="d-flex flex-wrap gap-2">
                                ${park.features.slice(0, 3).map(f => `
                                    <span class="badge bg-light text-dark">${f}</span>
                                `).join('')}
                                ${park.features.length > 3 ? `
                                    <span class="badge bg-light text-dark">+${park.features.length - 3} more</span>
                                ` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }).join('');

    // Make the whole card clickable to open detail (click anywhere on the card)
    document.querySelectorAll('.park-card').forEach(card => {
        card.addEventListener('click', function(e) {
            const id = Number(this.getAttribute('data-park-id'));
            showParkDetail(id);
        });
    });

    // Make the name clickable (non-anchor) to open detail
    document.querySelectorAll('.park-detail-link').forEach(el => {
        el.addEventListener('click', function(e) {
            const id = Number(this.getAttribute('data-id'));
            showParkDetail(id);
        });
    });

    // Initial render of favorites in footer
    renderFavoritesFooter();
}

// Favorites helpers (persisted in localStorage)
function getFavorites() {
    try {
        const raw = localStorage.getItem('pf_favorites');
        return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
}

function saveFavorites(arr) {
    try { localStorage.setItem('pf_favorites', JSON.stringify(arr)); } catch (e) {}
}

function isFavorite(id) {
    return getFavorites().includes(id);
}

function toggleFavorite(id) {
    const favs = getFavorites();
    const idx = favs.indexOf(id);
    if (idx === -1) {
        // add to front (most recent) — enforce a maximum of 4 favorites
        if (favs.length >= 4) {
            try { alert('You already have 4 favorited in the highlights, Please unfavorite something to add more'); } catch (e) {}
            return false;
        }
        favs.unshift(id);
    } else {
        favs.splice(idx,1);
    }
    saveFavorites(favs);
    // update global renderer if available
    if (window.renderSiteFavorites) window.renderSiteFavorites();
    return true;
}

function updateFavButton(btn, id) {
    const icon = btn.querySelector('i');
    if (!icon) return;
    if (isFavorite(id)) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill','text-danger');
    } else {
        icon.classList.remove('bi-heart-fill','text-danger');
        icon.classList.add('bi-heart');
    }
}

// Render up to 4 favorites in the footer
function renderFavoritesFooter() {
    const container = document.getElementById('favoritesRow');
    if (!container) return;
    const favs = getFavorites().slice(0,4);
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

// Show park detail (navigate to parkDetail page)
function showParkDetail(parkId) {
    const park = parksData.find(p => p.id === parkId);
    if (!park) return;

    try {
        sessionStorage.setItem('parkDetailId', String(parkId));
    } catch (e) {
        console.warn('Could not save parkDetailId to sessionStorage', e);
    }
    window.location.href = 'parkDetail-standalone.html';
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

// Parallax effect for neon particles
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.neon-particles span');
    
    particles.forEach((particle, index) => {
        const speed = (index + 1) * 0.3;
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

