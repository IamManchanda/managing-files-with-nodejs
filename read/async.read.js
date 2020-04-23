const { convertCsv } = require("../csv.parse");
const {
  promises: { readFile },
} = require("fs");

module.exports.read = () => {
  (async function handleRead() {
    try {
      const data = await readFile(
        "./data/pulitzer-circulation-data.csv",
        "utf8",
      );
      const values = convertCsv(data);
      console.table(values);
    } catch (error) {
      console.log(`${error}`);
    }
  })();
};
