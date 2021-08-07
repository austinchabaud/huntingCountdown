import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const HomePage = (props) => {
	return (
		<div className='bg-dark'>
			<Hero title={props.title} subTitle={props.subTitle} text={props.text} />
			<Carousel />
			<p className='bg-light'>
				<small>
					*Specific season dates vary by zone and antler/antlerless deer
				</small>
			</p>
		</div>
	);
};

export default HomePage;
