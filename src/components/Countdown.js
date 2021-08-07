import React, { useState, useRef, useEffect } from 'react';

const Countdown = () => {
	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');

	let interval = useRef();

	const startTimer = () => {
		const countdownDate = new Date('August 27, 2021 00:00:00 ').getTime();
		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;
			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance < 0) {
				clearInterval();
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	//componentDiMount
	useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<section className='timer-container'>
			<section className='timer'>
				<div>
					<h2>Countdown timer</h2>
					<p>New fake timer react</p>
				</div>
				<div>
					<section>
						<p>{timerDays}</p>
						<p>
							<small>Days</small>
						</p>
					</section>
					<span>:</span>
					<section>
						<p>{timerHours}</p>
						<p>
							<small>Hours</small>
						</p>
					</section>
					<span>:</span>
					<section>
						<p>{timerMinutes}</p>
						<p>
							<small>Minutes</small>
						</p>
					</section>
					<span>:</span>
					<section>
						<p>{timerSeconds}</p>
						<p>
							<small>Seconds</small>
						</p>
					</section>
				</div>
			</section>
		</section>
	);
};

export default Countdown;
