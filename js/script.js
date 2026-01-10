document.querySelectorAll("a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    const imgs = link.dataset.preload?.split(",");
    imgs?.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, { once: true });
});


document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navColumn = document.querySelector(".nav-column");
  const menuClose = document.querySelector(".menu-close");

  if (navToggle && navColumn) {
    navToggle.addEventListener("click", () => {
      navColumn.classList.toggle("open");
    });
  }

  if (menuClose && navColumn) {
    menuClose.addEventListener("click", () => {
      navColumn.classList.remove("open");
    });
  }
});

const galleryImages = document.querySelectorAll(
  '.masonry-gallery img, .image-module img'
);
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
