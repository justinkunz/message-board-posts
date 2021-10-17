# Message Board Posts

This script takes in a [source CSV file](./data/posts.csv) containing message board post data and outputs three different files:

1. `top_posts.csv` - Post Ids of public posts with more than `10` comments and `9000` views that are less than `40` characters long
2. `other_posts.csv` - Post Ids of all posts **not** meeting the above criteria
3. `daily_top_posts.csv` - Top post per day on the basis of `likes`

## Usage

Run `node .` in this directory to run the script. An `output` folder will be created containing the new files.

### Additional Options

- Add the `--output-json` flag to store the output in JSON format _(instead of the default CSV format)_
- Add the `--detailed` flag to store the entire post body for `top_posts` and `other_posts` _(instead of just the post Ids)_

#### Example

```
node .  --output-json --detailed
```

#### Testing

Unit tests are written in Jest and can be tested with `npm test`. While the code itself contains no external dependencies, unless you have Jest globally installed, you will need to run `npm i` first to install jest.
