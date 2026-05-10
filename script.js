gsap.registerPlugin(ScrollTrigger);

// 1. Reveal Elements (Animasi naik dari bawah)
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { y: 80, opacity: 0 },
        { 
            y: 0, opacity: 1, duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 2. Hero Content Animation
gsap.from('.reveal-hero', {
    opacity: 0, y: 50, duration: 1.5, ease: "power4.out", delay: 0.4
});

// 3. Parallax Background Video
gsap.to('.parallax-bg', {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 150
});

// 4. Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
