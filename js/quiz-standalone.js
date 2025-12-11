/* ===== QUIZ PAGE - COMPLETE STANDALONE JAVASCRIPT ===== */

// Quiz data state
const quizData = {
    activities: [],
    difficulty: '',
    features: []
};

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavByUrl();
    attachNavLinkHandlers();
    attachActivityHandlers();
    attachDifficultyHandlers();
    attachFeatureHandlers();
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

// Activity selection handlers
function attachActivityHandlers() {
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', function() {
            const activity = this.dataset.activity;
            this.classList.toggle('selected');

            if (this.classList.contains('selected')) {
                quizData.activities.push(activity);
            } else {
                quizData.activities = quizData.activities.filter(a => a !== activity);
            }

            const step1Next = document.getElementById('step1Next');
            if (step1Next) step1Next.disabled = quizData.activities.length === 0;
        });
    });
}

// Difficulty selection handlers
function attachDifficultyHandlers() {
    document.querySelectorAll('.difficulty-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.difficulty-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            quizData.difficulty = this.dataset.difficulty;
            const step2Next = document.getElementById('step2Next');
            if (step2Next) step2Next.disabled = false;
        });
    });
}

// Feature selection handlers
function attachFeatureHandlers() {
    document.querySelectorAll('.feature-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const feature = this.dataset.feature;
            this.classList.toggle('selected');

            if (this.classList.contains('selected')) {
                quizData.features.push(feature);
            } else {
                quizData.features = quizData.features.filter(f => f !== feature);
            }

            const step3Next = document.getElementById('step3Next');
            if (step3Next) step3Next.disabled = quizData.features.length === 0;
        });
    });
}

// Navigate to next quiz step
function nextQuizStep(step) {
    const steps = document.querySelectorAll('.quiz-step');
    if (!steps || steps.length === 0) return;
    steps.forEach(s => s.classList.remove('active'));
    const target = document.getElementById('quizStep' + step);
    if (target) target.classList.add('active');
}

// Complete quiz and navigate to parks
function completeQuiz() {
    try {
        sessionStorage.setItem('quizPreferences', JSON.stringify(quizData));
    } catch (e) {
        console.warn('Could not save quiz preferences to sessionStorage', e);
    }
    window.location.href = 'parks-standalone.html';
}
