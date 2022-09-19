import Head from 'next/head';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

import randomGenerator from '../utils/helpers/randomGenerator';
import optionsGenerator from '../utils/helpers/optionsGenerator';

import Button from '../components/Button';
import ImageCard from '../components/ImageCard';
import useFetchPokemon from '../utils/hooks/useFetchPokemon';

// export const getStaticProps = async () => {};

export default function Home() {
	const [number, setNumber] = useState();
	const [options, setOptions] = useState();
	const [url, setUrl] = useState();
	const { src, information } = useFetchPokemon(url);

	useEffect(() => {
		if (localStorage.getItem('POKEMON') !== {}) {
			fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
				.then((res) => res.json())
				.then((data) =>
					localStorage.setItem('POKEMON', JSON.stringify(data.results))
				);
		}
		setNumber(randomGenerator());
		init();
	}, []);
	useEffect(() => {
		console.log(information);
	}, [src, information]);

	const init = () => {
		const num = randomGenerator();
		const [options, data] = optionsGenerator(num);
		setNumber(num);
		setOptions(options);
		setUrl(data.url);
	};

	const handleAgain = () => {
		init();
	};

	return (
		<>
			<div className={styles.container}>
				<Button onClick={handleAgain}> Again</Button>
				<h1 className={styles.title}>Guess The Pokemon</h1>
				{number}
				<ImageCard src={src} />
				{options
					? options?.map((option) => <p key={option.name}>{option.name}</p>)
					: ''}
			</div>
		</>
	);
}
