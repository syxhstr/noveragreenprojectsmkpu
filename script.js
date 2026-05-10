gsap.registerPlugin(ScrollTrigger);

// Reveal Animation yang akan RE-TRIGGER (ulang balik)
const reveals = document.querySelectorAll(".animate-scroll");
reveals.forEach((el) => {
    gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        { 
            y: 0, opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});
