document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. TAMBAH KAT SINI (SEMAK SETTINGS) ---
    const reduceMotion = localStorage.getItem('reduceMotion') === 'true';
    
    if (reduceMotion) {
        // Kalau user tutup animasi kat Settings, kita paksa semua benda muncul terus
        gsap.set(".hero-content, .animate-card, .section-title", { 
            opacity: 1, 
            y: 0,
            visibility: "visible" 
        });
        // Kita "return" supaya kod animasi kat bawah ni tak jalan
        return; 
    }

    // --- 2. KOD ANIMASI ASAL KAU (Hanya jalan kalau reduceMotion = false) ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    gsap.from(".hero-content", {
        opacity: 0, 
        y: 80, 
        duration: 1.5, 
        ease: "power4.out"
    });

    // Bento Cards Animation
    const cards = gsap.utils.toArray('.animate-card');
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 60,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.1
        });
    });

    // Section Titles Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 90%",
            },
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power2.out"
        });
    });
});

// --- 3. FUNGSI BAHASA (Letak luar dari DOMContentLoaded) ---
function changeLang(lang) {
    document.querySelectorAll('.lang-pill span').forEach(span => {
        span.classList.remove('active');
    });
    const btn = document.getElementById(lang + '-btn');
    if(btn) btn.classList.add('active');

    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        const newText = el.getAttribute(`data-${lang}`);
        el.innerHTML = newText;
    });

    localStorage.setItem('selectedLang', lang);
}

// Guna window.onload untuk pastikan bahasa di-load betul
window.onload = () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    changeLang(savedLang);
};
