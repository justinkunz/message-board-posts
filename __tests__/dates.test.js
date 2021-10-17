const { dates } = require('../utils');

test('formats date', () => {
  const formattedDate = dates.formatDate('2015-10-07T17:21:15.000Z');
  expect(formattedDate).toBe('10-07-2015');
});

test('valid date detection', () => {
  expect(dates.isValidDate('10/07/2015')).toBe(true);
  expect(dates.isValidDate('foo')).toBe(false);
});
