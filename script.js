document.addEventListener('DOMContentLoaded', () => {

    // LOGIK BURGER
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Animasi line burger pangkah...
    });

    // 2. FLOATING LEAVES (Particles)
    const container = document.getElementById('leaf-container');
    for (let i = 0; i < 15; i++) {
        const leaf = document.createElement('div');
        leaf.innerHTML = '🍃';
        leaf.style.position = 'absolute';
        leaf.style.fontSize = Math.random() * 20 + 10 + 'px';
        leaf.style.left = Math.random() * 100 + 'vw';
        leaf.style.top = '-50px';
        leaf.style.opacity = '0.2';
        leaf.style.filter = 'sepia(1) saturate(0.5)';
        container.appendChild(leaf);

        gsap.to(leaf, {
            y: '110vh',
            x: '+=100',
            rotation: 360,
            duration: Math.random() * 10 + 10,
            repeat: -1,
            delay: Math.random() * 10,
            ease: "none"
        });
    }

    // 3. GSAP SCROLL REVEAL
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 }, 
            { 
                opacity: 1, y: 0, duration: 1.2, 
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // LOGIK REVEAL (BARANG TIMBUL)
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach(elem => {
        gsap.fromTo(elem, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1.5, scrollTrigger: elem }
        );
    });
});
});
