import React, { useEffect, useState } from 'react';

const useCountdown = () => {
	const [count, setCount] = useState(60);
	const [shouldCountdown, setShouldCountdown] = useState(true);
	useEffect(() => {
		setCount(60);
	}, []);
	useEffect(() => {
		const interval = setInterval(() => {
			if (shouldCountdown) {
				setCount((count) => count - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [shouldCountdown]);

	useEffect(() => {
		if (count === 0) {
			setShouldCountdown(false);
		}
	}, [count]);
	return count;
};

export default useCountdown;
