import React from 'react';

import sidebar from './sidebar.module.css';

const Sidebar = () => {
	return (
		<div
			className={`d-none ${sidebar.sidebar} d-md-flex flex-column p-5 justify-content-end`}
		>
			<ul className={`py-5 ${sidebar.side}`}>
				<li>
					<a href="https://github.com/41x3n">
						<i class="fab fa-github fa-lg" />
					</a>
				</li>
				<li>
					<a
						className="side"
						href="https://www.linkedin.com/in/anindya-41x3n/"
					>
						<i class="fab fa-linkedin-in fa-lg" />
					</a>
				</li>
				<li>
					<a
						className="side"
						href="https://www.instagram.com/lost_scribe/"
					>
						<i class="fab fa-instagram fa-lg" />
					</a>
				</li>
				<li>
					<a
						className="side"
						href="https://www.kaggle.com/anindya41x3n"
					>
						<i class="fab fa-kaggle fa-lg" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
