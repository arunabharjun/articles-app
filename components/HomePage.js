import { useState, useEffect } from 'react';
import { getArticles } from '../helpers/api';
import { filterArticleData } from '../helpers/articles';
import ArticleCard from './core/ArticleCard';
import { Loader } from './core/Cards';

const HomePage = () => {
	/**
	 * State to store articles
	 */
	const [
		articles,
		setArticles
	] = useState([]);

	/**
	 * State to check status of
	 * loading and error
	 */
	const [
		status,
		setStatus
	] = useState({
		loading: true,
		error: false
	});

	/**
     * Destructuring Status
     */
	const { loading, error } = status;

	useEffect(() => {
		/**
         * Load articles as soon as page loads
         */
		initArticles();
	}, []);

	/**
     * Utility function to load articles
     */
	const initArticles = () => {
		/**
         * Set loading true before fetching articles
         */
		setStatus({
			...status,
			loading: true,
			error: false
		});
		getArticles()
			.then((data) => {
				if (!data.error) {
					/**
                     * Set articles data if no error
                     */
					setArticles(data);

					/**
                     * Reset statuses
                     */
					setStatus({
						...status,
						loading: false,
						error: false
					});
				}
				else {
					/**
                     * If there is any error,
                     * set loading to false &
                     * error to true
                     */
					setStatus({
						...status,
						loading: false,
						error: true
					});
				}
			})
			.catch((error) => {
				console.log(error);

				/**
                 * If this fails,
                 * set loading to false &
                 * error to true
                 */
				setStatus({
					...status,
					loading: false,
					error: true
				});
			});
	};

	const showArticles = (articles) => {
		return (
			<React.Fragment>
				{articles.map((article) => {
					return (
						<ArticleCard id={article._id}>
							{filterArticleData(article)}
						</ArticleCard>
					);
				})}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div className='container'>
				{loading && <Loader />}
				{!loading && (
					<div className='articles-container'>
						{showArticles(articles)}
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default HomePage;
