import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import header from './header.module.css';

const Header = ({ siteTitle }) => (
	<nav className="navbar navbar-expand-md navbar-light px-5 text-large">
		<Link to="/" className="navbar-brand">
			{siteTitle}
		</Link>
		<div
			className="navbar-toggler"
			data-toggle="collapse"
			data-target="#myNav"
		>
			<i class="fas fa-hamburger" />
		</div>
		<div
			className={`collapse navbar-collapse justify-content-end py-3 ${header.myDiv}`}
			id="myNav"
		>
			<ul className="navbar-nav">
				<li className="nab-item">
					<Link to="/" className="nav-link">
						About
					</Link>
				</li>
				<li className="nab-item">
					<Link to="/" className="nav-link">
						Projects
					</Link>
				</li>
				<li className="nab-item">
					<Link to="/" className="nav-link">
						Blog
					</Link>
				</li>
				<li className="nab-item">
					<Link to="/" className="nav-link">
						Contact
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