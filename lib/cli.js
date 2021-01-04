const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

module.exports = meow(`

    Usage 
    ${green(`covid19`)} ${cyan(`<command>`)} ${yellow(`[--option]`)}

      Commands
	  ${cyan(`country-name`)}  Get data for a given country
      
      Options
	  ${yellow(`-s`)}, ${yellow(`--sort`)}      Sort data by type
	  ${yellow(`-r`)}, ${yellow(`--reverse`)}   Reverse print order
	  ${yellow(`-l`)}, ${yellow(`--limit`)}     Print only N entries
	  ${yellow(`-c`)}, ${yellow(`--chart`)}     Print chart for a country
	  ${yellow(`-g`)}, ${yellow(`--log`)}       Print logarithmic chart
	  ${yellow(`-x`)}, ${yellow(`--xcolor`)}    Single colored output
	  ${yellow(`-m`)}, ${yellow(`--minimal`)}   Minimalistic CLI output
      ${yellow(`-j`)}, ${yellow(`--json`)}      Output JSON only data
      
      Examples
	  ${green(`covid19`)} ${cyan(`india`)}
	  ${green(`covid19`)} ${cyan(`india`)} ${yellow(`--chart`)}
	  ${green(`covid19`)} ${cyan(`india`)} ${yellow(`--chart`)} ${yellow(`--log`)}
	  ${green(`covid19`)} ${yellow(`--sort`)} ${cyan(`cases-today`)}
	  ${green(`covid19`)} ${yellow(`-s`)} ${cyan(`critical`)}

`, {
    booleanDefault: undefined,
    hardRejection: false, // Using handle-unhandled for rejection handling
    inferType: false,
    flags: {
        xcolor: {
            type: 'boolean',
            default: false,
            alias: 'x'
        },
        sort: {
            type: 'string',
            default: 'cases',
            alias: 's'
        },
        reverse: {
            type: 'boolean',
            default: false,
            alias: 'r'
        },
        limit: {
            type: 'number',
            default: Number.MAX_SAFE_INTEGER,
            alias: 'l'
        },
        chart: {
            type: 'boolean',
            default: false,
            alias: 'c'
        },
        log: {
            type: 'boolean',
            default: false,
            alias: 'g'
        },
        minimal: {
            type: 'boolean',
            default: false,
            alias: 'm'
        },
        json: {
            type: 'boolean',
            default: false,
            alias: 'j'
        }
    }
});

