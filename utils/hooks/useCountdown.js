import React, { useEffect, useState } from 'react';

const useCountdown = () => {
	const [count, setCount] = useState(10);
	const [shouldCountdown, setShouldCountdown] = useState(true);
	const handleRestart = () => {
		setCount(10);
		setShouldCountdown(true);
	};
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
	return [
		count,
		shouldCountdown,
		{
			setRestart: handleRestart,
		},
	];
};

export default useCountdown;
