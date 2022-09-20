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
				const abilities = res.abilities.map((stay) => stay.ability.name);
				setInformation({
					moves: res.moves.slice(0, 5).map((move) => move.move.name),
					weight: res.weight,
					height: res.height,
					abilities,
				});
			});
		setLoading(false);
	}, [url]);
	return { src, information, loading };
};

export default useFetchPokemon;
