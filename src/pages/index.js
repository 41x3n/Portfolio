import React from 'react';
// import { Link } from 'gatsby';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/index.css';

const IndexPage = () => (
	<div className="mainBody">
		<SEO title="Home" />
		<Header siteTitle="41x3n" />
		<div className="row main">
			<Sidebar />
			<Body />
		</div>
	</div>
);

export default IndexPage;

// https://cssgradient.io/gradient-backgrounds/
// https://codepen.io/jstn/pen/zuDst
