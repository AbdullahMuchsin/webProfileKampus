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

// START TOGGLE FAQ ANSWARE
function toggleFAQ(id) {
  const answer = document.getElementById(`faq-answer-${id}`);
  const icon = document
    .querySelector(`#faq-answer-${id}`)
    .previousElementSibling.querySelector(".faq-icon i");

  answer.classList.toggle("active");

  if (answer.classList.contains("active")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}
// END TOGGLE FAQ ANSWARE

// START FORM SUBMIT
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  alert(
    `Terima kasih ${name}! Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda di ${email} segera.`
  );

  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  toggleFAQ(1);
});
// END FORM SUBMIT