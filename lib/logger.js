const chalk = require('chalk');

const log = console.log;

const logger = {
    info: (message, ...arg) => {
       log(chalk.white(message), ...arg)
    },
    error: (message, ...arg) => {
        log(chalk.bold.red(message), ...arg)
    },
    warning: (message, ...arg) => {
        const warning = chalk.keyword('orange');
        log(warning(message), ...arg)
    }
} 

module.exports = logger;