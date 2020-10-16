import Head from 'next/head';
import Layout from '../components/core/Layout';
import HomePage from '../components/HomePage';
import { APP_NAME } from '../config';
const Index = () => {
	const showHead = () => {
		/**
		 * Rendering the head section of web page
		 */
		return (
			<React.Fragment>
				<Head>
					<title>{APP_NAME}</title>
					<meta
						name='description'
						content='App to browse articles with infinite scrolling, developed with Next.js (React.js) | By Arunabh Arjun'
					/>

					<meta property='og:title' content={`${APP_NAME}`} />
					<meta
						property='og:description'
						content='App to browse articles with infinite scrolling, developed with Next.js (React.js) | By Arunabh Arjun'
					/>
					<meta property='og:type' content='webiste' />
					<meta property='og:site_name' content={`${APP_NAME}`} />
				</Head>
			</React.Fragment>
		);
	};

	/**
	 * Rendering the home page
	 */
	const showHomePage = () => {
		return (
			<React.Fragment>
				<Layout>
					<HomePage />
				</Layout>
			</React.Fragment>
		);
	};

	return (
		<React.Fragment>
			{showHead()}
			{showHomePage()}
		</React.Fragment>
	);
};

export default Index;
