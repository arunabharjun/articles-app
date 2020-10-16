import moment from 'moment';
import ArticlePrice from './ArticlePrice';
import LikeButton from './LikeButton';
import { shrinkHeading } from '../../helpers/articles';

const ArticleCard = ({ children }) => {
	/**
     * De-Structuring article keys
     */
	const { headline, time, source, image, url, type } = children;

	/**
	 * Rendering the top banner image
	 */
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
							<button>view</button>
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Rendering the article information
	 */
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
							<ArticlePrice value={headline.length} />
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
	const articleCard = () => {
		return (
			<React.Fragment>
				<div className='article-card-body'>
					{bannerImage()}
					{articleContent()}
				</div>
			</React.Fragment>
		);
	};

	return <React.Fragment>{articleCard()}</React.Fragment>;
};

export default ArticleCard;
