import ToolBar from '../components/ToolBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ToolBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
