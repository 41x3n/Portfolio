import React from 'react';

import about from '../styles/about.module.css';

import js from '../images/stack/js.png';
import react from '../images/stack/react.png';
import gatsby from '../images/stack/gatsby.png';
import node from '../images/stack/node.png';
import python from '../images/stack/python.png';
import mongo from '../images/stack/mongo.png';
import next from '../images/stack/next.png';
import jupyter from '../images/stack/jupyter.png';

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
				<img src={node} alt="Nodejs" />
				<img src={mongo} alt="MongoDB" />
				<img src={react} alt="Reactjs" />
				<img src={gatsby} alt="Gatsbyjs" />
				<img src={next} alt="Next" />
				<img src={python} alt="Python" />
				<img src={jupyter} alt="Jupyter" />
			</div>
		</div>
		<hr className="my-4" />
	</div>
);

export default AboutBody;
