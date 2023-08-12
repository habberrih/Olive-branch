const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "model", "uploaded_images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  dest: path.join(__dirname, "..", "model", "uploaded_images"),
  storage: storage,
});

const { httpGetModelResult } = require("./classifiy.controller");

router.post("/model", upload.single("file"), httpGetModelResult);

module.exports = router;
