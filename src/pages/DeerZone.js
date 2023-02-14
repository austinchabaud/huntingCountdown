import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import deerzone from '../assets/images/deerzone.png';
const DeerZone = (props) => {
	return (
		<div>
			<Hero title={props.title} />
			<Content>
				<img className='responsive' alt='' src={deerzone} />
				<h1>Deer Zone Map 2023-2024</h1>
			</Content>
		</div>
	);
};
export default DeerZone;
