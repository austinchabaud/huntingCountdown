import React from 'react';

import Card from './Card';

import zonea from '../assets/images/zonea.png';
import zoneb from '../assets/images/zoneb.png';
import zonec from '../assets/images/zonec.png';
import zoned from '../assets/images/zoned.png';
import zonee from '../assets/images/zonee.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					id: 0,
					title: 'Bow and Arrow',
					subTitle: 'Oct. 15, 2021 - Feb. 10, 2022',
					title2: 'Firearm',
					imgSrc: zonea,
					subTitle2: 'Nov. 15, 2021 - Feb. 10, 2022',
					selected: true,
					openDate: 'December 27, 2021 00:00:00 ',
				},
				{
					id: 1,
					title: 'Bow and Arrow',
					subTitle: 'Oct. 15, 2021 - Feb. 10, 2022',
					title2: 'Firearm',
					imgSrc: zoneb,
					subTitle2: 'Nov. 15, 2021 - Feb. 10, 2022',
					selected: true,
				},
				{
					id: 2,
					title: 'Bow and Arrow',
					subTitle: 'Oct. 15, 2021 - Feb. 10, 2022',
					title2: 'Firearm',
					imgSrc: zonec,
					subTitle2: 'Nov. 15, 2021 - Feb. 10, 2022',
					selected: true,
				},
				{
					id: 3,
					title: 'Bow and Arrow',
					subTitle: 'Oct. 15, 2021 - Feb. 10, 2022',
					title2: 'Firearm',
					imgSrc: zoned,
					subTitle2: 'Nov. 15, 2021 - Feb. 10, 2022',
					selected: true,
				},
				{
					id: 4,
					title: 'Bow and Arrow',
					subTitle: 'Oct. 15, 2021 - Feb. 10, 2022',
					title2: 'Firearm',
					imgSrc: zonee,
					subTitle2: 'Nov. 15, 2021 - Feb. 10, 2022',
					selected: true,
				},
			],
		};
	}

	makeItems = (items) => {
		return items.map((item) => {
			return <Card item={item} key={item.id} />;
		});
	};

	render() {
		return (
			<Container fluid={true}>
				<Row className='bg-dark justify-content-around'>
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}
}
export default Carousel;
