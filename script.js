// 1. ANIMASI GSAP (Apple Reveal)
window.addEventListener('load', () => {
    gsap.to(".hero-title", { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" });
    gsap.to(".bento-card", { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bento-card",
            start: "top 85%"
        }
    });
});

// 2. SISTEM TUKAR BAHASA
function changeLang(lang) {
    // Update butang UI
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + lang).classList.add('active');

    // Cari semua element yang ada data-en dan data-ms
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang);
    });

    // Simpan pilihan user dalam browser (localStorage)
    localStorage.setItem('novera_lang', lang);
}

// Load bahasa pilihan user bila buka page
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('novera_lang') || 'en';
    changeLang(savedLang);
});
