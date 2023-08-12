const express = require("express");
const app = express();
const path = require("path");

const modelRouter = require("./routers/classify.route");
const primaryHTML = path.join(__dirname, "..", "public");

app.use(express.json());
app.use(express.static(primaryHTML));
app.use(modelRouter);

module.exports = app;
