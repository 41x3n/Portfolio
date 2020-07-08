import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import project from '../styles/project.module.css';
import data from '../data/projects.json';

const ProjectBody = () => (
	<div className={`container d-flex flex-wrap ${project.project}`}>
		{data.map((row) => (
			<div className="p-3" key={row.title}>
				<div className="card text-white text-center bg-dark border-0">
					<div className="container">
						<div className="row">
							<div className="col-md-6 p-4">
								<LazyLoadImage
									className="card-img-top"
									effect="blur"
									src={row.image}
									alt={row.title}
								/>
							</div>
							<div className="card-body d-flex-column justify-content-around col-md-6 p-4">
								<h2 className="card-title pt-1">{row.title}</h2>
								<p className="card-text">
									<small>{row.tags}</small>
								</p>
								<p className="card-text">{row.desc}</p>
								<a
									href={row.view.link}
									className={`btn btn-light m-2`}
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
