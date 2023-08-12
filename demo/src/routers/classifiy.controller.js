const { executeOliveModel } = require("../model/execute_model");
const fs = require("fs");
const path = require("path");

async function httpGetModelResult(req, res) {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json("Please Upload a file");
    }
    const image_path = path.join(
      __dirname,
      "..",
      "model",
      "uploaded_images",
      `${file.originalname}`
    );
    await executeOliveModel(image_path);
    const modelResultPath = path.join(__dirname, "..", "..", "result.txt");
    fs.readFile(modelResultPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        return res.status(200).json(data);
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
}

module.exports = {
  httpGetModelResult,
};
