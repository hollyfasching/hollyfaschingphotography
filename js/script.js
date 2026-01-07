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
