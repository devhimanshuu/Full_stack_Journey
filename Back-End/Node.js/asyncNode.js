//in synchronous operations tasks are performed one at a time
// in asynchronous second tasks do not wait to finish first task
let a = 10;
let b = 0;
console.log("start execution.........");

let waitingData = new promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
// console.log("complete execution.........", a + b);

//how to solve this problem.......*************
