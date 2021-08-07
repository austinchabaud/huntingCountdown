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
				title2={props.item.title2}
				subTitle={props.item.subTitle}
				subTitle2={props.item.subTitle2}
				openDate={props.item.openDate}
				openDate2={props.item.openDate2}
			/>
		</div>
	);
};

export default Card;
