// JavaScript has "Array-like Objects", which are Object representations of Arrays with a length property. For example:
var realArray = ["a", "b", "c"];
var arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

// Convert Array-like Objects to Arrays in ES6
const arrayLike = {
  0: "Value 0",
  1: "Value 1",
  length: 2,
};
arrayLike.forEach((value) => {
  /* Do something */
}); // Errors
const realArray = Array.from(arrayLike);
realArray.forEach((value) => {
  /* Do something */
}); // Works
