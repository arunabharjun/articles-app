import { useState } from 'react';
import { LikeIcon } from '../../assets/Icons';

const LikeButton = () => {
	/**
     * State to check if article is liked
     */
	const [
		liked,
		setLiked
	] = useState(false);

	const updateLiked = () => {
		setLiked(!liked);
	};

	const likeButtonDiv = () => {
		return (
			<React.Fragment>
				<div className='like-button'>
					<button onClick={updateLiked}>
						<span className={liked ? 'article-liked' : ''}>
							<LikeIcon size={18} />
						</span>
					</button>
				</div>
			</React.Fragment>
		);
	};

	return <React.Fragment>{likeButtonDiv()}</React.Fragment>;
};

export default LikeButton;
