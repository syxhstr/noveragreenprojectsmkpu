gsap.registerPlugin(ScrollTrigger);

// 1. HAMBURGER LOGIC
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// 2. SCROLL REVEAL ANIMATION
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { y: 100, opacity: 0, scale: 0.95 },
        { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1.5, 
            ease: "expo.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 3. PARALLAX EFFECT FOR HERO
gsap.to('.parallax-bg', {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true
    },
    y: 150,
    scale: 1.2
});

// 4. FLOATING LEAVES (Particles Concept)
// Ini akan buat element bergerak sikit bila scroll
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.transform = `translateY(${scroll * (index % 2 === 0 ? 0.05 : -0.05)}px)`;
    });
});
