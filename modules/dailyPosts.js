const { dates } = require('../utils');

/**
 * Organizes posts by day
 *
 * @param {Object[]} posts Posts from CSV
 * @returns {Object} posts organized by day
 */
const organizeByDay = (posts) => {
  return posts.reduce((postsByDay, post) => {
    const formattedDate = dates.formatDate(post.timestamp);

    if (postsByDay[formattedDate]) {
      postsByDay[formattedDate].push(post);
    } else {
      postsByDay[formattedDate] = [post];
    }

    return postsByDay;
  }, {});
};

/**
 * Finds top post for each day by a given metric
 *
 * @param {Object[]} posts Posts from CSV
 * @param {String} targetField field to target max value of (ie: 'likes', 'comments')
 *
 * @returns {Object[]} reduced array containing one post per day
 */
const findDailyTopPosts = (posts, targetField) => {
  const postsByDay = organizeByDay(posts);

  return Object.keys(postsByDay).map((date) => {
    const maxInDay = Math.max(...postsByDay[date].map((post) => post[targetField]));
    // Dates are converted to local time, so may be slightly different than ISO format
    // Example: "2015-10-08T03:41:33.000Z" > 10-07-2015 (in CST timezone)
    return postsByDay[date].find((post) => post[targetField] === maxInDay);
  });
};

module.exports = { organizeByDay, findDailyTopPosts };
