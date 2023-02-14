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
					title: 'Archery or Spear',
					subTitle: 'Oct. 1, 2023 - Feb. 10, 2024*',
					title2: 'Firearms',
					imgSrc: zonea,
					subTitle2: 'Nov. 20, 2023 - Feb. 10, 2024*',
					selected: true,
					openDate: 'October 15, 2023 04:00:00 ',
					openDate2: 'November 20, 2023 04:00:00 ',
				},
				{
					id: 1,
					title: 'Archery or Spear',
					subTitle: 'Oct. 1, 2023 - Feb. 10, 2024*',
					title2: 'Firearms',
					imgSrc: zoneb,
					subTitle2: 'Nov. 20, 2023 - Feb. 10, 2024*',
					selected: true,
					openDate: 'October 1, 2023 04:00:00 ',
					openDate2: 'November 20, 2023 04:00:00 ',
				},
				{
					id: 2,
					title: 'Archery or Spear',
					subTitle: 'Oct. 15, 2023 - Feb. 10, 2024*',
					title2: 'Firearms',
					imgSrc: zonec,
					subTitle2: 'Nov. 29, 2023 - Feb. 10, 2024*',
					selected: true,
					openDate: 'October 15, 2023 04:00:00 ',
					openDate2: 'November 29, 2023 04:00:00 ',
				},
				{
					id: 3,
					title: 'Archery or Spear',
					subTitle: 'Oct. 1, 2023 - Jan. 15, 2024*',
					title2: 'Firearms',
					imgSrc: zoned,
					subTitle2: 'Nov. 6, 2023 - Jan. 27 2024*',
					selected: true,
					openDate: 'October 1, 2023 04:00:00 ',
					openDate2: 'November 6, 2023 04:00:00 ',
				},
				{
					id: 4,
					title: 'Archery or Spear',
					subTitle: 'Oct. 1, 2023 - Jan. 15, 2024*',
					title2: 'Firearms',
					imgSrc: zonee,
					subTitle2: 'Nov. 6, 2023 - Jan. 15, 2024*',
					selected: true,
					openDate: 'October 1, 2023 04:00:00 ',
					openDate2: 'November 6, 2023 04:00:00 ',
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
