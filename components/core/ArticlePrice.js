const ArticlePrice = ({ value = 50 }) => {
	const generatePrice = () => {
		if (value >= 75) {
			return (
				<React.Fragment>
					<span className='rupee-icon'>₹</span> 999 onwards
				</React.Fragment>
			);
		}
		else if (value > 50 && value < 100) {
			return (
				<React.Fragment>
					<span className='rupee-icon'>₹ </span>
					{value * 10}
				</React.Fragment>
			);
		}
		return 'Free';
	};

	return <React.Fragment>{generatePrice()}</React.Fragment>;
};

export default ArticlePrice;
