const { REGEX } = require('../constants');
const { isValidDate } = require('./dates');

/**
 * Parse CSV file contents
 *
 * @param {String} data CSV File Data
 * @returns {Object[]} Array of objects containing CSV data
 */
const parseCsv = (data) => {
  const rows = data.trim().split('\n');
  const headers = rows.shift().split(REGEX.CSV_DELIMITER);

  const format = (val) => {
    // Number() is better than parseInt() here
    // because parseInt() will parse out numbers contained in string
    // and Number() will strictly convert a value to a number
    // This can prevent conversion errors
    // Example: parseInt("5 Pretty No-Carve Pumpkin Ideas") = 5
    if (!Number.isNaN(Number(val))) {
      return Number(val);
    }

    if (isValidDate(val)) {
      return new Date(val);
    }

    return val;
  };

  return rows.map((row) => {
    return row.split(REGEX.CSV_DELIMITER).reduce((record, value, index) => {
      record[headers[index]] = format(value);
      return record;
    }, {});
  });
};

/**
 * Convert JSON to CSV
 *
 * @param {Object[]} data JSON formatted data to convert to CSV
 * @returns {String} CSV String
 */
const toCsv = (data = []) => {
  const headers = Object.keys(data[0]);
  const csvBody = data.map((item) => {
    return headers.map((key) => item[key]).join(',');
  });

  return headers.join(',').concat('\n').concat(csvBody.join('\n'));
};

module.exports = { parseCsv, toCsv };
