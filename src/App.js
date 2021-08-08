import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Home from './pages/HomePage';
import DeerZone from './pages/DeerZone';
import AboutPage from './pages/AboutPage';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Alabama Hunting Season',
			headerLinks: [
				{ title: 'Home', path: '/' },
				{ title: 'Zones', path: '/zones' },
				{ title: 'About', path: '/about' },
			],
			home: {
				title: 'Alabama Deer Hunting Season Countdown',
				subTitle: "If you don't know your zone click on the 'Zones' tab above.",
				text: 'Check the countdown on your zone below!',
			},
			zones: {
				title: 'Deer Zones 2021-2022',
			},
			about: {
				title: 'About This App',
			},
		};
	}
	render() {
		return (
			<div className='App'>
				<Router>
					<Container className='p-0' fluid={true}>
						<Navbar className='border-bottom-dark' bg='dark' expand='lg'>
							<Navbar.Brand>
								<Link className='nav-link text-danger' to='/'>
									Alabama Hunting
								</Link>
							</Navbar.Brand>

							<Navbar.Toggle
								className='border-0 bg-white'
								aria-controls='navbar-toggle'
							/>
							<Navbar.Collapse id='navbar-toggle'>
								<Nav className='ml-auto'>
									<Link className='nav-link text-white' to='/'>
										Home
									</Link>
									<Link className='nav-link text-white' to='/zones'>
										Zones
									</Link>
									<Link className='nav-link text-white' to='/about'>
										About
									</Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
						<Route
							path='/'
							exact
							render={() => (
								<Home
									title={this.state.home.title}
									subTitle={this.state.home.subTitle}
									text={this.state.home.text}
								/>
							)}
						/>

						<Route
							path='/zones'
							render={() => <DeerZone title={this.state.zones.title} />}
						/>
						<Route
							path='/about'
							render={() => <AboutPage title={this.state.about.title} />}
						/>
					</Container>
				</Router>
			</div>
		);
	}
}

export default App;
