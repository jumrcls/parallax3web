document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('.overlay');
  const overlayImage = overlay.querySelector('img');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Ouvrir l'overlay
  galleryItems.forEach(item => {
      item.addEventListener('click', function() {
          const originalImage = this.querySelector('img');
          const overlayImageSrc = originalImage.getAttribute('data-overlay');

          if (!overlayImageSrc) return; // Empêche une erreur si l'attribut est manquant

          overlayImage.src = overlayImageSrc;
          overlayImage.alt = originalImage.alt || 'Image agrandie';
          overlay.classList.add('active');
          document.body.style.overflow = 'hidden'; // Bloque le scroll
      });
  });

  // Fermer l'overlay en cliquant sur le fond (pas sur l'image)
  overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
          closeOverlay();
      }
  });

  // Fermer l'overlay avec la touche Echap
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
          closeOverlay();
      }
  });

  function closeOverlay() {
      overlay.classList.remove('active');
      document.body.style.overflow = ''; // Réactive le scroll

      // Attendre que l'animation de fermeture se termine avant de supprimer l'image
      setTimeout(() => {
          overlayImage.src = '';
      }, 300);
  }
});

