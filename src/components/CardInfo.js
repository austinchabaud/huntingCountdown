import React from 'react';
import Countdown from './Countdown';
import Countdown2 from './Countdown2';
import { useSpring, animated } from 'react-spring';

const CardInfo = (props) => {
	const style = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<animated.div className='g-card-info' style={style}>
			<p className='g-card-title'>{props.title}</p>
			<p className='g-card-sub-title'>{props.subTitle}</p>
			<Countdown openDate={props.openDate} />
			<p className='g-card-title'>{props.title2}</p>
			<p className='g-card-sub-title'>{props.subTitle2}</p>
			<Countdown2 openDate2={props.openDate2} />
		</animated.div>
	);
};

export default CardInfo;
