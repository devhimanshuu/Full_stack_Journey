console.log("starting up"); // this comes in call stack

setTimeout(() => {
  console.log("2 second log"); // this comes in node API
}, 2000);
setTimeout(() => {
  console.log("0 second log"); // this will continue in call queue
}, 0);

console.log("finishimg up");
