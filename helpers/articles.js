import { IMAGE_API } from '../config';

/**
 * Function to filter the article response
 */
export const filterArticleData = (article) => {
	if (article) {
		const res = {
			headline: article.headline.main,
			time: article.pub_date,
			source: article.source,
			image: article.multimedia[0]
				? IMAGE_API + '/' + article.multimedia[0].url
				: '',
			url: article.web_url,
			type: article.type_of_material
		};
		return res;
	}
};

/**
 * Shrinking the headline to max 50 characters
 */
export const shrinkHeading = (heading) => {
	if (heading.length > 50) return heading.substring(0, 50) + '...';
	else return heading;
};
