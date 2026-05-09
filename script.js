document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GENERATOR DAUN TERAPUNG (Selesaikan masalah "Background Kosong")
    const createParticles = () => {
        const container = document.body;
        const particleCount = 15; // Jumlah daun

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            // Setting posisi & saiz random
            const size = Math.random() * 15 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.opacity = Math.random() * 0.3;
            
            // Tambah ke body
            container.appendChild(particle);

            // Animasi terapung guna GSAP
            gsap.to(particle, {
                y: "random(-100, 100)",
                x: "random(-50, 50)",
                rotation: "random(0, 360)",
                duration: "random(10, 20)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    };

    // 2. DAFTARKAN PLUGIN GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 3. ANIMASI HERO (Reveal masa mula-mula masuk)
    gsap.from(".hero-glass", {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
    });

    // 4. ANIMASI BENTO CARDS (Mantap & Berulang)
    const cards = gsap.utils.toArray('.bento-card');
    
    cards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%", // Mula animasi bila 85% skrin nampak kotak
                toggleActions: "play none none reverse", // "play" masa turun, "reverse" masa naik balik
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            delay: (index % 2) * 0.2 // Efek gilir-gilir (stagger)
        });
    });

    // 5. SMOOTH SCROLL UNTUK NAV LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Jalankan generator daun
    createParticles();
});
