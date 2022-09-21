import Head from 'next/head';
import HighscoreContext, {
	HighscoreContextProvider,
} from '../context/highscore-context';
import { useContext, useEffect, useState } from 'react';

import useFetchPokemon from '../utils/hooks/useFetchPokemon';
import useCountdown from '../utils/hooks/useCountDown';

import styles from '../styles/Home.module.css';

import randomGenerator from '../utils/helpers/randomGenerator';
import optionsGenerator from '../utils/helpers/optionsGenerator';

import Button from '../components/Button';
import ImageCard from '../components/ImageCard';
import Details from '../components/Details';
import AnswerForm from '../components/AnswerForm';
import NewScoreForm from '../components/NewScoreForm';
import Table from '../components/Table';
import Image from 'next/image';

export const getStaticProps = async () => {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
};

export default function Home({ data }) {
	const highscoreContext = useContext(HighscoreContext);
	const highscore = highscoreContext.highscore;
	const [formData, setFormData] = useState({});
	const [url, setUrl] = useState('');
	const { src, information } = useFetchPokemon(url);
	const [score, setScore] = useState(0);
	const [isAnswerTrue, setIsAnswerTrue] = useState();
	const [showHighscoreForm, setShowHighscoreForm] = useState(false);
	const [count, shouldCountdown, { setRestart }] = useCountdown();

	const init = () => {
		const num = randomGenerator();
		const [options, data] = optionsGenerator(num);
		setFormData({
			options,
			answer: data.name,
		});
		setScore(0);
		setUrl(data.url);
		setShowHighscoreForm(false);
	};

	const handleAgain = () => {
		setRestart();
		init();
	};

	useEffect(() => {
		if (localStorage.getItem('POKEMON') !== {}) {
			localStorage.setItem('POKEMON', JSON.stringify(data.results));
		}
		init();
	}, [data]);

	useEffect(() => {
		if (isAnswerTrue) {
			init();
			setScore(score + 1);
			setIsAnswerTrue(false);
		}
	}, [isAnswerTrue, score]);

	useEffect(() => {
		const highscores = highscore.map((highscore) => highscore.score);
		if (count === 0) {
			highscores.map((highscore) => {
				if (highscore <= score) {
					return setShowHighscoreForm(true);
				} else {
					return setShowHighscoreForm(false);
				}
			});
		}
	}, [count, score, highscore]);

	return (
		<HighscoreContextProvider>
			<Head>
				<meta name="description" content="Guess The Pokemon" />
				<title>Guess The Pokemon</title>
			</Head>
			<div className={styles.container}>
				<header className={styles.header}>
					<Button onClick={handleAgain}>Again</Button>
					<h1 className={styles.title}>
						GUESS THE{' '}
						<Image
							src="/pokemon.svg"
							alt="Pokemon Logo"
							width={72}
							height={72}
						/>
					</h1>
				</header>
				<main className={styles['content--wrapper']}>
					<aside>
						<div>
							<p>Time : {count}s</p>
							<p>Current Score : {score}</p>
						</div>
					</aside>
					<section className={styles['content--main']}>
						<div className={styles['container--hint']}>
							<ImageCard src={src} information={information} />
						</div>
						{showHighscoreForm ? (
							<NewScoreForm score={score} />
						) : (
							<AnswerForm
								formData={formData}
								setIsAnswerTrue={setIsAnswerTrue}
								able={shouldCountdown}
							/>
						)}
					</section>
					<aside>
						<Table />
					</aside>
				</main>
			</div>
		</HighscoreContextProvider>
	);
}
