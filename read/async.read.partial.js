const { convertCsv } = require("../csv.parse");
const {
  promises: { open },
} = require("fs");

module.exports.read = () => {
  (async function handleReadPartial() {
    try {
      const filehandle = await open("./data/pulitzer-circulation-data.csv");
      const bufferAllocation = Buffer.alloc(200);
      const { buffer } = await filehandle.read(
        bufferAllocation,
        0,
        bufferAllocation.length,
        0,
      );
      const data = buffer.toString();
      const values = convertCsv(data);
      console.table(values);
    } catch (error) {
      console.log(`${error}`);
    }
  })();
};
