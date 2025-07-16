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
