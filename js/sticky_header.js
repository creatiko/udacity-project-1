window.addEventListener('DOMContentLoaded', () => {
	let scrollPos = 0;
	const siteNav = document.getElementById('siteNav');
	const headerHeight = siteNav.clientHeight;
	window.addEventListener('scroll', function () {
		const currentTop = document.body.getBoundingClientRect().top * -1;
		if (currentTop < scrollPos) {
			// Scrolling Up
			if (currentTop > 0 && siteNav.classList.contains('is-fixed')) {
				siteNav.classList.add('is-visible');
			} else {
				console.log(123);
				siteNav.classList.remove('is-visible', 'is-fixed');
			}
		} else {
			// Scrolling Down
			siteNav.classList.remove(['is-visible']);
			if (currentTop > headerHeight && !siteNav.classList.contains('is-fixed')) {
				siteNav.classList.add('is-fixed');
			}
		}
		scrollPos = currentTop;
	});
});
