import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>News App</title>
				<meta name='description' content='A News App built with Next.js' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='page-container'>
				<div className={styles.main}>
					<h1>Next.js News App</h1>
					<h3>Latest News</h3>
				</div>
			</div>
		</>
	);
}
