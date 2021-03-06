import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '../images/profile.jpg';

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
				href="https://fonts.googleapis.com/css?family=Roboto|Ubuntu&display=swap"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
				crossorigin="anonymous"
			/>
			<script
				src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
				integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
				crossorigin="anonymous"
			/>
			<script
				src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
				integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
				crossorigin="anonymous"
			/>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
				integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
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
