const header = document.querySelector('.header');

let isSticky = false;

const toggleSticky = () => {
	if (window.scrollY > 0) {
		if (!isSticky) {
			header.classList.add('sticky');
			isSticky = true;
		}
	} else {
		if (isSticky) {
			header.classList.remove('sticky');
			isSticky = false;
		}
	}
};

export const initHeaderScroll = () => {
	toggleSticky();
	document.addEventListener('scroll', toggleSticky);
};
