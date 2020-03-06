import React from 'react';
import { Link } from 'gatsby';

import header from '../styles/header.module.css';

const Header = ({ siteTitle }) => (
	<nav className="navbar navbar-expand-md navbar-dark px-3 text-large">
		<Link to="/" className="navbar-brand">
			{siteTitle}
		</Link>
		<div
			className="navbar-toggler"
			data-toggle="collapse"
			data-target="#myNav"
		>
			<i className="fas fa-hamburger" />
		</div>
		<div
			className={`collapse navbar-collapse justify-content-end py-3 ${header.myDiv}`}
			id="myNav"
		>
			<ul className="navbar-nav">
				<li className="nab-item px-4">
					<Link
						to="/about"
						className="nav-link"
						activeClassName={header.activeNavItem}
					>
						About
					</Link>
				</li>
				<li className="nab-item px-4">
					<Link to="/" className="nav-link">
						Projects
					</Link>
				</li>
				<li className="nab-item px-4">
					<Link
						to="/blog"
						className="nav-link"
						activeClassName={header.activeNavItem}
					>
						Blog
					</Link>
				</li>
				<li className="nab-item px-4">
					<Link to="/" className="nav-link">
						Contact
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default Header;
