import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { getArticles } from '../helpers/articles';

export default function Home() {
	const [
		articles,
		setArticles
	] = useState({});

	const initArticles = () => {
		getArticles().then((data) => {
			setArticles(data);
		});
	};

	useEffect(() => {
		initArticles();
	}, []);

	return (
		<React.Fragment>
			<Layout>
				<div className='container'>
					{JSON.stringify(articles.data.response.docs[0])}
				</div>
			</Layout>
		</React.Fragment>
	);
}
