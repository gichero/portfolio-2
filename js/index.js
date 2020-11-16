/** @format */

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const floatButton = document.getElementById("btn_float");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 150 ||
		document.documentElement.scrollTop > 150
	) {
		floatButton.style.display = "block";
	} else {
		floatButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

navToggle.addEventListener("click", () => {
	document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		document.body.classList.remove("nav-open");
	});
});
