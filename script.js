document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // ==========================================
    // 1. HAMBURGER MORPH & MENU REVEAL
    // ==========================================
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const isOpening = !navLinks.classList.contains('active');
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');

                if (isOpening) {
                    // Animasi Teks Menu: Muncul dari bawah + Sedikit senget (Premium Look)
                    gsap.fromTo(links, 
                        { opacity: 0, y: 40, skewY: 5 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            skewY: 0,
                            duration: 0.8, 
                            stagger: 0.15, 
                            ease: "power4.out",
                            delay: 0.2
                        }
                    );
                }
            }
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // ==========================================
    // 2. REPEATING SCROLL ANIMATION (The Apple Way)
    // ==========================================
    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 60, scale: 0.95 },
            { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                duration: 1.2, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 90%",
                    end: "bottom 20%",
                    // play = bila masuk, reverse = bila keluar ke atas, 
                    // restart = bila masuk balik dari atas, reverse = bila keluar ke bawah
                    toggleActions: "play reverse restart reverse" 
                }
            }
        );
    });

    // Hero simple reveal
    gsap.from(".reveal-hero", { opacity: 0, y: 30, duration: 1.5, ease: "power4.out" });

    // ==========================================
    // 3. CLEANUP FOR DESKTOP
    // ==========================================
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            gsap.set(links, { clearProps: "all" });
        }
    });
});
