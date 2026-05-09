document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DAFTAR GSAP
    gsap.registerPlugin(ScrollTrigger);

    // 2. ANIMASI HERO (Masuk masa page load)
    gsap.from(".animate-hero", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2
    });

    // 3. ANIMASI SCROLL (Cards & Text)
    // Timbul dengan elegan bila di-scroll
    const scrollElements = gsap.utils.toArray('.animate-scroll');
    
    scrollElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Mula bila 85% elemen kelihatan
                toggleActions: "play reverse play reverse" // Sentiasa "hidup"
            },
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    // 4. FLOATING LEAVES PARTICLES (BINTIK EMAS JATUH)
    const particleContainer = document.getElementById("particle-container");
    const leafCount = 30; // Jumlah daun serentak
    
    for(let i = 0; i < leafCount; i++) {
        createLeaf();
    }

    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.classList.add("leaf");
        
        // Randomize posisi, saiz, dan opacity
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * -100; // Mula dari atas skrin
        const scale = 0.5 + Math.random() * 1.5;
        const duration = 10 + Math.random() * 20; // Jatuh dengan perlahan (10-30 saat)
        const delay = Math.random() * 10;
        
        leaf.style.left = `${startX}px`;
        leaf.style.top = `${startY}px`;
        leaf.style.transform = `scale(${scale})`;
        
        particleContainer.appendChild(leaf);
        
        // Animasi GSAP untuk daun jatuh dan berpusing
        gsap.to(leaf, {
            y: window.innerHeight + 100, // Jatuh sampai bawah skrin
            x: startX + (Math.random() * 200 - 100), // Goyang kiri kanan sikit
            rotation: Math.random() * 360, // Berpusing
            duration: duration,
            delay: delay,
            ease: "none",
            onComplete: () => {
                // Bila dah sampai bawah, buang daun ni dan buat daun baru (Infinite loop)
                leaf.remove();
                createLeaf();
            }
        });
    }
});
