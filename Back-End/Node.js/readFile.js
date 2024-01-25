//How to read file in Node js line by line

const readline = require("readline");
const fs = require("fs");
var file = "path.to.file";
var rl = readline.createInterface({
  input: fs.createReadStream(file),
  output: process.stdout,
  terminal: false,
});
rl.on("line", function (line) {
  console.log(line); // print the content of the line on each linebreak
});
