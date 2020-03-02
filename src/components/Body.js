import React from 'react';

import body from './body.module.css';
import profile from '../images/profile2.jpg';

const Body = () => (
	<div className="container py-5">
		<div className="row">
			<div className="col-xs-12 col-md-5 d-flex justify-content-center p-auto">
				<div class={`${body.profilePicture}`}>
					<img
						class={`${body.profileImage}`}
						src={profile}
						alt="Profile"
					/>
				</div>
			</div>
			<div className="col-xs-12 col-md-7 mx-auto d-flex justify-content-center p-auto">
				<h1 className="display-2 text-center">
					Hi! I'm Anindya Chowdhury
				</h1>
			</div>
		</div>
		<hr className="my-4" />
		<div className={`${body.side} d-flex justify-content-between py-3`}>
			<a href="https://github.com/41x3n">
				<i class="fab fa-github fa-2x" />
			</a>
			<a href="https://www.linkedin.com/in/anindya-41x3n/">
				<i class="fab fa-linkedin-in fa-2x" />
			</a>

			<a href="https://www.instagram.com/lost_scribe/">
				<i class="fab fa-instagram fa-2x" />
			</a>

			<a href="https://www.kaggle.com/anindya41x3n">
				<i class="fab fa-kaggle fa-2x" />
			</a>

			<a href="mailto:anindya50@live.com">
				<i class="fas fa-envelope-open fa-2x" />
			</a>
		</div>
		<hr className="my-4" />
		<p className="text-monospace text-center">
			Self-taught MERN-stack developer from Kolkata. Currently pursuing a
			Bachelor's degree (Computer Application) from Brainware University.
			Avid DOTA 2 player. Sometimes dipping my toes in C and Rust.
			Planning to get into Data Science in the future.
		</p>
	</div>
);

export default Body;
