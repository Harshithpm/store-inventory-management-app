import Head from 'next/head';
import Link from 'next/link';

import Nav from './components/Nav';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Store Inventory Management</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Nav />
		</div>
	);
}
