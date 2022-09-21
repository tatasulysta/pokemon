import React from 'react';
import styles from './styles.module.css';

const variants = ['primary', 'secondary'];

const Button = ({ children, variant, onClick, type, able }) => {
	const checkVariant = variants.includes(variant);
	return (
		<>
			{able === false ? (
				<button
					className={checkVariant ? styles[variant] : styles.primary}
					onClick={onClick}
					type={type}
					disabled
				>
					{children}
				</button>
			) : (
				<button
					className={checkVariant ? styles[variant] : styles.primary}
					onClick={onClick}
					type={type}
				>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
