//
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

slider2.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
slider2.addEventListener("mouseleave", () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
});

// Tambahkan manual tombol
function scrollSlider(direction) {
  const slideWidth = slider.querySelector("a").offsetWidth + 12;
  if (direction === "left") {
    scrollAmount -= slideWidth;
    if (scrollAmount < 0) scrollAmount = 0;
  } else {
    scrollAmount += slideWidth;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

function checkScrollButtons() {
  const slider = document.getElementById("desktop-slider");
  const leftBtn = document.getElementById("scroll-left-btn");
  const rightBtn = document.getElementById("scroll-right-btn");

  if (slider.scrollLeft === 0) {
    leftBtn.style.display = "none";
  } else {
    leftBtn.style.display = "block";
  }

  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
    rightBtn.style.display = "none";
  } else {
    rightBtn.style.display = "block";
  }
}

function scrollSlider(direction) {
  const slider = document.getElementById("desktop-slider");
  const scrollAmount = slider.clientWidth * 0.5;

  if (direction === "left") {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  } else {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  setTimeout(checkScrollButtons, 500);
}

window.onload = checkScrollButtons;

document
  .getElementById("desktop-slider")
  .addEventListener("scroll", checkScrollButtons);

const slider = document.getElementById("card-slider");
const cards = slider.children;
let currentIndex = 0;
let cardsPerPage = 3;

function updateCardsPerPage() {
  if (window.innerWidth >= 1024) {
    cardsPerPage = 3;
  } else if (window.innerWidth >= 768) {
    cardsPerPage = 2;
  } else {
    cardsPerPage = 1;
  }
  if (currentIndex > cards.length - cardsPerPage) {
    currentIndex = Math.max(0, cards.length - cardsPerPage);
  }
  updateSliderPosition();
}

window.addEventListener("load", updateCardsPerPage);
window.addEventListener("resize", updateCardsPerPage);

function updateSliderPosition() {
  const cardWidth = cards[0].offsetWidth;
  const offset = -currentIndex * cardWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > cards.length - cardsPerPage) {
    currentIndex = Math.max(0, cards.length - cardsPerPage);
  }
  updateSliderPosition();
}

updateSliderPosition();

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mainMenu = document.getElementById("main-menu");
  const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
  const topBar = document.getElementById("top-bar");
  const mainNavbar = document.getElementById("main-navbar");

  let lastScrollY = window.scrollY;

  mobileMenuButton.addEventListener("click", function () {
    mainMenu.classList.toggle("hidden");
    mainMenu.classList.toggle("mobile-menu-active");
  });

  mainMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        mainMenu.classList.add("hidden");
        mainMenu.classList.remove("mobile-menu-active");
      }
    });
  });

  dropdownToggles.forEach((dropdownToggle) => {
    const button = dropdownToggle.querySelector("button");
    const menu = dropdownToggle.querySelector("[data-dropdown-menu]");

    if (button && menu) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownToggles.forEach((otherDropdown) => {
          const otherMenu = otherDropdown.querySelector("[data-dropdown-menu]");
          if (
            otherMenu &&
            otherMenu !== menu &&
            !otherMenu.classList.contains("hidden")
          ) {
            otherMenu.classList.add("hidden");
          }
        });
        menu.classList.toggle("hidden");
      });

      document.addEventListener("click", function (event) {
        if (!dropdownToggle.contains(event.target)) {
          menu.classList.add("hidden");
        }
      });
    }
  });

  let isShrunk = false;

  window.addEventListener("scroll", function () {
    if (!isShrunk && window.scrollY > 50) {
      topBar.classList.add("top-bar-hidden");
      topBar.classList.remove("top-bar-visible");

      mainNavbar.classList.remove("py-4");
      mainNavbar.classList.add("py-2");

      isShrunk = true;
    } else if (isShrunk && window.scrollY < 30) {
      topBar.classList.remove("top-bar-hidden");
      topBar.classList.add("top-bar-visible");

      mainNavbar.classList.remove("py-2");
      mainNavbar.classList.add("py-4");

      isShrunk = false;
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mainMenu.classList.add("hidden");
      mainMenu.classList.remove("mobile-menu-active");
      dropdownToggles.forEach((dropdownToggle) => {
        const menu = dropdownToggle.querySelector("[data-dropdown-menu]");
        if (menu) {
          menu.classList.add("hidden");
        }
      });
    }
  });
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

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#main-menu a");
  const sections = document.querySelectorAll("section");
  const navbarHeight = document.querySelector("#main-navbar").offsetHeight;

  function activateNavLink() {
    let currentActiveId = null;

    if (window.scrollY < sections[0].offsetTop - navbarHeight + 50) {
      currentActiveId = sections[0].getAttribute("id");
    } else {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionBottom - 50
        ) {
          currentActiveId = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach((link) => {
      link.classList.remove("nav-link-active");
      if (link.getAttribute("href").substring(1) === currentActiveId) {
        link.classList.add("nav-link-active");
      }
    });
  }

  activateNavLink();

  window.addEventListener("scroll", activateNavLink);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });
});

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
