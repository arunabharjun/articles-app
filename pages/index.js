import Head from 'next/head';
import Layout from '../components/core/Layout';
import HomePage from '../components/HomePage';
const Index = () => {
	return (
		<React.Fragment>
			<Layout>
				<HomePage />
			</Layout>
		</React.Fragment>
	);
};

export default Index;
