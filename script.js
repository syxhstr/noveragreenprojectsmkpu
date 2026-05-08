// Tunggu semua content siap load baru jalan script
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DAFTARKAN PLUGIN GSAP
    // Kita guna ScrollTrigger untuk detect bila user scroll
    gsap.registerPlugin(ScrollTrigger);

    // 2. ANIMASI HERO (MASUK MULA-MULA)
    // Teks besar kat depan akan naik dari bawah & fade in
    gsap.from(".hero-content", {
        opacity: 0, 
        y: 80, 
        duration: 1.5, 
        ease: "power4.out"
    });

    // 3. ANIMASI BENTO CARDS (SCROLL ANIMATION)
    // Macam video kau, kotak-kotak tu akan timbul satu-satu bila kita scroll
    const cards = gsap.utils.toArray('.animate-card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%", // Mula animasi bila kotak tu 85% nampak kat skrin
                toggleActions: "play none none none" // Jalan sekali je
            },
            opacity: 0,
            y: 60,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.1 // Buat efek "stagger" (kotak masuk bergilir-gilir)
        });
    });

    // 4. ANIMASI TITLE SETIAP SECTION
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

    // 5. SMOOTH SCROLL UNTUK NAV LINKS
    // Bila tekan menu, dia tak melompat, tapi slide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// 6. MULTI-LANGUAGE ENGINE (BM / EN)
function changeLang(lang) {
    // Tukar status butang EN/BM (active class)
    document.querySelectorAll('.lang-pill span').forEach(span => {
        span.classList.remove('active');
    });
    document.getElementById(lang + '-btn').classList.add('active');

    // Cari semua element yang ada attribute data-en atau data-ms
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(el => {
        // Ambil teks ikut bahasa yang dipilih
        const newText = el.getAttribute(`data-${lang}`);
        
        // Animasi sikit masa tukar teks biar nampak pro
        gsap.to(el, {
            opacity: 0, 
            duration: 0.2, 
            onComplete: () => {
                el.innerHTML = newText;
                gsap.to(el, { opacity: 1, duration: 0.2 });
            }
        });
    });

    // Simpan pilihan bahasa dalam browser supaya bila refresh tak hilang
    localStorage.setItem('selectedLang', lang);
}

// 7. AUTO-LOAD BAHASA TERAKHIR
window.onload = () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    changeLang(savedLang);
};
