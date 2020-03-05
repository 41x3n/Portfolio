import React from 'react';

import certificate from '../styles/certificate.module.css';

import javascript from '../images/certificates/javascript.jpg';
import nodejs from '../images/certificates/nodejs.jpg';
import react from '../images/certificates/react.jpg';
import python from '../images/certificates/python.jpg';

const Certificate = () => (
	<div className="container">
		<hr className="my-4" />
		<div
			className={`d-flex flex-wrap justify-content-center ${certificate.img}`}
		>
			<a
				href="https://www.udemy.com/certificate/UC-9F4PXGIZ/"
				className="p-2"
			>
				<img src={javascript} alt="JavaScript" />
			</a>
			<a
				href="https://www.udemy.com/certificate/UC-O3JDMPUQ/"
				className="p-2"
			>
				{' '}
				<img src={react} alt="Reactjs" />
			</a>
			<a
				href="https://www.udemy.com/certificate/UC-4X0T78I1/"
				className="p-2"
			>
				{' '}
				<img src={nodejs} alt="Nodejs" />
			</a>
			<a
				href="https://www.udemy.com/certificate/UC-JFMWHORQ/"
				className="p-2"
			>
				{' '}
				<img src={python} alt="Python" />
			</a>
		</div>
		<hr className="my-4" />
	</div>
);

export default Certificate;
