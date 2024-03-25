import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const investmentSplide = document.querySelector('.investment__splide');

export const initSplide = () => {
	document.addEventListener('DOMContentLoaded', () => {
		if (investmentSplide) {
			new Splide(investmentSplide, {
				role: 'region',
				type: 'loop',
				drag: 'free',
				focus: 'left',
				arrows: false,
				pagination: false,
				navigation: false,
				autoWidth: true,
				gap: 56,
				autoScroll: {
					speed: 1,
				},
			}).mount({ AutoScroll });

			investmentSplide.querySelectorAll('.splide__slide').forEach((slide) => slide.removeAttribute('role'));
		}
	});
};
