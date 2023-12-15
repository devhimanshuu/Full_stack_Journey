//CRUD with file system

const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "CRUD");
const filepath = `${dirpath}/apple.txt`;

//Write in file
// fs.writeFileSync(`${filepath}`, "This is a simple text file");

//Read file
// fs.readFile(filepath, "utf8", (err, item) => {
//   console.log(item);
// });

//Update (append)
// fs.appendFile(filepath, "and file name is apple.txt", (err) => {
//   if (!err) console.log("  file is updated");
// });

//Rename file
// fs.rename(filepath, `${dirpath} /fruit.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

//Delete file
fs.unlinkSync(`${filepath}`);
