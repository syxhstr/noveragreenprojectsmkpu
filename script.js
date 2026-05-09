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

// Tambah kod ni dalam document.addEventListener('DOMContentLoaded', ... )

const vForm = document.getElementById('volunteerForm');
if (vForm) {
    vForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Animasi keluar borang
        gsap.to("#form-content", {
            opacity: 0,
            y: -20,
            duration: 0.5,
            onComplete: () => {
                document.getElementById('form-content').style.display = 'none';
                const tyContent = document.getElementById('thank-you-content');
                tyContent.style.display = 'block';
                
                // Animasi masuk Thank You
                gsap.fromTo(tyContent, 
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
                );
            }
        });
    });
}
