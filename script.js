gsap.registerPlugin(ScrollTrigger);

// HAMBURGER
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.onclick = () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
};

// SCROLL REVEAL
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, { y: 100, opacity: 0 }, { 
        y: 0, opacity: 1, duration: 1.5, ease: "expo.out",
        scrollTrigger: { trigger: elem, start: "top 90%" }
    });
});

// PARALLAX HERO
gsap.to('.hero-video', {
    scrollTrigger: { trigger: ".hero", start: "top top", scrub: true },
    y: 150
});

// FLOATING EFFECT (SUBTLE)
gsap.to('.glass-card', {
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    stagger: 0.2
});
