const { convertCsv } = require("../csv.parse");
const { openSync, readSync } = require("fs");

module.exports.read = () => {
  (function handleReadPartialSync() {
    try {
      const fileDescriptor = openSync("./data/pulitzer-circulation-data.csv");
      const buffer = Buffer.alloc(200);
      readSync(fileDescriptor, buffer, 0, buffer.length, 0);
      const data = buffer.toString();
      const values = convertCsv(data);
      console.table(values);
    } catch (error) {
      console.log(`${error}`);
    }
  })();
};
