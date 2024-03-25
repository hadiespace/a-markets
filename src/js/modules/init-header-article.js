const headerArticle = document.querySelector('.header-article');
const headerArticleClose = document.querySelector('.header-article__close');
const header = document.querySelector('.header');
const page = document.querySelector('.page');

const onWindowResize = () => {
	header.style.top = `${headerArticle.clientHeight}px`;
	page.style.setProperty('--top', `${header.clientHeight + 1 + headerArticle.clientHeight}px`);
};

const onHeaderArticleCloseClick = () => {
	const date = new Date();
	date.setHours(date.getHours() + 24);
	document.cookie = `header-article=${Date.now()}; expires=${date.toUTCString()}`;
	headerArticle.classList.remove('visible');
	header.style.top = `${headerArticle.clientHeight}px`;
	page.style.setProperty('--top', `${header.clientHeight + 1}px`);
};

const createCookie = () => {
	if (!document.cookie.includes('header-article')) {
		headerArticle.classList.add('visible');
		header.style.top = `${headerArticle.clientHeight}px`;
		page.style.setProperty('--top', `${header.clientHeight + 1 + headerArticle.clientHeight}px`);

		window.addEventListener('resize', onWindowResize);
		headerArticleClose.addEventListener('click', onHeaderArticleCloseClick);
	}
};

export const initHeaderArticle = () => {
	if (headerArticle) {
		createCookie();
	}
};
