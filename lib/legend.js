const sym = require('log-symbols');
const { cyan, dim } = require('chalk');

const infoCountries = () =>
	console.log(
		dim(`
			\n${sym.info} ${cyan(`KEY:`)}
${dim(`❯ `)}${cyan(`Country:`)} Name of the country
${dim(`❯ `)}${cyan(`Cases:`)} Total number of cases in a country
${dim(`❯ `)}${cyan(`Cases (today):`)} Cases in 24 hours GMT/UTC
${dim(`❯ `)}${cyan(`Deaths:`)} Total number of deaths in a country
${dim(`❯ `)}${cyan(`Deaths (today):`)} Deaths in 24 hours GMT/UTC
${dim(`❯ `)}${cyan(`Recovered:`)} Total number of recovered people
${dim(`❯ `)}${cyan(`Active:`)}  Total number of active patients
${dim(`❯ `)}${cyan(`Critical:`)} Total number of critical patients
${dim(`❯ `)}${cyan(`Per Million:`)} Affected patients per million
`)
	);

module.exports = async (lastUpdated, minimal) => {
	if (minimal) return console.log();
	console.log(dim(`${sym.info} ${cyan(`Last Updated:`)} ${lastUpdated}`));
	infoCountries();
};