import React from 'react';
import DetailAbilities from '../DetailAbilities';
import DetailList from '../DetailList';

import styles from './styles.module.css';

const Details = ({ information }) => {
	return (
		<div className={styles.container}>
			<ul className={styles['list--container']}>
				<span className={styles['list--container_upper']}>
					{Object.keys(information).map((key) => {
						return (
							key !== 'abilities' && (
								<DetailList
									title={key}
									information={information[key]}
									key={key}
								/>
							)
						);
					})}
				</span>
				<span className={styles['list--container_bottom']}>
					<DetailAbilities
						abilities={information['abilities']}
						title={'abilities'}
					/>
				</span>
			</ul>
		</div>
	);
};

export default Details;
