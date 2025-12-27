// Preload images to eliminate swap delay
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

document.body.classList.add("static-scroll");


document.querySelectorAll(".image-reveal").forEach(container => {
  const reveal = container.querySelector(".ir-reveal");
  const port = container.querySelector(".ir-port");
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




// ---- Virtual scroll image chapters ----

const imageReveal = document.querySelector(".image-reveal");
const baseImg = imageReveal.querySelector(".ir-base");
const revealImg = imageReveal.querySelector(".ir-reveal");

// Image chapters
const imageSets = [
  {
    base: "./images/utah2025-12162025-8.jpg",
    reveal: "./images/beatenpathco-96.JPG"
  },
  {
    base: "./images/hickoryrun-08122024-22.JPG",
    reveal: "./images/vuori-10.JPG"
  }
];

let virtualScroll = 0;
let currentSet = 0;

const FORWARD_THRESHOLD = 300;
const BACK_THRESHOLD = 150;

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();

    virtualScroll += e.deltaY;
    virtualScroll = Math.max(0, Math.min(virtualScroll, FORWARD_THRESHOLD * 2));

    // Scroll DOWN → next image set
    if (currentSet === 0 && virtualScroll > FORWARD_THRESHOLD) {
      baseImg.src = imageSets[1].base;
      revealImg.src = imageSets[1].reveal;
      currentSet = 1;
    }

    // Scroll UP → previous image set
    if (currentSet === 1 && virtualScroll < BACK_THRESHOLD) {
      baseImg.src = imageSets[0].base;
      revealImg.src = imageSets[0].reveal;
      currentSet = 0;
    }
  },
  { passive: false }
);