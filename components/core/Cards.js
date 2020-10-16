export const LoadingCard = () => {
	return (
		<React.Fragment>
			<div className='loading-card'>
				<div className='loading-card-body shimmer-loading' />
			</div>
		</React.Fragment>
	);
};

export const Loader = () => {
	const renderThreeLoadingCards = () => {
		return (
			<React.Fragment>
				<div className='loader'>
					<LoadingCard />
					<LoadingCard />
					<LoadingCard />
				</div>
			</React.Fragment>
		);
	};

	return <React.Fragment>{renderThreeLoadingCards()}</React.Fragment>;
};
