import React, { useEffect } from 'react';
import DetailLists from '../DetailLists';
import DetailList from '../DetailList';

import styles from './styles.module.css';

const Details = ({ information }) => {
	return (
		<div className={styles.container}>
			<ul className={styles['list--container']}>
				<span className={styles['list--container_upper']}>
					{Object.keys(information).map((key) => {
						if (key !== 'moves' && key !== 'abilities')
							return (
								<DetailList
									title={key}
									information={information[key]}
									key={key}
								/>
							);
					})}
				</span>
				<span className={styles['list--container_bottom']}>
					<DetailLists detail={information['moves']} title={'moves'} />
					<DetailLists detail={information['abilities']} title={'abilities'} />
				</span>
			</ul>
		</div>
	);
};

export default Details;
