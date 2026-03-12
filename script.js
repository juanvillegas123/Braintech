document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animación de Anillos
    const rings = document.querySelectorAll('.orbit-ring');
    let rotation = 0;

    function animateRings() {
        rotation += 0.05;
        rings.forEach((ring, index) => {
            const dir = index % 2 === 0 ? 1 : -1;
            const speed = (index + 1) * 0.4;
            ring.style.transform = `translate(-50%, -50%) rotate(${rotation * dir * speed}deg)`;
        });
        requestAnimationFrame(animateRings);
    }
    animateRings();

    // 2. Scroll Reveal (Transiciones)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-reveal');
            }
        });
    }, { threshold: 0.15 });

    const items = document.querySelectorAll('.reveal-fade-up, .reveal-fade-left, .reveal-fade-right');
    items.forEach(item => observer.observe(item));
});