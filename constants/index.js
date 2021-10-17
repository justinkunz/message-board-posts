const FILES = {
  INPUT: {
    POSTS: 'posts.csv',
  },
  INPUT_DIR: 'data',
  OUTPUT: {
    DAILY_TOP_POSTS: 'daily_top_posts',
    TOP_POSTS: 'top_posts',
    OTHER_POSTS: 'other_posts',
  },
  OUTPUT_DIR: 'output',
};

const REGEX = {
  // Split by comma, ignore commas between ""s
  CSV_DELIMITER: /,(?=(?:(?:[^"]*"){2})*[^"]*$)/,
};

const ARGS = {
  OUTPUT_JSON: '--output-json',
  DETAILED_MODE: '--detailed',
};

module.exports = { ARGS, FILES, REGEX };
