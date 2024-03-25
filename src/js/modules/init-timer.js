const timers = document.querySelectorAll('.timer');

export const initTimer = () => {
	document.addEventListener('DOMContentLoaded', () => {
		timers.forEach((timer) => {
			const date = new Date(timer.dataset.date);

			const daysVal = document.querySelector('.timer__days .timer__val');
			const hoursVal = document.querySelector('.timer__hours .timer__val');
			const minutesVal = document.querySelector('.timer__minutes .timer__val');

			const daysText = document.querySelector('.timer__days .timer__text');
			const hoursText = document.querySelector('.timer__hours .timer__text');
			const minutesText = document.querySelector('.timer__minutes .timer__text');

			function declOfNum(number, titles) {
				const cases = [2, 0, 1, 1, 1, 2];
				return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
			}

			const timeCount = () => {
				const now = new Date();
				const leftUntil = date - now;

				const days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
				const hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
				const minutes = Math.floor(leftUntil / 1000 / 60) % 60;

				daysVal.textContent = days;
				hoursVal.textContent =	hours;
				minutesVal.textContent = minutes;

				daysText.textContent = declOfNum(days, daysText.dataset.timer.split(','));
				hoursText.textContent = declOfNum(hours, hoursText.dataset.timer.split(','));
				minutesText.textContent = declOfNum(minutes, minutesText.dataset.timer.split(','));
			};

			timeCount();
			setInterval(timeCount, 1000);
		});
	});
};
