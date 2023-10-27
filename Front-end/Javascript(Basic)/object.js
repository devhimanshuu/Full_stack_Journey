var obj = {
  foo: "foo",
  bar: [1, 2, 3],
  baz: {
    foo: "nested-foo",
  },
};
Object.freeze(obj);
// Cannot add new properties
obj.newProperty = true;
// Cannot modify existing values or their descriptors
obj.foo = "not foo";
Object.defineProperty(obj, "foo", {
  writable: true,
});
// Cannot delete existing properties
delete obj.foo;
// Nested objects are not frozen
obj.bar.push(4);
obj.baz.foo = "new foo";
