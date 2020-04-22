const { convertCsv } = require("./csv.parse");
const { openSync, readSync } = require("fs");

(async function handleReadPartialSync() {
  try {
    const fileDescriptor = openSync("./data/app.log");
    let count = 0;
    do {
      const buffer = Buffer.alloc(200);
      count = readSync(fileDescriptor, buffer, 0, buffer.length, null);
      const data = buffer.toString();
      console.log(data);
    } while (count > 0);
  } catch (error) {
    console.log(`${error}`);
  }
})();
