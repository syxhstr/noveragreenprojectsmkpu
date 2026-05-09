document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DAFTARKAN PLUGIN GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 2. HERO REVEAL ANIMATION (Masa Load)
    gsap.from(".hero-content", {
        opacity: 0, 
        y: 80, 
        duration: 1.5, 
        ease: "power4.out"
    });

    // 3. SCROLL REVEAL ANIMATION (SENTIASA HIDUP / REPEAT - MAHALNYA DI SINI)
    const cards = gsap.utils.toArray('.animate-card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%", // Mula animasi bila kotak tu 85% nampak kat skrin
                toggleActions: "play none none reverse" // play down, reverse up (SENTIASA REPEAT)
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.1 // Buat efek stagged (kotak masuk bergilir)
        });
    });
});

// MULTI-LANGUAGE SCRIPT
function changeLang(lang) {
    document.querySelectorAll('.lang-pill span').forEach(s => s.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });
    localStorage.setItem('novera_lang', lang);
}

window.onload = () => {
    const saved = localStorage.getItem('novera_lang') || 'en';
    changeLang(saved);
};
