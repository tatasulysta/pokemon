import React from 'react';
import styles from './styles.module.css';

const DetailAbilities = ({ abilities, title }) => {
	return (
		<li className={styles['card--container']}>
			<span className={`${styles['card--title']} `}>{title}</span>
			{
				<ul className={styles['card--abilities_container']}>
					{abilities.map((ability) => {
						return (
							<li key={ability} className={styles['card--abilities_list']}>
								{ability}
							</li>
						);
					})}
				</ul>
			}
		</li>
	);
};

export default DetailAbilities;
