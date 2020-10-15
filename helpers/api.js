import axios from 'axios';
import { API, API_KEY, SEARCH_ENDPOINT } from '../config';

const articlesApi = `${API}/${SEARCH_ENDPOINT}`;

export const getArticles = (query = 'india', page = 0) => {
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

const getRes = (res) => {
	return res.data.response.docs;
};
