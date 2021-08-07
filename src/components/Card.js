import React from 'react';

import CardInfo from '../components/CardInfo';

const Card = (props) => {
	return (
		<div className='d-inline-block g-card'>
			<img
				className='g-card-image'
				src={props.item.imgSrc}
				alt={props.item.imgSrc}
			/>
			<CardInfo
				title={props.item.title}
				subTitle={props.item.subTitle}
				stats={props.item.stats}
				link={props.item.link}
				timer={props.item.timer}
			/>
		</div>
	);
};

export default Card;
