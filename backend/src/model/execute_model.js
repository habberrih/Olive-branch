const { spawn } = require("node:child_process");

const fs = require("fs");

function writeStringToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Successfully wrote to file:", filePath);
    }
  });
}

function executeOliveModel(image_path) {
  return new Promise((resolve, reject) => {
    const python = spawn("python", [
      "D:/Abdullah Habberrih/oliver-trees/backend/src/model/model.py",
      image_path,
    ]);

    let resultData = "";

    python.stdout.on("data", (resultFromPython) => {
      console.log("Python: Pipe data from python script ...");
      const data = resultFromPython.toString();
      resultData = data.toString();
    });

    python.on("close", (code) => {
      console.log(`Node: executed python successfully with code: ${code}`);
      console.log("Result from Python:", resultData);
      writeStringToFile("result.txt", resultData);
      resolve();
    });

    python.on("error", (err) => {
      console.error("Failed to execute Python script:", err);
      reject(err);
    });
  });
}

module.exports = {
  executeOliveModel,
};
