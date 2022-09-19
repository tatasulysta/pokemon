import React, { useEffect, useState } from 'react';

const useFetchImage = (url) => {
	const [src, setImageSrc] = useState();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((res) => setImageSrc(res.sprites['back_default']));
	}, [url]);
	return src;
};

export default useFetchImage;
