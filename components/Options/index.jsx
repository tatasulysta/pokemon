import React from 'react';

const Options = ({ options, select, handleChange }) => {
	return (
		<>
			{options?.map((option, idx) => (
				<label htmlFor={option.name} key={idx}>
					<input
						type="radio"
						name={option.name}
						id={option.name}
						value={option.name}
						checked={select === option.name}
						onChange={handleChange}
					/>
					{option.name}
				</label>
			))}
		</>
	);
};

export default Options;
