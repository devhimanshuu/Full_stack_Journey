/*Object.seal prevents the addition or removal of properties from an object. Once an object has been sealed its
property descriptors can't be converted to another type. Unlike Object.freeze it does allow properties to be
edited.
Attempts to do this operations on a sealed object will fail silently*/
var obj = {
  foo: "foo",
  bar: function () {
    return "bar";
  },
};
Object.seal(obj);
obj.newFoo = "newFoo";
obj.bar = function () {
  return "foo";
};
obj.newFoo; // undefined
obj.bar(); // 'foo'
// Can't make foo an accessor property
Object.defineProperty(obj, "foo", {
  get: function () {
    return "newFoo";
  },
}); // TypeError
// But you can make it read only
Object.defineProperty(obj, "foo", {
  writable: false,
}); // TypeError
obj.foo = "newFoo";
obj.foo; // 'foo';
// In strict mode these operations will throw a TypeError
(function () {
  "use strict";
  var obj = { foo: "foo" };
  Object.seal(obj);
  obj.newFoo = "newFoo"; // TypeError
})();
