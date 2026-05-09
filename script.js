document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Reveal
    gsap.from(".reveal-hero", { opacity: 0, y: 40, duration: 1.5, ease: "power4.out", delay: 0.2 });

    // 2. Scroll Reveal for all cards
    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, y: 0, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%", // Mula animasi bila element masuk 85% dari skrin bawah
                }
            }
        );
    });

    // 3. Parallax Effect for Hero Video (Apple/Petronas vibe)
    gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 4. Floating Premium Particles (Leaves)
    const container = document.getElementById('leaf-container');
    if (container) {
        for (let i = 0; i < 15; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            container.appendChild(leaf);
            
            gsap.set(leaf, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotation: Math.random() * 360,
                scale: 0.5 + Math.random() * 1
            });

            gsap.to(leaf, {
                y: "+=150",
                x: "+=50",
                rotation: "+=180",
                duration: 6 + Math.random() * 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }
});
