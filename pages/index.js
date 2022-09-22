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

import Image from 'next/image';
import Button from '../components/Button';
import PokemonCard from '../components/PokemonCard';
import AnswerForm from '../components/AnswerForm';
import NewScoreForm from '../components/NewScoreForm';
import Table from '../components/Table';
import Information from '../components/Information';
import GameOver from '../components/GameOver/Index';

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
					<span className={styles.brand}>
						<h1 className={styles.title}>GUESS THE</h1>
						<Image
							src="/pokemon.svg"
							alt="Pokemon Logo"
							width={90}
							height={60}
						/>
					</span>
				</header>
				<main className={styles['content--wrapper']}>
					<aside>
						<Information
							score={score}
							count={count}
							className={styles['information1--styled']}
						/>
					</aside>
					<section className={styles['content--main']}>
						<PokemonCard src={src} information={information} />
						<Information
							score={score}
							count={count}
							className={styles['information2--styled']}
						/>
						{showHighscoreForm ? (
							<NewScoreForm score={score} />
						) : (
							<>
								{count === 0 ? (
									<GameOver score={score} />
								) : (
									<AnswerForm
										formData={formData}
										setIsAnswerTrue={setIsAnswerTrue}
										isAnswerTrue={isAnswerTrue}
										able={shouldCountdown}
									/>
								)}
							</>
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
