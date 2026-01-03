const preloadImages = (srcs) => {
  srcs.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

preloadImages([
  "./images/NEW-BASE-IMAGE.jpg",
  "./images/NEW-REVEAL-IMAGE.jpg"
]);

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("static-scroll");
});

document.querySelectorAll(".image-reveal").forEach(container => {
  const reveal = container.querySelector(".ir-reveal");
  const port = container.querySelector(".ir-port");
  if (!reveal || !port) return;

  const radius = container.dataset.radius || 200;

  container.addEventListener("mousemove", e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    reveal.style.setProperty("--x", `${x}px`);
    reveal.style.setProperty("--y", `${y}px`);
    reveal.style.setProperty("--r", `${radius}px`);

    port.style.left = `${x}px`;
    port.style.top = `${y}px`;
    port.style.opacity = 1;
  });

  container.addEventListener("mouseleave", () => {
    reveal.style.setProperty("--r", `0px`);
    port.style.opacity = 0;
  });
});

const imageReveal = document.querySelector(".image-reveal");

