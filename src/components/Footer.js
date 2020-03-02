import React from 'react';

import footer from './footer.module.css';

const Footer = () => (
	<div className={`container ${footer.footer}`}>
		<div className="row">
			<div className="col-12 d-inline-block">
				<p className="text-center">
					Copyright &copy; 2020 All Rights Reserved by 41x3n
				</p>
			</div>
		</div>
	</div>
);

export default Footer;
