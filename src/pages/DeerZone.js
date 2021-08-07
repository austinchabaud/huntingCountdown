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
				<p>Deer Zone Map 2021-2022</p>
			</Content>
		</div>
	);
};
export default DeerZone;
