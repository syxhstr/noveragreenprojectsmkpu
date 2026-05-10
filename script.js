gsap.registerPlugin(ScrollTrigger);

// 1. HERO LOAD
gsap.from(".hero-content > *", {
    y: 50, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power4.out"
});

// 2. RE-TRIGGER ANIMATION ON SCROLL
const sections = document.querySelectorAll(".animate-scroll");

sections.forEach((section) => {
    gsap.fromTo(section, 
        { y: 100, opacity: 0 }, 
        {
            y: 0, opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});
