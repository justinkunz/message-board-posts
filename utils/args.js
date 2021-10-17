// In the interest of keeping this dependancy free,
// I am strictly checking for the existence of a couple predefined arguments
// (can be specified in any order)
// To expand upon this in the future, it may be worth introducing a
// node module to handle argument parsing.
// Last year I published a package called "dashcon" that could help

const CONSTANTS = require('../constants');
const args = process.argv.slice(2);

const isDetailedMode = args.includes(CONSTANTS.ARGS.DETAILED_MODE);
const outputToJson = args.includes(CONSTANTS.ARGS.OUTPUT_JSON);

module.exports = { isDetailedMode, outputToJson };
