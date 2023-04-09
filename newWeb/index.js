window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var logoContainer = document.querySelector(".logo-container");
  if (window.scrollY > 0) {
    header.classList.add("small");
    logoContainer.classList.add("small");
  } else {
    header.classList.remove("small");
    logoContainer.classList.remove("small");
  }
});

window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 0) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
