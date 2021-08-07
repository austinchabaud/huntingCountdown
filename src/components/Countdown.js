import React, { useState, useRef, useEffect } from 'react';

const Countdown = (props) => {
	const [timerDays, setTimerDays] = useState('00');
	const [timerHours, setTimerHours] = useState('00');
	const [timerMinutes, setTimerMinutes] = useState('00');
	const [timerSeconds, setTimerSeconds] = useState('00');

	let interval = useRef();

	const startTimer = () => {
		const countdownDate = new Date(props.openDate).getTime();
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
		<div className='countdown'>
			<div className='exact'>
				<div className='value'>{timerDays}</div>
				<div className='type'>Days</div>
			</div>
			<div className='exact'>
				<div className='value'>{timerHours}</div>
				<div className='type'>Hours</div>
			</div>
			<div className='exact'>
				<div className='value'>{timerMinutes}</div>
				<div className='type'>Minutes</div>
			</div>
			<div className='exact'>
				<div className='value'>{timerSeconds}</div>
				<div className='type'>Seconds</div>
			</div>
		</div>
	);
};

export default Countdown;
