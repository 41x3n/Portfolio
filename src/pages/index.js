import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/index.css';

const IndexPage = () => (
	<div>
		<SEO title="Home" />
		<Header siteTitle="41x3n" />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
	</div>
);

export default IndexPage;
