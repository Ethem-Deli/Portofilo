document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const dropdowns = [
    { btn: "cvDropdownBtn", menu: "cvDropdown" },
    { btn: "projDropdownBtn", menu: "projDropdown" },
  ];

  dropdowns.forEach(({ btn, menu }) => {
    const button = document.getElementById(btn);
    const content = document.getElementById(menu);
    if (!button || !content) return;

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const isVisible = content.classList.contains("show");

      // close all
      document.querySelectorAll(".dropdown-content.show").forEach((openMenu) => {
        openMenu.classList.remove("show");
      });

      // toggle clicked
      if (!isVisible) content.classList.add("show");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-content.show")
        .forEach((menu) => menu.classList.remove("show"));
    }
  });

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      nav.classList.toggle("show");
      // close dropdowns when toggling burger
      document.querySelectorAll(".dropdown-content.show")
        .forEach((menu) => menu.classList.remove("show"));
    });
  }

  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav") && !e.target.closest("#hamburger")) {
      nav?.classList.remove("show");
      hamburger?.classList.remove("active");
      document.querySelectorAll(".dropdown-content.show")
        .forEach((menu) => menu.classList.remove("show"));
    }
  });
});
