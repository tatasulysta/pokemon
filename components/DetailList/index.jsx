import React from 'react';
import styles from './styles.module.css';
import { detailsList } from '../../utils/constants/details-list';

const DetailList = ({ title, information }) => {
	return (
		<li className={styles['card--container']}>
			<span className={`${styles[title]} ${styles['card--icon']}`}>
				{detailsList[title]}
			</span>
			<p className={styles['card--title']}>{title}</p>
			<p className={styles['card--information']}>{information}</p>
		</li>
	);
};

export default DetailList;
