import React from 'react';

import body from '../styles/body.module.css';
import profile from '../images/profile.jpg';

const Body = () => (
	<div className="container py-5">
		<div className="row">
			<div className="col-xs-12 col-md-5 d-flex justify-content-center p-auto">
				<div className={`${body.profilePicture}`}>
					<img
						className={`${body.profileImage}`}
						src={profile}
						alt="Profile"
					/>
				</div>
			</div>
			<div className="col-xs-12 col-md-7 m-auto d-flex justify-content-center p-auto">
				<h1 className="display-4 text-center">
					Hi! I'm Anindya Chowdhury
				</h1>
			</div>
		</div>
		<hr className="my-4" />
		<div className={`${body.side} d-flex justify-content-between py-3`}>
			<a href="https://github.com/41x3n">
				<i className="fab fa-github fa-lg" />
			</a>
			<a href="https://www.linkedin.com/in/anindya-41x3n/">
				<i className="fab fa-linkedin-in fa-lg" />
			</a>

			<a href="https://twitter.com/41x3n">
				<i className="fab fa-twitter-square fa-lg" />
			</a>

			<a href="mailto:anindya50@live.com">
				<i className="fas fa-envelope-open fa-lg" />
			</a>

			<a href="https://www.kaggle.com/anindya41x3n">
				<i className="fab fa-kaggle fa-lg" />
			</a>
		</div>
		<hr className="my-4" />
		<p className={`text-monospace ${body.font} text-center`}>
			MERN-stack Web Developer / Data Science Enthusiast / Book Collector
			/ Anime Fan / Avid Gamer
		</p>
	</div>
);

export default Body;
