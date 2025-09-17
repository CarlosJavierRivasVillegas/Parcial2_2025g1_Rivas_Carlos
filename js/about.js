// Script para animaciones al hacer scroll en la página "Nosotros"
document.addEventListener('DOMContentLoaded', () => {
    // Animación de los elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Aplicar animaciones a elementos con clases de Animate.css
    document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
    });
});
