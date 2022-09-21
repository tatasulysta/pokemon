import React from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

const ImageCard = ({ src }) => {
	return (
		<div className={styles.container}>
			<Image src={src} alt="Picture of Pokemon" width={150} height={150} />
		</div>
	);
};

export default ImageCard;
