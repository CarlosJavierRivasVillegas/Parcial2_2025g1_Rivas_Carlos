document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Página 'Proyectos' cargada correctamente.");

  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalImage = document.getElementById('modalImage');

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const infoBtn = card.querySelector('.info-btn');
    card.addEventListener('mouseenter', () => {
      if (infoBtn) infoBtn.style.display = 'block';
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      if (infoBtn) infoBtn.style.display = 'none';
      card.classList.remove('hovered');
    });
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const description = card.getAttribute('data-description');
      const image = card.getAttribute('data-image');

      modalTitle.textContent = title;
      modalDescription.textContent = description;
      modalImage.src = image;
      modalImage.alt = `Imagen de ${title}`;
    });
  });

  // Animaciones de entrada para proyectos con GSAP
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.8, ease: "power3.out"});
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.project-card').forEach(element => {
    observer.observe(element);
  });

  // Cerrar modal con tecla ESC
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      const bsModal = bootstrap.Modal.getInstance(modal);
      if (bsModal) {
        bsModal.hide();
      }
    }
  });
});
