const fs = require('fs');
const path = require('path');
const { csvConverter } = require('../utils');
const { FILES } = require('../constants');

const readFile = (fileName) => {
  const filePath = path.join(FILES.INPUT_DIR, fileName);

  console.log(`Reading file: ${filePath}`);
  return fs.readFileSync(filePath, 'utf-8');
};

const createFile = (fileName, data) => {
  // Create outdir directory if it does not already exist
  if (!fs.existsSync(FILES.OUTPUT_DIR)) {
    console.log(`Creating directory: ${FILES.OUTPUT_DIR}`);
    fs.mkdirSync(FILES.OUTPUT_DIR);
  }
  const filePath = path.join(FILES.OUTPUT_DIR, fileName);

  console.log(`Writing file: ${filePath}`);
  return fs.writeFileSync(filePath, data);
};

module.exports = {
  // Pulls data from posts file
  readPostsFile() {
    return readFile(FILES.INPUT.POSTS);
  },
  // Writes data to a csv file
  writeCsv(fileName, data) {
    return createFile(
      `${fileName}.csv`,
      // Convert data to CSV
      csvConverter.toCsv(data)
    );
  },
  // Writes data to a JSON file
  writeJson(fileName, data) {
    return createFile(
      `${fileName}.json`,
      // Save formatted JSON
      JSON.stringify(data, null, 2)
    );
  },
};
