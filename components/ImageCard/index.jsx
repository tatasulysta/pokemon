import React from 'react';
import Image from 'next/image';

import styles from './styles.module.css';
import Details from '../Details';

const ImageCard = ({ src, information }) => {
	return (
		<div className={styles.container}>
			<Image
				src={src}
				alt="Picture of Pokemon"
				width={150}
				height={150}
				className={styles.image}
			/>
			{information && <Details information={information} src={src} />}
		</div>
	);
};

export default ImageCard;
