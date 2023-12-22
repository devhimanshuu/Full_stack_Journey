// The filter() method accepts a test function, and returns a new array containing only the elements of the original
// array that pass the test provided.
// Suppose we want to get all odd number in an array:
var numbers = [5, 32, 43, 4];

var odd = numbers.filter(function (n) {
  return n % 2 !== 0;
});

let odd = numbers.filter((n) => n % 2 !== 0); // can be shortened to (n => n % 2)
// odd would contain the following array: [5, 43].
// It also works on an array of objects:
var people = [
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
  {
    id: 3,
    name: "Peter",
    age: 55,
  },
];

var young = people.filter(function (person) {
  return person.age < 35;
});

let young = people.filter((person) => person.age < 35);
// young would contain the following array:
[
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
];
// You can search in the whole array for a value like this:
var young = people.filter((obj) => {
  var flag = false;
  Object.values(obj).forEach((val) => {
    if (String(val).indexOf("J") > -1) {
      flag = true;
      return;
    }
  });
  if (flag) return obj;
});
// This returns:
[
  {
    id: 1,
    name: "John",
    age: 28,
  },
  {
    id: 2,
    name: "Jane",
    age: 31,
  },
];
