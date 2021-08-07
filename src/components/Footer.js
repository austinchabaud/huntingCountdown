import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
	return (
		<footer>
			<Container fluid={true}>
				<Row className='border-top justify-content-between p-4 mt-5'>
					<Col className='p-0' md={3}>
						Austin Chabaud
					</Col>
					<Col className='p-0 d-flex justify-content-end' md={3}>
						<div>
							<h2>
								<a
									className='p-2 text-dark'
									href='https://github.com/austinchabaud'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i class='fab fa-github-square'></i>
								</a>
								<a
									href='https://www.linkedin.com/in/austin-chabaud'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i class='fab fa-linkedin'></i>
								</a>
							</h2>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
