// If your array or array-like object is numeric, that is, if all its elements are numbers, then you can use Math.min.apply
// or Math.max.apply by passing null as the first argument, and your array as the second.

var myArray = [1, 2, 3, 4];
Math.min.apply(null, myArray); // 1

Math.max.apply(null, myArray); // 4

// In ES6 you can use the ... operator to spread an array and take the minimum or maximum element.

var myArray = [1, 2, 3, 4, 99, 20];
var maxValue = Math.max(...myArray); // 99
var minValue = Math.min(...myArray); // 1

// The following example uses a for loop:

var maxValue = myArray[0];
for (var i = 1; i < myArray.length; i++) {
  var currentValue = myArray[i];
  if (currentValue > maxValue) {
    maxValue = currentValue;
  }
}

// The following example uses Array.prototype.reduce() to find the minimum or maximum:

var myArray = [1, 2, 3, 4];
myArray.reduce(function (a, b) {
  return Math.min(a, b);
}); // 1
myArray.reduce(function (a, b) {
  return Math.max(a, b);
}); // 4

// or using arrow functions:

myArray.reduce((a, b) => Math.min(a, b)); // 1
myArray.reduce((a, b) => Math.max(a, b)); // 4

// To generalize the reduce version we'd have to pass in an initial value to cover the empty list case:

function myMax(array) {
  return array.reduce(function (maxSoFar, element) {
    return Math.max(maxSoFar, element);
  }, -Infinity);
}
myMax([3, 5]); // 5
myMax([]); // -Infinity
Math.max.apply(null, []); // -Infinity

// For the details on how to properly use reduce see Reducing values
