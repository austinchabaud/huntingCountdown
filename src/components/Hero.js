import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import greenbg from '../assets/images/greenbg.jpeg';
var sectionStyle = {
	width: '100%',
	height: 'auto',
	backgroundImage: `url(${greenbg})`,
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'scroll',
	backgroundPosition: '40%',
};
const Hero = (props) => {
	return (
		<Jumbotron className='bg-image jumbotron-fluid p-0' style={sectionStyle}>
			<Container fluid={true}>
				<Row className='justify-content-center py-5'>
					<Col md={6} sm={12}>
						{props.title && (
							<h1 className='font-weight-bolder text-light'>{props.title}</h1>
						)}
						{props.subTitle && <h3 className='text-light'>{props.subTitle}</h3>}
						{props.text && <h3 className='text-light'>{props.text}</h3>}
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default Hero;
