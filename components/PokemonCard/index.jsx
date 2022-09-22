import React from 'react';

import Image from 'next/image';
import Details from '../Details';

import styles from './styles.module.css';

const PokemonCard = ({ src, information }) => {
	return (
		<div className={styles.container}>
			<div className={styles['container--image']}>
				<Image
					src={src}
					alt="Picture of Pokemon"
					width={150}
					height={150}
					layout="intrinsic"
					className={styles.image}
				/>
			</div>
			<div className={styles['container--details']}>
				{information && <Details information={information} src={src} />}
			</div>
		</div>
	);
};

export default PokemonCard;
