document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. HERO ANIMATION (Sekali jalan masa load)
    gsap.to(".hero-branding", { opacity: 1, y: -20, duration: 1.2, ease: "power3.out", delay: 0.5 });
    gsap.to(".hero-title", { opacity: 1, y: -30, duration: 1, ease: "power4.out", delay: 0.8 });
    gsap.to(".hero-sub", { opacity: 1, y: -30, duration: 1, ease: "power4.out", delay: 1.1 });

    // 2. SCROLL ANIMATION (Sentiasa Hidup / Repeat)
    // Untuk Section Headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.to(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 90%",
                // "play" masa turun, "reverse" masa naik balik
                toggleActions: "play reverse play reverse" 
            },
            opacity: 1,
            y: -20,
            duration: 0.8
        });
    });

    // Untuk Bento Cards
    gsap.utils.toArray('.animate-card').forEach(card => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            },
            opacity: 1,
            y: -30,
            duration: 0.8,
            ease: "power2.out"
        });
    });
});

// 3. LANGUAGE SWITCHER
function changeLang(lang) {
    document.querySelectorAll('.lang-switch span').forEach(s => s.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');

    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });
    localStorage.setItem('selected_lang', lang);
}

window.onload = () => {
    const saved = localStorage.getItem('selected_lang') || 'en';
    changeLang(saved);
};
