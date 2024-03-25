export const initNavigation = () => {
	window.addEventListener('scroll', () => {
		const sections = document.querySelectorAll('[data-type="section"]');
		const headerArticle = document.querySelector('.header-article');
		const header = document.querySelector('.header');

		sections.forEach((section, index) => {
			if (headerArticle) {
				if (section.offsetTop - header.clientHeight - headerArticle.clientHeight - 2 <= window.scrollY) {
					document.querySelectorAll('.navigation__link').forEach((link) => {
						if (link.classList.contains('current')) {
							link.classList.remove('current');
						}
					});

					document.querySelectorAll('.navigation__item')[index].querySelector('a').classList.add('current');
				}
			} else {
				if (section.offsetTop - header.clientHeight - 2 <= window.scrollY) {
					document.querySelectorAll('.navigation__link').forEach((link) => {
						if (link.classList.contains('current')) {
							link.classList.remove('current');
						}
					});

					document.querySelectorAll('.navigation__item')[index].querySelector('a').classList.add('current');
				}
			}
		});
	});
};
