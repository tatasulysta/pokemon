import React, { useContext, useState } from 'react';
import HighscoreContext from '../../context/highscore-context';

import Button from '../Button';

import styles from './styles.module.css';

const NewScoreForm = ({ score, addHighscore }) => {
	const [name, setName] = useState('');
	const highscoreProvider = useContext(HighscoreContext);

	const handleChange = (e) => {
		setName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		highscoreProvider.addHighscore({ score, name });
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
			<Button variant={'secondary'} type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</form>
	);
};

export default NewScoreForm;
