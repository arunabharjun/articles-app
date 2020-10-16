import { useState, useEffect } from 'react';
import { DEFAULT_QUERY } from '../config';
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
	const [
		hits,
		setHits
	] = useState(0);

	/**
	 * State to check status of
	 * loading, error & window bottom was reached
	 */
	const [
		error,
		setError
	] = useState(false);
	const [
		loading,
		setLoading
	] = useState(false);
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
			if (loading) return;
			initArticles();
		},
		[
			bottom
		]
	);

	/**
	 * Utility function to listen for scrolling
	 */
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
		 * Reseting errors if any
         */
		setError(false);
		setLoading(true);
		getArticles(DEFAULT_QUERY, page)
			.then((data) => {
				if (!data.error && data !== undefined) {
					/**
                     * Set articles data if no error
                     */
					setArticles([
						...articles,
						...data.articles
					]);
					setPage(page + 1);
					setHits(Number(data.hits));

					/**
                     * Reset statuses
                     */
					setError(false);
					setLoading(false);
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

	/**
	 * Rendering each article in the
	 * article card view
	 */
	const showArticles = () => {
		return (
			<React.Fragment>
				<div className='articles-container'>
					{articles.map((article, i) => {
						return (
							<ArticleCard id={i}>
								{filterArticleData(article)}
							</ArticleCard>
						);
					})}
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Show error is any
	 */
	const showError = () => {
		return (
			<React.Fragment>
				{error &&
				articles.length < hits && (
					<ShowError>Something went wrong</ShowError>
				)}
			</React.Fragment>
		);
	};

	/**
	 * Show loading animatiin while
	 * articles load
	 */
	const showLoading = () => {
		return <React.Fragment>{loading && <Loader />}</React.Fragment>;
	};

	/**
	 * Show end of articles list
	 */
	const showEndOfList = () => {
		return (
			<React.Fragment>
				{error &&
				articles.length >= hits && (
					<ShowError>End of articles</ShowError>
				)}
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			<div className='container'>
				{showArticles()}
				{showLoading()}
				{showError()}
				{showEndOfList()}
			</div>
		</React.Fragment>
	);
};

export default HomePage;
