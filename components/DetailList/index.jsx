import React from 'react';

import styles from './styles.module.css';

const DetailList = ({ title, information }) => {
	return (
		<li className={styles['card--container']}>
			<p className={styles['card--title']}>{title}</p>
			<p className={styles['card--information']}>{information}</p>
		</li>
	);
};

export default DetailList;
