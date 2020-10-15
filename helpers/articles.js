import axios from 'axios';
import { API, API_KEY, SEARCH_ENDPOINT } from '../config';

const articlesApi = `${API}/${SEARCH_ENDPOINT}`;

export const getArticles = (query = 'india') => {
	return axios
		.get(articlesApi, {
			params: {
				q: query,
				'api-key': API_KEY
			}
		})
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};
