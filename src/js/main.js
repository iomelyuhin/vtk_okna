// ================================================================
// ====================Hamburger menu==============================
// ================================================================
const body = document.querySelector("body");
const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".header__mobile-menu");


hamburgerBtn.addEventListener("click", e => {
	e.preventDefault();
	hamburgerBtn.classList.toggle("is-active");
	hamburgerMenu.classList.toggle("active")
	body.classList.toggle("body-fix")
})