const {
  promises: { appendFile },
} = require("fs");

(async function handleAppend() {
  try {
    await appendFile(
      "./data/app.log",
      `163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /append-file-test" 405 21512`,
    );
    console.log("File saved successfully.");
  } catch (error) {
    console.log(error);
  }
})();
