/* MASTER JAVASCRIPT: NOVERA GREEN 
   LEVEL: PETRONAS/APPLE LUXURY 
*/

// 1. REGISTER GSAP SCROLLTRIGGER
// Pastikan kau dah panggil library GSAP kat index.html punya script tag!
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

// Target elemen dengan class .animate-scroll
const revealElements = document.querySelectorAll(".animate-scroll");

revealElements.forEach((el) => {
    gsap.fromTo(el, 
        { y: 100, opacity: 0 }, 
        {
            y: 0, opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse" // Ini buat dia ulang balik!
            }
        }
    );
});

// Fix Navbar Color on Scroll but KEEP GLASS
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(11, 26, 19, 0.9) !important"; 
    } else {
        nav.style.background = "rgba(255, 255, 255, 0.05) !important";
    }
});

// 2. HERO ANIMATION (LOAD SEKALI MASA PAGE BUKA)
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.from(".hero-logo-large", {
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    })
    .from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8")
    .from(".hero-description, .gold-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.5");
});

// 4. NAVBAR BLUR & SHRINK ON SCROLL
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        nav.style.padding = "8px 25px";
        nav.style.background = "rgba(11, 26, 19, 0.8)"; // Forest green kabur
    } else {
        nav.style.padding = "12px 30px";
        nav.style.background = "rgba(255, 255, 255, 0.03)";
    }
});

// 5. PARALLAX EFFECT UNTUK VIDEO HERO
gsap.to(".hero-video", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});
