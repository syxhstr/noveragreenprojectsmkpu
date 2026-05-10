document.addEventListener('DOMContentLoaded', () => {

    // 1. HAMBURGER MENU (MODERN ANIMATION)
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    
    if(burger && navLinks) {
        const lines = burger.querySelectorAll('div');
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'translateY(7px) rotate(45deg)';
                lines[1].style.opacity = '0';
                lines[2].style.transform = 'translateY(-7px) rotate(-45deg)';
            } else {
                lines.forEach(l => l.style.transform = 'none');
                lines[1].style.opacity = '1';
            }
        });
    }

    // 2. FLOATING LEAVES (PARTICLES)
    const leafContainer = document.getElementById('leaf-container');
    if(leafContainer && typeof gsap !== 'undefined') {
        const leaves = ['🍃', '🍂', '🌿'];
        for (let i = 0; i < 15; i++) {
            let leaf = document.createElement('div');
            leaf.innerHTML = leaves[Math.floor(Math.random() * leaves.length)];
            leaf.style.position = 'absolute';
            leaf.style.left = Math.random() * 100 + 'vw';
            leaf.style.top = '-50px';
            leaf.style.fontSize = (Math.random() * 15 + 10) + 'px';
            leaf.style.opacity = '0.2';
            leafContainer.appendChild(leaf);

            gsap.to(leaf, {
                y: '110vh',
                x: '+=100',
                rotation: 360,
                duration: Math.random() * 15 + 10,
                repeat: -1,
                delay: Math.random() * 5,
                ease: "none"
            });
        }
    }

    // 3. SCROLL REVEAL (EFEK TIMBUL)
    if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.reveal').forEach(elem => {
            gsap.fromTo(elem, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1.2, scrollTrigger: {
                    trigger: elem, start: "top 85%", toggleActions: "play none none reverse"
                }}
            );
        });
    }
});

// Contoh kalau kau guna event listener
const volunteerForm = document.getElementById('volunteer-form');

if(volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Elak page refresh
        // Simpan data atau buat apa yang patut...
        
        // Terus pergi ke page Thank You
        window.location.href = "thank-you.html";
    });
}
