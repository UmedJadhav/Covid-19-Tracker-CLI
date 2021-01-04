const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const pkgJSON = require('./../package.json');
const unhandledError = require('cli-handle-unhandled');

module.exports = async (skipWelcome = false) => {
    await unhandledError();
    checkNode(`10`);
    !skipWelcome &&
        welcome(`covid19-cli`, `by UmedJ\n${pkgJSON.description}`, {
            color: `#007C91`,
            bgColor: `#FFFFFF`,
            bold: true,
            clear: true,
            version: `v${pkgJSON.version}`
        })
}