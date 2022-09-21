import React, { createContext, useState } from 'react';
import { HIGHSCORE } from '../utils/constants/highscore-list';

const HighscoreContext = createContext({
	highscore: HIGHSCORE,
	addHighscore: () => {},
});
export const HighscoreContextProvider = ({ children }) => {
	const [highscore, setHighscore] = useState(HIGHSCORE);
	const checkIsIn = (name) => {
		const temp = HIGHSCORE.filter((highscore) => highscore.name === name);
		console.log(temp);
		if (temp.length) {
			return true;
		} else {
			return false;
		}
	};
	const addHighscore = ({ score, name }) => {
		console.log(checkIsIn('Lance'));
		let temp = highscore.filter(
			(highscore) => highscore.name.toLowerCase() !== name.toLowerCase()
		);
		if (temp.length > 4) {
			temp.pop();
		}
		temp.push({ score, name });
		temp.sort((a, b) => b.score - a.score);
		setHighscore(temp);
	};

	return (
		<HighscoreContext.Provider
			value={{
				highscore,
				addHighscore,
			}}
		>
			{children}
		</HighscoreContext.Provider>
	);
};

export default HighscoreContext;
