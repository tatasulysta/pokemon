import randomGenerator from './randomGenerator';

function getPokemon(idx) {
	const pokemon = JSON.parse(localStorage.getItem('POKEMON'));
	return idx ? pokemon[idx] : pokemon[randomGenerator()];
}
function randomNumber() {
	return Math.trunc(Math.random() * 4);
}
export default function optionsGenerator(idx) {
	const options = [getPokemon(), getPokemon(), getPokemon(), getPokemon()];

	options[Number(randomNumber())] = getPokemon(idx);
	console.log(getPokemon(idx));

	return options;
}
