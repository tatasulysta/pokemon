import React from 'react';

import styles from './styles.module.css';

const DetailLists = ({ detail, title }) => {
	return (
		<li className={styles['card--container']}>
			<span className={`${styles['card--title']} `}>{title}</span>
			{
				<li className={styles['card--abilities_container']}>
					{detail.map((detail) => {
						return (
							<li key={detail} className={styles['card--abilities_list']}>
								{detail}
							</li>
						);
					})}
				</li>
			}
		</li>
	);
};

export default DetailLists;
