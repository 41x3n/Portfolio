import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutBody from '../components/AboutBody';
import TimeLine from '../components/TimeLine';
import Certificate from '../components/Certificates';
import SEO from '../components/seo';

const About = () => (
	<div className="mainBody">
		<SEO title="About me - Anindya Chowdhury" />
		<div className="container-fluid">
			<Header />
			<AboutBody />
			<TimeLine />
			<Certificate />
			<Footer />
		</div>
	</div>
);

export default About;
