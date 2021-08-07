import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import puppyimg from '../assets/images/puppyimg.jpg';
import ourimg from '../assets/images/ourimg.jpg';
const AboutPage = (props) => {
	return (
		<div>
			<Hero title={props.title} />
			<Content>
				<p>
					My name is Austin. I'm a web developer and designer from North
					Alabama.
				</p>
				<p>
					During the day I'm a front-end developer at a local web design
					company. In the afternoon I am usually working on side projects and
					building my own web apps.
				</p>
				<p>
					My latest project
					<a
						href='https://github.com/austinchabaud'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' Cloud Memories '}
					</a>
					is a simple social media app using MERN that allows users to post
					memories they want to share with their friends.
				</p>
			</Content>
			<div className='image-block'>
				<div className='myimg'>
					<img className='g-card-image' alt='' src={ourimg} />
					<p>Enjoying our days together</p>
				</div>
				<div className='puppyimg'>
					<img className='g-card-image' alt='' src={puppyimg} />
					<p>My buddy Cash enjoying the lake</p>
				</div>
			</div>
		</div>
	);
};
export default AboutPage;
