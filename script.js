gsap.registerPlugin(ScrollTrigger);

// Reveal Animation (Apple Standard)
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { y: 80, opacity: 0 }, 
        { 
            y: 0, opacity: 1, duration: 1, 
            ease: "expo.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 92%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// ULTRA-SMOOTH REVEAL
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.fromTo(elem, 
        { y: 60, opacity: 0, scale: 0.95 }, 
        { 
            y: 0, opacity: 1, scale: 1,
            duration: 1.2, 
            ease: "expo.out",
            scrollTrigger: {
                trigger: elem,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// FLOATING LEAVES (Particles)
setInterval(() => {
    const leaf = document.createElement('div');
    leaf.innerHTML = "🍂";
    leaf.style.position = "fixed";
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.top = "-50px";
    leaf.style.fontSize = "20px";
    leaf.style.opacity = "0.2";
    leaf.style.pointerEvents = "none";
    leaf.style.zIndex = "1";
    document.body.appendChild(leaf);

    gsap.to(leaf, {
        y: "110vh",
        x: "random(-100, 100)",
        rotation: "random(0, 360)",
        duration: Math.random() * 5 + 5,
        ease: "none",
        onComplete: () => leaf.remove()
    });
}, 1500);
