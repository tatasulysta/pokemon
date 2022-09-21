import React, { useContext } from 'react';
import HighscoreContext from '../../context/highscore-context';

import styles from './styles.module.css';

const Table = ({}) => {
	const highscoreProvider = useContext(HighscoreContext);
	const highscore = highscoreProvider.highscore;
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Highscore</th>
				</tr>
			</thead>
			<tbody>
				{highscore?.map(({ name }) => (
					<tr key={name}>
						<td>{name}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
