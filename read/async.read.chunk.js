const { convertCsv } = require("../csv.parse");
const {
  promises: { open, stat },
} = require("fs");

module.exports.read = () => {
  Number.prototype[Symbol.iterator] = function* () {
    for (let i = 0; i <= this; i += 1) yield i;
  };

  (async function handleReadChunk() {
    try {
      const filename = "./data/app.log";
      const { size: totalSize } = await stat(filename);
      const filehandle = await open(filename);
      const bufferAllocation = Buffer.alloc(200);
      const chunkCount = totalSize / bufferAllocation.length;
      for (const iterator of [...chunkCount]) {
        const { buffer } = await filehandle.read(
          bufferAllocation,
          0,
          bufferAllocation.length,
          iterator * bufferAllocation.length,
        );
        const data = buffer.toString();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  })();
};
