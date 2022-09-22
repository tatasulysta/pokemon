import React from 'react';

import styles from './styles.module.css';

const Information = ({ count, score, className }) => {
	return (
		<div className={`${styles.container} ${className}`}>
			<p>Time : {count}s</p>
			<p>Current Score : {score}</p>
		</div>
	);
};

export default Information;
