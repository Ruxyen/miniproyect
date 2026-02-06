const fs = require("fs");
const path = require("path");

const readJSON = (filename) => {
  const filePath = path.join(__dirname, "../data", filename);
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

const writeJSON = (filename, data) => {
  const filePath = path.join(__dirname, "../data", filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
};

module.exports = { readJSON, writeJSON };
