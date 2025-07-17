// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const sections = document.querySelectorAll(".position-section");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const position = this.getAttribute("data-position");

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Show/hide sections based on filter
      if (position === "all") {
        sections.forEach((section) => (section.style.display = "block"));
      } else {
        sections.forEach((section) => {
          if (section.id === `${position}-section`) {
            section.style.display = "block";
          } else {
            section.style.display = "none";
          }
        });
      }
    });
  });

  // Smooth scrolling for navigation
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
