// GSAP Reveal Animations
document.addEventListener('DOMContentLoaded', () => {
    // Hero Animation
    gsap.from(".main-title", { opacity: 0, y: 50, duration: 1.2, ease: "power4.out" });
    gsap.from(".sub-title", { opacity: 0, y: 30, duration: 1.2, delay: 0.3, ease: "power4.out" });
    
    // Scroll Animations for Bento Cards
    gsap.utils.toArray('.bento-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });
});

// Language Switcher Logic
function changeLang(lang) {
    // Update UI active state
    document.querySelectorAll('.lang-pill span').forEach(s => s.classList.remove('active'));
    document.getElementById(lang + '-btn').classList.add('active');

    // Switch text content
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });
    
    // Switch placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        el.placeholder = el.getAttribute('data-' + lang + '-placeholder');
    });

    localStorage.setItem('noveraLang', lang);
}

// Persist Language on Page Load
window.onload = () => {
    const savedLang = localStorage.getItem('noveraLang') || 'en';
    changeLang(savedLang);
};
