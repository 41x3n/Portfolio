import React from 'react';
import { Link } from 'gatsby';

import footer from '../styles/footer.module.css';

const Footer = () => (
	<div className={`container ${footer.footer} py-4`}>
		<div className="row">
			<div className="col-12 d-inline-block">
				<p className="text-center">
					Copyright &copy; 2020 All Rights Reserved by 41x3n ||{' '}
					<Link to="/credit">Credits</Link>
				</p>
			</div>
		</div>
	</div>
);

export default Footer;
