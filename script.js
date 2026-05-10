gsap.registerPlugin(ScrollTrigger);

// 1. REVEAL SNAP (Laju & Padu)
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { y: 80, opacity: 0, scale: 0.9 }, 
        { 
            y: 0, opacity: 1, scale: 1,
            duration: 1.5, 
            ease: "expo.out", // Ini rahsia animation nampak mahal
            scrollTrigger: {
                trigger: elem,
                start: "top 88%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 2. LOGO FLOATING (Subtle)
gsap.to('.main-logo', {
    y: 5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// 3. SMOOTH PARALLAX
gsap.to('.hero-video', {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: 1 // Scrub 1 buat dia nampak "lekat" tapi smooth
    },
    y: 150
});
