#!/usr/bin/env node
const cli = require('./lib/cli');
const unhandled = require('cli-handle-unhandled');

const init = require('./lib/init.js');
const ora = require('ora');
const Table = require('cli-table3');
const fetchWorldwideStats = require('./lib/worldwide_data.js');
const fetchAllCountry = require('./lib/all_countries_data.js');
const fetchCountryData = require('./lib/country_data.js');
const fetchCountryChart = require('./lib/country_chart.js');
const { style, single, colored, borderless } = require('./lib/table.js')
const legend = require('./lib/legend');


const [input] = cli.input;
const xcolor = cli.flags.xcolor;
const sortBy = cli.flags.sort;
const reverse = cli.flags.reverse;
const limit = Math.abs(cli.flags.limit);
const chart = cli.flags.chart;
const log = cli.flags.log;
const minimal = cli.flags.minimal;
const options = { sortBy, limit, reverse, minimal, chart, log };
unhandled();

(async () => {

    await init(minimal);
    const spinner = ora({ text: '' });
    input === 'help' && (await cli.showHelp(0));
    const country = input;

    const head = xcolor ? single : colored;
    const border = minimal ? borderless : {};
    const OutputFormat = Table;
    const output = new OutputFormat({ head, style, chars: border });

    spinner.start();
    const lastUpdated = await fetchWorldwideStats(output);
    await fetchAllCountry(spinner, output, country, options);
    await fetchCountryData(spinner, output, country, options);
    await fetchCountryChart(spinner, country, options);
    legend(lastUpdated);
})();
