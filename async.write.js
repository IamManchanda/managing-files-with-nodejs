const {
  constants,
  promises: { writeFile },
} = require("fs");

(async function handleWrite() {
  try {
    await writeFile(
      "./data/newapp.log",
      `163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512`,
      {
        encoding: "base64",
      },
    );
    console.log("File saved successfully.");
  } catch (error) {
    console.log(error);
  }
})();
