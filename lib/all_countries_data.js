const axios = require('axios');
const { cyan, dim } = require('chalk');
const numberFormat = require('./num_format');
const { sortingKeys } = require('./table.js');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const orderBy = require('lodash.orderby');
const validateSort = require('./validate_sort.js');

module.exports = async (
    spinner,
    output,
    countryName,
    { sortBy, limit, reverse }
) => {
    if (!countryName) {
        validateSort(sortBy, spinner);
        const [err, response] = await to(
            axios.get(`https://corona.lmao.ninja/v2/countries`)
        );
        handleError(`API is down, try again later.`, err, false);
        let allCountries = response.data;

        const format = numberFormat();

        const direction = reverse ? 'asc' : 'desc';
        allCountries = orderBy(
            allCountries,
            [sortingKeys[sortBy]],
            [direction]
        );

        allCountries = allCountries.slice(0, limit);

        allCountries.map((AllCountry, count) => {
            output.push([
                count + 1,
                AllCountry.country,
                format(AllCountry.cases),
                format(AllCountry.todayCases),
                format(AllCountry.deaths),
                format(AllCountry.todayDeaths),
                format(AllCountry.recovered),
                format(AllCountry.active),
                format(AllCountry.critical),
                format(AllCountry.casesPerOneMillion)
            ]);
        });

        spinner.stopAndPersist();
        const isRev = reverse ? `${dim(` & `)}${cyan(`Order`)}: reversed` : ``;
        spinner.info(`${cyan(`Sorted by:`)} ${sortBy}${isRev}`);
        console.log(output.toString());
    }
};