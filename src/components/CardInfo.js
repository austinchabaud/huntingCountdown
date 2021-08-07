import React from 'react';
import { useSpring, animated } from 'react-spring';

const CardInfo = (props) => {
	const style = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<animated.div className='g-card-info' style={style}>
			<p className='g-card-title'>{props.title}</p>
			<p className='g-card-sub-title'>{props.subTitle}</p>
			<p className='g-card-sub-title'>{props.openDate}</p>
			<div className='countdown'>
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Days</div>
				</div>
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Hours</div>
				</div>
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Minutes</div>
				</div>
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Seconds</div>
				</div>
			</div>
			<p className='g-card-title'>{props.title2}</p>
			<p className='g-card-sub-title'>{props.subTitle2}</p>
			<div className='countdown'>
				{props.timer}
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Days</div>
				</div>
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Hours</div>
				</div>
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Minutes</div>
				</div>
				<div className='exact'>
					<div className='value'>Time</div>
					<div className='type'>Seconds</div>
				</div>
			</div>
		</animated.div>
	);
};

export default CardInfo;
