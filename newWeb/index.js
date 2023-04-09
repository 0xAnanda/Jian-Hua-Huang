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

//用者點擊"會員"時，下拉式選單就會顯示出"登入"和"註冊"選項。當使用者再次點擊"會員"或選擇其中一個選項時，下拉式選單就會隱藏。

// 獲取所有下拉式選單元素
const dropdownMenus = document.querySelectorAll(".dropdown-menu");

// 給每個下拉式選單元素添加click事件監聽器
dropdownMenus.forEach((menu) => {
  menu.addEventListener("click", () => {
    // 隱藏下拉式選單
    menu.style.display = "none";
  });
});

// 獲取所有下拉式選單觸發元素
const dropdownTriggers = document.querySelectorAll("nav li");

// 給每個下拉式選單觸發元素添加click事件監聽器
dropdownTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    // 獲取觸發元素對應的下拉式選單
    const dropdownMenu = trigger.querySelector(".dropdown-menu");
    // 判斷下拉式選單是否顯示，如果顯示，則隱藏它，否則顯示它
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
  });
});

//設定導航列滾動時變透明
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
