import React, { useContext, useState } from 'react';
import HighscoreContext from '../../context/highscore-context';

import Button from '../Button';

import styles from './styles.module.css';

const NewScoreForm = ({ score }) => {
	const [name, setName] = useState('');
	const [able, setAble] = useState(true);
	const highscoreProvider = useContext(HighscoreContext);

	const handleChange = (e) => {
		setName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === ' ') {
			window.alert('NO NAME');
		} else {
			highscoreProvider.addHighscore({ score, name });
			setAble(false);
		}
	};
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<b>NEW HIGHSCORE !!! 🎉🎉</b>
			<input
				type="text"
				name="name"
				id="name"
				onChange={handleChange}
				value={name}
			/>
			<Button
				variant={'secondary'}
				type="submit"
				onClick={handleSubmit}
				able={able}
			>
				Submit
			</Button>
		</form>
	);
};

export default NewScoreForm;
