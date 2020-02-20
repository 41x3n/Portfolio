import React from 'react';

import sidebar from './sidebar.module.css';

const Sidebar = () => {
	return (
		<div
			className={`d-none ${sidebar.sidebar} d-md-flex flex-column px-4 justify-content-end`}
		>
			<ul className={`py-5 ${sidebar.side}`}>
				<li>
					<a href="https://github.com/41x3n">
						<i class="fab fa-github" />
					</a>
				</li>
				<li>
					<a
						className="side"
						href="https://www.linkedin.com/in/anindya-41x3n/"
					>
						<i class="fab fa-linkedin-in" />
					</a>
				</li>
				<li>
					<a
						className="side"
						href="https://www.instagram.com/lost_scribe/"
					>
						<i class="fab fa-instagram" />
					</a>
				</li>
				<li>
					<a
						className="side"
						href="https://www.kaggle.com/anindya41x3n"
					>
						<i class="fab fa-kaggle" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
