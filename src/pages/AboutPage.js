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
					Down" the days until hunting season. Specific season dates vary by
					zone and antler/antlerless deer. I built this website as a fun project
					and is by no means meant to be completely accurate. If you need a list
					for specific seasons for your zone I would check out{' '}
					<a
						href='https://www.outdooralabama.com/seasons-and-bag-limits/deer-season'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' Outdoor Alabama '}
					</a>
					for a more accurate listing of your zone.
				</p>
				<p>
					Alabama is currently the only state that this website is used for but
					hopefully soon I can update the site for other states.
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
