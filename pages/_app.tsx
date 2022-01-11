import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
		import('@fortawesome/fontawesome-free/js/solid');
		import('@fortawesome/fontawesome-free/js/fontawesome');
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
