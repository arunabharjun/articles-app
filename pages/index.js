import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<React.Fragment>
			<Layout>
				<div className='container'>
					<div className='test'>abc</div>
				</div>
			</Layout>
		</React.Fragment>
	);
}
