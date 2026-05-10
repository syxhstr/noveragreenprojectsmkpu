// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. HAMBURGER NAV LOGIC
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 2. GSAP PAGE REVEAL
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    })
    .from('.reveal-hero', {
        opacity: 0,
        y: 60,
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.8");
});

// 3. SCROLL REVEAL FOR ALL GLASS CARDS
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
            duration: 1.5, 
            ease: "expo.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 90%",
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
    y: 150,
    ease: "none"
});

// 5. SMOOTH SCROLLING FOR ANCHORS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
