import React from 'react';
// import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import SEO from '../components/seo';

const IndexPage = () => (
	<div className="mainBody">
		<SEO title="Home" />
		<div className="container-fluid">
			<Header siteTitle="41x3n" />
			<Body />
			<Footer />
		</div>
	</div>
);

export default IndexPage;

// https://cssgradient.io/gradient-backgrounds/
// https://codepen.io/jstn/pen/zuDst
// https://codepen.io/ccromjongh/pen/NRELbB
// https://jacekjeznach.com/
// https://jimut123.github.io/
// https://codepen.io/andi1984/pen/dyoWRgE
