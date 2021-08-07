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
					title: 'Wren Mountain Media',
					subTitle: 'Custom Software and Web Design ',
					imgSrc: zonea,
					link: 'https://www.wrenmountain.com',
					selected: false,
				},
				{
					id: 1,
					title: 'GitHub Finder',
					subTitle:
						'React App using GitHub api to search users and view their profile',
					imgSrc: zoneb,
					link: 'https://hardcore-borg-17bb74.netlify.app/',
					selected: false,
				},
				{
					id: 2,
					title: 'Weather Search App',
					subTitle: 'Search weather in any city or country in the world.',
					imgSrc: zonec,
					link: 'https://www.weatherreactapp.xyz/',
					selected: false,
				},
				{
					id: 3,
					title: 'Kindness Challenge',
					subTitle: 'Find essential resources on this community driven app',
					imgSrc: zoned,
					link: 'https://daniellimhong.github.io/kindness-challenge/',
					selected: false,
				},
				{
					id: 4,
					title: 'ZONE A',
					subTitle: 'Hunting in alabama ',
					imgSrc: zonee,
					link: 'https://daniellimhong.github.io/kindness-challenge/',
					selected: false,
				},
			],
		};
	}

	handleCardClick = (id, card) => {
		let items = [...this.state.items];

		items[id].selected = items[id].selected ? false : true;

		items.forEach((item) => {
			if (item.id !== id) {
				item.selected = false;
			}
		});
		this.setState({
			items,
		});
	};

	makeItems = (items) => {
		return items.map((item, e) => {
			return (
				<Card
					item={item}
					click={(e) => this.handleCardClick(item.id, e)}
					key={item.id}
				/>
			);
		});
	};

	render() {
		return (
			<Container fluid={true}>
				<Row className='justify-content-around'>
					{this.makeItems(this.state.items)}
				</Row>
			</Container>
		);
	}
}
export default Carousel;
