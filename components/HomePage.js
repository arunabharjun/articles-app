import { useState, useEffect, useRef, useCallback } from 'react';
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
	 * Utility function to paginate
	 */
	const observer = useRef();
	const lastArticle = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					initArticles();
				}
			});
			if (node) observer.current.observe(node);
		},
		[
			loading
		]
	);

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
						if (articles.length === i + 1) {
							return (
								<div
									ref={lastArticle}
									className='article-card'
									key={i}
								>
									<ArticleCard>
										{filterArticleData(article)}
									</ArticleCard>
								</div>
							);
						}
						else
							return (
								<div key={i}>
									<ArticleCard>
										{filterArticleData(article)}
									</ArticleCard>
								</div>
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
