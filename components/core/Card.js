import { useState } from 'react';
export const ArticleCard = ({ children }) => {
	/**
     * De-Structuring 
     */
	const { headline, time, source, image, url, type } = children;

	return (
		<React.Fragment>
			<h3>{headline}</h3>
			<p className=''>{time}</p>
			<p className=''>{source}</p>
			<img src={image} alt='' />
			<a href={url} target='_blank' rel='noopener noreferrer' />
			<p className=''>{type}</p>
		</React.Fragment>
	);
};
