const { FilterSet, fileHandler, dailyPosts } = require('./modules');
const { FILES } = require('./constants');
const { args, csvConverter, filterRules } = require('./utils');

// Writes data as JSON if "--output-json" arg provided
// Otherwise outputs to CSV
const writeToFile = (fileName, data) => {
  if (args.outputToJson) {
    return fileHandler.writeJson(fileName, data);
  }

  return fileHandler.writeCsv(fileName, data);
};

// Handler function
const init = () => {
  const posts = csvConverter.parseCsv(fileHandler.readPostsFile());

  const { matches: topPosts, nonMatches: otherPosts } = new FilterSet(posts)
    .addCondition(filterRules.privacy('public'))
    .addCondition(filterRules.minimumComments(10))
    .addCondition(filterRules.minimumViews(9000))
    .addCondition(filterRules.maxPostLength(40))
    .run(['id'], args.isDetailedMode); // Returns entire object if "--detailed" arg provided. Otherwise, returns only the id

  const dailyTopPosts = dailyPosts.findDailyTopPosts(posts, 'likes'); // <- tracking metric is "likes"

  writeToFile(FILES.OUTPUT.TOP_POSTS, topPosts);
  writeToFile(FILES.OUTPUT.OTHER_POSTS, otherPosts);
  writeToFile(FILES.OUTPUT.DAILY_TOP_POSTS, dailyTopPosts);
};

init();
