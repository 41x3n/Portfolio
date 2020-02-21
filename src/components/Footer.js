import React from 'react';

import footer from './footer.module.css';

const Footer = () => (
	<div className="container text-light">
		<div className="row">
			<div className="col-12 d-md-none">
				<div className={`${footer.side} d-flex justify-content-center`}>
					<a href="https://github.com/41x3n">
						<i class="fab fa-github" />
					</a>
					<a href="https://www.linkedin.com/in/anindya-41x3n/">
						<i class="fab fa-linkedin-in" />
					</a>

					<a href="https://www.instagram.com/lost_scribe/">
						<i class="fab fa-instagram" />
					</a>

					<a href="https://www.kaggle.com/anindya41x3n">
						<i class="fab fa-kaggle" />
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
