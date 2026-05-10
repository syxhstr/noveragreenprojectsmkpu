gsap.registerPlugin(ScrollTrigger);

// Reveal Elements on Scroll
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { y: 60, opacity: 0 },
        { 
            y: 0, opacity: 1, duration: 1.2, 
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Hero Animation
gsap.from('.reveal-hero', {
    opacity: 0, y: 40, duration: 1.5, ease: "power3.out", delay: 0.3
});

// Parallax Effect
gsap.to('.parallax-bg', {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 150
});
