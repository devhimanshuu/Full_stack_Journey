// The .
//  sort() method sorts the elements of an array. The default method will sort the array according to string
//  Unicode code points. To sort an array numerically the .
//  sort() method needs to have a
// it.
//  Note: The .
//  sort() method is impure. .
//  compareFunction passed to
//  sort() will sort the array in-place, i.e., instead of creating a
//  sorted copy of the original array, it will re-order the original array and return it.
//  Default Sort
//  Sorts the array in UNICODE order.
[
  "s",
  "t",
  "a",
  34,
  "K",
  "o",
  "v",
  "E",
  "r",
  "2",
  "4",
  "o",
  "W",
  -1,
  "-4",
].sort();
//  Results in:
[-1, "-4", "2", 34, "4", "E", "K", "W", "a", "l", "o", "o", "r", "s", "t", "v"][
  //  Note: The uppercase characters have moved above lowercase. The array is not in alphabetical order, and
  //  numbers are not in numerical order.
  //  Alphabetical Sort
  ("s", "t", "a", "c", "K", "o", "v", "E", "r", "f", "l", "W", "2", "1")
].sort((a, b) => {
  return a.localeCompare(b);
});
//  Results in:
//  ['1', '2', 'a', 'c', 'E', 'f', 'K', 'l', 'o', 'r', 's', 't', 'v', 'W']
//  Note: The above sort will throw an error if any array items are not a string. If you know that the array
//  may contain items that are not strings use the safe version below.
["s", "t", "a", "c", "K", 1, "v", "E", "r", "f", "l", "o", "W"].sort((a, b) => {
  return a.toString().localeCompare(b);
});
(86)[
  //  String sorting by length (longest first)

  ("zebras", "dogs", "elephants", "penguins")
].sort(function (a, b) {
  return b.length - a.length;
});
Results in ["elephants", "penguins", "zebras", "dogs"];

//  String sorting by length (shortest first)

["zebras", "dogs", "elephants", "penguins"].sort(function (a, b) {
  return a.length - b.length;
});
Results in ["dogs", "zebras", "penguins", "elephants"];

//  Numerical Sort (ascending)

[100, 1000, 10, 10000, 1].sort(function (a, b) {
  return a - b;
});
//  Results in:
[1, 10, 100, 1000, 10000][
  //  Numerical Sort (descending)

  (100, 1000, 10, 10000, 1)
].sort(function (a, b) {
  return b - a;
});
//  Results in:
[10000, 1000, 100, 10, 1][
  //  Sorting array by even and odd numbers

  (10, 21, 4, 15, 7, 99, 0, 12)
].sort(function (a, b) {
  return (a & 1) - (b & 1) || a - b;
});
//  Results in:
[0, 4, 10, 12, 7, 15, 21, 99];
//  Date Sort (descending)

var dates = [
  new Date(2007, 11, 10),
  new Date(2014, 2, 21),
  new Date(2009, 6, 11),
  new Date(2016, 7, 23),
];
dates.sort(function (a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
// the date objects can also sort by its difference
// the same way that numbers array is sorting
dates.sort(function (a, b) {
  return b - a;
});
//  Results in:
[
  "Tue Aug 23 2016 00:00:00 GMT-0600 (MDT)",
  "Fri Mar 21 2014 00:00:00 GMT-0600 (MDT)",
  "Sat Jul 11 2009 00:00:00 GMT-0600 (MDT)",
  "Mon Dec 10 2007 00:00:00 GMT-0700 (MST)",
];
