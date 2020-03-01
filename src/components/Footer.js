import React from 'react';

import footer from './footer.module.css';

const Footer = () => (
	<div className="container">
		<div className="row navbar fixed-bottom">
			<div className="col-12">
				<div className={`${footer.side} d-flex justify-content-center`}>
					<a href="https://github.com/41x3n">
						<i class="fab fa-github fa-2x" />
					</a>
					<a href="https://www.linkedin.com/in/anindya-41x3n/">
						<i class="fab fa-linkedin-in fa-2x" />
					</a>

					<a href="https://www.instagram.com/lost_scribe/">
						<i class="fab fa-instagram fa-2x" />
					</a>

					<a href="https://www.kaggle.com/anindya41x3n">
						<i class="fab fa-kaggle fa-2x" />
					</a>
				</div>
			</div>
			<div className="col-12 d-inline-block">
				<p className="text-center">
					Copyright &copy; 2020 All Rights Reserved by 41x3n
				</p>
			</div>
		</div>
	</div>
);

export default Footer;
