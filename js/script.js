// Așteptăm să se încarce complet pagina
document.addEventListener("DOMContentLoaded", () => {

  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }


  // ===== LIGHTBOX =====
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  const galleryItems = document.querySelectorAll('.gallery-item');

  // Deschidere lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {

      // extragem imaginea din background
      const bg = item.style.background || item.style.backgroundImage;
      let url = bg.match(/url\(["']?(.+?)["']?\)/);

      if (url) {
        url = url[1];
      } else {
        url = 'image-logo/logo1.jpg'; // fallback
      }

      lightboxImg.src = url;

      const caption = item.querySelector('.gallery-overlay');
      lightboxCaption.textContent = caption ? caption.textContent : '';

      lightbox.style.display = 'flex';
    });
  });

  // Închidere cu X
  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  // Închidere click pe fundal
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  }

});
