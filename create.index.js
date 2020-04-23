const {
  watch,
  promises: { open, readdir },
} = require("fs");
const camelCase = require("camelcase");

watch("./read", function watchCreateIndex() {
  (async function handleCreateIndex() {
    let filehandle;
    try {
      filehandle = await open("./index.js", "w");
      const files = await readdir("./read");

      files.map(function handleIteration(file) {
        console.log(file);
        const name = file.replace(".js", "");
        console.log(`Adding a file: ${file}`);
        filehandle.write(
          `module.exports.${camelCase(
            name,
          )} = require("./read/${name}").read;\n`,
        );
      });
    } catch (error) {
      console.log(error);
    } finally {
      if (filehandle !== undefined) {
        await filehandle.close();
      }
    }
  })();
});
