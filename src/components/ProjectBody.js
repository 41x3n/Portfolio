import React from 'react';

import project from '../styles/project.module.css';
import data from '../data/projects.json';

const ProjectBody = () => (
	<div className={`container d-flex flex-wrap ${project.project}`}>
		{data.map((row) => (
			<div className="p-3">
				<div class="card text-white text-center bg-dark border-0">
					<div className="container">
						<div className="row">
							<div className="col-md-6 p-4">
								<img
									className="card-img-top"
									src={row.image}
									alt={row.title}
								/>
							</div>
							<div class="card-body d-flex-column justify-content-around col-md-6 p-4">
								<h2 class="card-title pt-1">{row.title}</h2>
								<p class="card-text">
									<small>{row.tags}</small>
								</p>
								<p class="card-text">{row.desc}</p>
								<a
									href={row.view.link}
									class={`btn btn-light m-2`}
								>
									Go on {row.view.source}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		))}
	</div>
);

export default ProjectBody;
