import { IMAGE_API } from '../config';

export const filterArticleData = (article) => {
	const res = {
		headline: article.headline.main,
		time: article.pub_date,
		source: article.source,
		image: IMAGE_API + '/' + article.multimedia[0].url,
		url: article.web_url,
		type: article.type_of_material
	};

	return res;
};
