// null is used for representing the intentional absence of an object value and is a primitive value. Unlike undefined,
// it is not a property of the global object.
// It is equal to undefined but not identical to it.
null == undefined; // true
null === undefined; // false
// CAREFUL: The typeof null is 'object'.
typeof null; // 'object';
// To properly check if a value is null, compare it with the strict equality operator
var a = null;
a === null; // true
