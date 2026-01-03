window.addEventListener(
  "wheel",
  (e) => {
    if (document.getElementById("lightbox")?.classList.contains("active")) return;

    e.preventDefault();
    scrollAccumulator += e.deltaY;

    if (Math.abs(scrollAccumulator) >= SCROLL_THRESHOLD) {
      if (scrollAccumulator > 0 && currentIndex < images.length - 1) {
        currentIndex++;
      } else if (scrollAccumulator < 0 && currentIndex > 0) {
        currentIndex--;
      }

      updateImage(currentIndex);
      scrollAccumulator = 0;
    }
  },
  { passive: false }
);

