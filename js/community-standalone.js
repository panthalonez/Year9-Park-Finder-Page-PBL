/* ===== COMMUNITY PAGE - COMPLETE STANDALONE JAVASCRIPT ===== */

// ===== Community Posts Data =====
const communityPostsData = [
    {
        id: 1,
        author: 'Aye Thandar',
        avatar: 'AT',
        timeAgo: '3 hours ago',
        park: 'Hlawga National Park',
        text: 'Spotted deer and lots of birds on the morning trail — peaceful and perfect for photography. Bring binoculars! 📷🦌',
        image: 'IMG/Hlawgs_park.jfif',
        likes: 128,
        comments: 14
    },
    {
        id: 2,
        author: 'Ko Min',
        avatar: 'KM',
        timeAgo: '5 hours ago',
        park: 'Inya Park',
        text: 'A lovely afternoon by the lake. Great for a quick run and some paddle-boat time with friends. 🌊🏃‍♂️',
        image: 'IMG/Inya_park.jfif',
        likes: 74,
        comments: 9
    },
    {
        id: 3,
        author: 'Su Wai',
        avatar: 'SW',
        timeAgo: '1 day ago',
        park: 'Kandawgyi Lake Park',
        text: 'Sunset was beautiful today — lots of families and photographers. The Karaweik Palace looks amazing from the promenade. 🌅',
        image: 'IMG/Kandawgyi_park.jfif',
        likes: 203,
        comments: 27
    },
    {
        id: 4,
        author: 'Moe Lin',
        avatar: 'ML',
        timeAgo: '2 days ago',
        park: 'Maha Bandula Park',
        text: 'Calm spot in the city centre — perfect for reading under a tree. Found a quiet bench near the fountain. 🍃📚',
        image: 'IMG/Mahar_bandula.jfif',
        likes: 46,
        comments: 6
    },
    {
        id: 5,
        author: 'Nandar Hla',
        avatar: 'NH',
        timeAgo: '4 hours ago',
        park: 'Thakin Mya Park',
        text: 'Great playground and shady paths — took the kids for a picnic and they loved the open lawns. 🧺👨‍👩‍👧‍👦',
        image: 'IMG/Thakin_mya_park.jfif',
        likes: 58,
        comments: 11
    },
    {
        id: 6,
        author: 'Htet Aung',
        avatar: 'HA',
        timeAgo: '30 minutes ago',
        park: 'Yankin Park',
        text: 'Quick evening walk — spotted colorful flowers and a community yoga session. Lovely vibe. 🌸🧘',
        image: 'IMG/Yankin_park.webp',
        likes: 19,
        comments: 3
    }
];

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavByUrl();
    attachNavLinkHandlers();
    loadCommunityPosts();
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

// Load and display community posts
function loadCommunityPosts() {
    const postsContainer = document.getElementById('communityPosts');
    if (!postsContainer) return;
    
    postsContainer.innerHTML = communityPostsData.map(post => `
        <div class="post-card">
            <div class="d-flex gap-3 mb-3">
                <div class="avatar-circle bg-gradient-custom">${post.avatar}</div>
                <div class="flex-fill">
                    <div class="d-flex justify-content-between mb-1">
                        <div class="fw-semibold">${post.author}</div>
                        <div class="small text-secondary">${post.timeAgo}</div>
                    </div>
                    <span class="badge bg-light text-dark small">${post.park}</span>
                </div>
            </div>
            <p class="mb-3">${post.text}</p>
            <img src="${post.image}" alt="Post image" class="post-img mb-3">
            <div class="d-flex gap-3 pt-3 border-top">
                <button class="btn btn-glass btn-sm">
                    <i class="bi bi-hand-thumbs-up me-1"></i> ${post.likes}
                </button>
                <button class="btn btn-glass btn-sm">
                    <i class="bi bi-chat me-1"></i> ${post.comments}
                </button>
            </div>
        </div>
    `).join('');
}

// Hover effects
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
