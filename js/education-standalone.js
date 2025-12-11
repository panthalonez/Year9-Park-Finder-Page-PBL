/* ===== EDUCATION PAGE - COMPLETE STANDALONE JAVASCRIPT ===== */

// ===== Education Content Data =====
const ecosystemsData = [
    {
        title: 'Bandula Park (Maha Bandula Park)',
        description: 'Learn about the diverse life within woodland environments',
        image: 'IMG/Mahar_bandula.jfif',
        facts: [
     'Maha Bandula Park is located in downtown Yangon near Sule Pagoda',
'It is named after the Burmese national hero General Maha Bandula',
'The park is a popular spot for morning walks and local gatherings',
'It features well-maintained lawns, walking paths, and shaded areas',
'There is a large central fountain and several statues, including a statue of Maha Bandula',
'The park is often used for public events, demonstrations, and cultural celebrations',
'It provides a green space for relaxation amidst the bustling city center',
'It is easily accessible and surrounded by important buildings, making it a key landmark in Yangon'

        ]
    },
    {
        title: 'General Aung San Park',
        description: 'Discover the importance of wetlands and water features',
        image: 'IMG/General_aungsan_park.jfif',
        facts: [
         'General Aung San Park is located in downtown Yangon near the Yangon City Hall',
'It is named after General Aung San, the father of modern Myanmar',
'The park features a large statue of General Aung San at its center',
'It is a popular place for relaxation, morning exercises, and family outings',
'The park has well-maintained gardens, walking paths, and benches',
'It hosts public events and national celebrations on special occasions',
'The park provides a green space amidst the busy urban environment',
'It is easily accessible and surrounded by important government and commercial buildings'
            
        ]
    },
    {
        title: 'Hlawga National Park',
        description: 'Explore alpine and highland ecological zones',
        image: 'IMG/Hlawgs_park.jfif',
        facts: [
        'Hlawga National Park is located about 25 km north of Yangon',
'It was established in 1982 as a wildlife park and nature reserve',
'The park covers approximately 1,250 acres of forest, wetlands, and lakes',
'It is home to deer, monkeys, wild boars, and numerous bird species',
'The park features hiking trails, picnic areas, and a safari-like experience',
'Visitors can enjoy boating, cycling, and nature photography',
'Hlawga serves as an important site for environmental education and wildlife conservation',
'It is a popular weekend destination for families and tourists seeking outdoor recreation'

        ]
    },
        {
        title: 'Inya Park / Inya Lake',
        description: 'Learn about the diverse life within woodland environments',
        image: 'IMG/Inya_park.jfif',
        facts: [
           'Inya Park is located in the heart of Yangon near Inya Lake',
'The park and lake provide a popular spot for jogging, picnics, and relaxation',
'Inya Lake is the largest lake in Yangon and a key water reservoir',
'The park features landscaped gardens, walking paths, and benches',
'It is home to various bird species and small wildlife',
'Visitors often enjoy paddle boating and scenic views of the lake',
'The park is a peaceful retreat from the busy city life',
'It hosts occasional community events and recreational activities'

        ]
    },
    {
        title: 'Insein Park',
        description: 'Discover the importance of wetlands and water features',
        image: 'IMG/insane_park.jfif',
        facts: [
'Insein Park is a local urban park in Yangon',
'The park features open green spaces for recreation and relaxation',
'It has walking and jogging paths suitable for all ages',
'Visitors can enjoy playgrounds and outdoor exercise equipment',
'The park is home to various bird species and small wildlife',
'It provides shaded areas with benches for picnics and rest',
'Community events and outdoor activities are occasionally held here',
'Insein Park contributes to cleaner air and a healthier urban environment'

        ]
    },
        {
        title: 'Kan Taw Mingalar Park',
        description: 'Learn about the diverse life within woodland environments',
        image: 'IMG/Kandaw_mingalar_park.jfif',
        facts: [
        'Kan Taw Mingalar Park is a popular recreational park in Yangon',
'The park features large green lawns and shaded walking paths',
'Visitors can enjoy jogging, cycling, and outdoor exercises',
'It has playgrounds for children and seating areas for families',
'Various local birds and small wildlife inhabit the park',
'Community events and gatherings are often organized here',
'The park provides a calm and relaxing environment for all',
'Kan Taw Mingalar Park helps improve air quality and urban greenery'

        ]
    },
    {
        title: 'Kandawgyi Lake Park',
        description: 'Discover the importance of wetlands and water features',
        image: 'IMG/Kandawgyi_park.jfif',
        facts: [
        'Kandawgyi Lake Park is centered around the scenic Kandawgyi Lake',
'The park features walking and jogging paths with lake views',
'It is home to diverse bird species and aquatic life',
'Visitors can enjoy boating and peaceful lakeside picnics',
'The park has the iconic Karaweik Palace on the lake',
'Local flora includes flowering trees and well-maintained gardens',
'It is a popular spot for photography and sunset views',
'Kandawgyi Lake Park provides a relaxing retreat in Yangon'

        ]
    },
    {
        title: 'Okkala Thiri Park',
        description: 'Explore alpine and highland ecological zones',
        image: 'IMG/Okkala_thiri_park.webp',
        facts: [
        'Okkala Thiri Park offers spacious green areas for recreation',
'It features jogging and cycling paths for visitors',
'The park is home to native trees and flowering plants',
'Birdwatchers can spot local and migratory bird species',
'It provides playgrounds and exercise areas for families',
'The park promotes community events and outdoor activities',
'It has scenic spots for relaxation and picnics',
'Okkala Thiri Park contributes to local biodiversity and clean air'

        ]
    },
        {
            title: 'Pazundaung Park',
        description: 'Learn about the diverse life within woodland environments',
        image: 'IMG/pazungdaung_park.webp',
        facts: [
     'Pazundaung Park has well-maintained walking paths for visitors',
'It features a variety of native trees and ornamental plants',
'The park is a popular spot for morning exercises and tai chi',
'It hosts community events and cultural activities throughout the year',
'Local birds and small wildlife can often be seen here',
'There are shaded areas and benches for relaxation',
'The park contributes to cleaner air and a healthier urban environment',
'It provides a safe recreational space for families and children'

        ]
    },
    {
        title: 'Sayar San Park',
        description: 'Discover the importance of wetlands and water features',
        image: 'IMG/Sayar_san_park.webp',
        facts: [
'Sayar San Park is known for its scenic walking trails and greenery',
'It features ponds and fountains that attract local birds',
'The park has playgrounds and exercise areas for all ages',
'It hosts community events and seasonal cultural activities',
'Visitors can enjoy jogging, picnicking, and outdoor games',
'The park has shaded spots and benches for relaxation',
'It contributes to urban biodiversity and cleaner air',
'It provides a safe and peaceful environment for families and children'

        ]
    },
    {
        title: 'Shwe Pauk Kan Park',
        description: 'Explore alpine and highland ecological zones',
        image: 'IMG/SHwe_paukkan_park.webp',
        facts: [
          'Shwe Pauk Kan Park features wide green lawns and walking paths',
'It is home to various native trees and flowering plants',
'The park provides recreational areas for children and families',
'Visitors can enjoy jogging and outdoor fitness activities',
'It hosts seasonal events and community gatherings',
'The park contributes to urban biodiversity and clean air',
'There are shaded areas and benches for relaxation',
'It serves as an important community green space for Yangon',

        ]
    },
        {
        title: 'South Dagon Park',
        description: 'Learn about the diverse life within woodland environments',
        image: 'IMG/South_dagon_park.jpg',
        facts: [
 'South Dagon Park has large open fields for sports and recreation',
'It is surrounded by lush trees and shaded walking paths',
'The park provides playgrounds and picnic areas for families',
'It hosts local community events and cultural activities',
'Birdwatchers can spot a variety of native and migratory birds',
'The park contributes to cleaner air and urban greenery',
'Visitors enjoy jogging tracks and outdoor exercise spots',
'It is a popular spot for relaxation and evening strolls',

        ]
    },
    {
        title: 'Thakin Mya Park',
        description: 'Discover the importance of wetlands and water features',
        image: 'IMG/Thakin_mya_park.jfif',
        facts: [
'Thakin Mya Park features wide green lawns and scenic walking paths',
'It is home to various native trees and flowering plants',
'The park provides playgrounds and recreational areas for children',
'Visitors can enjoy outdoor exercise and jogging tracks',
'It hosts local cultural and community events throughout the year',
'Birdwatchers can spot both resident and migratory birds',
'The park contributes to urban greenery and cleaner air',
'It is a popular place for relaxation and family outings',

        ]
    },
    {
        title: 'Theingottara Park',
        description: 'Explore alpine and highland ecological zones',
        image: 'IMG/Theingottara_park.webp',
        facts: [
'Theingottara Park has lush landscapes with shady trees and gardens',
'It provides walking paths, jogging tracks, and fitness areas',
'The park hosts community gatherings and cultural events',
'It is home to various species of birds and small wildlife',
'Visitors can enjoy picnic areas and recreational facilities',
'The park helps improve air quality and urban greenery',
'It offers a peaceful environment for relaxation and meditation',
'Educational programs about nature and conservation are occasionally held',

        ]
    },
        {
        title: 'Thuwanna Park',
        description: 'Learn about the diverse life within woodland environments',
        image: 'IMG/Thuwunna_park.jpg',
        facts: [
           'Thuwanna Park features open green spaces for leisure and sports',
'It contains playgrounds and recreational areas for children',
'The park is home to various native trees and plants',
'Visitors can enjoy walking paths and shaded seating areas',
'It provides a habitat for birds and small wildlife',
'Community events and outdoor activities are often organized',
'The park promotes environmental awareness and nature appreciation',
'It offers a peaceful retreat from the urban environment',

        ]
    },
    {
        title: 'Thu Mingalar Park',
        description: 'Discover the importance of wetlands and water features',
        image: 'IMG/Thu_mingalar_park.webp',
        facts: [
          'Thu Mingalar Park has well-maintained gardens and walking trails',
'It features playgrounds and sports facilities for all ages',
'The park is home to native trees and seasonal flowers',
'Visitors can enjoy shaded areas and picnic spots',
'It provides habitats for birds and small wildlife',
'Community events and recreational activities are held regularly',
'The park promotes environmental education and awareness',
'It offers a relaxing escape from the city hustle',

        ]
    },
    {
        title: 'Tine Yin Thar Kyay Ywar',
        description: 'Explore alpine and highland ecological zones',
        image: 'IMG/National_Races_Village_Park.webp',
        facts: [
       'Tine Yin Thar Kyay Ywar showcases Myanmar’s ethnic and cultural diversity',
'The park has traditional houses representing different ethnic groups',
'Visitors can learn about local crafts, arts, and traditions',
'It features landscaped gardens and walking paths',
'There are cultural performances and festivals held regularly',
'The park provides educational programs for students and tourists',
'It serves as a hub for cultural preservation and awareness',
'The area promotes sustainable tourism and community engagement',

        ]
    },
       {
        title: 'Yankin Park',
        description: 'Explore alpine and highland ecological zones',
        image: 'IMG/Yankin_park.webp',
        facts: [
          'Yankin Park is a popular urban park in Yangon',
'It features large open lawns and shaded walking paths',
'The park has a variety of native and ornamental trees',
'There are playgrounds and recreational areas for children',
'Visitors can enjoy jogging, cycling, and outdoor exercises',
'The park hosts community events and seasonal activities',
'It provides a peaceful retreat from city life',
'Yankin Park promotes environmental awareness and relaxation',

        ]
    },
];

const wildlifeData = [
 {
    name: 'Rock Pigeon',
    habitat: 'Urban areas, cliffs, and buildings',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Often seen in flocks. Approach slowly if observing, and look for them near open spaces and ledges.',
    image: 'IMG/rock_pigeon.webp'
},

    {
name: 'House Crow',
habitat: 'Urban areas, towns, and villages',
status: 'Least Concern',
statusClass: 'success',
tip: 'Look for them scavenging near markets, streets, and rooftops. They are very social and often in groups.',
image: 'IMG/house_crow.webp'

    },
    {
name: 'Common Myna',
habitat: 'Urban areas, gardens, and farmlands',
status: 'Least Concern',
statusClass: 'success',
tip: 'Often seen in pairs or small groups. Listen for their loud calls and watch them perch on trees or rooftops.',
image: 'IMG/common_minors.webp'

    },
    {
       name: 'Oriental Magpie-Robin',
habitat: 'Gardens, parks, and open forests',
status: 'Least Concern',
statusClass: 'success',
tip: 'Best spotted during early morning or late afternoon. Listen for their melodious songs and look for them hopping on the ground or low branches.',
image: 'IMG/Oriental Magpie-Robin.webp'

    },
 {
    name: 'Indian Palm Squirrel',
    habitat: 'Urban areas, gardens, and forests',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Active during the day. Look for them climbing trees or foraging on the ground, often in small groups.',
    image: 'IMG/Indian_Palm_Squirrel.webp'
},
{
    name: 'House Mouse',
    habitat: 'Urban areas, homes, and fields',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Mostly active at night. Look for them near food sources, corners, and hidden spaces.',
    image: 'IMG/house_mouse.webp'
},
{
    name: 'Common Rat',
    habitat: 'Urban areas, sewers, fields, and homes',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Nocturnal and very elusive. Check near food sources, garbage areas, and dark corners.',
    image: 'IMG/common_rat.webp'
},
{
    name: 'Bats (Fruit Bats / Flying Fox)',
    habitat: 'Trees in parks, forests, and urban areas',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Best spotted at dusk or dawn when they leave or return to their roosts. Look for them hanging in large groups on tree branches.',
    image: 'IMG/Bat_(flying_fox).webp'
},
{
    name: 'Garden Lizard',
    habitat: 'Gardens, parks, and urban green spaces',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Active during the day. Look for them basking on walls, rocks, or tree trunks and moving quickly to escape threats.',
    image: 'IMG/Oriental_green_lizard.webp'
},
{
    name: 'Common House Gecko',
    habitat: 'Urban areas, homes, and gardens',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Mostly active at night. Look for them on walls and ceilings near lights where insects gather.',
    image: 'IMG/Common_House_Gecko.webp'
},
{
    name: 'Pond/Marsh Frogs',
    habitat: 'Ponds, marshes, and wetlands',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Listen for their croaking sounds, especially during the rainy season. Look near water edges and vegetation.',
    image: 'IMG/(Pond)(Marsh(_Frogs.jfif'
},
{
    name: 'Water Skaters',
    habitat: 'Surface of ponds, lakes, and slow-moving streams',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Look for them gliding quickly across the water surface, often in groups. They are easier to spot on calm, sunny days.',
    image: 'IMG/water_skaters.webp'
},

{
    name: 'Dragonflies',
    habitat: 'Ponds, lakes, wetlands, and gardens',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Active during the day. Look for them hovering near water or perching on plants and reeds.',
    image: 'IMG/dragon_fly.jfif'
},
{
    name: 'Bees / Wasps',
    habitat: 'Gardens, parks, meadows, and urban areas',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Look for them near flowers collecting nectar or building nests. Approach slowly to avoid disturbing them.',
    image: 'IMG/wasp.webp'
},
{
    name: 'Ladybugs',
    habitat: 'Gardens, parks, fields, and shrubs',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Look for them on leaves and flowers. They are often found in groups and are helpful for controlling pests.',
    image: 'IMG/Ladybugs.webp'
},
{
    name: 'Fireflies',
    habitat: 'Gardens, wetlands, and grassy areas near water',
    status: 'Least Concern',
    statusClass: 'success',
    tip: 'Best seen at dusk. Look for tiny glowing lights around bushes and tall grass during warm seasons.',
    image: 'IMG/firefly.jfif'
},



];

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavByUrl();
    attachNavLinkHandlers();
    loadEducationContent();
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

// Load education content
function loadEducationContent() {
    // Ecosystems
    const ecosystemsContent = document.getElementById('ecosystemsContent');
    if (ecosystemsContent) {
        ecosystemsContent.innerHTML = ecosystemsData.map((eco, index) => `
        <div class="glass-card mb-4" style="animation-delay: ${index * 0.1}s">
            <div class="row g-4">
                <div class="col-md-6">
                    <img src="${eco.image}" alt="${eco.title}" class="w-100 object-fit-cover rounded-3 ecosystem-img mb-3">
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center gap-3 mb-3">
                        <div class="icon-badge bg-gradient-custom">
                            <i class="bi bi-tree"></i>
                        </div>
                        <div>
                            <h3 class="h5 mb-1">${eco.title}</h3>
                            <p class="text-secondary small mb-0">${eco.description}</p>
                        </div>
                    </div>
                    <h4 class="h6 mb-3">Fascinating Facts</h4>
                    <ul class="list-unstyled">
                        ${eco.facts.map(fact => `
                            <li class="d-flex gap-2 mb-2">
                                <span class="text-gradient">•</span>
                                <span class="text-secondary">${fact}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
    }

    // Wildlife
    const wildlifeContent = document.getElementById('wildlifeContent');
    if (wildlifeContent) {
        wildlifeContent.innerHTML = wildlifeData.map((animal, index) => `
        <div class="col-md-6" style="animation-delay: ${index * 0.1}s">
            <div class="glass-card h-100">
                ${animal.image ? `<img src="${animal.image}" alt="${animal.name}" class="w-100 object-fit-cover rounded-3 mb-3">` : ``}
                <h3 class="h5 mb-3">${animal.name}</h3>
                <div class="mb-3">
                    <div class="d-flex justify-content-between small mb-2">
                        <span class="text-secondary">Habitat:</span>
                        <span class="fw-semibold">${animal.habitat}</span>
                    </div>
                    <div class="d-flex justify-content-between small">
                        <span class="text-secondary">Status:</span>
                        <span class="badge bg-${animal.statusClass}">${animal.status}</span>
                    </div>
                </div>
                <div class="pt-3 border-top">
                    <div class="small text-secondary mb-1">Spotting Tip</div>
                    <div class="small">${animal.tip}</div>
                </div>
            </div>
        </div>
    `).join('');
    }

    // Conservation
    const conservationContent = document.getElementById('conservationContent');
    if (conservationContent) {
        conservationContent.innerHTML = `
        <div class="glass-card p-4 mb-4 text-white" style="background: linear-gradient(135deg, var(--emerald-500), var(--teal-500)); border: none;">
            <h2 class="h4 mb-3">Why Park Conservation Matters</h2>
            <p class="mb-0">
                Parks are vital green spaces that provide numerous ecological, social, and health benefits. 
                They serve as habitats for wildlife, help combat climate change by absorbing carbon dioxide, 
                improve air quality, and offer spaces for recreation and mental well-being.
            </p>
        </div>
        
        <div class="row g-4 mb-4">
            <div class="col-md-4">
                <div class="glass-card text-center h-100">
                    <i class="bi bi-brightness-high fs-1 text-warning mb-3"></i>
                    <h3 class="h5 mb-3">Leave No Trace</h3>
                    <p class="text-secondary small mb-0">Pack out everything you bring in. Stay on designated trails to protect vegetation.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="glass-card text-center h-100">
                    <i class="bi bi-binoculars fs-1 text-primary mb-3"></i>
                    <h3 class="h5 mb-3">Respect Wildlife</h3>
                    <p class="text-secondary small mb-0">Observe animals from a distance. Never feed wildlife as it disrupts their natural behavior.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="glass-card text-center h-100">
                    <i class="bi bi-flower1 fs-1 text-success mb-3"></i>
                    <h3 class="h5 mb-3">Protect Flora</h3>
                    <p class="text-secondary small mb-0">Don't pick flowers or plants. They're vital for the ecosystem and may be protected species.</p>
                </div>
            </div>
        </div>
        
        <div class="glass-card p-4">
            <h3 class="h5 mb-3">How You Can Help</h3>
            <div class="row g-3">
                <div class="col-md-6">
                    <div class="p-3 rounded-3" style="background: rgba(255,255,255,0.6);">
                        <h4 class="h6 mb-2">Volunteer</h4>
                        <p class="small text-secondary mb-0">Join park cleanup events and trail maintenance programs.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 rounded-3" style="background: rgba(255,255,255,0.6);">
                        <h4 class="h6 mb-2">Donate</h4>
                        <p class="small text-secondary mb-0">Support local park foundations and conservation efforts.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 rounded-3" style="background: rgba(255,255,255,0.6);">
                        <h4 class="h6 mb-2">Educate</h4>
                        <p class="small text-secondary mb-0">Share knowledge about park ecosystems with friends and family.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 rounded-3" style="background: rgba(255,255,255,0.6);">
                        <h4 class="h6 mb-2">Advocate</h4>
                        <p class="small text-secondary mb-0">Support policies that protect and expand green spaces.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
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
