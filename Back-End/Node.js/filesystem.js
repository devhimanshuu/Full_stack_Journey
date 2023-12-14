//show file list with file system

const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "files");

console.warn(dirpath);
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync("hello" + i + ".txt", " a simple text filee");
// }
fs.readdir(dirpath, (err, files) => {
  files.forEach((it) => {
    console.log("file name is this  " + it);
  });
});
