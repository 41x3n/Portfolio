import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreditBody from '../components/CreditBody';
import SEO from '../components/seo';

const Credit = () => (
	<div className="mainBody">
		<SEO title="Credits" />
		<div className="container-fluid">
			<Header />
			<CreditBody />
			<Footer />
		</div>
	</div>
);

export default Credit;
