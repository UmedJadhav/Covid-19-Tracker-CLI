const chalk = require('chalk');
const cli = require('./cli');
const green = chalk.green;
const red = chalk.red;
const yellow = chalk.yellow;
const dim = chalk.dim;

const plain = text => text;

module.exports = {
    single: [
        `#`,
        `Country`,
        `Cases`,
        `Cases ${dim(`(today)`)}`,
        `Deaths`,
        `Deaths ${dim(`(today)`)}`,
        `Recovered`,
        `Active`,
        `Critical`,
        `Per Million`
    ],
    colored: [
        `#`,
        `Country`,
        `Cases`,
        `Cases ${dim(`(today)`)}`,
        `${red(`Deaths`)}`,
        `${red(`Deaths (today)`)}`,
        `${green(`Recovered`)}`,
        `${yellow(`Active`)}`,
        `${red(`Critical`)}`,
        `Per Million`
    ],
    style: { head: ['cyan'] }
};