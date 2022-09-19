import Head from 'next/head';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

import randomGenerator from '../utils/helpers/randomGenerator';
import optionsGenerator from '../utils/helpers/optionsGenerator';

import Button from '../components/Button';
import ImageCard from '../components/ImageCard';

// export const getStaticProps = async () => {};

export default function Home() {
	const [number, setNumber] = useState();
	const [options, setOptions] = useState();
	useEffect(() => {
		if (localStorage.getItem('POKEMON') !== {}) {
			fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
				.then((res) => res.json())
				.then((data) =>
					localStorage.setItem('POKEMON', JSON.stringify(data.results))
				);
		}
		setNumber(randomGenerator());
	}, []);
	const handleAgain = () => {
		const num = randomGenerator();
		console.log(num);
		console.log(optionsGenerator(num));
		setNumber(num);
	};
	return (
		<>
			<div className={styles.container}>
				<Button onClick={handleAgain}> Again</Button>
				<h1 className={styles.title}>Guess The Pokemon</h1>
				{number}
				<ImageCard src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" />
			</div>
		</>
	);
}
