document.addEventListener('DOMContentLoaded', () => {
    // 1. Register Plugin GSAP
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // 2. HAMBER MENU LOGIC (MOBILE)
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            const isOpening = !navLinks.classList.contains('active');
            
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');

            if (isOpening) {
                // Animasi teks menu masuk satu-satu (Premium Vibe)
                gsap.to(links, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.2
                });
            } else {
                // Reset kedudukan bila tutup
                gsap.set(links, { opacity: 0, y: 20 });
            }
        });

        // Tutup menu bila klik mana-mana link
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                gsap.set(links, { opacity: 0, y: 20 });
            });
        });
    }

    // ==========================================
    // 3. ANIMATIONS (HERO & SCROLL REVEAL)
    // ==========================================
    
    // Hero Content Reveal
    gsap.from(".reveal-hero", { 
        opacity: 0, 
        y: 30, 
        duration: 1.2, 
        ease: "power3.out", 
        delay: 0.3 
    });

    // Scroll Reveal untuk setiap Card (Apple style)
    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });

    // ==========================================
    // 4. FLOATING PARTICLES (DAUN TERBANG)
    // ==========================================
    const container = document.getElementById('leaf-container');
    if (container && window.innerWidth > 768) { // Daun hanya terbang kat Desktop (Save battery mobile)
        for (let i = 0; i < 15; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            container.appendChild(leaf);
            
            gsap.set(leaf, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: Math.random() * 360,
                scale: 0.5 + Math.random() * 0.8
            });

            gsap.to(leaf, {
                y: "+=100",
                x: "+=30",
                rotation: "+=90",
                duration: 5 + Math.random() * 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }
});
