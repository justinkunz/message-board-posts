const { dailyPosts } = require('../modules');

const examplePosts = [
  {
    id: 4839211,
    title: 'Giving Your Baby Grown-up Food',
    privacy: 'public',
    likes: 38,
    views: 16202,
    comments: 16,
    timestamp: '2015-10-04T09:05:35.000Z',
  },
  {
    id: 4839213,
    title: '5 Pretty No-Carve Pumpkin Ideas',
    privacy: 'public',
    likes: 57,
    views: 11236,
    comments: 13,
    timestamp: '2015-10-06T09:05:37.000Z',
  },
  {
    id: 4839222,
    title: 'Sarah Palin Knows Cheesesteak',
    privacy: 'public',
    likes: 71,
    views: 20108,
    comments: 31,
    timestamp: '2015-10-15T06:05:46.000Z',
  },
  {
    id: 4839230,
    title: 'Do You Do the Flu Shot?',
    privacy: 'public',
    likes: 62,
    views: 10674,
    comments: 16,
    timestamp: '2015-10-04T09:05:54.000Z',
  },
  {
    id: 4839232,
    title: 'An SEO friendly title here',
    privacy: 'public',
    likes: 107,
    views: 12257,
    comments: 41,
    timestamp: '2015-10-06T09:05:00.000Z',
  },
];

test('dailyPosts - organizeByDay', () => {
  const postsByDay = dailyPosts.organizeByDay(examplePosts);

  expect(postsByDay['10-06-2015'].length).toBe(2);
  expect(postsByDay['10-04-2015'].length).toBe(2);
  expect(postsByDay['10-15-2015'].length).toBe(1);
});

test('dailyPosts - daily top posts', () => {
  const topDailyPosts = dailyPosts.findDailyTopPosts(examplePosts, 'likes');

  expect(topDailyPosts.length).toBe(3);
  expect(topDailyPosts.findIndex(({ title }) => title === 'Do You Do the Flu Shot?')).not.toBe(-1);
  expect(
    topDailyPosts.findIndex(({ title }) => title === 'Sarah Palin Knows Cheesesteak')
  ).not.toBe(-1);
  expect(topDailyPosts.findIndex(({ title }) => title === 'An SEO friendly title here')).not.toBe(
    -1
  );
});
