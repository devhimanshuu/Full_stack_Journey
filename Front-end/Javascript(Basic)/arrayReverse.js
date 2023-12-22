// .reverse is used to reverse the order of items inside an array.
//  Example for .reverse:
[1, 2, 3, 4].reverse();
//  Results in:
[4, 3, 2, 1];
//  Note: Please note that .reverse(Array.prototype.reverse) will reverse the array in place. Instead of
//  returning a reversed copy, it will return the same array, reversed.
var arr1 = [11, 22, 33];
var arr2 = arr1.reverse();
console.log(arr2); // [33, 22, 11]
console.log(arr1); // [33, 22, 11]
//  You can also reverse an array 'deeply' by:
function deepReverse(arr) {
  arr.reverse().forEach((elem) => {
    if (Array.isArray(elem)) {
      deepReverse(elem);
    }
  });
  return arr;
}
//  Example for deepReverse:
var arr = [1, 2, 3, [1, 2, 3, ["a", "b", "c"]]];

//  deepReverse(arr);
//  Results in:
arr; // -> [[['c','b','a'], 3, 2, 1], 3, 2, 1]
