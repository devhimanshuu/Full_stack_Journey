const fs = require("fs");
fs.writeFileSync("./test.txt", "hey this is himanshu");

fs.writeFile("./test.txt", "hey this is himanshuu", (err) => {});

const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.unlinkSync("./contact.txt");

// //non blocking request
console.log("1");
fs.readFile("./test.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log(res);

console.log("2");
const os = require("os");

console.log(os.cpus().length);
