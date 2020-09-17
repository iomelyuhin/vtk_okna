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

//!=====================================================================
//!========================OPEN POPUP FORM==============================
//!=====================================================================
const popup = document.querySelector(".js__popup");
const callbackBtn = document.querySelector(".js__callbackButton");

function isOpenedPopup() {
	if (popup.classList.contains("active")) {
		return true;
	} else {
		return false;
	}
}

function clickOnPopupBtn(btn) {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		if (!isOpenedPopup()) {
			openPopup();
		}
	});
}

function openPopup() {
	popup.classList.add("active");
	body.style.overflow = "hidden";
	body.style.paddingRight = "14px";
}

function closePopup() {
	popup.classList.remove("active");
	body.style.overflow = "initial";
	body.style.paddingRight = "initial";
}
if (callbackBtn) {
	clickOnPopupBtn(callbackBtn);
}
popup.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.classList.contains("js__popup")) {
		closePopup();
	}
});