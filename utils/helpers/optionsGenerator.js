import randomGenerator from './randomGenerator';

function getPokemon(idx) {
	const pokemon = JSON.parse(localStorage.getItem('POKEMON'));
	return pokemon[idx];
}
function randomNumber() {
	return Math.trunc(Math.random() * 4);
}
function generateRandomOptions(idx) {
	const arr = [idx];
	const returnArr = [];
	while (arr.length < 5) {
		const temp = randomGenerator();
		if (!arr.includes(temp)) {
			arr.push(temp);
			returnArr.push(getPokemon(temp));
		}
	}
	return returnArr;
}
export default function optionsGenerator(idx) {
	const options = generateRandomOptions(idx);
	options[Number(randomNumber())] = getPokemon(idx);
	return [options, getPokemon(idx)];
}
