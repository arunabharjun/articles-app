const ShowError = ({ children }) => {
	return (
		<React.Fragment>
			<div className='error'>
				<p className='error-msg'>{children}</p>
			</div>
		</React.Fragment>
	);
};

export default ShowError;
