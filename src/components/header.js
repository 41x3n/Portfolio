import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './header.css';

const Header = ({ siteTitle }) => (
	<nav className="navbar navbar-expand-lg navbar-light">
		<Link className="navbar-brand" href="/">
			Navbar
		</Link>
		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon" />
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				<li className="nav-item active">
					<Link className="nav-link" href="#">
						Home <span class="sr-only">(current)</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" href="#">
						Features
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" href="#">
						Pricing
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link disabled" href="#">
						Disabled
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
