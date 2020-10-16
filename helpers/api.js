import axios from 'axios';
import { API, API_KEY, SEARCH_ENDPOINT, DEFAULT_QUERY } from '../config';

/**
 * Combining the API with end point
 */
const articlesApi = `${API}/${SEARCH_ENDPOINT}`;

/**
 * Function to fetch news articles
 */
export const getArticles = (query = DEFAULT_QUERY, page = 0) => {
	return axios
		.get(articlesApi, {
			params: {
				q: query,
				page,
				'api-key': API_KEY
			}
		})
		.then((response) => {
			return getRes(response);
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};

/**
 * Filtering response data to
 * only return articles & hits
 */
const getRes = (res) => {
	return {
		articles: res.data.response.docs,
		hits: res.data.response.meta.hits
	};
};
