import React, { useEffect, useState } from 'react';

import Button from '../Button';
import Options from '../Options';

import styles from './styles.module.css';

const Form = ({ formData, setIsTrue }) => {
	const [select, setSelect] = useState();

	const handleChange = (e) => {
		setSelect(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		select === formData?.answer ? setIsTrue(true) : setIsTrue(false);
	};
	return (
		<>
			<form onSubmit={handleSubmit} className={styles.form}>
				<b>Answer</b>
				<div className={styles['options--wrapper']}>
					<Options
						options={formData?.options}
						handleChange={handleChange}
						select={select}
					/>
				</div>{' '}
				<Button variant={'secondary'} type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</form>
		</>
	);
};

export default Form;
