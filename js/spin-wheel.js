
/* New SVG Spin-the-Wheel implementation
   - Replaces previous conic-gradient spinner with an SVG wheel built from data
   - Uses CUSTOM_ORDER (user-provided) and inserts placeholders for missing parks
   - Tracks logical rotation in dataset.angle to make repeated spins deterministic
   - Provides a modal + floating button UI and a safe Open button for real parks
*/
(function(){
    'use strict';

    // Edit this array to change the wheel's exact slice order
    const CUSTOM_ORDER = [
        'Bandula Park (Maha Bandula Park)',
        'General Aung San Park',
        'Hlawga National Park',
        'Inya Park / Inya Lake',
        'Insein Park',
        'Kan Taw Mingalar Park',
        'Kandawgyi Lake Park',
        'Okkala Thiri Park',
        'Pazundaung Park',
        'Sayar San Park',
        'Shwe Pauk Kan Park',
        'South Dagon Park',
        'Thakhin Mya Park',
        'Theingottara Park',
        'Thuwanna Park',
        'Thu Mingalar Park',
        'Tine Yin Thar Kyay Ywar',
        'Yankin Park'
    ];

    // small helpers
    function escapeHtml(str){ if (!str) return ''; return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
    function normalizeName(s){ return (s||'').toString().toLowerCase().replace(/[^a-z0-9]/g,''); }

    // load parks-data.js if needed
    function loadParksDataIfNeeded(){
        return new Promise((resolve,reject)=>{
            if (window.parksData && Array.isArray(window.parksData) && window.parksData.length) return resolve();
            const s = document.createElement('script'); s.src='js/parks-data.js'; s.onload=()=>resolve(); s.onerror=()=>reject(); document.body.appendChild(s);
        });
    }

    function getOrderedParks(){
        const all = window.parksData || [];
        const byNorm = new Map();
        all.forEach(p=> byNorm.set(normalizeName(p.name||p.title||''), p));
        const ordered = [];
        CUSTOM_ORDER.forEach(name=>{
            const key = normalizeName(name);
            if (byNorm.has(key)) ordered.push(byNorm.get(key));
            else {
                // try fuzzy match
                const found = all.find(x => normalizeName(x.name||'').includes(key) || key.includes(normalizeName(x.name||'')));
                if (found) ordered.push(found);
                else ordered.push({ id: null, name: name, township: '', _placeholder: true });
            }
        });
        return ordered;
    }

    // Create UI: floating button + Bootstrap modal with an SVG container
    function createUI(){
        if (document.getElementById('svgSpinModal')) return;

        const btn = document.createElement('button');
        btn.id='svgSpinBtn';
        btn.className='floating-spin-btn';
        btn.title='Spin the Wheel';
        btn.innerHTML = '<i class="bi bi-hourglass-split" aria-hidden="true"></i>';
        document.body.appendChild(btn);

        const modal = document.createElement('div');
        modal.className='modal fade'; modal.id='svgSpinModal'; modal.tabIndex=-1; modal.setAttribute('aria-hidden','true');
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark text-light">
                    <div class="modal-header border-0">
                        <h5 class="modal-title">Spin the Wheel</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <div id="svgWheelWrap" style="display:flex;justify-content:center;">
                            <!-- SVG will be injected here -->
                        </div>
                        <div style="margin-top:18px;"><button id="svgWheelSpin" class="btn btn-gradient">Spin</button></div>
                        <div id="svgWheelResult" class="mt-3"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        try{
            const bsModal = new bootstrap.Modal(modal,{keyboard:true});
            btn.addEventListener('click', ()=> bsModal.show());
            modal.addEventListener('shown.bs.modal', ()=> buildSVGWheel());
        }catch(e){ btn.addEventListener('click', ()=> modal.classList.add('show')); }

        // delegated clicks
        modal.addEventListener('click', (ev)=>{
            if (ev.target && ev.target.id === 'svgWheelSpin') spinSVGWheel();
            if (ev.target && ev.target.id === 'svgOpenBtn'){
                const pid = ev.target.getAttribute('data-park-id');
                if (pid && pid !== 'null' && pid !== ''){
                    const id = Number(pid);
                    if (!Number.isNaN(id)) showParkDetail(id);
                }
            }
        });
    }

    // Build an SVG wheel with arcs and text labels
    function buildSVGWheel(){
        const wrap = document.getElementById('svgWheelWrap'); if (!wrap) return;
        wrap.innerHTML = '';
        const parks = getOrderedParks(); if (!parks || parks.length===0) return;

        const size = Math.min(420, Math.max(300, Math.floor(window.innerWidth*0.6)));
        const cx = size/2, cy = size/2, r = size/2 - 8;
        const n = parks.length; const slice = 2*Math.PI/n;

        // create svg
        const svgNS = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgNS,'svg');
        svg.setAttribute('width', String(size)); svg.setAttribute('height', String(size));
        svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

        // group that will rotate
        const g = document.createElementNS(svgNS,'g');
        g.setAttribute('id','svgWheelGroup');
        g.style.transformOrigin = `${cx}px ${cy}px`;
        // initialize angle store if missing
        g.dataset.angle = g.dataset.angle || '0';

        // make slices
        for (let i=0;i<n;i++){
            const start = -Math.PI/2 + i*slice; // start at top
            const end = start + slice;
            const x1 = cx + r*Math.cos(start);
            const y1 = cy + r*Math.sin(start);
            const x2 = cx + r*Math.cos(end);
            const y2 = cy + r*Math.sin(end);
            const large = slice > Math.PI ? 1 : 0;
            const hue = Math.round(360 * i / n);
            const path = document.createElementNS(svgNS,'path');
            const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
            path.setAttribute('d', d);
            path.setAttribute('fill', `hsl(${hue} 80% 70%)`);
            path.setAttribute('data-index', String(i));
            g.appendChild(path);

            // label: use small text rotated to slice center
            const mid = (start+end)/2;
            const labelRadius = r - 28;
            const lx = cx + labelRadius*Math.cos(mid);
            const ly = cy + labelRadius*Math.sin(mid);
            const text = document.createElementNS(svgNS,'text');
            text.setAttribute('x', String(lx)); text.setAttribute('y', String(ly));
            text.setAttribute('text-anchor','middle');
            text.setAttribute('dominant-baseline','middle');
            text.setAttribute('fill','#07232b');
            text.setAttribute('font-size','11');
            text.setAttribute('transform', `rotate(${(mid*180/Math.PI)} ${lx} ${ly})`);
            const fullName = (parks[i].name||parks[i].title||`Park ${i+1}`).toString();
            const shortText = fullName.length>14 ? fullName.slice(0,14).trim() + '…' : fullName;
            // show number only on the slice (user requested numbers-only on wheel)
            text.textContent = `${i+1}`;
            // keep full name in a <title> element for tooltip/accessibility
            const titleEl = document.createElementNS(svgNS,'title');
            titleEl.textContent = fullName;
            text.appendChild(titleEl);
            g.appendChild(text);
        }

        svg.appendChild(g);
        wrap.appendChild(svg);

        // create an HTML pointer overlay (absolute) so it never rotates with the wheel
        wrap.style.position = wrap.style.position || 'relative';
        // remove any existing pointer overlays
        const existing = wrap.querySelector('.svg-wheel-pointer');
        if (existing) existing.remove();
        const pointerDiv = document.createElement('div');
        pointerDiv.className = 'svg-wheel-pointer';
        // position at the top center of the svg container
        pointerDiv.style.position = 'absolute';
        pointerDiv.style.left = '50%';
        pointerDiv.style.top = '6px';
        pointerDiv.style.transform = 'translateX(-50%)';
        pointerDiv.style.width = '0';
        pointerDiv.style.height = '0';
        pointerDiv.style.borderLeft = '8px solid transparent';
        pointerDiv.style.borderRight = '8px solid transparent';
        pointerDiv.style.borderTop = '12px solid #ffffff';
        pointerDiv.style.boxShadow = '0 1px 0 rgba(0,0,0,0.25)';
        pointerDiv.style.zIndex = '20';
        wrap.appendChild(pointerDiv);

        // store parks on group for later reference
        g._parks = parks;
        // ensure dataset angle on the element we rotate
        const stored = Number(g.dataset.angle);
        g.style.transform = `rotate(${(Number.isFinite(stored)?stored:0)}deg)`;

        // expose for debugging
        window._svgWheelGroup = g;
    }

    // Spin behavior
    let _spinLock = false;
    function spinSVGWheel(){
        if (_spinLock) return; const g = document.getElementById('svgWheelGroup'); if (!g) return;
        const parks = g._parks || getOrderedParks(); const n = parks.length; if (n===0) return;

        const sliceDeg = 360 / n;

        // read currentDeg from dataset
        let currentDeg = Number(g.dataset.angle); if (!Number.isFinite(currentDeg)) currentDeg=0;
        currentDeg = ((currentDeg%360)+360)%360;
        // startAngle is aligned so slice 0 is at 12 o'clock
        // Instead of choosing an index first, pick a random angle offset so the pointer lands randomly.
        const spins = Math.floor(Math.random()*3)+4; // 4-6 spins
        const randomOffset = Math.random() * 360; // random final offset in degrees
        const rawTarget = spins * 360 + randomOffset;
        const targetRotation = currentDeg + rawTarget;

        // snap DOM to currentDeg without transition, then animate to targetRotation
        g.style.transition = 'none';
        g.style.transform = `rotate(${currentDeg}deg)`;
        void g.getBoundingClientRect();

        g.style.transition = 'transform 3.6s cubic-bezier(.15,.8,.2,1)';
        _spinLock = true;
        // ensure will-change
        g.style.willChange = 'transform';
        requestAnimationFrame(()=> requestAnimationFrame(()=> g.style.transform = `rotate(${targetRotation}deg)`));

        const resultBox = document.getElementById('svgWheelResult'); if (resultBox) resultBox.textContent='Spinning...';

        function getComputedRotationDeg(el){
            const cs = window.getComputedStyle(el);
            const m = cs.transform || cs.webkitTransform;
            if (!m || m === 'none') return 0;
            // handle matrix(...) and matrix3d(...)
            const m3 = m.match(/matrix3d\((.+)\)/);
            if (m3) {
                const vals = m3[1].split(',').map(s=>parseFloat(s));
                // rotationZ from matrix3d can be approximated
                const a = vals[0], b = vals[1];
                return Math.round(Math.atan2(b, a) * (180/Math.PI));
            }
            const match = m.match(/matrix\((.+)\)/);
            if (match){
                const vals = match[1].split(',').map(s=>parseFloat(s));
                const a = vals[0], b = vals[1];
                return Math.round(Math.atan2(b, a) * (180/Math.PI));
            }
            return 0;
        }

        function onEnd(){
            g.removeEventListener('transitionend', onEnd);
            // read actual rotation from DOM (safer than trusting targetRotation)
            let final = getComputedRotationDeg(g);
            final = ((final%360)+360)%360;
            // determine which slice center is closest to the top after this rotation
            const sliceDegLocal = 360 / n;
            const startAngleLocal = -90; // degrees
            let bestIdx = 0; let bestDist = 1e9; let bestDesired = final;
            for (let i=0;i<n;i++){
                const topCenter = startAngleLocal + (i * sliceDegLocal) + (sliceDegLocal/2);
                // position of this center after applying rotation = (topCenter + final) mod 360
                let pos = ((topCenter + final) % 360 + 360) % 360;
                const dist = Math.min(pos, 360 - pos);
                if (dist < bestDist){ bestDist = dist; bestIdx = i; }
            }
            // compute desired rotation so bestIdx center aligns with top: desired = -topCenter
            const topCenterBest = startAngleLocal + (bestIdx * sliceDegLocal) + (sliceDegLocal/2);
            const desired = ((-topCenterBest % 360) + 360) % 360;
            // snap to desired
            g.style.transition = 'none';
            g.style.transform = `rotate(${desired}deg)`;
            void g.getBoundingClientRect();
            g.style.willChange = '';
            g.dataset.angle = String(desired);
            _spinLock = false;
            showSVGResult(parks[bestIdx], bestIdx);
        }

        g.addEventListener('transitionend', onEnd);
        // safety timeout
        setTimeout(()=>{ if (_spinLock){ onEnd(); } }, 4200);
    }

    function showSVGResult(park,index){
        const box = document.getElementById('svgWheelResult'); if (!box) return;
        // show only the park name (no numeric prefix), per user request
        const town = park.township||park.location||'';
        const isPlaceholder = !!park._placeholder || park.id == null;
        const openBtn = isPlaceholder ? `<button class="btn btn-glass" id="svgOpenBtn" disabled>Open</button>` : `<button class="btn btn-glass" id="svgOpenBtn" data-park-id="${park.id}">Open</button>`;
        box.innerHTML = `<div style="text-align:center"><div style="font-weight:700; font-size:16px; color:#eafbf0;">${escapeHtml(park.name)}</div>${town?`<div style="font-size:13px;color:#cfeede;margin-top:6px;">${escapeHtml(town)}</div>`:''}<div style="margin-top:8px;">${openBtn}</div></div>`;
    }

    // fallback showParkDetail
    function ensureShowParkDetail(){ if (window.showParkDetail) return; window.showParkDetail = function(id){ try{ sessionStorage.setItem('parkDetailId', String(id)); }catch(e){} window.location.href='parkDetail-standalone.html'; }; }

    // init
    document.addEventListener('DOMContentLoaded', ()=>{
        createUI(); ensureShowParkDetail();
        loadParksDataIfNeeded().then(()=>{
            // build now if modal already open
            const m = document.getElementById('svgSpinModal'); if (m && m.classList.contains('show')) buildSVGWheel();
        }).catch(()=>{ /* ignore */ });
    });

})();
