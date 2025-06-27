export const rollDice = () => {
	const rolls = [];
	let lastRoll = { d10: 0, dPercentile: 0, total: 0 };

	do {
		const d10 = Math.floor(Math.random() * 10);
		const dPercentile = Math.floor(Math.random() * 10) * 10;
		lastRoll = {
			d10,
			dPercentile,
			total: d10 === 0 && dPercentile === 0 ? 100 : d10 + dPercentile,
		};
		rolls.push(lastRoll);
	} while (lastRoll.total >= 96);

	return rolls;
};
