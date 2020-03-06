import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectBody from '../components/ProjectBody';
import SEO from '../components/seo';

const Projects = () => (
	<div className="mainBody">
		<SEO title="Projects - Anindya Chowdhury" />
		<div className="container-fluid">
			<Header />
			<ProjectBody />
			<Footer />
		</div>
	</div>
);

export default Projects;
