// START TOP NAVBAR
document.addEventListener("click", function (e) {
  const dropdownBtn = e.target.closest("[data-dropdown-toggle]");
  const openMenu = document.querySelector(".language-menu-top-navbar.show");

  if (dropdownBtn) {
    const menu = dropdownBtn.querySelector(".language-menu-top-navbar");
    menu.classList.toggle("show");
  } else if (openMenu) {
    openMenu.classList.remove("show");
  }
});
// TOP NAVBAR

// START MAIN NAVBAR
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("show");
  });

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("main-navbar");
    if (window.scrollY > 5) {
      navbar.style.marginTop = "0";
      navbar.style.padding = ".85rem 0"; // harus pakai style.
    } else {
      navbar.style.padding = "1rem 0";
      navbar.style.marginTop = "44px";
    }
  });
});
// END MAIN NAVBAR

// START SLIDE AKREDITASI
document.addEventListener("DOMContentLoaded", () => {
  const accreditationContent = document.querySelector(".accreditation-content");
  const images = accreditationContent.querySelectorAll("img");
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");

  let currentIndex = 0;
  const totalImages = images.length;

  function showSlide(index) {
    if (index >= totalImages) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalImages - 1;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    accreditationContent.style.transform = `translateX(${offset}%)`;
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });
  }

  const autoSlideInterval = 3000;
  let slideInterval;

  function startAutoSlide() {
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, autoSlideInterval);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  startAutoSlide();

  accreditationContent.addEventListener("mouseenter", stopAutoSlide);
  accreditationContent.addEventListener("mouseleave", startAutoSlide);

  showSlide(currentIndex);
});
// END SLIDE AKREDITASI

// START CHANGE PROGRAM STUDI
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    btn.classList.add("active");

    const tabId = btn.getAttribute("data-tab");
    document.getElementById(`${tabId}-content`).classList.add("active");
  });
});

const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".feature-card, .stat-card, .badge"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
};
// END CHANGE PROGRAM STUDI

// START ANIMATION STATISTIK
document.querySelectorAll(".feature-card, .stat-card, .badge").forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px)";
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });
});
// END ANIMATION STATISTIK
