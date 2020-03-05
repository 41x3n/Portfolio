import React, { useState, useEffect } from 'react';
import blog from '../styles/blog.module.css';
let moment = require('moment');

const BlogBody = () => {
	const [
		mediumData,
		setMediumData
	] = useState([]);
	const [
		isLoading,
		setIsLoading
	] = useState(true);

	useEffect(() => {
		fetch(
			`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@41x3n`
		)
			.then((res) => res.json())
			.then((response) => {
				setMediumData(response.items);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	const finalData = mediumData.filter(
		(article) => article.categories.length > 0
	);
	return (
		<div className="container p-3">
			<h1 className={`pb-3 ${blog.head}`}>
				<span>Blog</span>
			</h1>
			{isLoading && <p>Fetching data from Medium!</p>}
			<div className="row">
				{finalData.map((article) => (
					<div className="col-md-6" key={article.guid}>
						<a href={article.link} className={blog.link}>
							<div className={`card border-dark pm2`}>
								<img
									class="card-img-top"
									src={article.thumbnail}
									alt="blog"
								/>
								<div className={`card-body ${blog.card}`}>
									<p className={blog.title}>
										{article.title}
									</p>
									<p className="card-text">
										{' '}
										Published:{' '}
										{moment(article.pubDate).format(
											'dddd, MMMM Do YYYY'
										)}
									</p>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};
export default BlogBody;
