/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../images/profile2.jpg';
// import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
		>
			<link rel="icon" href={favicon} />
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
				crossorigin="anonymous"
			/>
			<script
				src="https://kit.fontawesome.com/a22bb1e92e.js"
				crossorigin="anonymous"
			/>
		</Helmet>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired
};

export default SEO;
