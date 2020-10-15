const RandomPrice = () => {
	const generatePrice = () => {
		let cost = Math.floor(Math.random() * 1000);
		let multi = Math.floor(Math.random() * 10);
		return cost < 100 ? (
			'Free'
		) : (
			<React.Fragment>
				<span className='rupee-icon'>₹</span>
				{cost} {multi > 5 && 'onwards'}
			</React.Fragment>
		);
	};

	return <React.Fragment>{generatePrice()}</React.Fragment>;
};

export default RandomPrice;
