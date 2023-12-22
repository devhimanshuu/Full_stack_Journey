// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to
// reduce it to a single value.
// Array Sum
// This method can be used to condense all values of an array into a single value:
[1, 2, 3, 4].reduce(function (a, b) {
  return a + b;
});
// → 10
// Optional second parameter can be passed to reduce(). Its value will be used as the first argument (specified as a)
// for the first call to the callback (specified as function(a, b)).
[2].reduce(function (a, b) {
  console.log(a, b); // prints: 1 2
  return a + b;
}, 1);
// → 3
// Version ≥ 5.1
// Flatten Array of Objects
// The example below shows how to flatten an array of objects into a single object.
var array = [
  {
    key: "one",
    value: 1,
  },
  {
    key: "two",
    value: 2,
  },
  {
    key: "three",
    value: 3,
  },
];

array.reduce(function (obj, current) {
  obj[current.key] = current.value;
  return obj;
}, {});

array.reduce(
  (obj, current) =>
    Object.assign(obj, {
      [current.key]: current.value,
    }),
  {}
);

array.reduce((obj, current) => ({ ...obj, [current.key]: current.value }), {});

// Map Using Reduce
// As another example of using the initial value parameter, consider the task of calling a function on an array of items,
// returning the results in a new array. Since arrays are ordinary values and list concatenation is an ordinary function,
// we can use reduce to accumulate a list, as the following example demonstrates:
function map(list, fn) {
  return list.reduce(function (newList, item) {
    return newList.concat(fn(item));
  }, []);
}
// Usage:
map([1, 2, 3], function (n) {
  return n * n;
});
// → [1, 4, 9]
// Note that this is for illustration (of the initial value parameter) only, use the native map for working with list
// transformations (see Mapping values for the details).
// Version ≥ 5.1
// Find Min or Max Value
// We can use the accumulator to keep track of an array element as well. Here is an example leveraging this to find
// the min value:
var arr = [4, 2, 1, -10, 9];
arr.reduce(function (a, b) {
  return a < b ? a : b;
}, Infinity);

// Find Unique Values
// Here is an example that uses reduce to return the unique numbers to an array. An empty array is passed as the
// second argument and is referenced by prev.

var arr = [1, 2, 1, 5, 9, 5];
arr.reduce((prev, number) => {
  if (prev.indexOf(number) === -1) {
    prev.push(number);
  }
  return prev;
}, []);
// → [1, 2, 5, 9]
