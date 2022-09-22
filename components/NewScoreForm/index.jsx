import React, { useContext, useState } from 'react';
import HighscoreContext from '../../context/highscore-context';

import Button from '../Button';
import Swal from 'sweetalert2';

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
		if (name.trim().length === 0) {
			Swal.fire({
				title: 'Error',
				text: 'Please write your name',
				icon: 'error',
				confirmButtonText: 'Ok',
			});
		} else {
			const state = highscoreProvider.addHighscore({ score, name });
			if (!state) {
				Swal.fire({
					title: 'Error',
					text: 'This name has been used. Current score is lower than before. ',
					icon: 'error',
					showDenyButton: true,
					denyButtonText: `Don't Save`,
					confirmButtonText: 'Change Name',
					denyButtonColor: 'white',
				}).then((res) => {
					if (res.isDenied) {
						setAble(false);
					}
				});
			} else {
				setAble(false);
			}
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
				disabled={!able}
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
