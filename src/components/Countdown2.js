import React, { useState, useRef, useEffect } from 'react';

const Countdown2 = (props) => {
	const [timerDays2, setTimerDays2] = useState('00');
	const [timerHours2, setTimerHours2] = useState('00');
	const [timerMinutes2, setTimerMinutes2] = useState('00');
	const [timerSeconds2, setTimerSeconds2] = useState('00');

	let interval = useRef();

	const startTimer2 = () => {
		const countdownDate2 = new Date(props.openDate2).getTime();
		interval = setInterval(() => {
			const now2 = new Date().getTime();
			const distance2 = countdownDate2 - now2;
			let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
			let hours2 = Math.floor(
				(distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
			let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

			if (distance2 < 0) {
				clearInterval();
			} else {
				setTimerDays2(days2);
				setTimerHours2(hours2);
				setTimerMinutes2(minutes2);
				setTimerSeconds2(seconds2);
			}
		}, 1000);
	};

	//componentDiMount
	useEffect(() => {
		startTimer2();
		return () => {
			clearInterval(interval.current);
		};
	}, []);

	return (
		<div className='countdown'>
			<div className='exact'>
				<div className='value'>{timerDays2}</div>
				<div className='type'>Days</div>
			</div>
			<div className='exact'>
				<div className='value'>{timerHours2}</div>
				<div className='type'>Hours</div>
			</div>
			<div className='exact'>
				<div className='value'>{timerMinutes2}</div>
				<div className='type'>Minutes</div>
			</div>
			<div className='exact'>
				<div className='value'>{timerSeconds2}</div>
				<div className='type'>Seconds</div>
			</div>
		</div>
	);
};

export default Countdown2;
