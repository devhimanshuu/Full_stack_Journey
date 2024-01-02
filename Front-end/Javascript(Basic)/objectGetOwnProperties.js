object.getOwnProperties();

//  This function will retrieve both enumerable and non enumerable, own properties from an object. It was also
//  released as a part of ECMAScript 5.

//Ex 1 : Simple data
var x = { a: 10, b: 3 },
  props;
props = Object.getOwnPropertyNames(x);
console.log(props); //["a","b"]

//Ex 2 : Data with enumerable properties in prototype chain
var x = { a: 10, __proto__: { b: 10 } },
  props;
props = Object.getOwnPropertyNames(x);
console.log(props); //["a"]

//Ex 3 : Data with non enumerable properties
var x = { a: 10 },
  props;
Object.defineProperty(x, "b", { value: 5, enumerable: false });
props = Object.getOwnPropertyNames(x);
console.log(props); //["a", "b"]
