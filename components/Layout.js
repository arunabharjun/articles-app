import NavBar from './NavBar';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<NavBar />
			<h1>layout</h1>
			{children}
		</React.Fragment>
	);
};

export default Layout;
