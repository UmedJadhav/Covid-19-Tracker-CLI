#!/usr/bin/env node
const cli = require('./lib/cli');
const unhandled = require('cli-handle-unhandled');

const init = require('./lib/init.js');
const ora = require('ora');
const Table = require('cli-table3');
const fetchWorldwide = require('./lib/worldwide_data.js');
const { style, single, colored, borderless } = require('./lib/table.js')
const legend = require('./lib/legend');

const [input] = cli.input;
const xcolor = cli.flags.xcolor;
const minimal = cli.flags.minimal;
const json = cli.flags.json;
unhandled();

(async () => {

    await init(minimal);
    const spinner = ora({ text: '' });
    input === 'help' && (await cli.showHelp(0));

    const head = xcolor ? single : colored;
    const border = minimal ? borderless : {};
    const OutputFormat = Table;
    const output = new OutputFormat({ head, style, chars: border });
    spinner.start();
    const lastUpdated = await fetchWorldwide(output, json);
    legend(lastUpdated);
})();
