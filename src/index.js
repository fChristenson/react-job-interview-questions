const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "..", "dist")));

const makeFile = name => {
  return path.resolve(__dirname, "views", name);
};

app.get("/", (req, res) => {
  res.sendFile(makeFile("junior.html"));
});

app.get("/senior", (req, res) => {
  res.sendFile(makeFile("senior.html"));
});

module.exports = app;
