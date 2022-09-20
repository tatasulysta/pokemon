import React from 'react';

import { highscore } from '../../utils/constants/highscore-list';

import styles from './styles.module.css';

const Table = () => {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Highscore</th>
				</tr>
			</thead>
			<tbody>
				{highscore.map(({ name }) => (
					<tr key={name}>
						<td>{name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
