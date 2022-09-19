import Head from 'next/head';
import { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

import randomGenerator from '../utils/helpers/randomGenerator';

// export const getStaticProps = async () => {};

export default function Home() {
	const [number, setNumber] = useState();
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
	const handleClick = () => {
		setNumber(randomGenerator());
	};
	return (
		<div className={styles.container}>
			{number}
			<button onClick={handleClick}>hello</button>
		</div>
	);
}
