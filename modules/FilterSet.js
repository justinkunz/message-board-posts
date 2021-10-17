// Similiar design to an npm package I published last year call list-query
// This class allows you to chain multiple conditions together
// and returns optimized results of items matching and not matching
// the conditions specified.

// This could be used to easily update calculations for things likes "topPosts"
// and also allow for quickly generating other calculations that may be
// needed in the future (ie: "bottomPosts")

class FilterSet {
  #data = [];
  #conditions = [];

  constructor(data) {
    this.#data = data;
  }

  /**
   * Adds filter condition
   *
   * @param {() => boolean} condition Condition to match on
   */
  addCondition(condition) {
    this.#conditions.push(condition);
    return this;
  }

  /**
   * Called after adding all conditions
   * Seperates items in target array into matched and non matched arrays
   *
   * @param {String[]} fields Properties to keep in returned objects
   * @param {Boolean} includeAll Override for `fields` - Keeps all properties
   */
  run(fields, includeAll) {
    return this.#data.reduce(
      (acc, curr) => {
        // `.every()` is the optimal choice here since execution will stop immediately
        // if an item fails a check
        const passesConditions = this.#conditions.every((condition) => condition(curr));
        const normalizedItem = includeAll ? curr : this.#normalizeItem(curr, fields);

        if (passesConditions) {
          acc.matches.push(normalizedItem);
        } else {
          acc.nonMatches.push(normalizedItem);
        }

        return acc;
      },
      { matches: [], nonMatches: [] }
    );
  }

  /**
   * Reduces object to only the specified properties
   *
   * @param {Object} item target object to reduce
   * @param {String[]} fields Properties to keep in newly return object
   */
  #normalizeItem(item, fields = []) {
    return fields.reduce((reducedRecordSet, key) => {
      reducedRecordSet[key] = item[key];
      return reducedRecordSet;
    }, {});
  }
}

module.exports = FilterSet;
