// Organization for filter rules so chained conditions can be easily read
// In the interest of planning ahead, I added a few methods here
// that are not currently being used (maxViews, maxComments, minimumPostLength)
// that may be needed for future enhancements

const filterRules = {
  privacy(privarySetting) {
    return (post) => post.privacy === privarySetting;
  },
  minimumComments(count) {
    return (post) => post.comments > count;
  },
  maxComments(count) {
    return (post) => post.comments < count;
  },
  minimumViews(count) {
    return (post) => post.views > count;
  },
  maxViews(count) {
    return (post) => post.views < count;
  },
  minimumPostLength(charCount) {
    return (post) => post.title.length > charCount;
  },
  maxPostLength(charCount) {
    return (post) => post.title.length < charCount;
  },
};

module.exports = filterRules;
