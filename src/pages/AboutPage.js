import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
const AboutPage = (props) => {
	return (
		<div>
			<Hero title={props.title} />
			<Content>
				<p>
					This website was created for hunters who find themselves "Counting
					Down" the days until hunting season. Alabama is currently the only
					state that this website is used for but hopefully soon I can update
					the site for other states.
				</p>
				<p>
					Feel free to email me at{' '}
					<a
						href='mailto:austinlchabaud@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' here '}
					</a>{' '}
					if you experience any bugs on the website or if you would like an app
					like this built for you!
				</p>
				<p>
					This app was created by
					<a
						href='https://austinchabaud.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' Austin Chabaud'}
					</a>
				</p>
			</Content>
		</div>
	);
};
export default AboutPage;
