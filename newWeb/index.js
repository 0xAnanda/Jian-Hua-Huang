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

//這樣做的效果是，在頁面頂部右下方會出現一個圓形按鈕，當用戶向下滾動頁面時，按鈕會自動顯示，用戶點擊按鈕時，頁面會平滑地滾動回到頂部。
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

//綁定按鈕的點擊事件，並把資訊加入購物車：

var addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    var name = this.parentElement.querySelector("h3").textContent;
    var type = this.parentElement.classList.contains("course-details")
      ? "course"
      : "space";
    addToCart(name, type);
  });
});

function addToCart(name, type) {
  // 將商品名稱和類型加入購物車
  console.log(`Added ${name} (${type}) to cart.`);
}
