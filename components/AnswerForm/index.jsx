import React, { useEffect, useState } from 'react';

import Button from '../Button';
import Options from '../Options';

import styles from './styles.module.css';

const AnswerForm = ({ formData, setIsAnswerTrue, isAnswerTrue, able }) => {
	const [select, setSelect] = useState();
	const [isTrue, setIsTrue] = useState(true);

	const handleChange = (e) => {
		setSelect(e.target.value);
		setIsTrue(true);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (select === formData?.answer) {
			setIsAnswerTrue(true);
			setIsTrue(true);
		} else {
			setIsAnswerTrue(false);
			setIsTrue(false);
		}
	};
	useEffect(() => {
		isAnswerTrue && setSelect('');
	}, [isAnswerTrue]);
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<span className={styles['title--message_container']}>
				<b>Answer</b>
				{!isTrue && <p>Wrong Answer </p>}
			</span>
			<div className={styles['options--wrapper']}>
				<Options
					options={formData?.options}
					handleChange={handleChange}
					select={select}
				/>
			</div>
			<Button
				variant={'secondary'}
				type="submit"
				onClick={handleSubmit}
				able={able}
			>
				Submit
			</Button>
		</form>
	);
};

export default AnswerForm;
