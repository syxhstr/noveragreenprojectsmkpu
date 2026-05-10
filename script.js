// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Reveal Animation yang lebih "Solid"
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        { 
            y: 0, opacity: 1, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Parallax Hero Video
gsap.to('.hero-video', {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true
    },
    y: 100
});

// 2. HAMBURGER BAR (Kekal macam biasa)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// 3. MASTER SCROLL REVEAL (The Smooth Way)
// Kita guna staggered reveal supaya elemen masuk satu-satu, bukan gedebuk semua sekali.
// yPercent pakai GPU, jauh lebih lancar dari translateY.
const initRevealAnimations = () => {
    // Reveal untuk Hero Content
    gsap.from('.reveal-hero', {
        duration: 1.8,
        yPercent: 40,
        opacity: 0,
        ease: "power4.out",
        delay: 0.3
    });

    // Reveal untuk semua Kad & Pulau
    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { yPercent: 30, opacity: 0, scale: 0.96 }, // Start state
            { 
                yPercent: 0, 
                opacity: 1, 
                scale: 1,
                duration: 1.4, 
                ease: "expo.out",
                // willChange optimasi GPU
                scrollTrigger: {
                    trigger: elem,
                    start: "top 92%", // Mula reveal bila top elemen jejak 92% screen
                    toggleActions: "play none none reverse", // Main bila masuk, reverse bila scroll balik atas
                    // fastScrollEnd: true, // Optimasi untuk scroll laju
                }
            }
        );
    });
};

// 4. PARALLAX EFFECTS (Fix Glitch)
// Guna scrub penuh untuk parallax yang 'lekat' kat scroll, tak delay.
const initParallaxAnimations = () => {
    // Parallax untuk Hero Video
    gsap.to('.parallax-bg', {
        yPercent: 35, // Gerak ke bawah sikit bila scroll
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true, // Ikut penuh pergerakan scroll
        }
    });

    // Parallax untuk Pulau (Section Island)
    // Buat pulau nampak terapung atas body
    gsap.utils.toArray('.section-island').forEach(island => {
        gsap.to(island, {
            yPercent: -8, // Naik sikit ke atas
            ease: "none",
            scrollTrigger: {
                trigger: island,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2, // Scrub dengan smoothing sikit
            }
        });
    });
};

// 5. PREMIUM FLOATING PARTICLES (Daun Terapung)
// Konsep partikel yang terapung 'wobbly' macam daun.
const initFloatingLeaves = () => {
    // Kalau tak ada elemen daun dalam HTML, kita skip. 
    // Kau kena tambah element .floating-leaf kat HTML kalau nak nampak.
    if (!document.querySelector('.floating-leaf')) return;

    gsap.to('.floating-leaf', {
        yPercent: "-=40", // Gerak naik turun sikit
        rotation: "+=25", // Putar sikit
        x: "+=20", // Gerak kiri kanan sikit
        duration: "random(4, 7)", // Tempoh random
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
            each: 0.5,
            from: "random"
        }
    });
};

// INITIALIZE ALL
const initNoveraAnimations = () => {
    cleanUI();
    initRevealAnimations();
    initParallaxAnimations();
    initFloatingLeaves();
};

// Pastikan DOM dah load dulu
window.addEventListener('load', initNoveraAnimations);
