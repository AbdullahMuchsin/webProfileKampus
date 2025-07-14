// VALID
let currentIndex2 = 0;

function moveSlide(step) {
  const slider = document.getElementById("card-slider");
  const totalCards = slider.children.length;
  const maxIndex = totalCards - 1;

  const cardWidth = slider.children[0].offsetWidth + 32; // card + padding

  currentIndex2 += step;

  if (currentIndex2 < 0) currentIndex2 = 0;
  if (currentIndex2 > maxIndex) currentIndex2 = maxIndex;

  slider.style.transform = `translateX(-${currentIndex2 * cardWidth}px)`;
}

// VALID
const slider2 = document.getElementById("desktop-slider");
let scrollAmount = 0;

function autoSlide() {
  if (!slider2) return;

  const slideWidth = slider2.querySelector("a").offsetWidth + 12;
  scrollAmount += slideWidth;

  if (scrollAmount >= slider2.scrollWidth - slider2.clientWidth) {
    scrollAmount = 0;
  }

  slider2.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

let autoSlideInterval = setInterval(autoSlide, 3000);

// VALID
slider2.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
slider2.addEventListener("mouseleave", () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
});

const desktopTabs = document.querySelectorAll(".tab-link");
const desktopContents = document.querySelectorAll(".tab-content");
const mobileTabLinks = document.querySelectorAll(".mobile-tab-link");
const mobileTabContents = document.querySelectorAll(".mobile-tab-content");

function hideAllMobileContents() {
  if (window.innerWidth < 768) {
    desktopContents.forEach((c) => c.classList.add("hidden"));
  }
}

desktopTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    desktopTabs.forEach((t) => {
      t.classList.remove("border-b-[6px]", "border-orange-400", "text-white");
      t.classList.add("text-gray-200");
    });
    desktopContents.forEach((c) => c.classList.add("hidden"));

    tab.classList.add("border-b-[6px]", "border-orange-400", "text-white");
    tab.classList.remove("text-gray-200");
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.remove("hidden");
  });
});

if (desktopTabs.length > 0) {
  const firstContentId = desktopTabs[0].getAttribute("data-tab");

  if (window.innerWidth >= 768) {
    desktopTabs[0].classList.add(
      "border-b-[6px]",
      "border-orange-400",
      "text-white"
    );
    desktopTabs[0].classList.remove("text-gray-200");
    document.getElementById(firstContentId).classList.remove("hidden");
  } else {
    hideAllMobileContents();
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    hideAllMobileContents();
  } else {
    if (desktopTabs.length > 0) {
      const firstContentId = desktopTabs[0].getAttribute("data-tab");
      desktopTabs[0].classList.add(
        "border-b-[6px]",
        "border-orange-400",
        "text-white"
      );
      desktopTabs[0].classList.remove("text-gray-200");
      document.getElementById(firstContentId).classList.remove("hidden");
    }
  }
});

mobileTabLinks.forEach((tabLink) => {
  tabLink.addEventListener("click", () => {
    const targetTab = tabLink.getAttribute("data-tab");
    const targetContentId = `${targetTab}-mobile-content`;
    const targetContent = document.getElementById(targetContentId);
    const arrowIcon = tabLink.querySelector(".arrow-icon");

    if (targetContent.classList.contains("hidden")) {
      mobileTabContents.forEach((content) => {
        if (content !== targetContent) {
          content.classList.add("hidden");
          const otherTabLink = content.previousElementSibling;
          if (otherTabLink && otherTabLink.querySelector(".arrow-icon")) {
            otherTabLink
              .querySelector(".arrow-icon")
              .classList.remove("rotate-180");
          }
        }
      });
      targetContent.classList.remove("hidden");
      arrowIcon.classList.add("rotate-180");
    } else {
      targetContent.classList.add("hidden");
      arrowIcon.classList.remove("rotate-180");
    }
  });
});

mobileTabContents.forEach((content) => content.classList.add("hidden"));

// START TOP NAVBAR
document.addEventListener("click", function (e) {
  const dropdownBtn = e.target.closest("[data-dropdown-toggle]");
  const openMenu = document.querySelector(".language-menu.show");

  if (dropdownBtn) {
    const menu = dropdownBtn.querySelector(".language-menu");
    menu.classList.toggle("show");
  } else if (openMenu) {
    openMenu.classList.remove("show");
  }
});

//
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    var menu = document.getElementById("main-menu");
    menu.classList.toggle("show");
  });

//
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-item");
  const dotsContainer = document.querySelector(".carousel-dots");
  let currentIndex = 0;

  // Create dots
  slides.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function updateCarousel() {
    document.querySelector(".carousel-inner").style.transform = `translateX(-${
      currentIndex * 100
    }%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function goToSlide(idx) {
    currentIndex = idx;
    updateCarousel();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  // Start auto slide
  let interval = setInterval(nextSlide, 4000);

  updateCarousel();
});

// TRASH
