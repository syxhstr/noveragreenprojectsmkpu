gsap.registerPlugin(ScrollTrigger);

// 1. HAMBURGER LOGIC
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if(hamburger) {
    hamburger.onclick = () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    };
}

// Close menu when clicking link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    };
});

// 2. GSAP REVEAL ANIMATIONS
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
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// 3. PARALLAX VIDEO
gsap.to('.parallax-bg', {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true
    },
    y: 150
});

// 4. NAVBAR SCROLL EFFECT
window.onscroll = () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 100) {
        nav.style.background = "rgba(6, 17, 9, 0.95)";
        nav.style.height = "75px";
    } else {
        nav.style.background = "rgba(6, 17, 9, 0.85)";
        nav.style.height = "85px";
    }
};
