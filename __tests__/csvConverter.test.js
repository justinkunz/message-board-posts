const { expect } = require('@jest/globals');
const { csvConverter } = require('../utils');

const exampleCsv = `id,firstName,lastName
1,Justin,Kunz
2,Jane,Doe`;

const exampleJson = [
  {
    id: 1,
    firstName: 'Justin',
    lastName: 'Kunz',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
  },
];

test('parses CSV', () => {
  const convertedCsv = csvConverter.parseCsv(exampleCsv);
  expect(convertedCsv).toMatchObject(exampleJson);
});

test('creates CSV from JSON', () => {
  const convertedJson = csvConverter.toCsv(exampleJson);
  expect(convertedJson).toBe(exampleCsv);
});
