window.addEventListener('DOMContentLoaded', () => {
	var menuToggler = document.getElementById("navbar-toggler");
	var mobileMenu = document.getElementById("navbarResponsive");
	menuToggler.classList.add("collapsed");
	menuToggler.addEventListener("click", function () {
		if (menuToggler.classList.contains("collapsed")) {
			mobileMenu.classList.add("show");
			menuToggler.classList.remove("collapsed");
		} else {
			mobileMenu.classList.remove("show");
			menuToggler.classList.add("collapsed");
		}
	});
});
