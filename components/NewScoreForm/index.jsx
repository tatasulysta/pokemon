import React from 'react';
import Button from '../Button';

import styles from './styles.module.css';

const NewScoreForm = () => {
	const handleSubmit = () => {};
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<b>NEW HIGHSCORE !!! 🎉🎉</b>
			<input type="text" name="" id="" />
			<Button variant={'secondary'} type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</form>
	);
};

export default NewScoreForm;
