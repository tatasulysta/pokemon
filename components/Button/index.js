import React from 'react';
import styles from './styles.module.css';

const variants = ['primary', 'secondary'];

const Button = ({ children, variant, onClick }) => {
	const checkVariant = variants.includes(variant);
	return (
		<button
			className={checkVariant ? styles[variant] : styles.primary}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
