document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // --- MOBILE MENU LOGIC ---
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            // Cuma jalan kalau skrin mobile
            if (window.innerWidth <= 768) {
                const isOpening = !navLinks.classList.contains('active');
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');

                if (isOpening) {
                    gsap.to(links, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(links, { opacity: 0, y: 20, duration: 0.3 });
                }
            }
        });

        // Tutup menu bila klik link (HANYA MOBILE)
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    gsap.set(links, { opacity: 0, y: 20 });
                }
            });
        });
    }

    // --- DESKTOP CLEANUP (Langkah berjaga-jaga) ---
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            gsap.set(links, { clearProps: "all" }); // Buang semua gaya GSAP pada link
        }
    });

    // --- OTHER ANIMATIONS ---
    gsap.from(".reveal-hero", { opacity: 0, y: 30, duration: 1.2, ease: "power3.out", delay: 0.3 });

    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, y: 0, duration: 1, ease: "power2.out",
                scrollTrigger: { trigger: elem, start: "top 85%" }
            }
        );
    });
});
