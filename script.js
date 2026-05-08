document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DAFTARKAN PLUGIN ---
    gsap.registerPlugin(ScrollTrigger);

    // --- 2. GLOBAL DEFAULT (MAHALNYA DI SINI) ---
    const defaultDuration = 1;
    const defaultEase = "power4.out";

    // --- 3. ANIMASI HERO (MASUK MULA-MULA) ---
    // Masuk satu demi satu (branding, title, subtitle)
    gsap.to(".hero-branding", { opacity: 1, y: -20, duration: 1.2, ease: "power3.out", delay: 0.5 });
    gsap.to(".hero-title", { opacity: 1, y: -30, duration: defaultDuration, ease: defaultEase, delay: 0.8 });
    gsap.to(".hero-sub", { opacity: 1, y: -30, duration: defaultDuration, ease: defaultEase, delay: 1.1 });

    // --- 4. ANIMASI SCROLL (SENTIASA HIDUP - MAHALNYA DI SINI!) ---
    // Section Header (Title & Subtitle) - Sentiasa timbul bila scroll turun, hilang bila scroll naik
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.to(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%", // Mula bila header 85% nampak kat skrin
                toggleActions: "play reverse play reverse", // SENTIASA HIDUP: play down, reverse up
                // once: false, // Opsyen lain untuk ScrollTrigger versi lama
                scrub: 1, // Buat pergerakan ni ikut scrollbar dengan lembut
            },
            opacity: 1,
            y: -20,
            duration: 0.8,
            ease: "power2.out"
        });
    });

    // Bento Cards - Stagger entrance (bergilir-gilir)
    // Timbul satu-satu bila scroll turun, hilang satu-satu bila scroll naik
    gsap.utils.toArray('.bento-grid').forEach(grid => {
        gsap.to(grid.querySelectorAll('.bento-card'), {
            scrollTrigger: {
                trigger: grid,
                start: "top 80%", // Mula bila grid 80% nampak kat skrin
                toggleActions: "play reverse play reverse", // SENTIASA HIDUP
                // scrub: 1, //scrub pada cards mungkin terlalu berat, stagger lebih cantik
            },
            opacity: 1,
            y: -30,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1 // Buat kotak masuk bergilir-gilir (0.1s beza)
        });
    });
});

// --- 5. MULTI-LANGUAGE ENGINE (BM / EN) ---
// Tiada reload page, sikit fade-out-in animation
function changeLang(lang) {
    // Tukar status butang (active class)
    document.querySelectorAll('.lang-switch span').forEach(s => s.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');

    // Cari semua element yang ada attribute data-en atau data-ms
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(el => {
        const newText = el.getAttribute(`data-${lang}`);
        
        // Animasi sikit masa tukar teks (mahal punya * vibe *)
        gsap.to(el, {
            opacity: 0, 
            duration: 0.2, 
            onComplete: () => {
                el.innerHTML = newText;
                gsap.to(el, { opacity: 1, duration: 0.2 });
            }
        });
    });

    localStorage.setItem('selected_lang', lang);
}

// Auto-load bahasa terakhir
window.onload = () => {
    const saved = localStorage.getItem('selected_lang') || 'en';
    changeLang(saved);
};
