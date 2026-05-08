document.addEventListener('DOMContentLoaded', () => {
    // Reveal Hero
    gsap.to(".hero-content", { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" });

    // Scroll Animations
    gsap.utils.toArray('.bento-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out"
        });
    });
});

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
