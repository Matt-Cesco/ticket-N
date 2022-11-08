// Search-bar appear on click

const searchDivMobile = document.querySelector(".search-bar-appear-mobile");
const searchBtnMobile = document.querySelector(".search-mobile-button");


searchBtnMobile.addEventListener("click", function () {
  if (searchDivMobile.classList.contains("show")) {
    searchDivMobile.classList.remove("show");
  } else {
    searchDivMobile.classList.add("show");
  }
});

// Opening and Closing mobile menu

let icon = document.getElementById("icon");
let icon1 = document.getElementById("a");
let icon2 = document.getElementById("b");
let icon3 = document.getElementById("c");
let nav = document.getElementById("nav");
let blue = document.getElementById("blue");
let navMobile = document.querySelector(".nav-content-mobile");

icon.addEventListener("click", function () {
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
  if (navMobile.classList.contains("show")) {
    navMobile.classList.remove("show");
    document.body.style.overflowY = "scroll";
  } else {
    navMobile.classList.add("show");
    document.body.style.overflowY = "hidden";
  }
});

// Navbar sticky

var stickyNavbar = (function () {
  var navbar = document.querySelector(".navbar-sticky");
  if (navbar == null) return;
  var navbarClass = navbar.classList,
    navbarH = navbar.offsetHeight,
    scrollOffset = 1;
  window.addEventListener("scroll", function (e) {
    if (e.currentTarget.pageYOffset > scrollOffset) {
      document.body.style.paddingTop = navbarH + "px";
      navbar.classList.add("navbar-stuck");
    } else {
      document.body.style.paddingTop = "";
      navbar.classList.remove("navbar-stuck");
    }
  });
})();
