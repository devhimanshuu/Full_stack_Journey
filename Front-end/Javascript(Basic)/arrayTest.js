// The .
// every method tests if all array elements pass a provided predicate test.
// To test all objects for equality, you can use the following code snippets.

[1, 2, 1].every(function (item, i, list) {
  return item === list[0];
}); // false
[1, 1, 1].every(function (item, i, list) {
  return item === list[0];
}); // true

[1, 1, 1].every((item, i, list) => item === list[0]); // true

// The following code snippets test for property equality

let data = [
  { name: "alice", id: 111 },
  { name: "alice", id: 222 },
];
data.every(function (item, i, list) {
  return item === list[0];
}); // false
data.every(function (item, i, list) {
  return item.name === list[0].name;
}); // true

data.every((item, i, list) => item.name === list[0].name); // true
