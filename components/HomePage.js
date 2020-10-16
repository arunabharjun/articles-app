import { useState, useEffect } from 'react';
import { getArticles } from '../helpers/api';
import { filterArticleData } from '../helpers/articles';
import ArticleCard from './core/ArticleCard';
import { Loader } from './core/Cards';
import ShowError from './core/ShowError';

const HomePage = () => {
	/**
	 * State to store articles
	 */
	const [
		articles,
		setArticles
	] = useState([]);
	const [
		page,
		setPage
	] = useState(0);

	/**
	 * State to check status of
	 * loading and error
	 */
	const [
		error,
		setError
	] = useState(false);
	const [
		loading,
		setLoading
	] = useState(false);

	/**
	 * State to check if bottom was reached
	 */
	const [
		bottom,
		setBottom
	] = useState(false);

	useEffect(() => {
		/**
         * Load articles as soon as page loads
         */
		window.addEventListener('scroll', () => handleScroll());
		initArticles();
	}, []);

	useEffect(
		() => {
			/**
			 * Paginate
			 */
			if (loading || error) return;
			initArticles();
		},
		[
			bottom
		]
	);

	const handleScroll = () => {
		const windowHeight =
			'innerHeight' in window
				? window.innerHeight
				: document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(
			body.scrollHeight,
			body.offsetHeight,
			html.clientHeight,
			html.scrollHeight,
			html.offsetHeight
		);
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowBottom >= docHeight) {
			setBottom(true);
		}
		else {
			setBottom(false);
		}
	};

	/**
     * Utility function to load articles
     */
	const initArticles = () => {
		/**
         * Set loading true before fetching articles
         */
		setError(false);
		setLoading(true);
		getArticles('india', page)
			.then((data) => {
				if (!data.error && data !== undefined) {
					/**
                     * Set articles data if no error
                     */
					setArticles([
						...articles,
						...data
					]);

					/**
                     * Reset statuses
                     */
					setError(false);
					setLoading(false);

					setPage(page + 1);
				}
				else {
					/**
                     * If there is any error,
                     * set loading to false &
                     * error to true
                     */
					setError(true);
					setLoading(false);
				}
			})
			.catch((error) => {
				console.log(error);

				/**
                 * If this fails,
                 * set loading to false &
                 * error to true
                 */
				setError(true);
				setLoading(false);
			});
	};

	const showArticles = () => {
		return (
			<React.Fragment>
				{articles.map((article, i) => {
					return (
						<ArticleCard id={i}>
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
				<div className='articles-container'>{showArticles()}</div>
				{loading && <Loader />}
				{error && <ShowError>No atricles</ShowError>}
			</div>

			{/* {JSON.stringify(articles)} */}
		</React.Fragment>
	);
};

export default HomePage;
