import React from 'react';
// import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '../styles/index.css';

const IndexPage = () => (
	<div className="mainBody">
		<SEO title="Home" />
		<div className="container-fluid">
			<Header siteTitle="41x3n" />
			<div className="row index">
				<div className="col-md-none">
					<Sidebar />
				</div>
				<div className="col-md">
					<Body />
				</div>
			</div>
			<Footer />
		</div>
	</div>
);

export default IndexPage;

// https://cssgradient.io/gradient-backgrounds/
// https://codepen.io/jstn/pen/zuDst
