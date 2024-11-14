#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");

const sourceDir = path.join(__dirname, "../"); // adjust path if needed
const destinationDir = process.cwd();

fs.copy(sourceDir, destinationDir, { overwrite: false }, (err) => {
  if (err) return console.error("Error copying files:", err);
  console.log("Express setup copied successfully!");
});
