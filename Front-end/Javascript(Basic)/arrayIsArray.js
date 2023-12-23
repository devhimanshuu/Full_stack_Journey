// Array.isArray(obj) returns true if the object is an Array, otherwise false.

Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true
Array.isArray({}); // false
Array.isArray(1); // false

/*In most cases you can instanceof to check if an object is an Array.
[] instanceof Array; // true
{} instanceof Array; // false
Array.isArray has the an advantage over using a instanceof check in that it will still return true even if the
prototype of the array has been changed and will return false if a non-arrays prototype was changed to the Array
prototype.*/

var arr = [];
Object.setPrototypeOf(arr, null);
Array.isArray(arr); // true
arr instanceof Array; // false
