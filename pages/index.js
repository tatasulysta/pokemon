import Head from 'next/head';
import { useEffect, useState } from 'react';

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
	const [formData, setFormData] = useState();
	const [url, setUrl] = useState();
	const { src, information } = useFetchPokemon(url);
	const [score, setScore] = useState(0);
	const [isTrue, setIsTrue] = useState();
	const [count, shouldCountdown, { setRestart }] = useCountdown();

	const init = () => {
		setRestart();
		const num = randomGenerator();
		const [options, data] = optionsGenerator(num);
		setFormData({
			options,
			answer: data.name,
		});
		setUrl(data.url);
	};

	const handleAgain = () => {
		init();
	};

	useEffect(() => {
		if (localStorage.getItem('POKEMON') !== {}) {
			localStorage.setItem('POKEMON', JSON.stringify(data.results));
		}
		init();
	}, [data]);

	useEffect(() => {
		if (isTrue) {
			init();
			setScore(score + 1);
			setIsTrue(false);
		}
	}, [isTrue, score]);
	// WIP == bug on custom hook

	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>
					<Button onClick={handleAgain}>Again</Button>
					<h1 className={styles.title}>Guess The Pokemon</h1>
				</header>
				<main className={styles['content--wrapper']}>
					<aside>
						<div>
							<p>Time : {count}s</p>
							<p>Current Score :{score}</p>
						</div>
					</aside>
					<section className={styles['content--main']}>
						<div className={styles['container--hint']}>
							<ImageCard src={src} />
							{information && <Details information={information} />}
						</div>
						<AnswerForm
							formData={formData}
							setIsTrue={setIsTrue}
							isTrue={isTrue}
							able={shouldCountdown}
						/>
						<NewScoreForm />
					</section>
				</main>
			</div>
		</>
	);
}
