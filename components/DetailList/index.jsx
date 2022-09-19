import React from 'react';
import styles from './styles.module.css';
import { FaWeightHanging } from 'react-icons/fa';

const DetailList = () => {
	const component = (
		<FaWeightHanging className={`${styles.icon} ${styles.weight}`} />
	);
	return (
		<div className={styles['card--container']}>
			{component}
			<p className={styles['card--title']}>Weight</p>
			<p className={styles['card--information']}>3000</p>
		</div>
	);
};

export default DetailList;
