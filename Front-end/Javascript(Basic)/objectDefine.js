// It allows us to define a property in an existing object using a property descriptor.
var obj = {};
Object.defineProperty(obj, "foo", { value: "foo" });
console.log(obj.foo);
// Console output
foo;
// Object.defineProperty can be called with the following options:
Object.defineProperty(obj, "nameOfTheProperty", {
  value: valueOfTheProperty,
  writable: true, // if false, the property is read-only
  configurable: true, // true means the property can be changed later
  enumerable: true, // true means property can be enumerated such as in a for..in loop
});
// Object.defineProperties allows you to define multiple properties at a time.
var obj = {};

Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true,
  },
  property2: {
    value: "Hello",
    writable: false,
  },
});
