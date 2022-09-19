import React from 'react';

import styles from './styles.module.css';

const Details = ({ information }) => {
	return (
		<div className={styles.container}>
			<ul className={styles['list-container']}>
				{Object.keys(information).map((key) => {
					return key === 'abilities' ? (
						<li key={key}>
							{key}:
							<ul>
								{information[key].map((ability, index) => (
									<li key={index}>{ability}</li>
								))}
							</ul>
						</li>
					) : (
						<li key={key} className={styles[key]}>
							{key} : {information[key]}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Details;
