import React from 'react';
import styles from './styles.module.css';

const Button = ({ children, variant, onClick, type, able }) => {
	return (
		<>
			{able === false ? (
				<button
					className={styles.primary}
					onClick={onClick}
					type={type}
					disabled
				>
					{children}
				</button>
			) : (
				<button className={styles.primary} onClick={onClick} type={type}>
					{children}
				</button>
			)}
		</>
	);
};

export default Button;
