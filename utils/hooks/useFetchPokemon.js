import React, { useEffect, useState } from 'react';

const useFetchPokemon = (url) => {
	const [src, setImageSrc] = useState();
	const [loading, setLoading] = useState(false);
	const [information, setInformation] = useState();
	useEffect(() => {
		setLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setImageSrc(res.sprites['back_default']);
				setInformation({
					moves: res.moves[0].move.name,
					weight: res.weight,
					height: res.height,
					abilities: res.abilities,
				});
			});
	}, [url]);
	return { src, information };
};

export default useFetchPokemon;
