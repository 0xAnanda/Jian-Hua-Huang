//當頁面向下滾動時，將頂部標題和徽標縮小
const shrinkHeaderOnScroll = () => {
  const header = document.querySelector("header");
  const logoContainer = document.querySelector(".logo-container");

  if (window.scrollY > 0) {
    header.classList.add("small");
    logoContainer.classList.add("small");
  } else {
    header.classList.remove("small");
    logoContainer.classList.remove("small");
  }
};

//滾動到頁面頂部的函數
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//在頁面向下滾動時，顯示回到頂部按鈕
const showScrollToTopButtonOnScroll = () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 0) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

//將商品添加到購物車的函數
const addToCart = (name, type) => {
  console.log(`Added ${name} (${type}) to cart.`);
};

//在點擊添加到購物車按鈕時，將商品添加到購物車
const handleAddToCartButtonClick = (event) => {
  event.preventDefault();
  const productName = event.currentTarget.parentElement.querySelector("h3").textContent;
  const productType = event.currentTarget.parentElement.classList.contains("course-details") ? "course" : "space";
  addToCart(productName, productType);
};

//顯示和隱藏下拉式選單的函數
const toggleDropdownMenu = (dropdownMenu) => {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
};

//在點擊會員按鈕時，顯示或隱藏下拉式選單
const handleDropdownTriggerClick = (event) => {
  const dropdownMenu = event.currentTarget.querySelector(".dropdown-menu");
  toggleDropdownMenu(dropdownMenu);
};

//當滾動時導航列變透明
const makeHeaderTransparentOnScroll = () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll("header nav ul li a");

  if (window.scrollY !== 0) {
    header.style.backgroundColor = "rgba(0,0,0,0.2)";
    navLinks.forEach((link) => {
      link.style.color = "white";
    });
  } else {
    header.style = "";
    navLinks.forEach((link) => {
      link.style.color = "white";
let header = document.querySelector("header");
let achor = document.querySelectorAll("header nav ul li a");
window.addEventListener("scroll", () => {
  if (window.scrollY != 0) {
    header.style.backgroundColor = "rgba(0,0,0,0.2)";
    achor.forEach((a) => {
      a.style.color = "white";
    });
  } else {
    header.style = "";
    achor.forEach((a) => {
      a.style.color = "white";
    });
  }
});