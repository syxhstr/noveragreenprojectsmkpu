/* MASTER JAVASCRIPT: NOVERA GREEN 
   LEVEL: PETRONAS/APPLE LUXURY 
*/

// 1. REGISTER GSAP SCROLLTRIGGER
// Pastikan kau dah panggil library GSAP kat index.html punya script tag!
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

// Reveal Animation yang akan RE-TRIGGER (ulang balik)
const reveals = document.querySelectorAll(".animate-scroll");
reveals.forEach((el) => {
    gsap.fromTo(el, 
        { y: 80, opacity: 0, scale: 0.98 },
        { 
            y: 0, opacity: 1, scale: 1, 
            duration: 1.2, 
            ease: "expo.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse" // Ini yang buat dia ulang balik!
            }
        }
    );
});

// Smooth Scroll untuk semua link anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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

// 3. RE-TRIGGER ANIMATION (SCROLL UP & DOWN)
// Kod ni akan buat card/text kau "naik" bila scroll down, dan "turun" bila scroll up balik.
const animateSections = document.querySelectorAll(".animate-scroll");

animateSections.forEach((section) => {
    gsap.fromTo(section, 
        { 
            y: 100, 
            opacity: 0,
            scale: 0.95 
        }, 
        {
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: section,
                start: "top 90%", // Mula animation bila 90% view masuk skrin
                end: "bottom 10%", // Reset bila dah lepas 10% skrin atas
                toggleActions: "play reverse play reverse", 
                /* toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
                   play = jalan animation
                   reverse = pusing balik animation bila scroll lepas (ni yang kau nak!)
                */
            }
        }
    );
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
