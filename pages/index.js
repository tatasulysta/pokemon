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
import Form from '../components/Form';

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

	const init = () => {
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
		setShouldCountdown(true);
		setCount(60);
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
			setScore((score) => score + 1);
			setIsTrue(false);
		}
	}, [isTrue]);
	// WIP == bug on custom hook
	const [count, setCount] = useState(60);
	const [shouldCountdown, setShouldCountdown] = useState(true);
	useEffect(() => {
		const interval = setInterval(() => {
			if (shouldCountdown) {
				setCount((count) => count - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [shouldCountdown]);

	useEffect(() => {
		if (count === 0) {
			setShouldCountdown(false);
		}
	}, [count]);

	return (
		<>
			<div className={styles.container}>
				<p>this is count {count}</p>
				<header className={styles.header}>
					<Button onClick={handleAgain}>Again</Button>
					<h1 className={styles.title}>Guess The Pokemon</h1>
				</header>
				<main className={styles['container--hint']}>
					<ImageCard src={src} />
					{information && <Details information={information} />}
				</main>
				{score}
				<Form
					formData={formData}
					setScore={setScore}
					setIsTrue={setIsTrue}
					able={shouldCountdown}
				/>
			</div>
		</>
	);
}
