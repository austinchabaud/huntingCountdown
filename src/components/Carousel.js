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
					title: 'Bow and Arrow Hunting',
					subTitle: 'Either Sex: Oct. 15, 2021 - Feb. 10, 2022',
					imgSrc: zonea,
					stats: 'Archery or Firearm 22',
					timer: '',
					selected: true,
				},
				{
					id: 1,
					title: 'GitHub Finder',
					subTitle:
						'React App using GitHub api to search users and view their profile',
					imgSrc: zoneb,
					stats: 'Archery or Firearm 22',
					timer: '',
					selected: true,
				},
				{
					id: 2,
					title: 'Weather Search App',
					subTitle: 'Search weather in any city or country in the world.',
					imgSrc: zonec,
					stats: 'Archery or Firearm 22',
					timer: '',
					selected: true,
				},
				{
					id: 3,
					title: 'Kindness Challenge',
					subTitle: 'Find essential resources on this community driven app',
					imgSrc: zoned,
					stats: 'Archery or Firearm 22',
					timer: '',
					selected: true,
				},
				{
					id: 4,
					title: 'ZONE A',
					subTitle: 'Hunting in alabama ',
					imgSrc: zonee,
					stats: 'Archery or Firearm 22',
					timer: '',
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
