// 1. GSAP Animations
window.addEventListener('load', () => {
    gsap.to(".hero-content", { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" });
    
    gsap.utils.toArray('.bento-card').forEach(card => {
        gsap.to(card, {
            scrollTrigger: { trigger: card, start: "top 90%" },
            opacity: 1, y: 0, duration: 1, ease: "power3.out"
        });
    });
});

// 2. Language System
function changeLang(lang) {
    document.querySelectorAll('.lang-pill span').forEach(s => s.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');

    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });
    
    localStorage.setItem('selectedLang', lang);
}

// Persist Language on Load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    changeLang(savedLang);
});
