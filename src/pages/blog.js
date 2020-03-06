import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import BlogBody from '../components/BlogBody';

const Blog = () => (
	<div className="mainBody">
		<SEO title="Blog - Anindya Chowdhury" />
		<div className="container-fluid">
			<Header />
			<BlogBody />
			<Footer />
		</div>
	</div>
);

export default Blog;
