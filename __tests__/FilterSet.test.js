const { expect } = require('@jest/globals');
const { FilterSet } = require('../modules');

test('FilterSet filtering', () => {
  const exampleData = [
    {
      firstName: 'Foo',
      lastName: 'Bar',
      isAdmin: false,
      score: 90,
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      isAdmin: false,
      score: 60,
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      isAdmin: true,
      score: 100,
    },
  ];

  const { matches, nonMatches } = new FilterSet(exampleData)
    .addCondition((user) => user.score > 80)
    .addCondition((user) => !user.isAdmin)
    .run(['firstName', 'lastName']);

  expect(matches.length).toBe(1);
  expect(matches[0].firstName).toBe('Foo');
  expect(matches[0].lastName).toBe('Bar');

  expect(nonMatches.length).toBe(2);
});
