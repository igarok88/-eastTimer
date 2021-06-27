window.addEventListener("DOMContentLoaded", () => {
	const deadLine = "2021-06-30"; //set last date

	function getTimeRemaining(endtime) {
		//get difference between now date and last date
		const t = Date.parse(endtime) - Date.parse(new Date()),
			//convertion in days, hours, minutes and seconds
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days,
			hours,
			minutes,
			seconds,
		};
	}

	//add zero in number with one symbol
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	//function get HTML elements and refresh him every second
	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector("#hours"),
			minutes = timer.querySelector("#minutes"),
			seconds = timer.querySelector("#seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		//paste in HTML new value
		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			//stop timer
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock(".timer", deadLine);
});
