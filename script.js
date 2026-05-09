document.addEventListener('DOMContentLoaded', () => {
    // 1. GSAP Scroll Reveal
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, y: 0, 
                duration: 1.2, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                }
            }
        );
    });

    // 2. Floating Particles (Daun)
    const container = document.getElementById('leaf-container');
    for (let i = 0; i < 20; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        container.appendChild(leaf);
        
        // Random Position & Animation
        gsap.set(leaf, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotation: Math.random() * 360
        });

        gsap.to(leaf, {
            y: "+=100",
            x: "+=50",
            rotation: "+=180",
            duration: 5 + Math.random() * 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
});
