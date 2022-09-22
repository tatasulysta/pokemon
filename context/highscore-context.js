import React, { createContext, useEffect, useState } from 'react';
import { HIGHSCORE } from '../utils/constants/highscore-list';

const HighscoreContext = createContext({
	highscore: HIGHSCORE,
	addHighscore: () => {},
});
export const HighscoreContextProvider = ({ children }) => {
	const [highscore, setHighscore] = useState(HIGHSCORE);
	const findIncludeName = (name) => {
		return highscore.filter(
			(score) => score.name.toLocaleLowerCase() === name.toLocaleLowerCase()
		);
	};
	const findExcludeName = (name) => {
		return highscore.filter(
			(score) => score.name.toLowerCase() !== name.toLowerCase()
		);
	};
	const checkIsNameIn = (name) => {
		const temp = findIncludeName(name);
		if (temp.length) {
			return temp;
		} else {
			return false;
		}
	};
	const addNewScore = ({ score, name, currentState }) => {
		const temp = currentState;
		temp.push({ score, name });
		temp.sort((a, b) => b.score - a.score);
		setHighscore(temp);
	};

	const addHighscore = ({ score, name }) => {
		const isIn = checkIsNameIn(name);
		const temp = findExcludeName(name);
		if (isIn) {
			if (isIn[0].score < score) {
				addNewScore({ score, name, currentState: temp });
				return true;
			} else {
				return false;
			}
		} else {
			temp.pop();
			addNewScore({ score, name, currentState: temp });
			return true;
		}
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
