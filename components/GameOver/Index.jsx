import React from 'react';

import styles from './styles.module.css';

const GameOver = ({ score }) => {
	return (
		<div className={styles['container--message']}>
			<b>GAME OVER</b>
			<p>Your score is {score}</p>
			<p>You cannot give up just yet ...</p>
		</div>
	);
};

export default GameOver;
