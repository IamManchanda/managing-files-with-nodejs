const { convertCsv } = require("./csv.parse");
const { readFileSync } = require("fs");

(function handleCSVReadSync() {
  try {
    const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");
    const values = convertCsv(data);
    console.table(values);
  } catch (error) {
    console.log(`${error}`);
  }
})();
