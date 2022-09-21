import '../styles/globals.css';
import { HighscoreContextProvider } from '../context/highscore-context';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
