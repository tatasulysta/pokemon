import React, { createContext, useState } from 'react';
import { HIGHSCORE } from '../utils/constants/highscore-list';

const HighscoreContext = createContext({
	highscore: HIGHSCORE,
	addHighscore: () => {},
});
export const HighscoreContextProvider = ({ children }) => {
	const [highscore, setHighscore] = useState(HIGHSCORE);
	const addHighscore = ({ score, name }) => {
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
