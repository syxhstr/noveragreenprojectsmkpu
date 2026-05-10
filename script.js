// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. HAMBURGER MENU LOGIC
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
    
    // Animate hamburger bars to 'X'
    const bars = hamburger.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate-down');
    bars[1].classList.toggle('fade-out');
    bars[2].classList.toggle('rotate-up');
});

// 2. HERO ANIMATIONS (GSAP)
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.from('.reveal-hero', {
        opacity: 0,
        y: 60,
        duration: 1.5,
        ease: "power4.out"
    })
    .from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=1");
});

// 3. SCROLL REVEAL (Semua Kad Glass)
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { 
            y: 100, 
            opacity: 0,
            scale: 0.95
        },
        { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1.2, 
            ease: "expo.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 90%",
                end: "top 70%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 4. PARALLAX EFFECT FOR HERO VIDEO
gsap.to('.parallax-bg', {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 200,
    ease: "none"
});

// 5. AUTO-CLOSE MOBILE MENU ON LINK CLICK
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-active');
    });
});
