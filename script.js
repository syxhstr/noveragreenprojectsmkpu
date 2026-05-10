gsap.registerPlugin(ScrollTrigger);

// Hero Entrance
gsap.from(".hero-content > *", {
    y: 50, opacity: 0, duration: 1.5, stagger: 0.3, ease: "power4.out"
});

// Scroll Reveal - RE-TRIGGER
const reveals = document.querySelectorAll(".animate-scroll");
reveals.forEach((el) => {
    gsap.fromTo(el, 
        { y: 80, opacity: 0 }, 
        {
            y: 0, opacity: 1, duration: 1.2,
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});
