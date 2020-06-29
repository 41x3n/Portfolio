import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import SEO from '../components/seo';

const IndexPage = () => (
	<div className="mainBody">
		<SEO title="Home - Anindya Chowdhury" />
		<div className="container-fluid">
			<Header />
			<Body />
			<Footer />
		</div>
	</div>
);

export default IndexPage;
