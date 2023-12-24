// Get the description of a specific property in an object.
var sampleObject = {
  hello: "world",
};
Object.getOwnPropertyDescriptor(sampleObject, "hello");
// Object {value: "world", writable: true, enumerable: true, configurable: true}
