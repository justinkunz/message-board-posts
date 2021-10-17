/**
 * Determines if a string can be parsed to a valid date
 *
 * @param {String} str String to test
 * @returns {boolean} If string can be parsed to a valid date
 */
const isValidDate = (str) => !Number.isNaN(Date.parse(str));

/**
 * Format date string in "mm-dd-yyyy" format
 *
 * @param {String} date Date to
 * @returns {String} "mm-dd-yyyy" formatted string
 */
const formatDate = (date) => {
  const d = new Date(date);
  // Returns month index (0-11) so +1 to get valid month
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yyyy = d.getFullYear();

  return `${mm}-${dd}-${yyyy}`;
};

module.exports = { formatDate, isValidDate };
