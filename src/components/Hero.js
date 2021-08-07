import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = (props) => {
	return (
		<Jumbotron className='bg-dark jumbotron-fluid p-0'>
			<Container fluid={true}>
				<Row className='justify-content-center py-5'>
					<Col md={8} sm={12}>
						{props.title && (
							<h1 className='font-weight-bolder text-light'>{props.title}</h1>
						)}
						{props.subTitle && (
							<h3 className=' text-light'>{props.subTitle}</h3>
						)}
						{props.text && <h3 className='lead  text-light'>{props.text}</h3>}
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default Hero;
