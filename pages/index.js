import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

// export const getStaticProps = async () => {};

export default function Home() {
	useEffect(() => {
		if (localStorage.getItem('POKEMON') !== {}) {
			fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
				.then((res) => res.json())
				.then((data) =>
					localStorage.setItem('POKEMON', JSON.stringify(data.results))
				);
		}
	}, []);
	return <div className={styles.container}>test</div>;
}
