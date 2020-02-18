import React from 'react';

import './sidebar.css';

const Sidebar = () => {
	return (
		<div className="d-block d-flex px-4">
			<ul className="d-flex flex-column py-5 justify-content-end">
				<li>
					<a href="">
						<i class="fab fa-github" />
					</a>
				</li>
				<li>
					<a href="">
						<i class="fab fa-linkedin-in" />
					</a>
				</li>
				<li>
					<a href="">
						<i class="fab fa-instagram" />
					</a>
				</li>
				<li>
					<a href="">
						<i class="fab fa-kaggle" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
