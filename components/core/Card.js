import { useState } from 'react';
import moment from 'moment';
import RandomPrice from './RandomPrice';
import LikeButton from './LikeButton';
import { shrinkHeading } from '../../helpers/articles';

export const ArticleCard = ({ children }) => {
	/**
     * De-Structuring article keys
     */
	const { headline, time, source, image, url, type } = children;

	const bannerImage = () => {
		return (
			<React.Fragment>
				<div
					className='banner-img'
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className='article-type'>
						<p className=''>{type}</p>
					</div>
					<div className='overlay'>
						<a href={url} target='_blank' rel='noopener noreferrer'>
							<button>read</button>
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	};

	const articleContent = () => {
		return (
			<React.Fragment>
				<div className='article-content'>
					<a href={url} target='_blank' rel='noopener noreferrer'>
						<h3>{shrinkHeading(headline)}</h3>
					</a>
					<p className='article-info'>
						{moment(time).format('MMMM DD | h:mm A')}
						<br />
						{source}
					</p>

					<div className='flex-box flex-space-bt'>
						<p className='article-price'>
							<RandomPrice />
						</p>
						<span className='article-like-button'>
							<LikeButton />
						</span>
					</div>
				</div>
			</React.Fragment>
		);
	};

	/**
     * The full card
     */
	return (
		<React.Fragment>
			<div className='article-card'>
				<div className='article-card-body'>
					{bannerImage()}
					{articleContent()}
				</div>
			</div>
		</React.Fragment>
	);
};
