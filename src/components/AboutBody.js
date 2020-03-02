import React from 'react';

import about from './about.module.css';

import js from '../images/js.png';
import react from '../images/react.png';
import gatsby from '../images/gatsby.png';
import node from '../images/node.png';
import python from '../images/python.png';
import mongo from '../images/mongo.png';

const AboutBody = () => (
	<div className="container">
		<div className="row">
			<h1 className="display-3 font-weight-bold py-4">About Me</h1>
			<p className={`text-monospace ${about.font}`}>
				Self-taught MERN-stack developer from Kolkata. Currently
				pursuing a Bachelor's degree (Computer Application) from
				Brainware University. Avid DOTA 2 player. Sometimes dipping my
				toes in C and Rust. Planning to get into Data Science in the
				future.
			</p>
			<hr className="my-4" />
		</div>
		<div className="container">
			<div className={`d-flex justify-content-between ${about.img}`}>
				<img src={js} alt="JavaScript" />
				<img src={react} alt="Reactjs" />
				<img src={node} alt="Nodejs" />
				<img src={gatsby} alt="Gatsbyjs" />
				<img src={python} alt="Python" />
				<img src={mongo} alt="MongoDB" />
			</div>
		</div>
		<hr className="my-4" />
	</div>
);

export default AboutBody;
